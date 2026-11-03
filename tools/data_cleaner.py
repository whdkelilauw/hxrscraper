# tools/data_cleaner.py
import os
import re
import pandas as pd

RESULT_DIR = "result"


# =====================================================================
#  TOKENIZER
# =====================================================================

def tokenize(raw):
    tokens = []
    i = 0
    while i < len(raw):
        if raw[i].isspace():
            i += 1
            continue

        if raw[i] == '"':
            j = i + 1
            while j < len(raw) and raw[j] != '"':
                j += 1
            tokens.append(('PHRASE', raw[i + 1:j]))
            i = j + 1
            continue

        if raw[i] == '(':
            tokens.append(('LPAREN', '('))
            i += 1
            continue

        if raw[i] == ')':
            tokens.append(('RPAREN', ')'))
            i += 1
            continue

        if raw[i] == '|':
            tokens.append(('OR', '|'))
            i += 1
            continue

        if raw[i] == '-' and i + 1 < len(raw) and not raw[i + 1].isspace():
            tokens.append(('NOT', '-'))
            i += 1
            continue

        j = i
        while j < len(raw) and raw[j] not in ' \t\n"()|':
            j += 1
        word = raw[i:j]
        if word.upper() == 'OR':
            tokens.append(('OR', 'OR'))
        elif word.upper() == 'AND':
            pass
        else:
            tokens.append(('WORD', word))
        i = j

    return tokens


# =====================================================================
#  RECURSIVE DESCENT PARSER
# =====================================================================
#  Grammar:
#    expr     := or_expr
#    or_expr  := and_expr (('OR' | '|') and_expr)*
#    and_expr := unary+
#    unary    := '-' atom | atom
#    atom     := '(' expr ')' | PHRASE | WORD
#
#  AST nodes:
#    ('TERM', str)          leaf — a word or phrase
#    ('AND',  [children])   all must match
#    ('OR',   [children])   any must match
#    ('NOT',  child)        must NOT match

class Parser:
    def __init__(self, tokens):
        self.tokens = tokens
        self.pos = 0

    def peek(self):
        if self.pos < len(self.tokens):
            return self.tokens[self.pos]
        return None

    def consume(self):
        tok = self.tokens[self.pos]
        self.pos += 1
        return tok

    def parse(self):
        if not self.tokens:
            return None
        node = self.or_expr()
        return node

    def or_expr(self):
        children = [self.and_expr()]
        while self.peek() and self.peek()[0] == 'OR':
            self.consume()
            children.append(self.and_expr())
        if len(children) == 1:
            return children[0]
        return ('OR', children)

    def and_expr(self):
        children = []
        while self.peek() and self.peek()[0] not in ('OR', 'RPAREN'):
            children.append(self.unary())
        if not children:
            return ('TERM', '')
        if len(children) == 1:
            return children[0]
        return ('AND', children)

    def unary(self):
        if self.peek() and self.peek()[0] == 'NOT':
            self.consume()
            return ('NOT', self.atom())
        return self.atom()

    def atom(self):
        tok = self.peek()
        if tok is None:
            return ('TERM', '')

        if tok[0] == 'LPAREN':
            self.consume()
            node = self.or_expr()
            if self.peek() and self.peek()[0] == 'RPAREN':
                self.consume()
            return node

        if tok[0] in ('PHRASE', 'WORD'):
            self.consume()
            return ('TERM', tok[1])

        self.consume()
        return ('TERM', '')


def parse_query(raw):
    tokens = tokenize(raw)
    parser = Parser(tokens)
    return parser.parse()


# =====================================================================
#  DESCRIBE (human-readable)
# =====================================================================

def describe_node(node, parent_type=None):
    if node is None:
        return '(kosong)'
    ntype = node[0]

    if ntype == 'TERM':
        return f'"{node[1]}"'

    if ntype == 'AND':
        parts = [describe_node(c, 'AND') for c in node[1]]
        result = ' AND '.join(parts)
        if parent_type == 'OR':
            return f'({result})'
        return result

    if ntype == 'OR':
        parts = [describe_node(c, 'OR') for c in node[1]]
        result = ' OR '.join(parts)
        if parent_type in ('AND', 'NOT'):
            return f'({result})'
        return result

    if ntype == 'NOT':
        return f'NOT {describe_node(node[1], "NOT")}'

    return '?'


# =====================================================================
#  MATCHER (word-boundary regex)
# =====================================================================

def _term_regex(term):
    words = term.strip().split()
    if not words:
        return None
    if len(words) == 1:
        return r'\b' + re.escape(words[0]) + r'\b'
    return r'\b' + r'\s+'.join(re.escape(w) for w in words) + r'\b'


def match_node(node, text):
    if node is None:
        return True
    ntype = node[0]

    if ntype == 'TERM':
        pat = _term_regex(node[1])
        if pat is None:
            return True
        return bool(re.search(pat, text, re.IGNORECASE))

    if ntype == 'AND':
        return all(match_node(c, text) for c in node[1])

    if ntype == 'OR':
        return any(match_node(c, text) for c in node[1])

    if ntype == 'NOT':
        return not match_node(node[1], text)

    return True


# =====================================================================
#  HELPERS
# =====================================================================

def _collect_terms(node):
    if node is None:
        return []
    if node[0] == 'TERM':
        return [node[1]]
    if node[0] == 'NOT':
        return []
    if node[0] in ('AND', 'OR'):
        out = []
        for c in node[1]:
            out.extend(_collect_terms(c))
        return out
    return []


def _build_text(row, is_article):
    if is_article:
        parts = [
            str(row.get("title", "")),
            str(row.get("full_text", "")),
        ]
        return " ".join(parts)
    return str(row.get("full_text", ""))


# =====================================================================
#  FILE SCANNING
# =====================================================================

def scan_projects():
    if not os.path.exists(RESULT_DIR):
        return []
    return sorted([d for d in os.listdir(RESULT_DIR)
                   if os.path.isdir(os.path.join(RESULT_DIR, d))])


def scan_data_folders(project):
    project_dir = os.path.join(RESULT_DIR, project)
    folders = []
    for root, dirs, files in os.walk(project_dir):
        rel_path = os.path.relpath(root, project_dir)
        if "user" in rel_path.lower():
            continue
        csv_files = [f for f in files if f.endswith(".csv") and "user" not in f.lower()]
        if csv_files:
            folders.append((rel_path, len(csv_files)))
    return sorted(folders)


def scan_csv_files(folder):
    files = [f for f in os.listdir(folder) if f.endswith(".csv") and "user" not in f.lower()]
    return sorted(files)


def prompt_choice(label, options, allow_back=False):
    print()
    for i, opt in enumerate(options, 1):
        if isinstance(opt, tuple):
            print(f"  [{i}] {opt[0]}  ({opt[1]} file)")
        else:
            print(f"  [{i}] {opt}")
    if allow_back:
        print(f"  [<] Kembali")
    print(f"  [0] Keluar")
    while True:
        raw = input(f"\n{label}: ").strip()
        if raw == "<" and allow_back:
            return None
        try:
            choice = int(raw)
            if choice == 0:
                print("\n[OK] Dibatalkan.")
                exit(0)
            if 1 <= choice <= len(options):
                return choice - 1
            print(f"  Pilih antara 0-{len(options)}")
        except (ValueError, EOFError):
            print(f"  Masukkan angka 0-{len(options)}{' atau <' if allow_back else ''}")


# =====================================================================
#  CLEANING LOGIC
# =====================================================================

def clean_csv_by_keywords(input_file, output_file, ast):
    if not os.path.exists(input_file):
        print("[WARNING] File tidak ditemukan:", input_file)
        return None

    print(f"\n[OK] Memuat: {os.path.basename(input_file)}")
    df = pd.read_csv(input_file)
    print(f"[OK] {len(df)} baris dimuat")

    is_article = "article_id_str" in df.columns

    if is_article:
        print(f"[OK] Terdeteksi sebagai data artikel (cek: title + full_text)")
    else:
        if "full_text" not in df.columns:
            print("[WARNING] Kolom 'full_text' tidak ditemukan.")
            return None
        print(f"[OK] Terdeteksi sebagai data sosial media (cek: full_text)")

    print(f"[OK] Query: {describe_node(ast)}")

    mask = df.apply(lambda row: match_node(ast, _build_text(row, is_article)), axis=1)
    clean_df = df.loc[mask]

    removed = len(df) - len(clean_df)
    print(f"[OK] Hasil: {len(clean_df)} baris lolos, {removed} baris dihapus")

    clean_df.to_csv(output_file, index=False, encoding="utf-8")
    print(f"[OK] Tersimpan: {output_file}")

    if "user_id_str" in clean_df.columns:
        return set(clean_df["user_id_str"].astype(str))
    return None


def clean_users_for_keywords(posts_folder, user_ids, keywords_label):
    parent = os.path.dirname(posts_folder)
    users_folder = os.path.join(parent, "users")
    if not os.path.isdir(users_folder):
        return

    csv_files = [f for f in os.listdir(users_folder) if f.endswith(".csv")]
    if not csv_files:
        return

    users_file = csv_files[0]
    users_path = os.path.join(users_folder, users_file)

    users_df = pd.read_csv(users_path)
    if "user_id_str" not in users_df.columns:
        return

    before = len(users_df)
    clean_df = users_df[users_df["user_id_str"].astype(str).isin(user_ids)]
    removed = before - len(clean_df)

    if removed > 0:
        name, ext = os.path.splitext(users_file)
        output_path = os.path.join(users_folder, f"clean_{name}_{keywords_label}{ext}")
        base, ext = os.path.splitext(output_path)
        counter = 1
        while os.path.exists(output_path):
            output_path = f"{base}_{counter}{ext}"
            counter += 1

        clean_df.to_csv(output_path, index=False, encoding="utf-8")
        print(f"\n[OK] {removed} user dihilangkan (tidak termasuk dalam hasil cleaning)")
        print(f"[OK] {len(clean_df)} user tersimpan di: {output_path}")
    else:
        print(f"\n[OK] Semua {before} user masih termasuk dalam hasil cleaning")


# =====================================================================
#  MAIN CLI
# =====================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("  DATA CLEANER (FILTER BY KEYWORDS)")
    print("=" * 60)
    print()
    print("  Operator yang didukung:")
    print('    spasi          = AND (semua harus cocok)')
    print('    | atau OR      = OR  (salah satu cukup)')
    print('    "..."          = exact phrase')
    print('    -kata          = exclude (buang yang mengandung)')
    print('    ( )            = grouping (bisa nested)')
    print()
    print('  Matching: word boundary (kata utuh, bukan substring)')
    print('    "tak" cocok "tak", TIDAK cocok "kontak" atau "bertakziah"')
    print()
    print('  Contoh sederhana:')
    print('    pilkada dprd -korupsi')
    print('  Contoh nested:')
    print('    ((pilkada | "pemilihan kepala daerah") dprd)')
    print('      OR ((pilkada | "pemilihan kepala daerah") (tak | tidak) langsung)')
    print()
    print("  Artikel: cek title + full_text")
    print("  Sosmed:  cek full_text")

    projects = scan_projects()
    if not projects:
        print("[WARNING] Folder result/ kosong atau tidak ditemukan.")
        exit(1)

    step = 1
    while True:
        if step == 1:
            print("\nPilih project:")
            idx = prompt_choice("Project", projects)
            project = projects[idx]

            folders = scan_data_folders(project)
            if not folders:
                print(f"  [!] Tidak ada file CSV di project '{project}'.")
                continue
            step = 2

        if step == 2:
            print(f"\nFolder data di project '{project}':")
            idx = prompt_choice("Folder", folders, allow_back=True)
            if idx is None:
                step = 1
                continue

            rel_path = folders[idx][0]
            folder_path = os.path.join(RESULT_DIR, project, rel_path)
            csv_files = scan_csv_files(folder_path)
            if not csv_files:
                print("  [!] Tidak ada file CSV di folder ini.")
                continue
            step = 3

        if step == 3:
            print(f"\nFile CSV di {rel_path}:")
            idx = prompt_choice("File", csv_files, allow_back=True)
            if idx is None:
                step = 2
                continue

            selected_file = csv_files[idx]
            input_path = os.path.join(folder_path, selected_file)
            step = 4

        if step == 4:
            go_back = False
            while True:
                print("\nMasukkan query keyword:")
                print("Ketik '<' untuk kembali, '0' untuk keluar.")
                raw = input("  Query: ").strip()
                if raw == "<":
                    go_back = True
                    break
                if raw == "0":
                    print("\n[OK] Dibatalkan.")
                    exit(0)
                if not raw:
                    print("  [!] Minimal masukkan 1 keyword.")
                    continue

                ast = parse_query(raw)
                if ast is None:
                    print("  [!] Query tidak valid.")
                    continue

                print(f"\n  Parsed: {describe_node(ast)}")
                confirm = input("  Lanjutkan? (y/n): ").strip().lower()
                if confirm == "y":
                    break

            if go_back:
                step = 3
                continue

            terms = _collect_terms(ast)
            safe_words = [t.replace(" ", "-") for t in terms[:3]]
            keywords_label = "_".join(safe_words) if safe_words else "query"
            name, ext = os.path.splitext(selected_file)
            output_path = os.path.join(folder_path, f"clean_{name}_{keywords_label}{ext}")
            base, ext = os.path.splitext(output_path)
            counter = 1
            while os.path.exists(output_path):
                output_path = f"{base}_{counter}{ext}"
                counter += 1

            user_ids = clean_csv_by_keywords(input_path, output_path, ast)
            if user_ids is not None:
                clean_users_for_keywords(folder_path, user_ids, keywords_label)
            break
