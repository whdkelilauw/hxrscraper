"use strict";
(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([["vendors/css-tokenizer"],{

/***/ "./node_modules/.pnpm/@adguard+css-tokenizer@1.2.0/node_modules/@adguard/css-tokenizer/dist/csstokenizer.mjs":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@adguard+css-tokenizer@1.2.0/node_modules/@adguard/css-tokenizer/dist/csstokenizer.mjs ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenType: () => (/* binding */ TokenType),
/* harmony export */   decodeIdent: () => (/* binding */ decodeIdent),
/* harmony export */   getFormattedTokenName: () => (/* binding */ getFormattedTokenName),
/* harmony export */   hasToken: () => (/* binding */ hasToken),
/* harmony export */   tokenizeExtended: () => (/* binding */ tokenizeExtended)
/* harmony export */ });
/* unused harmony exports CSS_TOKENIZER_VERSION, TokenizerContext, getBaseTokenName, tokenize */
/*
 * CSSTokenizer v1.2.0 (build date: Mon, 03 Feb 2025 15:26:11 GMT)
 * (c) 2025 Adguard Software Ltd.
 * Released under the MIT license
 * https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/css-tokenizer#readme
 */
/**
 * @file Implementation of CSS Syntax Module Level 3 tokenizer definitions (§ 4.2.)
 *
 * @see {@link https://www.w3.org/TR/css-syntax-3/#tokenizer-definitions}
 */
/**
 * Check if code point code is between two code points
 *
 * @param code Code point to check
 * @param min Minimum code point
 * @param max Maximum code point
 * @returns `true` if code point is between `min` and `max`, `false` otherwise
 * @note Boundaries are inclusive
 * @note This function is used instead of `code >= min && code <= max` because TypeScript doesn't allow to compare
 * `number | undefined` with `number` (even though it's perfectly valid in JavaScript)
 */
function isBetween(code, min, max) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore 18048
    return code >= min && code <= max;
}
/**
 * Check if code point code is greater than other code point
 *
 * @param code Code point to check
 * @param min Minimum code point
 * @returns `true` if code point is greater than `min`, `false` otherwise
 * @note This function is used instead of `code > min` because TypeScript doesn't allow to compare
 * `number | undefined` with `number` (even though it's perfectly valid in JavaScript)
 */
function isGreaterThan(code, min) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore 18048
    return code > min;
}
/**
 * Check if code point code is greater than or equal to other code point
 *
 * @param code Code point to check
 * @param min Minimum code point
 * @returns `true` if code point is greater than or equal to `min`, `false` otherwise
 * @note This function is used instead of `code >= min` because TypeScript doesn't allow to compare
 * `number | undefined` with `number` (even though it's perfectly valid in JavaScript)
 */
function isGreaterThanOrEqual(code, min) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore 18048
    return code >= min;
}
/**
 * Check if character code is a digit
 *
 * @param code Character code
 * @returns `true` if character code is a digit, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#digit}
 */
function isDigit(code) {
    // A code point between U+0030 DIGIT ZERO (0) and U+0039 DIGIT NINE (9) inclusive.
    return isBetween(code, 48 /* CodePoint.DigitZero */, 57 /* CodePoint.DigitNine */);
}
/**
 * Check if character code is a hex digit
 *
 * @param code Character code
 * @returns `true` if character code is a hex digit, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#hex-digit}
 */
function isHexDigit(code) {
    // A digit, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and U+0046 LATIN CAPITAL LETTER F (F)
    // inclusive, or a code point between U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f) inclusive.
    return isDigit(code) // 0-9
        || isBetween(code, 65 /* CodePoint.LatinCapitalLetterA */, 70 /* CodePoint.LatinCapitalLetterF */) // A-F
        || isBetween(code, 97 /* CodePoint.LatinSmallLetterA */, 102 /* CodePoint.LatinSmallLetterF */); // a-f
}
/**
 * Check if character code is an uppercase letter
 *
 * @param code Character code
 * @returns `true` if character code is an uppercase letter, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#uppercase-letter}
 */
function isUppercaseLetter(code) {
    // A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A LATIN CAPITAL LETTER Z (Z) inclusive.
    return isBetween(code, 65 /* CodePoint.LatinCapitalLetterA */, 90 /* CodePoint.LatinCapitalLetterZ */); // A-Z
}
/**
 * Check if character code is a lowercase letter
 *
 * @param code Character code
 * @returns `true` if character code is a lowercase letter, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#lowercase-letter}
 */
function isLowercaseLetter(code) {
    // A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN SMALL LETTER Z (z) inclusive.
    return isBetween(code, 97 /* CodePoint.LatinSmallLetterA */, 122 /* CodePoint.LatinSmallLetterZ */); // a-z
}
/**
 * Check if character code is a letter
 *
 * @param code Character code
 * @returns `true` if character code is a letter, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#letter}
 */
function isLetter(code) {
    // An uppercase letter or a lowercase letter.
    return isUppercaseLetter(code) || isLowercaseLetter(code); // A-Z or a-z
}
/**
 * Check if character code is a non-ASCII code point
 *
 * @param code Character code
 * @returns `true` if character code is a non-ASCII code point, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#non-ascii-code-point}
 */
function isNonAsciiCodePoint(code) {
    // A code point with a value equal to or greater than U+0080 <control>.
    return isGreaterThanOrEqual(code, 128 /* CodePoint.ControlCharacterStart */);
}
/**
 * Check if character code is a name code point
 *
 * @param code Character code
 * @returns `true` if character code is a name start code point, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#ident-start-code-point}
 */
function isIdentStartCodePoint(code) {
    // A letter, a non-ASCII code point, or U+005F LOW LINE (_).
    return isLetter(code) || isNonAsciiCodePoint(code) || code === 95 /* CodePoint.LowLine */;
}
/**
 * Check if character code is a name code point
 *
 * @param code Character code
 * @returns `true` if character code is a name code point, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#ident-code-point}
 */
function isIdentCodePoint(code) {
    // An ident-start code point, a digit, or U+002D HYPHEN-MINUS (-).
    return isIdentStartCodePoint(code) || isDigit(code) || code === 45 /* CodePoint.HyphenMinus */;
}
/**
 * Check if character code is a non-printable code point
 *
 * @param code Character code
 * @returns `true` if character code is a non-printable code point, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#non-printable-code-point}
 */
function isNonPrintableCodePoint(code) {
    // A code point between U+0000 NULL and U+0008 BACKSPACE inclusive, or U+000B LINE TABULATION, or a code point
    // between U+000E SHIFT OUT and U+001F INFORMATION SEPARATOR ONE inclusive, or U+007F DELETE.
    return isBetween(code, 0 /* CodePoint.Null */, 8 /* CodePoint.Backspace */)
        || code === 11 /* CodePoint.LineTabulation */
        || isBetween(code, 14 /* CodePoint.ShiftOut */, 31 /* CodePoint.InformationSeparatorOne */)
        || code === 127 /* CodePoint.Delete */;
}
/**
 * Check if character code is a newline
 *
 * @param code Character code
 * @returns `true` if character code is a newline, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#newline}
 */
function isNewline(code) {
    // U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition, as
    // they are converted to U+000A LINE FEED during preprocessing.
    return code === 10 /* CodePoint.LineFeed */ || code === 13 /* CodePoint.CarriageReturn */ || code === 12 /* CodePoint.FormFeed */;
}
/**
 * Check if character code is a whitespace
 *
 * @param code Character code
 * @returns `true` if character code is a whitespace, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#whitespace}
 */
function isWhitespace(code) {
    // A newline, U+0009 CHARACTER TABULATION, or U+0020 SPACE.
    return isNewline(code) || code === 9 /* CodePoint.CharacterTabulation */ || code === 32 /* CodePoint.Space */;
}
/**
 * Check if character code is a leading surrogate
 *
 * @param code Character code
 * @returns `true` if character code is a leading surrogate, `false` otherwise
 * @see {@link https://infra.spec.whatwg.org/#surrogate}
 */
function isLeadingSurrogate(code) {
    return isBetween(code, 55296 /* CodePoint.LeadingSurrogateStart */, 56319 /* CodePoint.LeadingSurrogateEnd */);
}
/**
 * Check if character code is a trailing surrogate
 *
 * @param code Character code
 * @returns `true` if character code is a trailing surrogate, `false` otherwise
 * @see {@link https://infra.spec.whatwg.org/#surrogate}
 */
function isTrailingSurrogate(code) {
    return isBetween(code, 56320 /* CodePoint.TrailingSurrogateStart */, 57343 /* CodePoint.TrailingSurrogateEnd */);
}
/**
 * Check if character code is a surrogate
 *
 * @param code Character code
 * @returns `true` if character code is a surrogate, `false` otherwise
 * @see {@link https://infra.spec.whatwg.org/#surrogate}
 */
function isSurrogate(code) {
    return isLeadingSurrogate(code) || isTrailingSurrogate(code);
}
/**
 * Check if character code is greater than maximum allowed code point
 *
 * @param code Character code
 * @returns `true` if character code is greater than maximum allowed code point, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#maximum-allowed-code-point}
 */
function isGreaterThanMaxAllowedCodePoint(code) {
    return isGreaterThan(code, 1114111 /* CodePoint.MaxCodePoint */);
}
// TODO: Uncomment when needed, maybe useful in the future
// /**
//  * Check if character code is a valid identifier sequence code point
//  *
//  * @param code Character code
//  * @returns `true` if character code is a valid identifier sequence code point, `false` otherwise
//  * @see {@link https://www.w3.org/TR/css-syntax-3/#ident-sequence}
//  * @note The part of an <at-keyword-token> after the "@", the part of a <hash-token> (with the "id" type flag) after
//  * the "#", the part of a <function-token> before the "(", and the unit of a <dimension-token> are all ident
//  * sequences.
//  */
// export function isIdentSequence(code: number): boolean {
//     // A sequence of code points that has the same syntax as an <ident-token>.
// eslint-disable-next-line max-len
//     return isIdentStartCodePoint(code) || isDigit(code) || code === CodePoint.HyphenMinus || code === CodePoint.LowLine;
// }
/**
 * Check if character code is a BOM (Byte Order Mark)
 *
 * @param code Character code to check
 * @returns `true` if character code is a BOM, `false` otherwise
 */
function isBOM(code) {
    return code === 65279 /* CodePoint.Utf16BeBom */ || code === 65534 /* CodePoint.Utf16LeBom */;
}
/**
 * § 4.3.8. Check if two code points are a valid escape
 *
 * @param a First code point
 * @param b Second code point
 * @returns `true` if the code points are a valid escape, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#starts-with-a-valid-escape}
 * @note This algorithm will not consume any additional code point.
 */
const checkForValidEscape = (a, b) => {
    // If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
    if (a !== 92 /* CodePoint.ReverseSolidus */) {
        return false;
    }
    // Otherwise, if the second code point is a newline, return false.
    // Otherwise, return true.
    return !isNewline(b);
};
/**
 * § 4.3.9. Check if three code points would start an ident sequence
 *
 * @param a First code point
 * @param b Second code point
 * @param c Third code point
 * @returns `true` if the next code points would start an identifier, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#would-start-an-identifier}
 * @note This algorithm will not consume any additional code points.
 */
const checkForIdentStart = (a, b, c) => {
    // Look at the first code point:
    // U+002D HYPHEN-MINUS
    if (a === 45 /* CodePoint.HyphenMinus */) {
        // If the second code point is an ident-start code point or a U+002D HYPHEN-MINUS,
        // or the second and third code points are a valid escape, return true. Otherwise, return false.
        return isIdentStartCodePoint(b) || b === 45 /* CodePoint.HyphenMinus */ || checkForValidEscape(b, c);
    }
    // ident-start code point
    if (isIdentStartCodePoint(a)) {
        // Return true.
        return true;
    }
    // U+005C REVERSE SOLIDUS (\)
    if (a === 92 /* CodePoint.ReverseSolidus */) {
        // If the first and second code points are a valid escape, return true. Otherwise, return false.
        return checkForValidEscape(a, b);
    }
    // anything else
    // Return false.
    return false;
};
/**
 * § 4.3.10. Check if three code points would start a number
 *
 * @param a First code point
 * @param b Second code point
 * @param c Third code point
 * @returns `true` if the next code points would start a number, `false` otherwise
 * @see {@link https://www.w3.org/TR/css-syntax-3/#starts-with-a-number}
 * @note This algorithm will not consume any additional code points.
 */
const checkForNumberStart = (a, b, c) => {
    // Look at the first code point:
    // U+002B PLUS SIGN (+)
    // U+002D HYPHEN-MINUS (-)
    if (a === 43 /* CodePoint.PlusSign */ || a === 45 /* CodePoint.HyphenMinus */) {
        // If the second code point is a digit, return true.
        if (isDigit(b)) {
            return true;
        }
        // Otherwise, if the second code point is a U+002E FULL STOP (.) and the third code point is a digit, return
        // true.
        // Otherwise, return false.
        return b === 46 /* CodePoint.FullStop */ && isDigit(c);
    }
    // U+002E FULL STOP (.)
    if (a === 46 /* CodePoint.FullStop */) {
        // If the second code point is a digit, return true. Otherwise, return false.
        return isDigit(b);
    }
    // digit
    // Return true.
    // anything else
    // Return false.
    return isDigit(a);
};

/* eslint-disable no-bitwise */
/**
 * @file Hashing functions based on the djb2 algorithm
 *
 * @see {@link http://www.cse.yorku.ca/~oz/hash.html}
 * @see {@link https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765}
 * @todo If we need it, we can create case-sensitive versions of these functions
 */
/**
 * Make a unique hash from the given array of code points
 *
 * @param arr Reference to the array of code points
 * @param start Start index
 * @param end End index
 * @returns Hash of the given array of code points
 * @note Case-insensitive (we use it just for function names which are case-insensitive)
 */
function getCodePointsArrayHash(arr, start, end) {
    let hash = 5381;
    for (let i = start; i < end; i += 1) {
        hash = hash * 33 ^ (arr[i] | 0x20);
    }
    return hash >>> 0;
}

/**
 * @file Tokenizer context
 */
/**
 * Context of the tokenizer which is shared between all the functions
 */
class TokenizerContext {
    /**
     * Cached source length
     */
    length;
    /**
     * Reference to the `onToken` callback function
     */
    onToken;
    /**
     * Reference to the `onError` callback function
     */
    onError;
    /**
     * Unicode code points of the source string
     *
     * @note The last code point is always EOF ("imaginary" code point)
     * @note Using `!` is safe here because the `preprocess` function always sets the codes in the constructor
     * @note We need a signed 32-bit integer array, because the code points are 21-bit integers + imaginary code points
     * are negative numbers
     */
    codes;
    /**
     * Actual position in the source string
     */
    cursor;
    /**
     * Custom function handlers to handle special functions, like Extended CSS's pseudo selectors
     */
    customFunctionHandlers;
    /**
     * Constructs a new tokenizer context instance
     *
     * @param source Source string
     * @param onToken Callback function to call when a token is found
     * @param onError Callback function to call when a parsing error occurs
     * @param functionHandlers Custom function handlers to handle special functions, like Extended CSS's pseudo
     * selectors
     */
    constructor(source, onToken, onError, functionHandlers) {
        // Set the source and offset
        // this.source = source;
        this.length = source.length;
        this.preprocess(source);
        // Ignore BOM character if present
        this.cursor = isBOM(this.codes[0]) ? 1 : 0;
        // Set the callback functions
        this.onToken = onToken;
        this.onError = onError;
        // Register custom function handlers, if any
        if (functionHandlers) {
            this.customFunctionHandlers = new Map();
            for (const [hash, handler] of functionHandlers) {
                this.customFunctionHandlers.set(hash, handler);
            }
        }
    }
    /**
     * § 3.3. Preprocessing the input stream
     *
     * @param source Source string to preprocess
     * @see {@link https://www.w3.org/TR/css-syntax-3/#input-preprocessing}
     */
    preprocess(source) {
        const len = source.length;
        this.codes = new Int32Array(len + 1); // add +1 slot for the EOF "code point"
        // TODO: Uncomment when needed - actually, we don't convert the CRLF to LF to keep the original source positions
        // // The input stream consists of the filtered code points pushed into it as the input byte stream is decoded.
        // for (let i = 0; i < len; i += 1) {
        //     const code = source.charCodeAt(i);
        //     // To filter code points from a stream of (unfiltered) code points input:
        //     switch (code) {
        //         // Replace any U+000D CARRIAGE RETURN (CR) code points, U+000C FORM FEED (FF) code points, or pairs
        //         // of U+000D CARRIAGE RETURN (CR) followed by U+000A LINE FEED (LF) in input by a single
        //         // U+000A LINE FEED (LF) code point.
        //         case CodePoint.CarriageReturn:
        //             if (source.charCodeAt(i + 1) === CodePoint.LineFeed) {
        //                 this.codes[i] = CodePoint.LineFeed;
        //                 // Skip the next code point
        //                 i += 1;
        //                 break;
        //             }
        //             this.codes[i] = CodePoint.LineFeed;
        //             break;
        //         case CodePoint.FormFeed:
        //             this.codes[i] = CodePoint.LineFeed;
        //             break;
        //         // Replace any U+0000 NULL or surrogate code points in input with U+FFFD REPLACEMENT CHARACTER (�).
        //         case CodePoint.Null:
        //             this.codes[i] = CodePoint.ReplacementCharacter;
        //             break;
        //         default:
        //             this.codes[i] = code;
        //             break;
        //     }
        // }
        // Everything what we need here is to transform the ASCII source to Unicode code points as fast as possible
        for (let i = 0; i < len; i += 1) {
            this.codes[i] = source.charCodeAt(i);
        }
        // Set last code point to EOF (this way we can use it in switch-case statements, which are faster than if-else
        // or classic lookup tables)
        // See https://stackoverflow.com/a/37955539
        this.codes[len] = -1 /* ImaginaryCodePoint.Eof */;
    }
    /**
     * Gets the corresponding custom function handler for the given function name hash
     *
     * @param hash Function name hash
     * @returns Corresponding custom function handler or `undefined` if not found
     */
    getFunctionHandler(hash) {
        return this.customFunctionHandlers?.get(hash);
    }
    /**
     * Checks if the custom function handler is registered for the given function name hash
     *
     * @param hash Custom function name hash
     * @returns `true` if the custom function handler is registered, `false` otherwise
     */
    hasFunctionHandler(hash) {
        return this.customFunctionHandlers?.has(hash) ?? false;
    }
    /**
     * Returns the current offset
     *
     * @returns Current offset
     */
    get offset() {
        return this.cursor;
    }
    /**
     * Returns the code point at the current offset
     *
     * @returns Code point at the current offset
     */
    get code() {
        return this.codes[this.offset];
    }
    /**
     * Returns the code point at the previous offset
     *
     * @returns Code point at the previous offset or `undefined` if the offset is out of bounds
     */
    get prevCode() {
        return this.codes[this.offset - 1];
    }
    /**
     * Returns the code point at the next offset
     *
     * @returns Code point at the next offset or `undefined` if the offset is out of bounds
     */
    get nextCode() {
        return this.codes[this.offset + 1];
    }
    /**
     * Returns the code point at the given relative offset
     *
     * @param relativeOffset Relative offset
     * @returns Code point at the relative offset or `undefined` if the offset is out of bounds
     * @note Relative offset compared to the current offset. 1 means the next code point, -1 means the previous code
     * point, 2 means the code point after the next code point, etc.
     */
    getRelativeCode(relativeOffset) {
        return this.codes[this.offset + relativeOffset];
    }
    /**
     * Check if the current offset is at the end of the source (or past it)
     *
     * @returns `true` if the current offset is at the end of the source, `false` otherwise
     */
    isEof() {
        return this.offset >= this.length;
    }
    /**
     * Stops the tokenizer by moving the cursor to the end of the input.
     *
     * @note This method is defined as an arrow function to ensure it retains the correct `this` context.
     * Since `stop` is always passed to the `onToken` callback, which is invoked frequently during tokenization,
     * avoiding unnecessary overhead is crucial.
     * Using an arrow function provides better performance compared to binding the method in the constructor
     * or at the call site.
     */
    stop = () => {
        this.cursor = this.length;
    };
    /**
     * Check if the next code point is EOF
     *
     * @returns `true` if the next code point is EOF, `false` otherwise
     */
    isNextEof() {
        return this.cursor + 1 === this.length;
    }
    /**
     * Check if the current offset is less than or equal to the end of the source
     *
     * @returns `true` if the current offset is less than or equal to the end of the source, `false` otherwise
     */
    isLessThanEqualToEof() {
        return this.offset <= this.length;
    }
    /**
     * Consumes the given number of code points
     *
     * @param n Number of code points to consume (default: 1)
     * @note Negative numbers are allowed (they will move the cursor backwards)
     * @note No protection against out of bounds for performance reasons
     */
    consumeCodePoint(n = 1) {
        this.cursor += n;
    }
    /**
     * Finds the next non-whitespace code point and returns it
     *
     * @returns Next non-whitespace code point or EOF imaginary code point if the rest of the source is whitespace
     */
    getNextNonWsCode() {
        let i = this.cursor;
        while (i < this.length && isWhitespace(this.codes[i])) {
            i += 1;
        }
        return this.codes[i];
    }
    /**
     * Consumes the whitespace code points
     */
    consumeWhitespace() {
        while (this.code && isWhitespace(this.code)) {
            this.consumeCodePoint();
        }
    }
    /**
     * Consumes a single whitespace code point, if the current code point is a whitespace
     */
    consumeSingleWhitespace() {
        if (isWhitespace(this.code)) {
            // special case: consume CRLF as a single whitespace
            this.cursor += this.code === 13 /* CodePoint.CarriageReturn */ && this.nextCode === 10 /* CodePoint.LineFeed */ ? 2 : 1;
        }
    }
    /**
     * Consumes everything until the end of the comment (or the end of the source)
     */
    consumeUntilCommentEnd() {
        // search for the end of the comment or reach the end of the source
        while (this.cursor < this.length) {
            // check if the current code point is a *
            if (this.code === 42 /* CodePoint.Asterisk */ && this.nextCode === 47 /* CodePoint.Solidus */) {
                // consume '*/' and exit the loop
                this.cursor += 2;
                break;
            }
            // consume the current code point, it seems it's a part of the comment
            this.cursor += 1;
        }
    }
    /**
     * Consumes a single-character token (trivial token) and reports it via the `onToken` callback
     *
     * @param tokenType Token type to report
     */
    consumeTrivialToken(tokenType) {
        // eslint-disable-next-line no-plusplus
        this.onToken(tokenType, this.cursor, ++this.cursor, undefined, this.stop);
    }
    /**
     * Calculates the hash of the fragment from the given start offset to the current offset. This is useful to
     * fast-check function names.
     *
     * @param start Start offset
     * @returns Calculated hash
     */
    getHashFrom(start) {
        return getCodePointsArrayHash(this.codes, start, this.cursor);
    }
}

/**
 * @file Possible CSS token types, as defined in the CSS Syntax Module Level 3.
 *
 * ! Strictly follows the spec.
 *
 * @see {@link https://www.w3.org/TR/css-syntax-3/#tokenization}
 */
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Eof"] = 0] = "Eof";
    TokenType[TokenType["Ident"] = 1] = "Ident";
    TokenType[TokenType["Function"] = 2] = "Function";
    TokenType[TokenType["AtKeyword"] = 3] = "AtKeyword";
    TokenType[TokenType["Hash"] = 4] = "Hash";
    TokenType[TokenType["String"] = 5] = "String";
    TokenType[TokenType["BadString"] = 6] = "BadString";
    TokenType[TokenType["Url"] = 7] = "Url";
    TokenType[TokenType["BadUrl"] = 8] = "BadUrl";
    TokenType[TokenType["Delim"] = 9] = "Delim";
    TokenType[TokenType["Number"] = 10] = "Number";
    TokenType[TokenType["Percentage"] = 11] = "Percentage";
    TokenType[TokenType["Dimension"] = 12] = "Dimension";
    TokenType[TokenType["Whitespace"] = 13] = "Whitespace";
    TokenType[TokenType["Cdo"] = 14] = "Cdo";
    TokenType[TokenType["Cdc"] = 15] = "Cdc";
    TokenType[TokenType["Colon"] = 16] = "Colon";
    TokenType[TokenType["Semicolon"] = 17] = "Semicolon";
    TokenType[TokenType["Comma"] = 18] = "Comma";
    TokenType[TokenType["OpenSquareBracket"] = 19] = "OpenSquareBracket";
    TokenType[TokenType["CloseSquareBracket"] = 20] = "CloseSquareBracket";
    TokenType[TokenType["OpenParenthesis"] = 21] = "OpenParenthesis";
    TokenType[TokenType["CloseParenthesis"] = 22] = "CloseParenthesis";
    TokenType[TokenType["OpenCurlyBracket"] = 23] = "OpenCurlyBracket";
    TokenType[TokenType["CloseCurlyBracket"] = 24] = "CloseCurlyBracket";
    TokenType[TokenType["Comment"] = 25] = "Comment";
})(TokenType || (TokenType = {}));

/**
 * @file CSS token names
 */
const UNKNOWN_TOKEN_NAME = 'unknown';
/**
 * Pairs of token types and their base names
 */
const TOKEN_NAMES = Object.freeze({
    [TokenType.Eof]: 'eof',
    [TokenType.Ident]: 'ident',
    [TokenType.Function]: 'function',
    [TokenType.AtKeyword]: 'at-keyword',
    [TokenType.Hash]: 'hash',
    [TokenType.String]: 'string',
    [TokenType.BadString]: 'bad-string',
    [TokenType.Url]: 'url',
    [TokenType.BadUrl]: 'bad-url',
    [TokenType.Delim]: 'delim',
    [TokenType.Number]: 'number',
    [TokenType.Percentage]: 'percentage',
    [TokenType.Dimension]: 'dimension',
    [TokenType.Whitespace]: 'whitespace',
    [TokenType.Cdo]: 'CDO',
    [TokenType.Cdc]: 'CDC',
    [TokenType.Colon]: 'colon',
    [TokenType.Semicolon]: 'semicolon',
    [TokenType.Comma]: 'comma',
    [TokenType.OpenSquareBracket]: '[',
    [TokenType.CloseSquareBracket]: ']',
    [TokenType.OpenParenthesis]: '(',
    [TokenType.CloseParenthesis]: ')',
    [TokenType.OpenCurlyBracket]: '{',
    [TokenType.CloseCurlyBracket]: '}',
    [TokenType.Comment]: 'comment',
});
/**
 * Get base token name by token type
 *
 * @param type Token type
 *
 * @example
 * ```ts
 * getBaseTokenName(TokenType.Ident); // 'ident'
 * getBaseTokenName(-1); // 'unknown'
 * ```
 *
 * @returns Base token name or 'unknown' if token type is unknown
 */
const getBaseTokenName = (type) => {
    return TOKEN_NAMES[type] ?? UNKNOWN_TOKEN_NAME;
};
/**
 * Get formatted token name by token type
 *
 * @param type Token type
 *
 * @example
 * ```ts
 * getFormattedTokenName(TokenType.Ident); // '<ident-token>'
 * getFormattedTokenName(-1); // '<unknown-token>'
 * ```
 *
 * @returns Formatted token name or `'<unknown-token>'` if token type is unknown
 */
const getFormattedTokenName = (type) => {
    return `<${getBaseTokenName(type)}-token>`;
};

/**
 * @file Tokenizing logic for escaped code points
 */
const MAX_HEX_DIGITS = 6;
/**
 * § 4.3.7. Consume an escaped code point
 *
 * @param context Reference to the tokenizer context instance
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-escaped-code-point}
 */
const consumeEscapedCodePoint = (context) => {
    // It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and that the next input code point has
    // already been verified to be part of a valid escape.
    // Consume the next input code point.
    context.consumeCodePoint();
    // hex digit
    if (isHexDigit(context.code)) {
        // Consume as many hex digits as possible, but no more than 5. Note that this means 1-6 hex digits have been
        // consumed in total. If the next input code point is whitespace, consume it as well. Interpret the hex digits
        // as a hexadecimal number.
        let consumedHexDigits = 0;
        while (isHexDigit(context.code) && consumedHexDigits <= MAX_HEX_DIGITS) {
            context.consumeCodePoint();
            consumedHexDigits += 1;
        }
        // If the next input code point is whitespace, consume it as well.
        context.consumeSingleWhitespace();
        // If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point,
        // return U+FFFD REPLACEMENT CHARACTER (�).
        // Otherwise, return the code point with that value.
        // TODO: Implement surrogate check
    }
    // EOF
    // This is a parse error. Return U+FFFD REPLACEMENT CHARACTER (�).
    if (context.isEof()) {
        context.onError("Unexpected end of file while parsing escaped code point." /* ErrorMessage.UnexpectedEofInEscaped */, context.offset, context.offset);
    }
    // anything else
    // Return the current input code point.
};

/**
 * @file Tokenizing logic for ident sequences
 */
/**
 * § 4.3.11. Consume an ident sequence
 *
 * Consume an ident sequence from a stream of code points. It returns a string containing the largest name that can be
 * formed from adjacent code points in the stream, starting from the first.
 *
 * @param context Reference to the tokenizer context instance
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-name}
 * @note This algorithm does not do the verification of the first few code points that are necessary to ensure the
 * returned code points would constitute an <ident-token>. If that is the intended use, ensure that the stream
 * starts with an ident sequence before calling this algorithm.
 */
const consumeIndentSequence = (context) => {
    // Let result initially be an empty string.
    // Repeatedly consume the next input code point from the stream:
    while (!context.isEof()) {
        // ident code point
        if (isIdentCodePoint(context.code)) {
            // Append the code point to result.
            context.consumeCodePoint();
            continue;
        }
        // the stream starts with a valid escape
        if (checkForValidEscape(context.code, context.nextCode)) {
            // Consume an escaped code point. Append the returned code point to result.
            context.consumeCodePoint();
            consumeEscapedCodePoint(context);
            continue;
        }
        // anything else
        // Reconsume the current input code point. Return result.
        return;
    }
};

/**
 * @file Tokenizing logic for URLs
 */
/**
 * § 4.3.14. Consume the remnants of a bad url
 *
 * Consume the remnants of a bad url from a stream of code points, "cleaning up" after the tokenizer realizes that it’s
 * in the middle of a <bad-url-token> rather than a <url-token>. It returns nothing; its sole use is to consume enough
 * of the input stream to reach a recovery point where normal tokenizing can resume.
 *
 * @param context Tokenizer context
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-remnants-of-bad-url}
 */
function consumeBadUrlRemnants(context) {
    // Repeatedly consume the next input code point from the stream:
    // eslint-disable-next-line no-constant-condition
    for (; !context.isEof(); context.consumeCodePoint()) {
        // U+0029 RIGHT PARENTHESIS ())
        if (context.code === 41 /* CodePoint.RightParenthesis */) {
            // Don’t forget to consume it.
            context.consumeCodePoint();
            return;
        }
        // the input stream starts with a valid escape
        if (checkForValidEscape(context.getRelativeCode(1), context.getRelativeCode(2))) {
            // Consume an escaped code point. This allows an escaped right parenthesis ("\)") to be encountered
            // without ending the <bad-url-token>. This is otherwise identical to the "anything else" clause.
            context.consumeCodePoint();
            consumeEscapedCodePoint(context);
            continue;
        }
        // anything else
        // Do nothing.
    }
}
/**
 * Helper function for consuming a bad url token.
 *
 * @param context Tokenizer context
 * @param start Token start offset
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-remnants-of-bad-url}
 */
function consumeBadUrlToken(context, start) {
    consumeBadUrlRemnants(context);
    context.onToken(TokenType.BadUrl, start, context.offset, undefined, context.stop);
}
/**
 * § 4.3.6. Consume a url token
 *
 * Consume a url token from a stream of code points. It returns either a <url-token> or a <bad-url-token>.
 *
 * @param context Reference to the tokenizer context instance
 * @param start Token start offset
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-url-token}
 * @note This algorithm assumes that the initial "url(" has already been consumed. This algorithm also assumes that
 * it’s being called to consume an "unquoted" value, like url(foo). A quoted value, like url("foo"), is parsed as a
 * <function-token>. Consume an ident-like token automatically handles this distinction; this algorithm shouldn’t be
 * called directly otherwise.
 */
const consumeUrlToken = (context, start) => {
    // Initially create a <url-token> with its value set to the empty string.
    // Consume as much whitespace as possible.
    while (isWhitespace(context.code)) {
        context.consumeCodePoint();
    }
    // Repeatedly consume the next input code point from the stream:
    // eslint-disable-next-line no-constant-condition
    while (context.offset <= context.length) {
        // TODO: Use switch-case here, but need to resolve non-printable code points first
        // U+0029 RIGHT PARENTHESIS ())
        if (context.code === 41 /* CodePoint.RightParenthesis */) {
            // Consume it.
            context.consumeCodePoint();
            // Return the <url-token>.
            context.onToken(TokenType.Url, start, context.offset, undefined, context.stop);
            return;
        }
        // EOF
        if (context.isEof()) {
            // This is a parse error. Return the <url-token>.
            context.onToken(TokenType.Url, start, context.offset, undefined, context.stop);
            context.onError("Unexpected end of file while parsing URL." /* ErrorMessage.UnexpectedEofInUrl */, start, context.offset);
            return;
        }
        // whitespace
        if (isWhitespace(context.code)) {
            // Consume as much whitespace as possible. If the next input code point is U+0029 RIGHT PARENTHESIS ())
            // or EOF, consume it and return the <url-token> (if EOF was encountered, this is a parse error);
            // otherwise, consume the remnants of a bad url, create a <bad-url-token>, and return it.
            while (isWhitespace(context.code)) {
                context.consumeCodePoint();
            }
            if (context.code === 41 /* CodePoint.RightParenthesis */ || context.isEof()) {
                context.consumeCodePoint();
                context.onToken(TokenType.Url, start, context.offset, undefined, context.stop);
                context.onError("Unexpected end of file while parsing URL." /* ErrorMessage.UnexpectedEofInUrl */, start, context.offset);
                return;
            }
            context.onError("Unexpected character in URL." /* ErrorMessage.UnexpectedCharInUrl */, start, context.offset);
            consumeBadUrlToken(context, start);
            return;
        }
        // U+0022 QUOTATION MARK (")
        // U+0027 APOSTROPHE (')
        // U+0028 LEFT PARENTHESIS (()
        // non-printable code point
        if (context.code === 34 /* CodePoint.QuotationMark */
            || context.code === 39 /* CodePoint.Apostrophe */
            || context.code === 40 /* CodePoint.LeftParenthesis */
            || isNonPrintableCodePoint(context.code)) {
            // This is a parse error. Consume the remnants of a bad url, create a <bad-url-token>, and return it.
            context.onError("Unexpected character in URL." /* ErrorMessage.UnexpectedCharInUrl */, start, context.offset);
            consumeBadUrlToken(context, start);
            return;
        }
        // U+005C REVERSE SOLIDUS (\)
        if (context.code === 92 /* CodePoint.ReverseSolidus */) {
            // If the stream starts with a valid escape, consume an escaped code point and append the returned code
            // point to the <url-token>’s value.
            if (checkForValidEscape(context.code, context.nextCode)) {
                // Consume reversed solidus, then consume escaped code point
                context.consumeCodePoint();
                consumeEscapedCodePoint(context);
                continue;
            }
            // Otherwise, this is a parse error. Consume the remnants of a bad url, create a <bad-url-token>, and
            // return it.
            context.onError("Unexpected character in URL." /* ErrorMessage.UnexpectedCharInUrl */, start, context.offset);
            consumeBadUrlToken(context, start);
            return;
        }
        // anything else
        // Append the current input code point to the <url-token>’s value.
        context.consumeCodePoint();
    }
};

/**
 * @file Tokenizing logic for ident-like tokens
 */
const URL_FUNCTION_HASH = 193422222; // getStringHash('url')
/**
 * § 4.3.4. Consume an ident-like token
 *
 * Consume an ident-like token from a stream of code points. It returns an <ident-token>, <function-token>, <url-token>,
 * or <bad-url-token>.
 *
 * @param context Reference to the tokenizer context instance
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-an-ident-like-token}
 * @note We extended the algorithm to allow custom function handlers, but the tokenizer still strictly follows the spec.
 */
const consumeIdentLikeToken = (context) => {
    // Consume an ident sequence, and let string be the result.
    const start = context.offset;
    consumeIndentSequence(context);
    // If the ident sequence is followed by U+0028 LEFT PARENTHESIS ((), consume it as a function:
    if (context.code === 40 /* CodePoint.LeftParenthesis */) {
        // First, store the function’s name hash
        const fnHash = context.getHashFrom(start);
        // Consume the opening parenthesis.
        context.consumeCodePoint();
        // URL
        if (fnHash === URL_FUNCTION_HASH) {
            // While the next two input code points are whitespace, consume the next input code point
            // If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('), or
            // whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('), then create a <function-token>
            // with its value set to string and return it.
            // ! Different from the spec, but technically it is enough to check the next non-whitespace code point
            const nextNonWsCode = context.getNextNonWsCode();
            if (nextNonWsCode === 34 /* CodePoint.QuotationMark */ || nextNonWsCode === 39 /* CodePoint.Apostrophe */) {
                context.onToken(TokenType.Function, start, context.offset, undefined, context.stop);
                return;
            }
            // Otherwise, consume a url token, and return it.
            consumeUrlToken(context, start);
            return;
        }
        // This is a good time to call custom function handlers, if any.
        // ! This is not part of the spec, but it's a good way to extend the tokenizer and if you didn't added any
        // ! custom function handler, it will not affect the tokenizer in any way, it still strictly follows the spec.
        // For performance reasons, we use `has` and `get` separately to avoid declaring a new variable every time here
        if (context.hasFunctionHandler(fnHash)) {
            // Return the <function-token>.
            context.onToken(TokenType.Function, start, context.offset, undefined, context.stop);
            // Consume the function body
            // It's safe to call the handler directly because we already checked if it exists
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            context.getFunctionHandler(fnHash)(context);
            return;
        }
        // Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it. Create a <function-token>
        // with its value set to string and return it.
        context.onToken(TokenType.Function, start, context.offset, undefined, context.stop);
        return;
    }
    // Otherwise, create an <ident-token> with its value set to string and return it.
    context.onToken(TokenType.Ident, start, context.offset, undefined, context.stop);
};

/**
 * @file Tokenizing logic for numbers
 */
/**
 * § 4.3.12. Consume a number
 *
 * Consume a number from a stream of code points. It returns a numeric value, and a type which is either "integer" or
 * "number".
 *
 * @param context Reference to the tokenizer context instance
 * @note This algorithm does not do the verification of the first few code points that are necessary to ensure a number
 * can be obtained from the stream. Ensure that the stream starts with a number before calling this algorithm.
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-number}
 * @todo Uncomment type/repr handling if needed - currently we don't need them, and they're not used for performance
 * reasons
 */
const consumeNumber = (context) => {
    // Execute the following steps in order:
    // 1. Initially set type to "integer". Let repr be the empty string.
    // TODO: Uncomment type/repr handling if needed
    // let type = NumberType.Integer;
    // const repr: string[] = [];
    // 2. If the next input code point is U+002B PLUS SIGN (+) or U+002D HYPHEN-MINUS (-), consume it and append it
    // to repr.
    if (context.code === 43 /* CodePoint.PlusSign */ || context.code === 45 /* CodePoint.HyphenMinus */) {
        context.consumeCodePoint();
        // TODO: Append to repr
    }
    // 3. While the next input code point is a digit, consume it and append it to repr.
    while (isDigit(context.code)) {
        context.consumeCodePoint();
        // TODO: Append to repr
    }
    // 4. If the next 2 input code points are U+002E FULL STOP (.) followed by a digit, then:
    if (context.code === 46 /* CodePoint.FullStop */ && isDigit(context.nextCode)) {
        // 1. Consume them.
        context.consumeCodePoint(2);
        // 2.Append them to repr
        // TODO: Append to repr
        // 3. Set type to "number".
        // type = NumberType.Number;
        // 4. While the next input code point is a digit, consume it and append it to repr.
        while (isDigit(context.code)) {
            context.consumeCodePoint();
            // TODO: Append to repr
        }
    }
    // 5. If the next 2 or 3 input code points are U+0045 LATIN CAPITAL LETTER E (E) or U+0065 LATIN SMALL LETTER E
    // (e) ...
    if ((context.code === 69 /* CodePoint.LatinCapitalLetterE */ || context.code === 101 /* CodePoint.LatinSmallLetterE */)) {
        // ... optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+)
        // Note: we split this into two if statements to avoid declaring a shift variable for the sign
        if ((context.nextCode === 45 /* CodePoint.HyphenMinus */ || context.nextCode === 43 /* CodePoint.PlusSign */)
            && isDigit(context.getRelativeCode(2))) {
            // 1. Consume them.
            context.consumeCodePoint(3); // e, sign, digit
            // 2. Append them to repr.
            // TODO: Append to repr
            // 3. Set type to "number".
            // TODO: Set type
            // 4. While the next input code point is a digit, consume it and append it to repr.
            while (isDigit(context.code)) {
                context.consumeCodePoint();
                // TODO: Append to repr
            }
        }
        else if (isDigit(context.nextCode)) {
            // ... followed by a digit, then:
            // 1. Consume them.
            context.consumeCodePoint(2); // e, digit
            // 2. Append them to repr.
            // TODO: Append to repr
            // 3. Set type to "number".
            // TODO: Set type
            // 4. While the next input code point is a digit, consume it and append it to repr.
            while (isDigit(context.code)) {
                context.consumeCodePoint();
                // TODO: Append to repr
            }
        }
    }
    // 6. Convert repr to a number, and set the value to the returned value.
    // TODO: Convert repr to a number
    // const value = Number(repr.join(''));
    // 7. Return value and type.
    // TODO: Uncomment type handling if needed
    // return [value, type];
};

/**
 * @file Tokenizing logic for numeric tokens
 */
/**
 * § 4.3.3. Consume a numeric token
 *
 * Consume a numeric token from a stream of code points. It returns either a <number-token>, <percentage-token>, or
 * <dimension-token>.
 *
 * @param context Reference to the tokenizer context instance
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-numeric-token}
 */
const consumeNumericToken = (context) => {
    const start = context.offset;
    // Consume a number and let number be the result.
    consumeNumber(context);
    // If the next 3 input code points would start an ident sequence, then:
    if (checkForIdentStart(context.code, context.nextCode, context.getRelativeCode(2))) {
        // 1. Create a <dimension-token> with the same value and type flag as number, and a unit set initially to
        // the empty string.
        // 2. Consume an ident sequence. Set the <dimension-token>’s unit to the returned value.
        consumeIndentSequence(context);
        // 3. Return the <dimension-token>.
        context.onToken(TokenType.Dimension, start, context.offset, undefined, context.stop);
        return;
    }
    // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it. Create a
    // <percentage-token> with the same value as number, and return it.
    if (context.code === 37 /* CodePoint.PercentageSign */) {
        context.consumeCodePoint();
        context.onToken(TokenType.Percentage, start, context.offset, undefined, context.stop);
        return;
    }
    // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
    context.onToken(TokenType.Number, start, context.offset, undefined, context.stop);
};

/**
 * @file Tokenizing logic for strings
 */
/**
 * § 4.3.5. Consume a string token
 *
 * Consume a string token from a stream of code points. It returns either a <string-token> or <bad-string-token>.
 *
 * @param context Reference to the tokenizer context instance
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-string-token}
 */
const consumeStringToken = (context) => {
    // This algorithm may be called with an ending code point, which denotes the code point that ends the string.
    // If an ending code point is not specified, the current input code point is used.
    const endingCodePoint = context.code;
    // Initially create a <string-token> with its value set to the empty string.
    const start = context.offset;
    // Consume opening character
    context.consumeCodePoint();
    // Repeatedly consume the next input code point from the stream:
    // eslint-disable-next-line no-constant-condition
    while (context.isLessThanEqualToEof()) {
        switch (context.code) {
            // ending code point
            case endingCodePoint:
                // Consume it
                context.consumeCodePoint();
                // Return the <string-token>.
                context.onToken(TokenType.String, start, context.offset, undefined, context.stop);
                return;
            // EOF
            case -1 /* ImaginaryCodePoint.Eof */:
                // This is a parse error. Return the <string-token>.
                context.onToken(TokenType.String, start, context.offset, undefined, context.stop);
                context.onError("Unexpected end of file while parsing string token." /* ErrorMessage.UnexpectedEofInString */, start, context.offset);
                return;
            // newline
            case 13 /* CodePoint.CarriageReturn */:
            case 10 /* CodePoint.LineFeed */:
            case 12 /* CodePoint.FormFeed */:
                // Special case: CRLF is 2 code points
                if (context.code === 13 /* CodePoint.CarriageReturn */ && context.nextCode === 10 /* CodePoint.LineFeed */) {
                    // Do an extra consume
                    context.consumeCodePoint(1);
                }
                context.consumeCodePoint(1);
                // This is a parse error. Reconsume the current input code point, create a <bad-string-token>, and
                // return it.
                context.onToken(TokenType.BadString, start, context.offset, undefined, context.stop);
                context.onError("Unexpected newline while parsing string token." /* ErrorMessage.UnexpectedNewlineInString */, start, context.offset);
                return;
            // U+005C REVERSE SOLIDUS (\)
            case 92 /* CodePoint.ReverseSolidus */:
                // If the next input code point is EOF, do nothing.
                if (context.isNextEof()) {
                    context.consumeCodePoint();
                    context.onToken(TokenType.String, start, context.offset, undefined, context.stop);
                    context.onError("Unexpected end of file while parsing string token." /* ErrorMessage.UnexpectedEofInString */, start, context.offset);
                    return;
                }
                // Otherwise, if the next input code point is a newline, consume it.
                if (isNewline(context.nextCode)) {
                    context.consumeCodePoint(2);
                    break;
                }
                // Otherwise, (the stream starts with a valid escape) consume an escaped code point and append the
                // returned code point to the <string-token>’s value.
                if (checkForValidEscape(context.code, context.nextCode)) {
                    context.consumeCodePoint();
                    consumeEscapedCodePoint(context);
                }
                break;
            // anything else
            default:
                // Append the current input code point to the <string-token>’s value.
                context.consumeCodePoint();
        }
    }
};

/**
 * @file Tokenizing logic for whitespace
 */
/**
 * § 4.3.1. Consume a token (whitespace)
 *
 * @see {@link https://www.w3.org/TR/css-syntax-3/#consume-token}
 * @param context Reference to the tokenizer context instance
 */
const consumeWhitespaceToken = (context) => {
    // Consume as much whitespace as possible. Return a <whitespace-token>.
    const start = context.offset;
    context.consumeWhitespace();
    context.onToken(TokenType.Whitespace, start, context.offset, undefined, context.stop);
};

/**
 * @file CSS tokenizer that strictly follows the CSS Syntax Module Level 3 specification
 *
 * @see {@link https://www.w3.org/TR/css-syntax-3/#tokenization}
 */
/**
 * CSS tokenizer function
 *
 * @param source Source code to tokenize
 * @param onToken Tokenizer callback which is called for each token found in source code
 * @param onError Error callback which is called when a parsing error is found (optional)
 * @param functionHandlers Custom function handlers (optional)
 */
const tokenize = (source, onToken, onError = () => { }, functionHandlers) => {
    // Create tokenizer context
    const context = new TokenizerContext(source, onToken, onError, functionHandlers);
    // Repeatedly consume the next input code point from the stream:
    while (!context.isEof()) {
        switch (context.code) {
            // According to the spec, these are all whitespace code points:
            case 9 /* CodePoint.CharacterTabulation */:
            case 32 /* CodePoint.Space */:
            case 10 /* CodePoint.LineFeed */:
            case 12 /* CodePoint.FormFeed */:
            case 13 /* CodePoint.CarriageReturn */:
                // Consume as much whitespace as possible. Return a <whitespace-token>.
                consumeWhitespaceToken(context);
                break;
            // Digit
            case 48 /* CodePoint.DigitZero */:
            case 49 /* CodePoint.DigitOne */:
            case 50 /* CodePoint.DigitTwo */:
            case 51 /* CodePoint.DigitThree */:
            case 52 /* CodePoint.DigitFour */:
            case 53 /* CodePoint.DigitFive */:
            case 54 /* CodePoint.DigitSix */:
            case 55 /* CodePoint.DigitSeven */:
            case 56 /* CodePoint.DigitEight */:
            case 57 /* CodePoint.DigitNine */:
                consumeNumericToken(context);
                break;
            case 40 /* CodePoint.LeftParenthesis */:
                context.consumeTrivialToken(TokenType.OpenParenthesis);
                break;
            case 41 /* CodePoint.RightParenthesis */:
                context.consumeTrivialToken(TokenType.CloseParenthesis);
                break;
            case 44 /* CodePoint.Comma */:
                context.consumeTrivialToken(TokenType.Comma);
                break;
            case 58 /* CodePoint.Colon */:
                context.consumeTrivialToken(TokenType.Colon);
                break;
            case 59 /* CodePoint.SemiColon */:
                context.consumeTrivialToken(TokenType.Semicolon);
                break;
            case 91 /* CodePoint.LeftSquareBracket */:
                context.consumeTrivialToken(TokenType.OpenSquareBracket);
                break;
            case 93 /* CodePoint.RightSquareBracket */:
                context.consumeTrivialToken(TokenType.CloseSquareBracket);
                break;
            case 123 /* CodePoint.LeftCurlyBracket */:
                context.consumeTrivialToken(TokenType.OpenCurlyBracket);
                break;
            case 125 /* CodePoint.RightCurlyBracket */:
                context.consumeTrivialToken(TokenType.CloseCurlyBracket);
                break;
            case 39 /* CodePoint.Apostrophe */:
            case 34 /* CodePoint.QuotationMark */:
                // Consume a string token and return it.
                consumeStringToken(context);
                break;
            case 35 /* CodePoint.NumberSign */:
                // If the next input code point is an ident code point or the next two input code points are a
                // valid escape, then:
                if (isIdentCodePoint(context.getRelativeCode(1))
                    || checkForValidEscape(context.getRelativeCode(1), context.getRelativeCode(2))) {
                    const start = context.offset;
                    // 1. Create a <hash-token>.
                    // 2. If the next 3 input code points would start an ident sequence, set the <hash-token>’s
                    // type flag to "id".
                    // TODO: Uncomment when needed
                    // const props = {
                    //     typeFlag: checkForIdentStart(
                    //         context.getRelativeCode(1),
                    //         context.getRelativeCode(2),
                    //         context.getRelativeCode(3),
                    //     ) ? 'id' : 'unrestricted',
                    // };
                    // Consume an ident sequence, and set the <hash-token>’s value to the returned string.
                    context.consumeCodePoint();
                    consumeIndentSequence(context);
                    // 4. Return the <hash-token>.
                    // TODO: Uncomment when needed
                    // context.onToken(TokenType.Hash, start, context.offset, props);
                    context.onToken(TokenType.Hash, start, context.offset, undefined, context.stop);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 43 /* CodePoint.PlusSign */:
                // If the input stream starts with a number, reconsume the current input code point, consume a
                // numeric token, and return it.
                if (checkForNumberStart(context.code, context.getRelativeCode(1), context.getRelativeCode(2))) {
                    consumeNumericToken(context);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 45 /* CodePoint.HyphenMinus */:
                // If the input stream starts with a number, reconsume the current input code point, consume a
                // numeric token, and return it.
                if (checkForNumberStart(context.code, context.getRelativeCode(1), context.getRelativeCode(2))) {
                    consumeNumericToken(context);
                    break;
                }
                // Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN
                // (>), consume them and return a <CDC-token>.
                if (context.getRelativeCode(1) === 45 /* CodePoint.HyphenMinus */
                    && context.getRelativeCode(2) === 62 /* CodePoint.GreaterThanSign */) {
                    context.consumeCodePoint(3);
                    context.onToken(TokenType.Cdc, context.offset - 3, context.offset, undefined, context.stop);
                    break;
                }
                // Otherwise, if the input stream starts with an ident sequence, reconsume the current input
                // code point, consume an ident-like token, and return it.
                if (checkForIdentStart(context.code, context.getRelativeCode(1), context.getRelativeCode(2))) {
                    consumeIdentLikeToken(context);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 46 /* CodePoint.FullStop */:
                // If the input stream starts with a number, reconsume the current input code point, consume a
                // numeric token, and return it.
                if (checkForNumberStart(context.code, context.getRelativeCode(1), context.getRelativeCode(2))) {
                    consumeNumericToken(context);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 60 /* CodePoint.LessThanSign */:
                // If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D
                // HYPHEN-MINUS (!--), consume them and return a <CDO-token>.
                if (context.getRelativeCode(1) === 33 /* CodePoint.ExclamationMark */
                    && context.getRelativeCode(2) === 45 /* CodePoint.HyphenMinus */
                    && context.getRelativeCode(3) === 45 /* CodePoint.HyphenMinus */) {
                    context.consumeCodePoint(4);
                    context.onToken(TokenType.Cdo, context.offset - 4, context.offset, undefined, context.stop);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 64 /* CodePoint.CommercialAt */:
                // If the next 3 input code points would start an ident sequence, consume an ident sequence,
                // create an <at-keyword-token> with its value set to the returned value, and return it.
                if (checkForIdentStart(context.getRelativeCode(1), context.getRelativeCode(2), context.getRelativeCode(3))) {
                    const start = context.offset;
                    // Consume commercial at character
                    context.consumeCodePoint();
                    // Consume ident sequence after commercial at character
                    consumeIndentSequence(context);
                    context.onToken(TokenType.AtKeyword, start, context.offset, undefined, context.stop);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            case 92 /* CodePoint.ReverseSolidus */:
                // If the input stream starts with a valid escape, reconsume the current input code point,
                // consume an ident-like token, and return it.
                if (checkForValidEscape(context.code, context.getRelativeCode(1))) {
                    consumeIdentLikeToken(context);
                    break;
                }
                // Otherwise, this is a parse error. Return a <delim-token> with its value set to the current
                // input code point.
                context.consumeTrivialToken(TokenType.Delim);
                context.onError("Invalid escape sequence." /* ErrorMessage.InvalidEscapeSequence */, context.offset - 1, context.offset);
                break;
            case 47 /* CodePoint.Solidus */:
                // If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
                // If the preceding paragraph ended by consuming an EOF code point, this is a parse error.
                if (context.getRelativeCode(1) === 42 /* CodePoint.Asterisk */) {
                    const start = context.offset;
                    // Consume U+002F SOLIDUS (/) and U+002A ASTERISK (*)
                    context.consumeCodePoint(2);
                    // consume them and all following code points up to and including the first U+002A ASTERISK
                    // (*) followed by a U+002F SOLIDUS (/), or up to an EOF code point. Return to the start of
                    // this step.
                    context.consumeUntilCommentEnd();
                    if (context.isEof()) {
                        context.onError("Unterminated comment." /* ErrorMessage.UnterminatedComment */, start, context.length - 2);
                    }
                    context.onToken(TokenType.Comment, start, context.offset, undefined, context.stop);
                    break;
                }
                // Otherwise, return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
                break;
            // anything else
            default:
                // Can't be optimized because of the control threshold
                if (isIdentStartCodePoint(context.code)) {
                    // Reconsume the current input code point, consume an ident-like token, and return it.
                    consumeIdentLikeToken(context);
                    break;
                }
                // Return a <delim-token> with its value set to the current input code point.
                context.consumeTrivialToken(TokenType.Delim);
        }
    }
};

/**
 * @file Custom tokenizing logic for Extended CSS's pseudo-classes
 */
/**
 * Generic handler for the Extended CSS's pseudo-classes
 *
 * @param context Reference to the tokenizer context instance
 */
const handleRegularExtendedCssPseudo = (context) => {
    // Save the current offset, because we will need it later
    const start = context.offset;
    // Consume as much whitespace as possible
    context.consumeWhitespace();
    // If the first non-whitespace code point is an apostrophe or a quotation mark, it means that we are dealing
    // with a string parameter.
    // In this case, we simply abort the custom handler here, and let the standard tokenizer handle the string and
    // everything that comes after it as specified in the spec.
    // This behavior is similar to the standard CSS's url() function, it is also handled differently if its parameter
    // is a string.
    if (context.code === 39 /* CodePoint.Apostrophe */ || context.code === 34 /* CodePoint.QuotationMark */) {
        // Report whitespace tokens (if any)
        // It is important to report them, because we already consumed them - and the report is faster here than
        // a re-consume
        if (context.offset > start) {
            context.onToken(TokenType.Whitespace, start, context.offset, undefined, context.stop);
        }
        // We simply abort the custom handler
        return;
    }
    // Otherwise, we need to find the closing parenthesis based on the parenthesis balance
    // Parenthesis balance: 1, because we start after the opening parenthesis:
    // :contains(param)
    //           ^ we starts from here, so we already have 1 open parenthesis
    let balance = 1;
    // Don't forget to report already consumed whitespace chars as delim-tokens (if any)
    // Note: we handle the parameter characters as delim-tokens, this is why we don't need to report them here
    // as whitespace-tokens
    for (let i = start; i < context.offset; i += 1) {
        context.onToken(TokenType.Delim, i, i + 1, undefined, context.stop);
    }
    // Consume until we find the closing parenthesis or we reach the end of the source
    while (!context.isEof()) {
        if (context.code === 40 /* CodePoint.LeftParenthesis */ && context.prevCode !== 92 /* CodePoint.ReverseSolidus */) {
            // If we find an unescaped opening parenthesis, we increase the balance
            balance += 1;
        }
        else if (context.code === 41 /* CodePoint.RightParenthesis */ && context.prevCode !== 92 /* CodePoint.ReverseSolidus */) {
            // If we find an unescaped closing parenthesis, we decrease the balance
            balance -= 1;
            // If the balance is 0, it means that we found the closing parenthesis
            if (balance === 0) {
                break;
            }
        }
        // Consume the current character as a delim-token
        context.consumeTrivialToken(TokenType.Delim);
    }
};

/**
 * @file Custom tokenizing logic for Extended CSS's `:xpath()` pseudo-class
 * @note `:xpath()` is a bit tricky, because it can contain unescaped parentheses inside strings in the XPath
 * expression.
 */
/**
 * Handler for the Extended CSS's `:xpath()` pseudo-class
 *
 * @param context Reference to the tokenizer context instance
 */
const handleXpathExtendedCssPseudo = (context) => {
    // Save the current offset, because we will need it later
    const start = context.offset;
    // Consume as much whitespace as possible
    context.consumeWhitespace();
    // If the first non-whitespace code point is an apostrophe or a quotation mark, it means that we are dealing
    // with a string parameter.
    // In this case, we simply abort the custom handler here, and let the standard tokenizer handle the string and
    // everything that comes after it as specified in the spec.
    // This behavior is similar to the standard CSS's url() function, it is also handled differently if its parameter
    // is a string.
    if (context.code === 39 /* CodePoint.Apostrophe */ || context.code === 34 /* CodePoint.QuotationMark */) {
        // Report whitespace tokens (if any)
        // It is important to report them, because we already consumed them - and the report is faster here than
        // a re-consume
        if (context.offset > start) {
            context.onToken(TokenType.Whitespace, start, context.offset, undefined, context.stop);
        }
        // We simply abort the custom handler
        return;
    }
    // Otherwise, we need to find the closing parenthesis based on the parenthesis balance
    // Parenthesis balance: 1, because we start after the opening parenthesis:
    // :xpath(param)
    //        ^ we starts from here, so we already have 1 open parenthesis
    let balance = 1;
    // Don't forget to report already consumed whitespace chars as delim-tokens (if any)
    // Note: we handle the parameter characters as delim-tokens, this is why we don't need to report them here
    // as whitespace-tokens
    for (let i = start; i < context.offset; i += 1) {
        context.onToken(TokenType.Delim, i, i + 1, undefined, context.stop);
    }
    // :xpath() is a bit tricky, because it can contain unescaped parentheses inside strings in the XPath expression,
    // like this:
    // :xpath(//div[@class="foo(bar)"])
    // but in this case, not required the whole XPath expression to be a string
    let inString = false;
    // Consume until we find the closing parenthesis or we reach the end of the source
    while (!context.isEof()) {
        // If we find an unescaped quote mark, we toggle the "inString" flag
        // It is important, because we should omit parentheses inside strings.
        if (context.code === 34 /* CodePoint.QuotationMark */ && context.prevCode !== 92 /* CodePoint.ReverseSolidus */) {
            inString = !inString;
        }
        // If we are not inside a string, we should check parentheses balance
        if (!inString) {
            if (context.code === 40 /* CodePoint.LeftParenthesis */ && context.prevCode !== 92 /* CodePoint.ReverseSolidus */) {
                // If we find an unescaped opening parenthesis, we increase the balance
                balance += 1;
            }
            else if (context.code === 41 /* CodePoint.RightParenthesis */ && context.prevCode !== 92 /* CodePoint.ReverseSolidus */) {
                // If we find an unescaped closing parenthesis, we decrease the balance
                balance -= 1;
                // If the balance is 0, it means that we found the closing parenthesis of the
                // pseudo-class
                if (balance === 0) {
                    break;
                }
            }
        }
        // Consume the current character as a delim-token
        context.consumeTrivialToken(TokenType.Delim);
    }
};

/**
 * @file Map utility functions
 */
/**
 * Simple utility function to merge two maps.
 *
 * @param map1 First map
 * @param map2 Second map
 * @returns Merged map
 * @note If a key is present in both maps, the value from the second map will be used
 * @note This function does not modify the original maps, it returns a new map
 */
function mergeMaps(map1, map2) {
    const result = new Map();
    for (const [key, value] of map1) {
        result.set(key, value);
    }
    for (const [key, value] of map2) {
        result.set(key, value);
    }
    return result;
}

/**
 * @file Extended CSS tokenizer that extends the core CSS tokenizer
 *
 * This library supports various Extended CSS language elements from
 * - AdGuard,
 * - uBlock Origin and
 * - Adblock Plus.
 *
 * @see {@link https://github.com/AdguardTeam/ExtendedCss}
 * @see {@link https://github.com/gorhill/uBlock/wiki/Procedural-cosmetic-filters}
 * @see {@link https://help.adblockplus.org/hc/en-us/articles/360062733293#elemhide-emulation}
 */
const ABP_CONTAINS_HASH = 1989084725; // getStringHash('-abp-contains')
const CONTAINS_HASH = 2399470598; // getStringHash('contains')
const HAS_TEXT_HASH = 1221663855; // getStringHash('has-text')
const MATCHES_CSS_HASH = 102304302; // getStringHash('matches-css')
const MATCHES_CSS_AFTER_HASH = 2923888231; // getStringHash('matches-css-after')
const MATCHES_CSS_BEFORE_HASH = 1739713050; // getStringHash('matches-css-before')
const MATCHES_PROPERTY_HASH = 1860790666; // getStringHash('matches-property')
const MATCHES_ATTR_HASH = 3376104318; // getStringHash('matches-attr')
const XPATH_HASH = 196571984; // getStringHash('xpath')
/**
 * Map of Extended CSS's pseudo-classes and their respective handler functions
 */
const EXT_CSS_PSEUDO_HANDLERS = new Map([
    // Note: alternatively, you can use `getStringHash` to get the hash of the pseudo-class name, but we use
    // pre-calculated hashes here for performance reasons
    [ABP_CONTAINS_HASH, handleRegularExtendedCssPseudo],
    [CONTAINS_HASH, handleRegularExtendedCssPseudo],
    [HAS_TEXT_HASH, handleRegularExtendedCssPseudo],
    [MATCHES_CSS_HASH, handleRegularExtendedCssPseudo],
    [MATCHES_CSS_AFTER_HASH, handleRegularExtendedCssPseudo],
    [MATCHES_CSS_BEFORE_HASH, handleRegularExtendedCssPseudo],
    [MATCHES_PROPERTY_HASH, handleRegularExtendedCssPseudo],
    [MATCHES_ATTR_HASH, handleRegularExtendedCssPseudo],
    [XPATH_HASH, handleXpathExtendedCssPseudo],
]);
/**
 * Extended CSS tokenizer function
 *
 * @param source Source code to tokenize
 * @param onToken Tokenizer callback which is called for each token found in source code
 * @param onError Error callback which is called when a parsing error is found (optional)
 * @param functionHandlers Custom function handlers (optional)
 * @note If you specify custom function handlers, they will be merged with the default function handlers. If you
 * duplicate a function handler, the custom one will be used instead of the default one, so you can override the default
 * function handlers this way, if you want to.
 */
const tokenizeExtended = (source, onToken, onError = () => { }, functionHandlers = new Map()) => {
    tokenize(source, onToken, onError, 
    // Register custom function handlers for Extended CSS's pseudo-classes, but do not call mergeMaps if there are
    // no custom function handlers are provided
    functionHandlers.size > 0
        ? mergeMaps(EXT_CSS_PSEUDO_HANDLERS, functionHandlers)
        : EXT_CSS_PSEUDO_HANDLERS);
};

/**
 * @file CSS identifier decoder.
 */
const EMPTY_STRING = '';
/**
 * Decodes a CSS identifier according to the CSS Syntax Module Level 3 specification.
 *
 * @param ident CSS identifier to decode.
 *
 * @example
 * ```ts
 * decodeIdent(String.raw`\00075\00072\0006C`); // 'url'
 * decodeIdent('url'); // 'url'
 * ```
 *
 * @returns Decoded CSS identifier.
 */
const decodeIdent = (ident) => {
    const decodedIdent = [];
    for (let i = 0; i < ident.length; i += 1) {
        const codePoint = ident.charCodeAt(i);
        // 4.3.7. Consume an escaped code point
        // https://www.w3.org/TR/css-syntax-3/#consume-an-escaped-code-point
        if (codePoint === 92 /* CodePoint.ReverseSolidus */) {
            // hex digit
            if (isHexDigit(ident.charCodeAt(i + 1))) {
                // Consume as many hex digits as possible, but no more than 5.
                // Note that this means 1-6 hex digits have been consumed in total.
                let n = 0;
                let j = 0; // consumed hex digits
                while (j < MAX_HEX_DIGITS && isHexDigit(ident.charCodeAt(i + j + 1))) {
                    // Interpret the hex digits as a hexadecimal number.
                    n = n * 16 + parseInt(ident[i + j + 1], 16);
                    j += 1;
                }
                decodedIdent.push(
                // If this number is zero, or is for a surrogate, or is greater than the maximum allowed code
                // point, return U+FFFD REPLACEMENT CHARACTER (�).
                // Otherwise, return the code point with that value.
                String.fromCodePoint(n === 0 || isSurrogate(n) || isGreaterThanMaxAllowedCodePoint(n)
                    ? 65533 /* CodePoint.ReplacementCharacter */
                    : n));
                i += j;
                // If the next input code point is whitespace, consume it as well.
                const nextCodePoint = ident.charCodeAt(i + 1);
                if (isWhitespace(nextCodePoint)) {
                    // Consume whitespace character
                    i += 1;
                    // Special case: consume +1 character if the sequence is CR LF
                    if (nextCodePoint === 13 /* CodePoint.CarriageReturn */ && ident.charCodeAt(i + 1) === 10 /* CodePoint.LineFeed */) {
                        i += 1;
                    }
                }
            }
            // do nothing for EOF
        }
        else {
            // anything else
            // Return the current input code point.
            decodedIdent.push(ident[i]);
        }
    }
    return decodedIdent.join(EMPTY_STRING);
};

const version = "1.2.0";

/**
 * @file Package version
 */
// ! Notice:
// Don't export version from package.json directly, because if you run `tsc` in the root directory, it will generate
// `dist/types/src/version.d.ts` with wrong relative path to `package.json`. So we need this little "hack"
const CSS_TOKENIZER_VERSION = version;

/**
 * Checks if the given raw string contains any of the specified tokens.
 *
 * @param raw - The raw string to be tokenized and checked.
 * @param tokens - A set of token types to check for in the raw string.
 * @param tokenizer - The tokenizer function to use. Defaults to `tokenizeExtended`.
 * @returns `true` if any of the specified tokens are found in the raw string, otherwise `false`.
 */
const hasToken = (raw, tokens, tokenizer = tokenizeExtended) => {
    let found = false;
    tokenizer(raw, (type, start, end, props, stop) => {
        if (tokens.has(type)) {
            found = true;
            stop();
        }
    });
    return found;
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/.pnpm/@adguard+css-tokenizer@1.2.0/node_modules/@adguard/css-tokenizer/dist/csstokenizer.mjs"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9ycy9jc3MtdG9rZW5pemVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQSxzQ0FBc0M7QUFDdEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTBKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vQGFkZ3VhcmQrY3NzLXRva2VuaXplckAxLjIuMC9ub2RlX21vZHVsZXMvQGFkZ3VhcmQvY3NzLXRva2VuaXplci9kaXN0L2Nzc3Rva2VuaXplci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENTU1Rva2VuaXplciB2MS4yLjAgKGJ1aWxkIGRhdGU6IE1vbiwgMDMgRmViIDIwMjUgMTU6MjY6MTEgR01UKVxuICogKGMpIDIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS90c3VybGZpbHRlci90cmVlL21hc3Rlci9wYWNrYWdlcy9jc3MtdG9rZW5pemVyI3JlYWRtZVxuICovXG4vKipcbiAqIEBmaWxlIEltcGxlbWVudGF0aW9uIG9mIENTUyBTeW50YXggTW9kdWxlIExldmVsIDMgdG9rZW5pemVyIGRlZmluaXRpb25zICjCpyA0LjIuKVxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI3Rva2VuaXplci1kZWZpbml0aW9uc31cbiAqL1xuLyoqXG4gKiBDaGVjayBpZiBjb2RlIHBvaW50IGNvZGUgaXMgYmV0d2VlbiB0d28gY29kZSBwb2ludHNcbiAqXG4gKiBAcGFyYW0gY29kZSBDb2RlIHBvaW50IHRvIGNoZWNrXG4gKiBAcGFyYW0gbWluIE1pbmltdW0gY29kZSBwb2ludFxuICogQHBhcmFtIG1heCBNYXhpbXVtIGNvZGUgcG9pbnRcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjb2RlIHBvaW50IGlzIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQG5vdGUgQm91bmRhcmllcyBhcmUgaW5jbHVzaXZlXG4gKiBAbm90ZSBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgaW5zdGVhZCBvZiBgY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXhgIGJlY2F1c2UgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHRvIGNvbXBhcmVcbiAqIGBudW1iZXIgfCB1bmRlZmluZWRgIHdpdGggYG51bWJlcmAgKGV2ZW4gdGhvdWdoIGl0J3MgcGVyZmVjdGx5IHZhbGlkIGluIEphdmFTY3JpcHQpXG4gKi9cbmZ1bmN0aW9uIGlzQmV0d2Vlbihjb2RlLCBtaW4sIG1heCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlIDE4MDQ4XG4gICAgcmV0dXJuIGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4O1xufVxuLyoqXG4gKiBDaGVjayBpZiBjb2RlIHBvaW50IGNvZGUgaXMgZ3JlYXRlciB0aGFuIG90aGVyIGNvZGUgcG9pbnRcbiAqXG4gKiBAcGFyYW0gY29kZSBDb2RlIHBvaW50IHRvIGNoZWNrXG4gKiBAcGFyYW0gbWluIE1pbmltdW0gY29kZSBwb2ludFxuICogQHJldHVybnMgYHRydWVgIGlmIGNvZGUgcG9pbnQgaXMgZ3JlYXRlciB0aGFuIGBtaW5gLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQG5vdGUgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGluc3RlYWQgb2YgYGNvZGUgPiBtaW5gIGJlY2F1c2UgVHlwZVNjcmlwdCBkb2Vzbid0IGFsbG93IHRvIGNvbXBhcmVcbiAqIGBudW1iZXIgfCB1bmRlZmluZWRgIHdpdGggYG51bWJlcmAgKGV2ZW4gdGhvdWdoIGl0J3MgcGVyZmVjdGx5IHZhbGlkIGluIEphdmFTY3JpcHQpXG4gKi9cbmZ1bmN0aW9uIGlzR3JlYXRlclRoYW4oY29kZSwgbWluKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmUgMTgwNDhcbiAgICByZXR1cm4gY29kZSA+IG1pbjtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY29kZSBwb2ludCBjb2RlIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBvdGhlciBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvZGUgQ29kZSBwb2ludCB0byBjaGVja1xuICogQHBhcmFtIG1pbiBNaW5pbXVtIGNvZGUgcG9pbnRcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjb2RlIHBvaW50IGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgbWluYCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBub3RlIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBpbnN0ZWFkIG9mIGBjb2RlID49IG1pbmAgYmVjYXVzZSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWxsb3cgdG8gY29tcGFyZVxuICogYG51bWJlciB8IHVuZGVmaW5lZGAgd2l0aCBgbnVtYmVyYCAoZXZlbiB0aG91Z2ggaXQncyBwZXJmZWN0bHkgdmFsaWQgaW4gSmF2YVNjcmlwdClcbiAqL1xuZnVuY3Rpb24gaXNHcmVhdGVyVGhhbk9yRXF1YWwoY29kZSwgbWluKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmUgMTgwNDhcbiAgICByZXR1cm4gY29kZSA+PSBtaW47XG59XG4vKipcbiAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgZGlnaXRcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgZGlnaXQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNkaWdpdH1cbiAqL1xuZnVuY3Rpb24gaXNEaWdpdChjb2RlKSB7XG4gICAgLy8gQSBjb2RlIHBvaW50IGJldHdlZW4gVSswMDMwIERJR0lUIFpFUk8gKDApIGFuZCBVKzAwMzkgRElHSVQgTklORSAoOSkgaW5jbHVzaXZlLlxuICAgIHJldHVybiBpc0JldHdlZW4oY29kZSwgNDggLyogQ29kZVBvaW50LkRpZ2l0WmVybyAqLywgNTcgLyogQ29kZVBvaW50LkRpZ2l0TmluZSAqLyk7XG59XG4vKipcbiAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgaGV4IGRpZ2l0XG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIGhleCBkaWdpdCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2hleC1kaWdpdH1cbiAqL1xuZnVuY3Rpb24gaXNIZXhEaWdpdChjb2RlKSB7XG4gICAgLy8gQSBkaWdpdCwgb3IgYSBjb2RlIHBvaW50IGJldHdlZW4gVSswMDQxIExBVElOIENBUElUQUwgTEVUVEVSIEEgKEEpIGFuZCBVKzAwNDYgTEFUSU4gQ0FQSVRBTCBMRVRURVIgRiAoRilcbiAgICAvLyBpbmNsdXNpdmUsIG9yIGEgY29kZSBwb2ludCBiZXR3ZWVuIFUrMDA2MSBMQVRJTiBTTUFMTCBMRVRURVIgQSAoYSkgYW5kIFUrMDA2NiBMQVRJTiBTTUFMTCBMRVRURVIgRiAoZikgaW5jbHVzaXZlLlxuICAgIHJldHVybiBpc0RpZ2l0KGNvZGUpIC8vIDAtOVxuICAgICAgICB8fCBpc0JldHdlZW4oY29kZSwgNjUgLyogQ29kZVBvaW50LkxhdGluQ2FwaXRhbExldHRlckEgKi8sIDcwIC8qIENvZGVQb2ludC5MYXRpbkNhcGl0YWxMZXR0ZXJGICovKSAvLyBBLUZcbiAgICAgICAgfHwgaXNCZXR3ZWVuKGNvZGUsIDk3IC8qIENvZGVQb2ludC5MYXRpblNtYWxsTGV0dGVyQSAqLywgMTAyIC8qIENvZGVQb2ludC5MYXRpblNtYWxsTGV0dGVyRiAqLyk7IC8vIGEtZlxufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhbiB1cHBlcmNhc2UgbGV0dGVyXG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhbiB1cHBlcmNhc2UgbGV0dGVyLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jdXBwZXJjYXNlLWxldHRlcn1cbiAqL1xuZnVuY3Rpb24gaXNVcHBlcmNhc2VMZXR0ZXIoY29kZSkge1xuICAgIC8vIEEgY29kZSBwb2ludCBiZXR3ZWVuIFUrMDA0MSBMQVRJTiBDQVBJVEFMIExFVFRFUiBBIChBKSBhbmQgVSswMDVBIExBVElOIENBUElUQUwgTEVUVEVSIFogKFopIGluY2x1c2l2ZS5cbiAgICByZXR1cm4gaXNCZXR3ZWVuKGNvZGUsIDY1IC8qIENvZGVQb2ludC5MYXRpbkNhcGl0YWxMZXR0ZXJBICovLCA5MCAvKiBDb2RlUG9pbnQuTGF0aW5DYXBpdGFsTGV0dGVyWiAqLyk7IC8vIEEtWlxufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIGxvd2VyY2FzZSBsZXR0ZXJcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgbG93ZXJjYXNlIGxldHRlciwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2xvd2VyY2FzZS1sZXR0ZXJ9XG4gKi9cbmZ1bmN0aW9uIGlzTG93ZXJjYXNlTGV0dGVyKGNvZGUpIHtcbiAgICAvLyBBIGNvZGUgcG9pbnQgYmV0d2VlbiBVKzAwNjEgTEFUSU4gU01BTEwgTEVUVEVSIEEgKGEpIGFuZCBVKzAwN0EgTEFUSU4gU01BTEwgTEVUVEVSIFogKHopIGluY2x1c2l2ZS5cbiAgICByZXR1cm4gaXNCZXR3ZWVuKGNvZGUsIDk3IC8qIENvZGVQb2ludC5MYXRpblNtYWxsTGV0dGVyQSAqLywgMTIyIC8qIENvZGVQb2ludC5MYXRpblNtYWxsTGV0dGVyWiAqLyk7IC8vIGEtelxufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIGxldHRlclxuICpcbiAqIEBwYXJhbSBjb2RlIENoYXJhY3RlciBjb2RlXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSBsZXR0ZXIsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNsZXR0ZXJ9XG4gKi9cbmZ1bmN0aW9uIGlzTGV0dGVyKGNvZGUpIHtcbiAgICAvLyBBbiB1cHBlcmNhc2UgbGV0dGVyIG9yIGEgbG93ZXJjYXNlIGxldHRlci5cbiAgICByZXR1cm4gaXNVcHBlcmNhc2VMZXR0ZXIoY29kZSkgfHwgaXNMb3dlcmNhc2VMZXR0ZXIoY29kZSk7IC8vIEEtWiBvciBhLXpcbn1cbi8qKlxuICogQ2hlY2sgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSBub24tQVNDSUkgY29kZSBwb2ludFxuICpcbiAqIEBwYXJhbSBjb2RlIENoYXJhY3RlciBjb2RlXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSBub24tQVNDSUkgY29kZSBwb2ludCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI25vbi1hc2NpaS1jb2RlLXBvaW50fVxuICovXG5mdW5jdGlvbiBpc05vbkFzY2lpQ29kZVBvaW50KGNvZGUpIHtcbiAgICAvLyBBIGNvZGUgcG9pbnQgd2l0aCBhIHZhbHVlIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiBVKzAwODAgPGNvbnRyb2w+LlxuICAgIHJldHVybiBpc0dyZWF0ZXJUaGFuT3JFcXVhbChjb2RlLCAxMjggLyogQ29kZVBvaW50LkNvbnRyb2xDaGFyYWN0ZXJTdGFydCAqLyk7XG59XG4vKipcbiAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgbmFtZSBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIG5hbWUgc3RhcnQgY29kZSBwb2ludCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2lkZW50LXN0YXJ0LWNvZGUtcG9pbnR9XG4gKi9cbmZ1bmN0aW9uIGlzSWRlbnRTdGFydENvZGVQb2ludChjb2RlKSB7XG4gICAgLy8gQSBsZXR0ZXIsIGEgbm9uLUFTQ0lJIGNvZGUgcG9pbnQsIG9yIFUrMDA1RiBMT1cgTElORSAoXykuXG4gICAgcmV0dXJuIGlzTGV0dGVyKGNvZGUpIHx8IGlzTm9uQXNjaWlDb2RlUG9pbnQoY29kZSkgfHwgY29kZSA9PT0gOTUgLyogQ29kZVBvaW50Lkxvd0xpbmUgKi87XG59XG4vKipcbiAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgbmFtZSBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIG5hbWUgY29kZSBwb2ludCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2lkZW50LWNvZGUtcG9pbnR9XG4gKi9cbmZ1bmN0aW9uIGlzSWRlbnRDb2RlUG9pbnQoY29kZSkge1xuICAgIC8vIEFuIGlkZW50LXN0YXJ0IGNvZGUgcG9pbnQsIGEgZGlnaXQsIG9yIFUrMDAyRCBIWVBIRU4tTUlOVVMgKC0pLlxuICAgIHJldHVybiBpc0lkZW50U3RhcnRDb2RlUG9pbnQoY29kZSkgfHwgaXNEaWdpdChjb2RlKSB8fCBjb2RlID09PSA0NSAvKiBDb2RlUG9pbnQuSHlwaGVuTWludXMgKi87XG59XG4vKipcbiAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgbm9uLXByaW50YWJsZSBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIG5vbi1wcmludGFibGUgY29kZSBwb2ludCwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI25vbi1wcmludGFibGUtY29kZS1wb2ludH1cbiAqL1xuZnVuY3Rpb24gaXNOb25QcmludGFibGVDb2RlUG9pbnQoY29kZSkge1xuICAgIC8vIEEgY29kZSBwb2ludCBiZXR3ZWVuIFUrMDAwMCBOVUxMIGFuZCBVKzAwMDggQkFDS1NQQUNFIGluY2x1c2l2ZSwgb3IgVSswMDBCIExJTkUgVEFCVUxBVElPTiwgb3IgYSBjb2RlIHBvaW50XG4gICAgLy8gYmV0d2VlbiBVKzAwMEUgU0hJRlQgT1VUIGFuZCBVKzAwMUYgSU5GT1JNQVRJT04gU0VQQVJBVE9SIE9ORSBpbmNsdXNpdmUsIG9yIFUrMDA3RiBERUxFVEUuXG4gICAgcmV0dXJuIGlzQmV0d2Vlbihjb2RlLCAwIC8qIENvZGVQb2ludC5OdWxsICovLCA4IC8qIENvZGVQb2ludC5CYWNrc3BhY2UgKi8pXG4gICAgICAgIHx8IGNvZGUgPT09IDExIC8qIENvZGVQb2ludC5MaW5lVGFidWxhdGlvbiAqL1xuICAgICAgICB8fCBpc0JldHdlZW4oY29kZSwgMTQgLyogQ29kZVBvaW50LlNoaWZ0T3V0ICovLCAzMSAvKiBDb2RlUG9pbnQuSW5mb3JtYXRpb25TZXBhcmF0b3JPbmUgKi8pXG4gICAgICAgIHx8IGNvZGUgPT09IDEyNyAvKiBDb2RlUG9pbnQuRGVsZXRlICovO1xufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIG5ld2xpbmVcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgbmV3bGluZSwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI25ld2xpbmV9XG4gKi9cbmZ1bmN0aW9uIGlzTmV3bGluZShjb2RlKSB7XG4gICAgLy8gVSswMDBBIExJTkUgRkVFRC4gTm90ZSB0aGF0IFUrMDAwRCBDQVJSSUFHRSBSRVRVUk4gYW5kIFUrMDAwQyBGT1JNIEZFRUQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGRlZmluaXRpb24sIGFzXG4gICAgLy8gdGhleSBhcmUgY29udmVydGVkIHRvIFUrMDAwQSBMSU5FIEZFRUQgZHVyaW5nIHByZXByb2Nlc3NpbmcuXG4gICAgcmV0dXJuIGNvZGUgPT09IDEwIC8qIENvZGVQb2ludC5MaW5lRmVlZCAqLyB8fCBjb2RlID09PSAxMyAvKiBDb2RlUG9pbnQuQ2FycmlhZ2VSZXR1cm4gKi8gfHwgY29kZSA9PT0gMTIgLyogQ29kZVBvaW50LkZvcm1GZWVkICovO1xufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIHdoaXRlc3BhY2VcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgd2hpdGVzcGFjZSwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI3doaXRlc3BhY2V9XG4gKi9cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjb2RlKSB7XG4gICAgLy8gQSBuZXdsaW5lLCBVKzAwMDkgQ0hBUkFDVEVSIFRBQlVMQVRJT04sIG9yIFUrMDAyMCBTUEFDRS5cbiAgICByZXR1cm4gaXNOZXdsaW5lKGNvZGUpIHx8IGNvZGUgPT09IDkgLyogQ29kZVBvaW50LkNoYXJhY3RlclRhYnVsYXRpb24gKi8gfHwgY29kZSA9PT0gMzIgLyogQ29kZVBvaW50LlNwYWNlICovO1xufVxuLyoqXG4gKiBDaGVjayBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIGxlYWRpbmcgc3Vycm9nYXRlXG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIGxlYWRpbmcgc3Vycm9nYXRlLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N1cnJvZ2F0ZX1cbiAqL1xuZnVuY3Rpb24gaXNMZWFkaW5nU3Vycm9nYXRlKGNvZGUpIHtcbiAgICByZXR1cm4gaXNCZXR3ZWVuKGNvZGUsIDU1Mjk2IC8qIENvZGVQb2ludC5MZWFkaW5nU3Vycm9nYXRlU3RhcnQgKi8sIDU2MzE5IC8qIENvZGVQb2ludC5MZWFkaW5nU3Vycm9nYXRlRW5kICovKTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSB0cmFpbGluZyBzdXJyb2dhdGVcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgdHJhaWxpbmcgc3Vycm9nYXRlLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N1cnJvZ2F0ZX1cbiAqL1xuZnVuY3Rpb24gaXNUcmFpbGluZ1N1cnJvZ2F0ZShjb2RlKSB7XG4gICAgcmV0dXJuIGlzQmV0d2Vlbihjb2RlLCA1NjMyMCAvKiBDb2RlUG9pbnQuVHJhaWxpbmdTdXJyb2dhdGVTdGFydCAqLywgNTczNDMgLyogQ29kZVBvaW50LlRyYWlsaW5nU3Vycm9nYXRlRW5kICovKTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSBzdXJyb2dhdGVcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZVxuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgc3Vycm9nYXRlLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N1cnJvZ2F0ZX1cbiAqL1xuZnVuY3Rpb24gaXNTdXJyb2dhdGUoY29kZSkge1xuICAgIHJldHVybiBpc0xlYWRpbmdTdXJyb2dhdGUoY29kZSkgfHwgaXNUcmFpbGluZ1N1cnJvZ2F0ZShjb2RlKTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY2hhcmFjdGVyIGNvZGUgaXMgZ3JlYXRlciB0aGFuIG1heGltdW0gYWxsb3dlZCBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSBhbGxvd2VkIGNvZGUgcG9pbnQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNtYXhpbXVtLWFsbG93ZWQtY29kZS1wb2ludH1cbiAqL1xuZnVuY3Rpb24gaXNHcmVhdGVyVGhhbk1heEFsbG93ZWRDb2RlUG9pbnQoY29kZSkge1xuICAgIHJldHVybiBpc0dyZWF0ZXJUaGFuKGNvZGUsIDExMTQxMTEgLyogQ29kZVBvaW50Lk1heENvZGVQb2ludCAqLyk7XG59XG4vLyBUT0RPOiBVbmNvbW1lbnQgd2hlbiBuZWVkZWQsIG1heWJlIHVzZWZ1bCBpbiB0aGUgZnV0dXJlXG4vLyAvKipcbi8vICAqIENoZWNrIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgdmFsaWQgaWRlbnRpZmllciBzZXF1ZW5jZSBjb2RlIHBvaW50XG4vLyAgKlxuLy8gICogQHBhcmFtIGNvZGUgQ2hhcmFjdGVyIGNvZGVcbi8vICAqIEByZXR1cm5zIGB0cnVlYCBpZiBjaGFyYWN0ZXIgY29kZSBpcyBhIHZhbGlkIGlkZW50aWZpZXIgc2VxdWVuY2UgY29kZSBwb2ludCwgYGZhbHNlYCBvdGhlcndpc2Vcbi8vICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2lkZW50LXNlcXVlbmNlfVxuLy8gICogQG5vdGUgVGhlIHBhcnQgb2YgYW4gPGF0LWtleXdvcmQtdG9rZW4+IGFmdGVyIHRoZSBcIkBcIiwgdGhlIHBhcnQgb2YgYSA8aGFzaC10b2tlbj4gKHdpdGggdGhlIFwiaWRcIiB0eXBlIGZsYWcpIGFmdGVyXG4vLyAgKiB0aGUgXCIjXCIsIHRoZSBwYXJ0IG9mIGEgPGZ1bmN0aW9uLXRva2VuPiBiZWZvcmUgdGhlIFwiKFwiLCBhbmQgdGhlIHVuaXQgb2YgYSA8ZGltZW5zaW9uLXRva2VuPiBhcmUgYWxsIGlkZW50XG4vLyAgKiBzZXF1ZW5jZXMuXG4vLyAgKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBpc0lkZW50U2VxdWVuY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4vLyAgICAgLy8gQSBzZXF1ZW5jZSBvZiBjb2RlIHBvaW50cyB0aGF0IGhhcyB0aGUgc2FtZSBzeW50YXggYXMgYW4gPGlkZW50LXRva2VuPi5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4vLyAgICAgcmV0dXJuIGlzSWRlbnRTdGFydENvZGVQb2ludChjb2RlKSB8fCBpc0RpZ2l0KGNvZGUpIHx8IGNvZGUgPT09IENvZGVQb2ludC5IeXBoZW5NaW51cyB8fCBjb2RlID09PSBDb2RlUG9pbnQuTG93TGluZTtcbi8vIH1cbi8qKlxuICogQ2hlY2sgaWYgY2hhcmFjdGVyIGNvZGUgaXMgYSBCT00gKEJ5dGUgT3JkZXIgTWFyaylcbiAqXG4gKiBAcGFyYW0gY29kZSBDaGFyYWN0ZXIgY29kZSB0byBjaGVja1xuICogQHJldHVybnMgYHRydWVgIGlmIGNoYXJhY3RlciBjb2RlIGlzIGEgQk9NLCBgZmFsc2VgIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0JPTShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IDY1Mjc5IC8qIENvZGVQb2ludC5VdGYxNkJlQm9tICovIHx8IGNvZGUgPT09IDY1NTM0IC8qIENvZGVQb2ludC5VdGYxNkxlQm9tICovO1xufVxuLyoqXG4gKiDCpyA0LjMuOC4gQ2hlY2sgaWYgdHdvIGNvZGUgcG9pbnRzIGFyZSBhIHZhbGlkIGVzY2FwZVxuICpcbiAqIEBwYXJhbSBhIEZpcnN0IGNvZGUgcG9pbnRcbiAqIEBwYXJhbSBiIFNlY29uZCBjb2RlIHBvaW50XG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvZGUgcG9pbnRzIGFyZSBhIHZhbGlkIGVzY2FwZSwgYGZhbHNlYCBvdGhlcndpc2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI3N0YXJ0cy13aXRoLWEtdmFsaWQtZXNjYXBlfVxuICogQG5vdGUgVGhpcyBhbGdvcml0aG0gd2lsbCBub3QgY29uc3VtZSBhbnkgYWRkaXRpb25hbCBjb2RlIHBvaW50LlxuICovXG5jb25zdCBjaGVja0ZvclZhbGlkRXNjYXBlID0gKGEsIGIpID0+IHtcbiAgICAvLyBJZiB0aGUgZmlyc3QgY29kZSBwb2ludCBpcyBub3QgVSswMDVDIFJFVkVSU0UgU09MSURVUyAoXFwpLCByZXR1cm4gZmFsc2UuXG4gICAgaWYgKGEgIT09IDkyIC8qIENvZGVQb2ludC5SZXZlcnNlU29saWR1cyAqLykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIHNlY29uZCBjb2RlIHBvaW50IGlzIGEgbmV3bGluZSwgcmV0dXJuIGZhbHNlLlxuICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRydWUuXG4gICAgcmV0dXJuICFpc05ld2xpbmUoYik7XG59O1xuLyoqXG4gKiDCpyA0LjMuOS4gQ2hlY2sgaWYgdGhyZWUgY29kZSBwb2ludHMgd291bGQgc3RhcnQgYW4gaWRlbnQgc2VxdWVuY2VcbiAqXG4gKiBAcGFyYW0gYSBGaXJzdCBjb2RlIHBvaW50XG4gKiBAcGFyYW0gYiBTZWNvbmQgY29kZSBwb2ludFxuICogQHBhcmFtIGMgVGhpcmQgY29kZSBwb2ludFxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBuZXh0IGNvZGUgcG9pbnRzIHdvdWxkIHN0YXJ0IGFuIGlkZW50aWZpZXIsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyN3b3VsZC1zdGFydC1hbi1pZGVudGlmaWVyfVxuICogQG5vdGUgVGhpcyBhbGdvcml0aG0gd2lsbCBub3QgY29uc3VtZSBhbnkgYWRkaXRpb25hbCBjb2RlIHBvaW50cy5cbiAqL1xuY29uc3QgY2hlY2tGb3JJZGVudFN0YXJ0ID0gKGEsIGIsIGMpID0+IHtcbiAgICAvLyBMb29rIGF0IHRoZSBmaXJzdCBjb2RlIHBvaW50OlxuICAgIC8vIFUrMDAyRCBIWVBIRU4tTUlOVVNcbiAgICBpZiAoYSA9PT0gNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovKSB7XG4gICAgICAgIC8vIElmIHRoZSBzZWNvbmQgY29kZSBwb2ludCBpcyBhbiBpZGVudC1zdGFydCBjb2RlIHBvaW50IG9yIGEgVSswMDJEIEhZUEhFTi1NSU5VUyxcbiAgICAgICAgLy8gb3IgdGhlIHNlY29uZCBhbmQgdGhpcmQgY29kZSBwb2ludHMgYXJlIGEgdmFsaWQgZXNjYXBlLCByZXR1cm4gdHJ1ZS4gT3RoZXJ3aXNlLCByZXR1cm4gZmFsc2UuXG4gICAgICAgIHJldHVybiBpc0lkZW50U3RhcnRDb2RlUG9pbnQoYikgfHwgYiA9PT0gNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovIHx8IGNoZWNrRm9yVmFsaWRFc2NhcGUoYiwgYyk7XG4gICAgfVxuICAgIC8vIGlkZW50LXN0YXJ0IGNvZGUgcG9pbnRcbiAgICBpZiAoaXNJZGVudFN0YXJ0Q29kZVBvaW50KGEpKSB7XG4gICAgICAgIC8vIFJldHVybiB0cnVlLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gVSswMDVDIFJFVkVSU0UgU09MSURVUyAoXFwpXG4gICAgaWYgKGEgPT09IDkyIC8qIENvZGVQb2ludC5SZXZlcnNlU29saWR1cyAqLykge1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgYW5kIHNlY29uZCBjb2RlIHBvaW50cyBhcmUgYSB2YWxpZCBlc2NhcGUsIHJldHVybiB0cnVlLiBPdGhlcndpc2UsIHJldHVybiBmYWxzZS5cbiAgICAgICAgcmV0dXJuIGNoZWNrRm9yVmFsaWRFc2NhcGUoYSwgYik7XG4gICAgfVxuICAgIC8vIGFueXRoaW5nIGVsc2VcbiAgICAvLyBSZXR1cm4gZmFsc2UuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogwqcgNC4zLjEwLiBDaGVjayBpZiB0aHJlZSBjb2RlIHBvaW50cyB3b3VsZCBzdGFydCBhIG51bWJlclxuICpcbiAqIEBwYXJhbSBhIEZpcnN0IGNvZGUgcG9pbnRcbiAqIEBwYXJhbSBiIFNlY29uZCBjb2RlIHBvaW50XG4gKiBAcGFyYW0gYyBUaGlyZCBjb2RlIHBvaW50XG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5leHQgY29kZSBwb2ludHMgd291bGQgc3RhcnQgYSBudW1iZXIsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNzdGFydHMtd2l0aC1hLW51bWJlcn1cbiAqIEBub3RlIFRoaXMgYWxnb3JpdGhtIHdpbGwgbm90IGNvbnN1bWUgYW55IGFkZGl0aW9uYWwgY29kZSBwb2ludHMuXG4gKi9cbmNvbnN0IGNoZWNrRm9yTnVtYmVyU3RhcnQgPSAoYSwgYiwgYykgPT4ge1xuICAgIC8vIExvb2sgYXQgdGhlIGZpcnN0IGNvZGUgcG9pbnQ6XG4gICAgLy8gVSswMDJCIFBMVVMgU0lHTiAoKylcbiAgICAvLyBVKzAwMkQgSFlQSEVOLU1JTlVTICgtKVxuICAgIGlmIChhID09PSA0MyAvKiBDb2RlUG9pbnQuUGx1c1NpZ24gKi8gfHwgYSA9PT0gNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovKSB7XG4gICAgICAgIC8vIElmIHRoZSBzZWNvbmQgY29kZSBwb2ludCBpcyBhIGRpZ2l0LCByZXR1cm4gdHJ1ZS5cbiAgICAgICAgaWYgKGlzRGlnaXQoYikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIHNlY29uZCBjb2RlIHBvaW50IGlzIGEgVSswMDJFIEZVTEwgU1RPUCAoLikgYW5kIHRoZSB0aGlyZCBjb2RlIHBvaW50IGlzIGEgZGlnaXQsIHJldHVyblxuICAgICAgICAvLyB0cnVlLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBmYWxzZS5cbiAgICAgICAgcmV0dXJuIGIgPT09IDQ2IC8qIENvZGVQb2ludC5GdWxsU3RvcCAqLyAmJiBpc0RpZ2l0KGMpO1xuICAgIH1cbiAgICAvLyBVKzAwMkUgRlVMTCBTVE9QICguKVxuICAgIGlmIChhID09PSA0NiAvKiBDb2RlUG9pbnQuRnVsbFN0b3AgKi8pIHtcbiAgICAgICAgLy8gSWYgdGhlIHNlY29uZCBjb2RlIHBvaW50IGlzIGEgZGlnaXQsIHJldHVybiB0cnVlLiBPdGhlcndpc2UsIHJldHVybiBmYWxzZS5cbiAgICAgICAgcmV0dXJuIGlzRGlnaXQoYik7XG4gICAgfVxuICAgIC8vIGRpZ2l0XG4gICAgLy8gUmV0dXJuIHRydWUuXG4gICAgLy8gYW55dGhpbmcgZWxzZVxuICAgIC8vIFJldHVybiBmYWxzZS5cbiAgICByZXR1cm4gaXNEaWdpdChhKTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbi8qKlxuICogQGZpbGUgSGFzaGluZyBmdW5jdGlvbnMgYmFzZWQgb24gdGhlIGRqYjIgYWxnb3JpdGhtXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cDovL3d3dy5jc2UueW9ya3UuY2Evfm96L2hhc2guaHRtbH1cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2VwbGF3bGVzcy81MjgxM2IxZDhhZDlhZjUxMGQ4NT9wZXJtYWxpbmtfY29tbWVudF9pZD0zMzY3NzY1I2dpc3Rjb21tZW50LTMzNjc3NjV9XG4gKiBAdG9kbyBJZiB3ZSBuZWVkIGl0LCB3ZSBjYW4gY3JlYXRlIGNhc2Utc2Vuc2l0aXZlIHZlcnNpb25zIG9mIHRoZXNlIGZ1bmN0aW9uc1xuICovXG4vKipcbiAqIE1ha2UgYSB1bmlxdWUgaGFzaCBmcm9tIHRoZSBnaXZlbiBhcnJheSBvZiBjb2RlIHBvaW50c1xuICpcbiAqIEBwYXJhbSBhcnIgUmVmZXJlbmNlIHRvIHRoZSBhcnJheSBvZiBjb2RlIHBvaW50c1xuICogQHBhcmFtIHN0YXJ0IFN0YXJ0IGluZGV4XG4gKiBAcGFyYW0gZW5kIEVuZCBpbmRleFxuICogQHJldHVybnMgSGFzaCBvZiB0aGUgZ2l2ZW4gYXJyYXkgb2YgY29kZSBwb2ludHNcbiAqIEBub3RlIENhc2UtaW5zZW5zaXRpdmUgKHdlIHVzZSBpdCBqdXN0IGZvciBmdW5jdGlvbiBuYW1lcyB3aGljaCBhcmUgY2FzZS1pbnNlbnNpdGl2ZSlcbiAqL1xuZnVuY3Rpb24gZ2V0Q29kZVBvaW50c0FycmF5SGFzaChhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDEpIHtcbiAgICAgICAgaGFzaCA9IGhhc2ggKiAzMyBeIChhcnJbaV0gfCAweDIwKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbi8qKlxuICogQGZpbGUgVG9rZW5pemVyIGNvbnRleHRcbiAqL1xuLyoqXG4gKiBDb250ZXh0IG9mIHRoZSB0b2tlbml6ZXIgd2hpY2ggaXMgc2hhcmVkIGJldHdlZW4gYWxsIHRoZSBmdW5jdGlvbnNcbiAqL1xuY2xhc3MgVG9rZW5pemVyQ29udGV4dCB7XG4gICAgLyoqXG4gICAgICogQ2FjaGVkIHNvdXJjZSBsZW5ndGhcbiAgICAgKi9cbiAgICBsZW5ndGg7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBgb25Ub2tlbmAgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvblRva2VuO1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgYG9uRXJyb3JgIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25FcnJvcjtcbiAgICAvKipcbiAgICAgKiBVbmljb2RlIGNvZGUgcG9pbnRzIG9mIHRoZSBzb3VyY2Ugc3RyaW5nXG4gICAgICpcbiAgICAgKiBAbm90ZSBUaGUgbGFzdCBjb2RlIHBvaW50IGlzIGFsd2F5cyBFT0YgKFwiaW1hZ2luYXJ5XCIgY29kZSBwb2ludClcbiAgICAgKiBAbm90ZSBVc2luZyBgIWAgaXMgc2FmZSBoZXJlIGJlY2F1c2UgdGhlIGBwcmVwcm9jZXNzYCBmdW5jdGlvbiBhbHdheXMgc2V0cyB0aGUgY29kZXMgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgICogQG5vdGUgV2UgbmVlZCBhIHNpZ25lZCAzMi1iaXQgaW50ZWdlciBhcnJheSwgYmVjYXVzZSB0aGUgY29kZSBwb2ludHMgYXJlIDIxLWJpdCBpbnRlZ2VycyArIGltYWdpbmFyeSBjb2RlIHBvaW50c1xuICAgICAqIGFyZSBuZWdhdGl2ZSBudW1iZXJzXG4gICAgICovXG4gICAgY29kZXM7XG4gICAgLyoqXG4gICAgICogQWN0dWFsIHBvc2l0aW9uIGluIHRoZSBzb3VyY2Ugc3RyaW5nXG4gICAgICovXG4gICAgY3Vyc29yO1xuICAgIC8qKlxuICAgICAqIEN1c3RvbSBmdW5jdGlvbiBoYW5kbGVycyB0byBoYW5kbGUgc3BlY2lhbCBmdW5jdGlvbnMsIGxpa2UgRXh0ZW5kZWQgQ1NTJ3MgcHNldWRvIHNlbGVjdG9yc1xuICAgICAqL1xuICAgIGN1c3RvbUZ1bmN0aW9uSGFuZGxlcnM7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZSBTb3VyY2Ugc3RyaW5nXG4gICAgICogQHBhcmFtIG9uVG9rZW4gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgdG9rZW4gaXMgZm91bmRcbiAgICAgKiBAcGFyYW0gb25FcnJvciBDYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBwYXJzaW5nIGVycm9yIG9jY3Vyc1xuICAgICAqIEBwYXJhbSBmdW5jdGlvbkhhbmRsZXJzIEN1c3RvbSBmdW5jdGlvbiBoYW5kbGVycyB0byBoYW5kbGUgc3BlY2lhbCBmdW5jdGlvbnMsIGxpa2UgRXh0ZW5kZWQgQ1NTJ3MgcHNldWRvXG4gICAgICogc2VsZWN0b3JzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBvblRva2VuLCBvbkVycm9yLCBmdW5jdGlvbkhhbmRsZXJzKSB7XG4gICAgICAgIC8vIFNldCB0aGUgc291cmNlIGFuZCBvZmZzZXRcbiAgICAgICAgLy8gdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gc291cmNlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzKHNvdXJjZSk7XG4gICAgICAgIC8vIElnbm9yZSBCT00gY2hhcmFjdGVyIGlmIHByZXNlbnRcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBpc0JPTSh0aGlzLmNvZGVzWzBdKSA/IDEgOiAwO1xuICAgICAgICAvLyBTZXQgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLm9uVG9rZW4gPSBvblRva2VuO1xuICAgICAgICB0aGlzLm9uRXJyb3IgPSBvbkVycm9yO1xuICAgICAgICAvLyBSZWdpc3RlciBjdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMsIGlmIGFueVxuICAgICAgICBpZiAoZnVuY3Rpb25IYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21GdW5jdGlvbkhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbaGFzaCwgaGFuZGxlcl0gb2YgZnVuY3Rpb25IYW5kbGVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRnVuY3Rpb25IYW5kbGVycy5zZXQoaGFzaCwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogwqcgMy4zLiBQcmVwcm9jZXNzaW5nIHRoZSBpbnB1dCBzdHJlYW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIHN0cmluZyB0byBwcmVwcm9jZXNzXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaW5wdXQtcHJlcHJvY2Vzc2luZ31cbiAgICAgKi9cbiAgICBwcmVwcm9jZXNzKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBsZW4gPSBzb3VyY2UubGVuZ3RoO1xuICAgICAgICB0aGlzLmNvZGVzID0gbmV3IEludDMyQXJyYXkobGVuICsgMSk7IC8vIGFkZCArMSBzbG90IGZvciB0aGUgRU9GIFwiY29kZSBwb2ludFwiXG4gICAgICAgIC8vIFRPRE86IFVuY29tbWVudCB3aGVuIG5lZWRlZCAtIGFjdHVhbGx5LCB3ZSBkb24ndCBjb252ZXJ0IHRoZSBDUkxGIHRvIExGIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHNvdXJjZSBwb3NpdGlvbnNcbiAgICAgICAgLy8gLy8gVGhlIGlucHV0IHN0cmVhbSBjb25zaXN0cyBvZiB0aGUgZmlsdGVyZWQgY29kZSBwb2ludHMgcHVzaGVkIGludG8gaXQgYXMgdGhlIGlucHV0IGJ5dGUgc3RyZWFtIGlzIGRlY29kZWQuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gICAgIC8vIFRvIGZpbHRlciBjb2RlIHBvaW50cyBmcm9tIGEgc3RyZWFtIG9mICh1bmZpbHRlcmVkKSBjb2RlIHBvaW50cyBpbnB1dDpcbiAgICAgICAgLy8gICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAvLyAgICAgICAgIC8vIFJlcGxhY2UgYW55IFUrMDAwRCBDQVJSSUFHRSBSRVRVUk4gKENSKSBjb2RlIHBvaW50cywgVSswMDBDIEZPUk0gRkVFRCAoRkYpIGNvZGUgcG9pbnRzLCBvciBwYWlyc1xuICAgICAgICAvLyAgICAgICAgIC8vIG9mIFUrMDAwRCBDQVJSSUFHRSBSRVRVUk4gKENSKSBmb2xsb3dlZCBieSBVKzAwMEEgTElORSBGRUVEIChMRikgaW4gaW5wdXQgYnkgYSBzaW5nbGVcbiAgICAgICAgLy8gICAgICAgICAvLyBVKzAwMEEgTElORSBGRUVEIChMRikgY29kZSBwb2ludC5cbiAgICAgICAgLy8gICAgICAgICBjYXNlIENvZGVQb2ludC5DYXJyaWFnZVJldHVybjpcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHNvdXJjZS5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gQ29kZVBvaW50LkxpbmVGZWVkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNvZGVzW2ldID0gQ29kZVBvaW50LkxpbmVGZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgbmV4dCBjb2RlIHBvaW50XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvZGVzW2ldID0gQ29kZVBvaW50LkxpbmVGZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICBjYXNlIENvZGVQb2ludC5Gb3JtRmVlZDpcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jb2Rlc1tpXSA9IENvZGVQb2ludC5MaW5lRmVlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgLy8gUmVwbGFjZSBhbnkgVSswMDAwIE5VTEwgb3Igc3Vycm9nYXRlIGNvZGUgcG9pbnRzIGluIGlucHV0IHdpdGggVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUiAo77+9KS5cbiAgICAgICAgLy8gICAgICAgICBjYXNlIENvZGVQb2ludC5OdWxsOlxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvZGVzW2ldID0gQ29kZVBvaW50LlJlcGxhY2VtZW50Q2hhcmFjdGVyO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvZGVzW2ldID0gY29kZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gRXZlcnl0aGluZyB3aGF0IHdlIG5lZWQgaGVyZSBpcyB0byB0cmFuc2Zvcm0gdGhlIEFTQ0lJIHNvdXJjZSB0byBVbmljb2RlIGNvZGUgcG9pbnRzIGFzIGZhc3QgYXMgcG9zc2libGVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb2Rlc1tpXSA9IHNvdXJjZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBsYXN0IGNvZGUgcG9pbnQgdG8gRU9GICh0aGlzIHdheSB3ZSBjYW4gdXNlIGl0IGluIHN3aXRjaC1jYXNlIHN0YXRlbWVudHMsIHdoaWNoIGFyZSBmYXN0ZXIgdGhhbiBpZi1lbHNlXG4gICAgICAgIC8vIG9yIGNsYXNzaWMgbG9va3VwIHRhYmxlcylcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk1NTUzOVxuICAgICAgICB0aGlzLmNvZGVzW2xlbl0gPSAtMSAvKiBJbWFnaW5hcnlDb2RlUG9pbnQuRW9mICovO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb3JyZXNwb25kaW5nIGN1c3RvbSBmdW5jdGlvbiBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gZnVuY3Rpb24gbmFtZSBoYXNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaGFzaCBGdW5jdGlvbiBuYW1lIGhhc2hcbiAgICAgKiBAcmV0dXJucyBDb3JyZXNwb25kaW5nIGN1c3RvbSBmdW5jdGlvbiBoYW5kbGVyIG9yIGB1bmRlZmluZWRgIGlmIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIGdldEZ1bmN0aW9uSGFuZGxlcihoYXNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUZ1bmN0aW9uSGFuZGxlcnM/LmdldChoYXNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXN0b20gZnVuY3Rpb24gaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciB0aGUgZ2l2ZW4gZnVuY3Rpb24gbmFtZSBoYXNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaGFzaCBDdXN0b20gZnVuY3Rpb24gbmFtZSBoYXNoXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBjdXN0b20gZnVuY3Rpb24gaGFuZGxlciBpcyByZWdpc3RlcmVkLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGhhc0Z1bmN0aW9uSGFuZGxlcihoYXNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUZ1bmN0aW9uSGFuZGxlcnM/LmhhcyhoYXNoKSA/PyBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBvZmZzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEN1cnJlbnQgb2Zmc2V0XG4gICAgICovXG4gICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb2RlIHBvaW50IGF0IHRoZSBjdXJyZW50IG9mZnNldFxuICAgICAqXG4gICAgICogQHJldHVybnMgQ29kZSBwb2ludCBhdCB0aGUgY3VycmVudCBvZmZzZXRcbiAgICAgKi9cbiAgICBnZXQgY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZXNbdGhpcy5vZmZzZXRdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb2RlIHBvaW50IGF0IHRoZSBwcmV2aW91cyBvZmZzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIENvZGUgcG9pbnQgYXQgdGhlIHByZXZpb3VzIG9mZnNldCBvciBgdW5kZWZpbmVkYCBpZiB0aGUgb2Zmc2V0IGlzIG91dCBvZiBib3VuZHNcbiAgICAgKi9cbiAgICBnZXQgcHJldkNvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVzW3RoaXMub2Zmc2V0IC0gMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvZGUgcG9pbnQgYXQgdGhlIG5leHQgb2Zmc2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBDb2RlIHBvaW50IGF0IHRoZSBuZXh0IG9mZnNldCBvciBgdW5kZWZpbmVkYCBpZiB0aGUgb2Zmc2V0IGlzIG91dCBvZiBib3VuZHNcbiAgICAgKi9cbiAgICBnZXQgbmV4dENvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVzW3RoaXMub2Zmc2V0ICsgMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvZGUgcG9pbnQgYXQgdGhlIGdpdmVuIHJlbGF0aXZlIG9mZnNldFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlbGF0aXZlT2Zmc2V0IFJlbGF0aXZlIG9mZnNldFxuICAgICAqIEByZXR1cm5zIENvZGUgcG9pbnQgYXQgdGhlIHJlbGF0aXZlIG9mZnNldCBvciBgdW5kZWZpbmVkYCBpZiB0aGUgb2Zmc2V0IGlzIG91dCBvZiBib3VuZHNcbiAgICAgKiBAbm90ZSBSZWxhdGl2ZSBvZmZzZXQgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgb2Zmc2V0LiAxIG1lYW5zIHRoZSBuZXh0IGNvZGUgcG9pbnQsIC0xIG1lYW5zIHRoZSBwcmV2aW91cyBjb2RlXG4gICAgICogcG9pbnQsIDIgbWVhbnMgdGhlIGNvZGUgcG9pbnQgYWZ0ZXIgdGhlIG5leHQgY29kZSBwb2ludCwgZXRjLlxuICAgICAqL1xuICAgIGdldFJlbGF0aXZlQ29kZShyZWxhdGl2ZU9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2Rlc1t0aGlzLm9mZnNldCArIHJlbGF0aXZlT2Zmc2V0XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb2Zmc2V0IGlzIGF0IHRoZSBlbmQgb2YgdGhlIHNvdXJjZSAob3IgcGFzdCBpdClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgY3VycmVudCBvZmZzZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgc291cmNlLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGlzRW9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0b2tlbml6ZXIgYnkgbW92aW5nIHRoZSBjdXJzb3IgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQuXG4gICAgICpcbiAgICAgKiBAbm90ZSBUaGlzIG1ldGhvZCBpcyBkZWZpbmVkIGFzIGFuIGFycm93IGZ1bmN0aW9uIHRvIGVuc3VyZSBpdCByZXRhaW5zIHRoZSBjb3JyZWN0IGB0aGlzYCBjb250ZXh0LlxuICAgICAqIFNpbmNlIGBzdG9wYCBpcyBhbHdheXMgcGFzc2VkIHRvIHRoZSBgb25Ub2tlbmAgY2FsbGJhY2ssIHdoaWNoIGlzIGludm9rZWQgZnJlcXVlbnRseSBkdXJpbmcgdG9rZW5pemF0aW9uLFxuICAgICAqIGF2b2lkaW5nIHVubmVjZXNzYXJ5IG92ZXJoZWFkIGlzIGNydWNpYWwuXG4gICAgICogVXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gcHJvdmlkZXMgYmV0dGVyIHBlcmZvcm1hbmNlIGNvbXBhcmVkIHRvIGJpbmRpbmcgdGhlIG1ldGhvZCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICAgKiBvciBhdCB0aGUgY2FsbCBzaXRlLlxuICAgICAqL1xuICAgIHN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5sZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbmV4dCBjb2RlIHBvaW50IGlzIEVPRlxuICAgICAqXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBuZXh0IGNvZGUgcG9pbnQgaXMgRU9GLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGlzTmV4dEVvZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yICsgMSA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IG9mZnNldCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGVuZCBvZiB0aGUgc291cmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnQgb2Zmc2V0IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgZW5kIG9mIHRoZSBzb3VyY2UsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAgICovXG4gICAgaXNMZXNzVGhhbkVxdWFsVG9Fb2YoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCA8PSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3VtZXMgdGhlIGdpdmVuIG51bWJlciBvZiBjb2RlIHBvaW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIG4gTnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRvIGNvbnN1bWUgKGRlZmF1bHQ6IDEpXG4gICAgICogQG5vdGUgTmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZCAodGhleSB3aWxsIG1vdmUgdGhlIGN1cnNvciBiYWNrd2FyZHMpXG4gICAgICogQG5vdGUgTm8gcHJvdGVjdGlvbiBhZ2FpbnN0IG91dCBvZiBib3VuZHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgICAgKi9cbiAgICBjb25zdW1lQ29kZVBvaW50KG4gPSAxKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yICs9IG47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBuZXh0IG5vbi13aGl0ZXNwYWNlIGNvZGUgcG9pbnQgYW5kIHJldHVybnMgaXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE5leHQgbm9uLXdoaXRlc3BhY2UgY29kZSBwb2ludCBvciBFT0YgaW1hZ2luYXJ5IGNvZGUgcG9pbnQgaWYgdGhlIHJlc3Qgb2YgdGhlIHNvdXJjZSBpcyB3aGl0ZXNwYWNlXG4gICAgICovXG4gICAgZ2V0TmV4dE5vbldzQ29kZSgpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmN1cnNvcjtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmxlbmd0aCAmJiBpc1doaXRlc3BhY2UodGhpcy5jb2Rlc1tpXSkpIHtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb2Rlc1tpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3VtZXMgdGhlIHdoaXRlc3BhY2UgY29kZSBwb2ludHNcbiAgICAgKi9cbiAgICBjb25zdW1lV2hpdGVzcGFjZSgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuY29kZSAmJiBpc1doaXRlc3BhY2UodGhpcy5jb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3VtZXMgYSBzaW5nbGUgd2hpdGVzcGFjZSBjb2RlIHBvaW50LCBpZiB0aGUgY3VycmVudCBjb2RlIHBvaW50IGlzIGEgd2hpdGVzcGFjZVxuICAgICAqL1xuICAgIGNvbnN1bWVTaW5nbGVXaGl0ZXNwYWNlKCkge1xuICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKHRoaXMuY29kZSkpIHtcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogY29uc3VtZSBDUkxGIGFzIGEgc2luZ2xlIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yICs9IHRoaXMuY29kZSA9PT0gMTMgLyogQ29kZVBvaW50LkNhcnJpYWdlUmV0dXJuICovICYmIHRoaXMubmV4dENvZGUgPT09IDEwIC8qIENvZGVQb2ludC5MaW5lRmVlZCAqLyA/IDIgOiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIGV2ZXJ5dGhpbmcgdW50aWwgdGhlIGVuZCBvZiB0aGUgY29tbWVudCAob3IgdGhlIGVuZCBvZiB0aGUgc291cmNlKVxuICAgICAqL1xuICAgIGNvbnN1bWVVbnRpbENvbW1lbnRFbmQoKSB7XG4gICAgICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVuZCBvZiB0aGUgY29tbWVudCBvciByZWFjaCB0aGUgZW5kIG9mIHRoZSBzb3VyY2VcbiAgICAgICAgd2hpbGUgKHRoaXMuY3Vyc29yIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjdXJyZW50IGNvZGUgcG9pbnQgaXMgYSAqXG4gICAgICAgICAgICBpZiAodGhpcy5jb2RlID09PSA0MiAvKiBDb2RlUG9pbnQuQXN0ZXJpc2sgKi8gJiYgdGhpcy5uZXh0Q29kZSA9PT0gNDcgLyogQ29kZVBvaW50LlNvbGlkdXMgKi8pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdW1lICcqLycgYW5kIGV4aXQgdGhlIGxvb3BcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvciArPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc3VtZSB0aGUgY3VycmVudCBjb2RlIHBvaW50LCBpdCBzZWVtcyBpdCdzIGEgcGFydCBvZiB0aGUgY29tbWVudFxuICAgICAgICAgICAgdGhpcy5jdXJzb3IgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyBhIHNpbmdsZS1jaGFyYWN0ZXIgdG9rZW4gKHRyaXZpYWwgdG9rZW4pIGFuZCByZXBvcnRzIGl0IHZpYSB0aGUgYG9uVG9rZW5gIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdG9rZW5UeXBlIFRva2VuIHR5cGUgdG8gcmVwb3J0XG4gICAgICovXG4gICAgY29uc3VtZVRyaXZpYWxUb2tlbih0b2tlblR5cGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICAgIHRoaXMub25Ub2tlbih0b2tlblR5cGUsIHRoaXMuY3Vyc29yLCArK3RoaXMuY3Vyc29yLCB1bmRlZmluZWQsIHRoaXMuc3RvcCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGhhc2ggb2YgdGhlIGZyYWdtZW50IGZyb20gdGhlIGdpdmVuIHN0YXJ0IG9mZnNldCB0byB0aGUgY3VycmVudCBvZmZzZXQuIFRoaXMgaXMgdXNlZnVsIHRvXG4gICAgICogZmFzdC1jaGVjayBmdW5jdGlvbiBuYW1lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCBTdGFydCBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyBDYWxjdWxhdGVkIGhhc2hcbiAgICAgKi9cbiAgICBnZXRIYXNoRnJvbShzdGFydCkge1xuICAgICAgICByZXR1cm4gZ2V0Q29kZVBvaW50c0FycmF5SGFzaCh0aGlzLmNvZGVzLCBzdGFydCwgdGhpcy5jdXJzb3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZmlsZSBQb3NzaWJsZSBDU1MgdG9rZW4gdHlwZXMsIGFzIGRlZmluZWQgaW4gdGhlIENTUyBTeW50YXggTW9kdWxlIExldmVsIDMuXG4gKlxuICogISBTdHJpY3RseSBmb2xsb3dzIHRoZSBzcGVjLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI3Rva2VuaXphdGlvbn1cbiAqL1xudmFyIFRva2VuVHlwZTtcbihmdW5jdGlvbiAoVG9rZW5UeXBlKSB7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIkVvZlwiXSA9IDBdID0gXCJFb2ZcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiSWRlbnRcIl0gPSAxXSA9IFwiSWRlbnRcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiRnVuY3Rpb25cIl0gPSAyXSA9IFwiRnVuY3Rpb25cIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQXRLZXl3b3JkXCJdID0gM10gPSBcIkF0S2V5d29yZFwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJIYXNoXCJdID0gNF0gPSBcIkhhc2hcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiU3RyaW5nXCJdID0gNV0gPSBcIlN0cmluZ1wiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJCYWRTdHJpbmdcIl0gPSA2XSA9IFwiQmFkU3RyaW5nXCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIlVybFwiXSA9IDddID0gXCJVcmxcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQmFkVXJsXCJdID0gOF0gPSBcIkJhZFVybFwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJEZWxpbVwiXSA9IDldID0gXCJEZWxpbVwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJOdW1iZXJcIl0gPSAxMF0gPSBcIk51bWJlclwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJQZXJjZW50YWdlXCJdID0gMTFdID0gXCJQZXJjZW50YWdlXCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIkRpbWVuc2lvblwiXSA9IDEyXSA9IFwiRGltZW5zaW9uXCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIldoaXRlc3BhY2VcIl0gPSAxM10gPSBcIldoaXRlc3BhY2VcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQ2RvXCJdID0gMTRdID0gXCJDZG9cIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQ2RjXCJdID0gMTVdID0gXCJDZGNcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQ29sb25cIl0gPSAxNl0gPSBcIkNvbG9uXCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIlNlbWljb2xvblwiXSA9IDE3XSA9IFwiU2VtaWNvbG9uXCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIkNvbW1hXCJdID0gMThdID0gXCJDb21tYVwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJPcGVuU3F1YXJlQnJhY2tldFwiXSA9IDE5XSA9IFwiT3BlblNxdWFyZUJyYWNrZXRcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQ2xvc2VTcXVhcmVCcmFja2V0XCJdID0gMjBdID0gXCJDbG9zZVNxdWFyZUJyYWNrZXRcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiT3BlblBhcmVudGhlc2lzXCJdID0gMjFdID0gXCJPcGVuUGFyZW50aGVzaXNcIjtcbiAgICBUb2tlblR5cGVbVG9rZW5UeXBlW1wiQ2xvc2VQYXJlbnRoZXNpc1wiXSA9IDIyXSA9IFwiQ2xvc2VQYXJlbnRoZXNpc1wiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJPcGVuQ3VybHlCcmFja2V0XCJdID0gMjNdID0gXCJPcGVuQ3VybHlCcmFja2V0XCI7XG4gICAgVG9rZW5UeXBlW1Rva2VuVHlwZVtcIkNsb3NlQ3VybHlCcmFja2V0XCJdID0gMjRdID0gXCJDbG9zZUN1cmx5QnJhY2tldFwiO1xuICAgIFRva2VuVHlwZVtUb2tlblR5cGVbXCJDb21tZW50XCJdID0gMjVdID0gXCJDb21tZW50XCI7XG59KShUb2tlblR5cGUgfHwgKFRva2VuVHlwZSA9IHt9KSk7XG5cbi8qKlxuICogQGZpbGUgQ1NTIHRva2VuIG5hbWVzXG4gKi9cbmNvbnN0IFVOS05PV05fVE9LRU5fTkFNRSA9ICd1bmtub3duJztcbi8qKlxuICogUGFpcnMgb2YgdG9rZW4gdHlwZXMgYW5kIHRoZWlyIGJhc2UgbmFtZXNcbiAqL1xuY29uc3QgVE9LRU5fTkFNRVMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBbVG9rZW5UeXBlLkVvZl06ICdlb2YnLFxuICAgIFtUb2tlblR5cGUuSWRlbnRdOiAnaWRlbnQnLFxuICAgIFtUb2tlblR5cGUuRnVuY3Rpb25dOiAnZnVuY3Rpb24nLFxuICAgIFtUb2tlblR5cGUuQXRLZXl3b3JkXTogJ2F0LWtleXdvcmQnLFxuICAgIFtUb2tlblR5cGUuSGFzaF06ICdoYXNoJyxcbiAgICBbVG9rZW5UeXBlLlN0cmluZ106ICdzdHJpbmcnLFxuICAgIFtUb2tlblR5cGUuQmFkU3RyaW5nXTogJ2JhZC1zdHJpbmcnLFxuICAgIFtUb2tlblR5cGUuVXJsXTogJ3VybCcsXG4gICAgW1Rva2VuVHlwZS5CYWRVcmxdOiAnYmFkLXVybCcsXG4gICAgW1Rva2VuVHlwZS5EZWxpbV06ICdkZWxpbScsXG4gICAgW1Rva2VuVHlwZS5OdW1iZXJdOiAnbnVtYmVyJyxcbiAgICBbVG9rZW5UeXBlLlBlcmNlbnRhZ2VdOiAncGVyY2VudGFnZScsXG4gICAgW1Rva2VuVHlwZS5EaW1lbnNpb25dOiAnZGltZW5zaW9uJyxcbiAgICBbVG9rZW5UeXBlLldoaXRlc3BhY2VdOiAnd2hpdGVzcGFjZScsXG4gICAgW1Rva2VuVHlwZS5DZG9dOiAnQ0RPJyxcbiAgICBbVG9rZW5UeXBlLkNkY106ICdDREMnLFxuICAgIFtUb2tlblR5cGUuQ29sb25dOiAnY29sb24nLFxuICAgIFtUb2tlblR5cGUuU2VtaWNvbG9uXTogJ3NlbWljb2xvbicsXG4gICAgW1Rva2VuVHlwZS5Db21tYV06ICdjb21tYScsXG4gICAgW1Rva2VuVHlwZS5PcGVuU3F1YXJlQnJhY2tldF06ICdbJyxcbiAgICBbVG9rZW5UeXBlLkNsb3NlU3F1YXJlQnJhY2tldF06ICddJyxcbiAgICBbVG9rZW5UeXBlLk9wZW5QYXJlbnRoZXNpc106ICcoJyxcbiAgICBbVG9rZW5UeXBlLkNsb3NlUGFyZW50aGVzaXNdOiAnKScsXG4gICAgW1Rva2VuVHlwZS5PcGVuQ3VybHlCcmFja2V0XTogJ3snLFxuICAgIFtUb2tlblR5cGUuQ2xvc2VDdXJseUJyYWNrZXRdOiAnfScsXG4gICAgW1Rva2VuVHlwZS5Db21tZW50XTogJ2NvbW1lbnQnLFxufSk7XG4vKipcbiAqIEdldCBiYXNlIHRva2VuIG5hbWUgYnkgdG9rZW4gdHlwZVxuICpcbiAqIEBwYXJhbSB0eXBlIFRva2VuIHR5cGVcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGdldEJhc2VUb2tlbk5hbWUoVG9rZW5UeXBlLklkZW50KTsgLy8gJ2lkZW50J1xuICogZ2V0QmFzZVRva2VuTmFtZSgtMSk7IC8vICd1bmtub3duJ1xuICogYGBgXG4gKlxuICogQHJldHVybnMgQmFzZSB0b2tlbiBuYW1lIG9yICd1bmtub3duJyBpZiB0b2tlbiB0eXBlIGlzIHVua25vd25cbiAqL1xuY29uc3QgZ2V0QmFzZVRva2VuTmFtZSA9ICh0eXBlKSA9PiB7XG4gICAgcmV0dXJuIFRPS0VOX05BTUVTW3R5cGVdID8/IFVOS05PV05fVE9LRU5fTkFNRTtcbn07XG4vKipcbiAqIEdldCBmb3JtYXR0ZWQgdG9rZW4gbmFtZSBieSB0b2tlbiB0eXBlXG4gKlxuICogQHBhcmFtIHR5cGUgVG9rZW4gdHlwZVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogZ2V0Rm9ybWF0dGVkVG9rZW5OYW1lKFRva2VuVHlwZS5JZGVudCk7IC8vICc8aWRlbnQtdG9rZW4+J1xuICogZ2V0Rm9ybWF0dGVkVG9rZW5OYW1lKC0xKTsgLy8gJzx1bmtub3duLXRva2VuPidcbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIEZvcm1hdHRlZCB0b2tlbiBuYW1lIG9yIGAnPHVua25vd24tdG9rZW4+J2AgaWYgdG9rZW4gdHlwZSBpcyB1bmtub3duXG4gKi9cbmNvbnN0IGdldEZvcm1hdHRlZFRva2VuTmFtZSA9ICh0eXBlKSA9PiB7XG4gICAgcmV0dXJuIGA8JHtnZXRCYXNlVG9rZW5OYW1lKHR5cGUpfS10b2tlbj5gO1xufTtcblxuLyoqXG4gKiBAZmlsZSBUb2tlbml6aW5nIGxvZ2ljIGZvciBlc2NhcGVkIGNvZGUgcG9pbnRzXG4gKi9cbmNvbnN0IE1BWF9IRVhfRElHSVRTID0gNjtcbi8qKlxuICogwqcgNC4zLjcuIENvbnN1bWUgYW4gZXNjYXBlZCBjb2RlIHBvaW50XG4gKlxuICogQHBhcmFtIGNvbnRleHQgUmVmZXJlbmNlIHRvIHRoZSB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1lc2NhcGVkLWNvZGUtcG9pbnR9XG4gKi9cbmNvbnN0IGNvbnN1bWVFc2NhcGVkQ29kZVBvaW50ID0gKGNvbnRleHQpID0+IHtcbiAgICAvLyBJdCBhc3N1bWVzIHRoYXQgdGhlIFUrMDA1QyBSRVZFUlNFIFNPTElEVVMgKFxcKSBoYXMgYWxyZWFkeSBiZWVuIGNvbnN1bWVkIGFuZCB0aGF0IHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaGFzXG4gICAgLy8gYWxyZWFkeSBiZWVuIHZlcmlmaWVkIHRvIGJlIHBhcnQgb2YgYSB2YWxpZCBlc2NhcGUuXG4gICAgLy8gQ29uc3VtZSB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50LlxuICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgIC8vIGhleCBkaWdpdFxuICAgIGlmIChpc0hleERpZ2l0KGNvbnRleHQuY29kZSkpIHtcbiAgICAgICAgLy8gQ29uc3VtZSBhcyBtYW55IGhleCBkaWdpdHMgYXMgcG9zc2libGUsIGJ1dCBubyBtb3JlIHRoYW4gNS4gTm90ZSB0aGF0IHRoaXMgbWVhbnMgMS02IGhleCBkaWdpdHMgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGNvbnN1bWVkIGluIHRvdGFsLiBJZiB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50IGlzIHdoaXRlc3BhY2UsIGNvbnN1bWUgaXQgYXMgd2VsbC4gSW50ZXJwcmV0IHRoZSBoZXggZGlnaXRzXG4gICAgICAgIC8vIGFzIGEgaGV4YWRlY2ltYWwgbnVtYmVyLlxuICAgICAgICBsZXQgY29uc3VtZWRIZXhEaWdpdHMgPSAwO1xuICAgICAgICB3aGlsZSAoaXNIZXhEaWdpdChjb250ZXh0LmNvZGUpICYmIGNvbnN1bWVkSGV4RGlnaXRzIDw9IE1BWF9IRVhfRElHSVRTKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgIGNvbnN1bWVkSGV4RGlnaXRzICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBpcyB3aGl0ZXNwYWNlLCBjb25zdW1lIGl0IGFzIHdlbGwuXG4gICAgICAgIGNvbnRleHQuY29uc3VtZVNpbmdsZVdoaXRlc3BhY2UoKTtcbiAgICAgICAgLy8gSWYgdGhpcyBudW1iZXIgaXMgemVybywgb3IgaXMgZm9yIGEgc3Vycm9nYXRlLCBvciBpcyBncmVhdGVyIHRoYW4gdGhlIG1heGltdW0gYWxsb3dlZCBjb2RlIHBvaW50LFxuICAgICAgICAvLyByZXR1cm4gVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUiAo77+9KS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIGNvZGUgcG9pbnQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgc3Vycm9nYXRlIGNoZWNrXG4gICAgfVxuICAgIC8vIEVPRlxuICAgIC8vIFRoaXMgaXMgYSBwYXJzZSBlcnJvci4gUmV0dXJuIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVIgKO+/vSkuXG4gICAgaWYgKGNvbnRleHQuaXNFb2YoKSkge1xuICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBmaWxlIHdoaWxlIHBhcnNpbmcgZXNjYXBlZCBjb2RlIHBvaW50LlwiIC8qIEVycm9yTWVzc2FnZS5VbmV4cGVjdGVkRW9mSW5Fc2NhcGVkICovLCBjb250ZXh0Lm9mZnNldCwgY29udGV4dC5vZmZzZXQpO1xuICAgIH1cbiAgICAvLyBhbnl0aGluZyBlbHNlXG4gICAgLy8gUmV0dXJuIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuXG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIGlkZW50IHNlcXVlbmNlc1xuICovXG4vKipcbiAqIMKnIDQuMy4xMS4gQ29uc3VtZSBhbiBpZGVudCBzZXF1ZW5jZVxuICpcbiAqIENvbnN1bWUgYW4gaWRlbnQgc2VxdWVuY2UgZnJvbSBhIHN0cmVhbSBvZiBjb2RlIHBvaW50cy4gSXQgcmV0dXJucyBhIHN0cmluZyBjb250YWluaW5nIHRoZSBsYXJnZXN0IG5hbWUgdGhhdCBjYW4gYmVcbiAqIGZvcm1lZCBmcm9tIGFkamFjZW50IGNvZGUgcG9pbnRzIGluIHRoZSBzdHJlYW0sIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0LlxuICpcbiAqIEBwYXJhbSBjb250ZXh0IFJlZmVyZW5jZSB0byB0aGUgdG9rZW5pemVyIGNvbnRleHQgaW5zdGFuY2VcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2NvbnN1bWUtbmFtZX1cbiAqIEBub3RlIFRoaXMgYWxnb3JpdGhtIGRvZXMgbm90IGRvIHRoZSB2ZXJpZmljYXRpb24gb2YgdGhlIGZpcnN0IGZldyBjb2RlIHBvaW50cyB0aGF0IGFyZSBuZWNlc3NhcnkgdG8gZW5zdXJlIHRoZVxuICogcmV0dXJuZWQgY29kZSBwb2ludHMgd291bGQgY29uc3RpdHV0ZSBhbiA8aWRlbnQtdG9rZW4+LiBJZiB0aGF0IGlzIHRoZSBpbnRlbmRlZCB1c2UsIGVuc3VyZSB0aGF0IHRoZSBzdHJlYW1cbiAqIHN0YXJ0cyB3aXRoIGFuIGlkZW50IHNlcXVlbmNlIGJlZm9yZSBjYWxsaW5nIHRoaXMgYWxnb3JpdGhtLlxuICovXG5jb25zdCBjb25zdW1lSW5kZW50U2VxdWVuY2UgPSAoY29udGV4dCkgPT4ge1xuICAgIC8vIExldCByZXN1bHQgaW5pdGlhbGx5IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICAvLyBSZXBlYXRlZGx5IGNvbnN1bWUgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBmcm9tIHRoZSBzdHJlYW06XG4gICAgd2hpbGUgKCFjb250ZXh0LmlzRW9mKCkpIHtcbiAgICAgICAgLy8gaWRlbnQgY29kZSBwb2ludFxuICAgICAgICBpZiAoaXNJZGVudENvZGVQb2ludChjb250ZXh0LmNvZGUpKSB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGNvZGUgcG9pbnQgdG8gcmVzdWx0LlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgc3RyZWFtIHN0YXJ0cyB3aXRoIGEgdmFsaWQgZXNjYXBlXG4gICAgICAgIGlmIChjaGVja0ZvclZhbGlkRXNjYXBlKGNvbnRleHQuY29kZSwgY29udGV4dC5uZXh0Q29kZSkpIHtcbiAgICAgICAgICAgIC8vIENvbnN1bWUgYW4gZXNjYXBlZCBjb2RlIHBvaW50LiBBcHBlbmQgdGhlIHJldHVybmVkIGNvZGUgcG9pbnQgdG8gcmVzdWx0LlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICBjb25zdW1lRXNjYXBlZENvZGVQb2ludChjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gUmVjb25zdW1lIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuIFJldHVybiByZXN1bHQuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIFVSTHNcbiAqL1xuLyoqXG4gKiDCpyA0LjMuMTQuIENvbnN1bWUgdGhlIHJlbW5hbnRzIG9mIGEgYmFkIHVybFxuICpcbiAqIENvbnN1bWUgdGhlIHJlbW5hbnRzIG9mIGEgYmFkIHVybCBmcm9tIGEgc3RyZWFtIG9mIGNvZGUgcG9pbnRzLCBcImNsZWFuaW5nIHVwXCIgYWZ0ZXIgdGhlIHRva2VuaXplciByZWFsaXplcyB0aGF0IGl04oCZc1xuICogaW4gdGhlIG1pZGRsZSBvZiBhIDxiYWQtdXJsLXRva2VuPiByYXRoZXIgdGhhbiBhIDx1cmwtdG9rZW4+LiBJdCByZXR1cm5zIG5vdGhpbmc7IGl0cyBzb2xlIHVzZSBpcyB0byBjb25zdW1lIGVub3VnaFxuICogb2YgdGhlIGlucHV0IHN0cmVhbSB0byByZWFjaCBhIHJlY292ZXJ5IHBvaW50IHdoZXJlIG5vcm1hbCB0b2tlbml6aW5nIGNhbiByZXN1bWUuXG4gKlxuICogQHBhcmFtIGNvbnRleHQgVG9rZW5pemVyIGNvbnRleHRcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2NvbnN1bWUtcmVtbmFudHMtb2YtYmFkLXVybH1cbiAqL1xuZnVuY3Rpb24gY29uc3VtZUJhZFVybFJlbW5hbnRzKGNvbnRleHQpIHtcbiAgICAvLyBSZXBlYXRlZGx5IGNvbnN1bWUgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBmcm9tIHRoZSBzdHJlYW06XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgIGZvciAoOyAhY29udGV4dC5pc0VvZigpOyBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKSkge1xuICAgICAgICAvLyBVKzAwMjkgUklHSFQgUEFSRU5USEVTSVMgKCkpXG4gICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDQxIC8qIENvZGVQb2ludC5SaWdodFBhcmVudGhlc2lzICovKSB7XG4gICAgICAgICAgICAvLyBEb27igJl0IGZvcmdldCB0byBjb25zdW1lIGl0LlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGlucHV0IHN0cmVhbSBzdGFydHMgd2l0aCBhIHZhbGlkIGVzY2FwZVxuICAgICAgICBpZiAoY2hlY2tGb3JWYWxpZEVzY2FwZShjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgxKSwgY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMikpKSB7XG4gICAgICAgICAgICAvLyBDb25zdW1lIGFuIGVzY2FwZWQgY29kZSBwb2ludC4gVGhpcyBhbGxvd3MgYW4gZXNjYXBlZCByaWdodCBwYXJlbnRoZXNpcyAoXCJcXClcIikgdG8gYmUgZW5jb3VudGVyZWRcbiAgICAgICAgICAgIC8vIHdpdGhvdXQgZW5kaW5nIHRoZSA8YmFkLXVybC10b2tlbj4uIFRoaXMgaXMgb3RoZXJ3aXNlIGlkZW50aWNhbCB0byB0aGUgXCJhbnl0aGluZyBlbHNlXCIgY2xhdXNlLlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICBjb25zdW1lRXNjYXBlZENvZGVQb2ludChjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICB9XG59XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY29uc3VtaW5nIGEgYmFkIHVybCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCBUb2tlbml6ZXIgY29udGV4dFxuICogQHBhcmFtIHN0YXJ0IFRva2VuIHN0YXJ0IG9mZnNldFxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1yZW1uYW50cy1vZi1iYWQtdXJsfVxuICovXG5mdW5jdGlvbiBjb25zdW1lQmFkVXJsVG9rZW4oY29udGV4dCwgc3RhcnQpIHtcbiAgICBjb25zdW1lQmFkVXJsUmVtbmFudHMoY29udGV4dCk7XG4gICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5CYWRVcmwsIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xufVxuLyoqXG4gKiDCpyA0LjMuNi4gQ29uc3VtZSBhIHVybCB0b2tlblxuICpcbiAqIENvbnN1bWUgYSB1cmwgdG9rZW4gZnJvbSBhIHN0cmVhbSBvZiBjb2RlIHBvaW50cy4gSXQgcmV0dXJucyBlaXRoZXIgYSA8dXJsLXRva2VuPiBvciBhIDxiYWQtdXJsLXRva2VuPi5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCBSZWZlcmVuY2UgdG8gdGhlIHRva2VuaXplciBjb250ZXh0IGluc3RhbmNlXG4gKiBAcGFyYW0gc3RhcnQgVG9rZW4gc3RhcnQgb2Zmc2V0XG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNjb25zdW1lLXVybC10b2tlbn1cbiAqIEBub3RlIFRoaXMgYWxnb3JpdGhtIGFzc3VtZXMgdGhhdCB0aGUgaW5pdGlhbCBcInVybChcIiBoYXMgYWxyZWFkeSBiZWVuIGNvbnN1bWVkLiBUaGlzIGFsZ29yaXRobSBhbHNvIGFzc3VtZXMgdGhhdFxuICogaXTigJlzIGJlaW5nIGNhbGxlZCB0byBjb25zdW1lIGFuIFwidW5xdW90ZWRcIiB2YWx1ZSwgbGlrZSB1cmwoZm9vKS4gQSBxdW90ZWQgdmFsdWUsIGxpa2UgdXJsKFwiZm9vXCIpLCBpcyBwYXJzZWQgYXMgYVxuICogPGZ1bmN0aW9uLXRva2VuPi4gQ29uc3VtZSBhbiBpZGVudC1saWtlIHRva2VuIGF1dG9tYXRpY2FsbHkgaGFuZGxlcyB0aGlzIGRpc3RpbmN0aW9uOyB0aGlzIGFsZ29yaXRobSBzaG91bGRu4oCZdCBiZVxuICogY2FsbGVkIGRpcmVjdGx5IG90aGVyd2lzZS5cbiAqL1xuY29uc3QgY29uc3VtZVVybFRva2VuID0gKGNvbnRleHQsIHN0YXJ0KSA9PiB7XG4gICAgLy8gSW5pdGlhbGx5IGNyZWF0ZSBhIDx1cmwtdG9rZW4+IHdpdGggaXRzIHZhbHVlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nLlxuICAgIC8vIENvbnN1bWUgYXMgbXVjaCB3aGl0ZXNwYWNlIGFzIHBvc3NpYmxlLlxuICAgIHdoaWxlIChpc1doaXRlc3BhY2UoY29udGV4dC5jb2RlKSkge1xuICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICB9XG4gICAgLy8gUmVwZWF0ZWRseSBjb25zdW1lIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgZnJvbSB0aGUgc3RyZWFtOlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICB3aGlsZSAoY29udGV4dC5vZmZzZXQgPD0gY29udGV4dC5sZW5ndGgpIHtcbiAgICAgICAgLy8gVE9ETzogVXNlIHN3aXRjaC1jYXNlIGhlcmUsIGJ1dCBuZWVkIHRvIHJlc29sdmUgbm9uLXByaW50YWJsZSBjb2RlIHBvaW50cyBmaXJzdFxuICAgICAgICAvLyBVKzAwMjkgUklHSFQgUEFSRU5USEVTSVMgKCkpXG4gICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDQxIC8qIENvZGVQb2ludC5SaWdodFBhcmVudGhlc2lzICovKSB7XG4gICAgICAgICAgICAvLyBDb25zdW1lIGl0LlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIDx1cmwtdG9rZW4+LlxuICAgICAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5VcmwsIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVPRlxuICAgICAgICBpZiAoY29udGV4dC5pc0VvZigpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgcGFyc2UgZXJyb3IuIFJldHVybiB0aGUgPHVybC10b2tlbj4uXG4gICAgICAgICAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLlVybCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBmaWxlIHdoaWxlIHBhcnNpbmcgVVJMLlwiIC8qIEVycm9yTWVzc2FnZS5VbmV4cGVjdGVkRW9mSW5VcmwgKi8sIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGNvbnRleHQuY29kZSkpIHtcbiAgICAgICAgICAgIC8vIENvbnN1bWUgYXMgbXVjaCB3aGl0ZXNwYWNlIGFzIHBvc3NpYmxlLiBJZiB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50IGlzIFUrMDAyOSBSSUdIVCBQQVJFTlRIRVNJUyAoKSlcbiAgICAgICAgICAgIC8vIG9yIEVPRiwgY29uc3VtZSBpdCBhbmQgcmV0dXJuIHRoZSA8dXJsLXRva2VuPiAoaWYgRU9GIHdhcyBlbmNvdW50ZXJlZCwgdGhpcyBpcyBhIHBhcnNlIGVycm9yKTtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgY29uc3VtZSB0aGUgcmVtbmFudHMgb2YgYSBiYWQgdXJsLCBjcmVhdGUgYSA8YmFkLXVybC10b2tlbj4sIGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICB3aGlsZSAoaXNXaGl0ZXNwYWNlKGNvbnRleHQuY29kZSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDQxIC8qIENvZGVQb2ludC5SaWdodFBhcmVudGhlc2lzICovIHx8IGNvbnRleHQuaXNFb2YoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuVXJsLCBzdGFydCwgY29udGV4dC5vZmZzZXQsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBmaWxlIHdoaWxlIHBhcnNpbmcgVVJMLlwiIC8qIEVycm9yTWVzc2FnZS5VbmV4cGVjdGVkRW9mSW5VcmwgKi8sIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5vbkVycm9yKFwiVW5leHBlY3RlZCBjaGFyYWN0ZXIgaW4gVVJMLlwiIC8qIEVycm9yTWVzc2FnZS5VbmV4cGVjdGVkQ2hhckluVXJsICovLCBzdGFydCwgY29udGV4dC5vZmZzZXQpO1xuICAgICAgICAgICAgY29uc3VtZUJhZFVybFRva2VuKGNvbnRleHQsIHN0YXJ0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBVKzAwMjIgUVVPVEFUSU9OIE1BUksgKFwiKVxuICAgICAgICAvLyBVKzAwMjcgQVBPU1RST1BIRSAoJylcbiAgICAgICAgLy8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG4gICAgICAgIC8vIG5vbi1wcmludGFibGUgY29kZSBwb2ludFxuICAgICAgICBpZiAoY29udGV4dC5jb2RlID09PSAzNCAvKiBDb2RlUG9pbnQuUXVvdGF0aW9uTWFyayAqL1xuICAgICAgICAgICAgfHwgY29udGV4dC5jb2RlID09PSAzOSAvKiBDb2RlUG9pbnQuQXBvc3Ryb3BoZSAqL1xuICAgICAgICAgICAgfHwgY29udGV4dC5jb2RlID09PSA0MCAvKiBDb2RlUG9pbnQuTGVmdFBhcmVudGhlc2lzICovXG4gICAgICAgICAgICB8fCBpc05vblByaW50YWJsZUNvZGVQb2ludChjb250ZXh0LmNvZGUpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgcGFyc2UgZXJyb3IuIENvbnN1bWUgdGhlIHJlbW5hbnRzIG9mIGEgYmFkIHVybCwgY3JlYXRlIGEgPGJhZC11cmwtdG9rZW4+LCBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgY29udGV4dC5vbkVycm9yKFwiVW5leHBlY3RlZCBjaGFyYWN0ZXIgaW4gVVJMLlwiIC8qIEVycm9yTWVzc2FnZS5VbmV4cGVjdGVkQ2hhckluVXJsICovLCBzdGFydCwgY29udGV4dC5vZmZzZXQpO1xuICAgICAgICAgICAgY29uc3VtZUJhZFVybFRva2VuKGNvbnRleHQsIHN0YXJ0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBVKzAwNUMgUkVWRVJTRSBTT0xJRFVTIChcXClcbiAgICAgICAgaWYgKGNvbnRleHQuY29kZSA9PT0gOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3RyZWFtIHN0YXJ0cyB3aXRoIGEgdmFsaWQgZXNjYXBlLCBjb25zdW1lIGFuIGVzY2FwZWQgY29kZSBwb2ludCBhbmQgYXBwZW5kIHRoZSByZXR1cm5lZCBjb2RlXG4gICAgICAgICAgICAvLyBwb2ludCB0byB0aGUgPHVybC10b2tlbj7igJlzIHZhbHVlLlxuICAgICAgICAgICAgaWYgKGNoZWNrRm9yVmFsaWRFc2NhcGUoY29udGV4dC5jb2RlLCBjb250ZXh0Lm5leHRDb2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgcmV2ZXJzZWQgc29saWR1cywgdGhlbiBjb25zdW1lIGVzY2FwZWQgY29kZSBwb2ludFxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICAgICAgICAgIGNvbnN1bWVFc2NhcGVkQ29kZVBvaW50KGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGlzIGEgcGFyc2UgZXJyb3IuIENvbnN1bWUgdGhlIHJlbW5hbnRzIG9mIGEgYmFkIHVybCwgY3JlYXRlIGEgPGJhZC11cmwtdG9rZW4+LCBhbmRcbiAgICAgICAgICAgIC8vIHJldHVybiBpdC5cbiAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihcIlVuZXhwZWN0ZWQgY2hhcmFjdGVyIGluIFVSTC5cIiAvKiBFcnJvck1lc3NhZ2UuVW5leHBlY3RlZENoYXJJblVybCAqLywgc3RhcnQsIGNvbnRleHQub2Zmc2V0KTtcbiAgICAgICAgICAgIGNvbnN1bWVCYWRVcmxUb2tlbihjb250ZXh0LCBzdGFydCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gYW55dGhpbmcgZWxzZVxuICAgICAgICAvLyBBcHBlbmQgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCB0byB0aGUgPHVybC10b2tlbj7igJlzIHZhbHVlLlxuICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIGlkZW50LWxpa2UgdG9rZW5zXG4gKi9cbmNvbnN0IFVSTF9GVU5DVElPTl9IQVNIID0gMTkzNDIyMjIyOyAvLyBnZXRTdHJpbmdIYXNoKCd1cmwnKVxuLyoqXG4gKiDCpyA0LjMuNC4gQ29uc3VtZSBhbiBpZGVudC1saWtlIHRva2VuXG4gKlxuICogQ29uc3VtZSBhbiBpZGVudC1saWtlIHRva2VuIGZyb20gYSBzdHJlYW0gb2YgY29kZSBwb2ludHMuIEl0IHJldHVybnMgYW4gPGlkZW50LXRva2VuPiwgPGZ1bmN0aW9uLXRva2VuPiwgPHVybC10b2tlbj4sXG4gKiBvciA8YmFkLXVybC10b2tlbj4uXG4gKlxuICogQHBhcmFtIGNvbnRleHQgUmVmZXJlbmNlIHRvIHRoZSB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1hbi1pZGVudC1saWtlLXRva2VufVxuICogQG5vdGUgV2UgZXh0ZW5kZWQgdGhlIGFsZ29yaXRobSB0byBhbGxvdyBjdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMsIGJ1dCB0aGUgdG9rZW5pemVyIHN0aWxsIHN0cmljdGx5IGZvbGxvd3MgdGhlIHNwZWMuXG4gKi9cbmNvbnN0IGNvbnN1bWVJZGVudExpa2VUb2tlbiA9IChjb250ZXh0KSA9PiB7XG4gICAgLy8gQ29uc3VtZSBhbiBpZGVudCBzZXF1ZW5jZSwgYW5kIGxldCBzdHJpbmcgYmUgdGhlIHJlc3VsdC5cbiAgICBjb25zdCBzdGFydCA9IGNvbnRleHQub2Zmc2V0O1xuICAgIGNvbnN1bWVJbmRlbnRTZXF1ZW5jZShjb250ZXh0KTtcbiAgICAvLyBJZiB0aGUgaWRlbnQgc2VxdWVuY2UgaXMgZm9sbG93ZWQgYnkgVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpLCBjb25zdW1lIGl0IGFzIGEgZnVuY3Rpb246XG4gICAgaWYgKGNvbnRleHQuY29kZSA9PT0gNDAgLyogQ29kZVBvaW50LkxlZnRQYXJlbnRoZXNpcyAqLykge1xuICAgICAgICAvLyBGaXJzdCwgc3RvcmUgdGhlIGZ1bmN0aW9u4oCZcyBuYW1lIGhhc2hcbiAgICAgICAgY29uc3QgZm5IYXNoID0gY29udGV4dC5nZXRIYXNoRnJvbShzdGFydCk7XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIG9wZW5pbmcgcGFyZW50aGVzaXMuXG4gICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICAvLyBVUkxcbiAgICAgICAgaWYgKGZuSGFzaCA9PT0gVVJMX0ZVTkNUSU9OX0hBU0gpIHtcbiAgICAgICAgICAgIC8vIFdoaWxlIHRoZSBuZXh0IHR3byBpbnB1dCBjb2RlIHBvaW50cyBhcmUgd2hpdGVzcGFjZSwgY29uc3VtZSB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCBvbmUgb3IgdHdvIGlucHV0IGNvZGUgcG9pbnRzIGFyZSBVKzAwMjIgUVVPVEFUSU9OIE1BUksgKFwiKSwgVSswMDI3IEFQT1NUUk9QSEUgKCcpLCBvclxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZSBmb2xsb3dlZCBieSBVKzAwMjIgUVVPVEFUSU9OIE1BUksgKFwiKSBvciBVKzAwMjcgQVBPU1RST1BIRSAoJyksIHRoZW4gY3JlYXRlIGEgPGZ1bmN0aW9uLXRva2VuPlxuICAgICAgICAgICAgLy8gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHN0cmluZyBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgLy8gISBEaWZmZXJlbnQgZnJvbSB0aGUgc3BlYywgYnV0IHRlY2huaWNhbGx5IGl0IGlzIGVub3VnaCB0byBjaGVjayB0aGUgbmV4dCBub24td2hpdGVzcGFjZSBjb2RlIHBvaW50XG4gICAgICAgICAgICBjb25zdCBuZXh0Tm9uV3NDb2RlID0gY29udGV4dC5nZXROZXh0Tm9uV3NDb2RlKCk7XG4gICAgICAgICAgICBpZiAobmV4dE5vbldzQ29kZSA9PT0gMzQgLyogQ29kZVBvaW50LlF1b3RhdGlvbk1hcmsgKi8gfHwgbmV4dE5vbldzQ29kZSA9PT0gMzkgLyogQ29kZVBvaW50LkFwb3N0cm9waGUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLkZ1bmN0aW9uLCBzdGFydCwgY29udGV4dC5vZmZzZXQsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNvbnN1bWUgYSB1cmwgdG9rZW4sIGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICBjb25zdW1lVXJsVG9rZW4oY29udGV4dCwgc3RhcnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgaXMgYSBnb29kIHRpbWUgdG8gY2FsbCBjdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMsIGlmIGFueS5cbiAgICAgICAgLy8gISBUaGlzIGlzIG5vdCBwYXJ0IG9mIHRoZSBzcGVjLCBidXQgaXQncyBhIGdvb2Qgd2F5IHRvIGV4dGVuZCB0aGUgdG9rZW5pemVyIGFuZCBpZiB5b3UgZGlkbid0IGFkZGVkIGFueVxuICAgICAgICAvLyAhIGN1c3RvbSBmdW5jdGlvbiBoYW5kbGVyLCBpdCB3aWxsIG5vdCBhZmZlY3QgdGhlIHRva2VuaXplciBpbiBhbnkgd2F5LCBpdCBzdGlsbCBzdHJpY3RseSBmb2xsb3dzIHRoZSBzcGVjLlxuICAgICAgICAvLyBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdXNlIGBoYXNgIGFuZCBgZ2V0YCBzZXBhcmF0ZWx5IHRvIGF2b2lkIGRlY2xhcmluZyBhIG5ldyB2YXJpYWJsZSBldmVyeSB0aW1lIGhlcmVcbiAgICAgICAgaWYgKGNvbnRleHQuaGFzRnVuY3Rpb25IYW5kbGVyKGZuSGFzaCkpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgPGZ1bmN0aW9uLXRva2VuPi5cbiAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuRnVuY3Rpb24sIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICAgICAgLy8gQ29uc3VtZSB0aGUgZnVuY3Rpb24gYm9keVxuICAgICAgICAgICAgLy8gSXQncyBzYWZlIHRvIGNhbGwgdGhlIGhhbmRsZXIgZGlyZWN0bHkgYmVjYXVzZSB3ZSBhbHJlYWR5IGNoZWNrZWQgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgY29udGV4dC5nZXRGdW5jdGlvbkhhbmRsZXIoZm5IYXNoKShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpLCBjb25zdW1lIGl0LiBDcmVhdGUgYSA8ZnVuY3Rpb24tdG9rZW4+XG4gICAgICAgIC8vIHdpdGggaXRzIHZhbHVlIHNldCB0byBzdHJpbmcgYW5kIHJldHVybiBpdC5cbiAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5GdW5jdGlvbiwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gPGlkZW50LXRva2VuPiB3aXRoIGl0cyB2YWx1ZSBzZXQgdG8gc3RyaW5nIGFuZCByZXR1cm4gaXQuXG4gICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5JZGVudCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIG51bWJlcnNcbiAqL1xuLyoqXG4gKiDCpyA0LjMuMTIuIENvbnN1bWUgYSBudW1iZXJcbiAqXG4gKiBDb25zdW1lIGEgbnVtYmVyIGZyb20gYSBzdHJlYW0gb2YgY29kZSBwb2ludHMuIEl0IHJldHVybnMgYSBudW1lcmljIHZhbHVlLCBhbmQgYSB0eXBlIHdoaWNoIGlzIGVpdGhlciBcImludGVnZXJcIiBvclxuICogXCJudW1iZXJcIi5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCBSZWZlcmVuY2UgdG8gdGhlIHRva2VuaXplciBjb250ZXh0IGluc3RhbmNlXG4gKiBAbm90ZSBUaGlzIGFsZ29yaXRobSBkb2VzIG5vdCBkbyB0aGUgdmVyaWZpY2F0aW9uIG9mIHRoZSBmaXJzdCBmZXcgY29kZSBwb2ludHMgdGhhdCBhcmUgbmVjZXNzYXJ5IHRvIGVuc3VyZSBhIG51bWJlclxuICogY2FuIGJlIG9idGFpbmVkIGZyb20gdGhlIHN0cmVhbS4gRW5zdXJlIHRoYXQgdGhlIHN0cmVhbSBzdGFydHMgd2l0aCBhIG51bWJlciBiZWZvcmUgY2FsbGluZyB0aGlzIGFsZ29yaXRobS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2NvbnN1bWUtbnVtYmVyfVxuICogQHRvZG8gVW5jb21tZW50IHR5cGUvcmVwciBoYW5kbGluZyBpZiBuZWVkZWQgLSBjdXJyZW50bHkgd2UgZG9uJ3QgbmVlZCB0aGVtLCBhbmQgdGhleSdyZSBub3QgdXNlZCBmb3IgcGVyZm9ybWFuY2VcbiAqIHJlYXNvbnNcbiAqL1xuY29uc3QgY29uc3VtZU51bWJlciA9IChjb250ZXh0KSA9PiB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgZm9sbG93aW5nIHN0ZXBzIGluIG9yZGVyOlxuICAgIC8vIDEuIEluaXRpYWxseSBzZXQgdHlwZSB0byBcImludGVnZXJcIi4gTGV0IHJlcHIgYmUgdGhlIGVtcHR5IHN0cmluZy5cbiAgICAvLyBUT0RPOiBVbmNvbW1lbnQgdHlwZS9yZXByIGhhbmRsaW5nIGlmIG5lZWRlZFxuICAgIC8vIGxldCB0eXBlID0gTnVtYmVyVHlwZS5JbnRlZ2VyO1xuICAgIC8vIGNvbnN0IHJlcHI6IHN0cmluZ1tdID0gW107XG4gICAgLy8gMi4gSWYgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBpcyBVKzAwMkIgUExVUyBTSUdOICgrKSBvciBVKzAwMkQgSFlQSEVOLU1JTlVTICgtKSwgY29uc3VtZSBpdCBhbmQgYXBwZW5kIGl0XG4gICAgLy8gdG8gcmVwci5cbiAgICBpZiAoY29udGV4dC5jb2RlID09PSA0MyAvKiBDb2RlUG9pbnQuUGx1c1NpZ24gKi8gfHwgY29udGV4dC5jb2RlID09PSA0NSAvKiBDb2RlUG9pbnQuSHlwaGVuTWludXMgKi8pIHtcbiAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgIC8vIFRPRE86IEFwcGVuZCB0byByZXByXG4gICAgfVxuICAgIC8vIDMuIFdoaWxlIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgYSBkaWdpdCwgY29uc3VtZSBpdCBhbmQgYXBwZW5kIGl0IHRvIHJlcHIuXG4gICAgd2hpbGUgKGlzRGlnaXQoY29udGV4dC5jb2RlKSkge1xuICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgLy8gVE9ETzogQXBwZW5kIHRvIHJlcHJcbiAgICB9XG4gICAgLy8gNC4gSWYgdGhlIG5leHQgMiBpbnB1dCBjb2RlIHBvaW50cyBhcmUgVSswMDJFIEZVTEwgU1RPUCAoLikgZm9sbG93ZWQgYnkgYSBkaWdpdCwgdGhlbjpcbiAgICBpZiAoY29udGV4dC5jb2RlID09PSA0NiAvKiBDb2RlUG9pbnQuRnVsbFN0b3AgKi8gJiYgaXNEaWdpdChjb250ZXh0Lm5leHRDb2RlKSkge1xuICAgICAgICAvLyAxLiBDb25zdW1lIHRoZW0uXG4gICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgyKTtcbiAgICAgICAgLy8gMi5BcHBlbmQgdGhlbSB0byByZXByXG4gICAgICAgIC8vIFRPRE86IEFwcGVuZCB0byByZXByXG4gICAgICAgIC8vIDMuIFNldCB0eXBlIHRvIFwibnVtYmVyXCIuXG4gICAgICAgIC8vIHR5cGUgPSBOdW1iZXJUeXBlLk51bWJlcjtcbiAgICAgICAgLy8gNC4gV2hpbGUgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBpcyBhIGRpZ2l0LCBjb25zdW1lIGl0IGFuZCBhcHBlbmQgaXQgdG8gcmVwci5cbiAgICAgICAgd2hpbGUgKGlzRGlnaXQoY29udGV4dC5jb2RlKSkge1xuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICAvLyBUT0RPOiBBcHBlbmQgdG8gcmVwclxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDUuIElmIHRoZSBuZXh0IDIgb3IgMyBpbnB1dCBjb2RlIHBvaW50cyBhcmUgVSswMDQ1IExBVElOIENBUElUQUwgTEVUVEVSIEUgKEUpIG9yIFUrMDA2NSBMQVRJTiBTTUFMTCBMRVRURVIgRVxuICAgIC8vIChlKSAuLi5cbiAgICBpZiAoKGNvbnRleHQuY29kZSA9PT0gNjkgLyogQ29kZVBvaW50LkxhdGluQ2FwaXRhbExldHRlckUgKi8gfHwgY29udGV4dC5jb2RlID09PSAxMDEgLyogQ29kZVBvaW50LkxhdGluU21hbGxMZXR0ZXJFICovKSkge1xuICAgICAgICAvLyAuLi4gb3B0aW9uYWxseSBmb2xsb3dlZCBieSBVKzAwMkQgSFlQSEVOLU1JTlVTICgtKSBvciBVKzAwMkIgUExVUyBTSUdOICgrKVxuICAgICAgICAvLyBOb3RlOiB3ZSBzcGxpdCB0aGlzIGludG8gdHdvIGlmIHN0YXRlbWVudHMgdG8gYXZvaWQgZGVjbGFyaW5nIGEgc2hpZnQgdmFyaWFibGUgZm9yIHRoZSBzaWduXG4gICAgICAgIGlmICgoY29udGV4dC5uZXh0Q29kZSA9PT0gNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovIHx8IGNvbnRleHQubmV4dENvZGUgPT09IDQzIC8qIENvZGVQb2ludC5QbHVzU2lnbiAqLylcbiAgICAgICAgICAgICYmIGlzRGlnaXQoY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMikpKSB7XG4gICAgICAgICAgICAvLyAxLiBDb25zdW1lIHRoZW0uXG4gICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoMyk7IC8vIGUsIHNpZ24sIGRpZ2l0XG4gICAgICAgICAgICAvLyAyLiBBcHBlbmQgdGhlbSB0byByZXByLlxuICAgICAgICAgICAgLy8gVE9ETzogQXBwZW5kIHRvIHJlcHJcbiAgICAgICAgICAgIC8vIDMuIFNldCB0eXBlIHRvIFwibnVtYmVyXCIuXG4gICAgICAgICAgICAvLyBUT0RPOiBTZXQgdHlwZVxuICAgICAgICAgICAgLy8gNC4gV2hpbGUgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBpcyBhIGRpZ2l0LCBjb25zdW1lIGl0IGFuZCBhcHBlbmQgaXQgdG8gcmVwci5cbiAgICAgICAgICAgIHdoaWxlIChpc0RpZ2l0KGNvbnRleHQuY29kZSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBcHBlbmQgdG8gcmVwclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRGlnaXQoY29udGV4dC5uZXh0Q29kZSkpIHtcbiAgICAgICAgICAgIC8vIC4uLiBmb2xsb3dlZCBieSBhIGRpZ2l0LCB0aGVuOlxuICAgICAgICAgICAgLy8gMS4gQ29uc3VtZSB0aGVtLlxuICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KDIpOyAvLyBlLCBkaWdpdFxuICAgICAgICAgICAgLy8gMi4gQXBwZW5kIHRoZW0gdG8gcmVwci5cbiAgICAgICAgICAgIC8vIFRPRE86IEFwcGVuZCB0byByZXByXG4gICAgICAgICAgICAvLyAzLiBTZXQgdHlwZSB0byBcIm51bWJlclwiLlxuICAgICAgICAgICAgLy8gVE9ETzogU2V0IHR5cGVcbiAgICAgICAgICAgIC8vIDQuIFdoaWxlIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgYSBkaWdpdCwgY29uc3VtZSBpdCBhbmQgYXBwZW5kIGl0IHRvIHJlcHIuXG4gICAgICAgICAgICB3aGlsZSAoaXNEaWdpdChjb250ZXh0LmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQXBwZW5kIHRvIHJlcHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA2LiBDb252ZXJ0IHJlcHIgdG8gYSBudW1iZXIsIGFuZCBzZXQgdGhlIHZhbHVlIHRvIHRoZSByZXR1cm5lZCB2YWx1ZS5cbiAgICAvLyBUT0RPOiBDb252ZXJ0IHJlcHIgdG8gYSBudW1iZXJcbiAgICAvLyBjb25zdCB2YWx1ZSA9IE51bWJlcihyZXByLmpvaW4oJycpKTtcbiAgICAvLyA3LiBSZXR1cm4gdmFsdWUgYW5kIHR5cGUuXG4gICAgLy8gVE9ETzogVW5jb21tZW50IHR5cGUgaGFuZGxpbmcgaWYgbmVlZGVkXG4gICAgLy8gcmV0dXJuIFt2YWx1ZSwgdHlwZV07XG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIG51bWVyaWMgdG9rZW5zXG4gKi9cbi8qKlxuICogwqcgNC4zLjMuIENvbnN1bWUgYSBudW1lcmljIHRva2VuXG4gKlxuICogQ29uc3VtZSBhIG51bWVyaWMgdG9rZW4gZnJvbSBhIHN0cmVhbSBvZiBjb2RlIHBvaW50cy4gSXQgcmV0dXJucyBlaXRoZXIgYSA8bnVtYmVyLXRva2VuPiwgPHBlcmNlbnRhZ2UtdG9rZW4+LCBvclxuICogPGRpbWVuc2lvbi10b2tlbj4uXG4gKlxuICogQHBhcmFtIGNvbnRleHQgUmVmZXJlbmNlIHRvIHRoZSB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1udW1lcmljLXRva2VufVxuICovXG5jb25zdCBjb25zdW1lTnVtZXJpY1Rva2VuID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IGNvbnRleHQub2Zmc2V0O1xuICAgIC8vIENvbnN1bWUgYSBudW1iZXIgYW5kIGxldCBudW1iZXIgYmUgdGhlIHJlc3VsdC5cbiAgICBjb25zdW1lTnVtYmVyKGNvbnRleHQpO1xuICAgIC8vIElmIHRoZSBuZXh0IDMgaW5wdXQgY29kZSBwb2ludHMgd291bGQgc3RhcnQgYW4gaWRlbnQgc2VxdWVuY2UsIHRoZW46XG4gICAgaWYgKGNoZWNrRm9ySWRlbnRTdGFydChjb250ZXh0LmNvZGUsIGNvbnRleHQubmV4dENvZGUsIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDIpKSkge1xuICAgICAgICAvLyAxLiBDcmVhdGUgYSA8ZGltZW5zaW9uLXRva2VuPiB3aXRoIHRoZSBzYW1lIHZhbHVlIGFuZCB0eXBlIGZsYWcgYXMgbnVtYmVyLCBhbmQgYSB1bml0IHNldCBpbml0aWFsbHkgdG9cbiAgICAgICAgLy8gdGhlIGVtcHR5IHN0cmluZy5cbiAgICAgICAgLy8gMi4gQ29uc3VtZSBhbiBpZGVudCBzZXF1ZW5jZS4gU2V0IHRoZSA8ZGltZW5zaW9uLXRva2VuPuKAmXMgdW5pdCB0byB0aGUgcmV0dXJuZWQgdmFsdWUuXG4gICAgICAgIGNvbnN1bWVJbmRlbnRTZXF1ZW5jZShjb250ZXh0KTtcbiAgICAgICAgLy8gMy4gUmV0dXJuIHRoZSA8ZGltZW5zaW9uLXRva2VuPi5cbiAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5EaW1lbnNpb24sIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBpcyBVKzAwMjUgUEVSQ0VOVEFHRSBTSUdOICglKSwgY29uc3VtZSBpdC4gQ3JlYXRlIGFcbiAgICAvLyA8cGVyY2VudGFnZS10b2tlbj4gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyBudW1iZXIsIGFuZCByZXR1cm4gaXQuXG4gICAgaWYgKGNvbnRleHQuY29kZSA9PT0gMzcgLyogQ29kZVBvaW50LlBlcmNlbnRhZ2VTaWduICovKSB7XG4gICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLlBlcmNlbnRhZ2UsIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgY3JlYXRlIGEgPG51bWJlci10b2tlbj4gd2l0aCB0aGUgc2FtZSB2YWx1ZSBhbmQgdHlwZSBmbGFnIGFzIG51bWJlciwgYW5kIHJldHVybiBpdC5cbiAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLk51bWJlciwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG59O1xuXG4vKipcbiAqIEBmaWxlIFRva2VuaXppbmcgbG9naWMgZm9yIHN0cmluZ3NcbiAqL1xuLyoqXG4gKiDCpyA0LjMuNS4gQ29uc3VtZSBhIHN0cmluZyB0b2tlblxuICpcbiAqIENvbnN1bWUgYSBzdHJpbmcgdG9rZW4gZnJvbSBhIHN0cmVhbSBvZiBjb2RlIHBvaW50cy4gSXQgcmV0dXJucyBlaXRoZXIgYSA8c3RyaW5nLXRva2VuPiBvciA8YmFkLXN0cmluZy10b2tlbj4uXG4gKlxuICogQHBhcmFtIGNvbnRleHQgUmVmZXJlbmNlIHRvIHRoZSB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1zdHJpbmctdG9rZW59XG4gKi9cbmNvbnN0IGNvbnN1bWVTdHJpbmdUb2tlbiA9IChjb250ZXh0KSA9PiB7XG4gICAgLy8gVGhpcyBhbGdvcml0aG0gbWF5IGJlIGNhbGxlZCB3aXRoIGFuIGVuZGluZyBjb2RlIHBvaW50LCB3aGljaCBkZW5vdGVzIHRoZSBjb2RlIHBvaW50IHRoYXQgZW5kcyB0aGUgc3RyaW5nLlxuICAgIC8vIElmIGFuIGVuZGluZyBjb2RlIHBvaW50IGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQgaXMgdXNlZC5cbiAgICBjb25zdCBlbmRpbmdDb2RlUG9pbnQgPSBjb250ZXh0LmNvZGU7XG4gICAgLy8gSW5pdGlhbGx5IGNyZWF0ZSBhIDxzdHJpbmctdG9rZW4+IHdpdGggaXRzIHZhbHVlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nLlxuICAgIGNvbnN0IHN0YXJ0ID0gY29udGV4dC5vZmZzZXQ7XG4gICAgLy8gQ29uc3VtZSBvcGVuaW5nIGNoYXJhY3RlclxuICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgIC8vIFJlcGVhdGVkbHkgY29uc3VtZSB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50IGZyb20gdGhlIHN0cmVhbTpcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgd2hpbGUgKGNvbnRleHQuaXNMZXNzVGhhbkVxdWFsVG9Fb2YoKSkge1xuICAgICAgICBzd2l0Y2ggKGNvbnRleHQuY29kZSkge1xuICAgICAgICAgICAgLy8gZW5kaW5nIGNvZGUgcG9pbnRcbiAgICAgICAgICAgIGNhc2UgZW5kaW5nQ29kZVBvaW50OlxuICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgaXRcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIDxzdHJpbmctdG9rZW4+LlxuICAgICAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuU3RyaW5nLCBzdGFydCwgY29udGV4dC5vZmZzZXQsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBFT0ZcbiAgICAgICAgICAgIGNhc2UgLTEgLyogSW1hZ2luYXJ5Q29kZVBvaW50LkVvZiAqLzpcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcGFyc2UgZXJyb3IuIFJldHVybiB0aGUgPHN0cmluZy10b2tlbj4uXG4gICAgICAgICAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5TdHJpbmcsIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUgd2hpbGUgcGFyc2luZyBzdHJpbmcgdG9rZW4uXCIgLyogRXJyb3JNZXNzYWdlLlVuZXhwZWN0ZWRFb2ZJblN0cmluZyAqLywgc3RhcnQsIGNvbnRleHQub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBuZXdsaW5lXG4gICAgICAgICAgICBjYXNlIDEzIC8qIENvZGVQb2ludC5DYXJyaWFnZVJldHVybiAqLzpcbiAgICAgICAgICAgIGNhc2UgMTAgLyogQ29kZVBvaW50LkxpbmVGZWVkICovOlxuICAgICAgICAgICAgY2FzZSAxMiAvKiBDb2RlUG9pbnQuRm9ybUZlZWQgKi86XG4gICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlOiBDUkxGIGlzIDIgY29kZSBwb2ludHNcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5jb2RlID09PSAxMyAvKiBDb2RlUG9pbnQuQ2FycmlhZ2VSZXR1cm4gKi8gJiYgY29udGV4dC5uZXh0Q29kZSA9PT0gMTAgLyogQ29kZVBvaW50LkxpbmVGZWVkICovKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIGFuIGV4dHJhIGNvbnN1bWVcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoMSk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBhcnNlIGVycm9yLiBSZWNvbnN1bWUgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCwgY3JlYXRlIGEgPGJhZC1zdHJpbmctdG9rZW4+LCBhbmRcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gaXQuXG4gICAgICAgICAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5CYWRTdHJpbmcsIHN0YXJ0LCBjb250ZXh0Lm9mZnNldCwgdW5kZWZpbmVkLCBjb250ZXh0LnN0b3ApO1xuICAgICAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihcIlVuZXhwZWN0ZWQgbmV3bGluZSB3aGlsZSBwYXJzaW5nIHN0cmluZyB0b2tlbi5cIiAvKiBFcnJvck1lc3NhZ2UuVW5leHBlY3RlZE5ld2xpbmVJblN0cmluZyAqLywgc3RhcnQsIGNvbnRleHQub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBVKzAwNUMgUkVWRVJTRSBTT0xJRFVTIChcXClcbiAgICAgICAgICAgIGNhc2UgOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovOlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgRU9GLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmlzTmV4dEVvZigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLlN0cmluZywgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUgd2hpbGUgcGFyc2luZyBzdHJpbmcgdG9rZW4uXCIgLyogRXJyb3JNZXNzYWdlLlVuZXhwZWN0ZWRFb2ZJblN0cmluZyAqLywgc3RhcnQsIGNvbnRleHQub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgYSBuZXdsaW5lLCBjb25zdW1lIGl0LlxuICAgICAgICAgICAgICAgIGlmIChpc05ld2xpbmUoY29udGV4dC5uZXh0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCAodGhlIHN0cmVhbSBzdGFydHMgd2l0aCBhIHZhbGlkIGVzY2FwZSkgY29uc3VtZSBhbiBlc2NhcGVkIGNvZGUgcG9pbnQgYW5kIGFwcGVuZCB0aGVcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5lZCBjb2RlIHBvaW50IHRvIHRoZSA8c3RyaW5nLXRva2VuPuKAmXMgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yVmFsaWRFc2NhcGUoY29udGV4dC5jb2RlLCBjb250ZXh0Lm5leHRDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZUVzY2FwZWRDb2RlUG9pbnQoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgZWxzZVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCB0byB0aGUgPHN0cmluZy10b2tlbj7igJlzIHZhbHVlLlxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBAZmlsZSBUb2tlbml6aW5nIGxvZ2ljIGZvciB3aGl0ZXNwYWNlXG4gKi9cbi8qKlxuICogwqcgNC4zLjEuIENvbnN1bWUgYSB0b2tlbiAod2hpdGVzcGFjZSlcbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNjb25zdW1lLXRva2VufVxuICogQHBhcmFtIGNvbnRleHQgUmVmZXJlbmNlIHRvIHRoZSB0b2tlbml6ZXIgY29udGV4dCBpbnN0YW5jZVxuICovXG5jb25zdCBjb25zdW1lV2hpdGVzcGFjZVRva2VuID0gKGNvbnRleHQpID0+IHtcbiAgICAvLyBDb25zdW1lIGFzIG11Y2ggd2hpdGVzcGFjZSBhcyBwb3NzaWJsZS4gUmV0dXJuIGEgPHdoaXRlc3BhY2UtdG9rZW4+LlxuICAgIGNvbnN0IHN0YXJ0ID0gY29udGV4dC5vZmZzZXQ7XG4gICAgY29udGV4dC5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuV2hpdGVzcGFjZSwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG59O1xuXG4vKipcbiAqIEBmaWxlIENTUyB0b2tlbml6ZXIgdGhhdCBzdHJpY3RseSBmb2xsb3dzIHRoZSBDU1MgU3ludGF4IE1vZHVsZSBMZXZlbCAzIHNwZWNpZmljYXRpb25cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyN0b2tlbml6YXRpb259XG4gKi9cbi8qKlxuICogQ1NTIHRva2VuaXplciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGNvZGUgdG8gdG9rZW5pemVcbiAqIEBwYXJhbSBvblRva2VuIFRva2VuaXplciBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2ggdG9rZW4gZm91bmQgaW4gc291cmNlIGNvZGVcbiAqIEBwYXJhbSBvbkVycm9yIEVycm9yIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGEgcGFyc2luZyBlcnJvciBpcyBmb3VuZCAob3B0aW9uYWwpXG4gKiBAcGFyYW0gZnVuY3Rpb25IYW5kbGVycyBDdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMgKG9wdGlvbmFsKVxuICovXG5jb25zdCB0b2tlbml6ZSA9IChzb3VyY2UsIG9uVG9rZW4sIG9uRXJyb3IgPSAoKSA9PiB7IH0sIGZ1bmN0aW9uSGFuZGxlcnMpID0+IHtcbiAgICAvLyBDcmVhdGUgdG9rZW5pemVyIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRva2VuaXplckNvbnRleHQoc291cmNlLCBvblRva2VuLCBvbkVycm9yLCBmdW5jdGlvbkhhbmRsZXJzKTtcbiAgICAvLyBSZXBlYXRlZGx5IGNvbnN1bWUgdGhlIG5leHQgaW5wdXQgY29kZSBwb2ludCBmcm9tIHRoZSBzdHJlYW06XG4gICAgd2hpbGUgKCFjb250ZXh0LmlzRW9mKCkpIHtcbiAgICAgICAgc3dpdGNoIChjb250ZXh0LmNvZGUpIHtcbiAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlYywgdGhlc2UgYXJlIGFsbCB3aGl0ZXNwYWNlIGNvZGUgcG9pbnRzOlxuICAgICAgICAgICAgY2FzZSA5IC8qIENvZGVQb2ludC5DaGFyYWN0ZXJUYWJ1bGF0aW9uICovOlxuICAgICAgICAgICAgY2FzZSAzMiAvKiBDb2RlUG9pbnQuU3BhY2UgKi86XG4gICAgICAgICAgICBjYXNlIDEwIC8qIENvZGVQb2ludC5MaW5lRmVlZCAqLzpcbiAgICAgICAgICAgIGNhc2UgMTIgLyogQ29kZVBvaW50LkZvcm1GZWVkICovOlxuICAgICAgICAgICAgY2FzZSAxMyAvKiBDb2RlUG9pbnQuQ2FycmlhZ2VSZXR1cm4gKi86XG4gICAgICAgICAgICAgICAgLy8gQ29uc3VtZSBhcyBtdWNoIHdoaXRlc3BhY2UgYXMgcG9zc2libGUuIFJldHVybiBhIDx3aGl0ZXNwYWNlLXRva2VuPi5cbiAgICAgICAgICAgICAgICBjb25zdW1lV2hpdGVzcGFjZVRva2VuKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gRGlnaXRcbiAgICAgICAgICAgIGNhc2UgNDggLyogQ29kZVBvaW50LkRpZ2l0WmVybyAqLzpcbiAgICAgICAgICAgIGNhc2UgNDkgLyogQ29kZVBvaW50LkRpZ2l0T25lICovOlxuICAgICAgICAgICAgY2FzZSA1MCAvKiBDb2RlUG9pbnQuRGlnaXRUd28gKi86XG4gICAgICAgICAgICBjYXNlIDUxIC8qIENvZGVQb2ludC5EaWdpdFRocmVlICovOlxuICAgICAgICAgICAgY2FzZSA1MiAvKiBDb2RlUG9pbnQuRGlnaXRGb3VyICovOlxuICAgICAgICAgICAgY2FzZSA1MyAvKiBDb2RlUG9pbnQuRGlnaXRGaXZlICovOlxuICAgICAgICAgICAgY2FzZSA1NCAvKiBDb2RlUG9pbnQuRGlnaXRTaXggKi86XG4gICAgICAgICAgICBjYXNlIDU1IC8qIENvZGVQb2ludC5EaWdpdFNldmVuICovOlxuICAgICAgICAgICAgY2FzZSA1NiAvKiBDb2RlUG9pbnQuRGlnaXRFaWdodCAqLzpcbiAgICAgICAgICAgIGNhc2UgNTcgLyogQ29kZVBvaW50LkRpZ2l0TmluZSAqLzpcbiAgICAgICAgICAgICAgICBjb25zdW1lTnVtZXJpY1Rva2VuKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MCAvKiBDb2RlUG9pbnQuTGVmdFBhcmVudGhlc2lzICovOlxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZVRyaXZpYWxUb2tlbihUb2tlblR5cGUuT3BlblBhcmVudGhlc2lzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDEgLyogQ29kZVBvaW50LlJpZ2h0UGFyZW50aGVzaXMgKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5DbG9zZVBhcmVudGhlc2lzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDQgLyogQ29kZVBvaW50LkNvbW1hICovOlxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZVRyaXZpYWxUb2tlbihUb2tlblR5cGUuQ29tbWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OCAvKiBDb2RlUG9pbnQuQ29sb24gKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5Db2xvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU5IC8qIENvZGVQb2ludC5TZW1pQ29sb24gKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5TZW1pY29sb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5MSAvKiBDb2RlUG9pbnQuTGVmdFNxdWFyZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5PcGVuU3F1YXJlQnJhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkzIC8qIENvZGVQb2ludC5SaWdodFNxdWFyZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5DbG9zZVNxdWFyZUJyYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjMgLyogQ29kZVBvaW50LkxlZnRDdXJseUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5PcGVuQ3VybHlCcmFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI1IC8qIENvZGVQb2ludC5SaWdodEN1cmx5QnJhY2tldCAqLzpcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVUcml2aWFsVG9rZW4oVG9rZW5UeXBlLkNsb3NlQ3VybHlCcmFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzkgLyogQ29kZVBvaW50LkFwb3N0cm9waGUgKi86XG4gICAgICAgICAgICBjYXNlIDM0IC8qIENvZGVQb2ludC5RdW90YXRpb25NYXJrICovOlxuICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgYSBzdHJpbmcgdG9rZW4gYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBjb25zdW1lU3RyaW5nVG9rZW4oY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM1IC8qIENvZGVQb2ludC5OdW1iZXJTaWduICovOlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IGlucHV0IGNvZGUgcG9pbnQgaXMgYW4gaWRlbnQgY29kZSBwb2ludCBvciB0aGUgbmV4dCB0d28gaW5wdXQgY29kZSBwb2ludHMgYXJlIGFcbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBlc2NhcGUsIHRoZW46XG4gICAgICAgICAgICAgICAgaWYgKGlzSWRlbnRDb2RlUG9pbnQoY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSkpXG4gICAgICAgICAgICAgICAgICAgIHx8IGNoZWNrRm9yVmFsaWRFc2NhcGUoY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSksIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDIpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvbnRleHQub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAvLyAxLiBDcmVhdGUgYSA8aGFzaC10b2tlbj4uXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIElmIHRoZSBuZXh0IDMgaW5wdXQgY29kZSBwb2ludHMgd291bGQgc3RhcnQgYW4gaWRlbnQgc2VxdWVuY2UsIHNldCB0aGUgPGhhc2gtdG9rZW4+4oCZc1xuICAgICAgICAgICAgICAgICAgICAvLyB0eXBlIGZsYWcgdG8gXCJpZFwiLlxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBVbmNvbW1lbnQgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlRmxhZzogY2hlY2tGb3JJZGVudFN0YXJ0KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDEpLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDIpLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDMpLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKSA/ICdpZCcgOiAndW5yZXN0cmljdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3VtZSBhbiBpZGVudCBzZXF1ZW5jZSwgYW5kIHNldCB0aGUgPGhhc2gtdG9rZW4+4oCZcyB2YWx1ZSB0byB0aGUgcmV0dXJuZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZUluZGVudFNlcXVlbmNlKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyA0LiBSZXR1cm4gdGhlIDxoYXNoLXRva2VuPi5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogVW5jb21tZW50IHdoZW4gbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuSGFzaCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuSGFzaCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBhIDxkZWxpbS10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5EZWxpbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQzIC8qIENvZGVQb2ludC5QbHVzU2lnbiAqLzpcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgc3RyZWFtIHN0YXJ0cyB3aXRoIGEgbnVtYmVyLCByZWNvbnN1bWUgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCwgY29uc3VtZSBhXG4gICAgICAgICAgICAgICAgLy8gbnVtZXJpYyB0b2tlbiwgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JOdW1iZXJTdGFydChjb250ZXh0LmNvZGUsIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDEpLCBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZU51bWVyaWNUb2tlbihjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGEgPGRlbGltLXRva2VuPiB3aXRoIGl0cyB2YWx1ZSBzZXQgdG8gdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVUcml2aWFsVG9rZW4oVG9rZW5UeXBlLkRlbGltKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovOlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBzdHJlYW0gc3RhcnRzIHdpdGggYSBudW1iZXIsIHJlY29uc3VtZSB0aGUgY3VycmVudCBpbnB1dCBjb2RlIHBvaW50LCBjb25zdW1lIGFcbiAgICAgICAgICAgICAgICAvLyBudW1lcmljIHRva2VuLCBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgICAgIGlmIChjaGVja0Zvck51bWJlclN0YXJ0KGNvbnRleHQuY29kZSwgY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSksIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDIpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdW1lTnVtZXJpY1Rva2VuKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbmV4dCAyIGlucHV0IGNvZGUgcG9pbnRzIGFyZSBVKzAwMkQgSFlQSEVOLU1JTlVTIFUrMDAzRSBHUkVBVEVSLVRIQU4gU0lHTlxuICAgICAgICAgICAgICAgIC8vICg+KSwgY29uc3VtZSB0aGVtIGFuZCByZXR1cm4gYSA8Q0RDLXRva2VuPi5cbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSkgPT09IDQ1IC8qIENvZGVQb2ludC5IeXBoZW5NaW51cyAqL1xuICAgICAgICAgICAgICAgICAgICAmJiBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgyKSA9PT0gNjIgLyogQ29kZVBvaW50LkdyZWF0ZXJUaGFuU2lnbiAqLykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVDb2RlUG9pbnQoMyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuQ2RjLCBjb250ZXh0Lm9mZnNldCAtIDMsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSBpbnB1dCBzdHJlYW0gc3RhcnRzIHdpdGggYW4gaWRlbnQgc2VxdWVuY2UsIHJlY29uc3VtZSB0aGUgY3VycmVudCBpbnB1dFxuICAgICAgICAgICAgICAgIC8vIGNvZGUgcG9pbnQsIGNvbnN1bWUgYW4gaWRlbnQtbGlrZSB0b2tlbiwgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JJZGVudFN0YXJ0KGNvbnRleHQuY29kZSwgY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSksIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDIpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdW1lSWRlbnRMaWtlVG9rZW4oY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBhIDxkZWxpbS10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5EZWxpbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ2IC8qIENvZGVQb2ludC5GdWxsU3RvcCAqLzpcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgc3RyZWFtIHN0YXJ0cyB3aXRoIGEgbnVtYmVyLCByZWNvbnN1bWUgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCwgY29uc3VtZSBhXG4gICAgICAgICAgICAgICAgLy8gbnVtZXJpYyB0b2tlbiwgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JOdW1iZXJTdGFydChjb250ZXh0LmNvZGUsIGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDEpLCBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZU51bWVyaWNUb2tlbihjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGEgPGRlbGltLXRva2VuPiB3aXRoIGl0cyB2YWx1ZSBzZXQgdG8gdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVUcml2aWFsVG9rZW4oVG9rZW5UeXBlLkRlbGltKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjAgLyogQ29kZVBvaW50Lkxlc3NUaGFuU2lnbiAqLzpcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCAzIGlucHV0IGNvZGUgcG9pbnRzIGFyZSBVKzAwMjEgRVhDTEFNQVRJT04gTUFSSyBVKzAwMkQgSFlQSEVOLU1JTlVTIFUrMDAyRFxuICAgICAgICAgICAgICAgIC8vIEhZUEhFTi1NSU5VUyAoIS0tKSwgY29uc3VtZSB0aGVtIGFuZCByZXR1cm4gYSA8Q0RPLXRva2VuPi5cbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMSkgPT09IDMzIC8qIENvZGVQb2ludC5FeGNsYW1hdGlvbk1hcmsgKi9cbiAgICAgICAgICAgICAgICAgICAgJiYgY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMikgPT09IDQ1IC8qIENvZGVQb2ludC5IeXBoZW5NaW51cyAqL1xuICAgICAgICAgICAgICAgICAgICAmJiBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgzKSA9PT0gNDUgLyogQ29kZVBvaW50Lkh5cGhlbk1pbnVzICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZUNvZGVQb2ludCg0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5DZG8sIGNvbnRleHQub2Zmc2V0IC0gNCwgY29udGV4dC5vZmZzZXQsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIGEgPGRlbGltLXRva2VuPiB3aXRoIGl0cyB2YWx1ZSBzZXQgdG8gdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVUcml2aWFsVG9rZW4oVG9rZW5UeXBlLkRlbGltKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjQgLyogQ29kZVBvaW50LkNvbW1lcmNpYWxBdCAqLzpcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCAzIGlucHV0IGNvZGUgcG9pbnRzIHdvdWxkIHN0YXJ0IGFuIGlkZW50IHNlcXVlbmNlLCBjb25zdW1lIGFuIGlkZW50IHNlcXVlbmNlLFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiA8YXQta2V5d29yZC10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSByZXR1cm5lZCB2YWx1ZSwgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JJZGVudFN0YXJ0KGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDEpLCBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgyKSwgY29udGV4dC5nZXRSZWxhdGl2ZUNvZGUoMykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29udGV4dC5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgY29tbWVyY2lhbCBhdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgaWRlbnQgc2VxdWVuY2UgYWZ0ZXIgY29tbWVyY2lhbCBhdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZUluZGVudFNlcXVlbmNlKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm9uVG9rZW4oVG9rZW5UeXBlLkF0S2V5d29yZCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBhIDxkZWxpbS10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5EZWxpbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDkyIC8qIENvZGVQb2ludC5SZXZlcnNlU29saWR1cyAqLzpcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgc3RyZWFtIHN0YXJ0cyB3aXRoIGEgdmFsaWQgZXNjYXBlLCByZWNvbnN1bWUgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCxcbiAgICAgICAgICAgICAgICAvLyBjb25zdW1lIGFuIGlkZW50LWxpa2UgdG9rZW4sIGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yVmFsaWRFc2NhcGUoY29udGV4dC5jb2RlLCBjb250ZXh0LmdldFJlbGF0aXZlQ29kZSgxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZUlkZW50TGlrZVRva2VuKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGlzIGEgcGFyc2UgZXJyb3IuIFJldHVybiBhIDxkZWxpbS10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgLy8gaW5wdXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVUcml2aWFsVG9rZW4oVG9rZW5UeXBlLkRlbGltKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm9uRXJyb3IoXCJJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZS5cIiAvKiBFcnJvck1lc3NhZ2UuSW52YWxpZEVzY2FwZVNlcXVlbmNlICovLCBjb250ZXh0Lm9mZnNldCAtIDEsIGNvbnRleHQub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDcgLyogQ29kZVBvaW50LlNvbGlkdXMgKi86XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdHdvIGlucHV0IGNvZGUgcG9pbnQgYXJlIFUrMDAyRiBTT0xJRFVTICgvKSBmb2xsb3dlZCBieSBhIFUrMDAyQSBBU1RFUklTSyAoKiksXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByZWNlZGluZyBwYXJhZ3JhcGggZW5kZWQgYnkgY29uc3VtaW5nIGFuIEVPRiBjb2RlIHBvaW50LCB0aGlzIGlzIGEgcGFyc2UgZXJyb3IuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVDb2RlKDEpID09PSA0MiAvKiBDb2RlUG9pbnQuQXN0ZXJpc2sgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjb250ZXh0Lm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3VtZSBVKzAwMkYgU09MSURVUyAoLykgYW5kIFUrMDAyQSBBU1RFUklTSyAoKilcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lQ29kZVBvaW50KDIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdW1lIHRoZW0gYW5kIGFsbCBmb2xsb3dpbmcgY29kZSBwb2ludHMgdXAgdG8gYW5kIGluY2x1ZGluZyB0aGUgZmlyc3QgVSswMDJBIEFTVEVSSVNLXG4gICAgICAgICAgICAgICAgICAgIC8vICgqKSBmb2xsb3dlZCBieSBhIFUrMDAyRiBTT0xJRFVTICgvKSwgb3IgdXAgdG8gYW4gRU9GIGNvZGUgcG9pbnQuIFJldHVybiB0byB0aGUgc3RhcnQgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzdGVwLlxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbnN1bWVVbnRpbENvbW1lbnRFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuaXNFb2YoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5vbkVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1lbnQuXCIgLyogRXJyb3JNZXNzYWdlLlVudGVybWluYXRlZENvbW1lbnQgKi8sIHN0YXJ0LCBjb250ZXh0Lmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuQ29tbWVudCwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBhIDxkZWxpbS10b2tlbj4gd2l0aCBpdHMgdmFsdWUgc2V0IHRvIHRoZSBjdXJyZW50IGlucHV0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5EZWxpbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBhbnl0aGluZyBlbHNlXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIENhbid0IGJlIG9wdGltaXplZCBiZWNhdXNlIG9mIHRoZSBjb250cm9sIHRocmVzaG9sZFxuICAgICAgICAgICAgICAgIGlmIChpc0lkZW50U3RhcnRDb2RlUG9pbnQoY29udGV4dC5jb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWNvbnN1bWUgdGhlIGN1cnJlbnQgaW5wdXQgY29kZSBwb2ludCwgY29uc3VtZSBhbiBpZGVudC1saWtlIHRva2VuLCBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdW1lSWRlbnRMaWtlVG9rZW4oY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYSA8ZGVsaW0tdG9rZW4+IHdpdGggaXRzIHZhbHVlIHNldCB0byB0aGUgY3VycmVudCBpbnB1dCBjb2RlIHBvaW50LlxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZVRyaXZpYWxUb2tlbihUb2tlblR5cGUuRGVsaW0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBAZmlsZSBDdXN0b20gdG9rZW5pemluZyBsb2dpYyBmb3IgRXh0ZW5kZWQgQ1NTJ3MgcHNldWRvLWNsYXNzZXNcbiAqL1xuLyoqXG4gKiBHZW5lcmljIGhhbmRsZXIgZm9yIHRoZSBFeHRlbmRlZCBDU1MncyBwc2V1ZG8tY2xhc3Nlc1xuICpcbiAqIEBwYXJhbSBjb250ZXh0IFJlZmVyZW5jZSB0byB0aGUgdG9rZW5pemVyIGNvbnRleHQgaW5zdGFuY2VcbiAqL1xuY29uc3QgaGFuZGxlUmVndWxhckV4dGVuZGVkQ3NzUHNldWRvID0gKGNvbnRleHQpID0+IHtcbiAgICAvLyBTYXZlIHRoZSBjdXJyZW50IG9mZnNldCwgYmVjYXVzZSB3ZSB3aWxsIG5lZWQgaXQgbGF0ZXJcbiAgICBjb25zdCBzdGFydCA9IGNvbnRleHQub2Zmc2V0O1xuICAgIC8vIENvbnN1bWUgYXMgbXVjaCB3aGl0ZXNwYWNlIGFzIHBvc3NpYmxlXG4gICAgY29udGV4dC5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIC8vIElmIHRoZSBmaXJzdCBub24td2hpdGVzcGFjZSBjb2RlIHBvaW50IGlzIGFuIGFwb3N0cm9waGUgb3IgYSBxdW90YXRpb24gbWFyaywgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgZGVhbGluZ1xuICAgIC8vIHdpdGggYSBzdHJpbmcgcGFyYW1ldGVyLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgd2Ugc2ltcGx5IGFib3J0IHRoZSBjdXN0b20gaGFuZGxlciBoZXJlLCBhbmQgbGV0IHRoZSBzdGFuZGFyZCB0b2tlbml6ZXIgaGFuZGxlIHRoZSBzdHJpbmcgYW5kXG4gICAgLy8gZXZlcnl0aGluZyB0aGF0IGNvbWVzIGFmdGVyIGl0IGFzIHNwZWNpZmllZCBpbiB0aGUgc3BlYy5cbiAgICAvLyBUaGlzIGJlaGF2aW9yIGlzIHNpbWlsYXIgdG8gdGhlIHN0YW5kYXJkIENTUydzIHVybCgpIGZ1bmN0aW9uLCBpdCBpcyBhbHNvIGhhbmRsZWQgZGlmZmVyZW50bHkgaWYgaXRzIHBhcmFtZXRlclxuICAgIC8vIGlzIGEgc3RyaW5nLlxuICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDM5IC8qIENvZGVQb2ludC5BcG9zdHJvcGhlICovIHx8IGNvbnRleHQuY29kZSA9PT0gMzQgLyogQ29kZVBvaW50LlF1b3RhdGlvbk1hcmsgKi8pIHtcbiAgICAgICAgLy8gUmVwb3J0IHdoaXRlc3BhY2UgdG9rZW5zIChpZiBhbnkpXG4gICAgICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byByZXBvcnQgdGhlbSwgYmVjYXVzZSB3ZSBhbHJlYWR5IGNvbnN1bWVkIHRoZW0gLSBhbmQgdGhlIHJlcG9ydCBpcyBmYXN0ZXIgaGVyZSB0aGFuXG4gICAgICAgIC8vIGEgcmUtY29uc3VtZVxuICAgICAgICBpZiAoY29udGV4dC5vZmZzZXQgPiBzdGFydCkge1xuICAgICAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5XaGl0ZXNwYWNlLCBzdGFydCwgY29udGV4dC5vZmZzZXQsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBzaW1wbHkgYWJvcnQgdGhlIGN1c3RvbSBoYW5kbGVyXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGNsb3NpbmcgcGFyZW50aGVzaXMgYmFzZWQgb24gdGhlIHBhcmVudGhlc2lzIGJhbGFuY2VcbiAgICAvLyBQYXJlbnRoZXNpcyBiYWxhbmNlOiAxLCBiZWNhdXNlIHdlIHN0YXJ0IGFmdGVyIHRoZSBvcGVuaW5nIHBhcmVudGhlc2lzOlxuICAgIC8vIDpjb250YWlucyhwYXJhbSlcbiAgICAvLyAgICAgICAgICAgXiB3ZSBzdGFydHMgZnJvbSBoZXJlLCBzbyB3ZSBhbHJlYWR5IGhhdmUgMSBvcGVuIHBhcmVudGhlc2lzXG4gICAgbGV0IGJhbGFuY2UgPSAxO1xuICAgIC8vIERvbid0IGZvcmdldCB0byByZXBvcnQgYWxyZWFkeSBjb25zdW1lZCB3aGl0ZXNwYWNlIGNoYXJzIGFzIGRlbGltLXRva2VucyAoaWYgYW55KVxuICAgIC8vIE5vdGU6IHdlIGhhbmRsZSB0aGUgcGFyYW1ldGVyIGNoYXJhY3RlcnMgYXMgZGVsaW0tdG9rZW5zLCB0aGlzIGlzIHdoeSB3ZSBkb24ndCBuZWVkIHRvIHJlcG9ydCB0aGVtIGhlcmVcbiAgICAvLyBhcyB3aGl0ZXNwYWNlLXRva2Vuc1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGNvbnRleHQub2Zmc2V0OyBpICs9IDEpIHtcbiAgICAgICAgY29udGV4dC5vblRva2VuKFRva2VuVHlwZS5EZWxpbSwgaSwgaSArIDEsIHVuZGVmaW5lZCwgY29udGV4dC5zdG9wKTtcbiAgICB9XG4gICAgLy8gQ29uc3VtZSB1bnRpbCB3ZSBmaW5kIHRoZSBjbG9zaW5nIHBhcmVudGhlc2lzIG9yIHdlIHJlYWNoIHRoZSBlbmQgb2YgdGhlIHNvdXJjZVxuICAgIHdoaWxlICghY29udGV4dC5pc0VvZigpKSB7XG4gICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDQwIC8qIENvZGVQb2ludC5MZWZ0UGFyZW50aGVzaXMgKi8gJiYgY29udGV4dC5wcmV2Q29kZSAhPT0gOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmaW5kIGFuIHVuZXNjYXBlZCBvcGVuaW5nIHBhcmVudGhlc2lzLCB3ZSBpbmNyZWFzZSB0aGUgYmFsYW5jZVxuICAgICAgICAgICAgYmFsYW5jZSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQuY29kZSA9PT0gNDEgLyogQ29kZVBvaW50LlJpZ2h0UGFyZW50aGVzaXMgKi8gJiYgY29udGV4dC5wcmV2Q29kZSAhPT0gOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmaW5kIGFuIHVuZXNjYXBlZCBjbG9zaW5nIHBhcmVudGhlc2lzLCB3ZSBkZWNyZWFzZSB0aGUgYmFsYW5jZVxuICAgICAgICAgICAgYmFsYW5jZSAtPSAxO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJhbGFuY2UgaXMgMCwgaXQgbWVhbnMgdGhhdCB3ZSBmb3VuZCB0aGUgY2xvc2luZyBwYXJlbnRoZXNpc1xuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDb25zdW1lIHRoZSBjdXJyZW50IGNoYXJhY3RlciBhcyBhIGRlbGltLXRva2VuXG4gICAgICAgIGNvbnRleHQuY29uc3VtZVRyaXZpYWxUb2tlbihUb2tlblR5cGUuRGVsaW0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogQGZpbGUgQ3VzdG9tIHRva2VuaXppbmcgbG9naWMgZm9yIEV4dGVuZGVkIENTUydzIGA6eHBhdGgoKWAgcHNldWRvLWNsYXNzXG4gKiBAbm90ZSBgOnhwYXRoKClgIGlzIGEgYml0IHRyaWNreSwgYmVjYXVzZSBpdCBjYW4gY29udGFpbiB1bmVzY2FwZWQgcGFyZW50aGVzZXMgaW5zaWRlIHN0cmluZ3MgaW4gdGhlIFhQYXRoXG4gKiBleHByZXNzaW9uLlxuICovXG4vKipcbiAqIEhhbmRsZXIgZm9yIHRoZSBFeHRlbmRlZCBDU1MncyBgOnhwYXRoKClgIHBzZXVkby1jbGFzc1xuICpcbiAqIEBwYXJhbSBjb250ZXh0IFJlZmVyZW5jZSB0byB0aGUgdG9rZW5pemVyIGNvbnRleHQgaW5zdGFuY2VcbiAqL1xuY29uc3QgaGFuZGxlWHBhdGhFeHRlbmRlZENzc1BzZXVkbyA9IChjb250ZXh0KSA9PiB7XG4gICAgLy8gU2F2ZSB0aGUgY3VycmVudCBvZmZzZXQsIGJlY2F1c2Ugd2Ugd2lsbCBuZWVkIGl0IGxhdGVyXG4gICAgY29uc3Qgc3RhcnQgPSBjb250ZXh0Lm9mZnNldDtcbiAgICAvLyBDb25zdW1lIGFzIG11Y2ggd2hpdGVzcGFjZSBhcyBwb3NzaWJsZVxuICAgIGNvbnRleHQuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICAvLyBJZiB0aGUgZmlyc3Qgbm9uLXdoaXRlc3BhY2UgY29kZSBwb2ludCBpcyBhbiBhcG9zdHJvcGhlIG9yIGEgcXVvdGF0aW9uIG1hcmssIGl0IG1lYW5zIHRoYXQgd2UgYXJlIGRlYWxpbmdcbiAgICAvLyB3aXRoIGEgc3RyaW5nIHBhcmFtZXRlci5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIHNpbXBseSBhYm9ydCB0aGUgY3VzdG9tIGhhbmRsZXIgaGVyZSwgYW5kIGxldCB0aGUgc3RhbmRhcmQgdG9rZW5pemVyIGhhbmRsZSB0aGUgc3RyaW5nIGFuZFxuICAgIC8vIGV2ZXJ5dGhpbmcgdGhhdCBjb21lcyBhZnRlciBpdCBhcyBzcGVjaWZpZWQgaW4gdGhlIHNwZWMuXG4gICAgLy8gVGhpcyBiZWhhdmlvciBpcyBzaW1pbGFyIHRvIHRoZSBzdGFuZGFyZCBDU1MncyB1cmwoKSBmdW5jdGlvbiwgaXQgaXMgYWxzbyBoYW5kbGVkIGRpZmZlcmVudGx5IGlmIGl0cyBwYXJhbWV0ZXJcbiAgICAvLyBpcyBhIHN0cmluZy5cbiAgICBpZiAoY29udGV4dC5jb2RlID09PSAzOSAvKiBDb2RlUG9pbnQuQXBvc3Ryb3BoZSAqLyB8fCBjb250ZXh0LmNvZGUgPT09IDM0IC8qIENvZGVQb2ludC5RdW90YXRpb25NYXJrICovKSB7XG4gICAgICAgIC8vIFJlcG9ydCB3aGl0ZXNwYWNlIHRva2VucyAoaWYgYW55KVxuICAgICAgICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8gcmVwb3J0IHRoZW0sIGJlY2F1c2Ugd2UgYWxyZWFkeSBjb25zdW1lZCB0aGVtIC0gYW5kIHRoZSByZXBvcnQgaXMgZmFzdGVyIGhlcmUgdGhhblxuICAgICAgICAvLyBhIHJlLWNvbnN1bWVcbiAgICAgICAgaWYgKGNvbnRleHQub2Zmc2V0ID4gc3RhcnQpIHtcbiAgICAgICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuV2hpdGVzcGFjZSwgc3RhcnQsIGNvbnRleHQub2Zmc2V0LCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2Ugc2ltcGx5IGFib3J0IHRoZSBjdXN0b20gaGFuZGxlclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgd2UgbmVlZCB0byBmaW5kIHRoZSBjbG9zaW5nIHBhcmVudGhlc2lzIGJhc2VkIG9uIHRoZSBwYXJlbnRoZXNpcyBiYWxhbmNlXG4gICAgLy8gUGFyZW50aGVzaXMgYmFsYW5jZTogMSwgYmVjYXVzZSB3ZSBzdGFydCBhZnRlciB0aGUgb3BlbmluZyBwYXJlbnRoZXNpczpcbiAgICAvLyA6eHBhdGgocGFyYW0pXG4gICAgLy8gICAgICAgIF4gd2Ugc3RhcnRzIGZyb20gaGVyZSwgc28gd2UgYWxyZWFkeSBoYXZlIDEgb3BlbiBwYXJlbnRoZXNpc1xuICAgIGxldCBiYWxhbmNlID0gMTtcbiAgICAvLyBEb24ndCBmb3JnZXQgdG8gcmVwb3J0IGFscmVhZHkgY29uc3VtZWQgd2hpdGVzcGFjZSBjaGFycyBhcyBkZWxpbS10b2tlbnMgKGlmIGFueSlcbiAgICAvLyBOb3RlOiB3ZSBoYW5kbGUgdGhlIHBhcmFtZXRlciBjaGFyYWN0ZXJzIGFzIGRlbGltLXRva2VucywgdGhpcyBpcyB3aHkgd2UgZG9uJ3QgbmVlZCB0byByZXBvcnQgdGhlbSBoZXJlXG4gICAgLy8gYXMgd2hpdGVzcGFjZS10b2tlbnNcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBjb250ZXh0Lm9mZnNldDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnRleHQub25Ub2tlbihUb2tlblR5cGUuRGVsaW0sIGksIGkgKyAxLCB1bmRlZmluZWQsIGNvbnRleHQuc3RvcCk7XG4gICAgfVxuICAgIC8vIDp4cGF0aCgpIGlzIGEgYml0IHRyaWNreSwgYmVjYXVzZSBpdCBjYW4gY29udGFpbiB1bmVzY2FwZWQgcGFyZW50aGVzZXMgaW5zaWRlIHN0cmluZ3MgaW4gdGhlIFhQYXRoIGV4cHJlc3Npb24sXG4gICAgLy8gbGlrZSB0aGlzOlxuICAgIC8vIDp4cGF0aCgvL2RpdltAY2xhc3M9XCJmb28oYmFyKVwiXSlcbiAgICAvLyBidXQgaW4gdGhpcyBjYXNlLCBub3QgcmVxdWlyZWQgdGhlIHdob2xlIFhQYXRoIGV4cHJlc3Npb24gdG8gYmUgYSBzdHJpbmdcbiAgICBsZXQgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAvLyBDb25zdW1lIHVudGlsIHdlIGZpbmQgdGhlIGNsb3NpbmcgcGFyZW50aGVzaXMgb3Igd2UgcmVhY2ggdGhlIGVuZCBvZiB0aGUgc291cmNlXG4gICAgd2hpbGUgKCFjb250ZXh0LmlzRW9mKCkpIHtcbiAgICAgICAgLy8gSWYgd2UgZmluZCBhbiB1bmVzY2FwZWQgcXVvdGUgbWFyaywgd2UgdG9nZ2xlIHRoZSBcImluU3RyaW5nXCIgZmxhZ1xuICAgICAgICAvLyBJdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2Ugc2hvdWxkIG9taXQgcGFyZW50aGVzZXMgaW5zaWRlIHN0cmluZ3MuXG4gICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDM0IC8qIENvZGVQb2ludC5RdW90YXRpb25NYXJrICovICYmIGNvbnRleHQucHJldkNvZGUgIT09IDkyIC8qIENvZGVQb2ludC5SZXZlcnNlU29saWR1cyAqLykge1xuICAgICAgICAgICAgaW5TdHJpbmcgPSAhaW5TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCBpbnNpZGUgYSBzdHJpbmcsIHdlIHNob3VsZCBjaGVjayBwYXJlbnRoZXNlcyBiYWxhbmNlXG4gICAgICAgIGlmICghaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmNvZGUgPT09IDQwIC8qIENvZGVQb2ludC5MZWZ0UGFyZW50aGVzaXMgKi8gJiYgY29udGV4dC5wcmV2Q29kZSAhPT0gOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZmluZCBhbiB1bmVzY2FwZWQgb3BlbmluZyBwYXJlbnRoZXNpcywgd2UgaW5jcmVhc2UgdGhlIGJhbGFuY2VcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb250ZXh0LmNvZGUgPT09IDQxIC8qIENvZGVQb2ludC5SaWdodFBhcmVudGhlc2lzICovICYmIGNvbnRleHQucHJldkNvZGUgIT09IDkyIC8qIENvZGVQb2ludC5SZXZlcnNlU29saWR1cyAqLykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGZpbmQgYW4gdW5lc2NhcGVkIGNsb3NpbmcgcGFyZW50aGVzaXMsIHdlIGRlY3JlYXNlIHRoZSBiYWxhbmNlXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSAxO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBiYWxhbmNlIGlzIDAsIGl0IG1lYW5zIHRoYXQgd2UgZm91bmQgdGhlIGNsb3NpbmcgcGFyZW50aGVzaXMgb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHNldWRvLWNsYXNzXG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIGFzIGEgZGVsaW0tdG9rZW5cbiAgICAgICAgY29udGV4dC5jb25zdW1lVHJpdmlhbFRva2VuKFRva2VuVHlwZS5EZWxpbSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAZmlsZSBNYXAgdXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuLyoqXG4gKiBTaW1wbGUgdXRpbGl0eSBmdW5jdGlvbiB0byBtZXJnZSB0d28gbWFwcy5cbiAqXG4gKiBAcGFyYW0gbWFwMSBGaXJzdCBtYXBcbiAqIEBwYXJhbSBtYXAyIFNlY29uZCBtYXBcbiAqIEByZXR1cm5zIE1lcmdlZCBtYXBcbiAqIEBub3RlIElmIGEga2V5IGlzIHByZXNlbnQgaW4gYm90aCBtYXBzLCB0aGUgdmFsdWUgZnJvbSB0aGUgc2Vjb25kIG1hcCB3aWxsIGJlIHVzZWRcbiAqIEBub3RlIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgbW9kaWZ5IHRoZSBvcmlnaW5hbCBtYXBzLCBpdCByZXR1cm5zIGEgbmV3IG1hcFxuICovXG5mdW5jdGlvbiBtZXJnZU1hcHMobWFwMSwgbWFwMikge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXAxKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcDIpIHtcbiAgICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAZmlsZSBFeHRlbmRlZCBDU1MgdG9rZW5pemVyIHRoYXQgZXh0ZW5kcyB0aGUgY29yZSBDU1MgdG9rZW5pemVyXG4gKlxuICogVGhpcyBsaWJyYXJ5IHN1cHBvcnRzIHZhcmlvdXMgRXh0ZW5kZWQgQ1NTIGxhbmd1YWdlIGVsZW1lbnRzIGZyb21cbiAqIC0gQWRHdWFyZCxcbiAqIC0gdUJsb2NrIE9yaWdpbiBhbmRcbiAqIC0gQWRibG9jayBQbHVzLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9FeHRlbmRlZENzc31cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3JoaWxsL3VCbG9jay93aWtpL1Byb2NlZHVyYWwtY29zbWV0aWMtZmlsdGVyc31cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaGVscC5hZGJsb2NrcGx1cy5vcmcvaGMvZW4tdXMvYXJ0aWNsZXMvMzYwMDYyNzMzMjkzI2VsZW1oaWRlLWVtdWxhdGlvbn1cbiAqL1xuY29uc3QgQUJQX0NPTlRBSU5TX0hBU0ggPSAxOTg5MDg0NzI1OyAvLyBnZXRTdHJpbmdIYXNoKCctYWJwLWNvbnRhaW5zJylcbmNvbnN0IENPTlRBSU5TX0hBU0ggPSAyMzk5NDcwNTk4OyAvLyBnZXRTdHJpbmdIYXNoKCdjb250YWlucycpXG5jb25zdCBIQVNfVEVYVF9IQVNIID0gMTIyMTY2Mzg1NTsgLy8gZ2V0U3RyaW5nSGFzaCgnaGFzLXRleHQnKVxuY29uc3QgTUFUQ0hFU19DU1NfSEFTSCA9IDEwMjMwNDMwMjsgLy8gZ2V0U3RyaW5nSGFzaCgnbWF0Y2hlcy1jc3MnKVxuY29uc3QgTUFUQ0hFU19DU1NfQUZURVJfSEFTSCA9IDI5MjM4ODgyMzE7IC8vIGdldFN0cmluZ0hhc2goJ21hdGNoZXMtY3NzLWFmdGVyJylcbmNvbnN0IE1BVENIRVNfQ1NTX0JFRk9SRV9IQVNIID0gMTczOTcxMzA1MDsgLy8gZ2V0U3RyaW5nSGFzaCgnbWF0Y2hlcy1jc3MtYmVmb3JlJylcbmNvbnN0IE1BVENIRVNfUFJPUEVSVFlfSEFTSCA9IDE4NjA3OTA2NjY7IC8vIGdldFN0cmluZ0hhc2goJ21hdGNoZXMtcHJvcGVydHknKVxuY29uc3QgTUFUQ0hFU19BVFRSX0hBU0ggPSAzMzc2MTA0MzE4OyAvLyBnZXRTdHJpbmdIYXNoKCdtYXRjaGVzLWF0dHInKVxuY29uc3QgWFBBVEhfSEFTSCA9IDE5NjU3MTk4NDsgLy8gZ2V0U3RyaW5nSGFzaCgneHBhdGgnKVxuLyoqXG4gKiBNYXAgb2YgRXh0ZW5kZWQgQ1NTJ3MgcHNldWRvLWNsYXNzZXMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgaGFuZGxlciBmdW5jdGlvbnNcbiAqL1xuY29uc3QgRVhUX0NTU19QU0VVRE9fSEFORExFUlMgPSBuZXcgTWFwKFtcbiAgICAvLyBOb3RlOiBhbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIHVzZSBgZ2V0U3RyaW5nSGFzaGAgdG8gZ2V0IHRoZSBoYXNoIG9mIHRoZSBwc2V1ZG8tY2xhc3MgbmFtZSwgYnV0IHdlIHVzZVxuICAgIC8vIHByZS1jYWxjdWxhdGVkIGhhc2hlcyBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgW0FCUF9DT05UQUlOU19IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtDT05UQUlOU19IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtIQVNfVEVYVF9IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtNQVRDSEVTX0NTU19IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtNQVRDSEVTX0NTU19BRlRFUl9IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtNQVRDSEVTX0NTU19CRUZPUkVfSEFTSCwgaGFuZGxlUmVndWxhckV4dGVuZGVkQ3NzUHNldWRvXSxcbiAgICBbTUFUQ0hFU19QUk9QRVJUWV9IQVNILCBoYW5kbGVSZWd1bGFyRXh0ZW5kZWRDc3NQc2V1ZG9dLFxuICAgIFtNQVRDSEVTX0FUVFJfSEFTSCwgaGFuZGxlUmVndWxhckV4dGVuZGVkQ3NzUHNldWRvXSxcbiAgICBbWFBBVEhfSEFTSCwgaGFuZGxlWHBhdGhFeHRlbmRlZENzc1BzZXVkb10sXG5dKTtcbi8qKlxuICogRXh0ZW5kZWQgQ1NTIHRva2VuaXplciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSBzb3VyY2UgU291cmNlIGNvZGUgdG8gdG9rZW5pemVcbiAqIEBwYXJhbSBvblRva2VuIFRva2VuaXplciBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgZm9yIGVhY2ggdG9rZW4gZm91bmQgaW4gc291cmNlIGNvZGVcbiAqIEBwYXJhbSBvbkVycm9yIEVycm9yIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGEgcGFyc2luZyBlcnJvciBpcyBmb3VuZCAob3B0aW9uYWwpXG4gKiBAcGFyYW0gZnVuY3Rpb25IYW5kbGVycyBDdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMgKG9wdGlvbmFsKVxuICogQG5vdGUgSWYgeW91IHNwZWNpZnkgY3VzdG9tIGZ1bmN0aW9uIGhhbmRsZXJzLCB0aGV5IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcnMuIElmIHlvdVxuICogZHVwbGljYXRlIGEgZnVuY3Rpb24gaGFuZGxlciwgdGhlIGN1c3RvbSBvbmUgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgb25lLCBzbyB5b3UgY2FuIG92ZXJyaWRlIHRoZSBkZWZhdWx0XG4gKiBmdW5jdGlvbiBoYW5kbGVycyB0aGlzIHdheSwgaWYgeW91IHdhbnQgdG8uXG4gKi9cbmNvbnN0IHRva2VuaXplRXh0ZW5kZWQgPSAoc291cmNlLCBvblRva2VuLCBvbkVycm9yID0gKCkgPT4geyB9LCBmdW5jdGlvbkhhbmRsZXJzID0gbmV3IE1hcCgpKSA9PiB7XG4gICAgdG9rZW5pemUoc291cmNlLCBvblRva2VuLCBvbkVycm9yLCBcbiAgICAvLyBSZWdpc3RlciBjdXN0b20gZnVuY3Rpb24gaGFuZGxlcnMgZm9yIEV4dGVuZGVkIENTUydzIHBzZXVkby1jbGFzc2VzLCBidXQgZG8gbm90IGNhbGwgbWVyZ2VNYXBzIGlmIHRoZXJlIGFyZVxuICAgIC8vIG5vIGN1c3RvbSBmdW5jdGlvbiBoYW5kbGVycyBhcmUgcHJvdmlkZWRcbiAgICBmdW5jdGlvbkhhbmRsZXJzLnNpemUgPiAwXG4gICAgICAgID8gbWVyZ2VNYXBzKEVYVF9DU1NfUFNFVURPX0hBTkRMRVJTLCBmdW5jdGlvbkhhbmRsZXJzKVxuICAgICAgICA6IEVYVF9DU1NfUFNFVURPX0hBTkRMRVJTKTtcbn07XG5cbi8qKlxuICogQGZpbGUgQ1NTIGlkZW50aWZpZXIgZGVjb2Rlci5cbiAqL1xuY29uc3QgRU1QVFlfU1RSSU5HID0gJyc7XG4vKipcbiAqIERlY29kZXMgYSBDU1MgaWRlbnRpZmllciBhY2NvcmRpbmcgdG8gdGhlIENTUyBTeW50YXggTW9kdWxlIExldmVsIDMgc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0gaWRlbnQgQ1NTIGlkZW50aWZpZXIgdG8gZGVjb2RlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogZGVjb2RlSWRlbnQoU3RyaW5nLnJhd2BcXDAwMDc1XFwwMDA3MlxcMDAwNkNgKTsgLy8gJ3VybCdcbiAqIGRlY29kZUlkZW50KCd1cmwnKTsgLy8gJ3VybCdcbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIERlY29kZWQgQ1NTIGlkZW50aWZpZXIuXG4gKi9cbmNvbnN0IGRlY29kZUlkZW50ID0gKGlkZW50KSA9PiB7XG4gICAgY29uc3QgZGVjb2RlZElkZW50ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZGVudC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjb2RlUG9pbnQgPSBpZGVudC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyA0LjMuNy4gQ29uc3VtZSBhbiBlc2NhcGVkIGNvZGUgcG9pbnRcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jY29uc3VtZS1hbi1lc2NhcGVkLWNvZGUtcG9pbnRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA9PT0gOTIgLyogQ29kZVBvaW50LlJldmVyc2VTb2xpZHVzICovKSB7XG4gICAgICAgICAgICAvLyBoZXggZGlnaXRcbiAgICAgICAgICAgIGlmIChpc0hleERpZ2l0KGlkZW50LmNoYXJDb2RlQXQoaSArIDEpKSkge1xuICAgICAgICAgICAgICAgIC8vIENvbnN1bWUgYXMgbWFueSBoZXggZGlnaXRzIGFzIHBvc3NpYmxlLCBidXQgbm8gbW9yZSB0aGFuIDUuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgbWVhbnMgMS02IGhleCBkaWdpdHMgaGF2ZSBiZWVuIGNvbnN1bWVkIGluIHRvdGFsLlxuICAgICAgICAgICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IDA7IC8vIGNvbnN1bWVkIGhleCBkaWdpdHNcbiAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IE1BWF9IRVhfRElHSVRTICYmIGlzSGV4RGlnaXQoaWRlbnQuY2hhckNvZGVBdChpICsgaiArIDEpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcnByZXQgdGhlIGhleCBkaWdpdHMgYXMgYSBoZXhhZGVjaW1hbCBudW1iZXIuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBuICogMTYgKyBwYXJzZUludChpZGVudFtpICsgaiArIDFdLCAxNik7XG4gICAgICAgICAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVjb2RlZElkZW50LnB1c2goXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBudW1iZXIgaXMgemVybywgb3IgaXMgZm9yIGEgc3Vycm9nYXRlLCBvciBpcyBncmVhdGVyIHRoYW4gdGhlIG1heGltdW0gYWxsb3dlZCBjb2RlXG4gICAgICAgICAgICAgICAgLy8gcG9pbnQsIHJldHVybiBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSICjvv70pLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBjb2RlIHBvaW50IHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChuID09PSAwIHx8IGlzU3Vycm9nYXRlKG4pIHx8IGlzR3JlYXRlclRoYW5NYXhBbGxvd2VkQ29kZVBvaW50KG4pXG4gICAgICAgICAgICAgICAgICAgID8gNjU1MzMgLyogQ29kZVBvaW50LlJlcGxhY2VtZW50Q2hhcmFjdGVyICovXG4gICAgICAgICAgICAgICAgICAgIDogbikpO1xuICAgICAgICAgICAgICAgIGkgKz0gajtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCBpbnB1dCBjb2RlIHBvaW50IGlzIHdoaXRlc3BhY2UsIGNvbnN1bWUgaXQgYXMgd2VsbC5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0Q29kZVBvaW50ID0gaWRlbnQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShuZXh0Q29kZVBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb25zdW1lIHdoaXRlc3BhY2UgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlOiBjb25zdW1lICsxIGNoYXJhY3RlciBpZiB0aGUgc2VxdWVuY2UgaXMgQ1IgTEZcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDb2RlUG9pbnQgPT09IDEzIC8qIENvZGVQb2ludC5DYXJyaWFnZVJldHVybiAqLyAmJiBpZGVudC5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gMTAgLyogQ29kZVBvaW50LkxpbmVGZWVkICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nIGZvciBFT0ZcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFueXRoaW5nIGVsc2VcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY3VycmVudCBpbnB1dCBjb2RlIHBvaW50LlxuICAgICAgICAgICAgZGVjb2RlZElkZW50LnB1c2goaWRlbnRbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkSWRlbnQuam9pbihFTVBUWV9TVFJJTkcpO1xufTtcblxuY29uc3QgdmVyc2lvbiA9IFwiMS4yLjBcIjtcblxuLyoqXG4gKiBAZmlsZSBQYWNrYWdlIHZlcnNpb25cbiAqL1xuLy8gISBOb3RpY2U6XG4vLyBEb24ndCBleHBvcnQgdmVyc2lvbiBmcm9tIHBhY2thZ2UuanNvbiBkaXJlY3RseSwgYmVjYXVzZSBpZiB5b3UgcnVuIGB0c2NgIGluIHRoZSByb290IGRpcmVjdG9yeSwgaXQgd2lsbCBnZW5lcmF0ZVxuLy8gYGRpc3QvdHlwZXMvc3JjL3ZlcnNpb24uZC50c2Agd2l0aCB3cm9uZyByZWxhdGl2ZSBwYXRoIHRvIGBwYWNrYWdlLmpzb25gLiBTbyB3ZSBuZWVkIHRoaXMgbGl0dGxlIFwiaGFja1wiXG5jb25zdCBDU1NfVE9LRU5JWkVSX1ZFUlNJT04gPSB2ZXJzaW9uO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gcmF3IHN0cmluZyBjb250YWlucyBhbnkgb2YgdGhlIHNwZWNpZmllZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHJhdyAtIFRoZSByYXcgc3RyaW5nIHRvIGJlIHRva2VuaXplZCBhbmQgY2hlY2tlZC5cbiAqIEBwYXJhbSB0b2tlbnMgLSBBIHNldCBvZiB0b2tlbiB0eXBlcyB0byBjaGVjayBmb3IgaW4gdGhlIHJhdyBzdHJpbmcuXG4gKiBAcGFyYW0gdG9rZW5pemVyIC0gVGhlIHRva2VuaXplciBmdW5jdGlvbiB0byB1c2UuIERlZmF1bHRzIHRvIGB0b2tlbml6ZUV4dGVuZGVkYC5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBhbnkgb2YgdGhlIHNwZWNpZmllZCB0b2tlbnMgYXJlIGZvdW5kIGluIHRoZSByYXcgc3RyaW5nLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuY29uc3QgaGFzVG9rZW4gPSAocmF3LCB0b2tlbnMsIHRva2VuaXplciA9IHRva2VuaXplRXh0ZW5kZWQpID0+IHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICB0b2tlbml6ZXIocmF3LCAodHlwZSwgc3RhcnQsIGVuZCwgcHJvcHMsIHN0b3ApID0+IHtcbiAgICAgICAgaWYgKHRva2Vucy5oYXModHlwZSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3VuZDtcbn07XG5cbmV4cG9ydCB7IENTU19UT0tFTklaRVJfVkVSU0lPTiwgVG9rZW5UeXBlLCBUb2tlbml6ZXJDb250ZXh0LCBkZWNvZGVJZGVudCwgZ2V0QmFzZVRva2VuTmFtZSwgZ2V0Rm9ybWF0dGVkVG9rZW5OYW1lLCBoYXNUb2tlbiwgdG9rZW5pemUsIHRva2VuaXplRXh0ZW5kZWQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==