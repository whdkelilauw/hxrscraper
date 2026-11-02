(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([["vendors/mobx"],{

/***/ "./node_modules/.pnpm/mobx@6.9.0/node_modules/mobx/dist/mobx.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/mobx@6.9.0/node_modules/mobx/dist/mobx.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $mobx: () => (/* binding */ $mobx),
/* harmony export */   Reaction: () => (/* binding */ Reaction),
/* harmony export */   _allowStateChanges: () => (/* binding */ allowStateChanges),
/* harmony export */   _allowStateReadsEnd: () => (/* binding */ allowStateReadsEnd),
/* harmony export */   _allowStateReadsStart: () => (/* binding */ allowStateReadsStart),
/* harmony export */   action: () => (/* binding */ action),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   configure: () => (/* binding */ configure),
/* harmony export */   createAtom: () => (/* binding */ createAtom),
/* harmony export */   getDependencyTree: () => (/* binding */ getDependencyTree),
/* harmony export */   isObservableArray: () => (/* binding */ isObservableArray),
/* harmony export */   isObservableMap: () => (/* binding */ isObservableMap),
/* harmony export */   isObservableObject: () => (/* binding */ isObservableObject),
/* harmony export */   makeObservable: () => (/* binding */ makeObservable),
/* harmony export */   observable: () => (/* binding */ observable),
/* harmony export */   runInAction: () => (/* binding */ runInAction),
/* harmony export */   untracked: () => (/* binding */ untracked)
/* harmony export */ });
/* unused harmony exports FlowCancellationError, ObservableMap, ObservableSet, _allowStateChangesInsideComputed, _autoAction, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, autorun, comparer, defineProperty, entries, extendObservable, flow, flowResult, get, getAtom, getDebugName, getObserverTree, has, intercept, isAction, isBoxedObservable, isComputed, isComputedProp, isFlow, isFlowCancellationError, isObservable, isObservableProp, isObservableSet, keys, makeAutoObservable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, override, ownKeys, reaction, remove, set, spy, toJS, trace, transaction, values, when */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
 //# sourceMappingURL=mobx.esm.js.map



var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(annotationType, key) {
        return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */ 5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _(index, length) {
        return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _(other) {
        return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _(other) {
        return "Cannot initialize map from " + other;
    },
    21: function _(dataStructure) {
        return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _(thing) {
        return "Cannot obtain administration from " + thing;
    },
    25: function _(property, name) {
        return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _(property, name) {
        return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _(thing) {
        return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _(name, derivation) {
        return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _(name) {
        return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _(name) {
        return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _(method) {
        return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    },
    38: "'ownKeys()' can only be used on observable objects",
    39: "'defineProperty()' can only be used on observable objects"
};
var errors =  true ? niceErrors : 0;
function die(error) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (true) {
        var e = typeof error === "string" ? error : errors[error];
        if (typeof e === "function") e = e.apply(null, args);
        throw new Error("[MobX] " + e);
    }
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
// We shorten anything used > 5 times
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/ Object.toString();
function assertProxies() {
    if (!hasProxy) {
        die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : 0);
    }
}
function warnAboutProxyRequirement(msg) {
    if ( true && globalState.verifyProxies) {
        die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
}
function getNextId() {
    return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */ function once(func) {
    var invoked = false;
    return function() {
        if (invoked) {
            return;
        }
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function noop() {};
function isFunction(fn) {
    return typeof fn === "function";
}
function isStringish(value) {
    var t = typeof value;
    switch(t){
        case "string":
        case "symbol":
        case "number":
            return true;
    }
    return false;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (!isObject(value)) {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto == null) {
        return true;
    }
    var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
// https://stackoverflow.com/a/37865170
function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) {
        return false;
    }
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
        return true;
    }
    return false;
}
function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x) {
        return isObject(x) && x[propName] === true;
    };
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */ function getPlainObjectKeys(object) {
    var keys = Object.keys(object);
    // Not supported in IE, so there are not going to be symbol props anyway...
    if (!hasGetOwnPropertySymbols) {
        return keys;
    }
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) {
        return keys;
    }
    return [].concat(keys, symbols.filter(function(s) {
        return objectPrototype.propertyIsEnumerable.call(object, s);
    }));
}
// From Immer utils
// Returns all own keys, including non-enumerable and symbolic
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : /* istanbul ignore next */ Object.getOwnPropertyNames;
function stringifyKey(key) {
    if (typeof key === "string") {
        return key;
    }
    if (typeof key === "symbol") {
        return key.toString();
    }
    return new String(key).toString();
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
}
// From Immer utils
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {};
    // Note: without polyfill for ownKeys, symbols won't be picked up
    ownKeys(target).forEach(function(key) {
        res[key] = getDescriptor(target, key);
    });
    return res;
};
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
var storedAnnotationsSymbol = /*#__PURE__*/ Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */ function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
        storeAnnotation(target, property, annotation);
    }
    return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */ function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
        addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    }
    // @override must override something
    if ( true && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
        var fieldName = prototype.constructor.name + ".prototype." + key.toString();
        die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
    }
    // Cannot re-decorate
    assertNotDecorated(prototype, annotation, key);
    // Ignore override
    if (!isOverride(annotation)) {
        prototype[storedAnnotationsSymbol][key] = annotation;
    }
}
function assertNotDecorated(prototype, annotation, key) {
    if ( true && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
        var fieldName = prototype.constructor.name + ".prototype." + key.toString();
        var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
        var requestedAnnotationType = annotation.annotationType_;
        die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overridden by subclass.");
    }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */ function collectStoredAnnotations(target) {
    if (!hasProp(target, storedAnnotationsSymbol)) {
        if ( true && !target[storedAnnotationsSymbol]) {
            die("No annotations were passed to makeObservable, but no decorated members have been found either");
        }
        // We need a copy as we will remove annotation from the list once it's applied.
        addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
    }
    return target[storedAnnotationsSymbol];
}
var $mobx = /*#__PURE__*/ Symbol("mobx administration");
var Atom = /*#__PURE__*/ function() {
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
    /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */ function Atom(name_) {
        if (name_ === void 0) {
            name_ =  true ? "Atom@" + getNextId() : 0;
        }
        this.name_ = void 0;
        this.isPendingUnobservation_ = false;
        this.isBeingObserved_ = false;
        this.observers_ = new Set();
        this.diffValue_ = 0;
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
        this.onBOL = void 0;
        this.onBUOL = void 0;
        this.name_ = name_;
    }
    // onBecomeObservedListeners
    var _proto = Atom.prototype;
    _proto.onBO = function onBO() {
        if (this.onBOL) {
            this.onBOL.forEach(function(listener) {
                return listener();
            });
        }
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) {
            this.onBUOL.forEach(function(listener) {
                return listener();
            });
        }
    };
    _proto.reportObserved = function reportObserved$1() {
        return reportObserved(this);
    };
    _proto.reportChanged = function reportChanged() {
        startBatch();
        propagateChanged(this);
        // We could update state version only at the end of batch,
        // but we would still have to switch some global flag here to signal a change.
        globalState.stateVersion = globalState.stateVersion < Number.MAX_SAFE_INTEGER ? globalState.stateVersion + 1 : Number.MIN_SAFE_INTEGER;
        endBatch();
    };
    _proto.toString = function toString() {
        return this.name_;
    };
    return Atom;
}();
var isAtom = /*#__PURE__*/ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
        onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
        onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}
function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    if (Object.is) {
        return Object.is(a, b);
    }
    return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
};
function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) {
        return v;
    }
    // something that can be converted and mutated?
    if (Array.isArray(v)) {
        return observable.array(v, {
            name: name
        });
    }
    if (isPlainObject(v)) {
        return observable.object(v, undefined, {
            name: name
        });
    }
    if (isES6Map(v)) {
        return observable.map(v, {
            name: name
        });
    }
    if (isES6Set(v)) {
        return observable.set(v, {
            name: name
        });
    }
    if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
        if (isGenerator(v)) {
            return flow(v);
        } else {
            return autoAction(name, v);
        }
    }
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) {
        return v;
    }
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
        return v;
    }
    if (Array.isArray(v)) {
        return observable.array(v, {
            name: name,
            deep: false
        });
    }
    if (isPlainObject(v)) {
        return observable.object(v, undefined, {
            name: name,
            deep: false
        });
    }
    if (isES6Map(v)) {
        return observable.map(v, {
            name: name,
            deep: false
        });
    }
    if (isES6Set(v)) {
        return observable.set(v, {
            name: name,
            deep: false
        });
    }
    if (true) {
        die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
    }
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue) {
    if ( true && isObservable(v)) {
        die("observable.struct should not be used with observable values");
    }
    if (deepEqual(v, oldValue)) {
        return oldValue;
    }
    return v;
}
var OVERRIDE = "override";
var override = /*#__PURE__*/ createDecoratorAnnotation({
    annotationType_: OVERRIDE,
    make_: make_,
    extend_: extend_
});
function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
}
function make_(adm, key) {
    // Must not be plain object
    if ( true && adm.isPlainObject_) {
        die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
    }
    // Must override something
    if ( true && !hasProp(adm.appliedAnnotations_, key)) {
        die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
    }
    return 0 /* Cancel */ ;
}
function extend_(adm, key, descriptor, proxyTrap) {
    die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}
function createActionAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$1,
        extend_: extend_$1
    };
}
function make_$1(adm, key, descriptor, source) {
    var _this$options_;
    // bound
    if ((_this$options_ = this.options_) != null && _this$options_.bound) {
        return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */  : 1 /* Break */ ;
    }
    // own
    if (source === adm.target_) {
        return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */  : 2 /* Continue */ ;
    }
    // prototype
    if (isAction(descriptor.value)) {
        // A prototype could have been annotated already by other constructor,
        // rest of the proto chain must be annotated already
        return 1 /* Break */ ;
    }
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2 /* Continue */ ;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if ( true && !isFunction(value)) {
        die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
    }
}
function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
    if (safeDescriptors === void 0) {
        safeDescriptors = globalState.safeDescriptors;
    }
    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
        var _adm$proxy_;
        value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
        value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, // https://github.com/mobxjs/mobx/discussions/3140
        (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
        // Non-configurable for classes
        // prevents accidental field redefinition in subclass
        configurable: safeDescriptors ? adm.isPlainObject_ : true,
        // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
        enumerable: false,
        // Non-obsevable, therefore non-writable
        // Also prevents rewriting in subclass constructor
        writable: safeDescriptors ? false : true
    };
}
function createFlowAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$2,
        extend_: extend_$2
    };
}
function make_$2(adm, key, descriptor, source) {
    var _this$options_;
    // own
    if (source === adm.target_) {
        return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */  : 2 /* Continue */ ;
    }
    // prototype
    // bound - must annotate protos to support super.flow()
    if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
        if (this.extend_(adm, key, descriptor, false) === null) {
            return 0 /* Cancel */ ;
        }
    }
    if (isFlow(descriptor.value)) {
        // A prototype could have been annotated already by other constructor,
        // rest of the proto chain must be annotated already
        return 1 /* Break */ ;
    }
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
    defineProperty(source, key, flowDescriptor);
    return 2 /* Continue */ ;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
    var _this$options_2;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if ( true && !isFunction(value)) {
        die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
    }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
    if (safeDescriptors === void 0) {
        safeDescriptors = globalState.safeDescriptors;
    }
    assertFlowDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    // In case of flow.bound, the descriptor can be from already annotated prototype
    if (!isFlow(value)) {
        value = flow(value);
    }
    if (bound) {
        var _adm$proxy_;
        // We do not keep original function around, so we bind the existing flow
        value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
        // This is normally set by `flow`, but `bind` returns new function...
        value.isMobXFlow = true;
    }
    return {
        value: value,
        // Non-configurable for classes
        // prevents accidental field redefinition in subclass
        configurable: safeDescriptors ? adm.isPlainObject_ : true,
        // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
        enumerable: false,
        // Non-obsevable, therefore non-writable
        // Also prevents rewriting in subclass constructor
        writable: safeDescriptors ? false : true
    };
}
function createComputedAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$3,
        extend_: extend_$3
    };
}
function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */  : 1 /* Break */ ;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
        get: descriptor.get,
        set: descriptor.set
    }), proxyTrap);
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get = _ref2.get;
    if ( true && !get) {
        die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
    }
}
function createObservableAnnotation(name, options) {
    return {
        annotationType_: name,
        options_: options,
        make_: make_$4,
        extend_: extend_$4
    };
}
function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */  : 1 /* Break */ ;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;
    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;
    if ( true && !("value" in descriptor)) {
        die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
    }
}
var AUTO = "true";
var autoAnnotation = /*#__PURE__*/ createAutoAnnotation();
function createAutoAnnotation(options) {
    return {
        annotationType_: AUTO,
        options_: options,
        make_: make_$5,
        extend_: extend_$5
    };
}
function make_$5(adm, key, descriptor, source) {
    var _this$options_3, _this$options_4;
    // getter -> computed
    if (descriptor.get) {
        return computed.make_(adm, key, descriptor, source);
    }
    // lone setter -> action setter
    if (descriptor.set) {
        // TODO make action applicable to setter and delegate to action.make_
        var set = createAction(key.toString(), descriptor.set);
        // own
        if (source === adm.target_) {
            return adm.defineProperty_(key, {
                configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
                set: set
            }) === null ? 0 /* Cancel */  : 2 /* Continue */ ;
        }
        // proto
        defineProperty(source, key, {
            configurable: true,
            set: set
        });
        return 2 /* Continue */ ;
    }
    // function on proto -> autoAction/flow
    if (source !== adm.target_ && typeof descriptor.value === "function") {
        var _this$options_2;
        if (isGenerator(descriptor.value)) {
            var _this$options_;
            var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
            return flowAnnotation.make_(adm, key, descriptor, source);
        }
        var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
        return actionAnnotation.make_(adm, key, descriptor, source);
    }
    // other -> observable
    // Copy props from proto as well, see test:
    // "decorate should work with Object.create"
    var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
        var _adm$proxy_;
        descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return observableAnnotation.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_5, _this$options_6;
    // getter -> computed
    if (descriptor.get) {
        return computed.extend_(adm, key, descriptor, proxyTrap);
    }
    // lone setter -> action setter
    if (descriptor.set) {
        // TODO make action applicable to setter and delegate to action.extend_
        return adm.defineProperty_(key, {
            configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
            set: createAction(key.toString(), descriptor.set)
        }, proxyTrap);
    }
    // other -> observable
    // if function respect autoBind option
    if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
        var _adm$proxy_2;
        descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }
    var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
    return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/ createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
    var _options$defaultDecor;
    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;
    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */ function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (isStringish(arg2)) {
        storeAnnotation(v, arg2, observableAnnotation);
        return;
    }
    // already observable - ignore
    if (isObservable(v)) {
        return v;
    }
    // plain object
    if (isPlainObject(v)) {
        return observable.object(v, arg2, arg3);
    }
    // Array
    if (Array.isArray(v)) {
        return observable.array(v, arg2);
    }
    // Map
    if (isES6Map(v)) {
        return observable.map(v, arg2);
    }
    // Set
    if (isES6Set(v)) {
        return observable.set(v, arg2);
    }
    // other object - ignore
    if (typeof v === "object" && v !== null) {
        return v;
    }
    // anything else
    return observable.box(v, arg2);
}
assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
    box: function box(value, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
        return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    },
    ref: /*#__PURE__*/ createDecoratorAnnotation(observableRefAnnotation),
    shallow: /*#__PURE__*/ createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /*#__PURE__*/ createDecoratorAnnotation(observableStructAnnotation)
};
// eslint-disable-next-line
var observable = /*#__PURE__*/ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/ createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */ var computed = function computed(arg1, arg2) {
    if (isStringish(arg2)) {
        // @computed
        return storeAnnotation(arg1, arg2, computedAnnotation);
    }
    if (isPlainObject(arg1)) {
        // @computed({ options })
        return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    }
    // computed(expr, options?)
    if (true) {
        if (!isFunction(arg1)) {
            die("First argument to `computed` should be an expression.");
        }
        if (isFunction(arg2)) {
            die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
        }
    }
    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || ""); /* for generated name */ 
    return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config, _getDescriptor;
// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/ getDescriptor(function() {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
// we can safely recycle this object
var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) {
        autoAction = false;
    }
    if (true) {
        if (!isFunction(fn)) {
            die("`action` can only be invoked on functions");
        }
        if (typeof actionName !== "string" || !actionName) {
            die("actions should have valid names, got: '" + actionName + "'");
        }
    }
    function res() {
        return executeAction(actionName, autoAction, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    if (isFunctionNameConfigurable) {
        tmpNameDescriptor.value = actionName;
        defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
    try {
        return fn.apply(scope, args);
    } catch (err) {
        runInfo.error_ = err;
        throw err;
    } finally{
        _endAction(runInfo);
    }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
    var notifySpy_ =  true && isSpyEnabled() && !!actionName;
    var startTime_ = 0;
    if ( true && notifySpy_) {
        startTime_ = Date.now();
        var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
        spyReportStart({
            type: ACTION,
            name: actionName,
            object: scope,
            arguments: flattenedArgs
        });
    }
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow
    if (runAsAction) {
        untrackedStart();
        prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
        runAsAction_: runAsAction,
        prevDerivation_: prevDerivation_,
        prevAllowStateChanges_: prevAllowStateChanges_,
        prevAllowStateReads_: prevAllowStateReads_,
        notifySpy_: notifySpy_,
        startTime_: startTime_,
        actionId_: nextActionId++,
        parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
        die(30);
    }
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) {
        untrackedEnd(runInfo.prevDerivation_);
    }
    if ( true && runInfo.notifySpy_) {
        spyReportEnd({
            time: Date.now() - runInfo.startTime_
        });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    try {
        return func();
    } finally{
        allowStateChangesEnd(prev);
    }
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/ function(_Atom) {
    _inheritsLoose(ObservableValue, _Atom);
    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
        var _this;
        if (name_ === void 0) {
            name_ =  true ? "ObservableValue@" + getNextId() : 0;
        }
        if (notifySpy === void 0) {
            notifySpy = true;
        }
        if (equals === void 0) {
            equals = comparer["default"];
        }
        _this = _Atom.call(this, name_) || this;
        _this.enhancer = void 0;
        _this.name_ = void 0;
        _this.equals = void 0;
        _this.hasUnreportedChange_ = false;
        _this.interceptors_ = void 0;
        _this.changeListeners_ = void 0;
        _this.value_ = void 0;
        _this.dehancer = void 0;
        _this.enhancer = enhancer;
        _this.name_ = name_;
        _this.equals = equals;
        _this.value_ = enhancer(value, undefined, name_);
        if ( true && notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({
                type: CREATE,
                object: _assertThisInitialized(_this),
                observableKind: "value",
                debugObjectName: _this.name_,
                newValue: "" + _this.value_
            });
        }
        return _this;
    }
    var _proto = ObservableValue.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    _proto.set = function set(newValue) {
        var oldValue = this.value_;
        newValue = this.prepareNewValue_(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if ( true && notifySpy) {
                spyReportStart({
                    type: UPDATE,
                    object: this,
                    observableKind: "value",
                    debugObjectName: this.name_,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue_(newValue);
            if ( true && notifySpy) {
                spyReportEnd();
            }
        }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: UPDATE,
                newValue: newValue
            });
            if (!change) {
                return globalState.UNCHANGED;
            }
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value_, this.name_);
        return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
        var oldValue = this.value_;
        this.value_ = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: UPDATE,
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    _proto.get = function get() {
        this.reportObserved();
        return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately) {
            listener({
                observableKind: "value",
                debugObjectName: this.name_,
                object: this,
                type: UPDATE,
                newValue: this.value_,
                oldValue: undefined
            });
        }
        return registerListener(this, listener);
    };
    _proto.raw = function raw() {
        // used by MST ot get undehanced value
        return this.value_;
    };
    _proto.toJSON = function toJSON() {
        return this.get();
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
        return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive] = function() {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/ createInstanceofPredicate("ObservableValue", ObservableValue);
var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */ _Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/ function() {
    // nodes we are looking at. Our value depends on these nodes
    // during tracking it's an array with new observed observers
    // to check for cycles
    // N.B: unminified as it is used by MST
    /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */ function ComputedValue(options) {
        this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
        this.observing_ = [];
        this.newObserving_ = null;
        this.isBeingObserved_ = false;
        this.isPendingUnobservation_ = false;
        this.observers_ = new Set();
        this.diffValue_ = 0;
        this.runId_ = 0;
        this.lastAccessedBy_ = 0;
        this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
        this.unboundDepsCount_ = 0;
        this.value_ = new CaughtException(null);
        this.name_ = void 0;
        this.triggeredBy_ = void 0;
        this.isComputing_ = false;
        this.isRunningSetter_ = false;
        this.derivation = void 0;
        this.setter_ = void 0;
        this.isTracing_ = TraceMode.NONE;
        this.scope_ = void 0;
        this.equals_ = void 0;
        this.requiresReaction_ = void 0;
        this.keepAlive_ = void 0;
        this.onBOL = void 0;
        this.onBUOL = void 0;
        if (!options.get) {
            die(31);
        }
        this.derivation = options.get;
        this.name_ = options.name || ( true ? "ComputedValue@" + getNextId() : 0);
        if (options.set) {
            this.setter_ = createAction( true ? this.name_ + "-setter" : 0, options.set);
        }
        this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
        this.scope_ = options.context;
        this.requiresReaction_ = options.requiresReaction;
        this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
        if (this.onBOL) {
            this.onBOL.forEach(function(listener) {
                return listener();
            });
        }
    };
    _proto.onBUO = function onBUO() {
        if (this.onBUOL) {
            this.onBUOL.forEach(function(listener) {
                return listener();
            });
        }
    };
    _proto.get = function get() {
        if (this.isComputing_) {
            die(32, this.name_, this.derivation);
        }
        if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
        this.observers_.size === 0 && !this.keepAlive_) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead_();
                startBatch(); // See perf test 'computed memoization'
                this.value_ = this.computeValue_(false);
                endBatch();
            }
        } else {
            reportObserved(this);
            if (shouldCompute(this)) {
                var prevTrackingContext = globalState.trackingContext;
                if (this.keepAlive_ && !prevTrackingContext) {
                    globalState.trackingContext = this;
                }
                if (this.trackAndCompute()) {
                    propagateChangeConfirmed(this);
                }
                globalState.trackingContext = prevTrackingContext;
            }
        }
        var result = this.value_;
        if (isCaughtException(result)) {
            throw result.cause;
        }
        return result;
    };
    _proto.set = function set(value) {
        if (this.setter_) {
            if (this.isRunningSetter_) {
                die(33, this.name_);
            }
            this.isRunningSetter_ = true;
            try {
                this.setter_.call(this.scope_, value);
            } finally{
                this.isRunningSetter_ = false;
            }
        } else {
            die(34, this.name_);
        }
    };
    _proto.trackAndCompute = function trackAndCompute() {
        // N.B: unminified as it is used by MST
        var oldValue = this.value_;
        var wasSuspended = /* see #1208 */ this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
        var newValue = this.computeValue_(true);
        var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
        if (changed) {
            this.value_ = newValue;
            if ( true && isSpyEnabled()) {
                spyReport({
                    observableKind: "computed",
                    debugObjectName: this.name_,
                    object: this.scope_,
                    type: "update",
                    oldValue: oldValue,
                    newValue: newValue
                });
            }
        }
        return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
        this.isComputing_ = true;
        // don't allow state changes during computation
        var prev = allowStateChangesStart(false);
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope_);
        } else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope_);
            } else {
                try {
                    res = this.derivation.call(this.scope_);
                } catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        allowStateChangesEnd(prev);
        this.isComputing_ = false;
        return res;
    };
    _proto.suspend_ = function suspend_() {
        if (!this.keepAlive_) {
            clearObserving(this);
            this.value_ = undefined; // don't hold on to computed value!
            if ( true && this.isTracing_ !== TraceMode.NONE) {
                console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
            }
        }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function() {
            // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    observableKind: "computed",
                    debugObjectName: _this.name_,
                    type: UPDATE,
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
        if (false) {}
        if (this.isTracing_ !== TraceMode.NONE) {
            console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
        }
        if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
        }
    };
    _proto.toString = function toString() {
        return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
        return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive$1] = function() {
        return this.valueOf();
    };
    return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause;
// Empty
};
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */ function shouldCompute(derivation) {
    switch(derivation.dependenciesState_){
        case IDerivationState_.UP_TO_DATE_:
            return false;
        case IDerivationState_.NOT_TRACKING_:
        case IDerivationState_.STALE_:
            return true;
        case IDerivationState_.POSSIBLY_STALE_:
            {
                // state propagation can occur outside of action/reactive context #2195
                var prevAllowStateReads = allowStateReadsStart(true);
                var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
                var obs = derivation.observing_, l = obs.length;
                for(var i = 0; i < l; i++){
                    var obj = obs[i];
                    if (isComputedValue(obj)) {
                        if (globalState.disableErrorBoundaries) {
                            obj.get();
                        } else {
                            try {
                                obj.get();
                            } catch (e) {
                                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                                untrackedEnd(prevUntracked);
                                allowStateReadsEnd(prevAllowStateReads);
                                return true;
                            }
                        }
                        // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                        // and `derivation` is an observer of `obj`
                        // invariantShouldCompute(derivation)
                        if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                }
                changeDependenciesStateTo0(derivation);
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return false;
            }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    if (false) {}
    var hasObservers = atom.observers_.size > 0;
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
        console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
    }
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable '" + observable.name_ + "' being read outside a reactive context.");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */ function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    } else {
        try {
            result = f.call(context);
        } catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false) {}
    if (derivation.observing_.length !== 0) {
        return;
    }
    if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
        console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */ function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount_;
    for(var i = 0; i < l; i++){
        var dep = observing[i];
        if (dep.diffValue_ === 0) {
            dep.diffValue_ = 1;
            if (i0 !== i) {
                observing[i0] = dep;
            }
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState_;
        }
    }
    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while(l--){
        var _dep = prevObserving[l];
        if (_dep.diffValue_ === 0) {
            removeObserver(_dep, derivation);
        }
        _dep.diffValue_ = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while(i0--){
        var _dep2 = observing[i0];
        if (_dep2.diffValue_ === 1) {
            _dep2.diffValue_ = 0;
            addObserver(_dep2, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
        derivation.dependenciesState_ = lowestNewObservingDerivationState;
        derivation.onBecomeStale_();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;
    while(i--){
        removeObserver(obs[i], derivation);
    }
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    } finally{
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */ function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        return;
    }
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;
    while(i--){
        obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
}
/**
 * These values will persist if global state is reset
 */ var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED",
    "useProxies"
];
var MobXGlobals = function MobXGlobals() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
    this.stateVersion = Number.MIN_SAFE_INTEGER;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/ function() {
    var global1 = /*#__PURE__*/ getGlobal();
    if (global1.__mobxInstanceCount > 0 && !global1.__mobxGlobals) {
        canMergeGlobalState = false;
    }
    if (global1.__mobxGlobals && global1.__mobxGlobals.version !== new MobXGlobals().version) {
        canMergeGlobalState = false;
    }
    if (!canMergeGlobalState) {
        // Because this is a IIFE we need to let isolateCalled a chance to change
        // so we run it after the event loop completed at least 1 iteration
        setTimeout(function() {
            if (!isolateCalled) {
                die(35);
            }
        }, 1);
        return new MobXGlobals();
    } else if (global1.__mobxGlobals) {
        global1.__mobxInstanceCount += 1;
        if (!global1.__mobxGlobals.UNCHANGED) {
            global1.__mobxGlobals.UNCHANGED = {};
        } // make merge backward compatible
        return global1.__mobxGlobals;
    } else {
        global1.__mobxInstanceCount = 1;
        return global1.__mobxGlobals = /*#__PURE__*/ new MobXGlobals();
    }
}();
function isolateGlobalState() {
    if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) {
        die(36);
    }
    isolateCalled = true;
    if (canMergeGlobalState) {
        var global1 = getGlobal();
        if (--global1.__mobxInstanceCount === 0) {
            global1.__mobxGlobals = undefined;
        }
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */ function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for(var key in defaultGlobals){
        if (persistentKeys.indexOf(key) === -1) {
            globalState[key] = defaultGlobals[key];
        }
    }
    globalState.allowStateChanges = !globalState.enforceActions;
}
function hasObservers(observable) {
    return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
    return observable.observers_;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) {
        observable.lowestObserverState_ = node.dependenciesState_;
    }
// invariantObservers(observable);
// invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);
    if (observable.observers_.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
// invariantObservers(observable);
// invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation_ === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation_ = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */ function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for(var i = 0; i < list.length; i++){
            var observable = list[i];
            observable.isPendingUnobservation_ = false;
            if (observable.observers_.size === 0) {
                if (observable.isBeingObserved_) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved_ = false;
                    observable.onBUO();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend_();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */ if (derivation.runId_ !== observable.lastAccessedBy_) {
            observable.lastAccessedBy_ = derivation.runId_;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
            if (!observable.isBeingObserved_ && globalState.trackingContext) {
                observable.isBeingObserved_ = true;
                observable.onBO();
            }
        }
        return observable.isBeingObserved_;
    } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */ // Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
        return;
    }
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            if ( true && d.isTracing_ !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale_();
        }
        d.dependenciesState_ = IDerivationState_.STALE_;
    });
// invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
        return;
    }
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
            d.dependenciesState_ = IDerivationState_.STALE_;
            if ( true && d.isTracing_ !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
        } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
        ) {
            observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
        }
    });
// invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
        return;
    }
    observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function(d) {
        if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
            d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
            d.onBecomeStale_();
        }
    });
// invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");
    if (derivation.isTracing_ === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + "\t".repeat(depth - 1) + tree.name);
    if (tree.dependencies) {
        tree.dependencies.forEach(function(child) {
            return printDepTree(child, lines, depth + 1);
        });
    }
}
var Reaction = /*#__PURE__*/ function() {
    // nodes we are looking at. Our value depends on these nodes
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
        if (name_ === void 0) {
            name_ =  true ? "Reaction@" + getNextId() : 0;
        }
        this.name_ = void 0;
        this.onInvalidate_ = void 0;
        this.errorHandler_ = void 0;
        this.requiresObservable_ = void 0;
        this.observing_ = [];
        this.newObserving_ = [];
        this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
        this.diffValue_ = 0;
        this.runId_ = 0;
        this.unboundDepsCount_ = 0;
        this.isDisposed_ = false;
        this.isScheduled_ = false;
        this.isTrackPending_ = false;
        this.isRunning_ = false;
        this.isTracing_ = TraceMode.NONE;
        this.name_ = name_;
        this.onInvalidate_ = onInvalidate_;
        this.errorHandler_ = errorHandler_;
        this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
        this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
        if (!this.isScheduled_) {
            this.isScheduled_ = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    _proto.isScheduled = function isScheduled() {
        return this.isScheduled_;
    };
    _proto.runReaction_ = function runReaction_() {
        if (!this.isDisposed_) {
            startBatch();
            this.isScheduled_ = false;
            var prev = globalState.trackingContext;
            globalState.trackingContext = this;
            if (shouldCompute(this)) {
                this.isTrackPending_ = true;
                try {
                    this.onInvalidate_();
                    if ( true && this.isTrackPending_ && isSpyEnabled()) {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name_,
                            type: "scheduled-reaction"
                        });
                    }
                } catch (e) {
                    this.reportExceptionInDerivation_(e);
                }
            }
            globalState.trackingContext = prev;
            endBatch();
        }
    };
    _proto.track = function track(fn) {
        if (this.isDisposed_) {
            return;
        // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if ( true && notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name_,
                type: "reaction"
            });
        }
        this.isRunning_ = true;
        var prevReaction = globalState.trackingContext; // reactions could create reactions...
        globalState.trackingContext = this;
        var result = trackDerivedFunction(this, fn, undefined);
        globalState.trackingContext = prevReaction;
        this.isRunning_ = false;
        this.isTrackPending_ = false;
        if (this.isDisposed_) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result)) {
            this.reportExceptionInDerivation_(result.cause);
        }
        if ( true && notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
        var _this = this;
        if (this.errorHandler_) {
            this.errorHandler_(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries) {
            throw error;
        }
        var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : 0;
        if (!globalState.suppressReactionErrors) {
            console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */ } else if (true) {
            console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
        } // prettier-ignore
        if ( true && isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name_,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function(f) {
            return f(error, _this);
        });
    };
    _proto.dispose = function dispose() {
        if (!this.isDisposed_) {
            this.isDisposed_ = true;
            if (!this.isRunning_) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    _proto.getDisposer_ = function getDisposer_() {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    _proto.toString = function toString() {
        return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
        if (enterBreakPoint === void 0) {
            enterBreakPoint = false;
        }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}();
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function() {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0) {
            globalState.globalReactionErrorHandlers.splice(idx, 1);
        }
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */ var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler(f) {
    return f();
};
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) {
        return;
    }
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while(allReactions.length > 0){
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : 0);
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for(var i = 0, l = remainingReactions.length; i < l; i++){
            remainingReactions[i].runReaction_();
        }
    }
    globalState.isRunningReactions = false;
}
var isReaction = /*#__PURE__*/ createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function reactionScheduler(f) {
        return fn(function() {
            return baseScheduler(f);
        });
    };
}
function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false) {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length) {
        return;
    }
    var listeners = globalState.spyListeners;
    for(var i = 0, l = listeners.length; i < l; i++){
        listeners[i](event);
    }
}
function spyReportStart(event) {
    if (false) {}
    var change = _extends({}, event, {
        spyReportStart: true
    });
    spyReport(change);
}
var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
};
function spyReportEnd(change) {
    if (false) {}
    if (change) {
        spyReport(_extends({}, change, {
            type: "report-end",
            spyReportEnd: true
        }));
    } else {
        spyReport(END_EVENT);
    }
}
function spy(listener) {
    if (false) {} else {
        globalState.spyListeners.push(listener);
        return once(function() {
            globalState.spyListeners = globalState.spyListeners.filter(function(l) {
                return l !== listener;
            });
        });
    }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/ createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/ createActionAnnotation(ACTION_BOUND, {
    bound: true
});
var autoActionAnnotation = /*#__PURE__*/ createActionAnnotation(AUTOACTION, {
    autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/ createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
});
function createActionFactory(autoAction) {
    var res = function action(arg1, arg2) {
        // action(fn() {})
        if (isFunction(arg1)) {
            return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
        }
        // action("name", fn() {})
        if (isFunction(arg2)) {
            return createAction(arg1, arg2, autoAction);
        }
        // @action
        if (isStringish(arg2)) {
            return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
        }
        // action("name") & @action("name")
        if (isStringish(arg1)) {
            return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
                name: arg1,
                autoAction: autoAction
            }));
        }
        if (true) {
            die("Invalid arguments for `action`");
        }
    };
    return res;
}
var action = /*#__PURE__*/ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/ createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
    return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */ function autorun(view, opts) {
    var _opts$name, _opts;
    if (opts === void 0) {
        opts = EMPTY_OBJECT;
    }
    if (true) {
        if (!isFunction(view)) {
            die("Autorun expects a function as first argument");
        }
        if (isAction(view)) {
            die("Autorun does not accept actions since actions are untrackable");
        }
    }
    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  true ? view.name || "Autorun@" + getNextId() : 0;
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function() {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    } else {
        var scheduler = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled = false;
        reaction = new Reaction(name, function() {
            if (!isScheduled) {
                isScheduled = true;
                scheduler(function() {
                    isScheduled = false;
                    if (!reaction.isDisposed_) {
                        reaction.track(reactionRunner);
                    }
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule_();
    return reaction.getDisposer_();
}
var run = function run(f) {
    return f();
};
function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
        return setTimeout(f, opts.delay);
    } : run;
}
function reaction(expression, effect, opts) {
    var _opts$name2;
    if (opts === void 0) {
        opts = EMPTY_OBJECT;
    }
    if (true) {
        if (!isFunction(expression) || !isFunction(effect)) {
            die("First and second argument to reaction should be functions");
        }
        if (!isPlainObject(opts)) {
            die("Third argument of reactions should be an object");
        }
    }
    var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  true ? "Reaction@" + getNextId() : 0;
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var oldValue;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
    var r = new Reaction(name, function() {
        if (firstTime || runSync) {
            reactionRunner();
        } else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false;
        if (r.isDisposed_) {
            return;
        }
        var changed = false;
        r.track(function() {
            var nextValue = allowStateChanges(false, function() {
                return expression(r);
            });
            changed = firstTime || !equals(value, nextValue);
            oldValue = value;
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately) {
            effectAction(value, oldValue, r);
        } else if (!firstTime && changed) {
            effectAction(value, oldValue, r);
        }
        firstTime = false;
    }
    r.schedule_();
    return r.getDisposer_();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function() {
        try {
            return baseFn.apply(this, arguments);
        } catch (e) {
            errorHandler.call(this, e);
        }
    };
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    } else {
        atom[listenersKey] = new Set([
            cb
        ]);
    }
    return function() {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners["delete"](cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}
var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed";
// const IF_AVAILABLE = "ifavailable"
function configure(options) {
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    var useProxies = options.useProxies, enforceActions = options.enforceActions;
    if (useProxies !== undefined) {
        globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
    }
    if (useProxies === "ifavailable") {
        globalState.verifyProxies = true;
    }
    if (enforceActions !== undefined) {
        var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
    }
    [
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "disableErrorBoundaries",
        "safeDescriptors"
    ].forEach(function(key) {
        if (key in options) {
            globalState[key] = !!options[key];
        }
    });
    globalState.allowStateReads = !globalState.observableRequiresReaction;
    if ( true && globalState.disableErrorBoundaries === true) {
        console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    }
    if (options.reactionScheduler) {
        setReactionScheduler(options.reactionScheduler);
    }
}
function extendObservable(target, properties, annotations, options) {
    if (true) {
        if (arguments.length > 4) {
            die("'extendObservable' expected 2-4 arguments");
        }
        if (typeof target !== "object") {
            die("'extendObservable' expects an object as first argument");
        }
        if (isObservableMap(target)) {
            die("'extendObservable' should not be used on maps, use map.merge instead");
        }
        if (!isPlainObject(properties)) {
            die("'extendObservable' only accepts plain objects as second argument");
        }
        if (isObservable(properties) || isObservable(annotations)) {
            die("Extending an object with another observable (object) is not supported");
        }
    }
    // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)
    var descriptors = getOwnPropertyDescriptors(properties);
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();
    try {
        ownKeys(descriptors).forEach(function(key) {
            adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
            !annotations ? true : key in annotations ? annotations[key] : true);
        });
    } finally{
        endBatch();
    }
    return target;
}
function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) {
        result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    }
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name_
    };
    if (hasObservers(node)) {
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    }
    return result;
}
function unique(list) {
    return Array.from(new Set(list));
}
var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/ Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/ createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/ createFlowAnnotation("flow.bound", {
    bound: true
});
var flow = /*#__PURE__*/ Object.assign(function flow(arg1, arg2) {
    // @flow
    if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, flowAnnotation);
    }
    // flow(fn)
    if ( true && arguments.length !== 1) {
        die("Flow expects single argument with generator function");
    }
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    var res = function res() {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function(resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (isFunction(ret == null ? void 0 : ret.then)) {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done) {
                    return resolve(ret.value);
                }
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
            try {
                if (pendingPromise) {
                    cancelPromise(pendingPromise);
                }
                // Finally block can return (or yield) stuff..
                var _res = gen["return"](undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(_res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            } catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
    res.isMobXFlow = true;
    return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
    if (isFunction(promise.cancel)) {
        promise.cancel();
    }
}
function flowResult(result) {
    return result; // just tricking TypeScript :)
}
function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    } else if (isObservableObject(thing)) {
        if ( true && !isStringish(propOrHandler)) {
            return die("InterceptReads can only be used with a specific property, not with an object in general");
        }
        target = getAdministration(thing, propOrHandler);
    } else if (true) {
        return die("Expected observable map, object or array as first array");
    }
    if ( true && target.dehancer !== undefined) {
        return die("An intercept reader was already established");
    }
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function() {
        target.dehancer = undefined;
    };
}
function intercept(thing, propOrHandler, handler) {
    if (isFunction(handler)) {
        return interceptProperty(thing, propOrHandler, handler);
    } else {
        return interceptInterceptable(thing, propOrHandler);
    }
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept_(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept_(handler);
}
function _isComputed(value, property) {
    if (property === undefined) {
        return isComputedValue(value);
    }
    if (isObservableObject(value) === false) {
        return false;
    }
    if (!value[$mobx].values_.has(property)) {
        return false;
    }
    var atom = getAtom(value, property);
    return isComputedValue(atom);
}
function isComputed(value) {
    if ( true && arguments.length > 1) {
        return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
    }
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if ( true && !isStringish(propName)) {
        return die("isComputed expected a property name as second argument");
    }
    return _isComputed(value, propName);
}
function _isObservable(value, property) {
    if (!value) {
        return false;
    }
    if (property !== undefined) {
        if ( true && (isObservableMap(value) || isObservableArray(value))) {
            return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        }
        if (isObservableObject(value)) {
            return value[$mobx].values_.has(property);
        }
        return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
    if ( true && arguments.length !== 1) {
        die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    }
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if ( true && !isStringish(propName)) {
        return die("expected a property name as second argument");
    }
    return _isObservable(value, propName);
}
function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].keys_();
    }
    if (isObservableMap(obj) || isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function(_, index) {
            return index;
        });
    }
    die(5);
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function(key) {
            return obj[key];
        });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function(key) {
            return obj.get(key);
        });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    die(6);
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function(key) {
            return [
                key,
                obj[key]
            ];
        });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function(key) {
            return [
                key,
                obj.get(key)
            ];
        });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function(key, index) {
            return [
                index,
                key
            ];
        });
    }
    die(7);
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var _values = key;
        try {
            for(var _key in _values){
                set(obj, _key, _values[_key]);
            }
        } finally{
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        obj[$mobx].set_(key, value);
    } else if (isObservableMap(obj)) {
        obj.set(key, value);
    } else if (isObservableSet(obj)) {
        obj.add(key);
    } else if (isObservableArray(obj)) {
        if (typeof key !== "number") {
            key = parseInt(key, 10);
        }
        if (key < 0) {
            die("Invalid index: '" + key + "'");
        }
        startBatch();
        if (key >= obj.length) {
            obj.length = key + 1;
        }
        obj[key] = value;
        endBatch();
    } else {
        die(8);
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].delete_(key);
    } else if (isObservableMap(obj)) {
        obj["delete"](key);
    } else if (isObservableSet(obj)) {
        obj["delete"](key);
    } else if (isObservableArray(obj)) {
        if (typeof key !== "number") {
            key = parseInt(key, 10);
        }
        obj.splice(key, 1);
    } else {
        die(9);
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        return obj[$mobx].has_(key);
    } else if (isObservableMap(obj)) {
        return obj.has(key);
    } else if (isObservableSet(obj)) {
        return obj.has(key);
    } else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    die(10);
}
function get(obj, key) {
    if (!has(obj, key)) {
        return undefined;
    }
    if (isObservableObject(obj)) {
        return obj[$mobx].get_(key);
    } else if (isObservableMap(obj)) {
        return obj.get(key);
    } else if (isObservableArray(obj)) {
        return obj[key];
    }
    die(11);
}
function apiDefineProperty(obj, key, descriptor) {
    if (isObservableObject(obj)) {
        return obj[$mobx].defineProperty_(key, descriptor);
    }
    die(39);
}
function apiOwnKeys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].ownKeys_();
    }
    die(38);
}
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (isFunction(cbOrFire)) {
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    } else {
        return observeObservable(thing, propOrCb, cbOrFire);
    }
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe_(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe_(listener, fireImmediately);
}
function cache(map, key, value) {
    map.set(key, value);
    return value;
}
function toJSHelper(source, __alreadySeen) {
    if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
        return source;
    }
    if (isObservableValue(source) || isComputedValue(source)) {
        return toJSHelper(source.get(), __alreadySeen);
    }
    if (__alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source)) {
        var res = cache(__alreadySeen, source, new Array(source.length));
        source.forEach(function(value, idx) {
            res[idx] = toJSHelper(value, __alreadySeen);
        });
        return res;
    }
    if (isObservableSet(source)) {
        var _res = cache(__alreadySeen, source, new Set());
        source.forEach(function(value) {
            _res.add(toJSHelper(value, __alreadySeen));
        });
        return _res;
    }
    if (isObservableMap(source)) {
        var _res2 = cache(__alreadySeen, source, new Map());
        source.forEach(function(value, key) {
            _res2.set(key, toJSHelper(value, __alreadySeen));
        });
        return _res2;
    } else {
        // must be observable object
        var _res3 = cache(__alreadySeen, source, {});
        apiOwnKeys(source).forEach(function(key) {
            if (objectPrototype.propertyIsEnumerable.call(source, key)) {
                _res3[key] = toJSHelper(source[key], __alreadySeen);
            }
        });
        return _res3;
    }
}
/**
 * Recursively converts an observable to it's non-observable native counterpart.
 * It does NOT recurse into non-observables, these are left as they are, even if they contain observables.
 * Computed and other non-enumerable properties are completely ignored.
 * Complex scenarios require custom solution, eg implementing `toJSON` or using `serializr` lib.
 */ function toJS(source, options) {
    if ( true && options) {
        die("toJS no longer supports options");
    }
    return toJSHelper(source, new Map());
}
function trace() {
    if (false) {}
    var enterBreakPoint = false;
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (typeof args[args.length - 1] === "boolean") {
        enterBreakPoint = args.pop();
    }
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing_ === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }
    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch(args.length){
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */ function transaction(action, thisArg) {
    if (thisArg === void 0) {
        thisArg = undefined;
    }
    startBatch();
    try {
        return action.apply(thisArg);
    } finally{
        endBatch();
    }
}
function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || arg1 && typeof arg1 === "object") {
        return whenPromise(predicate, arg1);
    }
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        var error = new Error("WHEN_TIMEOUT");
        timeoutHandle = setTimeout(function() {
            if (!disposer[$mobx].isDisposed_) {
                disposer();
                if (opts.onError) {
                    opts.onError(error);
                } else {
                    throw error;
                }
            }
        }, opts.timeout);
    }
    opts.name =  true ? opts.name || "When@" + getNextId() : 0;
    var effectAction = createAction( true ? opts.name + "-effect" : 0, effect);
    // eslint-disable-next-line
    var disposer = autorun(function(r) {
        // predicate should not change state
        var cond = allowStateChanges(false, predicate);
        if (cond) {
            r.dispose();
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    var _opts$signal;
    if ( true && opts && opts.onError) {
        return die("the options 'onError' and 'promise' cannot be combined");
    }
    if (opts != null && (_opts$signal = opts.signal) != null && _opts$signal.aborted) {
        return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
            cancel: function cancel() {
                return null;
            }
        });
    }
    var cancel;
    var abort;
    var res = new Promise(function(resolve, reject) {
        var _opts$signal2;
        var disposer = _when(predicate, resolve, _extends({}, opts, {
            onError: reject
        }));
        cancel = function cancel() {
            disposer();
            reject(new Error("WHEN_CANCELLED"));
        };
        abort = function abort() {
            disposer();
            reject(new Error("WHEN_ABORTED"));
        };
        opts == null ? void 0 : (_opts$signal2 = opts.signal) == null ? void 0 : _opts$signal2.addEventListener == null ? void 0 : _opts$signal2.addEventListener("abort", abort);
    })["finally"](function() {
        var _opts$signal3;
        return opts == null ? void 0 : (_opts$signal3 = opts.signal) == null ? void 0 : _opts$signal3.removeEventListener == null ? void 0 : _opts$signal3.removeEventListener("abort", abort);
    });
    res.cancel = cancel;
    return res;
}
function getAdm(target) {
    return target[$mobx];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function has(target, name) {
        if ( true && globalState.trackingDerivation) {
            warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
        }
        return getAdm(target).has_(name);
    },
    get: function get(target, name) {
        return getAdm(target).get_(name);
    },
    set: function set(target, name, value) {
        var _getAdm$set_;
        if (!isStringish(name)) {
            return false;
        }
        if ( true && !getAdm(target).values_.has(name)) {
            warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
        }
        // null (intercepted) -> true (success)
        return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
        var _getAdm$delete_;
        if (true) {
            warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
        }
        if (!isStringish(name)) {
            return false;
        }
        // null (intercepted) -> true (success)
        return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty(target, name, descriptor) {
        var _getAdm$definePropert;
        if (true) {
            warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
        }
        // null (intercepted) -> true (success)
        return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys(target) {
        if ( true && globalState.trackingDerivation) {
            warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
        }
        return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
        die(13);
    }
};
function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;
    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function() {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1) {
            interceptors.splice(idx, 1);
        }
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = [].concat(interceptable.interceptors_ || []);
        for(var i = 0, l = interceptors.length; i < l; i++){
            change = interceptors[i](change);
            if (change && !change.type) {
                die(14);
            }
            if (!change) {
                break;
            }
        }
        return change;
    } finally{
        untrackedEnd(prevU);
    }
}
function hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function() {
        var idx = listeners.indexOf(handler);
        if (idx !== -1) {
            listeners.splice(idx, 1);
        }
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) {
        return;
    }
    listeners = listeners.slice();
    for(var i = 0, l = listeners.length; i < l; i++){
        listeners[i](change);
    }
    untrackedEnd(prevU);
}
function makeObservable(target, annotations, options) {
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();
    try {
        var _annotations;
        if ( true && annotations && target[storedAnnotationsSymbol]) {
            die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
        }
        // Default to decorators
        (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
        // Annotate
        ownKeys(annotations).forEach(function(key) {
            return adm.make_(key, annotations[key]);
        });
    } finally{
        endBatch();
    }
    return target;
}
// proto[keysSymbol] = new Set<PropertyKey>()
var keysSymbol = /*#__PURE__*/ Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
    if (true) {
        if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) {
            die("'makeAutoObservable' can only be used for classes that don't have a superclass");
        }
        if (isObservableObject(target)) {
            die("makeAutoObservable can only be used on objects not already made observable");
        }
    }
    // Optimization: avoid visiting protos
    // Assumes that annotation.make_/.extend_ works the same for plain objects
    if (isPlainObject(target)) {
        return extendObservable(target, target, overrides, options);
    }
    var adm = asObservableObject(target, options)[$mobx];
    // Optimization: cache keys on proto
    // Assumes makeAutoObservable can be called only once per object and can't be used in subclass
    if (!target[keysSymbol]) {
        var proto = Object.getPrototypeOf(target);
        var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
        keys["delete"]("constructor");
        keys["delete"]($mobx);
        addHiddenProp(proto, keysSymbol, keys);
    }
    startBatch();
    try {
        target[keysSymbol].forEach(function(key) {
            return adm.make_(key, // must pass "undefined" for { key: undefined }
            !overrides ? true : key in overrides ? overrides[key] : true);
        });
    } finally{
        endBatch();
    }
    return target;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function get(target, name) {
        var adm = target[$mobx];
        if (name === $mobx) {
            return adm;
        }
        if (name === "length") {
            return adm.getArrayLength_();
        }
        if (typeof name === "string" && !isNaN(name)) {
            return adm.get_(parseInt(name));
        }
        if (hasProp(arrayExtensions, name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function set(target, name, value) {
        var adm = target[$mobx];
        if (name === "length") {
            adm.setArrayLength_(value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        } else {
            // numeric string
            adm.set_(parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function preventExtensions() {
        die(15);
    }
};
var ObservableArrayAdministration = /*#__PURE__*/ function() {
    // this is the prop that gets proxied, so can't replace it!
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
        if (name === void 0) {
            name =  true ? "ObservableArray@" + getNextId() : 0;
        }
        this.owned_ = void 0;
        this.legacyMode_ = void 0;
        this.atom_ = void 0;
        this.values_ = [];
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.enhancer_ = void 0;
        this.dehancer = void 0;
        this.proxy_ = void 0;
        this.lastKnownLength_ = 0;
        this.owned_ = owned_;
        this.legacyMode_ = legacyMode_;
        this.atom_ = new Atom(name);
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV,  true ? name + "[..]" : 0);
        };
    }
    var _proto = ObservableArrayAdministration.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
        if (this.dehancer !== undefined && values.length > 0) {
            return values.map(this.dehancer);
        }
        return values;
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        if (fireImmediately === void 0) {
            fireImmediately = false;
        }
        if (fireImmediately) {
            listener({
                observableKind: "array",
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: "splice",
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
        this.atom_.reportObserved();
        return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
        if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
            die("Out of range: " + newLength);
        }
        var currentLength = this.values_.length;
        if (newLength === currentLength) {
            return;
        } else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for(var i = 0; i < newLength - currentLength; i++){
                newItems[i] = undefined;
            } // No Array.fill everywhere...
            this.spliceWithArray_(currentLength, 0, newItems);
        } else {
            this.spliceWithArray_(newLength, currentLength - newLength);
        }
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
        if (oldLength !== this.lastKnownLength_) {
            die(16);
        }
        this.lastKnownLength_ += delta;
        if (this.legacyMode_ && delta > 0) {
            reserveArrayBuffer(oldLength + delta + 1);
        }
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom_);
        var length = this.values_.length;
        if (index === undefined) {
            index = 0;
        } else if (index > length) {
            index = length;
        } else if (index < 0) {
            index = Math.max(0, length + index);
        }
        if (arguments.length === 1) {
            deleteCount = length - index;
        } else if (deleteCount === undefined || deleteCount === null) {
            deleteCount = 0;
        } else {
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        }
        if (newItems === undefined) {
            newItems = EMPTY_ARRAY;
        }
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy_,
                type: SPLICE,
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change) {
                return EMPTY_ARRAY;
            }
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
            return _this.enhancer_(v, undefined);
        });
        if (this.legacyMode_ || "development" !== "production") {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0) {
            this.notifyArraySplice_(index, newItems, res);
        }
        return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            var _this$values_;
            return (_this$values_ = this.values_).splice.apply(_this$values_, [
                index,
                deleteCount
            ].concat(newItems));
        } else {
            // The items removed by the splice
            var res = this.values_.slice(index, index + deleteCount);
            // The items that that should remain at the end of the array
            var oldItems = this.values_.slice(index + deleteCount);
            // New length is the previous length + addition count - deletion count
            this.values_.length += newItems.length - deleteCount;
            for(var i = 0; i < newItems.length; i++){
                this.values_[index + i] = newItems[i];
            }
            for(var _i = 0; _i < oldItems.length; _i++){
                this.values_[index + newItems.length + _i] = oldItems[_i];
            }
            return res;
        }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
        var notifySpy = !this.owned_ && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            type: UPDATE,
            debugObjectName: this.atom_.name_,
            index: index,
            newValue: newValue,
            oldValue: oldValue
        } : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if ( true && notifySpy) {
            spyReportStart(change);
        }
        this.atom_.reportChanged();
        if (notify) {
            notifyListeners(this, change);
        }
        if ( true && notifySpy) {
            spyReportEnd();
        }
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
        var notifySpy = !this.owned_ && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: SPLICE,
            index: index,
            removed: removed,
            added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if ( true && notifySpy) {
            spyReportStart(change);
        }
        this.atom_.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify) {
            notifyListeners(this, change);
        }
        if ( true && notifySpy) {
            spyReportEnd();
        }
    };
    _proto.get_ = function get_(index) {
        if (this.legacyMode_ && index >= this.values_.length) {
            console.warn( true ? "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : 0);
            return undefined;
        }
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
    };
    _proto.set_ = function set_(index, newValue) {
        var values = this.values_;
        if (this.legacyMode_ && index > values.length) {
            // out of bounds
            die(17, index, values.length);
        }
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(this.atom_);
            var oldValue = values[index];
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    type: UPDATE,
                    object: this.proxy_,
                    index: index,
                    newValue: newValue
                });
                if (!change) {
                    return;
                }
                newValue = change.newValue;
            }
            newValue = this.enhancer_(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                this.notifyArrayChildUpdate_(index, newValue, oldValue);
            }
        } else {
            // For out of bound index, we don't create an actual sparse array,
            // but rather fill the holes with undefined (same as setArrayLength_).
            // This could be considered a bug.
            var newItems = new Array(index + 1 - values.length);
            for(var i = 0; i < newItems.length - 1; i++){
                newItems[i] = undefined;
            } // No Array.fill everywhere...
            newItems[newItems.length - 1] = newValue;
            this.spliceWithArray_(values.length, 0, newItems);
        }
    };
    return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
        name =  true ? "ObservableArray@" + getNextId() : 0;
    }
    if (owned === void 0) {
        owned = false;
    }
    assertProxies();
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray_(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
// eslint-disable-next-line
var arrayExtensions = {
    clear: function clear() {
        return this.splice(0);
    },
    replace: function replace(newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
        return this.slice();
    },
    /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */ splice: function splice(index, deleteCount) {
        for(var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            newItems[_key - 2] = arguments[_key];
        }
        var adm = this[$mobx];
        switch(arguments.length){
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray_(index);
            case 2:
                return adm.spliceWithArray_(index, deleteCount);
        }
        return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
        return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
        var adm = this[$mobx];
        for(var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            items[_key2] = arguments[_key2];
        }
        adm.spliceWithArray_(adm.values_.length, 0, items);
        return adm.values_.length;
    },
    pop: function pop() {
        return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
        return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
        var adm = this[$mobx];
        for(var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
            items[_key3] = arguments[_key3];
        }
        adm.spliceWithArray_(0, 0, items);
        return adm.values_.length;
    },
    reverse: function reverse() {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        if (globalState.trackingDerivation) {
            die(37, "reverse");
        }
        this.replace(this.slice().reverse());
        return this;
    },
    sort: function sort() {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (globalState.trackingDerivation) {
            die(37, "sort");
        }
        var copy = this.slice();
        copy.sort.apply(copy, arguments);
        this.replace(copy);
        return this;
    },
    remove: function remove(value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues_(adm.values_).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */ addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
// map
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
// reduce
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
        arrayExtensions[funcName] = funcFactory(funcName);
    }
}
// Report and delegate to dehanced array
function simpleFunc(funcName) {
    return function() {
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
}
// Make sure callbacks recieve correct array arg #2326
function mapLikeFunc(funcName) {
    return function(callback, thisArg) {
        var _this2 = this;
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        return dehancedValues[funcName](function(element, index) {
            return callback.call(thisArg, element, index, _this2);
        });
    };
}
// Make sure callbacks recieve correct array arg #2326
function reduceLikeFunc(funcName) {
    return function() {
        var _this3 = this;
        var adm = this[$mobx];
        adm.atom_.reportObserved();
        var dehancedValues = adm.dehanceValues_(adm.values_);
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function(accumulator, currentValue, index) {
            return callback(accumulator, currentValue, index, _this3);
        };
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
}
var isObservableArrayAdministration = /*#__PURE__*/ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/ function() {
    // hasMap, not hashMap >-).
    function ObservableMap(initialData, enhancer_, name_) {
        var _this = this;
        if (enhancer_ === void 0) {
            enhancer_ = deepEnhancer;
        }
        if (name_ === void 0) {
            name_ =  true ? "ObservableMap@" + getNextId() : 0;
        }
        this.enhancer_ = void 0;
        this.name_ = void 0;
        this[$mobx] = ObservableMapMarker;
        this.data_ = void 0;
        this.hasMap_ = void 0;
        this.keysAtom_ = void 0;
        this.interceptors_ = void 0;
        this.changeListeners_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = enhancer_;
        this.name_ = name_;
        if (!isFunction(Map)) {
            die(18);
        }
        this.keysAtom_ = createAtom( true ? this.name_ + ".keys()" : 0);
        this.data_ = new Map();
        this.hasMap_ = new Map();
        allowStateChanges(true, function() {
            _this.merge(initialData);
        });
    }
    var _proto = ObservableMap.prototype;
    _proto.has_ = function has_(key) {
        return this.data_.has(key);
    };
    _proto.has = function has(key) {
        var _this2 = this;
        if (!globalState.trackingDerivation) {
            return this.has_(key);
        }
        var entry = this.hasMap_.get(key);
        if (!entry) {
            var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
            this.hasMap_.set(key, newEntry);
            onBecomeUnobserved(newEntry, function() {
                return _this2.hasMap_["delete"](key);
            });
        }
        return entry.get();
    };
    _proto.set = function set(key, value) {
        var hasKey = this.has_(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? UPDATE : ADD,
                object: this,
                newValue: value,
                name: key
            });
            if (!change) {
                return this;
            }
            value = change.newValue;
        }
        if (hasKey) {
            this.updateValue_(key, value);
        } else {
            this.addValue_(key, value);
        }
        return this;
    };
    _proto["delete"] = function _delete(key) {
        var _this3 = this;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: DELETE,
                object: this,
                name: key
            });
            if (!change) {
                return false;
            }
        }
        if (this.has_(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: DELETE,
                object: this,
                oldValue: this.data_.get(key).value_,
                name: key
            } : null;
            if ( true && notifySpy) {
                spyReportStart(_change);
            } // TODO fix type
            transaction(function() {
                var _this3$hasMap_$get;
                _this3.keysAtom_.reportChanged();
                (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(false);
                var observable = _this3.data_.get(key);
                observable.setNewValue_(undefined);
                _this3.data_["delete"](key);
            });
            if (notify) {
                notifyListeners(this, _change);
            }
            if ( true && notifySpy) {
                spyReportEnd();
            }
            return true;
        }
        return false;
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
        var observable = this.data_.get(key);
        newValue = observable.prepareNewValue_(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: UPDATE,
                object: this,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            if ( true && notifySpy) {
                spyReportStart(change);
            } // TODO fix type
            observable.setNewValue_(newValue);
            if (notify) {
                notifyListeners(this, change);
            }
            if ( true && notifySpy) {
                spyReportEnd();
            }
        }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
        var _this4 = this;
        checkIfStateModificationsAreAllowed(this.keysAtom_);
        transaction(function() {
            var _this4$hasMap_$get;
            var observable = new ObservableValue(newValue, _this4.enhancer_,  true ? _this4.name_ + "." + stringifyKey(key) : 0, false);
            _this4.data_.set(key, observable);
            newValue = observable.value_; // value might have been changed
            (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null ? void 0 : _this4$hasMap_$get.setNewValue_(true);
            _this4.keysAtom_.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: ADD,
            object: this,
            name: key,
            newValue: newValue
        } : null;
        if ( true && notifySpy) {
            spyReportStart(change);
        } // TODO fix type
        if (notify) {
            notifyListeners(this, change);
        }
        if ( true && notifySpy) {
            spyReportEnd();
        }
    };
    _proto.get = function get(key) {
        if (this.has(key)) {
            return this.dehanceValue_(this.data_.get(key).get());
        }
        return this.dehanceValue_(undefined);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    _proto.keys = function keys() {
        this.keysAtom_.reportObserved();
        return this.data_.keys();
    };
    _proto.values = function values() {
        var self1 = this;
        var keys = this.keys();
        return makeIterable({
            next: function next() {
                var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
                return {
                    done: done,
                    value: done ? undefined : self1.get(value)
                };
            }
        });
    };
    _proto.entries = function entries() {
        var self1 = this;
        var keys = this.keys();
        return makeIterable({
            next: function next() {
                var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
                return {
                    done: done,
                    value: done ? undefined : [
                        value,
                        self1.get(value)
                    ]
                };
            }
        });
    };
    _proto[_Symbol$iterator] = function() {
        return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
        for(var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;){
            var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
            callback.call(thisArg, value, key, this);
        }
    };
    _proto.merge = function merge(other) {
        var _this5 = this;
        if (isObservableMap(other)) {
            other = new Map(other);
        }
        transaction(function() {
            if (isPlainObject(other)) {
                getPlainObjectKeys(other).forEach(function(key) {
                    return _this5.set(key, other[key]);
                });
            } else if (Array.isArray(other)) {
                other.forEach(function(_ref) {
                    var key = _ref[0], value = _ref[1];
                    return _this5.set(key, value);
                });
            } else if (isES6Map(other)) {
                if (other.constructor !== Map) {
                    die(19, other);
                }
                other.forEach(function(value, key) {
                    return _this5.set(key, value);
                });
            } else if (other !== null && other !== undefined) {
                die(20, other);
            }
        });
        return this;
    };
    _proto.clear = function clear() {
        var _this6 = this;
        transaction(function() {
            untracked(function() {
                for(var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;){
                    var key = _step2.value;
                    _this6["delete"](key);
                }
            });
        });
    };
    _proto.replace = function replace(values) {
        var _this7 = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function() {
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            for(var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;){
                var key = _step3.value;
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this7["delete"](key);
                    // Was the key removed?
                    if (deleted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    } else {
                        // Delete prevented by interceptor
                        var value = _this7.data_.get(key);
                        orderedData.set(key, value);
                    }
                }
            }
            // Merge entries
            for(var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;){
                var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
                // We will want to know whether a new key is added
                var keyExisted = _this7.data_.has(_key);
                // Add or update value
                _this7.set(_key, _value);
                // The addition could have been prevent by interceptor
                if (_this7.data_.has(_key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var _value2 = _this7.data_.get(_key);
                    orderedData.set(_key, _value2);
                    // Was a new key added?
                    if (!keyExisted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this7.data_.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this7.keysAtom_.reportChanged();
                } else {
                    var iter1 = _this7.data_.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while(!next1.done){
                        if (next1.value !== next2.value) {
                            _this7.keysAtom_.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this7.data_ = orderedData;
        });
        return this;
    };
    _proto.toString = function toString() {
        return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */ _proto.observe_ = function observe_(listener, fireImmediately) {
        if ( true && fireImmediately === true) {
            die("`observe` doesn't support fireImmediately=true in combination with maps.");
        }
        return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _createClass(ObservableMap, [
        {
            key: "size",
            get: function get() {
                this.keysAtom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: _Symbol$toStringTag,
            get: function get() {
                return "Map";
            }
        }
    ]);
    return ObservableMap;
}();
// eslint-disable-next-line
var isObservableMap = /*#__PURE__*/ createInstanceofPredicate("ObservableMap", ObservableMap);
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    } else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for(var key in dataStructure){
            map.set(key, dataStructure[key]);
        }
        return map;
    } else {
        return die(21, dataStructure);
    }
}
var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/ function() {
    function ObservableSet(initialData, enhancer, name_) {
        if (enhancer === void 0) {
            enhancer = deepEnhancer;
        }
        if (name_ === void 0) {
            name_ =  true ? "ObservableSet@" + getNextId() : 0;
        }
        this.name_ = void 0;
        this[$mobx] = ObservableSetMarker;
        this.data_ = new Set();
        this.atom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.dehancer = void 0;
        this.enhancer_ = void 0;
        this.name_ = name_;
        if (!isFunction(Set)) {
            die(22);
        }
        this.atom_ = createAtom(this.name_);
        this.enhancer_ = function(newV, oldV) {
            return enhancer(newV, oldV, name_);
        };
        if (initialData) {
            this.replace(initialData);
        }
    }
    var _proto = ObservableSet.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    _proto.clear = function clear() {
        var _this = this;
        transaction(function() {
            untracked(function() {
                for(var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;){
                    var value = _step.value;
                    _this["delete"](value);
                }
            });
        });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
        for(var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;){
            var value = _step2.value;
            callbackFn.call(thisArg, value, value, this);
        }
    };
    _proto.add = function add(value) {
        var _this2 = this;
        checkIfStateModificationsAreAllowed(this.atom_);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: ADD,
                object: this,
                newValue: value
            });
            if (!change) {
                return this;
            }
        // ideally, value = change.value would be done here, so that values can be
        // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function() {
                _this2.data_.add(_this2.enhancer_(value, undefined));
                _this2.atom_.reportChanged();
            });
            var notifySpy =  true && isSpyEnabled();
            var notify = hasListeners(this);
            var _change = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: ADD,
                object: this,
                newValue: value
            } : null;
            if (notifySpy && "development" !== "production") {
                spyReportStart(_change);
            }
            if (notify) {
                notifyListeners(this, _change);
            }
            if (notifySpy && "development" !== "production") {
                spyReportEnd();
            }
        }
        return this;
    };
    _proto["delete"] = function _delete(value) {
        var _this3 = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: DELETE,
                object: this,
                oldValue: value
            });
            if (!change) {
                return false;
            }
        }
        if (this.has(value)) {
            var notifySpy =  true && isSpyEnabled();
            var notify = hasListeners(this);
            var _change2 = notify || notifySpy ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: DELETE,
                object: this,
                oldValue: value
            } : null;
            if (notifySpy && "development" !== "production") {
                spyReportStart(_change2);
            }
            transaction(function() {
                _this3.atom_.reportChanged();
                _this3.data_["delete"](value);
            });
            if (notify) {
                notifyListeners(this, _change2);
            }
            if (notifySpy && "development" !== "production") {
                spyReportEnd();
            }
            return true;
        }
        return false;
    };
    _proto.has = function has(value) {
        this.atom_.reportObserved();
        return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function next() {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length ? {
                    value: [
                        keys[index],
                        values[index]
                    ],
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.keys = function keys() {
        return this.values();
    };
    _proto.values = function values() {
        this.atom_.reportObserved();
        var self1 = this;
        var nextIndex = 0;
        var observableValues = Array.from(this.data_.values());
        return makeIterable({
            next: function next() {
                return nextIndex < observableValues.length ? {
                    value: self1.dehanceValue_(observableValues[nextIndex++]),
                    done: false
                } : {
                    done: true
                };
            }
        });
    };
    _proto.replace = function replace(other) {
        var _this4 = this;
        if (isObservableSet(other)) {
            other = new Set(other);
        }
        transaction(function() {
            if (Array.isArray(other)) {
                _this4.clear();
                other.forEach(function(value) {
                    return _this4.add(value);
                });
            } else if (isES6Set(other)) {
                _this4.clear();
                other.forEach(function(value) {
                    return _this4.add(value);
                });
            } else if (other !== null && other !== undefined) {
                die("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
        // ... 'fireImmediately' could also be true?
        if ( true && fireImmediately === true) {
            die("`observe` doesn't support fireImmediately=true in combination with sets.");
        }
        return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON() {
        return Array.from(this);
    };
    _proto.toString = function toString() {
        return "[object ObservableSet]";
    };
    _proto[_Symbol$iterator$1] = function() {
        return this.values();
    };
    _createClass(ObservableSet, [
        {
            key: "size",
            get: function get() {
                this.atom_.reportObserved();
                return this.data_.size;
            }
        },
        {
            key: _Symbol$toStringTag$1,
            get: function get() {
                return "Set";
            }
        }
    ]);
    return ObservableSet;
}();
// eslint-disable-next-line
var isObservableSet = /*#__PURE__*/ createInstanceofPredicate("ObservableSet", ObservableSet);
var descriptorCache = /*#__PURE__*/ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/ function() {
    function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
    defaultAnnotation_) {
        if (values_ === void 0) {
            values_ = new Map();
        }
        if (defaultAnnotation_ === void 0) {
            defaultAnnotation_ = autoAnnotation;
        }
        this.target_ = void 0;
        this.values_ = void 0;
        this.name_ = void 0;
        this.defaultAnnotation_ = void 0;
        this.keysAtom_ = void 0;
        this.changeListeners_ = void 0;
        this.interceptors_ = void 0;
        this.proxy_ = void 0;
        this.isPlainObject_ = void 0;
        this.appliedAnnotations_ = void 0;
        this.pendingKeys_ = void 0;
        this.target_ = target_;
        this.values_ = values_;
        this.name_ = name_;
        this.defaultAnnotation_ = defaultAnnotation_;
        this.keysAtom_ = new Atom( true ? this.name_ + ".keys" : 0);
        // Optimization: we use this frequently
        this.isPlainObject_ = isPlainObject(this.target_);
        if ( true && !isAnnotation(this.defaultAnnotation_)) {
            die("defaultAnnotation must be valid annotation");
        }
        if (true) {
            // Prepare structure for tracking which fields were already annotated
            this.appliedAnnotations_ = {};
        }
    }
    var _proto = ObservableObjectAdministration.prototype;
    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
        return this.values_.get(key).get();
    };
    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
        var observable = this.values_.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return true;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: UPDATE,
                object: this.proxy_ || this.target_,
                name: key,
                newValue: newValue
            });
            if (!change) {
                return null;
            }
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue_(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy =  true && isSpyEnabled();
            var _change = notify || notifySpy ? {
                type: UPDATE,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                oldValue: observable.value_,
                name: key,
                newValue: newValue
            } : null;
            if ( true && notifySpy) {
                spyReportStart(_change);
            }
            observable.setNewValue_(newValue);
            if (notify) {
                notifyListeners(this, _change);
            }
            if ( true && notifySpy) {
                spyReportEnd();
            }
        }
        return true;
    };
    _proto.get_ = function get_(key) {
        if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
            // Key doesn't exist yet, subscribe for it in case it's added later
            this.has_(key);
        }
        return this.target_[key];
    };
    _proto.set_ = function set_(key, value, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        // Don't use .has(key) - we care about own
        if (hasProp(this.target_, key)) {
            // Existing prop
            if (this.values_.has(key)) {
                // Observable (can be intercepted)
                return this.setObservablePropValue_(key, value);
            } else if (proxyTrap) {
                // Non-observable - proxy
                return Reflect.set(this.target_, key, value);
            } else {
                // Non-observable
                this.target_[key] = value;
                return true;
            }
        } else {
            // New prop
            return this.extend_(key, {
                value: value,
                enumerable: true,
                writable: true,
                configurable: true
            }, this.defaultAnnotation_, proxyTrap);
        }
    };
    _proto.has_ = function has_(key) {
        if (!globalState.trackingDerivation) {
            // Skip key subscription outside derivation
            return key in this.target_;
        }
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var entry = this.pendingKeys_.get(key);
        if (!entry) {
            entry = new ObservableValue(key in this.target_, referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : 0, false);
            this.pendingKeys_.set(key, entry);
        }
        return entry.get();
    };
    _proto.make_ = function make_(key, annotation) {
        if (annotation === true) {
            annotation = this.defaultAnnotation_;
        }
        if (annotation === false) {
            return;
        }
        assertAnnotable(this, annotation, key);
        if (!(key in this.target_)) {
            var _this$target_$storedA;
            // Throw on missing key, except for decorators:
            // Decorator annotations are collected from whole prototype chain.
            // When called from super() some props may not exist yet.
            // However we don't have to worry about missing prop,
            // because the decorator must have been applied to something.
            if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
                return; // will be annotated by subclass constructor
            } else {
                die(1, annotation.annotationType_, this.name_ + "." + key.toString());
            }
        }
        var source = this.target_;
        while(source && source !== objectPrototype){
            var descriptor = getDescriptor(source, key);
            if (descriptor) {
                var outcome = annotation.make_(this, key, descriptor, source);
                if (outcome === 0 /* Cancel */ ) {
                    return;
                }
                if (outcome === 1 /* Break */ ) {
                    break;
                }
            }
            source = Object.getPrototypeOf(source);
        }
        recordAnnotationApplied(this, annotation, key);
    };
    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        if (annotation === true) {
            annotation = this.defaultAnnotation_;
        }
        if (annotation === false) {
            return this.defineProperty_(key, descriptor, proxyTrap);
        }
        assertAnnotable(this, annotation, key);
        var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
        if (outcome) {
            recordAnnotationApplied(this, annotation, key);
        }
        return outcome;
    };
    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
                // Failure or intercepted
                return deleteOutcome;
            }
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: descriptor.value
                });
                if (!change) {
                    return null;
                }
                var newValue = change.newValue;
                if (descriptor.value !== newValue) {
                    descriptor = _extends({}, descriptor, {
                        value: newValue
                    });
                }
            }
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                    return false;
                }
            } else {
                defineProperty(this.target_, key, descriptor);
            }
            // Notify
            this.notifyPropertyAddition_(key, descriptor.value);
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
                // Failure or intercepted
                return deleteOutcome;
            }
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: value
                });
                if (!change) {
                    return null;
                }
                value = change.newValue;
            }
            var cachedDescriptor = getCachedObservablePropDescriptor(key);
            var descriptor = {
                configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
                enumerable: true,
                get: cachedDescriptor.get,
                set: cachedDescriptor.set
            };
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                    return false;
                }
            } else {
                defineProperty(this.target_, key, descriptor);
            }
            var observable = new ObservableValue(value, enhancer,  true ? this.name_ + "." + key.toString() : 0, false);
            this.values_.set(key, observable);
            // Notify (value possibly changed by ObservableValue)
            this.notifyPropertyAddition_(key, observable.value_);
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        try {
            startBatch();
            // Delete
            var deleteOutcome = this.delete_(key);
            if (!deleteOutcome) {
                // Failure or intercepted
                return deleteOutcome;
            }
            // ADD interceptor
            if (hasInterceptors(this)) {
                var change = interceptChange(this, {
                    object: this.proxy_ || this.target_,
                    name: key,
                    type: ADD,
                    newValue: undefined
                });
                if (!change) {
                    return null;
                }
            }
            options.name || (options.name =  true ? this.name_ + "." + key.toString() : 0);
            options.context = this.proxy_ || this.target_;
            var cachedDescriptor = getCachedObservablePropDescriptor(key);
            var descriptor = {
                configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
                enumerable: false,
                get: cachedDescriptor.get,
                set: cachedDescriptor.set
            };
            // Define
            if (proxyTrap) {
                if (!Reflect.defineProperty(this.target_, key, descriptor)) {
                    return false;
                }
            } else {
                defineProperty(this.target_, key, descriptor);
            }
            this.values_.set(key, new ComputedValue(options));
            // Notify
            this.notifyPropertyAddition_(key, undefined);
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.delete_ = function delete_(key, proxyTrap) {
        if (proxyTrap === void 0) {
            proxyTrap = false;
        }
        // No such prop
        if (!hasProp(this.target_, key)) {
            return true;
        }
        // Intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy_ || this.target_,
                name: key,
                type: REMOVE
            });
            // Cancelled
            if (!change) {
                return null;
            }
        }
        // Delete
        try {
            var _this$pendingKeys_, _this$pendingKeys_$ge;
            startBatch();
            var notify = hasListeners(this);
            var notifySpy =  true && isSpyEnabled();
            var observable = this.values_.get(key);
            // Value needed for spies/listeners
            var value = undefined;
            // Optimization: don't pull the value unless we will need it
            if (!observable && (notify || notifySpy)) {
                var _getDescriptor;
                value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
            }
            // delete prop (do first, may fail)
            if (proxyTrap) {
                if (!Reflect.deleteProperty(this.target_, key)) {
                    return false;
                }
            } else {
                delete this.target_[key];
            }
            // Allow re-annotating this field
            if (true) {
                delete this.appliedAnnotations_[key];
            }
            // Clear observable
            if (observable) {
                this.values_["delete"](key);
                // for computed, value is undefined
                if (observable instanceof ObservableValue) {
                    value = observable.value_;
                }
                // Notify: autorun(() => obj[key]), see #1796
                propagateChanged(observable);
            }
            // Notify "keys/entries/values" observers
            this.keysAtom_.reportChanged();
            // Notify "has" observers
            // "in" as it may still exist in proto
            (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
            // Notify spies/listeners
            if (notify || notifySpy) {
                var _change2 = {
                    type: REMOVE,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: value,
                    name: key
                };
                if ( true && notifySpy) {
                    spyReportStart(_change2);
                }
                if (notify) {
                    notifyListeners(this, _change2);
                }
                if ( true && notifySpy) {
                    spyReportEnd();
                }
            }
        } finally{
            endBatch();
        }
        return true;
    };
    _proto.observe_ = function observe_(callback, fireImmediately) {
        if ( true && fireImmediately === true) {
            die("`observe` doesn't support the fire immediately property for observable objects.");
        }
        return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
        return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
        var _this$pendingKeys_2, _this$pendingKeys_2$g;
        var notify = hasListeners(this);
        var notifySpy =  true && isSpyEnabled();
        if (notify || notifySpy) {
            var change = notify || notifySpy ? {
                type: ADD,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: key,
                newValue: value
            } : null;
            if ( true && notifySpy) {
                spyReportStart(change);
            }
            if (notify) {
                notifyListeners(this, change);
            }
            if ( true && notifySpy) {
                spyReportEnd();
            }
        }
        (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
        // Notify "keys/entries/values" observers
        this.keysAtom_.reportChanged();
    };
    _proto.ownKeys_ = function ownKeys_() {
        this.keysAtom_.reportObserved();
        return ownKeys(this.target_);
    };
    _proto.keys_ = function keys_() {
        // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
        // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
        // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
        // We choose to over-report in Object.keys(object), because:
        // - typically it's used with simple data objects
        // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
        this.keysAtom_.reportObserved();
        return Object.keys(this.target_);
    };
    return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
    var _options$name;
    if ( true && options && isObservableObject(target)) {
        die("Options can't be provided for already observable objects.");
    }
    if (hasProp(target, $mobx)) {
        if ( true && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
            die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
        }
        return target;
    }
    if ( true && !Object.isExtensible(target)) {
        die("Cannot make the designated object observable; it is not extensible");
    }
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : 0;
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
}
var isObservableObjectAdministration = /*#__PURE__*/ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
        get: function get() {
            return this[$mobx].getObservablePropValue_(key);
        },
        set: function set(value) {
            return this[$mobx].setObservablePropValue_(key, value);
        }
    });
}
function isObservableObject(thing) {
    if (isObject(thing)) {
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}
function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;
    if (true) {
        adm.appliedAnnotations_[key] = annotation;
    }
    // Remove applied decorator annotation so we don't try to apply it again in subclass constructor
    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}
function assertAnnotable(adm, annotation, key) {
    // Valid annotation
    if ( true && !isAnnotation(annotation)) {
        die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    }
    /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */ // Not annotated
    if ( true && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
        var fieldName = adm.name_ + "." + key.toString();
        var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
        var requestedAnnotationType = annotation.annotationType_;
        die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overridden by subclass.");
    }
}
// Bug in safari 9.* (or iOS 9 safari mobile). See #364
var ENTRY_0 = /*#__PURE__*/ createArrayEntryDescriptor(0);
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */ var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = function StubArray() {};
function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== undefined) {
        ctor.prototype.__proto__ = proto;
    } else {
        ctor.prototype = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6
var LegacyObservableArray = /*#__PURE__*/ function(_StubArray, _Symbol$toStringTag, _Symbol$iterator) {
    _inheritsLoose(LegacyObservableArray, _StubArray);
    function LegacyObservableArray(initialValues, enhancer, name, owned) {
        var _this;
        if (name === void 0) {
            name =  true ? "ObservableArray@" + getNextId() : 0;
        }
        if (owned === void 0) {
            owned = false;
        }
        _this = _StubArray.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
        adm.proxy_ = _assertThisInitialized(_this);
        addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
        if (initialValues && initialValues.length) {
            var prev = allowStateChangesStart(true);
            // @ts-ignore
            _this.spliceWithArray(0, 0, initialValues);
            allowStateChangesEnd(prev);
        }
        {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(_assertThisInitialized(_this), "0", ENTRY_0);
        }
        return _this;
    }
    var _proto = LegacyObservableArray.prototype;
    _proto.concat = function concat() {
        this[$mobx].atom_.reportObserved();
        for(var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++){
            arrays[_key] = arguments[_key];
        }
        return Array.prototype.concat.apply(this.slice(), //@ts-ignore
        arrays.map(function(a) {
            return isObservableArray(a) ? a.slice() : a;
        }));
    };
    _proto[_Symbol$iterator] = function() {
        var self1 = this;
        var nextIndex = 0;
        return makeIterable({
            next: function next() {
                return nextIndex < self1.length ? {
                    value: self1[nextIndex++],
                    done: false
                } : {
                    done: true,
                    value: undefined
                };
            }
        });
    };
    _createClass(LegacyObservableArray, [
        {
            key: "length",
            get: function get() {
                return this[$mobx].getArrayLength_();
            },
            set: function set(newLength) {
                this[$mobx].setArrayLength_(newLength);
            }
        },
        {
            key: _Symbol$toStringTag,
            get: function get() {
                return "Array";
            }
        }
    ]);
    return LegacyObservableArray;
}(StubArray, Symbol.toStringTag, Symbol.iterator);
Object.entries(arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat") {
        addHiddenProp(LegacyObservableArray.prototype, prop, fn);
    }
});
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: true,
        get: function get() {
            return this[$mobx].get_(index);
        },
        set: function set(value) {
            this[$mobx].set_(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
        for(var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++){
            createArrayBufferItem(index);
        }
        OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined) {
                die(23);
            }
            return thing[$mobx].atom_;
        }
        if (isObservableSet(thing)) {
            return thing.atom_;
        }
        if (isObservableMap(thing)) {
            if (property === undefined) {
                return thing.keysAtom_;
            }
            var observable = thing.data_.get(property) || thing.hasMap_.get(property);
            if (!observable) {
                die(25, property, getDebugName(thing));
            }
            return observable;
        }
        if (isObservableObject(thing)) {
            if (!property) {
                return die(26);
            }
            var _observable = thing[$mobx].values_.get(property);
            if (!_observable) {
                die(27, property, getDebugName(thing));
            }
            return _observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    } else if (isFunction(thing)) {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    die(28);
}
function getAdministration(thing, property) {
    if (!thing) {
        die(29);
    }
    if (property !== undefined) {
        return getAdministration(getAtom(thing, property));
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
    }
    if (isObservableMap(thing) || isObservableSet(thing)) {
        return thing;
    }
    if (thing[$mobx]) {
        return thing[$mobx];
    }
    die(24, thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined) {
        named = getAtom(thing, property);
    } else if (isAction(thing)) {
        return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
        named = getAdministration(thing);
    } else {
        // valid for arrays as well
        named = getAtom(thing);
    }
    return named.name_;
}
var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) {
        depth = -1;
    }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) {
        return false;
    }
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) {
        return b !== b;
    }
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object") {
        return false;
    }
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) {
        return false;
    }
    switch(className){
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) {
                return +b !== +b;
            }
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object") {
            return false;
        }
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    } else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while(length--){
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) {
            return bStack[length] === b;
        }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) {
            return false;
        }
        // Deep compare the contents, ignoring non-numeric properties.
        while(length--){
            if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
                return false;
            }
        }
    } else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length) {
            return false;
        }
        while(length--){
            // Deep compare each member
            key = keys[length];
            if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
                return false;
            }
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a)) {
        return a.slice();
    }
    if (isES6Map(a) || isObservableMap(a)) {
        return Array.from(a.entries());
    }
    if (isES6Set(a) || isObservableSet(a)) {
        return Array.from(a.entries());
    }
    return a;
}
function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}
function isAnnotation(thing) {
    return(// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_));
}
/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get a global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */ [
    "Symbol",
    "Map",
    "Set"
].forEach(function(m) {
    var g = getGlobal();
    if (typeof g[m] === "undefined") {
        die("MobX requires global '" + m + "' to be available or polyfilled");
    }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js ***!
  \*****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| import \"core-js/modules/es.error.cause.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| /* eslint-disable no-unused-vars -- required for functions `.length` */ var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.reflect.to-string-tag.js\";\n| var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js ***!
  \************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| import \"core-js/modules/web.self.js\";\n| var $ = require('../internals/export');");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/.pnpm/mobx@6.9.0/node_modules/mobx/dist/mobx.esm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUksQ0FBQyxDQUFDeWIsT0FBTyxFQUFFLENBQUM7O0lBRWxDLE9BQU96YixDQUFDO0FBQ1o7U0N0TGdCb2pCLFlBQVksQ0FBSVosUUFBcUI7SUFDakRBLFFBQVEsQ0FBQ3JsQixNQUFNLENBQUNxbEIsUUFBUSxDQUFDLEdBQUdtRSxPQUFPO0lBQ25DLE9BQU9uRSxRQUFlO0FBQzFCO0FBRUEsU0FBU21FLE9BQU87SUFDWixPQUFPLElBQUk7QUFDZjtTQzZCZ0JqQyxZQUFZLENBQUN0dEIsS0FBVTtJQUNuQztJQUVJQSxLQUFLLFlBQVlxQixNQUFNLElBQ3ZCLE9BQU9yQixLQUFLLENBQUN3RyxlQUFlLEtBQUssUUFBUSxJQUN6QzNELFVBQVUsQ0FBQzdDLEtBQUssQ0FBQ2lMLEtBQUssQ0FBQyxJQUN2QnBJLFVBQVUsQ0FBQzdDLEtBQUssQ0FBQ2tMLE9BQU87QUFFaEM7QUM1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkM7SUFBQyxRQUFRO0lBQUUsS0FBSztJQUFFLEtBQUs7Q0FBQyxDQUFDckYsT0FBTyxDQUFDLFNBQUEycEIsQ0FBQztJQUMvQixJQUFJQyxDQUFDLEdBQUcxdUIsU0FBUyxFQUFFO0lBQ25CLElBQUksT0FBTzB1QixDQUFDLENBQUNELENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtRQUM3Qm52QixHQUFHLDRCQUEwQm12QixDQUFDLHFDQUFrQzs7QUFFeEUsQ0FBQyxDQUFDO0FBMEhGLElBQUksT0FBT0UsNkJBQTZCLEtBQUssUUFBUSxFQUFFOztJQUVuREEsNkJBQTZCLENBQUNDLFVBQVUsQ0FBQztRQUNyQy9RLEdBQUcsRUFBSEEsR0FBRztRQUNIZ1IsTUFBTSxFQUFFO1lBQ0o1QixZQUFZLEVBQVpBO1NBQ0g7UUFDRHJuQixLQUFLLEVBQUxBO0tBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3V0aWxzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jb3JlL2F0b20udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3V0aWxzL2NvbXBhcmVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy90eXBlcy9tb2RpZmllcnMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL292ZXJyaWRlYW5ub3RhdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdHlwZXMvYWN0aW9uYW5ub3RhdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdHlwZXMvZmxvd2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL2NvbXB1dGVkYW5ub3RhdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdHlwZXMvb2JzZXJ2YWJsZWFubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL2F1dG9hbm5vdGF0aW9uLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvb2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL2NvbXB1dGVkLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jb3JlL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdHlwZXMvb2JzZXJ2YWJsZXZhbHVlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jb3JlL2NvbXB1dGVkdmFsdWUudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2NvcmUvZGVyaXZhdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvY29yZS9nbG9iYWxzdGF0ZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvY29yZS9vYnNlcnZhYmxlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jb3JlL3JlYWN0aW9uLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jb3JlL3NweS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL2F1dG9ydW4udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS9iZWNvbWUtb2JzZXJ2ZWQudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS9jb25maWd1cmUudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS9leHRlbmRvYnNlcnZhYmxlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvZXh0cmFzLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvZmxvdy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL2ludGVyY2VwdC1yZWFkLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvaW50ZXJjZXB0LnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvaXNjb21wdXRlZC50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL2lzb2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL29iamVjdC1hcGkudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS9vYnNlcnZlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvdG9qcy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL3RyYWNlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2FwaS93aGVuLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy90eXBlcy9keW5hbWljb2JqZWN0LnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy90eXBlcy9pbnRlcmNlcHQtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL2xpc3Rlbi11dGlscy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvYXBpL21ha2VPYnNlcnZhYmxlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy90eXBlcy9vYnNlcnZhYmxlYXJyYXkudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL29ic2VydmFibGVtYXAudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL29ic2VydmFibGVzZXQudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL29ic2VydmFibGVvYmplY3QudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3R5cGVzL2xlZ2FjeW9ic2VydmFibGVhcnJheS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdHlwZXMvdHlwZS11dGlscy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdXRpbHMvZXEudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3V0aWxzL2l0ZXJhYmxlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hcGkvYW5ub3RhdGlvbi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvbW9ieC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuaWNlRXJyb3JzID0ge1xuICAgIDA6IGBJbnZhbGlkIHZhbHVlIGZvciBjb25maWd1cmF0aW9uICdlbmZvcmNlQWN0aW9ucycsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdgLFxuICAgIDEoYW5ub3RhdGlvblR5cGUsIGtleTogUHJvcGVydHlLZXkpIHtcbiAgICAgICAgcmV0dXJuIGBDYW5ub3QgYXBwbHkgJyR7YW5ub3RhdGlvblR5cGV9JyB0byAnJHtrZXkudG9TdHJpbmcoKX0nOiBGaWVsZCBub3QgZm91bmQuYFxuICAgIH0sXG4gICAgLypcbiAgICAyKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGBpbnZhbGlkIGRlY29yYXRvciBmb3IgJyR7cHJvcC50b1N0cmluZygpfSdgXG4gICAgfSxcbiAgICAzKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGBDYW5ub3QgZGVjb3JhdGUgJyR7cHJvcC50b1N0cmluZygpfSc6IGFjdGlvbiBjYW4gb25seSBiZSB1c2VkIG9uIHByb3BlcnRpZXMgd2l0aCBhIGZ1bmN0aW9uIHZhbHVlLmBcbiAgICB9LFxuICAgIDQocHJvcCkge1xuICAgICAgICByZXR1cm4gYENhbm5vdCBkZWNvcmF0ZSAnJHtwcm9wLnRvU3RyaW5nKCl9JzogY29tcHV0ZWQgY2FuIG9ubHkgYmUgdXNlZCBvbiBnZXR0ZXIgcHJvcGVydGllcy5gXG4gICAgfSxcbiAgICAqL1xuICAgIDU6IFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiLFxuICAgIDY6IFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIsXG4gICAgNzogXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gICAgODogXCInc2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgICA5OiBcIidyZW1vdmUoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAgIDEwOiBcIidoYXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAgIDExOiBcIidnZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAgIDEyOiBgSW52YWxpZCBhbm5vdGF0aW9uYCxcbiAgICAxMzogYER5bmFtaWMgb2JzZXJ2YWJsZSBvYmplY3RzIGNhbm5vdCBiZSBmcm96ZW4uIElmIHlvdSdyZSBwYXNzaW5nIG9ic2VydmFibGVzIHRvIDNyZCBwYXJ0eSBjb21wb25lbnQvZnVuY3Rpb24gdGhhdCBjYWxscyBPYmplY3QuZnJlZXplLCBwYXNzIGNvcHkgaW5zdGVhZDogdG9KUyhvYnNlcnZhYmxlKWAsXG4gICAgMTQ6IFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIixcbiAgICAxNTogYE9ic2VydmFibGUgYXJyYXlzIGNhbm5vdCBiZSBmcm96ZW4uIElmIHlvdSdyZSBwYXNzaW5nIG9ic2VydmFibGVzIHRvIDNyZCBwYXJ0eSBjb21wb25lbnQvZnVuY3Rpb24gdGhhdCBjYWxscyBPYmplY3QuZnJlZXplLCBwYXNzIGNvcHkgaW5zdGVhZDogdG9KUyhvYnNlcnZhYmxlKWAsXG4gICAgMTY6IGBNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuYCxcbiAgICAxNyhpbmRleCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBgW21vYnguYXJyYXldIEluZGV4IG91dCBvZiBib3VuZHMsICR7aW5kZXh9IGlzIGxhcmdlciB0aGFuICR7bGVuZ3RofWBcbiAgICB9LFxuICAgIDE4OiBcIm1vYngubWFwIHJlcXVpcmVzIE1hcCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvbWFwLmpzXCIsXG4gICAgMTkob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGluaXRpYWxpemUgZnJvbSBjbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIE1hcDogXCIgKyBvdGhlci5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgfSxcbiAgICAyMChvdGhlcikge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyXG4gICAgfSxcbiAgICAyMShkYXRhU3RydWN0dXJlKSB7XG4gICAgICAgIHJldHVybiBgQ2Fubm90IGNvbnZlcnQgdG8gbWFwIGZyb20gJyR7ZGF0YVN0cnVjdHVyZX0nYFxuICAgIH0sXG4gICAgMjI6IFwibW9ieC5zZXQgcmVxdWlyZXMgU2V0IHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9zZXQuanNcIixcbiAgICAyMzogXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIsXG4gICAgMjQodGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmdcbiAgICB9LFxuICAgIDI1KHByb3BlcnR5LCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBgdGhlIGVudHJ5ICcke3Byb3BlcnR5fScgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9ic2VydmFibGUgbWFwICcke25hbWV9J2BcbiAgICB9LFxuICAgIDI2OiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIixcbiAgICAyNyhwcm9wZXJ0eSwgbmFtZSkge1xuICAgICAgICByZXR1cm4gYG5vIG9ic2VydmFibGUgcHJvcGVydHkgJyR7cHJvcGVydHkudG9TdHJpbmcoKX0nIGZvdW5kIG9uIHRoZSBvYnNlcnZhYmxlIG9iamVjdCAnJHtuYW1lfSdgXG4gICAgfSxcbiAgICAyOCh0aGluZykge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3Qgb2J0YWluIGF0b20gZnJvbSBcIiArIHRoaW5nXG4gICAgfSxcbiAgICAyOTogXCJFeHBlY3Rpbmcgc29tZSBvYmplY3RcIixcbiAgICAzMDogXCJpbnZhbGlkIGFjdGlvbiBzdGFjay4gZGlkIHlvdSBmb3JnZXQgdG8gZmluaXNoIGFuIGFjdGlvbj9cIixcbiAgICAzMTogXCJtaXNzaW5nIG9wdGlvbiBmb3IgY29tcHV0ZWQ6IGdldFwiLFxuICAgIDMyKG5hbWUsIGRlcml2YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGBDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiAke25hbWV9OiAke2Rlcml2YXRpb259YFxuICAgIH0sXG4gICAgMzMobmFtZSkge1xuICAgICAgICByZXR1cm4gYFRoZSBzZXR0ZXIgb2YgY29tcHV0ZWQgdmFsdWUgJyR7bmFtZX0nIGlzIHRyeWluZyB0byB1cGRhdGUgaXRzZWxmLiBEaWQgeW91IGludGVuZCB0byB1cGRhdGUgYW4gX29ic2VydmFibGVfIHZhbHVlLCBpbnN0ZWFkIG9mIHRoZSBjb21wdXRlZCBwcm9wZXJ0eT9gXG4gICAgfSxcbiAgICAzNChuYW1lKSB7XG4gICAgICAgIHJldHVybiBgW0NvbXB1dGVkVmFsdWUgJyR7bmFtZX0nXSBJdCBpcyBub3QgcG9zc2libGUgdG8gYXNzaWduIGEgbmV3IHZhbHVlIHRvIGEgY29tcHV0ZWQgdmFsdWUuYFxuICAgIH0sXG4gICAgMzU6IFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIsXG4gICAgMzY6IFwiaXNvbGF0ZUdsb2JhbFN0YXRlIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIE1vYlggaXMgcnVubmluZyBhbnkgcmVhY3Rpb25zXCIsXG4gICAgMzcobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBgW21vYnhdIFxcYG9ic2VydmFibGVBcnJheS4ke21ldGhvZH0oKVxcYCBtdXRhdGVzIHRoZSBhcnJheSBpbi1wbGFjZSwgd2hpY2ggaXMgbm90IGFsbG93ZWQgaW5zaWRlIGEgZGVyaXZhdGlvbi4gVXNlIFxcYGFycmF5LnNsaWNlKCkuJHttZXRob2R9KClcXGAgaW5zdGVhZGBcbiAgICB9LFxuICAgIDM4OiBcIidvd25LZXlzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzXCIsXG4gICAgMzk6IFwiJ2RlZmluZVByb3BlcnR5KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzXCJcbn0gYXMgY29uc3RcblxuY29uc3QgZXJyb3JzOiB0eXBlb2YgbmljZUVycm9ycyA9IF9fREVWX18gPyBuaWNlRXJyb3JzIDogKHt9IGFzIGFueSlcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZShlcnJvcjogc3RyaW5nIHwga2V5b2YgdHlwZW9mIGVycm9ycywgLi4uYXJnczogYW55W10pOiBuZXZlciB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgbGV0IGU6IGFueSA9IHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IGVycm9yIDogZXJyb3JzW2Vycm9yXVxuICAgICAgICBpZiAodHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIikgZSA9IGUuYXBwbHkobnVsbCwgYXJncyBhcyBhbnkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgW01vYlhdICR7ZX1gKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgPyBgW01vYlhdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfSR7XG4gICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA/IFwiIFwiICsgYXJncy5tYXAoU3RyaW5nKS5qb2luKFwiLFwiKSA6IFwiXCJcbiAgICAgICAgICAgICAgfS4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2Jsb2IvbWFpbi9wYWNrYWdlcy9tb2J4L3NyYy9lcnJvcnMudHNgXG4gICAgICAgICAgICA6IGBbTW9iWF0gJHtlcnJvcn1gXG4gICAgKVxufVxuIiwiZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueVxuZGVjbGFyZSBjb25zdCBzZWxmOiBhbnlcblxuY29uc3QgbW9ja0dsb2JhbCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxUaGlzXG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbFxuICAgIH1cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGZcbiAgICB9XG4gICAgcmV0dXJuIG1vY2tHbG9iYWxcbn1cbiIsImltcG9ydCB7IGdsb2JhbFN0YXRlLCBkaWUgfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vLyBXZSBzaG9ydGVuIGFueXRoaW5nIHVzZWQgPiA1IHRpbWVzXG5leHBvcnQgY29uc3QgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuZXhwb3J0IGNvbnN0IGdldERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG5leHBvcnQgY29uc3QgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbmV4cG9ydCBjb25zdCBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlXG5cbmV4cG9ydCBjb25zdCBFTVBUWV9BUlJBWSA9IFtdXG5PYmplY3QuZnJlZXplKEVNUFRZX0FSUkFZKVxuXG5leHBvcnQgY29uc3QgRU1QVFlfT0JKRUNUID0ge31cbk9iamVjdC5mcmVlemUoRU1QVFlfT0JKRUNUKVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYSB7XG4gICAgKCk6IHZvaWRcbiAgICBuYW1lPzogc3RyaW5nXG59XG5cbmNvbnN0IGhhc1Byb3h5ID0gdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiXG5jb25zdCBwbGFpbk9iamVjdFN0cmluZyA9IE9iamVjdC50b1N0cmluZygpXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQcm94aWVzKCkge1xuICAgIGlmICghaGFzUHJveHkpIHtcbiAgICAgICAgZGllKFxuICAgICAgICAgICAgX19ERVZfX1xuICAgICAgICAgICAgICAgID8gXCJgUHJveHlgIG9iamVjdHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuIFBsZWFzZSBjb25maWd1cmUgTW9iWCB0byBlbmFibGUgYSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbi5gXCJcbiAgICAgICAgICAgICAgICA6IFwiUHJveHkgbm90IGF2YWlsYWJsZVwiXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KG1zZzogc3RyaW5nKSB7XG4gICAgaWYgKF9fREVWX18gJiYgZ2xvYmFsU3RhdGUudmVyaWZ5UHJveGllcykge1xuICAgICAgICBkaWUoXG4gICAgICAgICAgICBcIk1vYlggaXMgY3VycmVudGx5IGNvbmZpZ3VyZWQgdG8gYmUgYWJsZSB0byBydW4gaW4gRVM1IG1vZGUsIGJ1dCBpbiBFUzUgTW9iWCB3b24ndCBiZSBhYmxlIHRvIFwiICtcbiAgICAgICAgICAgICAgICBtc2dcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZS5tb2J4R3VpZFxufVxuXG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgaW52b2tlZCBhdCBtb3N0IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZ1bmM6IExhbWJkYSk6IExhbWJkYSB7XG4gICAgbGV0IGludm9rZWQgPSBmYWxzZVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnZva2VkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpbnZva2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gKGZ1bmMgYXMgYW55KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuOiBhbnkpOiBmbiBpcyBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZTogYW55KTogdmFsdWUgaXMgc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ2lzaCh2YWx1ZTogYW55KTogdmFsdWUgaXMgc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sIHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIHZhbHVlXG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBPYmplY3Qge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWU6IGFueSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgICBpZiAocHJvdG8gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBwcm90b0NvbnN0cnVjdG9yID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3JcbiAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2YgcHJvdG9Db25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHByb3RvQ29uc3RydWN0b3IudG9TdHJpbmcoKSA9PT0gcGxhaW5PYmplY3RTdHJpbmdcbiAgICApXG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzg2NTE3MFxuZXhwb3J0IGZ1bmN0aW9uIGlzR2VuZXJhdG9yKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBvYmo/LmNvbnN0cnVjdG9yXG4gICAgaWYgKCFjb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKFxuICAgICAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IGNvbnN0cnVjdG9yLm5hbWUgfHxcbiAgICAgICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZVxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0OiBhbnksIHByb3BOYW1lOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhpZGRlbkZpbmFsUHJvcChvYmplY3Q6IGFueSwgcHJvcE5hbWU6IFByb3BlcnR5S2V5LCB2YWx1ZTogYW55KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGU8VD4oXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHRoZUNsYXNzOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUXG4pOiAoeDogYW55KSA9PiB4IGlzIFQge1xuICAgIGNvbnN0IHByb3BOYW1lID0gXCJpc01vYlhcIiArIG5hbWVcbiAgICB0aGVDbGFzcy5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZVxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoeCkgJiYgeFtwcm9wTmFtZV0gPT09IHRydWVcbiAgICB9IGFzIGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFUzZNYXAodGhpbmc6IGFueSk6IHRoaW5nIGlzIE1hcDxhbnksIGFueT4ge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFUzZTZXQodGhpbmc6IGFueSk6IHRoaW5nIGlzIFNldDxhbnk+IHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiBTZXRcbn1cblxuY29uc3QgaGFzR2V0T3duUHJvcGVydHlTeW1ib2xzID0gdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09IFwidW5kZWZpbmVkXCJcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmb2xsb3dpbmc6IG93biBlbnVtZXJhYmxlIGtleXMgYW5kIHN5bWJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFpbk9iamVjdEtleXMob2JqZWN0OiBhbnkpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KVxuICAgIC8vIE5vdCBzdXBwb3J0ZWQgaW4gSUUsIHNvIHRoZXJlIGFyZSBub3QgZ29pbmcgdG8gYmUgc3ltYm9sIHByb3BzIGFueXdheS4uLlxuICAgIGlmICghaGFzR2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHJldHVybiBrZXlzXG4gICAgfVxuICAgIGNvbnN0IHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdClcbiAgICBpZiAoIXN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBrZXlzXG4gICAgfVxuICAgIHJldHVybiBbLi4ua2V5cywgLi4uc3ltYm9scy5maWx0ZXIocyA9PiBvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHMpKV1cbn1cblxuLy8gRnJvbSBJbW1lciB1dGlsc1xuLy8gUmV0dXJucyBhbGwgb3duIGtleXMsIGluY2x1ZGluZyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9saWNcbmV4cG9ydCBjb25zdCBvd25LZXlzOiAodGFyZ2V0OiBhbnkpID0+IEFycmF5PHN0cmluZyB8IHN5bWJvbD4gPVxuICAgIHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5c1xuICAgICAgICA/IFJlZmxlY3Qub3duS2V5c1xuICAgICAgICA6IGhhc0dldE93blByb3BlcnR5U3ltYm9sc1xuICAgICAgICA/IG9iaiA9PiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikgYXMgYW55KVxuICAgICAgICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlLZXkoa2V5OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBrZXlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgcmV0dXJuIGtleS50b1N0cmluZygpXG4gICAgfVxuICAgIHJldHVybiBuZXcgU3RyaW5nKGtleSkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBcIlwiICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJvcCh0YXJnZXQ6IE9iamVjdCwgcHJvcDogUHJvcGVydHlLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqZWN0UHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcm9wKVxufVxuXG4vLyBGcm9tIEltbWVyIHV0aWxzXG5leHBvcnQgY29uc3QgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldDogYW55KSB7XG4gICAgICAgIC8vIFBvbHlmaWxsIG5lZWRlZCBmb3IgSGVybWVzIGFuZCBJRSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9oZXJtZXMvaXNzdWVzLzI3NFxuICAgICAgICBjb25zdCByZXM6IGFueSA9IHt9XG4gICAgICAgIC8vIE5vdGU6IHdpdGhvdXQgcG9seWZpbGwgZm9yIG93bktleXMsIHN5bWJvbHMgd29uJ3QgYmUgcGlja2VkIHVwXG4gICAgICAgIG93bktleXModGFyZ2V0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXNba2V5XSA9IGdldERlc2NyaXB0b3IodGFyZ2V0LCBrZXkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uLCBhZGRIaWRkZW5Qcm9wLCBBbm5vdGF0aW9uc01hcCwgaGFzUHJvcCwgZGllLCBpc092ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGNvbnN0IHN0b3JlZEFubm90YXRpb25zU3ltYm9sID0gU3ltYm9sKFwibW9ieC1zdG9yZWQtYW5ub3RhdGlvbnNcIilcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBhY3RzIGFzXG4gKiAtIGRlY29yYXRvclxuICogLSBhbm5vdGF0aW9uIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhbm5vdGF0aW9uOiBBbm5vdGF0aW9uKTogUHJvcGVydHlEZWNvcmF0b3IgJiBBbm5vdGF0aW9uIHtcbiAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgICAgICBzdG9yZUFubm90YXRpb24odGFyZ2V0LCBwcm9wZXJ0eSwgYW5ub3RhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVjb3JhdG9yLCBhbm5vdGF0aW9uKVxufVxuXG4vKipcbiAqIFN0b3JlcyBhbm5vdGF0aW9uIHRvIHByb3RvdHlwZSxcbiAqIHNvIGl0IGNhbiBiZSBpbnNwZWN0ZWQgbGF0ZXIgYnkgYG1ha2VPYnNlcnZhYmxlYCBjYWxsZWQgZnJvbSBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVBbm5vdGF0aW9uKHByb3RvdHlwZTogYW55LCBrZXk6IFByb3BlcnR5S2V5LCBhbm5vdGF0aW9uOiBBbm5vdGF0aW9uKSB7XG4gICAgaWYgKCFoYXNQcm9wKHByb3RvdHlwZSwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgICAgIGFkZEhpZGRlblByb3AocHJvdG90eXBlLCBzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbCwge1xuICAgICAgICAgICAgLy8gSW5oZXJpdCBhbm5vdGF0aW9uc1xuICAgICAgICAgICAgLi4ucHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyBAb3ZlcnJpZGUgbXVzdCBvdmVycmlkZSBzb21ldGhpbmdcbiAgICBpZiAoX19ERVZfXyAmJiBpc092ZXJyaWRlKGFubm90YXRpb24pICYmICFoYXNQcm9wKHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0sIGtleSkpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7cHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWV9LnByb3RvdHlwZS4ke2tleS50b1N0cmluZygpfWBcbiAgICAgICAgZGllKFxuICAgICAgICAgICAgYCcke2ZpZWxkTmFtZX0nIGlzIGRlY29yYXRlZCB3aXRoICdvdmVycmlkZScsIGAgK1xuICAgICAgICAgICAgICAgIGBidXQgbm8gc3VjaCBkZWNvcmF0ZWQgbWVtYmVyIHdhcyBmb3VuZCBvbiBwcm90b3R5cGUuYFxuICAgICAgICApXG4gICAgfVxuICAgIC8vIENhbm5vdCByZS1kZWNvcmF0ZVxuICAgIGFzc2VydE5vdERlY29yYXRlZChwcm90b3R5cGUsIGFubm90YXRpb24sIGtleSlcblxuICAgIC8vIElnbm9yZSBvdmVycmlkZVxuICAgIGlmICghaXNPdmVycmlkZShhbm5vdGF0aW9uKSkge1xuICAgICAgICBwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdW2tleV0gPSBhbm5vdGF0aW9uXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnROb3REZWNvcmF0ZWQocHJvdG90eXBlOiBvYmplY3QsIGFubm90YXRpb246IEFubm90YXRpb24sIGtleTogUHJvcGVydHlLZXkpIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhaXNPdmVycmlkZShhbm5vdGF0aW9uKSAmJiBoYXNQcm9wKHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0sIGtleSkpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7cHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWV9LnByb3RvdHlwZS4ke2tleS50b1N0cmluZygpfWBcbiAgICAgICAgY29uc3QgY3VycmVudEFubm90YXRpb25UeXBlID0gcHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXVtrZXldLmFubm90YXRpb25UeXBlX1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfXG4gICAgICAgIGRpZShcbiAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgJ0Ake3JlcXVlc3RlZEFubm90YXRpb25UeXBlfScgdG8gJyR7ZmllbGROYW1lfSc6YCArXG4gICAgICAgICAgICAgICAgYFxcblRoZSBmaWVsZCBpcyBhbHJlYWR5IGRlY29yYXRlZCB3aXRoICdAJHtjdXJyZW50QW5ub3RhdGlvblR5cGV9Jy5gICtcbiAgICAgICAgICAgICAgICBgXFxuUmUtZGVjb3JhdGluZyBmaWVsZHMgaXMgbm90IGFsbG93ZWQuYCArXG4gICAgICAgICAgICAgICAgYFxcblVzZSAnQG92ZXJyaWRlJyBkZWNvcmF0b3IgZm9yIG1ldGhvZHMgb3ZlcnJpZGRlbiBieSBzdWJjbGFzcy5gXG4gICAgICAgIClcbiAgICB9XG59XG5cbi8qKlxuICogQ29sbGVjdHMgYW5ub3RhdGlvbnMgZnJvbSBwcm90b3R5cGVzIGFuZCBzdG9yZXMgdGhlbSBvbiB0YXJnZXQgKGluc3RhbmNlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFN0b3JlZEFubm90YXRpb25zKHRhcmdldCk6IEFubm90YXRpb25zTWFwPGFueSwgYW55PiB7XG4gICAgaWYgKCFoYXNQcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgICAgIGlmIChfX0RFVl9fICYmICF0YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdKSB7XG4gICAgICAgICAgICBkaWUoXG4gICAgICAgICAgICAgICAgYE5vIGFubm90YXRpb25zIHdlcmUgcGFzc2VkIHRvIG1ha2VPYnNlcnZhYmxlLCBidXQgbm8gZGVjb3JhdGVkIG1lbWJlcnMgaGF2ZSBiZWVuIGZvdW5kIGVpdGhlcmBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBuZWVkIGEgY29weSBhcyB3ZSB3aWxsIHJlbW92ZSBhbm5vdGF0aW9uIGZyb20gdGhlIGxpc3Qgb25jZSBpdCdzIGFwcGxpZWQuXG4gICAgICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCBzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbCwgeyAuLi50YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdIH0pXG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdXG59XG4iLCJpbXBvcnQge1xuICAgIElEZXJpdmF0aW9uU3RhdGVfLFxuICAgIElPYnNlcnZhYmxlLFxuICAgIElEZXJpdmF0aW9uLFxuICAgIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUsXG4gICAgZW5kQmF0Y2gsXG4gICAgZ2V0TmV4dElkLFxuICAgIG5vb3AsXG4gICAgb25CZWNvbWVPYnNlcnZlZCxcbiAgICBvbkJlY29tZVVub2JzZXJ2ZWQsXG4gICAgcHJvcGFnYXRlQ2hhbmdlZCxcbiAgICByZXBvcnRPYnNlcnZlZCxcbiAgICBzdGFydEJhdGNoLFxuICAgIExhbWJkYSxcbiAgICBnbG9iYWxTdGF0ZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgY29uc3QgJG1vYnggPSBTeW1ib2woXCJtb2J4IGFkbWluaXN0cmF0aW9uXCIpXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF0b20gZXh0ZW5kcyBJT2JzZXJ2YWJsZSB7XG4gICAgcmVwb3J0T2JzZXJ2ZWQoKTogYm9vbGVhblxuICAgIHJlcG9ydENoYW5nZWQoKVxufVxuXG5leHBvcnQgY2xhc3MgQXRvbSBpbXBsZW1lbnRzIElBdG9tIHtcbiAgICBpc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlIC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxuICAgIGlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZVxuICAgIG9ic2VydmVyc18gPSBuZXcgU2V0PElEZXJpdmF0aW9uPigpXG5cbiAgICBkaWZmVmFsdWVfID0gMFxuICAgIGxhc3RBY2Nlc3NlZEJ5XyA9IDBcbiAgICBsb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR19cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cbiAgICAgKiBUaGUgb25CZWNvbWVPYnNlcnZlZCBhbmQgb25CZWNvbWVVbm9ic2VydmVkIGNhbGxiYWNrcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2UgbWFuYWdlbWVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZV8gPSBfX0RFVl9fID8gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCkgOiBcIkF0b21cIikge31cblxuICAgIC8vIG9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnNcbiAgICBwdWJsaWMgb25CT0w6IFNldDxMYW1iZGE+IHwgdW5kZWZpbmVkXG4gICAgLy8gb25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzXG4gICAgcHVibGljIG9uQlVPTDogU2V0PExhbWJkYT4gfCB1bmRlZmluZWRcblxuICAgIHB1YmxpYyBvbkJPKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJPTCkge1xuICAgICAgICAgICAgdGhpcy5vbkJPTC5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25CVU8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQlVPTCkge1xuICAgICAgICAgICAgdGhpcy5vbkJVT0wuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcigpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb3J0T2JzZXJ2ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZXBvcnRPYnNlcnZlZCh0aGlzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCBfYWZ0ZXJfIHRoaXMgbWV0aG9kIGhhcyBjaGFuZ2VkIHRvIHNpZ25hbCBtb2J4IHRoYXQgYWxsIGl0cyBvYnNlcnZlcnMgc2hvdWxkIGludmFsaWRhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlcG9ydENoYW5nZWQoKSB7XG4gICAgICAgIHN0YXJ0QmF0Y2goKVxuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpXG4gICAgICAgIC8vIFdlIGNvdWxkIHVwZGF0ZSBzdGF0ZSB2ZXJzaW9uIG9ubHkgYXQgdGhlIGVuZCBvZiBiYXRjaCxcbiAgICAgICAgLy8gYnV0IHdlIHdvdWxkIHN0aWxsIGhhdmUgdG8gc3dpdGNoIHNvbWUgZ2xvYmFsIGZsYWcgaGVyZSB0byBzaWduYWwgYSBjaGFuZ2UuXG4gICAgICAgIGdsb2JhbFN0YXRlLnN0YXRlVmVyc2lvbiA9XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zdGF0ZVZlcnNpb24gPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgICAgICAgICAgICAgID8gZ2xvYmFsU3RhdGUuc3RhdGVWZXJzaW9uICsgMVxuICAgICAgICAgICAgICAgIDogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbiAgICAgICAgZW5kQmF0Y2goKVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lX1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGlzQXRvbSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJBdG9tXCIsIEF0b20pXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdG9tKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvbkJlY29tZU9ic2VydmVkSGFuZGxlcjogKCkgPT4gdm9pZCA9IG5vb3AsXG4gICAgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcjogKCkgPT4gdm9pZCA9IG5vb3Bcbik6IElBdG9tIHtcbiAgICBjb25zdCBhdG9tID0gbmV3IEF0b20obmFtZSlcbiAgICAvLyBkZWZhdWx0IGBub29wYCBsaXN0ZW5lciB3aWxsIG5vdCBpbml0aWFsaXplIHRoZSBob29rIFNldFxuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xuICAgICAgICBvbkJlY29tZU9ic2VydmVkKGF0b20sIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyKVxuICAgIH1cblxuICAgIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChhdG9tLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKVxuICAgIH1cbiAgICByZXR1cm4gYXRvbVxufVxuIiwiaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGludGVyZmFjZSBJRXF1YWxzQ29tcGFyZXI8VD4ge1xuICAgIChhOiBULCBiOiBUKTogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGEgPT09IGJcbn1cblxuZnVuY3Rpb24gc3RydWN0dXJhbENvbXBhcmVyKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiKVxufVxuXG5mdW5jdGlvbiBzaGFsbG93Q29tcGFyZXIoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIDEpXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChPYmplY3QuaXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKVxuICAgIH1cblxuICAgIHJldHVybiBhID09PSBiID8gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGIgOiBhICE9PSBhICYmIGIgIT09IGJcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVyID0ge1xuICAgIGlkZW50aXR5OiBpZGVudGl0eUNvbXBhcmVyLFxuICAgIHN0cnVjdHVyYWw6IHN0cnVjdHVyYWxDb21wYXJlcixcbiAgICBkZWZhdWx0OiBkZWZhdWx0Q29tcGFyZXIsXG4gICAgc2hhbGxvdzogc2hhbGxvd0NvbXBhcmVyXG59XG4iLCJpbXBvcnQge1xuICAgIGRlZXBFcXVhbCxcbiAgICBpc0VTNk1hcCxcbiAgICBpc0VTNlNldCxcbiAgICBpc09ic2VydmFibGUsXG4gICAgaXNPYnNlcnZhYmxlQXJyYXksXG4gICAgaXNPYnNlcnZhYmxlTWFwLFxuICAgIGlzT2JzZXJ2YWJsZVNldCxcbiAgICBpc09ic2VydmFibGVPYmplY3QsXG4gICAgaXNQbGFpbk9iamVjdCxcbiAgICBvYnNlcnZhYmxlLFxuICAgIGRpZSxcbiAgICBpc0FjdGlvbixcbiAgICBhdXRvQWN0aW9uLFxuICAgIGZsb3csXG4gICAgaXNGbG93LFxuICAgIGlzR2VuZXJhdG9yXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVuaGFuY2VyPFQ+IHtcbiAgICAobmV3VmFsdWU6IFQsIG9sZFZhbHVlOiBUIHwgdW5kZWZpbmVkLCBuYW1lOiBzdHJpbmcpOiBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpIHtcbiAgICAgICAgcmV0dXJuIHZcbiAgICB9XG5cbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIHsgbmFtZSB9KVxuICAgIH1cbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWUgfSlcbiAgICB9XG4gICAgaWYgKGlzRVM2TWFwKHYpKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7IG5hbWUgfSlcbiAgICB9XG4gICAgaWYgKGlzRVM2U2V0KHYpKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCB7IG5hbWUgfSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2ID09PSBcImZ1bmN0aW9uXCIgJiYgIWlzQWN0aW9uKHYpICYmICFpc0Zsb3codikpIHtcbiAgICAgICAgaWYgKGlzR2VuZXJhdG9yKHYpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxvdyh2KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGF1dG9BY3Rpb24obmFtZSwgdilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdlxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VuaGFuY2VyKHYsIF8sIG5hbWUpOiBhbnkge1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdlxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHYpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHYpIHx8IGlzT2JzZXJ2YWJsZU1hcCh2KSB8fCBpc09ic2VydmFibGVTZXQodikpIHtcbiAgICAgICAgcmV0dXJuIHZcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgeyBuYW1lLCBkZWVwOiBmYWxzZSB9KVxuICAgIH1cbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWUsIGRlZXA6IGZhbHNlIH0pXG4gICAgfVxuICAgIGlmIChpc0VTNk1hcCh2KSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgeyBuYW1lLCBkZWVwOiBmYWxzZSB9KVxuICAgIH1cbiAgICBpZiAoaXNFUzZTZXQodikpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHsgbmFtZSwgZGVlcDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBkaWUoXG4gICAgICAgICAgICBcIlRoZSBzaGFsbG93IG1vZGlmaWVyIC8gZGVjb3JhdG9yIGNhbiBvbmx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBhcnJheXMsIG9iamVjdHMsIG1hcHMgYW5kIHNldHNcIlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRW5oYW5jZXIobmV3VmFsdWU/KSB7XG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgICByZXR1cm4gbmV3VmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZlN0cnVjdEVuaGFuY2VyKHYsIG9sZFZhbHVlKTogYW55IHtcbiAgICBpZiAoX19ERVZfXyAmJiBpc09ic2VydmFibGUodikpIHtcbiAgICAgICAgZGllKGBvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc2ApXG4gICAgfVxuICAgIGlmIChkZWVwRXF1YWwodiwgb2xkVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvbGRWYWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdlxufVxuIiwiaW1wb3J0IHtcbiAgICBkaWUsXG4gICAgQW5ub3RhdGlvbixcbiAgICBoYXNQcm9wLFxuICAgIGNyZWF0ZURlY29yYXRvckFubm90YXRpb24sXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIE1ha2VSZXN1bHRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuY29uc3QgT1ZFUlJJREUgPSBcIm92ZXJyaWRlXCJcblxuZXhwb3J0IGNvbnN0IG92ZXJyaWRlOiBBbm5vdGF0aW9uICYgUHJvcGVydHlEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKHtcbiAgICBhbm5vdGF0aW9uVHlwZV86IE9WRVJSSURFLFxuICAgIG1ha2VfLFxuICAgIGV4dGVuZF9cbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJyaWRlKGFubm90YXRpb246IEFubm90YXRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV8gPT09IE9WRVJSSURFXG59XG5cbmZ1bmN0aW9uIG1ha2VfKGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLCBrZXkpOiBNYWtlUmVzdWx0IHtcbiAgICAvLyBNdXN0IG5vdCBiZSBwbGFpbiBvYmplY3RcbiAgICBpZiAoX19ERVZfXyAmJiBhZG0uaXNQbGFpbk9iamVjdF8pIHtcbiAgICAgICAgZGllKFxuICAgICAgICAgICAgYENhbm5vdCBhcHBseSAnJHt0aGlzLmFubm90YXRpb25UeXBlX30nIHRvICcke2FkbS5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX0nOmAgK1xuICAgICAgICAgICAgICAgIGBcXG4nJHt0aGlzLmFubm90YXRpb25UeXBlX30nIGNhbm5vdCBiZSB1c2VkIG9uIHBsYWluIG9iamVjdHMuYFxuICAgICAgICApXG4gICAgfVxuICAgIC8vIE11c3Qgb3ZlcnJpZGUgc29tZXRoaW5nXG4gICAgaWYgKF9fREVWX18gJiYgIWhhc1Byb3AoYWRtLmFwcGxpZWRBbm5vdGF0aW9uc18hLCBrZXkpKSB7XG4gICAgICAgIGRpZShcbiAgICAgICAgICAgIGAnJHthZG0ubmFtZV99LiR7a2V5LnRvU3RyaW5nKCl9JyBpcyBhbm5vdGF0ZWQgd2l0aCAnJHt0aGlzLmFubm90YXRpb25UeXBlX30nLCBgICtcbiAgICAgICAgICAgICAgICBgYnV0IG5vIHN1Y2ggYW5ub3RhdGVkIG1lbWJlciB3YXMgZm91bmQgb24gcHJvdG90eXBlLmBcbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gTWFrZVJlc3VsdC5DYW5jZWxcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKTogYm9vbGVhbiB7XG4gICAgZGllKGAnJHt0aGlzLmFubm90YXRpb25UeXBlX30nIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCAnbWFrZU9ic2VydmFibGUnYClcbn1cbiIsImltcG9ydCB7XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGNyZWF0ZUFjdGlvbixcbiAgICBpc0FjdGlvbixcbiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgICBkaWUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBBbm5vdGF0aW9uLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIE1ha2VSZXN1bHRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkFubm90YXRpb24obmFtZTogc3RyaW5nLCBvcHRpb25zPzogb2JqZWN0KTogQW5ub3RhdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgICAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICAgICAgbWFrZV8sXG4gICAgICAgIGV4dGVuZF9cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHNvdXJjZTogb2JqZWN0XG4pOiBNYWtlUmVzdWx0IHtcbiAgICAvLyBib3VuZFxuICAgIGlmICh0aGlzLm9wdGlvbnNfPy5ib3VuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGxcbiAgICAgICAgICAgID8gTWFrZVJlc3VsdC5DYW5jZWxcbiAgICAgICAgICAgIDogTWFrZVJlc3VsdC5CcmVha1xuICAgIH1cbiAgICAvLyBvd25cbiAgICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGxcbiAgICAgICAgICAgID8gTWFrZVJlc3VsdC5DYW5jZWxcbiAgICAgICAgICAgIDogTWFrZVJlc3VsdC5Db250aW51ZVxuICAgIH1cbiAgICAvLyBwcm90b3R5cGVcbiAgICBpZiAoaXNBY3Rpb24oZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgICAgLy8gQSBwcm90b3R5cGUgY291bGQgaGF2ZSBiZWVuIGFubm90YXRlZCBhbHJlYWR5IGJ5IG90aGVyIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyByZXN0IG9mIHRoZSBwcm90byBjaGFpbiBtdXN0IGJlIGFubm90YXRlZCBhbHJlYWR5XG4gICAgICAgIHJldHVybiBNYWtlUmVzdWx0LkJyZWFrXG4gICAgfVxuICAgIGNvbnN0IGFjdGlvbkRlc2NyaXB0b3IgPSBjcmVhdGVBY3Rpb25EZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSlcbiAgICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwgYWN0aW9uRGVzY3JpcHRvcilcbiAgICByZXR1cm4gTWFrZVJlc3VsdC5Db250aW51ZVxufVxuXG5mdW5jdGlvbiBleHRlbmRfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHByb3h5VHJhcDogYm9vbGVhblxuKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IGFjdGlvbkRlc2NyaXB0b3IgPSBjcmVhdGVBY3Rpb25EZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yKVxuICAgIHJldHVybiBhZG0uZGVmaW5lUHJvcGVydHlfKGtleSwgYWN0aW9uRGVzY3JpcHRvciwgcHJveHlUcmFwKVxufVxuXG5mdW5jdGlvbiBhc3NlcnRBY3Rpb25EZXNjcmlwdG9yKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIHsgYW5ub3RhdGlvblR5cGVfIH06IEFubm90YXRpb24sXG4gICAga2V5OiBQcm9wZXJ0eUtleSxcbiAgICB7IHZhbHVlIH06IFByb3BlcnR5RGVzY3JpcHRvclxuKSB7XG4gICAgaWYgKF9fREVWX18gJiYgIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGRpZShcbiAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgJyR7YW5ub3RhdGlvblR5cGVffScgdG8gJyR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfSc6YCArXG4gICAgICAgICAgICAgICAgYFxcbicke2Fubm90YXRpb25UeXBlX30nIGNhbiBvbmx5IGJlIHVzZWQgb24gcHJvcGVydGllcyB3aXRoIGEgZnVuY3Rpb24gdmFsdWUuYFxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uRGVzY3JpcHRvcihcbiAgICBhZG06IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBhbm5vdGF0aW9uOiBBbm5vdGF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIC8vIHByb3ZpZGVzIGFiaWxpdHkgdG8gZGlzYWJsZSBzYWZlRGVzY3JpcHRvcnMgZm9yIHByb3RvdHlwZXNcbiAgICBzYWZlRGVzY3JpcHRvcnM6IGJvb2xlYW4gPSBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnNcbikge1xuICAgIGFzc2VydEFjdGlvbkRlc2NyaXB0b3IoYWRtLCBhbm5vdGF0aW9uLCBrZXksIGRlc2NyaXB0b3IpXG4gICAgbGV0IHsgdmFsdWUgfSA9IGRlc2NyaXB0b3JcbiAgICBpZiAoYW5ub3RhdGlvbi5vcHRpb25zXz8uYm91bmQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKGFkbS5wcm94eV8gPz8gYWRtLnRhcmdldF8pXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBjcmVhdGVBY3Rpb24oXG4gICAgICAgICAgICBhbm5vdGF0aW9uLm9wdGlvbnNfPy5uYW1lID8/IGtleS50b1N0cmluZygpLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBhbm5vdGF0aW9uLm9wdGlvbnNfPy5hdXRvQWN0aW9uID8/IGZhbHNlLFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2Rpc2N1c3Npb25zLzMxNDBcbiAgICAgICAgICAgIGFubm90YXRpb24ub3B0aW9uc18/LmJvdW5kID8gYWRtLnByb3h5XyA/PyBhZG0udGFyZ2V0XyA6IHVuZGVmaW5lZFxuICAgICAgICApLFxuICAgICAgICAvLyBOb24tY29uZmlndXJhYmxlIGZvciBjbGFzc2VzXG4gICAgICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWwgZmllbGQgcmVkZWZpbml0aW9uIGluIHN1YmNsYXNzXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMjY0MSNpc3N1ZWNvbW1lbnQtNzM3MjkyMDU4XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAvLyBOb24tb2JzZXZhYmxlLCB0aGVyZWZvcmUgbm9uLXdyaXRhYmxlXG4gICAgICAgIC8vIEFsc28gcHJldmVudHMgcmV3cml0aW5nIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIHdyaXRhYmxlOiBzYWZlRGVzY3JpcHRvcnMgPyBmYWxzZSA6IHRydWVcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBBbm5vdGF0aW9uLFxuICAgIGRlZmluZVByb3BlcnR5LFxuICAgIGRpZSxcbiAgICBmbG93LFxuICAgIGlzRmxvdyxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIE1ha2VSZXN1bHQsXG4gICAgaGFzUHJvcFxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmxvd0Fubm90YXRpb24obmFtZTogc3RyaW5nLCBvcHRpb25zPzogb2JqZWN0KTogQW5ub3RhdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgICAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICAgICAgbWFrZV8sXG4gICAgICAgIGV4dGVuZF9cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHNvdXJjZTogb2JqZWN0XG4pOiBNYWtlUmVzdWx0IHtcbiAgICAvLyBvd25cbiAgICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGxcbiAgICAgICAgICAgID8gTWFrZVJlc3VsdC5DYW5jZWxcbiAgICAgICAgICAgIDogTWFrZVJlc3VsdC5Db250aW51ZVxuICAgIH1cbiAgICAvLyBwcm90b3R5cGVcbiAgICAvLyBib3VuZCAtIG11c3QgYW5ub3RhdGUgcHJvdG9zIHRvIHN1cHBvcnQgc3VwZXIuZmxvdygpXG4gICAgaWYgKHRoaXMub3B0aW9uc18/LmJvdW5kICYmICghaGFzUHJvcChhZG0udGFyZ2V0Xywga2V5KSB8fCAhaXNGbG93KGFkbS50YXJnZXRfW2tleV0pKSkge1xuICAgICAgICBpZiAodGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBNYWtlUmVzdWx0LkNhbmNlbFxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc0Zsb3coZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgICAgLy8gQSBwcm90b3R5cGUgY291bGQgaGF2ZSBiZWVuIGFubm90YXRlZCBhbHJlYWR5IGJ5IG90aGVyIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyByZXN0IG9mIHRoZSBwcm90byBjaGFpbiBtdXN0IGJlIGFubm90YXRlZCBhbHJlYWR5XG4gICAgICAgIHJldHVybiBNYWtlUmVzdWx0LkJyZWFrXG4gICAgfVxuICAgIGNvbnN0IGZsb3dEZXNjcmlwdG9yID0gY3JlYXRlRmxvd0Rlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlLCBmYWxzZSlcbiAgICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwgZmxvd0Rlc2NyaXB0b3IpXG4gICAgcmV0dXJuIE1ha2VSZXN1bHQuQ29udGludWVcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyhcbiAgICBhZG06IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBrZXk6IFByb3BlcnR5S2V5LFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICBwcm94eVRyYXA6IGJvb2xlYW5cbik6IGJvb2xlYW4gfCBudWxsIHtcbiAgICBjb25zdCBmbG93RGVzY3JpcHRvciA9IGNyZWF0ZUZsb3dEZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCB0aGlzLm9wdGlvbnNfPy5ib3VuZClcbiAgICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIGZsb3dEZXNjcmlwdG9yLCBwcm94eVRyYXApXG59XG5cbmZ1bmN0aW9uIGFzc2VydEZsb3dEZXNjcmlwdG9yKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIHsgYW5ub3RhdGlvblR5cGVfIH06IEFubm90YXRpb24sXG4gICAga2V5OiBQcm9wZXJ0eUtleSxcbiAgICB7IHZhbHVlIH06IFByb3BlcnR5RGVzY3JpcHRvclxuKSB7XG4gICAgaWYgKF9fREVWX18gJiYgIWlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGRpZShcbiAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgJyR7YW5ub3RhdGlvblR5cGVffScgdG8gJyR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfSc6YCArXG4gICAgICAgICAgICAgICAgYFxcbicke2Fubm90YXRpb25UeXBlX30nIGNhbiBvbmx5IGJlIHVzZWQgb24gcHJvcGVydGllcyB3aXRoIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHZhbHVlLmBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRmxvd0Rlc2NyaXB0b3IoXG4gICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgYW5ub3RhdGlvbjogQW5ub3RhdGlvbixcbiAgICBrZXk6IFByb3BlcnR5S2V5LFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICBib3VuZDogYm9vbGVhbixcbiAgICAvLyBwcm92aWRlcyBhYmlsaXR5IHRvIGRpc2FibGUgc2FmZURlc2NyaXB0b3JzIGZvciBwcm90b3R5cGVzXG4gICAgc2FmZURlc2NyaXB0b3JzOiBib29sZWFuID0gZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzXG4pOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuICAgIGFzc2VydEZsb3dEZXNjcmlwdG9yKGFkbSwgYW5ub3RhdGlvbiwga2V5LCBkZXNjcmlwdG9yKVxuICAgIGxldCB7IHZhbHVlIH0gPSBkZXNjcmlwdG9yXG4gICAgLy8gSW4gY2FzZSBvZiBmbG93LmJvdW5kLCB0aGUgZGVzY3JpcHRvciBjYW4gYmUgZnJvbSBhbHJlYWR5IGFubm90YXRlZCBwcm90b3R5cGVcbiAgICBpZiAoIWlzRmxvdyh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBmbG93KHZhbHVlKVxuICAgIH1cbiAgICBpZiAoYm91bmQpIHtcbiAgICAgICAgLy8gV2UgZG8gbm90IGtlZXAgb3JpZ2luYWwgZnVuY3Rpb24gYXJvdW5kLCBzbyB3ZSBiaW5kIHRoZSBleGlzdGluZyBmbG93XG4gICAgICAgIHZhbHVlID0gdmFsdWUuYmluZChhZG0ucHJveHlfID8/IGFkbS50YXJnZXRfKVxuICAgICAgICAvLyBUaGlzIGlzIG5vcm1hbGx5IHNldCBieSBgZmxvd2AsIGJ1dCBgYmluZGAgcmV0dXJucyBuZXcgZnVuY3Rpb24uLi5cbiAgICAgICAgdmFsdWUuaXNNb2JYRmxvdyA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIC8vIE5vbi1jb25maWd1cmFibGUgZm9yIGNsYXNzZXNcbiAgICAgICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbCBmaWVsZCByZWRlZmluaXRpb24gaW4gc3ViY2xhc3NcbiAgICAgICAgY29uZmlndXJhYmxlOiBzYWZlRGVzY3JpcHRvcnMgPyBhZG0uaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvcHVsbC8yNjQxI2lzc3VlY29tbWVudC03MzcyOTIwNThcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIC8vIE5vbi1vYnNldmFibGUsIHRoZXJlZm9yZSBub24td3JpdGFibGVcbiAgICAgICAgLy8gQWxzbyBwcmV2ZW50cyByZXdyaXRpbmcgaW4gc3ViY2xhc3MgY29uc3RydWN0b3JcbiAgICAgICAgd3JpdGFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGZhbHNlIDogdHJ1ZVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiwgZGllLCBBbm5vdGF0aW9uLCBNYWtlUmVzdWx0IH0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihuYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBvYmplY3QpOiBBbm5vdGF0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbm5vdGF0aW9uVHlwZV86IG5hbWUsXG4gICAgICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgICAgICBtYWtlXyxcbiAgICAgICAgZXh0ZW5kX1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZV8oXG4gICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAga2V5OiBQcm9wZXJ0eUtleSxcbiAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3Jcbik6IE1ha2VSZXN1bHQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IE1ha2VSZXN1bHQuQ2FuY2VsIDogTWFrZVJlc3VsdC5CcmVha1xufVxuXG5mdW5jdGlvbiBleHRlbmRfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHByb3h5VHJhcDogYm9vbGVhblxuKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGFzc2VydENvbXB1dGVkRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvcilcbiAgICByZXR1cm4gYWRtLmRlZmluZUNvbXB1dGVkUHJvcGVydHlfKFxuICAgICAgICBrZXksXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLnRoaXMub3B0aW9uc18sXG4gICAgICAgICAgICBnZXQ6IGRlc2NyaXB0b3IuZ2V0LFxuICAgICAgICAgICAgc2V0OiBkZXNjcmlwdG9yLnNldFxuICAgICAgICB9LFxuICAgICAgICBwcm94eVRyYXBcbiAgICApXG59XG5cbmZ1bmN0aW9uIGFzc2VydENvbXB1dGVkRGVzY3JpcHRvcihcbiAgICBhZG06IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICB7IGFubm90YXRpb25UeXBlXyB9OiBBbm5vdGF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgeyBnZXQgfTogUHJvcGVydHlEZXNjcmlwdG9yXG4pIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhZ2V0KSB7XG4gICAgICAgIGRpZShcbiAgICAgICAgICAgIGBDYW5ub3QgYXBwbHkgJyR7YW5ub3RhdGlvblR5cGVffScgdG8gJyR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfSc6YCArXG4gICAgICAgICAgICAgICAgYFxcbicke2Fubm90YXRpb25UeXBlX30nIGNhbiBvbmx5IGJlIHVzZWQgb24gZ2V0dGVyKCtzZXR0ZXIpIHByb3BlcnRpZXMuYFxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgZGVlcEVuaGFuY2VyLFxuICAgIGRpZSxcbiAgICBBbm5vdGF0aW9uLFxuICAgIE1ha2VSZXN1bHRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IG9iamVjdCk6IEFubm90YXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICAgICAgb3B0aW9uc186IG9wdGlvbnMsXG4gICAgICAgIG1ha2VfLFxuICAgICAgICBleHRlbmRfXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlXyhcbiAgICBhZG06IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBrZXk6IFByb3BlcnR5S2V5LFxuICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvclxuKTogTWFrZVJlc3VsdCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpID09PSBudWxsID8gTWFrZVJlc3VsdC5DYW5jZWwgOiBNYWtlUmVzdWx0LkJyZWFrXG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8oXG4gICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAga2V5OiBQcm9wZXJ0eUtleSxcbiAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgcHJveHlUcmFwOiBib29sZWFuXG4pOiBib29sZWFuIHwgbnVsbCB7XG4gICAgYXNzZXJ0T2JzZXJ2YWJsZURlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IpXG4gICAgcmV0dXJuIGFkbS5kZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfKFxuICAgICAgICBrZXksXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUsXG4gICAgICAgIHRoaXMub3B0aW9uc18/LmVuaGFuY2VyID8/IGRlZXBFbmhhbmNlcixcbiAgICAgICAgcHJveHlUcmFwXG4gICAgKVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYnNlcnZhYmxlRGVzY3JpcHRvcihcbiAgICBhZG06IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICB7IGFubm90YXRpb25UeXBlXyB9OiBBbm5vdGF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yXG4pIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSkge1xuICAgICAgICBkaWUoXG4gICAgICAgICAgICBgQ2Fubm90IGFwcGx5ICcke2Fubm90YXRpb25UeXBlX30nIHRvICcke2FkbS5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX0nOmAgK1xuICAgICAgICAgICAgICAgIGBcXG4nJHthbm5vdGF0aW9uVHlwZV99JyBjYW5ub3QgYmUgdXNlZCBvbiBnZXR0ZXIvc2V0dGVyIHByb3BlcnRpZXNgXG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBvYnNlcnZhYmxlLFxuICAgIEFubm90YXRpb24sXG4gICAgZGVmaW5lUHJvcGVydHksXG4gICAgY3JlYXRlQWN0aW9uLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIGZsb3csXG4gICAgY29tcHV0ZWQsXG4gICAgYXV0b0FjdGlvbixcbiAgICBpc0dlbmVyYXRvcixcbiAgICBNYWtlUmVzdWx0XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmNvbnN0IEFVVE8gPSBcInRydWVcIlxuXG5leHBvcnQgY29uc3QgYXV0b0Fubm90YXRpb246IEFubm90YXRpb24gPSBjcmVhdGVBdXRvQW5ub3RhdGlvbigpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRvQW5ub3RhdGlvbihvcHRpb25zPzogb2JqZWN0KTogQW5ub3RhdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYW5ub3RhdGlvblR5cGVfOiBBVVRPLFxuICAgICAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICAgICAgbWFrZV8sXG4gICAgICAgIGV4dGVuZF9cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHNvdXJjZTogb2JqZWN0XG4pOiBNYWtlUmVzdWx0IHtcbiAgICAvLyBnZXR0ZXIgLT4gY29tcHV0ZWRcbiAgICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpXG4gICAgfVxuICAgIC8vIGxvbmUgc2V0dGVyIC0+IGFjdGlvbiBzZXR0ZXJcbiAgICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgLy8gVE9ETyBtYWtlIGFjdGlvbiBhcHBsaWNhYmxlIHRvIHNldHRlciBhbmQgZGVsZWdhdGUgdG8gYWN0aW9uLm1ha2VfXG4gICAgICAgIGNvbnN0IHNldCA9IGNyZWF0ZUFjdGlvbihrZXkudG9TdHJpbmcoKSwgZGVzY3JpcHRvci5zZXQpIGFzICh2OiBhbnkpID0+IHZvaWRcbiAgICAgICAgLy8gb3duXG4gICAgICAgIGlmIChzb3VyY2UgPT09IGFkbS50YXJnZXRfKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLnNhZmVEZXNjcmlwdG9ycyA/IGFkbS5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgICAgICAgICAgICAgc2V0XG4gICAgICAgICAgICB9KSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgID8gTWFrZVJlc3VsdC5DYW5jZWxcbiAgICAgICAgICAgICAgICA6IE1ha2VSZXN1bHQuQ29udGludWVcbiAgICAgICAgfVxuICAgICAgICAvLyBwcm90b1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgc2V0XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBNYWtlUmVzdWx0LkNvbnRpbnVlXG4gICAgfVxuICAgIC8vIGZ1bmN0aW9uIG9uIHByb3RvIC0+IGF1dG9BY3Rpb24vZmxvd1xuICAgIGlmIChzb3VyY2UgIT09IGFkbS50YXJnZXRfICYmIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGlzR2VuZXJhdG9yKGRlc2NyaXB0b3IudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmbG93QW5ub3RhdGlvbiA9IHRoaXMub3B0aW9uc18/LmF1dG9CaW5kID8gZmxvdy5ib3VuZCA6IGZsb3dcbiAgICAgICAgICAgIHJldHVybiBmbG93QW5ub3RhdGlvbi5tYWtlXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbkFubm90YXRpb24gPSB0aGlzLm9wdGlvbnNfPy5hdXRvQmluZCA/IGF1dG9BY3Rpb24uYm91bmQgOiBhdXRvQWN0aW9uXG4gICAgICAgIHJldHVybiBhY3Rpb25Bbm5vdGF0aW9uLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpXG4gICAgfVxuICAgIC8vIG90aGVyIC0+IG9ic2VydmFibGVcbiAgICAvLyBDb3B5IHByb3BzIGZyb20gcHJvdG8gYXMgd2VsbCwgc2VlIHRlc3Q6XG4gICAgLy8gXCJkZWNvcmF0ZSBzaG91bGQgd29yayB3aXRoIE9iamVjdC5jcmVhdGVcIlxuICAgIGxldCBvYnNlcnZhYmxlQW5ub3RhdGlvbiA9IHRoaXMub3B0aW9uc18/LmRlZXAgPT09IGZhbHNlID8gb2JzZXJ2YWJsZS5yZWYgOiBvYnNlcnZhYmxlXG4gICAgLy8gaWYgZnVuY3Rpb24gcmVzcGVjdCBhdXRvQmluZCBvcHRpb25cbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB0aGlzLm9wdGlvbnNfPy5hdXRvQmluZCkge1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKGFkbS5wcm94eV8gPz8gYWRtLnRhcmdldF8pXG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlQW5ub3RhdGlvbi5tYWtlXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKVxufVxuXG5mdW5jdGlvbiBleHRlbmRfKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIHByb3h5VHJhcDogYm9vbGVhblxuKTogYm9vbGVhbiB8IG51bGwge1xuICAgIC8vIGdldHRlciAtPiBjb21wdXRlZFxuICAgIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZWQuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKVxuICAgIH1cbiAgICAvLyBsb25lIHNldHRlciAtPiBhY3Rpb24gc2V0dGVyXG4gICAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgIC8vIFRPRE8gbWFrZSBhY3Rpb24gYXBwbGljYWJsZSB0byBzZXR0ZXIgYW5kIGRlbGVnYXRlIHRvIGFjdGlvbi5leHRlbmRfXG4gICAgICAgIHJldHVybiBhZG0uZGVmaW5lUHJvcGVydHlfKFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZXQ6IGNyZWF0ZUFjdGlvbihrZXkudG9TdHJpbmcoKSwgZGVzY3JpcHRvci5zZXQpIGFzICh2OiBhbnkpID0+IHZvaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eVRyYXBcbiAgICAgICAgKVxuICAgIH1cbiAgICAvLyBvdGhlciAtPiBvYnNlcnZhYmxlXG4gICAgLy8gaWYgZnVuY3Rpb24gcmVzcGVjdCBhdXRvQmluZCBvcHRpb25cbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJiB0aGlzLm9wdGlvbnNfPy5hdXRvQmluZCkge1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKGFkbS5wcm94eV8gPz8gYWRtLnRhcmdldF8pXG4gICAgfVxuICAgIGxldCBvYnNlcnZhYmxlQW5ub3RhdGlvbiA9IHRoaXMub3B0aW9uc18/LmRlZXAgPT09IGZhbHNlID8gb2JzZXJ2YWJsZS5yZWYgOiBvYnNlcnZhYmxlXG4gICAgcmV0dXJuIG9ic2VydmFibGVBbm5vdGF0aW9uLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcClcbn1cbiIsImltcG9ydCB7XG4gICAgSUVuaGFuY2VyLFxuICAgIElFcXVhbHNDb21wYXJlcixcbiAgICBJT2JzZXJ2YWJsZUFycmF5LFxuICAgIElPYnNlcnZhYmxlTWFwSW5pdGlhbFZhbHVlcyxcbiAgICBJT2JzZXJ2YWJsZVNldEluaXRpYWxWYWx1ZXMsXG4gICAgSU9ic2VydmFibGVWYWx1ZSxcbiAgICBPYnNlcnZhYmxlTWFwLFxuICAgIE9ic2VydmFibGVTZXQsXG4gICAgT2JzZXJ2YWJsZVZhbHVlLFxuICAgIGFzRHluYW1pY09ic2VydmFibGVPYmplY3QsXG4gICAgY3JlYXRlT2JzZXJ2YWJsZUFycmF5LFxuICAgIGRlZXBFbmhhbmNlcixcbiAgICBleHRlbmRPYnNlcnZhYmxlLFxuICAgIGlzRVM2TWFwLFxuICAgIGlzRVM2U2V0LFxuICAgIGlzT2JzZXJ2YWJsZSxcbiAgICBpc1BsYWluT2JqZWN0LFxuICAgIHJlZmVyZW5jZUVuaGFuY2VyLFxuICAgIEFubm90YXRpb24sXG4gICAgc2hhbGxvd0VuaGFuY2VyLFxuICAgIHJlZlN0cnVjdEVuaGFuY2VyLFxuICAgIEFubm90YXRpb25zTWFwLFxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCxcbiAgICBzdG9yZUFubm90YXRpb24sXG4gICAgY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbixcbiAgICBjcmVhdGVMZWdhY3lBcnJheSxcbiAgICBnbG9iYWxTdGF0ZSxcbiAgICBhc3NpZ24sXG4gICAgaXNTdHJpbmdpc2gsXG4gICAgY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24sXG4gICAgY3JlYXRlQXV0b0Fubm90YXRpb25cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGNvbnN0IE9CU0VSVkFCTEUgPSBcIm9ic2VydmFibGVcIlxuZXhwb3J0IGNvbnN0IE9CU0VSVkFCTEVfUkVGID0gXCJvYnNlcnZhYmxlLnJlZlwiXG5leHBvcnQgY29uc3QgT0JTRVJWQUJMRV9TSEFMTE9XID0gXCJvYnNlcnZhYmxlLnNoYWxsb3dcIlxuZXhwb3J0IGNvbnN0IE9CU0VSVkFCTEVfU1RSVUNUID0gXCJvYnNlcnZhYmxlLnN0cnVjdFwiXG5cbmV4cG9ydCB0eXBlIENyZWF0ZU9ic2VydmFibGVPcHRpb25zID0ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBlcXVhbHM/OiBJRXF1YWxzQ29tcGFyZXI8YW55PlxuICAgIGRlZXA/OiBib29sZWFuXG4gICAgZGVmYXVsdERlY29yYXRvcj86IEFubm90YXRpb25cbiAgICBwcm94eT86IGJvb2xlYW5cbiAgICBhdXRvQmluZD86IGJvb2xlYW5cbn1cblxuLy8gUHJlZGVmaW5lZCBiYWdzIG9mIGNyZWF0ZSBvYnNlcnZhYmxlIG9wdGlvbnMsIHRvIGF2b2lkIGFsbG9jYXRpbmcgdGVtcG9yYXJpbHkgb3B0aW9uIG9iamVjdHNcbi8vIGluIHRoZSBtYWpvcml0eSBvZiBjYXNlc1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9uczogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7XG4gICAgZGVlcDogdHJ1ZSxcbiAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxuICAgIHByb3h5OiB0cnVlXG59XG5PYmplY3QuZnJlZXplKGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucylcblxuZXhwb3J0IGZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnModGhpbmc6IGFueSk6IENyZWF0ZU9ic2VydmFibGVPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpbmcgfHwgZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zXG59XG5cbmNvbnN0IG9ic2VydmFibGVBbm5vdGF0aW9uID0gY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oT0JTRVJWQUJMRSlcbmNvbnN0IG9ic2VydmFibGVSZWZBbm5vdGF0aW9uID0gY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oT0JTRVJWQUJMRV9SRUYsIHtcbiAgICBlbmhhbmNlcjogcmVmZXJlbmNlRW5oYW5jZXJcbn0pXG5jb25zdCBvYnNlcnZhYmxlU2hhbGxvd0Fubm90YXRpb24gPSBjcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihPQlNFUlZBQkxFX1NIQUxMT1csIHtcbiAgICBlbmhhbmNlcjogc2hhbGxvd0VuaGFuY2VyXG59KVxuY29uc3Qgb2JzZXJ2YWJsZVN0cnVjdEFubm90YXRpb24gPSBjcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihPQlNFUlZBQkxFX1NUUlVDVCwge1xuICAgIGVuaGFuY2VyOiByZWZTdHJ1Y3RFbmhhbmNlclxufSlcbmNvbnN0IG9ic2VydmFibGVEZWNvcmF0b3JBbm5vdGF0aW9uID0gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihvYnNlcnZhYmxlQW5ub3RhdGlvbilcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMob3B0aW9uczogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpOiBJRW5oYW5jZXI8YW55PiB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVlcCA9PT0gdHJ1ZVxuICAgICAgICA/IGRlZXBFbmhhbmNlclxuICAgICAgICA6IG9wdGlvbnMuZGVlcCA9PT0gZmFsc2VcbiAgICAgICAgPyByZWZlcmVuY2VFbmhhbmNlclxuICAgICAgICA6IGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24ob3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zKFxuICAgIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9uc1xuKTogQW5ub3RhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG9wdGlvbnMgPyBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3IgPz8gY3JlYXRlQXV0b0Fubm90YXRpb24ob3B0aW9ucykgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbUFubm90YXRpb24oYW5ub3RhdGlvbj86IEFubm90YXRpb24pOiBJRW5oYW5jZXI8YW55PiB7XG4gICAgcmV0dXJuICFhbm5vdGF0aW9uID8gZGVlcEVuaGFuY2VyIDogYW5ub3RhdGlvbi5vcHRpb25zXz8uZW5oYW5jZXIgPz8gZGVlcEVuaGFuY2VyXG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0LCBhcnJheSBvciBmdW5jdGlvbiBpbnRvIGEgcmVhY3RpdmUgc3RydWN0dXJlLlxuICogQHBhcmFtIHYgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZWNvbWUgb2JzZXJ2YWJsZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZSh2OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnkpIHtcbiAgICAvLyBAb2JzZXJ2YWJsZSBzb21lUHJvcDtcbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICAgICAgc3RvcmVBbm5vdGF0aW9uKHYsIGFyZzIsIG9ic2VydmFibGVBbm5vdGF0aW9uKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBhbHJlYWR5IG9ic2VydmFibGUgLSBpZ25vcmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHYpKSB7XG4gICAgICAgIHJldHVybiB2XG4gICAgfVxuXG4gICAgLy8gcGxhaW4gb2JqZWN0XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIGFyZzIsIGFyZzMpXG4gICAgfVxuXG4gICAgLy8gQXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCBhcmcyKVxuICAgIH1cblxuICAgIC8vIE1hcFxuICAgIGlmIChpc0VTNk1hcCh2KSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMilcbiAgICB9XG5cbiAgICAvLyBTZXRcbiAgICBpZiAoaXNFUzZTZXQodikpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIGFyZzIpXG4gICAgfVxuXG4gICAgLy8gb3RoZXIgb2JqZWN0IC0gaWdub3JlXG4gICAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZcbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBlbHNlXG4gICAgcmV0dXJuIG9ic2VydmFibGUuYm94KHYsIGFyZzIpXG59XG5hc3NpZ24oY3JlYXRlT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZURlY29yYXRvckFubm90YXRpb24pXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVWYWx1ZUZhY3Rvcnkge1xuICAgIDxUPih2YWx1ZTogVCwgb3B0aW9ucz86IENyZWF0ZU9ic2VydmFibGVPcHRpb25zKTogSU9ic2VydmFibGVWYWx1ZTxUPlxuICAgIDxUPih2YWx1ZT86IFQsIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk6IElPYnNlcnZhYmxlVmFsdWU8VCB8IHVuZGVmaW5lZD5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUZhY3RvcnkgZXh0ZW5kcyBBbm5vdGF0aW9uLCBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgPFQgPSBhbnk+KHZhbHVlOiBUW10sIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk6IElPYnNlcnZhYmxlQXJyYXk8VD5cbiAgICA8VCA9IGFueT4odmFsdWU6IFNldDxUPiwgb3B0aW9ucz86IENyZWF0ZU9ic2VydmFibGVPcHRpb25zKTogT2JzZXJ2YWJsZVNldDxUPlxuICAgIDxLID0gYW55LCBWID0gYW55Pih2YWx1ZTogTWFwPEssIFY+LCBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpOiBPYnNlcnZhYmxlTWFwPEssIFY+XG4gICAgPFQgZXh0ZW5kcyBvYmplY3Q+KFxuICAgICAgICB2YWx1ZTogVCxcbiAgICAgICAgZGVjb3JhdG9ycz86IEFubm90YXRpb25zTWFwPFQsIG5ldmVyPixcbiAgICAgICAgb3B0aW9ucz86IENyZWF0ZU9ic2VydmFibGVPcHRpb25zXG4gICAgKTogVFxuXG4gICAgYm94OiBJT2JzZXJ2YWJsZVZhbHVlRmFjdG9yeVxuICAgIGFycmF5OiA8VCA9IGFueT4oaW5pdGlhbFZhbHVlcz86IFRbXSwgb3B0aW9ucz86IENyZWF0ZU9ic2VydmFibGVPcHRpb25zKSA9PiBJT2JzZXJ2YWJsZUFycmF5PFQ+XG4gICAgc2V0OiA8VCA9IGFueT4oXG4gICAgICAgIGluaXRpYWxWYWx1ZXM/OiBJT2JzZXJ2YWJsZVNldEluaXRpYWxWYWx1ZXM8VD4sXG4gICAgICAgIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9uc1xuICAgICkgPT4gT2JzZXJ2YWJsZVNldDxUPlxuICAgIG1hcDogPEsgPSBhbnksIFYgPSBhbnk+KFxuICAgICAgICBpbml0aWFsVmFsdWVzPzogSU9ic2VydmFibGVNYXBJbml0aWFsVmFsdWVzPEssIFY+LFxuICAgICAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbiAgICApID0+IE9ic2VydmFibGVNYXA8SywgVj5cbiAgICBvYmplY3Q6IDxUID0gYW55PihcbiAgICAgICAgcHJvcHM6IFQsXG4gICAgICAgIGRlY29yYXRvcnM/OiBBbm5vdGF0aW9uc01hcDxULCBuZXZlcj4sXG4gICAgICAgIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9uc1xuICAgICkgPT4gVFxuXG4gICAgLyoqXG4gICAgICogRGVjb3JhdG9yIHRoYXQgY3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgb25seSBvYnNlcnZlcyB0aGUgcmVmZXJlbmNlcywgYnV0IGRvZXNuJ3QgdHJ5IHRvIHR1cm4gdGhlIGFzc2lnbmVkIHZhbHVlIGludG8gYW4gb2JzZXJ2YWJsZS50cy5cbiAgICAgKi9cbiAgICByZWY6IEFubm90YXRpb24gJiBQcm9wZXJ0eURlY29yYXRvclxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciB0aGF0IGNyZWF0ZXMgYW4gb2JzZXJ2YWJsZSBjb252ZXJ0cyBpdHMgdmFsdWUgKG9iamVjdHMsIG1hcHMgb3IgYXJyYXlzKSBpbnRvIGEgc2hhbGxvdyBvYnNlcnZhYmxlIHN0cnVjdHVyZVxuICAgICAqL1xuICAgIHNoYWxsb3c6IEFubm90YXRpb24gJiBQcm9wZXJ0eURlY29yYXRvclxuICAgIGRlZXA6IEFubm90YXRpb24gJiBQcm9wZXJ0eURlY29yYXRvclxuICAgIHN0cnVjdDogQW5ub3RhdGlvbiAmIFByb3BlcnR5RGVjb3JhdG9yXG59XG5cbmNvbnN0IG9ic2VydmFibGVGYWN0b3JpZXM6IElPYnNlcnZhYmxlRmFjdG9yeSA9IHtcbiAgICBib3g8VCA9IGFueT4odmFsdWU6IFQsIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk6IElPYnNlcnZhYmxlVmFsdWU8VD4ge1xuICAgICAgICBjb25zdCBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lLCB0cnVlLCBvLmVxdWFscylcbiAgICB9LFxuICAgIGFycmF5PFQgPSBhbnk+KGluaXRpYWxWYWx1ZXM/OiBUW10sIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk6IElPYnNlcnZhYmxlQXJyYXk8VD4ge1xuICAgICAgICBjb25zdCBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUudXNlUHJveGllcyA9PT0gZmFsc2UgfHwgby5wcm94eSA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICA/IGNyZWF0ZUxlZ2FjeUFycmF5XG4gICAgICAgICAgICAgICAgOiBjcmVhdGVPYnNlcnZhYmxlQXJyYXlcbiAgICAgICAgKShpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpXG4gICAgfSxcbiAgICBtYXA8SyA9IGFueSwgViA9IGFueT4oXG4gICAgICAgIGluaXRpYWxWYWx1ZXM/OiBJT2JzZXJ2YWJsZU1hcEluaXRpYWxWYWx1ZXM8SywgVj4sXG4gICAgICAgIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9uc1xuICAgICk6IE9ic2VydmFibGVNYXA8SywgVj4ge1xuICAgICAgICBjb25zdCBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXA8SywgVj4oaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKVxuICAgIH0sXG4gICAgc2V0PFQgPSBhbnk+KFxuICAgICAgICBpbml0aWFsVmFsdWVzPzogSU9ic2VydmFibGVTZXRJbml0aWFsVmFsdWVzPFQ+LFxuICAgICAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbiAgICApOiBPYnNlcnZhYmxlU2V0PFQ+IHtcbiAgICAgICAgY29uc3QgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlU2V0PFQ+KGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSlcbiAgICB9LFxuICAgIG9iamVjdDxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PihcbiAgICAgICAgcHJvcHM6IFQsXG4gICAgICAgIGRlY29yYXRvcnM/OiBBbm5vdGF0aW9uc01hcDxULCBuZXZlcj4sXG4gICAgICAgIG9wdGlvbnM/OiBDcmVhdGVPYnNlcnZhYmxlT3B0aW9uc1xuICAgICk6IFQge1xuICAgICAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZShcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnVzZVByb3hpZXMgPT09IGZhbHNlIHx8IG9wdGlvbnM/LnByb3h5ID09PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gYXNPYnNlcnZhYmxlT2JqZWN0KHt9LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIDogYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCh7fSwgb3B0aW9ucyksXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIGRlY29yYXRvcnNcbiAgICAgICAgKVxuICAgIH0sXG4gICAgcmVmOiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVSZWZBbm5vdGF0aW9uKSxcbiAgICBzaGFsbG93OiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVTaGFsbG93QW5ub3RhdGlvbiksXG4gICAgZGVlcDogb2JzZXJ2YWJsZURlY29yYXRvckFubm90YXRpb24sXG4gICAgc3RydWN0OiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVTdHJ1Y3RBbm5vdGF0aW9uKVxufSBhcyBhbnlcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgdmFyIG9ic2VydmFibGU6IElPYnNlcnZhYmxlRmFjdG9yeSA9IGFzc2lnbihjcmVhdGVPYnNlcnZhYmxlLCBvYnNlcnZhYmxlRmFjdG9yaWVzKVxuIiwiaW1wb3J0IHtcbiAgICBDb21wdXRlZFZhbHVlLFxuICAgIElDb21wdXRlZFZhbHVlT3B0aW9ucyxcbiAgICBBbm5vdGF0aW9uLFxuICAgIHN0b3JlQW5ub3RhdGlvbixcbiAgICBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uLFxuICAgIGlzU3RyaW5naXNoLFxuICAgIGlzUGxhaW5PYmplY3QsXG4gICAgaXNGdW5jdGlvbixcbiAgICBkaWUsXG4gICAgSUNvbXB1dGVkVmFsdWUsXG4gICAgY3JlYXRlQ29tcHV0ZWRBbm5vdGF0aW9uLFxuICAgIGNvbXBhcmVyXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBjb25zdCBDT01QVVRFRCA9IFwiY29tcHV0ZWRcIlxuZXhwb3J0IGNvbnN0IENPTVBVVEVEX1NUUlVDVCA9IFwiY29tcHV0ZWQuc3RydWN0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29tcHV0ZWRGYWN0b3J5IGV4dGVuZHMgQW5ub3RhdGlvbiwgUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIC8vIEBjb21wdXRlZChvcHRzKVxuICAgIDxUPihvcHRpb25zOiBJQ29tcHV0ZWRWYWx1ZU9wdGlvbnM8VD4pOiBBbm5vdGF0aW9uICYgUHJvcGVydHlEZWNvcmF0b3JcbiAgICAvLyBjb21wdXRlZChmbiwgb3B0cylcbiAgICA8VD4oZnVuYzogKCkgPT4gVCwgb3B0aW9ucz86IElDb21wdXRlZFZhbHVlT3B0aW9uczxUPik6IElDb21wdXRlZFZhbHVlPFQ+XG5cbiAgICBzdHJ1Y3Q6IEFubm90YXRpb24gJiBQcm9wZXJ0eURlY29yYXRvclxufVxuXG5jb25zdCBjb21wdXRlZEFubm90YXRpb24gPSBjcmVhdGVDb21wdXRlZEFubm90YXRpb24oQ09NUFVURUQpXG5jb25zdCBjb21wdXRlZFN0cnVjdEFubm90YXRpb24gPSBjcmVhdGVDb21wdXRlZEFubm90YXRpb24oQ09NUFVURURfU1RSVUNULCB7XG4gICAgZXF1YWxzOiBjb21wYXJlci5zdHJ1Y3R1cmFsXG59KVxuXG4vKipcbiAqIERlY29yYXRvciBmb3IgY2xhc3MgcHJvcGVydGllczogQGNvbXB1dGVkIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGV4cHI7IH0uXG4gKiBGb3IgbGVnYWN5IHB1cnBvc2VzIGFsc28gaW52b2thYmxlIGFzIEVTNSBvYnNlcnZhYmxlIGNyZWF0ZWQ6IGBjb21wdXRlZCgoKSA9PiBleHByKWA7XG4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlZDogSUNvbXB1dGVkRmFjdG9yeSA9IGZ1bmN0aW9uIGNvbXB1dGVkKGFyZzEsIGFyZzIpIHtcbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICAgICAgLy8gQGNvbXB1dGVkXG4gICAgICAgIHJldHVybiBzdG9yZUFubm90YXRpb24oYXJnMSwgYXJnMiwgY29tcHV0ZWRBbm5vdGF0aW9uKVxuICAgIH1cbiAgICBpZiAoaXNQbGFpbk9iamVjdChhcmcxKSkge1xuICAgICAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXG4gICAgICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGNyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihDT01QVVRFRCwgYXJnMSkpXG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZWQoZXhwciwgb3B0aW9ucz8pXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGFyZzEpKSB7XG4gICAgICAgICAgICBkaWUoXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLlwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGFyZzIpKSB7XG4gICAgICAgICAgICBkaWUoXG4gICAgICAgICAgICAgICAgXCJBIHNldHRlciBhcyBzZWNvbmQgYXJndW1lbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCwgdXNlIGB7IHNldDogZm4gfWAgb3B0aW9uIGluc3RlYWRcIlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9wdHM6IElDb21wdXRlZFZhbHVlT3B0aW9uczxhbnk+ID0gaXNQbGFpbk9iamVjdChhcmcyKSA/IGFyZzIgOiB7fVxuICAgIG9wdHMuZ2V0ID0gYXJnMVxuICAgIG9wdHMubmFtZSB8fD0gYXJnMS5uYW1lIHx8IFwiXCIgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG5cbiAgICByZXR1cm4gbmV3IENvbXB1dGVkVmFsdWUob3B0cylcbn0gYXMgYW55XG5cbk9iamVjdC5hc3NpZ24oY29tcHV0ZWQsIGNvbXB1dGVkQW5ub3RhdGlvbilcblxuY29tcHV0ZWQuc3RydWN0ID0gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihjb21wdXRlZFN0cnVjdEFubm90YXRpb24pXG4iLCJpbXBvcnQge1xuICAgIElEZXJpdmF0aW9uLFxuICAgIGVuZEJhdGNoLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIGlzU3B5RW5hYmxlZCxcbiAgICBzcHlSZXBvcnRFbmQsXG4gICAgc3B5UmVwb3J0U3RhcnQsXG4gICAgc3RhcnRCYXRjaCxcbiAgICB1bnRyYWNrZWRFbmQsXG4gICAgdW50cmFja2VkU3RhcnQsXG4gICAgaXNGdW5jdGlvbixcbiAgICBhbGxvd1N0YXRlUmVhZHNTdGFydCxcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQsXG4gICAgQUNUSU9OLFxuICAgIEVNUFRZX0FSUkFZLFxuICAgIGRpZSxcbiAgICBnZXREZXNjcmlwdG9yLFxuICAgIGRlZmluZVByb3BlcnR5XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbi8vIHdlIGRvbid0IHVzZSBnbG9iYWxTdGF0ZSBmb3IgdGhlc2UgaW4gb3JkZXIgdG8gYXZvaWQgcG9zc2libGUgaXNzdWVzIHdpdGggbXVsdGlwbGVcbi8vIG1vYnggdmVyc2lvbnNcbmxldCBjdXJyZW50QWN0aW9uSWQgPSAwXG5sZXQgbmV4dEFjdGlvbklkID0gMVxuY29uc3QgaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUgPSBnZXREZXNjcmlwdG9yKCgpID0+IHt9LCBcIm5hbWVcIik/LmNvbmZpZ3VyYWJsZSA/PyBmYWxzZVxuXG4vLyB3ZSBjYW4gc2FmZWx5IHJlY3ljbGUgdGhpcyBvYmplY3RcbmNvbnN0IHRtcE5hbWVEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gICAgdmFsdWU6IFwiYWN0aW9uXCIsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uKFxuICAgIGFjdGlvbk5hbWU6IHN0cmluZyxcbiAgICBmbjogRnVuY3Rpb24sXG4gICAgYXV0b0FjdGlvbjogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHJlZj86IE9iamVjdFxuKTogRnVuY3Rpb24ge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIGRpZShcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25OYW1lICE9PSBcInN0cmluZ1wiIHx8ICFhY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBkaWUoYGFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJyR7YWN0aW9uTmFtZX0nYClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXMoKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGF1dG9BY3Rpb24sIGZuLCByZWYgfHwgdGhpcywgYXJndW1lbnRzKVxuICAgIH1cbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZVxuICAgIGlmIChpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSkge1xuICAgICAgICB0bXBOYW1lRGVzY3JpcHRvci52YWx1ZSA9IGFjdGlvbk5hbWVcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocmVzLCBcIm5hbWVcIiwgdG1wTmFtZURlc2NyaXB0b3IpXG4gICAgfVxuICAgIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGNhblJ1bkFzRGVyaXZhdGlvbjogYm9vbGVhbixcbiAgICBmbjogRnVuY3Rpb24sXG4gICAgc2NvcGU/OiBhbnksXG4gICAgYXJncz86IElBcmd1bWVudHNcbikge1xuICAgIGNvbnN0IHJ1bkluZm8gPSBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgY2FuUnVuQXNEZXJpdmF0aW9uLCBzY29wZSwgYXJncylcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJ1bkluZm8uZXJyb3JfID0gZXJyXG4gICAgICAgIHRocm93IGVyclxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9lbmRBY3Rpb24ocnVuSW5mbylcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvblJ1bkluZm8ge1xuICAgIHByZXZEZXJpdmF0aW9uXzogSURlcml2YXRpb24gfCBudWxsXG4gICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzXzogYm9vbGVhblxuICAgIHByZXZBbGxvd1N0YXRlUmVhZHNfOiBib29sZWFuXG4gICAgbm90aWZ5U3B5XzogYm9vbGVhblxuICAgIHN0YXJ0VGltZV86IG51bWJlclxuICAgIGVycm9yXz86IGFueVxuICAgIHBhcmVudEFjdGlvbklkXzogbnVtYmVyXG4gICAgYWN0aW9uSWRfOiBudW1iZXJcbiAgICBydW5Bc0FjdGlvbl8/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfc3RhcnRBY3Rpb24oXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGNhblJ1bkFzRGVyaXZhdGlvbjogYm9vbGVhbiwgLy8gdHJ1ZSBmb3IgYXV0b0FjdGlvblxuICAgIHNjb3BlOiBhbnksXG4gICAgYXJncz86IElBcmd1bWVudHNcbik6IElBY3Rpb25SdW5JbmZvIHtcbiAgICBjb25zdCBub3RpZnlTcHlfID0gX19ERVZfXyAmJiBpc1NweUVuYWJsZWQoKSAmJiAhIWFjdGlvbk5hbWVcbiAgICBsZXQgc3RhcnRUaW1lXzogbnVtYmVyID0gMFxuICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweV8pIHtcbiAgICAgICAgc3RhcnRUaW1lXyA9IERhdGUubm93KClcbiAgICAgICAgY29uc3QgZmxhdHRlbmVkQXJncyA9IGFyZ3MgPyBBcnJheS5mcm9tKGFyZ3MpIDogRU1QVFlfQVJSQVlcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OLFxuICAgICAgICAgICAgbmFtZTogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG9iamVjdDogc2NvcGUsXG4gICAgICAgICAgICBhcmd1bWVudHM6IGZsYXR0ZW5lZEFyZ3NcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgcHJldkRlcml2YXRpb25fID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uXG4gICAgY29uc3QgcnVuQXNBY3Rpb24gPSAhY2FuUnVuQXNEZXJpdmF0aW9uIHx8ICFwcmV2RGVyaXZhdGlvbl9cbiAgICBzdGFydEJhdGNoKClcbiAgICBsZXQgcHJldkFsbG93U3RhdGVDaGFuZ2VzXyA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzIC8vIGJ5IGRlZmF1bHQgcHJlc2VydmUgcHJldmlvdXMgYWxsb3dcbiAgICBpZiAocnVuQXNBY3Rpb24pIHtcbiAgICAgICAgdW50cmFja2VkU3RhcnQoKVxuICAgICAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKVxuICAgIH1cbiAgICBjb25zdCBwcmV2QWxsb3dTdGF0ZVJlYWRzXyA9IGFsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpXG4gICAgY29uc3QgcnVuSW5mbyA9IHtcbiAgICAgICAgcnVuQXNBY3Rpb25fOiBydW5Bc0FjdGlvbixcbiAgICAgICAgcHJldkRlcml2YXRpb25fLFxuICAgICAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfLFxuICAgICAgICBwcmV2QWxsb3dTdGF0ZVJlYWRzXyxcbiAgICAgICAgbm90aWZ5U3B5XyxcbiAgICAgICAgc3RhcnRUaW1lXyxcbiAgICAgICAgYWN0aW9uSWRfOiBuZXh0QWN0aW9uSWQrKyxcbiAgICAgICAgcGFyZW50QWN0aW9uSWRfOiBjdXJyZW50QWN0aW9uSWRcbiAgICB9XG4gICAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5hY3Rpb25JZF9cbiAgICByZXR1cm4gcnVuSW5mb1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvOiBJQWN0aW9uUnVuSW5mbykge1xuICAgIGlmIChjdXJyZW50QWN0aW9uSWQgIT09IHJ1bkluZm8uYWN0aW9uSWRfKSB7XG4gICAgICAgIGRpZSgzMClcbiAgICB9XG4gICAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5wYXJlbnRBY3Rpb25JZF9cblxuICAgIGlmIChydW5JbmZvLmVycm9yXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSB0cnVlXG4gICAgfVxuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzXylcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzXylcbiAgICBlbmRCYXRjaCgpXG4gICAgaWYgKHJ1bkluZm8ucnVuQXNBY3Rpb25fKSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChydW5JbmZvLnByZXZEZXJpdmF0aW9uXylcbiAgICB9XG4gICAgaWYgKF9fREVWX18gJiYgcnVuSW5mby5ub3RpZnlTcHlfKSB7XG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZV8gfSlcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlczxUPihhbGxvd1N0YXRlQ2hhbmdlczogYm9vbGVhbiwgZnVuYzogKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmdW5jKClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXNcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzXG4gICAgcmV0dXJuIHByZXZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXY6IGJvb2xlYW4pIHtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXZcbn1cbiIsImltcG9ydCB7XG4gICAgQXRvbSxcbiAgICBJRW5oYW5jZXIsXG4gICAgSUludGVyY2VwdGFibGUsXG4gICAgSUVxdWFsc0NvbXBhcmVyLFxuICAgIElJbnRlcmNlcHRvcixcbiAgICBJTGlzdGVuYWJsZSxcbiAgICBMYW1iZGEsXG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQsXG4gICAgY29tcGFyZXIsXG4gICAgY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSxcbiAgICBnZXROZXh0SWQsXG4gICAgaGFzSW50ZXJjZXB0b3JzLFxuICAgIGhhc0xpc3RlbmVycyxcbiAgICBpbnRlcmNlcHRDaGFuZ2UsXG4gICAgaXNTcHlFbmFibGVkLFxuICAgIG5vdGlmeUxpc3RlbmVycyxcbiAgICByZWdpc3RlckludGVyY2VwdG9yLFxuICAgIHJlZ2lzdGVyTGlzdGVuZXIsXG4gICAgc3B5UmVwb3J0LFxuICAgIHNweVJlcG9ydEVuZCxcbiAgICBzcHlSZXBvcnRTdGFydCxcbiAgICB0b1ByaW1pdGl2ZSxcbiAgICBnbG9iYWxTdGF0ZSxcbiAgICBJVU5DSEFOR0VELFxuICAgIFVQREFURVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZVdpbGxDaGFuZ2U8VD4ge1xuICAgIG9iamVjdDogSU9ic2VydmFibGVWYWx1ZTxUPlxuICAgIHR5cGU6IFwidXBkYXRlXCJcbiAgICBuZXdWYWx1ZTogVFxufVxuXG5leHBvcnQgdHlwZSBJVmFsdWVEaWRDaGFuZ2U8VCA9IGFueT4gPSB7XG4gICAgdHlwZTogXCJ1cGRhdGVcIlxuICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCJcbiAgICBvYmplY3Q6IElPYnNlcnZhYmxlVmFsdWU8VD5cbiAgICBkZWJ1Z09iamVjdE5hbWU6IHN0cmluZ1xuICAgIG5ld1ZhbHVlOiBUXG4gICAgb2xkVmFsdWU6IFQgfCB1bmRlZmluZWRcbn1cbmV4cG9ydCB0eXBlIElCb3hEaWRDaGFuZ2U8VCA9IGFueT4gPVxuICAgIHwge1xuICAgICAgICAgIHR5cGU6IFwiY3JlYXRlXCJcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJ2YWx1ZVwiXG4gICAgICAgICAgb2JqZWN0OiBJT2JzZXJ2YWJsZVZhbHVlPFQ+XG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiBzdHJpbmdcbiAgICAgICAgICBuZXdWYWx1ZTogVFxuICAgICAgfVxuICAgIHwgSVZhbHVlRGlkQ2hhbmdlPFQ+XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVWYWx1ZTxUPiB7XG4gICAgZ2V0KCk6IFRcbiAgICBzZXQodmFsdWU6IFQpOiB2b2lkXG59XG5cbmNvbnN0IENSRUFURSA9IFwiY3JlYXRlXCJcblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVWYWx1ZTxUPlxuICAgIGV4dGVuZHMgQXRvbVxuICAgIGltcGxlbWVudHMgSU9ic2VydmFibGVWYWx1ZTxUPiwgSUludGVyY2VwdGFibGU8SVZhbHVlV2lsbENoYW5nZTxUPj4sIElMaXN0ZW5hYmxlXG57XG4gICAgaGFzVW5yZXBvcnRlZENoYW5nZV8gPSBmYWxzZVxuICAgIGludGVyY2VwdG9yc19cbiAgICBjaGFuZ2VMaXN0ZW5lcnNfXG4gICAgdmFsdWVfXG4gICAgZGVoYW5jZXI6IGFueVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHZhbHVlOiBULFxuICAgICAgICBwdWJsaWMgZW5oYW5jZXI6IElFbmhhbmNlcjxUPixcbiAgICAgICAgcHVibGljIG5hbWVfID0gX19ERVZfXyA/IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVWYWx1ZVwiLFxuICAgICAgICBub3RpZnlTcHkgPSB0cnVlLFxuICAgICAgICBwcml2YXRlIGVxdWFsczogSUVxdWFsc0NvbXBhcmVyPGFueT4gPSBjb21wYXJlci5kZWZhdWx0XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG5hbWVfKVxuICAgICAgICB0aGlzLnZhbHVlXyA9IGVuaGFuY2VyKHZhbHVlLCB1bmRlZmluZWQsIG5hbWVfKVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnlTcHkgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgbm90aWZ5IHNweSBpZiB0aGlzIGlzIGEgc3RhbmQtYWxvbmUgb2JzZXJ2YWJsZVxuICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBDUkVBVEUsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBcIlwiICsgdGhpcy52YWx1ZV9cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlaGFuY2VWYWx1ZSh2YWx1ZTogVCk6IFQge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KG5ld1ZhbHVlOiBUKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZV9cbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByZXBhcmVOZXdWYWx1ZV8obmV3VmFsdWUpIGFzIGFueVxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgY29uc3Qgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKClcbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk6IFQgfCBJVU5DSEFOR0VEIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcylcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlPElWYWx1ZVdpbGxDaGFuZ2U8VD4+KHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIGFwcGx5IG1vZGlmaWVyXG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcihuZXdWYWx1ZSwgdGhpcy52YWx1ZV8sIHRoaXMubmFtZV8pXG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlXywgbmV3VmFsdWUpID8gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEIDogbmV3VmFsdWVcbiAgICB9XG5cbiAgICBzZXROZXdWYWx1ZV8obmV3VmFsdWU6IFQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlX1xuICAgICAgICB0aGlzLnZhbHVlXyA9IG5ld1ZhbHVlXG4gICAgICAgIHRoaXMucmVwb3J0Q2hhbmdlZCgpXG4gICAgICAgIGlmIChoYXNMaXN0ZW5lcnModGhpcykpIHtcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoKTogVCB7XG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodGhpcy52YWx1ZV8pXG4gICAgfVxuXG4gICAgaW50ZXJjZXB0XyhoYW5kbGVyOiBJSW50ZXJjZXB0b3I8SVZhbHVlV2lsbENoYW5nZTxUPj4pOiBMYW1iZGEge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKVxuICAgIH1cblxuICAgIG9ic2VydmVfKGxpc3RlbmVyOiAoY2hhbmdlOiBJVmFsdWVEaWRDaGFuZ2U8VD4pID0+IHZvaWQsIGZpcmVJbW1lZGlhdGVseT86IGJvb2xlYW4pOiBMYW1iZGEge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGhpcy52YWx1ZV8sXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcilcbiAgICB9XG5cbiAgICByYXcoKSB7XG4gICAgICAgIC8vIHVzZWQgYnkgTVNUIG90IGdldCB1bmRlaGFuY2VkIHZhbHVlXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlX1xuICAgIH1cblxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KClcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZV99WyR7dGhpcy52YWx1ZV99XWBcbiAgICB9XG5cbiAgICB2YWx1ZU9mKCk6IFQge1xuICAgICAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSlcbiAgICB9XG5cbiAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNPYnNlcnZhYmxlVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSkgYXMgKFxuICAgIHg6IGFueVxuKSA9PiB4IGlzIElPYnNlcnZhYmxlVmFsdWU8YW55PlxuIiwiaW1wb3J0IHtcbiAgICBDYXVnaHRFeGNlcHRpb24sXG4gICAgSURlcml2YXRpb24sXG4gICAgSURlcml2YXRpb25TdGF0ZV8sXG4gICAgSUVxdWFsc0NvbXBhcmVyLFxuICAgIElPYnNlcnZhYmxlLFxuICAgIExhbWJkYSxcbiAgICBUcmFjZU1vZGUsXG4gICAgYXV0b3J1bixcbiAgICBjbGVhck9ic2VydmluZyxcbiAgICBjb21wYXJlcixcbiAgICBjcmVhdGVBY3Rpb24sXG4gICAgY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSxcbiAgICBlbmRCYXRjaCxcbiAgICBnZXROZXh0SWQsXG4gICAgZ2xvYmFsU3RhdGUsXG4gICAgaXNDYXVnaHRFeGNlcHRpb24sXG4gICAgaXNTcHlFbmFibGVkLFxuICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCxcbiAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQsXG4gICAgcmVwb3J0T2JzZXJ2ZWQsXG4gICAgc2hvdWxkQ29tcHV0ZSxcbiAgICBzcHlSZXBvcnQsXG4gICAgc3RhcnRCYXRjaCxcbiAgICB0b1ByaW1pdGl2ZSxcbiAgICB0cmFja0Rlcml2ZWRGdW5jdGlvbixcbiAgICB1bnRyYWNrZWRFbmQsXG4gICAgdW50cmFja2VkU3RhcnQsXG4gICAgVVBEQVRFLFxuICAgIGRpZSxcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0LFxuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXB1dGVkVmFsdWU8VD4ge1xuICAgIGdldCgpOiBUXG4gICAgc2V0KHZhbHVlOiBUKTogdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb21wdXRlZFZhbHVlT3B0aW9uczxUPiB7XG4gICAgZ2V0PzogKCkgPT4gVFxuICAgIHNldD86ICh2YWx1ZTogVCkgPT4gdm9pZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBlcXVhbHM/OiBJRXF1YWxzQ29tcGFyZXI8VD5cbiAgICBjb250ZXh0PzogYW55XG4gICAgcmVxdWlyZXNSZWFjdGlvbj86IGJvb2xlYW5cbiAgICBrZWVwQWxpdmU/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIElDb21wdXRlZERpZENoYW5nZTxUID0gYW55PiA9IHtcbiAgICB0eXBlOiBcInVwZGF0ZVwiXG4gICAgb2JzZXJ2YWJsZUtpbmQ6IFwiY29tcHV0ZWRcIlxuICAgIG9iamVjdDogdW5rbm93blxuICAgIGRlYnVnT2JqZWN0TmFtZTogc3RyaW5nXG4gICAgbmV3VmFsdWU6IFRcbiAgICBvbGRWYWx1ZTogVCB8IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxuICpcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxuICpcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XG4gKlxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wdXRlZFZhbHVlPFQ+IGltcGxlbWVudHMgSU9ic2VydmFibGUsIElDb21wdXRlZFZhbHVlPFQ+LCBJRGVyaXZhdGlvbiB7XG4gICAgZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HX1xuICAgIG9ic2VydmluZ186IElPYnNlcnZhYmxlW10gPSBbXSAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgICBuZXdPYnNlcnZpbmdfID0gbnVsbCAvLyBkdXJpbmcgdHJhY2tpbmcgaXQncyBhbiBhcnJheSB3aXRoIG5ldyBvYnNlcnZlZCBvYnNlcnZlcnNcbiAgICBpc0JlaW5nT2JzZXJ2ZWRfID0gZmFsc2VcbiAgICBpc1BlbmRpbmdVbm9ic2VydmF0aW9uXzogYm9vbGVhbiA9IGZhbHNlXG4gICAgb2JzZXJ2ZXJzXyA9IG5ldyBTZXQ8SURlcml2YXRpb24+KClcbiAgICBkaWZmVmFsdWVfID0gMFxuICAgIHJ1bklkXyA9IDBcbiAgICBsYXN0QWNjZXNzZWRCeV8gPSAwXG4gICAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFX1xuICAgIHVuYm91bmREZXBzQ291bnRfID0gMFxuICAgIHByb3RlY3RlZCB2YWx1ZV86IFQgfCB1bmRlZmluZWQgfCBDYXVnaHRFeGNlcHRpb24gPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKG51bGwpXG4gICAgbmFtZV86IHN0cmluZ1xuICAgIHRyaWdnZXJlZEJ5Xz86IHN0cmluZ1xuICAgIGlzQ29tcHV0aW5nXzogYm9vbGVhbiA9IGZhbHNlIC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgICBpc1J1bm5pbmdTZXR0ZXJfOiBib29sZWFuID0gZmFsc2VcbiAgICBkZXJpdmF0aW9uOiAoKSA9PiBUIC8vIE4uQjogdW5taW5pZmllZCBhcyBpdCBpcyB1c2VkIGJ5IE1TVFxuICAgIHNldHRlcl8/OiAodmFsdWU6IFQpID0+IHZvaWRcbiAgICBpc1RyYWNpbmdfOiBUcmFjZU1vZGUgPSBUcmFjZU1vZGUuTk9ORVxuICAgIHNjb3BlXzogT2JqZWN0IHwgdW5kZWZpbmVkXG4gICAgcHJpdmF0ZSBlcXVhbHNfOiBJRXF1YWxzQ29tcGFyZXI8YW55PlxuICAgIHByaXZhdGUgcmVxdWlyZXNSZWFjdGlvbl86IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBrZWVwQWxpdmVfOiBib29sZWFuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgdmFsdWUgYmFzZWQgb24gYSBmdW5jdGlvbiBleHByZXNzaW9uLlxuICAgICAqXG4gICAgICogVGhlIGBuYW1lYCBwcm9wZXJ0eSBpcyBmb3IgZGVidWcgcHVycG9zZXMgb25seS5cbiAgICAgKlxuICAgICAqIFRoZSBgZXF1YWxzYCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGNvbXBhcmVyIGZ1bmN0aW9uIHRvIHVzZSB0byBkZXRlcm1pbmUgaWYgYSBuZXdseSBwcm9kdWNlZFxuICAgICAqIHZhbHVlIGRpZmZlcnMgZnJvbSB0aGUgcHJldmlvdXMgdmFsdWUuIFR3byBjb21wYXJlcnMgYXJlIHByb3ZpZGVkIGluIHRoZSBsaWJyYXJ5OyBgZGVmYXVsdENvbXBhcmVyYFxuICAgICAqIGNvbXBhcmVzIGJhc2VkIG9uIGlkZW50aXR5IGNvbXBhcmlzb24gKD09PSksIGFuZCBgc3RydWN0dXJhbENvbXBhcmVyYCBkZWVwbHkgY29tcGFyZXMgdGhlIHN0cnVjdHVyZS5cbiAgICAgKiBTdHJ1Y3R1cmFsIGNvbXBhcmlzb24gY2FuIGJlIGNvbnZlbmllbnQgaWYgeW91IGFsd2F5cyBwcm9kdWNlIGEgbmV3IGFnZ3JlZ2F0ZWQgb2JqZWN0IGFuZFxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHdvcmtpbmcgd2l0aCB2ZWN0b3JzLCBtb3VzZSBjb29yZGluYXRlcyBldGMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUNvbXB1dGVkVmFsdWVPcHRpb25zPFQ+KSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5nZXQpIHtcbiAgICAgICAgICAgIGRpZSgzMSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBvcHRpb25zLmdldCFcbiAgICAgICAgdGhpcy5uYW1lXyA9IG9wdGlvbnMubmFtZSB8fCAoX19ERVZfXyA/IFwiQ29tcHV0ZWRWYWx1ZUBcIiArIGdldE5leHRJZCgpIDogXCJDb21wdXRlZFZhbHVlXCIpXG4gICAgICAgIGlmIChvcHRpb25zLnNldCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0ZXJfID0gY3JlYXRlQWN0aW9uKFxuICAgICAgICAgICAgICAgIF9fREVWX18gPyB0aGlzLm5hbWVfICsgXCItc2V0dGVyXCIgOiBcIkNvbXB1dGVkVmFsdWUtc2V0dGVyXCIsXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zZXRcbiAgICAgICAgICAgICkgYXMgYW55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lcXVhbHNfID1cbiAgICAgICAgICAgIG9wdGlvbnMuZXF1YWxzIHx8XG4gICAgICAgICAgICAoKG9wdGlvbnMgYXMgYW55KS5jb21wYXJlU3RydWN0dXJhbCB8fCAob3B0aW9ucyBhcyBhbnkpLnN0cnVjdFxuICAgICAgICAgICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxuICAgICAgICAgICAgICAgIDogY29tcGFyZXIuZGVmYXVsdClcbiAgICAgICAgdGhpcy5zY29wZV8gPSBvcHRpb25zLmNvbnRleHRcbiAgICAgICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9IG9wdGlvbnMucmVxdWlyZXNSZWFjdGlvblxuICAgICAgICB0aGlzLmtlZXBBbGl2ZV8gPSAhIW9wdGlvbnMua2VlcEFsaXZlXG4gICAgfVxuXG4gICAgb25CZWNvbWVTdGFsZV8oKSB7XG4gICAgICAgIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCh0aGlzKVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJPTDogU2V0PExhbWJkYT4gfCB1bmRlZmluZWRcbiAgICBwdWJsaWMgb25CVU9MOiBTZXQ8TGFtYmRhPiB8IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIG9uQk8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQk9MKSB7XG4gICAgICAgICAgICB0aGlzLm9uQk9MLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJVTygpIHtcbiAgICAgICAgaWYgKHRoaXMub25CVU9MKSB7XG4gICAgICAgICAgICB0aGlzLm9uQlVPTC5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXG4gICAgICogV2lsbCBldmFsdWF0ZSBpdHMgY29tcHV0YXRpb24gZmlyc3QgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQoKTogVCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcHV0aW5nXykge1xuICAgICAgICAgICAgZGllKDMyLCB0aGlzLm5hbWVfLCB0aGlzLmRlcml2YXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCAmJlxuICAgICAgICAgICAgLy8gIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdHBpb24gJiZcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5zaXplID09PSAwICYmXG4gICAgICAgICAgICAhdGhpcy5rZWVwQWxpdmVfXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWRfKClcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoKCkgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV8gPSB0aGlzLmNvbXB1dGVWYWx1ZV8oZmFsc2UpXG4gICAgICAgICAgICAgICAgZW5kQmF0Y2goKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwb3J0T2JzZXJ2ZWQodGhpcylcbiAgICAgICAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZUcmFja2luZ0NvbnRleHQgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZWVwQWxpdmVfICYmICFwcmV2VHJhY2tpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKHRoaXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZUcmFja2luZ0NvbnRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnZhbHVlXyFcblxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgcmVzdWx0LmNhdXNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQodmFsdWU6IFQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGVyXykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nU2V0dGVyXykge1xuICAgICAgICAgICAgICAgIGRpZSgzMywgdGhpcy5uYW1lXylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IHRydWVcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0ZXJfLmNhbGwodGhpcy5zY29wZV8sIHZhbHVlKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlcl8gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGllKDM0LCB0aGlzLm5hbWVfKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tBbmRDb21wdXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBOLkI6IHVubWluaWZpZWQgYXMgaXQgaXMgdXNlZCBieSBNU1RcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlX1xuICAgICAgICBjb25zdCB3YXNTdXNwZW5kZWQgPVxuICAgICAgICAgICAgLyogc2VlICMxMjA4ICovIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWVfKHRydWUpXG5cbiAgICAgICAgY29uc3QgY2hhbmdlZCA9XG4gICAgICAgICAgICB3YXNTdXNwZW5kZWQgfHxcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG9sZFZhbHVlKSB8fFxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24obmV3VmFsdWUpIHx8XG4gICAgICAgICAgICAhdGhpcy5lcXVhbHNfKG9sZFZhbHVlLCBuZXdWYWx1ZSlcblxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZVxuXG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcImNvbXB1dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnNjb3BlXyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSBhcyBJQ29tcHV0ZWREaWRDaGFuZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhbmdlZFxuICAgIH1cblxuICAgIGNvbXB1dGVWYWx1ZV8odHJhY2s6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZ18gPSB0cnVlXG4gICAgICAgIC8vIGRvbid0IGFsbG93IHN0YXRlIGNoYW5nZXMgZHVyaW5nIGNvbXB1dGF0aW9uXG4gICAgICAgIGNvbnN0IHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGZhbHNlKVxuICAgICAgICBsZXQgcmVzOiBUIHwgQ2F1Z2h0RXhjZXB0aW9uXG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlXylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZV8pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGVfKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KVxuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IGZhbHNlXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICBzdXNwZW5kXygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtlZXBBbGl2ZV8pIHtcbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpXG4gICAgICAgICAgICB0aGlzLnZhbHVlXyA9IHVuZGVmaW5lZCAvLyBkb24ndCBob2xkIG9uIHRvIGNvbXB1dGVkIHZhbHVlIVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgdGhpcy5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgW21vYngudHJhY2VdIENvbXB1dGVkIHZhbHVlICcke3RoaXMubmFtZV99JyB3YXMgc3VzcGVuZGVkIGFuZCBpdCB3aWxsIHJlY29tcHV0ZSBvbiB0aGUgbmV4dCBhY2Nlc3MuYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ic2VydmVfKGxpc3RlbmVyOiAoY2hhbmdlOiBJQ29tcHV0ZWREaWRDaGFuZ2U8VD4pID0+IHZvaWQsIGZpcmVJbW1lZGlhdGVseT86IGJvb2xlYW4pOiBMYW1iZGEge1xuICAgICAgICBsZXQgZmlyc3RUaW1lID0gdHJ1ZVxuICAgICAgICBsZXQgcHJldlZhbHVlOiBUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBhdXRvcnVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IHdoeSBpcyB0aGlzIGluIGEgZGlmZmVyZW50IHBsYWNlIHRoYW4gdGhlIHNweVJlcG9ydCgpIGZ1bmN0aW9uPyBpbiBhbGwgb3RoZXIgb2JzZXJ2YWJsZXMgaXQncyBjYWxsZWQgaW4gdGhlIHNhbWUgcGxhY2VcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuZ2V0KClcbiAgICAgICAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZVID0gdW50cmFja2VkU3RhcnQoKVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiY29tcHV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHdhcm5BYm91dFVudHJhY2tlZFJlYWRfKCkge1xuICAgICAgICBpZiAoIV9fREVWX18pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgW21vYngudHJhY2VdIENvbXB1dGVkIHZhbHVlICcke3RoaXMubmFtZV99JyBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlLmBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9PT0gXCJib29sZWFuXCJcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVxdWlyZXNSZWFjdGlvbl9cbiAgICAgICAgICAgICAgICA6IGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgW21vYnhdIENvbXB1dGVkIHZhbHVlICcke3RoaXMubmFtZV99JyBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlLmBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lX31bJHt0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKX1dYFxuICAgIH1cblxuICAgIHZhbHVlT2YoKTogVCB7XG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSh0aGlzLmdldCgpKVxuICAgIH1cblxuICAgIFtTeW1ib2wudG9QcmltaXRpdmVdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBpc0NvbXB1dGVkVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKVxuIiwiaW1wb3J0IHtcbiAgICBJQXRvbSxcbiAgICBJRGVwVHJlZU5vZGUsXG4gICAgSU9ic2VydmFibGUsXG4gICAgYWRkT2JzZXJ2ZXIsXG4gICAgZ2xvYmFsU3RhdGUsXG4gICAgaXNDb21wdXRlZFZhbHVlLFxuICAgIHJlbW92ZU9ic2VydmVyXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBlbnVtIElEZXJpdmF0aW9uU3RhdGVfIHtcbiAgICAvLyBiZWZvcmUgYmVpbmcgcnVuIG9yIChvdXRzaWRlIGJhdGNoIGFuZCBub3QgYmVpbmcgb2JzZXJ2ZWQpXG4gICAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICAgIE5PVF9UUkFDS0lOR18gPSAtMSxcbiAgICAvLyBubyBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uXG4gICAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcbiAgICBVUF9UT19EQVRFXyA9IDAsXG4gICAgLy8gc29tZSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IGRvbid0IGtub3cgaWYgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWRcbiAgICAvLyB3aWxsIHJlcXVpcmUgdG8gY2hlY2sgZmlyc3QgaWYgVVBfVE9fREFURSBvciBQT1NTSUJMWV9TVEFMRVxuICAgIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgICAvL1xuICAgIC8vIGhhdmluZyB0aGlzIHN0YXRlIGlzIHNlY29uZCBiaWcgb3B0aW1pemF0aW9uOlxuICAgIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG4gICAgUE9TU0lCTFlfU1RBTEVfID0gMSxcbiAgICAvLyBBIHNoYWxsb3cgZGVwZW5kZW5jeSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uIGFuZCB0aGUgZGVyaXZhdGlvblxuICAgIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuICAgIFNUQUxFXyA9IDJcbn1cblxuZXhwb3J0IGVudW0gVHJhY2VNb2RlIHtcbiAgICBOT05FLFxuICAgIExPRyxcbiAgICBCUkVBS1xufVxuXG4vKipcbiAqIEEgZGVyaXZhdGlvbiBpcyBldmVyeXRoaW5nIHRoYXQgY2FuIGJlIGRlcml2ZWQgZnJvbSB0aGUgc3RhdGUgKGFsbCB0aGUgYXRvbXMpIGluIGEgcHVyZSBtYW5uZXIuXG4gKiBTZWUgaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEZXJpdmF0aW9uIGV4dGVuZHMgSURlcFRyZWVOb2RlIHtcbiAgICBvYnNlcnZpbmdfOiBJT2JzZXJ2YWJsZVtdXG4gICAgbmV3T2JzZXJ2aW5nXzogbnVsbCB8IElPYnNlcnZhYmxlW11cbiAgICBkZXBlbmRlbmNpZXNTdGF0ZV86IElEZXJpdmF0aW9uU3RhdGVfXG4gICAgLyoqXG4gICAgICogSWQgb2YgdGhlIGN1cnJlbnQgcnVuIG9mIGEgZGVyaXZhdGlvbi4gRWFjaCB0aW1lIHRoZSBkZXJpdmF0aW9uIGlzIHRyYWNrZWRcbiAgICAgKiB0aGlzIG51bWJlciBpcyBpbmNyZWFzZWQgYnkgb25lLiBUaGlzIG51bWJlciBpcyBnbG9iYWxseSB1bmlxdWVcbiAgICAgKi9cbiAgICBydW5JZF86IG51bWJlclxuICAgIC8qKlxuICAgICAqIGFtb3VudCBvZiBkZXBlbmRlbmNpZXMgdXNlZCBieSB0aGUgZGVyaXZhdGlvbiBpbiB0aGlzIHJ1biwgd2hpY2ggaGFzIG5vdCBiZWVuIGJvdW5kIHlldC5cbiAgICAgKi9cbiAgICB1bmJvdW5kRGVwc0NvdW50XzogbnVtYmVyXG4gICAgb25CZWNvbWVTdGFsZV8oKTogdm9pZFxuICAgIGlzVHJhY2luZ186IFRyYWNlTW9kZVxuXG4gICAgLyoqXG4gICAgICogIHdhcm4gaWYgdGhlIGRlcml2YXRpb24gaGFzIG5vIGRlcGVuZGVuY2llcyBhZnRlciBjcmVhdGlvbi91cGRhdGVcbiAgICAgKi9cbiAgICByZXF1aXJlc09ic2VydmFibGVfPzogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgQ2F1Z2h0RXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2F1c2U6IGFueSkge1xuICAgICAgICAvLyBFbXB0eVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2F1Z2h0RXhjZXB0aW9uKGU6IGFueSk6IGUgaXMgQ2F1Z2h0RXhjZXB0aW9uIHtcbiAgICByZXR1cm4gZSBpbnN0YW5jZW9mIENhdWdodEV4Y2VwdGlvblxufVxuXG4vKipcbiAqIEZpbmRzIG91dCB3aGV0aGVyIGFueSBkZXBlbmRlbmN5IG9mIHRoZSBkZXJpdmF0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxuICogaWYgYW55IGRlcGVuZGVuY3kgY2hhbmdlZCBpdCB3aWxsIHByb3BhZ2F0ZSBpdCBieSBjaGFuZ2luZyBkZXBlbmRlbmNpZXNTdGF0ZSB0byAyLlxuICpcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXG4gKiBzdG9wcGluZyBvbiB0aGUgZmlyc3QgY2hhbmdlLCBhbGwgdGhlIHJlY2FsY3VsYXRpb25zIGFyZSBvbmx5IGNhbGxlZCBmb3IgQ29tcHV0ZWRWYWx1ZXNcbiAqIHRoYXQgd2lsbCBiZSB0cmFja2VkIGJ5IGRlcml2YXRpb24uIFRoYXQgaXMgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBpZiB0aGUgZmlyc3QgeFxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcbiAqIHVwIHVudGlsIGFjY2Vzc2luZyB4LXRoIGRlcGVuZGVuY3kuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRDb21wdXRlKGRlcml2YXRpb246IElEZXJpdmF0aW9uKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXykge1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfOlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXzpcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV86XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlBPU1NJQkxZX1NUQUxFXzoge1xuICAgICAgICAgICAgLy8gc3RhdGUgcHJvcGFnYXRpb24gY2FuIG9jY3VyIG91dHNpZGUgb2YgYWN0aW9uL3JlYWN0aXZlIGNvbnRleHQgIzIxOTVcbiAgICAgICAgICAgIGNvbnN0IHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKVxuICAgICAgICAgICAgY29uc3QgcHJldlVudHJhY2tlZCA9IHVudHJhY2tlZFN0YXJ0KCkgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuICAgICAgICAgICAgY29uc3Qgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmdfLFxuICAgICAgICAgICAgICAgIGwgPSBvYnMubGVuZ3RoXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IG9ic1tpXVxuICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkVmFsdWUob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBub3QgaW50ZXJlc3RlZCBpbiB0aGUgdmFsdWUgKm9yKiBleGNlcHRpb24gYXQgdGhpcyBtb21lbnQsIGJ1dCBpZiB0aGVyZSBpcyBvbmUsIG5vdGlmeSBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIENvbXB1dGVkVmFsdWUgYG9iamAgYWN0dWFsbHkgY2hhbmdlZCBpdCB3aWxsIGJlIGNvbXB1dGVkIGFuZCBwcm9wYWdhdGVkIHRvIGl0cyBvYnNlcnZlcnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfIGFzIGFueSkgPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKVxuICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpXG4gICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wdXRpbmdEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gIT09IG51bGwgLy8gZmlsdGVyIG91dCBhY3Rpb25zIGluc2lkZSBjb21wdXRhdGlvbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGF0b206IElBdG9tKSB7XG4gICAgaWYgKCFfX0RFVl9fKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVyc18uc2l6ZSA+IDBcbiAgICAvLyBTaG91bGQgbm90IGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBvYnNlcnZlZCBzdGF0ZSBvdXRzaWRlIHN0cmljdCBtb2RlLCBleGNlcHQgZHVyaW5nIGluaXRpYWxpemF0aW9uLCBzZWUgIzU2M1xuICAgIGlmIChcbiAgICAgICAgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzICYmXG4gICAgICAgIChoYXNPYnNlcnZlcnMgfHwgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPT09IFwiYWx3YXlzXCIpXG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiW01vYlhdIFwiICtcbiAgICAgICAgICAgICAgICAoZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBcIlNpbmNlIHN0cmljdC1tb2RlIGlzIGVuYWJsZWQsIGNoYW5naW5nIChvYnNlcnZlZCkgb2JzZXJ2YWJsZSB2YWx1ZXMgd2l0aG91dCB1c2luZyBhbiBhY3Rpb24gaXMgbm90IGFsbG93ZWQuIFRyaWVkIHRvIG1vZGlmeTogXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlNpZGUgZWZmZWN0cyBsaWtlIGNoYW5naW5nIHN0YXRlIGFyZSBub3QgYWxsb3dlZCBhdCB0aGlzIHBvaW50LiBBcmUgeW91IHRyeWluZyB0byBtb2RpZnkgc3RhdGUgZnJvbSwgZm9yIGV4YW1wbGUsIGEgY29tcHV0ZWQgdmFsdWUgb3IgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gWW91IGNhbiB3cmFwIHNpZGUgZWZmZWN0cyBpbiAncnVuSW5BY3Rpb24nIChvciBkZWNvcmF0ZSBmdW5jdGlvbnMgd2l0aCAnYWN0aW9uJykgaWYgbmVlZGVkLiBUcmllZCB0byBtb2RpZnk6IFwiKSArXG4gICAgICAgICAgICAgICAgYXRvbS5uYW1lX1xuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4gICAgaWYgKF9fREVWX18gJiYgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJiBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgW21vYnhdIE9ic2VydmFibGUgJyR7b2JzZXJ2YWJsZS5uYW1lX30nIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuYFxuICAgICAgICApXG4gICAgfVxufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZmAgYW5kIHRyYWNrcyB3aGljaCBvYnNlcnZhYmxlcyBhcmUgYmVpbmcgYWNjZXNzZWQuXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXG4gKiBhcyBvYnNlcnZlciBvZiBhbnkgb2YgdGhlIGFjY2Vzc2VkIG9ic2VydmFibGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tEZXJpdmVkRnVuY3Rpb248VD4oZGVyaXZhdGlvbjogSURlcml2YXRpb24sIGY6ICgpID0+IFQsIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKVxuICAgIC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgICAvLyBhcnJheSB3aWxsIGJlIHRyaW1tZWQgYnkgYmluZERlcGVuZGVuY2llc1xuICAgIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pXG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggKyAxMDApXG4gICAgZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50XyA9IDBcbiAgICBkZXJpdmF0aW9uLnJ1bklkXyA9ICsrZ2xvYmFsU3RhdGUucnVuSWRcbiAgICBjb25zdCBwcmV2VHJhY2tpbmcgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb25cbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uXG4gICAgZ2xvYmFsU3RhdGUuaW5CYXRjaCsrXG4gICAgbGV0IHJlc3VsdFxuICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLmluQmF0Y2gtLVxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXZUcmFja2luZ1xuICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbilcblxuICAgIHdhcm5BYm91dERlcml2YXRpb25XaXRob3V0RGVwZW5kZW5jaWVzKGRlcml2YXRpb24pXG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikge1xuICAgIGlmICghX19ERVZfXykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZGVyaXZhdGlvbi5vYnNlcnZpbmdfLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBkZXJpdmF0aW9uLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPT09IFwiYm9vbGVhblwiXG4gICAgICAgICAgICA/IGRlcml2YXRpb24ucmVxdWlyZXNPYnNlcnZhYmxlX1xuICAgICAgICAgICAgOiBnbG9iYWxTdGF0ZS5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZVxuICAgICkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgW21vYnhdIERlcml2YXRpb24gJyR7ZGVyaXZhdGlvbi5uYW1lX30nIGlzIGNyZWF0ZWQvdXBkYXRlZCB3aXRob3V0IHJlYWRpbmcgYW55IG9ic2VydmFibGUgdmFsdWUuYFxuICAgICAgICApXG4gICAgfVxufVxuXG4vKipcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cbiAqIHVwZGF0ZSBvYnNlcnZpbmcgdG8gYmUgbmV3T2JzZXJ2aW5nIHdpdGggdW5pcXVlIG9ic2VydmFibGVzXG4gKiBub3RpZnkgb2JzZXJ2ZXJzIHRoYXQgYmVjb21lIG9ic2VydmVkL3Vub2JzZXJ2ZWRcbiAqL1xuZnVuY3Rpb24gYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikge1xuICAgIC8vIGludmFyaWFudChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORywgXCJJTlRFUk5BTCBFUlJPUiBiaW5kRGVwZW5kZW5jaWVzIGV4cGVjdHMgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gICAgY29uc3QgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nX1xuICAgIGNvbnN0IG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZ18gPSBkZXJpdmF0aW9uLm5ld09ic2VydmluZ18hKVxuICAgIGxldCBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFX1xuXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6ICh0aGlzIGxpc3QgY2FuIGNvbnRhaW4gZHVwbGljYXRlcyk6XG4gICAgLy8gICAwOiBmaXJzdCBvY2N1cnJlbmNlLCBjaGFuZ2UgdG8gMSBhbmQga2VlcCBpdFxuICAgIC8vICAgMTogZXh0cmEgb2NjdXJyZW5jZSwgZHJvcCBpdFxuICAgIGxldCBpMCA9IDAsXG4gICAgICAgIGwgPSBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVwID0gb2JzZXJ2aW5nW2ldXG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlXyA9PT0gMCkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZV8gPSAxXG4gICAgICAgICAgICBpZiAoaTAgIT09IGkpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpMCsrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGNhc3QgaXMgJ3NhZmUnIGhlcmUsIGJlY2F1c2UgaWYgZGVwIGlzIElPYnNlcnZhYmxlLCBgZGVwZW5kZW5jaWVzU3RhdGVgIHdpbGwgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmICgoZGVwIGFzIGFueSBhcyBJRGVyaXZhdGlvbikuZGVwZW5kZW5jaWVzU3RhdGVfID4gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlKSB7XG4gICAgICAgICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSAoZGVwIGFzIGFueSBhcyBJRGVyaXZhdGlvbikuZGVwZW5kZW5jaWVzU3RhdGVfXG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JzZXJ2aW5nLmxlbmd0aCA9IGkwXG5cbiAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZ18gPSBudWxsIC8vIG5ld09ic2VydmluZyBzaG91bGRuJ3QgYmUgbmVlZGVkIG91dHNpZGUgdHJhY2tpbmcgKHN0YXRlbWVudCBtb3ZlZCBkb3duIHRvIHdvcmsgYXJvdW5kIEZGIGJ1Zywgc2VlICM2MTQpXG5cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBvbGQgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKGl0IGlzIHVuaXF1ZSBhZnRlciBsYXN0IGJpbmREZXBlbmRlbmNpZXMpXG4gICAgLy8gICAwOiBpdCdzIG5vdCBpbiBuZXcgb2JzZXJ2YWJsZXMsIHVub2JzZXJ2ZSBpdFxuICAgIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxuICAgIGwgPSBwcmV2T2JzZXJ2aW5nLmxlbmd0aFxuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgY29uc3QgZGVwID0gcHJldk9ic2VydmluZ1tsXVxuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZV8gPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZU9ic2VydmVyKGRlcCwgZGVyaXZhdGlvbilcbiAgICAgICAgfVxuICAgICAgICBkZXAuZGlmZlZhbHVlXyA9IDBcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuICAgIHdoaWxlIChpMC0tKSB7XG4gICAgICAgIGNvbnN0IGRlcCA9IG9ic2VydmluZ1tpMF1cbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWVfID09PSAxKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlXyA9IDBcbiAgICAgICAgICAgIGFkZE9ic2VydmVyKGRlcCwgZGVyaXZhdGlvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAgIC8vIHNvIHRoZXkgaGF2ZSBoYWQgbm8gY2hhbmNlIHRvIHByb3BhZ2F0ZSBzdGFsZW5lc3MgKCM5MTYpXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGVcbiAgICAgICAgZGVyaXZhdGlvbi5vbkJlY29tZVN0YWxlXygpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICBjb25zdCBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ19cbiAgICBkZXJpdmF0aW9uLm9ic2VydmluZ18gPSBbXVxuICAgIGxldCBpID0gb2JzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKVxuICAgIH1cblxuICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW50cmFja2VkPFQ+KGFjdGlvbjogKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IHByZXYgPSB1bnRyYWNrZWRTdGFydCgpXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbigpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXYpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW50cmFja2VkU3RhcnQoKTogSURlcml2YXRpb24gfCBudWxsIHtcbiAgICBjb25zdCBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gbnVsbFxuICAgIHJldHVybiBwcmV2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnRyYWNrZWRFbmQocHJldjogSURlcml2YXRpb24gfCBudWxsKSB7XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzOiBib29sZWFuKSB7XG4gICAgY29uc3QgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkc1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkc1xuICAgIHJldHVybiBwcmV2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNFbmQocHJldjogYm9vbGVhbikge1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IHByZXZcbn1cblxuLyoqXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikge1xuICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV9cblxuICAgIGNvbnN0IG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nX1xuICAgIGxldCBpID0gb2JzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV9cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJRGVyaXZhdGlvbiwgSU9ic2VydmFibGUsIFJlYWN0aW9uLCBkaWUsIGdldEdsb2JhbCB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5pbXBvcnQgeyBDb21wdXRlZFZhbHVlIH0gZnJvbSBcIi4vY29tcHV0ZWR2YWx1ZVwiXG5cbi8qKlxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcbiAqL1xuY29uc3QgcGVyc2lzdGVudEtleXM6IChrZXlvZiBNb2JYR2xvYmFscylbXSA9IFtcbiAgICBcIm1vYnhHdWlkXCIsXG4gICAgXCJzcHlMaXN0ZW5lcnNcIixcbiAgICBcImVuZm9yY2VBY3Rpb25zXCIsXG4gICAgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIixcbiAgICBcInJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlXCIsXG4gICAgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLFxuICAgIFwiYWxsb3dTdGF0ZVJlYWRzXCIsXG4gICAgXCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzXCIsXG4gICAgXCJydW5JZFwiLFxuICAgIFwiVU5DSEFOR0VEXCIsXG4gICAgXCJ1c2VQcm94aWVzXCJcbl1cblxuZXhwb3J0IHR5cGUgSVVOQ0hBTkdFRCA9IHt9XG5cbmV4cG9ydCBjbGFzcyBNb2JYR2xvYmFscyB7XG4gICAgLyoqXG4gICAgICogTW9iWEdsb2JhbHMgdmVyc2lvbi5cbiAgICAgKiBNb2JYIGNvbXBhdGlibGl0eSB3aXRoIG90aGVyIHZlcnNpb25zIGxvYWRlZCBpbiBtZW1vcnkgYXMgbG9uZyBhcyB0aGlzIHZlcnNpb24gbWF0Y2hlcy5cbiAgICAgKiBJdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIHN0aWxsIHN0b3JlcyBzaW1pbGFyIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBOLkI6IHRoaXMgdmVyc2lvbiBpcyB1bnJlbGF0ZWQgdG8gdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiBNb2JYLCBhbmQgaXMgb25seSB0aGUgdmVyc2lvbiBvZiB0aGVcbiAgICAgKiBpbnRlcm5hbCBzdGF0ZSBzdG9yYWdlIG9mIE1vYlgsIGFuZCBjYW4gYmUgdGhlIHNhbWUgYWNyb3NzIG1hbnkgZGlmZmVyZW50IHBhY2thZ2UgdmVyc2lvbnNcbiAgICAgKi9cbiAgICB2ZXJzaW9uID0gNlxuXG4gICAgLyoqXG4gICAgICogZ2xvYmFsbHkgdW5pcXVlIHRva2VuIHRvIHNpZ25hbCB1bmNoYW5nZWRcbiAgICAgKi9cbiAgICBVTkNIQU5HRUQ6IElVTkNIQU5HRUQgPSB7fVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHJ1bm5pbmcgZGVyaXZhdGlvblxuICAgICAqL1xuICAgIHRyYWNraW5nRGVyaXZhdGlvbjogSURlcml2YXRpb24gfCBudWxsID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHJ1bm5pbmcgcmVhY3Rpb24uIFRoaXMgZGV0ZXJtaW5lcyBpZiB3ZSBjdXJyZW50bHkgaGF2ZSBhIHJlYWN0aXZlIGNvbnRleHQuXG4gICAgICogKFRyYWNraW5nIGRlcml2YXRpb24gaXMgYWxzbyBzZXQgZm9yIHRlbXBvcmFsIHRyYWNraW5nIG9mIGNvbXB1dGVkIHZhbHVlcyBpbnNpZGUgYWN0aW9ucyxcbiAgICAgKiBidXQgdHJhY2tpbmdSZWFjdGlvbiBjYW4gb25seSBiZSBzZXQgYnkgYSBmb3JtIG9mIFJlYWN0aW9uKVxuICAgICAqL1xuICAgIHRyYWNraW5nQ29udGV4dDogUmVhY3Rpb24gfCBDb21wdXRlZFZhbHVlPGFueT4gfCBudWxsID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRWFjaCB0aW1lIGEgZGVyaXZhdGlvbiBpcyB0cmFja2VkLCBpdCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBydW4taWRcbiAgICAgKi9cbiAgICBydW5JZCA9IDBcblxuICAgIC8qKlxuICAgICAqICdndWlkJyBmb3IgZ2VuZXJhbCBwdXJwb3NlLiBXaWxsIGJlIHBlcnNpc3RlZCBhbW9uZ3N0IHJlc2V0cy5cbiAgICAgKi9cbiAgICBtb2J4R3VpZCA9IDBcblxuICAgIC8qKlxuICAgICAqIEFyZSB3ZSBpbiBhIGJhdGNoIGJsb2NrPyAoYW5kIGhvdyBtYW55IG9mIHRoZW0pXG4gICAgICovXG4gICAgaW5CYXRjaDogbnVtYmVyID0gMFxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2YWJsZXMgdGhhdCBkb24ndCBoYXZlIG9ic2VydmVycyBhbnltb3JlLCBhbmQgYXJlIGFib3V0IHRvIGJlXG4gICAgICogc3VzcGVuZGVkLCB1bmxlc3Mgc29tZWJvZHkgZWxzZSBhY2Nlc3NlcyBpdCBpbiB0aGUgc2FtZSBiYXRjaFxuICAgICAqXG4gICAgICogQHR5cGUge0lPYnNlcnZhYmxlW119XG4gICAgICovXG4gICAgcGVuZGluZ1Vub2JzZXJ2YXRpb25zOiBJT2JzZXJ2YWJsZVtdID0gW11cblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygc2NoZWR1bGVkLCBub3QgeWV0IGV4ZWN1dGVkLCByZWFjdGlvbnMuXG4gICAgICovXG4gICAgcGVuZGluZ1JlYWN0aW9uczogUmVhY3Rpb25bXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgY3VycmVudGx5IHByb2Nlc3NpbmcgcmVhY3Rpb25zP1xuICAgICAqL1xuICAgIGlzUnVubmluZ1JlYWN0aW9ucyA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIGNoYW5nZSBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xuICAgICAqIEluIGdlbmVyYWwsIE1vYlggZG9lc24ndCBhbGxvdyB0aGF0IHdoZW4gcnVubmluZyBjb21wdXRhdGlvbnMgYW5kIFJlYWN0LnJlbmRlci5cbiAgICAgKiBUbyBlbnN1cmUgdGhhdCB0aG9zZSBmdW5jdGlvbnMgc3RheSBwdXJlLlxuICAgICAqL1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIElzIGl0IGFsbG93ZWQgdG8gcmVhZCBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xuICAgICAqIFVzZWQgdG8gaG9sZCB0aGUgc3RhdGUgbmVlZGVkIGZvciBgb2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb25gXG4gICAgICovXG4gICAgYWxsb3dTdGF0ZVJlYWRzID0gdHJ1ZVxuXG4gICAgLyoqXG4gICAgICogSWYgc3RyaWN0IG1vZGUgaXMgZW5hYmxlZCwgc3RhdGUgY2hhbmdlcyBhcmUgYnkgZGVmYXVsdCBub3QgYWxsb3dlZFxuICAgICAqL1xuICAgIGVuZm9yY2VBY3Rpb25zOiBib29sZWFuIHwgXCJhbHdheXNcIiA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFNweSBjYWxsYmFja3NcbiAgICAgKi9cbiAgICBzcHlMaXN0ZW5lcnM6IHsgKGNoYW5nZTogYW55KTogdm9pZCB9W10gPSBbXVxuXG4gICAgLyoqXG4gICAgICogR2xvYmFsbHkgYXR0YWNoZWQgZXJyb3IgaGFuZGxlcnMgdGhhdCByZWFjdCBzcGVjaWZpY2FsbHkgdG8gZXJyb3JzIGluIHJlYWN0aW9uc1xuICAgICAqL1xuICAgIGdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVyczogKChlcnJvcjogYW55LCBkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikgPT4gdm9pZClbXSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBXYXJuIGlmIGNvbXB1dGVkIHZhbHVlcyBhcmUgYWNjZXNzZWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZVxuXG4gICAgLyoqXG4gICAgICogKEV4cGVyaW1lbnRhbClcbiAgICAgKiBXYXJuIGlmIHlvdSB0cnkgdG8gY3JlYXRlIHRvIGRlcml2YXRpb24gLyByZWFjdGl2ZSBjb250ZXh0IHdpdGhvdXQgYWNjZXNzaW5nIGFueSBvYnNlcnZhYmxlLlxuICAgICAqL1xuICAgIHJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIChFeHBlcmltZW50YWwpXG4gICAgICogV2FybiBpZiBvYnNlcnZhYmxlcyBhcmUgYWNjZXNzZWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcbiAgICAgKi9cbiAgICBvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlXG5cbiAgICAvKlxuICAgICAqIERvbid0IGNhdGNoIGFuZCByZXRocm93IGV4Y2VwdGlvbnMuIFRoaXMgaXMgdXNlZnVsIGZvciBpbnNwZWN0aW5nIHRoZSBzdGF0ZSBvZlxuICAgICAqIHRoZSBzdGFjayB3aGVuIGFuIGV4Y2VwdGlvbiBvY2N1cnMgd2hpbGUgZGVidWdnaW5nLlxuICAgICAqL1xuICAgIGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBmYWxzZVxuXG4gICAgLypcbiAgICAgKiBJZiB0cnVlLCB3ZSBhcmUgYWxyZWFkeSBoYW5kbGluZyBhbiBleGNlcHRpb24gaW4gYW4gYWN0aW9uLiBBbnkgZXJyb3JzIGluIHJlYWN0aW9ucyBzaG91bGQgYmUgc3VwcHJlc3NlZCwgYXNcbiAgICAgKiB0aGV5IGFyZSBub3QgdGhlIGNhdXNlLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTgzNlxuICAgICAqL1xuICAgIHN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZVxuXG4gICAgdXNlUHJveGllcyA9IHRydWVcbiAgICAvKlxuICAgICAqIHByaW50IHdhcm5pbmdzIGFib3V0IGNvZGUgdGhhdCB3b3VsZCBmYWlsIGlmIHByb3hpZXMgd2VyZW4ndCBhdmFpbGFibGVcbiAgICAgKi9cbiAgICB2ZXJpZnlQcm94aWVzID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIEZhbHNlIGZvcmNlcyBhbGwgb2JqZWN0J3MgZGVzY3JpcHRvcnMgdG9cbiAgICAgKiB3cml0YWJsZTogdHJ1ZVxuICAgICAqIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAqL1xuICAgIHNhZmVEZXNjcmlwdG9ycyA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgd2l0aCBlYWNoIHN0YXRlIHVwZGF0ZSwgdXNlZCBieSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVxuICAgICAqL1xuICAgIHN0YXRlVmVyc2lvbiA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG59XG5cbmxldCBjYW5NZXJnZUdsb2JhbFN0YXRlID0gdHJ1ZVxubGV0IGlzb2xhdGVDYWxsZWQgPSBmYWxzZVxuXG5leHBvcnQgbGV0IGdsb2JhbFN0YXRlOiBNb2JYR2xvYmFscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGdsb2JhbCA9IGdldEdsb2JhbCgpXG4gICAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlXG4gICAgfVxuICAgIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscyAmJiBnbG9iYWwuX19tb2J4R2xvYmFscy52ZXJzaW9uICE9PSBuZXcgTW9iWEdsb2JhbHMoKS52ZXJzaW9uKSB7XG4gICAgICAgIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICghY2FuTWVyZ2VHbG9iYWxTdGF0ZSkge1xuICAgICAgICAvLyBCZWNhdXNlIHRoaXMgaXMgYSBJSUZFIHdlIG5lZWQgdG8gbGV0IGlzb2xhdGVDYWxsZWQgYSBjaGFuY2UgdG8gY2hhbmdlXG4gICAgICAgIC8vIHNvIHdlIHJ1biBpdCBhZnRlciB0aGUgZXZlbnQgbG9vcCBjb21wbGV0ZWQgYXQgbGVhc3QgMSBpdGVyYXRpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzb2xhdGVDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBkaWUoMzUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEpXG4gICAgICAgIHJldHVybiBuZXcgTW9iWEdsb2JhbHMoKVxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgKz0gMVxuICAgICAgICBpZiAoIWdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEID0ge31cbiAgICAgICAgfSAvLyBtYWtlIG1lcmdlIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxXG4gICAgICAgIHJldHVybiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKSlcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBmdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUoKSB7XG4gICAgaWYgKFxuICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fFxuICAgICAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoIHx8XG4gICAgICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9uc1xuICAgICkge1xuICAgICAgICBkaWUoMzYpXG4gICAgfVxuICAgIGlzb2xhdGVDYWxsZWQgPSB0cnVlXG4gICAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICAgICAgbGV0IGdsb2JhbCA9IGdldEdsb2JhbCgpXG4gICAgICAgIGlmICgtLWdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBnbG9iYWwuX19tb2J4R2xvYmFscyA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZSgpOiBhbnkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZVxufVxuXG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKClcbiAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdEdsb2JhbHMpIHtcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5IGFzIGFueSkgPT09IC0xKSB7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZVtrZXldID0gZGVmYXVsdEdsb2JhbHNba2V5XVxuICAgICAgICB9XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gIWdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zXG59XG4iLCJpbXBvcnQge1xuICAgIExhbWJkYSxcbiAgICBDb21wdXRlZFZhbHVlLFxuICAgIElEZXBlbmRlbmN5VHJlZSxcbiAgICBJRGVyaXZhdGlvbixcbiAgICBJRGVyaXZhdGlvblN0YXRlXyxcbiAgICBUcmFjZU1vZGUsXG4gICAgZ2V0RGVwZW5kZW5jeVRyZWUsXG4gICAgZ2xvYmFsU3RhdGUsXG4gICAgcnVuUmVhY3Rpb25zLFxuICAgIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZFxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElEZXBUcmVlTm9kZSB7XG4gICAgbmFtZV86IHN0cmluZ1xuICAgIG9ic2VydmluZ18/OiBJT2JzZXJ2YWJsZVtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGUgZXh0ZW5kcyBJRGVwVHJlZU5vZGUge1xuICAgIGRpZmZWYWx1ZV86IG51bWJlclxuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBkZXJpdmF0aW9uICpydW4qIHRoYXQgbGFzdCBhY2Nlc3NlZCB0aGlzIG9ic2VydmFibGUuXG4gICAgICogSWYgdGhpcyBpZCBlcXVhbHMgdGhlICpydW4qIGlkIG9mIHRoZSBjdXJyZW50IGRlcml2YXRpb24sXG4gICAgICogdGhlIGRlcGVuZGVuY3kgaXMgYWxyZWFkeSBlc3RhYmxpc2hlZFxuICAgICAqL1xuICAgIGxhc3RBY2Nlc3NlZEJ5XzogbnVtYmVyXG4gICAgaXNCZWluZ09ic2VydmVkXzogYm9vbGVhblxuXG4gICAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZV86IElEZXJpdmF0aW9uU3RhdGVfIC8vIFVzZWQgdG8gYXZvaWQgcmVkdW5kYW50IHByb3BhZ2F0aW9uc1xuICAgIGlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fOiBib29sZWFuIC8vIFVzZWQgdG8gcHVzaCBpdHNlbGYgdG8gZ2xvYmFsLnBlbmRpbmdVbm9ic2VydmF0aW9ucyBhdCBtb3N0IG9uY2UgcGVyIGJhdGNoLlxuXG4gICAgb2JzZXJ2ZXJzXzogU2V0PElEZXJpdmF0aW9uPlxuXG4gICAgb25CVU8oKTogdm9pZFxuICAgIG9uQk8oKTogdm9pZFxuXG4gICAgb25CVU9MOiBTZXQ8TGFtYmRhPiB8IHVuZGVmaW5lZFxuICAgIG9uQk9MOiBTZXQ8TGFtYmRhPiB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzT2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzXyAmJiBvYnNlcnZhYmxlLm9ic2VydmVyc18uc2l6ZSA+IDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSk6IFNldDxJRGVyaXZhdGlvbj4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVyc19cbn1cblxuLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXG4vLyAgICAgY29uc3QgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgaWQgPSBsaXN0W2ldLl9fbWFwaWRcbi8vICAgICAgICAgaWYgKGkpIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpbnZhcmlhbnQoXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXG4vLyAgICAgICAgIFwiSU5URVJOQUwgRVJST1IgdGhlcmUgaXMgbm8ganVuayBpbiBtYXBcIlxuLy8gICAgIClcbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSwgbm9kZTogSURlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBhZGQgYWxyZWFkeSBhZGRlZCBub2RlXCIpO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcblxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzXy5hZGQobm9kZSlcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGVfKSB7XG4gICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBub2RlLmRlcGVuZGVuY2llc1N0YXRlX1xuICAgIH1cblxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGRpZG4ndCBhZGQgbm9kZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBub2RlOiBJRGVyaXZhdGlvbikge1xuICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzXy5kZWxldGUobm9kZSlcbiAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAgICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxuICAgICAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSlcbiAgICB9XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xuICAgIGlmIChvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IHRydWVcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSlcbiAgICB9XG59XG5cbi8qKlxuICogQmF0Y2ggc3RhcnRzIGEgdHJhbnNhY3Rpb24sIGF0IGxlYXN0IGZvciBwdXJwb3NlcyBvZiBtZW1vaXppbmcgQ29tcHV0ZWRWYWx1ZXMgd2hlbiBub3RoaW5nIGVsc2UgZG9lcy5cbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gICAgZ2xvYmFsU3RhdGUuaW5CYXRjaCsrXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRCYXRjaCgpIHtcbiAgICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgICAgIHJ1blJlYWN0aW9ucygpXG4gICAgICAgIC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG4gICAgICAgIGNvbnN0IGxpc3QgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gbGlzdFtpXVxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQlVPKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHByb2Nlc3MgaGFwcGVucyByZWN1cnNpdmVseSwgdGhpcyBjb21wdXRlZCBtaWdodCBiZSB0aGUgbGFzdCBvYnNlcnZhYmUgb2YgYW5vdGhlciwgZXRjLi5cbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zdXNwZW5kXygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZTogSU9ic2VydmFibGUpOiBib29sZWFuIHtcbiAgICBjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQob2JzZXJ2YWJsZSlcblxuICAgIGNvbnN0IGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb25cbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcbiAgICAgICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkXyAhPT0gb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeV8pIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnlfID0gZGVyaXZhdGlvbi5ydW5JZF9cbiAgICAgICAgICAgIC8vIFRyaWVkIHN0b3JpbmcgbmV3T2JzZXJ2aW5nLCBvciBvYnNlcnZpbmcsIG9yIGJvdGggYXMgU2V0LCBidXQgcGVyZm9ybWFuY2UgZGlkbid0IGNvbWUgY2xvc2UuLi5cbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nXyFbZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50XysrXSA9IG9ic2VydmFibGVcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyA9IHRydWVcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQk8oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZF9cbiAgICB9IGVsc2UgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzXy5zaXplID09PSAwICYmIGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwKSB7XG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuXG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZTogSU9ic2VydmFibGUsIG1zZzogc3RyaW5nKSB7XG4vLyAgICAgLy8gaXQncyBleHBlbnNpdmUgc28gYmV0dGVyIG5vdCBydW4gaXQgaW4gcHJvZHVjaXRvbi4gYnV0IHRlbXBvcmFyaWx5IGhlbHBmdWwgZm9yIHRlc3Rpbmdcbi8vICAgICBjb25zdCBtaW4gPSBnZXRPYnNlcnZlcnMob2JzZXJ2YWJsZSkucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1pbihhLCBiLmRlcGVuZGVuY2llc1N0YXRlKSwgMilcbi8vICAgICBpZiAobWluID49IG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSkgcmV0dXJuIC8vIDwtIHRoZSBvbmx5IGFzc3VtcHRpb24gYWJvdXQgYGxvd2VzdE9ic2VydmVyU3RhdGVgXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKFxuLy8gICAgICAgICBcImxvd2VzdE9ic2VydmVyU3RhdGUgaXMgd3JvbmcgZm9yIFwiICtcbi8vICAgICAgICAgICAgIG1zZyArXG4vLyAgICAgICAgICAgICBcIiBiZWNhdXNlIFwiICtcbi8vICAgICAgICAgICAgIG1pbiArXG4vLyAgICAgICAgICAgICBcIiA8IFwiICtcbi8vICAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZVxuLy8gICAgIClcbi8vIH1cblxuLyoqXG4gKiBOT1RFOiBjdXJyZW50IHByb3BhZ2F0aW9uIG1lY2hhbmlzbSB3aWxsIGluIGNhc2Ugb2Ygc2VsZiByZXJ1bmluZyBhdXRvcnVucyBiZWhhdmUgdW5leHBlY3RlZGx5XG4gKiBJdCB3aWxsIHByb3BhZ2F0ZSBjaGFuZ2VzIHRvIG9ic2VydmVycyBmcm9tIHByZXZpb3VzIHJ1blxuICogSXQncyBoYXJkIG9yIG1heWJlIGltcG9zc2libGUgKHdpdGggcmVhc29uYWJsZSBwZXJmKSB0byBnZXQgaXQgcmlnaHQgd2l0aCBjdXJyZW50IGFwcHJvYWNoXG4gKiBIb3BlZnVsbHkgc2VsZiByZXJ1bmluZyBhdXRvcnVucyBhcmVuJ3QgYSBmZWF0dXJlIHBlb3BsZSBzaG91bGQgZGVwZW5kIG9uXG4gKiBBbHNvIG1vc3QgYmFzaWMgdXNlIGNhc2VzIHNob3VsZCBiZSBva1xuICovXG5cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcbmV4cG9ydCBmdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VkKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfXG5cbiAgICAvLyBJZGVhbGx5IHdlIHVzZSBmb3IuLm9mIGhlcmUsIGJ1dCB0aGUgZG93bmNvbXBpbGVkIHZlcnNpb24gaXMgcmVhbGx5IHNsb3cuLi5cbiAgICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChkID0+IHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXykge1xuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICAgICAgICAgIGxvZ1RyYWNlSW5mbyhkLCBvYnNlcnZhYmxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlXygpXG4gICAgICAgIH1cbiAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV9cbiAgICB9KVxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufVxuXG4vLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuZXhwb3J0IGZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZChvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNvbmZpcm1lZCBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfXG5cbiAgICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChkID0+IHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV8pIHtcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfXG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJiBkLmlzVHJhY2luZ18gIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8gLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxuICAgICAgICApIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFX1xuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufVxuXG4vLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZTogSU9ic2VydmFibGUpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyAhPT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5QT1NTSUJMWV9TVEFMRV9cblxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzXy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSB7XG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlBPU1NJQkxZX1NUQUxFX1xuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlXygpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cblxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb246IElEZXJpdmF0aW9uLCBvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW21vYngudHJhY2VdICcke2Rlcml2YXRpb24ubmFtZV99JyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICcke29ic2VydmFibGUubmFtZV99J2BcbiAgICApXG4gICAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSlcblxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgbmV3IEZ1bmN0aW9uKFxuYGRlYnVnZ2VyO1xuLypcblRyYWNpbmcgJyR7ZGVyaXZhdGlvbi5uYW1lX30nXG5cbllvdSBhcmUgZW50ZXJpbmcgdGhpcyBicmVhayBwb2ludCBiZWNhdXNlIGRlcml2YXRpb24gJyR7ZGVyaXZhdGlvbi5uYW1lX30nIGlzIGJlaW5nIHRyYWNlZCBhbmQgJyR7b2JzZXJ2YWJsZS5uYW1lX30nIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cbkp1c3QgZm9sbG93IHRoZSBzdGFja3RyYWNlIHlvdSBzaG91bGQgbm93IHNlZSBpbiB0aGUgZGV2dG9vbHMgdG8gc2VlIHByZWNpc2VseSB3aGF0IHBpZWNlIG9mIHlvdXIgY29kZSBpcyBjYXVzaW5nIHRoaXMgdXBkYXRlXG5UaGUgc3RhY2tmcmFtZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGlzIGF0IGxlYXN0IH42LTggc3RhY2stZnJhbWVzIHVwLlxuXG4ke2Rlcml2YXRpb24gaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlID8gZGVyaXZhdGlvbi5kZXJpdmF0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgvWypdXFwvL2csIFwiL1wiKSA6IFwiXCJ9XG5cblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XG5cbiR7bGluZXMuam9pbihcIlxcblwiKX1cbiovXG4gICAgYCkoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJpbnREZXBUcmVlKHRyZWU6IElEZXBlbmRlbmN5VHJlZSwgbGluZXM6IHN0cmluZ1tdLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxpbmVzLnB1c2goYCR7XCJcXHRcIi5yZXBlYXQoZGVwdGggLSAxKX0ke3RyZWUubmFtZX1gKVxuICAgIGlmICh0cmVlLmRlcGVuZGVuY2llcykge1xuICAgICAgICB0cmVlLmRlcGVuZGVuY2llcy5mb3JFYWNoKGNoaWxkID0+IHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICAkbW9ieCxcbiAgICBJRGVyaXZhdGlvbixcbiAgICBJRGVyaXZhdGlvblN0YXRlXyxcbiAgICBJT2JzZXJ2YWJsZSxcbiAgICBMYW1iZGEsXG4gICAgVHJhY2VNb2RlLFxuICAgIGNsZWFyT2JzZXJ2aW5nLFxuICAgIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUsXG4gICAgZW5kQmF0Y2gsXG4gICAgZ2V0TmV4dElkLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIGlzQ2F1Z2h0RXhjZXB0aW9uLFxuICAgIGlzU3B5RW5hYmxlZCxcbiAgICBzaG91bGRDb21wdXRlLFxuICAgIHNweVJlcG9ydCxcbiAgICBzcHlSZXBvcnRFbmQsXG4gICAgc3B5UmVwb3J0U3RhcnQsXG4gICAgc3RhcnRCYXRjaCxcbiAgICB0cmFjZSxcbiAgICB0cmFja0Rlcml2ZWRGdW5jdGlvblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vKipcbiAqIFJlYWN0aW9ucyBhcmUgYSBzcGVjaWFsIGtpbmQgb2YgZGVyaXZhdGlvbnMuIFNldmVyYWwgdGhpbmdzIGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tIG5vcm1hbCByZWFjdGl2ZSBjb21wdXRhdGlvbnNcbiAqXG4gKiAxKSBUaGV5IHdpbGwgYWx3YXlzIHJ1biwgd2hldGhlciB0aGV5IGFyZSB1c2VkIGJ5IG90aGVyIGNvbXB1dGF0aW9ucyBvciBub3QuXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhleSBhcmUgdmVyeSBzdWl0YWJsZSBmb3IgdHJpZ2dlcmluZyBzaWRlIGVmZmVjdHMgbGlrZSBsb2dnaW5nLCB1cGRhdGluZyB0aGUgRE9NIGFuZCBtYWtpbmcgbmV0d29yayByZXF1ZXN0cy5cbiAqIDIpIFRoZXkgYXJlIG5vdCBvYnNlcnZhYmxlIHRoZW1zZWx2ZXNcbiAqIDMpIFRoZXkgd2lsbCBhbHdheXMgcnVuIGFmdGVyIGFueSAnbm9ybWFsJyBkZXJpdmF0aW9uc1xuICogNCkgVGhleSBhcmUgYWxsb3dlZCB0byBjaGFuZ2UgdGhlIHN0YXRlIGFuZCB0aGVyZWJ5IHRyaWdnZXJpbmcgdGhlbXNlbHZlcyBhZ2FpbiwgYXMgbG9uZyBhcyB0aGV5IG1ha2Ugc3VyZSB0aGUgc3RhdGUgcHJvcGFnYXRlcyB0byBhIHN0YWJsZSBzdGF0ZSBpbiBhIHJlYXNvbmFibGUgYW1vdW50IG9mIGl0ZXJhdGlvbnMuXG4gKlxuICogVGhlIHN0YXRlIG1hY2hpbmUgb2YgYSBSZWFjdGlvbiBpcyBhcyBmb2xsb3dzOlxuICpcbiAqIDEpIGFmdGVyIGNyZWF0aW5nLCB0aGUgcmVhY3Rpb24gc2hvdWxkIGJlIHN0YXJ0ZWQgYnkgY2FsbGluZyBgcnVuUmVhY3Rpb25gIG9yIGJ5IHNjaGVkdWxpbmcgaXQgKHNlZSBhbHNvIGBhdXRvcnVuYClcbiAqIDIpIHRoZSBgb25JbnZhbGlkYXRlYCBoYW5kbGVyIHNob3VsZCBzb21laG93IHJlc3VsdCBpbiBhIGNhbGwgdG8gYHRoaXMudHJhY2soc29tZUZ1bmN0aW9uKWBcbiAqIDMpIGFsbCBvYnNlcnZhYmxlcyBhY2Nlc3NlZCBpbiBgc29tZUZ1bmN0aW9uYCB3aWxsIGJlIG9ic2VydmVkIGJ5IHRoaXMgcmVhY3Rpb24uXG4gKiA0KSBhcyBzb29uIGFzIHNvbWUgb2YgdGhlIGRlcGVuZGVuY2llcyBoYXMgY2hhbmdlZCB0aGUgUmVhY3Rpb24gd2lsbCBiZSByZXNjaGVkdWxlZCBmb3IgYW5vdGhlciBydW4gKGFmdGVyIHRoZSBjdXJyZW50IG11dGF0aW9uIG9yIHRyYW5zYWN0aW9uKS4gYGlzU2NoZWR1bGVkYCB3aWxsIHlpZWxkIHRydWUgb25jZSBhIGRlcGVuZGVuY3kgaXMgc3RhbGUgYW5kIGR1cmluZyB0aGlzIHBlcmlvZFxuICogNSkgYG9uSW52YWxpZGF0ZWAgd2lsbCBiZSBjYWxsZWQsIGFuZCB3ZSBhcmUgYmFjayBhdCBzdGVwIDEuXG4gKlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlYWN0aW9uUHVibGljIHtcbiAgICBkaXNwb3NlKCk6IHZvaWRcbiAgICB0cmFjZShlbnRlckJyZWFrUG9pbnQ/OiBib29sZWFuKTogdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWFjdGlvbkRpc3Bvc2VyIHtcbiAgICAoKTogdm9pZFxuICAgICRtb2J4OiBSZWFjdGlvblxufVxuXG5leHBvcnQgY2xhc3MgUmVhY3Rpb24gaW1wbGVtZW50cyBJRGVyaXZhdGlvbiwgSVJlYWN0aW9uUHVibGljIHtcbiAgICBvYnNlcnZpbmdfOiBJT2JzZXJ2YWJsZVtdID0gW10gLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gICAgbmV3T2JzZXJ2aW5nXzogSU9ic2VydmFibGVbXSA9IFtdXG4gICAgZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HX1xuICAgIGRpZmZWYWx1ZV8gPSAwXG4gICAgcnVuSWRfID0gMFxuICAgIHVuYm91bmREZXBzQ291bnRfID0gMFxuICAgIGlzRGlzcG9zZWRfID0gZmFsc2VcbiAgICBpc1NjaGVkdWxlZF8gPSBmYWxzZVxuICAgIGlzVHJhY2tQZW5kaW5nXyA9IGZhbHNlXG4gICAgaXNSdW5uaW5nXyA9IGZhbHNlXG4gICAgaXNUcmFjaW5nXzogVHJhY2VNb2RlID0gVHJhY2VNb2RlLk5PTkVcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZV86IHN0cmluZyA9IF9fREVWX18gPyBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCkgOiBcIlJlYWN0aW9uXCIsXG4gICAgICAgIHByaXZhdGUgb25JbnZhbGlkYXRlXzogKCkgPT4gdm9pZCxcbiAgICAgICAgcHJpdmF0ZSBlcnJvckhhbmRsZXJfPzogKGVycm9yOiBhbnksIGRlcml2YXRpb246IElEZXJpdmF0aW9uKSA9PiB2b2lkLFxuICAgICAgICBwdWJsaWMgcmVxdWlyZXNPYnNlcnZhYmxlXz9cbiAgICApIHt9XG5cbiAgICBvbkJlY29tZVN0YWxlXygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZV8oKVxuICAgIH1cblxuICAgIHNjaGVkdWxlXygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NoZWR1bGVkXykge1xuICAgICAgICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSB0cnVlXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLnB1c2godGhpcylcbiAgICAgICAgICAgIHJ1blJlYWN0aW9ucygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1NjaGVkdWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTY2hlZHVsZWRfXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgICAqL1xuICAgIHJ1blJlYWN0aW9uXygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgICAgICBzdGFydEJhdGNoKClcbiAgICAgICAgICAgIHRoaXMuaXNTY2hlZHVsZWRfID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHRcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXNcbiAgICAgICAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RyYWNrUGVuZGluZ18gPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZV8oKVxuICAgICAgICAgICAgICAgICAgICBpZiAoX19ERVZfXyAmJiB0aGlzLmlzVHJhY2tQZW5kaW5nXyAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyhlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZcbiAgICAgICAgICAgIGVuZEJhdGNoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNrKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihcIlJlYWN0aW9uIGFscmVhZHkgZGlzcG9zZWRcIikgLy8gTm90ZTogTm90IGEgd2FybmluZyAvIGVycm9yIGluIG1vYnggNCBlaXRoZXJcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJhdGNoKClcbiAgICAgICAgY29uc3Qgbm90aWZ5ID0gaXNTcHlFbmFibGVkKClcbiAgICAgICAgbGV0IHN0YXJ0VGltZVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnkpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUnVubmluZ18gPSB0cnVlXG4gICAgICAgIGNvbnN0IHByZXZSZWFjdGlvbiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCAvLyByZWFjdGlvbnMgY291bGQgY3JlYXRlIHJlYWN0aW9ucy4uLlxuICAgICAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQgPSB0aGlzXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpXG4gICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZSZWFjdGlvblxuICAgICAgICB0aGlzLmlzUnVubmluZ18gPSBmYWxzZVxuICAgICAgICB0aGlzLmlzVHJhY2tQZW5kaW5nXyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgICAgICAvLyBkaXNwb3NlZCBkdXJpbmcgbGFzdCBydW4uIENsZWFuIHVwIGV2ZXJ5dGhpbmcgdGhhdCB3YXMgYm91bmQgYWZ0ZXIgdGhlIGRpc3Bvc2UgY2FsbC5cbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyhyZXN1bHQuY2F1c2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5KSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoe1xuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZW5kQmF0Y2goKVxuICAgIH1cblxuICAgIHJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZXJyb3I6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5lcnJvckhhbmRsZXJfKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcl8oZXJyb3IsIHRoaXMpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IF9fREVWX19cbiAgICAgICAgICAgID8gYFttb2J4XSBFbmNvdW50ZXJlZCBhbiB1bmNhdWdodCBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGJ5IGEgcmVhY3Rpb24gb3Igb2JzZXJ2ZXIgY29tcG9uZW50LCBpbjogJyR7dGhpc30nYFxuICAgICAgICAgICAgOiBgW21vYnhdIHVuY2F1Z2h0IGVycm9yIGluICcke3RoaXN9J2BcbiAgICAgICAgaWYgKCFnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKVxuICAgICAgICAgICAgLyoqIElmIGRlYnVnZ2luZyBicm91Z2h0IHlvdSBoZXJlLCBwbGVhc2UsIHJlYWQgdGhlIGFib3ZlIG1lc3NhZ2UgOi0pLiBUbnghICovXG4gICAgICAgIH0gZWxzZSBpZiAoX19ERVZfXykgeyBjb25zb2xlLndhcm4oYFttb2J4XSAoZXJyb3IgaW4gcmVhY3Rpb24gJyR7dGhpcy5uYW1lX30nIHN1cHByZXNzZWQsIGZpeCBlcnJvciBvZiBjYXVzaW5nIGFjdGlvbiBiZWxvdylgKSB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICAgIGlmIChfX0RFVl9fICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIgKyBlcnJvclxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGYgPT4gZihlcnJvciwgdGhpcykpXG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWRfID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZ18pIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoKClcbiAgICAgICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKVxuICAgICAgICAgICAgICAgIGVuZEJhdGNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpc3Bvc2VyXygpOiBJUmVhY3Rpb25EaXNwb3NlciB7XG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKSBhcyBJUmVhY3Rpb25EaXNwb3NlclxuICAgICAgICByWyRtb2J4XSA9IHRoaXNcbiAgICAgICAgcmV0dXJuIHJcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBSZWFjdGlvblske3RoaXMubmFtZV99XWBcbiAgICB9XG5cbiAgICB0cmFjZShlbnRlckJyZWFrUG9pbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0cmFjZSh0aGlzLCBlbnRlckJyZWFrUG9pbnQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25SZWFjdGlvbkVycm9yKGhhbmRsZXI6IChlcnJvcjogYW55LCBkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikgPT4gdm9pZCk6IExhbWJkYSB7XG4gICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnB1c2goaGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKVxuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIE1hZ2ljIG51bWJlciBhbGVydCFcbiAqIERlZmluZXMgd2l0aGluIGhvdyBtYW55IHRpbWVzIGEgcmVhY3Rpb24gaXMgYWxsb3dlZCB0byByZS10cmlnZ2VyIGl0c2VsZlxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxuICovXG5jb25zdCBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUyA9IDEwMFxuXG5sZXQgcmVhY3Rpb25TY2hlZHVsZXI6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCA9IGYgPT4gZigpXG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XG4gICAgLy8gVHJhbXBvbGluaW5nLCBpZiBydW5SZWFjdGlvbnMgYXJlIGFscmVhZHkgcnVubmluZywgbmV3IHJlYWN0aW9ucyB3aWxsIGJlIHBpY2tlZCB1cFxuICAgIGlmIChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCB8fCBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcilcbn1cblxuZnVuY3Rpb24gcnVuUmVhY3Rpb25zSGVscGVyKCkge1xuICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IHRydWVcbiAgICBjb25zdCBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zXG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwXG5cbiAgICAvLyBXaGlsZSBydW5uaW5nIHJlYWN0aW9ucywgbmV3IHJlYWN0aW9ucyBtaWdodCBiZSB0cmlnZ2VyZWQuXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG4gICAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIF9fREVWX19cbiAgICAgICAgICAgICAgICAgICAgPyBgUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciAke01BWF9SRUFDVElPTl9JVEVSQVRJT05TfSBpdGVyYXRpb25zLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiAke2FsbFJlYWN0aW9uc1swXX1gXG4gICAgICAgICAgICAgICAgICAgIDogYFttb2J4XSBjeWNsZSBpbiByZWFjdGlvbjogJHthbGxSZWFjdGlvbnNbMF19YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKSAvLyBjbGVhciByZWFjdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVtYWluaW5nUmVhY3Rpb25zID0gYWxsUmVhY3Rpb25zLnNwbGljZSgwKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbl8oKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBpc1JlYWN0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uKVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVhY3Rpb25TY2hlZHVsZXIoZm46IChmOiAoKSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgYmFzZVNjaGVkdWxlciA9IHJlYWN0aW9uU2NoZWR1bGVyXG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmID0+IGZuKCgpID0+IGJhc2VTY2hlZHVsZXIoZikpXG59XG4iLCJpbXBvcnQgeyBJQ29tcHV0ZWREaWRDaGFuZ2UgfSBmcm9tIFwiLi9jb21wdXRlZHZhbHVlXCJcbmltcG9ydCB7IElWYWx1ZURpZENoYW5nZSwgSUJveERpZENoYW5nZSB9IGZyb20gXCIuLy4uL3R5cGVzL29ic2VydmFibGV2YWx1ZVwiXG5pbXBvcnQgeyBJT2JqZWN0RGlkQ2hhbmdlIH0gZnJvbSBcIi4vLi4vdHlwZXMvb2JzZXJ2YWJsZW9iamVjdFwiXG5pbXBvcnQgeyBJQXJyYXlEaWRDaGFuZ2UgfSBmcm9tIFwiLi8uLi90eXBlcy9vYnNlcnZhYmxlYXJyYXlcIlxuaW1wb3J0IHsgTGFtYmRhLCBnbG9iYWxTdGF0ZSwgb25jZSwgSVNldERpZENoYW5nZSwgSU1hcERpZENoYW5nZSB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NweUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIF9fREVWX18gJiYgISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoXG59XG5cbmV4cG9ydCB0eXBlIFB1cmVTcHlFdmVudCA9XG4gICAgfCB7IHR5cGU6IFwiYWN0aW9uXCI7IG5hbWU6IHN0cmluZzsgb2JqZWN0OiB1bmtub3duOyBhcmd1bWVudHM6IHVua25vd25bXSB9XG4gICAgfCB7IHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCI7IG5hbWU6IHN0cmluZyB9XG4gICAgfCB7IHR5cGU6IFwicmVhY3Rpb25cIjsgbmFtZTogc3RyaW5nIH1cbiAgICB8IHsgdHlwZTogXCJlcnJvclwiOyBuYW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZzsgZXJyb3I6IHN0cmluZyB9XG4gICAgfCBJQ29tcHV0ZWREaWRDaGFuZ2U8dW5rbm93bj5cbiAgICB8IElPYmplY3REaWRDaGFuZ2U8dW5rbm93bj5cbiAgICB8IElBcnJheURpZENoYW5nZTx1bmtub3duPlxuICAgIHwgSU1hcERpZENoYW5nZTx1bmtub3duLCB1bmtub3duPlxuICAgIHwgSVNldERpZENoYW5nZTx1bmtub3duPlxuICAgIHwgSVZhbHVlRGlkQ2hhbmdlPHVua25vd24+XG4gICAgfCBJQm94RGlkQ2hhbmdlPHVua25vd24+XG4gICAgfCB7IHR5cGU6IFwicmVwb3J0LWVuZFwiOyBzcHlSZXBvcnRFbmQ6IHRydWU7IHRpbWU/OiBudW1iZXIgfVxuXG50eXBlIFNweUV2ZW50ID0gUHVyZVNweUV2ZW50ICYgeyBzcHlSZXBvcnRTdGFydD86IHRydWUgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50OiBTcHlFdmVudCkge1xuICAgIGlmICghX19ERVZfXykge1xuICAgICAgICByZXR1cm5cbiAgICB9IC8vIGRlYWQgY29kZSBlbGltaW5hdGlvbiBjYW4gZG8gdGhlIHJlc3RcbiAgICBpZiAoIWdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVyc1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3B5UmVwb3J0U3RhcnQoZXZlbnQ6IFB1cmVTcHlFdmVudCkge1xuICAgIGlmICghX19ERVZfXykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY2hhbmdlID0geyAuLi5ldmVudCwgc3B5UmVwb3J0U3RhcnQ6IHRydWUgYXMgY29uc3QgfVxuICAgIHNweVJlcG9ydChjaGFuZ2UpXG59XG5cbmNvbnN0IEVORF9FVkVOVDogU3B5RXZlbnQgPSB7IHR5cGU6IFwicmVwb3J0LWVuZFwiLCBzcHlSZXBvcnRFbmQ6IHRydWUgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3B5UmVwb3J0RW5kKGNoYW5nZT86IHsgdGltZT86IG51bWJlciB9KSB7XG4gICAgaWYgKCFfX0RFVl9fKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgIHNweVJlcG9ydCh7IC4uLmNoYW5nZSwgdHlwZTogXCJyZXBvcnQtZW5kXCIsIHNweVJlcG9ydEVuZDogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNweVJlcG9ydChFTkRfRVZFTlQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3B5KGxpc3RlbmVyOiAoY2hhbmdlOiBTcHlFdmVudCkgPT4gdm9pZCk6IExhbWJkYSB7XG4gICAgaWYgKCFfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzYClcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gICAgICAgIHJldHVybiBvbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5maWx0ZXIobCA9PiBsICE9PSBsaXN0ZW5lcilcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGNyZWF0ZUFjdGlvbixcbiAgICBleGVjdXRlQWN0aW9uLFxuICAgIEFubm90YXRpb24sXG4gICAgc3RvcmVBbm5vdGF0aW9uLFxuICAgIGRpZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzU3RyaW5naXNoLFxuICAgIGNyZWF0ZURlY29yYXRvckFubm90YXRpb24sXG4gICAgY3JlYXRlQWN0aW9uQW5ub3RhdGlvblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgY29uc3QgQUNUSU9OID0gXCJhY3Rpb25cIlxuZXhwb3J0IGNvbnN0IEFDVElPTl9CT1VORCA9IFwiYWN0aW9uLmJvdW5kXCJcbmV4cG9ydCBjb25zdCBBVVRPQUNUSU9OID0gXCJhdXRvQWN0aW9uXCJcbmV4cG9ydCBjb25zdCBBVVRPQUNUSU9OX0JPVU5EID0gXCJhdXRvQWN0aW9uLmJvdW5kXCJcblxuY29uc3QgREVGQVVMVF9BQ1RJT05fTkFNRSA9IFwiPHVubmFtZWQgYWN0aW9uPlwiXG5cbmNvbnN0IGFjdGlvbkFubm90YXRpb24gPSBjcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKEFDVElPTilcbmNvbnN0IGFjdGlvbkJvdW5kQW5ub3RhdGlvbiA9IGNyZWF0ZUFjdGlvbkFubm90YXRpb24oQUNUSU9OX0JPVU5ELCB7XG4gICAgYm91bmQ6IHRydWVcbn0pXG5jb25zdCBhdXRvQWN0aW9uQW5ub3RhdGlvbiA9IGNyZWF0ZUFjdGlvbkFubm90YXRpb24oQVVUT0FDVElPTiwge1xuICAgIGF1dG9BY3Rpb246IHRydWVcbn0pXG5jb25zdCBhdXRvQWN0aW9uQm91bmRBbm5vdGF0aW9uID0gY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OX0JPVU5ELCB7XG4gICAgYXV0b0FjdGlvbjogdHJ1ZSxcbiAgICBib3VuZDogdHJ1ZVxufSlcblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFubm90YXRpb24sIFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICAvLyBuYW1lbGVzcyBhY3Rpb25zXG4gICAgPFQgZXh0ZW5kcyBGdW5jdGlvbiB8IHVuZGVmaW5lZCB8IG51bGw+KGZuOiBUKTogVFxuICAgIC8vIG5hbWVkIGFjdGlvbnNcbiAgICA8VCBleHRlbmRzIEZ1bmN0aW9uIHwgdW5kZWZpbmVkIHwgbnVsbD4obmFtZTogc3RyaW5nLCBmbjogVCk6IFRcblxuICAgIC8vIG5hbWVkIGRlY29yYXRvclxuICAgIChjdXN0b21OYW1lOiBzdHJpbmcpOiBQcm9wZXJ0eURlY29yYXRvciAmIEFubm90YXRpb25cblxuICAgIC8vIGRlY29yYXRvciAobmFtZSBubyBsb25nZXIgc3VwcG9ydGVkKVxuICAgIGJvdW5kOiBBbm5vdGF0aW9uICYgUHJvcGVydHlEZWNvcmF0b3Jcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uRmFjdG9yeShhdXRvQWN0aW9uOiBib29sZWFuKTogSUFjdGlvbkZhY3Rvcnkge1xuICAgIGNvbnN0IHJlczogSUFjdGlvbkZhY3RvcnkgPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMj8pOiBhbnkge1xuICAgICAgICAvLyBhY3Rpb24oZm4oKSB7fSlcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXJnMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IERFRkFVTFRfQUNUSU9OX05BTUUsIGFyZzEsIGF1dG9BY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWN0aW9uKFwibmFtZVwiLCBmbigpIHt9KVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihhcmcyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbihhcmcxLCBhcmcyLCBhdXRvQWN0aW9uKVxuICAgICAgICB9XG4gICAgICAgIC8vIEBhY3Rpb25cbiAgICAgICAgaWYgKGlzU3RyaW5naXNoKGFyZzIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVBbm5vdGF0aW9uKGFyZzEsIGFyZzIsIGF1dG9BY3Rpb24gPyBhdXRvQWN0aW9uQW5ub3RhdGlvbiA6IGFjdGlvbkFubm90YXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWN0aW9uKFwibmFtZVwiKSAmIEBhY3Rpb24oXCJuYW1lXCIpXG4gICAgICAgIGlmIChpc1N0cmluZ2lzaChhcmcxKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZURlY29yYXRvckFubm90YXRpb24oXG4gICAgICAgICAgICAgICAgY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihhdXRvQWN0aW9uID8gQVVUT0FDVElPTiA6IEFDVElPTiwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmcxLFxuICAgICAgICAgICAgICAgICAgICBhdXRvQWN0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBkaWUoXCJJbnZhbGlkIGFyZ3VtZW50cyBmb3IgYGFjdGlvbmBcIilcbiAgICAgICAgfVxuICAgIH0gYXMgSUFjdGlvbkZhY3RvcnlcbiAgICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IElBY3Rpb25GYWN0b3J5ID0gY3JlYXRlQWN0aW9uRmFjdG9yeShmYWxzZSlcbk9iamVjdC5hc3NpZ24oYWN0aW9uLCBhY3Rpb25Bbm5vdGF0aW9uKVxuZXhwb3J0IGNvbnN0IGF1dG9BY3Rpb246IElBY3Rpb25GYWN0b3J5ID0gY3JlYXRlQWN0aW9uRmFjdG9yeSh0cnVlKVxuT2JqZWN0LmFzc2lnbihhdXRvQWN0aW9uLCBhdXRvQWN0aW9uQW5ub3RhdGlvbilcblxuYWN0aW9uLmJvdW5kID0gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhY3Rpb25Cb3VuZEFubm90YXRpb24pXG5hdXRvQWN0aW9uLmJvdW5kID0gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhdXRvQWN0aW9uQm91bmRBbm5vdGF0aW9uKVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuSW5BY3Rpb248VD4oZm46ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihmbi5uYW1lIHx8IERFRkFVTFRfQUNUSU9OX05BTUUsIGZhbHNlLCBmbiwgdGhpcywgdW5kZWZpbmVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBY3Rpb24odGhpbmc6IGFueSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaW5nKSAmJiB0aGluZy5pc01vYnhBY3Rpb24gPT09IHRydWVcbn1cbiIsImltcG9ydCB7XG4gICAgRU1QVFlfT0JKRUNULFxuICAgIElFcXVhbHNDb21wYXJlcixcbiAgICBJUmVhY3Rpb25EaXNwb3NlcixcbiAgICBJUmVhY3Rpb25QdWJsaWMsXG4gICAgTGFtYmRhLFxuICAgIFJlYWN0aW9uLFxuICAgIGFjdGlvbixcbiAgICBjb21wYXJlcixcbiAgICBnZXROZXh0SWQsXG4gICAgaXNBY3Rpb24sXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1BsYWluT2JqZWN0LFxuICAgIGRpZSxcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc1xufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElBdXRvcnVuT3B0aW9ucyB7XG4gICAgZGVsYXk/OiBudW1iZXJcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogRXhwZXJpbWVudGFsLlxuICAgICAqIFdhcm5zIGlmIHRoZSB2aWV3IGRvZXNuJ3QgdHJhY2sgb2JzZXJ2YWJsZXNcbiAgICAgKi9cbiAgICByZXF1aXJlc09ic2VydmFibGU/OiBib29sZWFuXG4gICAgc2NoZWR1bGVyPzogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiBhbnlcbiAgICBvbkVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWRcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmFtZWQgcmVhY3RpdmUgdmlldyBhbmQga2VlcHMgaXQgYWxpdmUsIHNvIHRoYXQgdGhlIHZpZXcgaXMgYWx3YXlzXG4gKiB1cGRhdGVkIGlmIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGNoYW5nZXMsIGV2ZW4gd2hlbiB0aGUgdmlldyBpcyBub3QgZnVydGhlciB1c2VkIGJ5IHNvbWV0aGluZyBlbHNlLlxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcbiAqIEByZXR1cm5zIGRpc3Bvc2VyIGZ1bmN0aW9uLCB3aGljaCBjYW4gYmUgdXNlZCB0byBzdG9wIHRoZSB2aWV3IGZyb20gYmVpbmcgdXBkYXRlZCBpbiB0aGUgZnV0dXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXV0b3J1bihcbiAgICB2aWV3OiAocjogSVJlYWN0aW9uUHVibGljKSA9PiBhbnksXG4gICAgb3B0czogSUF1dG9ydW5PcHRpb25zID0gRU1QVFlfT0JKRUNUXG4pOiBJUmVhY3Rpb25EaXNwb3NlciB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHZpZXcpKSB7XG4gICAgICAgICAgICBkaWUoXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FjdGlvbih2aWV3KSkge1xuICAgICAgICAgICAgZGllKFwiQXV0b3J1biBkb2VzIG5vdCBhY2NlcHQgYWN0aW9ucyBzaW5jZSBhY3Rpb25zIGFyZSB1bnRyYWNrYWJsZVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZTogc3RyaW5nID1cbiAgICAgICAgb3B0cz8ubmFtZSA/PyAoX19ERVZfXyA/ICh2aWV3IGFzIGFueSkubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQoKSA6IFwiQXV0b3J1blwiKVxuICAgIGNvbnN0IHJ1blN5bmMgPSAhb3B0cy5zY2hlZHVsZXIgJiYgIW9wdHMuZGVsYXlcbiAgICBsZXQgcmVhY3Rpb246IFJlYWN0aW9uXG5cbiAgICBpZiAocnVuU3luYykge1xuICAgICAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBmdW5jdGlvbiAodGhpczogUmVhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdHMub25FcnJvcixcbiAgICAgICAgICAgIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlXG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKVxuICAgICAgICAvLyBkZWJvdW5jZWQgYXV0b3J1blxuICAgICAgICBsZXQgaXNTY2hlZHVsZWQgPSBmYWxzZVxuXG4gICAgICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2hlZHVsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWFjdGlvbi5pc0Rpc3Bvc2VkXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uLnRyYWNrKHJlYWN0aW9uUnVubmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRzLm9uRXJyb3IsXG4gICAgICAgICAgICBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIHZpZXcocmVhY3Rpb24pXG4gICAgfVxuXG4gICAgcmVhY3Rpb24uc2NoZWR1bGVfKClcbiAgICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXJfKClcbn1cblxuZXhwb3J0IHR5cGUgSVJlYWN0aW9uT3B0aW9uczxULCBGaXJlSW1tZWRpYXRlbHkgZXh0ZW5kcyBib29sZWFuPiA9IElBdXRvcnVuT3B0aW9ucyAmIHtcbiAgICBmaXJlSW1tZWRpYXRlbHk/OiBGaXJlSW1tZWRpYXRlbHlcbiAgICBlcXVhbHM/OiBJRXF1YWxzQ29tcGFyZXI8VD5cbn1cblxuY29uc3QgcnVuID0gKGY6IExhbWJkYSkgPT4gZigpXG5cbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHM6IElBdXRvcnVuT3B0aW9ucykge1xuICAgIHJldHVybiBvcHRzLnNjaGVkdWxlclxuICAgICAgICA/IG9wdHMuc2NoZWR1bGVyXG4gICAgICAgIDogb3B0cy5kZWxheVxuICAgICAgICA/IChmOiBMYW1iZGEpID0+IHNldFRpbWVvdXQoZiwgb3B0cy5kZWxheSEpXG4gICAgICAgIDogcnVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGlvbjxULCBGaXJlSW1tZWRpYXRlbHkgZXh0ZW5kcyBib29sZWFuID0gZmFsc2U+KFxuICAgIGV4cHJlc3Npb246IChyOiBJUmVhY3Rpb25QdWJsaWMpID0+IFQsXG4gICAgZWZmZWN0OiAoXG4gICAgICAgIGFyZzogVCxcbiAgICAgICAgcHJldjogRmlyZUltbWVkaWF0ZWx5IGV4dGVuZHMgdHJ1ZSA/IFQgfCB1bmRlZmluZWQgOiBULFxuICAgICAgICByOiBJUmVhY3Rpb25QdWJsaWNcbiAgICApID0+IHZvaWQsXG4gICAgb3B0czogSVJlYWN0aW9uT3B0aW9uczxULCBGaXJlSW1tZWRpYXRlbHk+ID0gRU1QVFlfT0JKRUNUXG4pOiBJUmVhY3Rpb25EaXNwb3NlciB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGV4cHJlc3Npb24pIHx8ICFpc0Z1bmN0aW9uKGVmZmVjdCkpIHtcbiAgICAgICAgICAgIGRpZShcIkZpcnN0IGFuZCBzZWNvbmQgYXJndW1lbnQgdG8gcmVhY3Rpb24gc2hvdWxkIGJlIGZ1bmN0aW9uc1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQbGFpbk9iamVjdChvcHRzKSkge1xuICAgICAgICAgICAgZGllKFwiVGhpcmQgYXJndW1lbnQgb2YgcmVhY3Rpb25zIHNob3VsZCBiZSBhbiBvYmplY3RcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuYW1lID0gb3B0cy5uYW1lID8/IChfX0RFVl9fID8gXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpIDogXCJSZWFjdGlvblwiKVxuICAgIGNvbnN0IGVmZmVjdEFjdGlvbiA9IGFjdGlvbihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3RcbiAgICApXG4gICAgY29uc3QgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheVxuICAgIGNvbnN0IHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpXG5cbiAgICBsZXQgZmlyc3RUaW1lID0gdHJ1ZVxuICAgIGxldCBpc1NjaGVkdWxlZCA9IGZhbHNlXG4gICAgbGV0IHZhbHVlOiBUXG4gICAgbGV0IG9sZFZhbHVlOiBUIHwgdW5kZWZpbmVkXG5cbiAgICBjb25zdCBlcXVhbHM6IElFcXVhbHNDb21wYXJlcjxUPiA9IChvcHRzIGFzIGFueSkuY29tcGFyZVN0cnVjdHVyYWxcbiAgICAgICAgPyBjb21wYXJlci5zdHJ1Y3R1cmFsXG4gICAgICAgIDogb3B0cy5lcXVhbHMgfHwgY29tcGFyZXIuZGVmYXVsdFxuXG4gICAgY29uc3QgciA9IG5ldyBSZWFjdGlvbihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpcnN0VGltZSB8fCBydW5TeW5jKSB7XG4gICAgICAgICAgICAgICAgcmVhY3Rpb25SdW5uZXIoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXIhKHJlYWN0aW9uUnVubmVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRzLm9uRXJyb3IsXG4gICAgICAgIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2VcbiAgICAgICAgaWYgKHIuaXNEaXNwb3NlZF8pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGFuZ2VkOiBib29sZWFuID0gZmFsc2VcbiAgICAgICAgci50cmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBhbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgKCkgPT4gZXhwcmVzc2lvbihyKSlcbiAgICAgICAgICAgIGNoYW5nZWQgPSBmaXJzdFRpbWUgfHwgIWVxdWFscyh2YWx1ZSwgbmV4dFZhbHVlKVxuICAgICAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgdmFsdWUgPSBuZXh0VmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBUaGlzIGNhc3RpbmcgaXMgbmVzZXNzYXJ5IGFzIFRTIGNhbm5vdCBpbmZlciBwcm9wZXIgdHlwZSBpbiBjdXJyZW50IGZ1bmNpdG9uIGltcGxlbWVudGF0aW9uXG4gICAgICAgIHR5cGUgT2xkVmFsdWUgPSBGaXJlSW1tZWRpYXRlbHkgZXh0ZW5kcyB0cnVlID8gVCB8IHVuZGVmaW5lZCA6IFRcbiAgICAgICAgaWYgKGZpcnN0VGltZSAmJiBvcHRzLmZpcmVJbW1lZGlhdGVseSEpIHtcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbih2YWx1ZSwgb2xkVmFsdWUgYXMgT2xkVmFsdWUsIHIpXG4gICAgICAgIH0gZWxzZSBpZiAoIWZpcnN0VGltZSAmJiBjaGFuZ2VkKSB7XG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIG9sZFZhbHVlIGFzIE9sZFZhbHVlLCByKVxuICAgICAgICB9XG4gICAgICAgIGZpcnN0VGltZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgci5zY2hlZHVsZV8oKVxuICAgIHJldHVybiByLmdldERpc3Bvc2VyXygpXG59XG5cbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIElDb21wdXRlZFZhbHVlLFxuICAgIElPYnNlcnZhYmxlLFxuICAgIElPYnNlcnZhYmxlQXJyYXksXG4gICAgTGFtYmRhLFxuICAgIE9ic2VydmFibGVNYXAsXG4gICAgZ2V0QXRvbSxcbiAgICBPYnNlcnZhYmxlU2V0LFxuICAgIGlzRnVuY3Rpb24sXG4gICAgSU9ic2VydmFibGVWYWx1ZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5jb25zdCBPTl9CRUNPTUVfT0JTRVJWRUQgPSBcIm9uQk9cIlxuY29uc3QgT05fQkVDT01FX1VOT0JTRVJWRUQgPSBcIm9uQlVPXCJcblxuZXhwb3J0IGZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQoXG4gICAgdmFsdWU6XG4gICAgICAgIHwgSU9ic2VydmFibGVcbiAgICAgICAgfCBJQ29tcHV0ZWRWYWx1ZTxhbnk+XG4gICAgICAgIHwgSU9ic2VydmFibGVBcnJheTxhbnk+XG4gICAgICAgIHwgT2JzZXJ2YWJsZU1hcDxhbnksIGFueT5cbiAgICAgICAgfCBPYnNlcnZhYmxlU2V0PGFueT5cbiAgICAgICAgfCBJT2JzZXJ2YWJsZVZhbHVlPGFueT4sXG4gICAgbGlzdGVuZXI6IExhbWJkYVxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gb25CZWNvbWVPYnNlcnZlZDxLLCBWID0gYW55PihcbiAgICB2YWx1ZTogT2JzZXJ2YWJsZU1hcDxLLCBWPiB8IE9iamVjdCxcbiAgICBwcm9wZXJ0eTogSyxcbiAgICBsaXN0ZW5lcjogTGFtYmRhXG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBvbkJlY29tZU9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczPyk6IExhbWJkYSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soT05fQkVDT01FX09CU0VSVkVELCB0aGluZywgYXJnMiwgYXJnMylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQmVjb21lVW5vYnNlcnZlZChcbiAgICB2YWx1ZTpcbiAgICAgICAgfCBJT2JzZXJ2YWJsZVxuICAgICAgICB8IElDb21wdXRlZFZhbHVlPGFueT5cbiAgICAgICAgfCBJT2JzZXJ2YWJsZUFycmF5PGFueT5cbiAgICAgICAgfCBPYnNlcnZhYmxlTWFwPGFueSwgYW55PlxuICAgICAgICB8IE9ic2VydmFibGVTZXQ8YW55PlxuICAgICAgICB8IElPYnNlcnZhYmxlVmFsdWU8YW55PixcbiAgICBsaXN0ZW5lcjogTGFtYmRhXG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBvbkJlY29tZVVub2JzZXJ2ZWQ8SywgViA9IGFueT4oXG4gICAgdmFsdWU6IE9ic2VydmFibGVNYXA8SywgVj4gfCBPYmplY3QsXG4gICAgcHJvcGVydHk6IEssXG4gICAgbGlzdGVuZXI6IExhbWJkYVxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczPyk6IExhbWJkYSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soT05fQkVDT01FX1VOT0JTRVJWRUQsIHRoaW5nLCBhcmcyLCBhcmczKVxufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRIb29rKGhvb2s6IFwib25CT1wiIHwgXCJvbkJVT1wiLCB0aGluZywgYXJnMiwgYXJnMykge1xuICAgIGNvbnN0IGF0b206IElPYnNlcnZhYmxlID1cbiAgICAgICAgdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGdldEF0b20odGhpbmcsIGFyZzIpIDogKGdldEF0b20odGhpbmcpIGFzIGFueSlcbiAgICBjb25zdCBjYiA9IGlzRnVuY3Rpb24oYXJnMykgPyBhcmczIDogYXJnMlxuICAgIGNvbnN0IGxpc3RlbmVyc0tleSA9IGAke2hvb2t9TGAgYXMgXCJvbkJPTFwiIHwgXCJvbkJVT0xcIlxuXG4gICAgaWYgKGF0b21bbGlzdGVuZXJzS2V5XSkge1xuICAgICAgICBhdG9tW2xpc3RlbmVyc0tleV0hLmFkZChjYilcbiAgICB9IGVsc2Uge1xuICAgICAgICBhdG9tW2xpc3RlbmVyc0tleV0gPSBuZXcgU2V0PExhbWJkYT4oW2NiXSlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBob29rTGlzdGVuZXJzID0gYXRvbVtsaXN0ZW5lcnNLZXldXG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBob29rTGlzdGVuZXJzLmRlbGV0ZShjYilcbiAgICAgICAgICAgIGlmIChob29rTGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnbG9iYWxTdGF0ZSwgaXNvbGF0ZUdsb2JhbFN0YXRlLCBzZXRSZWFjdGlvblNjaGVkdWxlciB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmNvbnN0IE5FVkVSID0gXCJuZXZlclwiXG5jb25zdCBBTFdBWVMgPSBcImFsd2F5c1wiXG5jb25zdCBPQlNFUlZFRCA9IFwib2JzZXJ2ZWRcIlxuLy8gY29uc3QgSUZfQVZBSUxBQkxFID0gXCJpZmF2YWlsYWJsZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUob3B0aW9uczoge1xuICAgIGVuZm9yY2VBY3Rpb25zPzogXCJuZXZlclwiIHwgXCJhbHdheXNcIiB8IFwib2JzZXJ2ZWRcIlxuICAgIGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbj86IGJvb2xlYW5cbiAgICAvKipcbiAgICAgKiBXYXJuIGlmIHlvdSB0cnkgdG8gY3JlYXRlIHRvIGRlcml2YXRpb24gLyByZWFjdGl2ZSBjb250ZXh0IHdpdGhvdXQgYWNjZXNzaW5nIGFueSBvYnNlcnZhYmxlLlxuICAgICAqL1xuICAgIHJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlPzogYm9vbGVhblxuICAgIC8qKlxuICAgICAqIFdhcm4gaWYgb2JzZXJ2YWJsZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XG4gICAgICovXG4gICAgb2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24/OiBib29sZWFuXG4gICAgaXNvbGF0ZUdsb2JhbFN0YXRlPzogYm9vbGVhblxuICAgIGRpc2FibGVFcnJvckJvdW5kYXJpZXM/OiBib29sZWFuXG4gICAgc2FmZURlc2NyaXB0b3JzPzogYm9vbGVhblxuICAgIHJlYWN0aW9uU2NoZWR1bGVyPzogKGY6ICgpID0+IHZvaWQpID0+IHZvaWRcbiAgICB1c2VQcm94aWVzPzogXCJhbHdheXNcIiB8IFwibmV2ZXJcIiB8IFwiaWZhdmFpbGFibGVcIlxufSk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLmlzb2xhdGVHbG9iYWxTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpc29sYXRlR2xvYmFsU3RhdGUoKVxuICAgIH1cbiAgICBjb25zdCB7IHVzZVByb3hpZXMsIGVuZm9yY2VBY3Rpb25zIH0gPSBvcHRpb25zXG4gICAgaWYgKHVzZVByb3hpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS51c2VQcm94aWVzID1cbiAgICAgICAgICAgIHVzZVByb3hpZXMgPT09IEFMV0FZU1xuICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgIDogdXNlUHJveGllcyA9PT0gTkVWRVJcbiAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgOiB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCJcbiAgICB9XG4gICAgaWYgKHVzZVByb3hpZXMgPT09IFwiaWZhdmFpbGFibGVcIikge1xuICAgICAgICBnbG9iYWxTdGF0ZS52ZXJpZnlQcm94aWVzID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoZW5mb3JjZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlYSA9IGVuZm9yY2VBY3Rpb25zID09PSBBTFdBWVMgPyBBTFdBWVMgOiBlbmZvcmNlQWN0aW9ucyA9PT0gT0JTRVJWRURcbiAgICAgICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYVxuICAgICAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBBTFdBWVMgPyBmYWxzZSA6IHRydWVcbiAgICB9XG4gICAgO1tcbiAgICAgICAgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIixcbiAgICAgICAgXCJyZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZVwiLFxuICAgICAgICBcIm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uXCIsXG4gICAgICAgIFwiZGlzYWJsZUVycm9yQm91bmRhcmllc1wiLFxuICAgICAgICBcInNhZmVEZXNjcmlwdG9yc1wiXG4gICAgXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9ICEhb3B0aW9uc1trZXldXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9ICFnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblxuICAgIGlmIChfX0RFVl9fICYmIGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJXQVJOSU5HOiBEZWJ1ZyBmZWF0dXJlIG9ubHkuIE1vYlggd2lsbCBOT1QgcmVjb3ZlciBmcm9tIGVycm9ycyB3aGVuIGBkaXNhYmxlRXJyb3JCb3VuZGFyaWVzYCBpcyBlbmFibGVkLlwiXG4gICAgICAgIClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICAgICAgc2V0UmVhY3Rpb25TY2hlZHVsZXIob3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlcilcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENyZWF0ZU9ic2VydmFibGVPcHRpb25zLFxuICAgIGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBBbm5vdGF0aW9uc01hcCxcbiAgICBzdGFydEJhdGNoLFxuICAgIGVuZEJhdGNoLFxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCxcbiAgICBpc1BsYWluT2JqZWN0LFxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbixcbiAgICBpc09ic2VydmFibGUsXG4gICAgZGllLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMsXG4gICAgJG1vYngsXG4gICAgb3duS2V5c1xufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZTxBIGV4dGVuZHMgT2JqZWN0LCBCIGV4dGVuZHMgT2JqZWN0PihcbiAgICB0YXJnZXQ6IEEsXG4gICAgcHJvcGVydGllczogQixcbiAgICBhbm5vdGF0aW9ucz86IEFubm90YXRpb25zTWFwPEIsIG5ldmVyPixcbiAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbik6IEEgJiBCIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGRpZShcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RzIGFuIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgICAgICAgIGRpZShgJ2V4dGVuZE9ic2VydmFibGUnIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzIGFzIHNlY29uZCBhcmd1bWVudGApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZShwcm9wZXJ0aWVzKSB8fCBpc09ic2VydmFibGUoYW5ub3RhdGlvbnMpKSB7XG4gICAgICAgICAgICBkaWUoYEV4dGVuZGluZyBhbiBvYmplY3Qgd2l0aCBhbm90aGVyIG9ic2VydmFibGUgKG9iamVjdCkgaXMgbm90IHN1cHBvcnRlZGApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHVsbCBkZXNjcmlwdG9ycyBmaXJzdCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkZWFsIHdpdGggcHJvcHMgYWRkZWQgYnkgYWRtaW5pc3RyYXRpb24gKCRtb2J4KVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9wZXJ0aWVzKVxuXG4gICAgY29uc3QgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKVskbW9ieF1cbiAgICBzdGFydEJhdGNoKClcbiAgICB0cnkge1xuICAgICAgICBvd25LZXlzKGRlc2NyaXB0b3JzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBhZG0uZXh0ZW5kXyhcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcnNba2V5IGFzIGFueV0sXG4gICAgICAgICAgICAgICAgLy8gbXVzdCBwYXNzIFwidW5kZWZpbmVkXCIgZm9yIHsga2V5OiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgICAgICFhbm5vdGF0aW9ucyA/IHRydWUgOiBrZXkgaW4gYW5ub3RhdGlvbnMgPyBhbm5vdGF0aW9uc1trZXldIDogdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKClcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldCBhcyBhbnlcbn1cbiIsImltcG9ydCB7IElEZXBUcmVlTm9kZSwgZ2V0QXRvbSwgZ2V0T2JzZXJ2ZXJzLCBoYXNPYnNlcnZlcnMgfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElEZXBlbmRlbmN5VHJlZSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGVwZW5kZW5jaWVzPzogSURlcGVuZGVuY3lUcmVlW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2ZXJUcmVlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBvYnNlcnZlcnM/OiBJT2JzZXJ2ZXJUcmVlW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlKHRoaW5nOiBhbnksIHByb3BlcnR5Pzogc3RyaW5nKTogSURlcGVuZGVuY3lUcmVlIHtcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKVxufVxuXG5mdW5jdGlvbiBub2RlVG9EZXBlbmRlbmN5VHJlZShub2RlOiBJRGVwVHJlZU5vZGUpOiBJRGVwZW5kZW5jeVRyZWUge1xuICAgIGNvbnN0IHJlc3VsdDogSURlcGVuZGVuY3lUcmVlID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVfXG4gICAgfVxuICAgIGlmIChub2RlLm9ic2VydmluZ18gJiYgbm9kZS5vYnNlcnZpbmdfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZ18pLm1hcChub2RlVG9EZXBlbmRlbmN5VHJlZSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJUcmVlKHRoaW5nOiBhbnksIHByb3BlcnR5Pzogc3RyaW5nKTogSU9ic2VydmVyVHJlZSB7XG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpXG59XG5cbmZ1bmN0aW9uIG5vZGVUb09ic2VydmVyVHJlZShub2RlOiBJRGVwVHJlZU5vZGUpOiBJT2JzZXJ2ZXJUcmVlIHtcbiAgICBjb25zdCByZXN1bHQ6IElPYnNlcnZlclRyZWUgPSB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZV9cbiAgICB9XG4gICAgaWYgKGhhc09ic2VydmVycyhub2RlIGFzIGFueSkpIHtcbiAgICAgICAgcmVzdWx0Lm9ic2VydmVycyA9IEFycmF5LmZyb20oPGFueT5nZXRPYnNlcnZlcnMobm9kZSBhcyBhbnkpKS5tYXAoPGFueT5ub2RlVG9PYnNlcnZlclRyZWUpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gdW5pcXVlPFQ+KGxpc3Q6IFRbXSk6IFRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsaXN0KSlcbn1cbiIsImltcG9ydCB7XG4gICAgYWN0aW9uLFxuICAgIG5vb3AsXG4gICAgZGllLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgQW5ub3RhdGlvbixcbiAgICBpc1N0cmluZ2lzaCxcbiAgICBzdG9yZUFubm90YXRpb24sXG4gICAgY3JlYXRlRmxvd0Fubm90YXRpb24sXG4gICAgY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgY29uc3QgRkxPVyA9IFwiZmxvd1wiXG5cbmxldCBnZW5lcmF0b3JJZCA9IDBcblxuZXhwb3J0IGZ1bmN0aW9uIEZsb3dDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIkZMT1dfQ0FOQ0VMTEVEXCJcbn1cbkZsb3dDYW5jZWxsYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmxvd0NhbmNlbGxhdGlvbkVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEZsb3dDYW5jZWxsYXRpb25FcnJvclxufVxuXG5leHBvcnQgdHlwZSBDYW5jZWxsYWJsZVByb21pc2U8VD4gPSBQcm9taXNlPFQ+ICYgeyBjYW5jZWwoKTogdm9pZCB9XG5cbmludGVyZmFjZSBGbG93IGV4dGVuZHMgQW5ub3RhdGlvbiwgUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIDxSLCBBcmdzIGV4dGVuZHMgYW55W10+KFxuICAgICAgICBnZW5lcmF0b3I6ICguLi5hcmdzOiBBcmdzKSA9PiBHZW5lcmF0b3I8YW55LCBSLCBhbnk+IHwgQXN5bmNHZW5lcmF0b3I8YW55LCBSLCBhbnk+XG4gICAgKTogKC4uLmFyZ3M6IEFyZ3MpID0+IENhbmNlbGxhYmxlUHJvbWlzZTxSPlxuICAgIGJvdW5kOiBBbm5vdGF0aW9uICYgUHJvcGVydHlEZWNvcmF0b3Jcbn1cblxuY29uc3QgZmxvd0Fubm90YXRpb24gPSBjcmVhdGVGbG93QW5ub3RhdGlvbihcImZsb3dcIilcbmNvbnN0IGZsb3dCb3VuZEFubm90YXRpb24gPSBjcmVhdGVGbG93QW5ub3RhdGlvbihcImZsb3cuYm91bmRcIiwgeyBib3VuZDogdHJ1ZSB9KVxuXG5leHBvcnQgY29uc3QgZmxvdzogRmxvdyA9IE9iamVjdC5hc3NpZ24oXG4gICAgZnVuY3Rpb24gZmxvdyhhcmcxLCBhcmcyPykge1xuICAgICAgICAvLyBAZmxvd1xuICAgICAgICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZUFubm90YXRpb24oYXJnMSwgYXJnMiwgZmxvd0Fubm90YXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgLy8gZmxvdyhmbilcbiAgICAgICAgaWYgKF9fREVWX18gJiYgYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgZGllKGBGbG93IGV4cGVjdHMgc2luZ2xlIGFyZ3VtZW50IHdpdGggZ2VuZXJhdG9yIGZ1bmN0aW9uYClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBhcmcxXG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCJcblxuICAgICAgICAvLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdGovY28vYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgICAgICAgY29uc3QgcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpc1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuICAgICAgICAgICAgY29uc3QgcnVuSWQgPSArK2dlbmVyYXRvcklkXG4gICAgICAgICAgICBjb25zdCBnZW4gPSBhY3Rpb24oYCR7bmFtZX0gLSBydW5pZDogJHtydW5JZH0gLSBpbml0YCwgZ2VuZXJhdG9yKS5hcHBseShjdHgsIGFyZ3MpXG4gICAgICAgICAgICBsZXQgcmVqZWN0b3I6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICAgICAgICAgICBsZXQgcGVuZGluZ1Byb21pc2U6IENhbmNlbGxhYmxlUHJvbWlzZTxhbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBJZCA9IDBcbiAgICAgICAgICAgICAgICByZWplY3RvciA9IHJlamVjdFxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke25hbWV9IC0gcnVuaWQ6ICR7cnVuSWR9IC0geWllbGQgJHtzdGVwSWQrK31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbi5uZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICApLmNhbGwoZ2VuLCByZXMpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5leHQocmV0KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke25hbWV9IC0gcnVuaWQ6ICR7cnVuSWR9IC0geWllbGQgJHtzdGVwSWQrK31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbi50aHJvdyFcbiAgICAgICAgICAgICAgICAgICAgICAgICkuY2FsbChnZW4sIGVycilcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHQocmV0KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQocmV0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmV0Py50aGVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW4gYXN5bmMgaXRlcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC50aGVuKG5leHQsIHJlamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJldC52YWx1ZSkgYXMgYW55XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwZW5kaW5nUHJvbWlzZSEudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvbkZ1bGZpbGxlZCh1bmRlZmluZWQpIC8vIGtpY2sgb2ZmIHRoZSBwcm9jZXNzXG4gICAgICAgICAgICB9KSBhcyBhbnlcblxuICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24oYCR7bmFtZX0gLSBydW5pZDogJHtydW5JZH0gLSBjYW5jZWxgLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHBlbmRpbmdQcm9taXNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgYmxvY2sgY2FuIHJldHVybiAob3IgeWllbGQpIHN0dWZmLi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZ2VuLnJldHVybiEodW5kZWZpbmVkIGFzIGFueSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHlpZWxkZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wLCBub29wKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKSAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICByZWplY3RvcihuZXcgRmxvd0NhbmNlbGxhdGlvbkVycm9yKCkpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3RvcihlKSAvLyB0aGVyZSBjb3VsZCBiZSBhIHRocm93aW5nIGZpbmFsbHkgYmxvY2tcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgfVxuICAgICAgICByZXMuaXNNb2JYRmxvdyA9IHRydWVcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH0gYXMgYW55LFxuICAgIGZsb3dBbm5vdGF0aW9uXG4pXG5cbmZsb3cuYm91bmQgPSBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGZsb3dCb3VuZEFubm90YXRpb24pXG5cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHByb21pc2UuY2FuY2VsKSkge1xuICAgICAgICBwcm9taXNlLmNhbmNlbCgpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvd1Jlc3VsdDxUPihcbiAgICByZXN1bHQ6IFRcbik6IFQgZXh0ZW5kcyBHZW5lcmF0b3I8YW55LCBpbmZlciBSLCBhbnk+XG4gICAgPyBDYW5jZWxsYWJsZVByb21pc2U8Uj5cbiAgICA6IFQgZXh0ZW5kcyBDYW5jZWxsYWJsZVByb21pc2U8YW55PlxuICAgID8gVFxuICAgIDogbmV2ZXIge1xuICAgIHJldHVybiByZXN1bHQgYXMgYW55IC8vIGp1c3QgdHJpY2tpbmcgVHlwZVNjcmlwdCA6KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGbG93KGZuOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZm4/LmlzTW9iWEZsb3cgPT09IHRydWVcbn1cbiIsImltcG9ydCB7XG4gICAgSU9ic2VydmFibGVBcnJheSxcbiAgICBJT2JzZXJ2YWJsZVZhbHVlLFxuICAgIExhbWJkYSxcbiAgICBPYnNlcnZhYmxlTWFwLFxuICAgIGdldEFkbWluaXN0cmF0aW9uLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5LFxuICAgIGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBpc09ic2VydmFibGVPYmplY3QsXG4gICAgaXNPYnNlcnZhYmxlVmFsdWUsXG4gICAgT2JzZXJ2YWJsZVNldCxcbiAgICBkaWUsXG4gICAgaXNTdHJpbmdpc2hcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IHR5cGUgUmVhZEludGVyY2VwdG9yPFQ+ID0gKHZhbHVlOiBhbnkpID0+IFRcblxuLyoqIEV4cGVyaW1lbnRhbCBmZWF0dXJlIHJpZ2h0IG5vdywgdGVzdGVkIGluZGlyZWN0bHkgdmlhIE1vYngtU3RhdGUtVHJlZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdFJlYWRzPFQ+KHZhbHVlOiBJT2JzZXJ2YWJsZVZhbHVlPFQ+LCBoYW5kbGVyOiBSZWFkSW50ZXJjZXB0b3I8VD4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHRSZWFkczxUPihcbiAgICBvYnNlcnZhYmxlQXJyYXk6IElPYnNlcnZhYmxlQXJyYXk8VD4sXG4gICAgaGFuZGxlcjogUmVhZEludGVyY2VwdG9yPFQ+XG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHRSZWFkczxLLCBWPihcbiAgICBvYnNlcnZhYmxlTWFwOiBPYnNlcnZhYmxlTWFwPEssIFY+LFxuICAgIGhhbmRsZXI6IFJlYWRJbnRlcmNlcHRvcjxWPlxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHM8Vj4oXG4gICAgb2JzZXJ2YWJsZVNldDogT2JzZXJ2YWJsZVNldDxWPixcbiAgICBoYW5kbGVyOiBSZWFkSW50ZXJjZXB0b3I8Vj5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdFJlYWRzKFxuICAgIG9iamVjdDogT2JqZWN0LFxuICAgIHByb3BlcnR5OiBzdHJpbmcsXG4gICAgaGFuZGxlcjogUmVhZEludGVyY2VwdG9yPGFueT5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdFJlYWRzKHRoaW5nLCBwcm9wT3JIYW5kbGVyPywgaGFuZGxlcj8pOiBMYW1iZGEge1xuICAgIGxldCB0YXJnZXRcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVBcnJheSh0aGluZykgfHwgaXNPYnNlcnZhYmxlVmFsdWUodGhpbmcpKSB7XG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgICAgICBpZiAoX19ERVZfXyAmJiAhaXNTdHJpbmdpc2gocHJvcE9ySGFuZGxlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWUoXG4gICAgICAgICAgICAgICAgYEludGVyY2VwdFJlYWRzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHNwZWNpZmljIHByb3BlcnR5LCBub3Qgd2l0aCBhbiBvYmplY3QgaW4gZ2VuZXJhbGBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcilcbiAgICB9IGVsc2UgaWYgKF9fREVWX18pIHtcbiAgICAgICAgcmV0dXJuIGRpZShgRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheWApXG4gICAgfVxuICAgIGlmIChfX0RFVl9fICYmIHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkaWUoYEFuIGludGVyY2VwdCByZWFkZXIgd2FzIGFscmVhZHkgZXN0YWJsaXNoZWRgKVxuICAgIH1cbiAgICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXJcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0YXJnZXQuZGVoYW5jZXIgPSB1bmRlZmluZWRcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIElBcnJheVdpbGxDaGFuZ2UsXG4gICAgSUFycmF5V2lsbFNwbGljZSxcbiAgICBJSW50ZXJjZXB0b3IsXG4gICAgSU1hcFdpbGxDaGFuZ2UsXG4gICAgSU9iamVjdFdpbGxDaGFuZ2UsXG4gICAgSU9ic2VydmFibGVBcnJheSxcbiAgICBJT2JzZXJ2YWJsZVZhbHVlLFxuICAgIElWYWx1ZVdpbGxDaGFuZ2UsXG4gICAgTGFtYmRhLFxuICAgIE9ic2VydmFibGVNYXAsXG4gICAgZ2V0QWRtaW5pc3RyYXRpb24sXG4gICAgT2JzZXJ2YWJsZVNldCxcbiAgICBJU2V0V2lsbENoYW5nZSxcbiAgICBpc0Z1bmN0aW9uXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHQ8VD4oXG4gICAgdmFsdWU6IElPYnNlcnZhYmxlVmFsdWU8VD4sXG4gICAgaGFuZGxlcjogSUludGVyY2VwdG9yPElWYWx1ZVdpbGxDaGFuZ2U8VD4+XG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHQ8VD4oXG4gICAgb2JzZXJ2YWJsZUFycmF5OiBJT2JzZXJ2YWJsZUFycmF5PFQ+IHwgQXJyYXk8VD4sXG4gICAgaGFuZGxlcjogSUludGVyY2VwdG9yPElBcnJheVdpbGxDaGFuZ2U8VD4gfCBJQXJyYXlXaWxsU3BsaWNlPFQ+PlxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0PEssIFY+KFxuICAgIG9ic2VydmFibGVNYXA6IE9ic2VydmFibGVNYXA8SywgVj4gfCBNYXA8SywgVj4sXG4gICAgaGFuZGxlcjogSUludGVyY2VwdG9yPElNYXBXaWxsQ2hhbmdlPEssIFY+PlxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0PFY+KFxuICAgIG9ic2VydmFibGVTZXQ6IE9ic2VydmFibGVTZXQ8Vj4gfCBTZXQ8Vj4sXG4gICAgaGFuZGxlcjogSUludGVyY2VwdG9yPElTZXRXaWxsQ2hhbmdlPFY+PlxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0PEssIFY+KFxuICAgIG9ic2VydmFibGVNYXA6IE9ic2VydmFibGVNYXA8SywgVj4gfCBNYXA8SywgVj4sXG4gICAgcHJvcGVydHk6IEssXG4gICAgaGFuZGxlcjogSUludGVyY2VwdG9yPElWYWx1ZVdpbGxDaGFuZ2U8Vj4+XG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHQob2JqZWN0OiBvYmplY3QsIGhhbmRsZXI6IElJbnRlcmNlcHRvcjxJT2JqZWN0V2lsbENoYW5nZT4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHQ8VCBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuICAgIG9iamVjdDogVCxcbiAgICBwcm9wZXJ0eTogSyxcbiAgICBoYW5kbGVyOiBJSW50ZXJjZXB0b3I8SVZhbHVlV2lsbENoYW5nZTxUW0tdPj5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdCh0aGluZywgcHJvcE9ySGFuZGxlcj8sIGhhbmRsZXI/KTogTGFtYmRhIHtcbiAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICByZXR1cm4gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIHByb3BPckhhbmRsZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHRfKGhhbmRsZXIpXG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcikge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdF8oaGFuZGxlcilcbn1cbiIsImltcG9ydCB7ICRtb2J4LCBnZXRBdG9tLCBpc0NvbXB1dGVkVmFsdWUsIGlzT2JzZXJ2YWJsZU9iamVjdCwgZGllLCBpc1N0cmluZ2lzaCB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcGVydHk/OiBQcm9wZXJ0eUtleSk6IGJvb2xlYW4ge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKCF2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBhdG9tID0gZ2V0QXRvbSh2YWx1ZSwgcHJvcGVydHkpXG4gICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZShhdG9tKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKF9fREVWX18gJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGRpZShcbiAgICAgICAgICAgIGBpc0NvbXB1dGVkIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNDb21wdXRlZFByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5YFxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcHV0ZWRQcm9wKHZhbHVlOiBhbnksIHByb3BOYW1lOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW4ge1xuICAgIGlmIChfX0RFVl9fICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGRpZShgaXNDb21wdXRlZCBleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50YClcbiAgICB9XG4gICAgcmV0dXJuIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wTmFtZSlcbn1cbiIsImltcG9ydCB7XG4gICAgJG1vYngsXG4gICAgaXNBdG9tLFxuICAgIGlzQ29tcHV0ZWRWYWx1ZSxcbiAgICBpc09ic2VydmFibGVBcnJheSxcbiAgICBpc09ic2VydmFibGVNYXAsXG4gICAgaXNPYnNlcnZhYmxlT2JqZWN0LFxuICAgIGlzUmVhY3Rpb24sXG4gICAgZGllLFxuICAgIGlzU3RyaW5naXNoXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmZ1bmN0aW9uIF9pc09ic2VydmFibGUodmFsdWUsIHByb3BlcnR5PzogUHJvcGVydHlLZXkpOiBib29sZWFuIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoX19ERVZfXyAmJiAoaXNPYnNlcnZhYmxlTWFwKHZhbHVlKSB8fCBpc09ic2VydmFibGVBcnJheSh2YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGllKFxuICAgICAgICAgICAgICAgIFwiaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIEZvciBmaXJzdCBjaGVjaywgc2VlICM3MDFcbiAgICByZXR1cm4gKFxuICAgICAgICBpc09ic2VydmFibGVPYmplY3QodmFsdWUpIHx8XG4gICAgICAgICEhdmFsdWVbJG1vYnhdIHx8XG4gICAgICAgIGlzQXRvbSh2YWx1ZSkgfHxcbiAgICAgICAgaXNSZWFjdGlvbih2YWx1ZSkgfHxcbiAgICAgICAgaXNDb21wdXRlZFZhbHVlKHZhbHVlKVxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKF9fREVWX18gJiYgYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICBkaWUoXG4gICAgICAgICAgICBgaXNPYnNlcnZhYmxlIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNPYnNlcnZhYmxlUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlgXG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09ic2VydmFibGVQcm9wKHZhbHVlOiBhbnksIHByb3BOYW1lOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW4ge1xuICAgIGlmIChfX0RFVl9fICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGRpZShgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudGApXG4gICAgfVxuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wTmFtZSlcbn1cbiIsImltcG9ydCB7XG4gICAgJG1vYngsXG4gICAgSUlzT2JzZXJ2YWJsZU9iamVjdCxcbiAgICBJT2JzZXJ2YWJsZUFycmF5LFxuICAgIE9ic2VydmFibGVNYXAsXG4gICAgT2JzZXJ2YWJsZVNldCxcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgZW5kQmF0Y2gsXG4gICAgaXNPYnNlcnZhYmxlQXJyYXksXG4gICAgaXNPYnNlcnZhYmxlTWFwLFxuICAgIGlzT2JzZXJ2YWJsZVNldCxcbiAgICBpc09ic2VydmFibGVPYmplY3QsXG4gICAgc3RhcnRCYXRjaCxcbiAgICBkaWVcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGtleXM8Sz4obWFwOiBPYnNlcnZhYmxlTWFwPEssIGFueT4pOiBSZWFkb25seUFycmF5PEs+XG5leHBvcnQgZnVuY3Rpb24ga2V5czxUPihhcjogSU9ic2VydmFibGVBcnJheTxUPik6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPlxuZXhwb3J0IGZ1bmN0aW9uIGtleXM8VD4oc2V0OiBPYnNlcnZhYmxlU2V0PFQ+KTogUmVhZG9ubHlBcnJheTxUPlxuZXhwb3J0IGZ1bmN0aW9uIGtleXM8VCBleHRlbmRzIE9iamVjdD4ob2JqOiBUKTogUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzKG9iajogYW55KTogYW55IHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChvYmogYXMgYW55IGFzIElJc09ic2VydmFibGVPYmplY3QpWyRtb2J4XSBhcyBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cbiAgICAgICAgKS5rZXlzXygpXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSB8fCBpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoXywgaW5kZXgpID0+IGluZGV4KVxuICAgIH1cbiAgICBkaWUoNSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlczxLLCBUPihtYXA6IE9ic2VydmFibGVNYXA8SywgVD4pOiBSZWFkb25seUFycmF5PFQ+XG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzPFQ+KHNldDogT2JzZXJ2YWJsZVNldDxUPik6IFJlYWRvbmx5QXJyYXk8VD5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXM8VD4oYXI6IElPYnNlcnZhYmxlQXJyYXk8VD4pOiBSZWFkb25seUFycmF5PFQ+XG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzPFQgPSBhbnk+KG9iajogVCk6IFJlYWRvbmx5QXJyYXk8VCBleHRlbmRzIG9iamVjdCA/IFRba2V5b2YgVF0gOiBhbnk+XG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzKG9iajogYW55KTogc3RyaW5nW10ge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChrZXkgPT4gb2JqW2tleV0pXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChrZXkgPT4gb2JqLmdldChrZXkpKVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLnZhbHVlcygpKVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLnNsaWNlKClcbiAgICB9XG4gICAgZGllKDYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRyaWVzPEssIFQ+KG1hcDogT2JzZXJ2YWJsZU1hcDxLLCBUPik6IFJlYWRvbmx5QXJyYXk8W0ssIFRdPlxuZXhwb3J0IGZ1bmN0aW9uIGVudHJpZXM8VD4oc2V0OiBPYnNlcnZhYmxlU2V0PFQ+KTogUmVhZG9ubHlBcnJheTxbVCwgVF0+XG5leHBvcnQgZnVuY3Rpb24gZW50cmllczxUPihhcjogSU9ic2VydmFibGVBcnJheTxUPik6IFJlYWRvbmx5QXJyYXk8W251bWJlciwgVF0+XG5leHBvcnQgZnVuY3Rpb24gZW50cmllczxUID0gYW55PihcbiAgICBvYmo6IFRcbik6IFJlYWRvbmx5QXJyYXk8W3N0cmluZywgVCBleHRlbmRzIG9iamVjdCA/IFRba2V5b2YgVF0gOiBhbnldPlxuZXhwb3J0IGZ1bmN0aW9uIGVudHJpZXMob2JqOiBhbnkpOiBhbnkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChrZXkgPT4gW2tleSwgb2JqW2tleV1dKVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoa2V5ID0+IFtrZXksIG9iai5nZXQoa2V5KV0pXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmouZW50cmllcygpKVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoa2V5LCBpbmRleCkgPT4gW2luZGV4LCBrZXldKVxuICAgIH1cbiAgICBkaWUoNylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldDxWPihvYmo6IE9ic2VydmFibGVNYXA8UHJvcGVydHlLZXksIFY+LCB2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogViB9KVxuZXhwb3J0IGZ1bmN0aW9uIHNldDxLLCBWPihvYmo6IE9ic2VydmFibGVNYXA8SywgVj4sIGtleTogSywgdmFsdWU6IFYpXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQ+KG9iajogT2JzZXJ2YWJsZVNldDxUPiwgdmFsdWU6IFQpXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQ+KG9iajogSU9ic2VydmFibGVBcnJheTxUPiwgaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwgdmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KVxuZXhwb3J0IGZ1bmN0aW9uIHNldDxUIGV4dGVuZHMgT2JqZWN0PihvYmo6IFQsIGtleTogUHJvcGVydHlLZXksIHZhbHVlOiBhbnkpXG5leHBvcnQgZnVuY3Rpb24gc2V0KG9iajogYW55LCBrZXk6IGFueSwgdmFsdWU/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgc3RhcnRCYXRjaCgpXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHNldChvYmosIGtleSwgdmFsdWVzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBlbmRCYXRjaCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICA7KG9iaiBhcyBhbnkgYXMgSUlzT2JzZXJ2YWJsZU9iamVjdClbJG1vYnhdLnNldF8oa2V5LCB2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgICAgIG9iai5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIG9iai5hZGQoa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMClcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5IDwgMCkge1xuICAgICAgICAgICAgZGllKGBJbnZhbGlkIGluZGV4OiAnJHtrZXl9J2ApXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRCYXRjaCgpXG4gICAgICAgIGlmIChrZXkgPj0gb2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDFcbiAgICAgICAgfVxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgICAgIGVuZEJhdGNoKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWUoOClcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmU8SywgVj4ob2JqOiBPYnNlcnZhYmxlTWFwPEssIFY+LCBrZXk6IEspXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlPFQ+KG9iajogT2JzZXJ2YWJsZVNldDxUPiwga2V5OiBUKVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZTxUPihvYmo6IElPYnNlcnZhYmxlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlPFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwga2V5OiBzdHJpbmcpXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKG9iajogYW55LCBrZXk6IGFueSk6IHZvaWQge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICA7KG9iaiBhcyBhbnkgYXMgSUlzT2JzZXJ2YWJsZU9iamVjdClbJG1vYnhdLmRlbGV0ZV8oa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgb2JqLmRlbGV0ZShrZXkpXG4gICAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICBvYmouZGVsZXRlKGtleSlcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApXG4gICAgICAgIH1cbiAgICAgICAgb2JqLnNwbGljZShrZXksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGllKDkpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzPEs+KG9iajogT2JzZXJ2YWJsZU1hcDxLLCBhbnk+LCBrZXk6IEspOiBib29sZWFuXG5leHBvcnQgZnVuY3Rpb24gaGFzPFQ+KG9iajogT2JzZXJ2YWJsZVNldDxUPiwga2V5OiBUKTogYm9vbGVhblxuZXhwb3J0IGZ1bmN0aW9uIGhhczxUPihvYmo6IElPYnNlcnZhYmxlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpOiBib29sZWFuXG5leHBvcnQgZnVuY3Rpb24gaGFzPFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwga2V5OiBzdHJpbmcpOiBib29sZWFuXG5leHBvcnQgZnVuY3Rpb24gaGFzKG9iajogYW55LCBrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gKG9iaiBhcyBhbnkgYXMgSUlzT2JzZXJ2YWJsZU9iamVjdClbJG1vYnhdLmhhc18oa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5ID49IDAgJiYga2V5IDwgb2JqLmxlbmd0aFxuICAgIH1cbiAgICBkaWUoMTApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8SywgVj4ob2JqOiBPYnNlcnZhYmxlTWFwPEssIFY+LCBrZXk6IEspOiBWIHwgdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFQ+KG9iajogSU9ic2VydmFibGVBcnJheTxUPiwgaW5kZXg6IG51bWJlcik6IFQgfCB1bmRlZmluZWRcbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VCBleHRlbmRzIE9iamVjdD4ob2JqOiBULCBrZXk6IHN0cmluZyk6IGFueVxuZXhwb3J0IGZ1bmN0aW9uIGdldChvYmo6IGFueSwga2V5OiBhbnkpOiBhbnkge1xuICAgIGlmICghaGFzKG9iaiwga2V5KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gKG9iaiBhcyBhbnkgYXMgSUlzT2JzZXJ2YWJsZU9iamVjdClbJG1vYnhdLmdldF8oa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5nZXQoa2V5KVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV1cbiAgICB9XG4gICAgZGllKDExKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpRGVmaW5lUHJvcGVydHkob2JqOiBPYmplY3QsIGtleTogUHJvcGVydHlLZXksIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gKG9iaiBhcyBhbnkgYXMgSUlzT2JzZXJ2YWJsZU9iamVjdClbJG1vYnhdLmRlZmluZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IpXG4gICAgfVxuICAgIGRpZSgzOSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaU93bktleXMob2JqOiBPYmplY3QpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIChvYmogYXMgYW55IGFzIElJc09ic2VydmFibGVPYmplY3QpWyRtb2J4XS5vd25LZXlzXygpXG4gICAgfVxuICAgIGRpZSgzOClcbn1cbiIsImltcG9ydCB7XG4gICAgSUFycmF5RGlkQ2hhbmdlLFxuICAgIElDb21wdXRlZFZhbHVlLFxuICAgIElNYXBEaWRDaGFuZ2UsXG4gICAgSU9iamVjdERpZENoYW5nZSxcbiAgICBJT2JzZXJ2YWJsZUFycmF5LFxuICAgIElPYnNlcnZhYmxlVmFsdWUsXG4gICAgSVZhbHVlRGlkQ2hhbmdlLFxuICAgIExhbWJkYSxcbiAgICBPYnNlcnZhYmxlTWFwLFxuICAgIGdldEFkbWluaXN0cmF0aW9uLFxuICAgIE9ic2VydmFibGVTZXQsXG4gICAgSVNldERpZENoYW5nZSxcbiAgICBpc0Z1bmN0aW9uXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlPFQ+KFxuICAgIHZhbHVlOiBJT2JzZXJ2YWJsZVZhbHVlPFQ+IHwgSUNvbXB1dGVkVmFsdWU8VD4sXG4gICAgbGlzdGVuZXI6IChjaGFuZ2U6IElWYWx1ZURpZENoYW5nZTxUPikgPT4gdm9pZCxcbiAgICBmaXJlSW1tZWRpYXRlbHk/OiBib29sZWFuXG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlPFQ+KFxuICAgIG9ic2VydmFibGVBcnJheTogSU9ic2VydmFibGVBcnJheTxUPiB8IEFycmF5PFQ+LFxuICAgIGxpc3RlbmVyOiAoY2hhbmdlOiBJQXJyYXlEaWRDaGFuZ2U8VD4pID0+IHZvaWQsXG4gICAgZmlyZUltbWVkaWF0ZWx5PzogYm9vbGVhblxuKTogTGFtYmRhXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZTxWPihcbiAgICAvLyBPYnNlcnZhYmxlU2V0L09ic2VydmFibGVNYXAgYXJlIHJlcXVpcmVkIGRlc3BpdGUgdGhleSBpbXBsZW1lbnQgU2V0L01hcDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMzE4MCNkaXNjdXNzaW9uX3I3NDY1NDI5MjlcbiAgICBvYnNlcnZhYmxlU2V0OiBPYnNlcnZhYmxlU2V0PFY+IHwgU2V0PFY+LFxuICAgIGxpc3RlbmVyOiAoY2hhbmdlOiBJU2V0RGlkQ2hhbmdlPFY+KSA9PiB2b2lkLFxuICAgIGZpcmVJbW1lZGlhdGVseT86IGJvb2xlYW5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmU8SywgVj4oXG4gICAgb2JzZXJ2YWJsZU1hcDogT2JzZXJ2YWJsZU1hcDxLLCBWPiB8IE1hcDxLLCBWPixcbiAgICBsaXN0ZW5lcjogKGNoYW5nZTogSU1hcERpZENoYW5nZTxLLCBWPikgPT4gdm9pZCxcbiAgICBmaXJlSW1tZWRpYXRlbHk/OiBib29sZWFuXG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlPEssIFY+KFxuICAgIG9ic2VydmFibGVNYXA6IE9ic2VydmFibGVNYXA8SywgVj4gfCBNYXA8SywgVj4sXG4gICAgcHJvcGVydHk6IEssXG4gICAgbGlzdGVuZXI6IChjaGFuZ2U6IElWYWx1ZURpZENoYW5nZTxWPikgPT4gdm9pZCxcbiAgICBmaXJlSW1tZWRpYXRlbHk/OiBib29sZWFuXG4pOiBMYW1iZGFcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKFxuICAgIG9iamVjdDogT2JqZWN0LFxuICAgIGxpc3RlbmVyOiAoY2hhbmdlOiBJT2JqZWN0RGlkQ2hhbmdlKSA9PiB2b2lkLFxuICAgIGZpcmVJbW1lZGlhdGVseT86IGJvb2xlYW5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuICAgIG9iamVjdDogVCxcbiAgICBwcm9wZXJ0eTogSyxcbiAgICBsaXN0ZW5lcjogKGNoYW5nZTogSVZhbHVlRGlkQ2hhbmdlPFRbS10+KSA9PiB2b2lkLFxuICAgIGZpcmVJbW1lZGlhdGVseT86IGJvb2xlYW5cbik6IExhbWJkYVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUodGhpbmcsIHByb3BPckNiPywgY2JPckZpcmU/LCBmaXJlSW1tZWRpYXRlbHk/KTogTGFtYmRhIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjYk9yRmlyZSkpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHk6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLm9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpXG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5OiBib29sZWFuKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkub2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSlcbn1cbiIsImltcG9ydCB7XG4gICAgaXNPYnNlcnZhYmxlLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5LFxuICAgIGlzT2JzZXJ2YWJsZVZhbHVlLFxuICAgIGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBpc09ic2VydmFibGVTZXQsXG4gICAgaXNDb21wdXRlZFZhbHVlLFxuICAgIGRpZSxcbiAgICBhcGlPd25LZXlzLFxuICAgIG9iamVjdFByb3RvdHlwZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5mdW5jdGlvbiBjYWNoZTxLLCBWPihtYXA6IE1hcDxhbnksIGFueT4sIGtleTogSywgdmFsdWU6IFYpOiBWIHtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpXG4gICAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIHRvSlNIZWxwZXIoc291cmNlLCBfX2FscmVhZHlTZWVuOiBNYXA8YW55LCBhbnk+KSB7XG4gICAgaWYgKFxuICAgICAgICBzb3VyY2UgPT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiIHx8XG4gICAgICAgIHNvdXJjZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAgICAgIWlzT2JzZXJ2YWJsZShzb3VyY2UpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlVmFsdWUoc291cmNlKSB8fCBpc0NvbXB1dGVkVmFsdWUoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gdG9KU0hlbHBlcihzb3VyY2UuZ2V0KCksIF9fYWxyZWFkeVNlZW4pXG4gICAgfVxuICAgIGlmIChfX2FscmVhZHlTZWVuLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBfX2FscmVhZHlTZWVuLmdldChzb3VyY2UpXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpKVxuICAgICAgICBzb3VyY2UuZm9yRWFjaCgodmFsdWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmVzW2lkeF0gPSB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVTZXQoc291cmNlKSkge1xuICAgICAgICBjb25zdCByZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSlcbiAgICAgICAgc291cmNlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgcmVzLmFkZCh0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHNvdXJjZSkpIHtcbiAgICAgICAgY29uc3QgcmVzID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBuZXcgTWFwKCkpXG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXMuc2V0KGtleSwgdG9KU0hlbHBlcih2YWx1ZSwgX19hbHJlYWR5U2VlbikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtdXN0IGJlIG9ic2VydmFibGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30pXG4gICAgICAgIGFwaU93bktleXMoc291cmNlKS5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHJlc1trZXldID0gdG9KU0hlbHBlcihzb3VyY2Vba2V5XSwgX19hbHJlYWR5U2VlbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBjb252ZXJ0cyBhbiBvYnNlcnZhYmxlIHRvIGl0J3Mgbm9uLW9ic2VydmFibGUgbmF0aXZlIGNvdW50ZXJwYXJ0LlxuICogSXQgZG9lcyBOT1QgcmVjdXJzZSBpbnRvIG5vbi1vYnNlcnZhYmxlcywgdGhlc2UgYXJlIGxlZnQgYXMgdGhleSBhcmUsIGV2ZW4gaWYgdGhleSBjb250YWluIG9ic2VydmFibGVzLlxuICogQ29tcHV0ZWQgYW5kIG90aGVyIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgYXJlIGNvbXBsZXRlbHkgaWdub3JlZC5cbiAqIENvbXBsZXggc2NlbmFyaW9zIHJlcXVpcmUgY3VzdG9tIHNvbHV0aW9uLCBlZyBpbXBsZW1lbnRpbmcgYHRvSlNPTmAgb3IgdXNpbmcgYHNlcmlhbGl6cmAgbGliLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9KUzxUPihzb3VyY2U6IFQsIG9wdGlvbnM/OiBhbnkpOiBUIHtcbiAgICBpZiAoX19ERVZfXyAmJiBvcHRpb25zKSB7XG4gICAgICAgIGRpZShcInRvSlMgbm8gbG9uZ2VyIHN1cHBvcnRzIG9wdGlvbnNcIilcbiAgICB9XG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBuZXcgTWFwKCkpXG59XG4iLCJpbXBvcnQgeyBUcmFjZU1vZGUsIGRpZSwgZ2V0QXRvbSwgZ2xvYmFsU3RhdGUgfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UodGhpbmc/OiBhbnksIHByb3A/OiBzdHJpbmcsIGVudGVyQnJlYWtQb2ludD86IGJvb2xlYW4pOiB2b2lkXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UodGhpbmc/OiBhbnksIGVudGVyQnJlYWtQb2ludD86IGJvb2xlYW4pOiB2b2lkXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UoZW50ZXJCcmVha1BvaW50PzogYm9vbGVhbik6IHZvaWRcbmV4cG9ydCBmdW5jdGlvbiB0cmFjZSguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICghX19ERVZfXykge1xuICAgICAgICBkaWUoYHRyYWNlKCkgaXMgbm90IGF2YWlsYWJsZSBpbiBwcm9kdWN0aW9uIGJ1aWxkc2ApXG4gICAgfVxuICAgIGxldCBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZVxuICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBlbnRlckJyZWFrUG9pbnQgPSBhcmdzLnBvcCgpXG4gICAgfVxuICAgIGNvbnN0IGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncylcbiAgICBpZiAoIWRlcml2YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRpZShcbiAgICAgICAgICAgIGAndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlgXG4gICAgICAgIClcbiAgICB9XG4gICAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFttb2J4LnRyYWNlXSAnJHtkZXJpdmF0aW9uLm5hbWVffScgdHJhY2luZyBlbmFibGVkYClcbiAgICB9XG4gICAgZGVyaXZhdGlvbi5pc1RyYWNpbmdfID0gZW50ZXJCcmVha1BvaW50ID8gVHJhY2VNb2RlLkJSRUFLIDogVHJhY2VNb2RlLkxPR1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tRnJvbUFyZ3MoYXJncyk6IGFueSB7XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0pXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZW5kQmF0Y2gsIHN0YXJ0QmF0Y2ggfSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vKipcbiAqIER1cmluZyBhIHRyYW5zYWN0aW9uIG5vIHZpZXdzIGFyZSB1cGRhdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICogVGhlIHRyYW5zYWN0aW9uIHdpbGwgYmUgcnVuIHN5bmNocm9ub3VzbHkgbm9uZXRoZWxlc3MuXG4gKlxuICogQHBhcmFtIGFjdGlvbiBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBzb21lIHJlYWN0aXZlIHN0YXRlXG4gKiBAcmV0dXJucyBhbnkgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlICdhY3Rpb24nIHBhcmFtZXRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zYWN0aW9uPFQ+KGFjdGlvbjogKCkgPT4gVCwgdGhpc0FyZyA9IHVuZGVmaW5lZCk6IFQge1xuICAgIHN0YXJ0QmF0Y2goKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uYXBwbHkodGhpc0FyZylcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBlbmRCYXRjaCgpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICAkbW9ieCxcbiAgICBJUmVhY3Rpb25EaXNwb3NlcixcbiAgICBMYW1iZGEsXG4gICAgYXV0b3J1bixcbiAgICBjcmVhdGVBY3Rpb24sXG4gICAgZ2V0TmV4dElkLFxuICAgIGRpZSxcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc1xufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzM1ODJcbmludGVyZmFjZSBHZW5lcmljQWJvcnRTaWduYWwge1xuICAgIHJlYWRvbmx5IGFib3J0ZWQ6IGJvb2xlYW5cbiAgICBvbmFib3J0PzogKCguLi5hcmdzOiBhbnkpID0+IGFueSkgfCBudWxsXG4gICAgYWRkRXZlbnRMaXN0ZW5lcj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV2hlbk9wdGlvbnMge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB0aW1lb3V0PzogbnVtYmVyXG4gICAgb25FcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICAgc2lnbmFsPzogR2VuZXJpY0Fib3J0U2lnbmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuKFxuICAgIHByZWRpY2F0ZTogKCkgPT4gYm9vbGVhbixcbiAgICBvcHRzPzogSVdoZW5PcHRpb25zXG4pOiBQcm9taXNlPHZvaWQ+ICYgeyBjYW5jZWwoKTogdm9pZCB9XG5leHBvcnQgZnVuY3Rpb24gd2hlbihcbiAgICBwcmVkaWNhdGU6ICgpID0+IGJvb2xlYW4sXG4gICAgZWZmZWN0OiBMYW1iZGEsXG4gICAgb3B0cz86IElXaGVuT3B0aW9uc1xuKTogSVJlYWN0aW9uRGlzcG9zZXJcbmV4cG9ydCBmdW5jdGlvbiB3aGVuKHByZWRpY2F0ZTogYW55LCBhcmcxPzogYW55LCBhcmcyPzogYW55KTogYW55IHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCAoYXJnMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSlcbiAgICB9XG4gICAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSlcbn1cblxuZnVuY3Rpb24gX3doZW4ocHJlZGljYXRlOiAoKSA9PiBib29sZWFuLCBlZmZlY3Q6IExhbWJkYSwgb3B0czogSVdoZW5PcHRpb25zKTogSVJlYWN0aW9uRGlzcG9zZXIge1xuICAgIGxldCB0aW1lb3V0SGFuZGxlOiBhbnlcbiAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKVxuICAgICAgICB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRpc3Bvc2VyWyRtb2J4XS5pc0Rpc3Bvc2VkXykge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VyKClcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMub25FcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KVxuICAgIH1cblxuICAgIG9wdHMubmFtZSA9IF9fREVWX18gPyBvcHRzLm5hbWUgfHwgXCJXaGVuQFwiICsgZ2V0TmV4dElkKCkgOiBcIldoZW5cIlxuICAgIGNvbnN0IGVmZmVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihcbiAgICAgICAgX19ERVZfXyA/IG9wdHMubmFtZSArIFwiLWVmZmVjdFwiIDogXCJXaGVuLWVmZmVjdFwiLFxuICAgICAgICBlZmZlY3QgYXMgRnVuY3Rpb25cbiAgICApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdmFyIGRpc3Bvc2VyID0gYXV0b3J1bihyID0+IHtcbiAgICAgICAgLy8gcHJlZGljYXRlIHNob3VsZCBub3QgY2hhbmdlIHN0YXRlXG4gICAgICAgIGxldCBjb25kID0gYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIHByZWRpY2F0ZSlcbiAgICAgICAgaWYgKGNvbmQpIHtcbiAgICAgICAgICAgIHIuZGlzcG9zZSgpXG4gICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKClcbiAgICAgICAgfVxuICAgIH0sIG9wdHMpXG4gICAgcmV0dXJuIGRpc3Bvc2VyXG59XG5cbmZ1bmN0aW9uIHdoZW5Qcm9taXNlKFxuICAgIHByZWRpY2F0ZTogKCkgPT4gYm9vbGVhbixcbiAgICBvcHRzPzogSVdoZW5PcHRpb25zXG4pOiBQcm9taXNlPHZvaWQ+ICYgeyBjYW5jZWwoKTogdm9pZCB9IHtcbiAgICBpZiAoX19ERVZfXyAmJiBvcHRzICYmIG9wdHMub25FcnJvcikge1xuICAgICAgICByZXR1cm4gZGllKGB0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRgKVxuICAgIH1cbiAgICBpZiAob3B0cz8uc2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIldIRU5fQUJPUlRFRFwiKSksIHsgY2FuY2VsOiAoKSA9PiBudWxsIH0pXG4gICAgfVxuICAgIGxldCBjYW5jZWxcbiAgICBsZXQgYWJvcnRcbiAgICBjb25zdCByZXMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBkaXNwb3NlciA9IF93aGVuKHByZWRpY2F0ZSwgcmVzb2x2ZSBhcyBMYW1iZGEsIHsgLi4ub3B0cywgb25FcnJvcjogcmVqZWN0IH0pXG4gICAgICAgIGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3Bvc2VyKClcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJXSEVOX0NBTkNFTExFRFwiKSlcbiAgICAgICAgfVxuICAgICAgICBhYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3Bvc2VyKClcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJXSEVOX0FCT1JURURcIikpXG4gICAgICAgIH1cbiAgICAgICAgb3B0cz8uc2lnbmFsPy5hZGRFdmVudExpc3RlbmVyPy4oXCJhYm9ydFwiLCBhYm9ydClcbiAgICB9KS5maW5hbGx5KCgpID0+IG9wdHM/LnNpZ25hbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKFwiYWJvcnRcIiwgYWJvcnQpKVxuICAgIDsocmVzIGFzIGFueSkuY2FuY2VsID0gY2FuY2VsXG4gICAgcmV0dXJuIHJlcyBhcyBhbnlcbn1cbiIsImltcG9ydCB7XG4gICAgJG1vYngsXG4gICAgSUlzT2JzZXJ2YWJsZU9iamVjdCxcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudCxcbiAgICBhc3NlcnRQcm94aWVzLFxuICAgIGRpZSxcbiAgICBpc1N0cmluZ2lzaCxcbiAgICBnbG9iYWxTdGF0ZSxcbiAgICBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyxcbiAgICBhc09ic2VydmFibGVPYmplY3Rcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZnVuY3Rpb24gZ2V0QWRtKHRhcmdldCk6IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiB7XG4gICAgcmV0dXJuIHRhcmdldFskbW9ieF1cbn1cblxuLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcbi8vIGFuZCBza2lwIGVpdGhlciB0aGUgaW50ZXJuYWwgdmFsdWVzIG1hcCwgb3IgdGhlIGJhc2Ugb2JqZWN0IHdpdGggaXRzIHByb3BlcnR5IGRlc2NyaXB0b3JzIVxuY29uc3Qgb2JqZWN0UHJveHlUcmFwczogUHJveHlIYW5kbGVyPGFueT4gPSB7XG4gICAgaGFzKHRhcmdldDogSUlzT2JzZXJ2YWJsZU9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKF9fREVWX18gJiYgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB7XG4gICAgICAgICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGV0ZWN0IG5ldyBwcm9wZXJ0aWVzIHVzaW5nIHRoZSAnaW4nIG9wZXJhdG9yLiBVc2UgJ2hhcycgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5oYXNfKG5hbWUpXG4gICAgfSxcbiAgICBnZXQodGFyZ2V0OiBJSXNPYnNlcnZhYmxlT2JqZWN0LCBuYW1lOiBQcm9wZXJ0eUtleSk6IGFueSB7XG4gICAgICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5nZXRfKG5hbWUpXG4gICAgfSxcbiAgICBzZXQodGFyZ2V0OiBJSXNPYnNlcnZhYmxlT2JqZWN0LCBuYW1lOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWlzU3RyaW5naXNoKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiAhZ2V0QWRtKHRhcmdldCkudmFsdWVzXy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJhZGQgYSBuZXcgb2JzZXJ2YWJsZSBwcm9wZXJ0eSB0aHJvdWdoIGRpcmVjdCBhc3NpZ25tZW50LiBVc2UgJ3NldCcgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuICAgICAgICByZXR1cm4gZ2V0QWRtKHRhcmdldCkuc2V0XyhuYW1lLCB2YWx1ZSwgdHJ1ZSkgPz8gdHJ1ZVxuICAgIH0sXG4gICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0OiBJSXNPYnNlcnZhYmxlT2JqZWN0LCBuYW1lOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcbiAgICAgICAgICAgICAgICBcImRlbGV0ZSBwcm9wZXJ0aWVzIGZyb20gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAncmVtb3ZlJyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1N0cmluZ2lzaChuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8gbnVsbCAoaW50ZXJjZXB0ZWQpIC0+IHRydWUgKHN1Y2Nlc3MpXG4gICAgICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5kZWxldGVfKG5hbWUsIHRydWUpID8/IHRydWVcbiAgICB9LFxuICAgIGRlZmluZVByb3BlcnR5KFxuICAgICAgICB0YXJnZXQ6IElJc09ic2VydmFibGVPYmplY3QsXG4gICAgICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgICAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3JcbiAgICApOiBib29sZWFuIHtcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkZWZpbmUgcHJvcGVydHkgb24gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAnZGVmaW5lUHJvcGVydHknIGZyb20gJ21vYngnIGluc3RlYWQuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICAvLyBudWxsIChpbnRlcmNlcHRlZCkgLT4gdHJ1ZSAoc3VjY2VzcylcbiAgICAgICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLmRlZmluZVByb3BlcnR5XyhuYW1lLCBkZXNjcmlwdG9yKSA/PyB0cnVlXG4gICAgfSxcbiAgICBvd25LZXlzKHRhcmdldDogSUlzT2JzZXJ2YWJsZU9iamVjdCk6IEFycmF5TGlrZTxzdHJpbmcgfCBzeW1ib2w+IHtcbiAgICAgICAgaWYgKF9fREVWX18gJiYgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB7XG4gICAgICAgICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFxuICAgICAgICAgICAgICAgIFwiaXRlcmF0ZSBrZXlzIHRvIGRldGVjdCBhZGRlZCAvIHJlbW92ZWQgcHJvcGVydGllcy4gVXNlICdrZXlzJyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLm93bktleXNfKClcbiAgICB9LFxuICAgIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuICAgICAgICBkaWUoMTMpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdChcbiAgICB0YXJnZXQ6IGFueSxcbiAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbik6IElJc09ic2VydmFibGVPYmplY3Qge1xuICAgIGFzc2VydFByb3hpZXMoKVxuICAgIHRhcmdldCA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpXG4gICAgcmV0dXJuICh0YXJnZXRbJG1vYnhdLnByb3h5XyA/Pz0gbmV3IFByb3h5KHRhcmdldCwgb2JqZWN0UHJveHlUcmFwcykpXG59XG4iLCJpbXBvcnQgeyBMYW1iZGEsIG9uY2UsIHVudHJhY2tlZEVuZCwgdW50cmFja2VkU3RhcnQsIGRpZSB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCB0eXBlIElJbnRlcmNlcHRvcjxUPiA9IChjaGFuZ2U6IFQpID0+IFQgfCBudWxsXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVyY2VwdGFibGU8VD4ge1xuICAgIGludGVyY2VwdG9yc186IElJbnRlcmNlcHRvcjxUPltdIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMoaW50ZXJjZXB0YWJsZTogSUludGVyY2VwdGFibGU8YW55Pikge1xuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gIT09IHVuZGVmaW5lZCAmJiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18ubGVuZ3RoID4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcjxUPihcbiAgICBpbnRlcmNlcHRhYmxlOiBJSW50ZXJjZXB0YWJsZTxUPixcbiAgICBoYW5kbGVyOiBJSW50ZXJjZXB0b3I8VD5cbik6IExhbWJkYSB7XG4gICAgY29uc3QgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnNfIHx8IChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gPSBbXSlcbiAgICBpbnRlcmNlcHRvcnMucHVzaChoYW5kbGVyKVxuICAgIHJldHVybiBvbmNlKCgpID0+IHtcbiAgICAgICAgY29uc3QgaWR4ID0gaW50ZXJjZXB0b3JzLmluZGV4T2YoaGFuZGxlcilcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdENoYW5nZTxUPihcbiAgICBpbnRlcmNlcHRhYmxlOiBJSW50ZXJjZXB0YWJsZTxUIHwgbnVsbD4sXG4gICAgY2hhbmdlOiBUIHwgbnVsbFxuKTogVCB8IG51bGwge1xuICAgIGNvbnN0IHByZXZVID0gdW50cmFja2VkU3RhcnQoKVxuICAgIHRyeSB7XG4gICAgICAgIC8vIEludGVyY2VwdG9yIGNhbiBtb2RpZnkgdGhlIGFycmF5LCBjb3B5IGl0IHRvIGF2b2lkIGNvbmN1cnJlbnQgbW9kaWZpY2F0aW9uLCBzZWUgIzE5NTBcbiAgICAgICAgY29uc3QgaW50ZXJjZXB0b3JzID0gWy4uLihpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gfHwgW10pXVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGludGVyY2VwdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpXG4gICAgICAgICAgICBpZiAoY2hhbmdlICYmICEoY2hhbmdlIGFzIGFueSkudHlwZSkge1xuICAgICAgICAgICAgICAgIGRpZSgxNClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXZVKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IExhbWJkYSwgb25jZSwgdW50cmFja2VkRW5kLCB1bnRyYWNrZWRTdGFydCB9IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RlbmFibGUge1xuICAgIGNoYW5nZUxpc3RlbmVyc186IEZ1bmN0aW9uW10gfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpc3RlbmVycyhsaXN0ZW5hYmxlOiBJTGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18gIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc18ubGVuZ3RoID4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5hYmxlOiBJTGlzdGVuYWJsZSwgaGFuZGxlcjogRnVuY3Rpb24pOiBMYW1iZGEge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXyB8fCAobGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfID0gW10pXG4gICAgbGlzdGVuZXJzLnB1c2goaGFuZGxlcilcbiAgICByZXR1cm4gb25jZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnM8VD4obGlzdGVuYWJsZTogSUxpc3RlbmFibGUsIGNoYW5nZTogVCkge1xuICAgIGNvbnN0IHByZXZVID0gdW50cmFja2VkU3RhcnQoKVxuICAgIGxldCBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVyc19cbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKClcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSlcbiAgICB9XG4gICAgdW50cmFja2VkRW5kKHByZXZVKVxufVxuIiwiaW1wb3J0IHtcbiAgICAkbW9ieCxcbiAgICBhc09ic2VydmFibGVPYmplY3QsXG4gICAgQW5ub3RhdGlvbnNNYXAsXG4gICAgZW5kQmF0Y2gsXG4gICAgc3RhcnRCYXRjaCxcbiAgICBDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyxcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgY29sbGVjdFN0b3JlZEFubm90YXRpb25zLFxuICAgIGlzUGxhaW5PYmplY3QsXG4gICAgaXNPYnNlcnZhYmxlT2JqZWN0LFxuICAgIGRpZSxcbiAgICBvd25LZXlzLFxuICAgIGV4dGVuZE9ic2VydmFibGUsXG4gICAgYWRkSGlkZGVuUHJvcCxcbiAgICBzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbFxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG4vLyBIYWNrIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTQ4MjkjaXNzdWVjb21tZW50LTMyMjI2NzA4OVxuLy8gV2UgbmVlZCB0aGlzLCBiZWNhdXNlIG90aGVyd2lzZSwgQWRkaXRpb25hbEtleXMgaXMgZ29pbmcgdG8gYmUgaW5mZXJyZWQgdG8gYmUgYW55XG4vLyBzZXQgb2Ygc3VwZXJmbHVvdXMga2V5cy4gQnV0LCB3ZSByYXRoZXIgd2FudCB0byBnZXQgYSBjb21waWxlIGVycm9yIHVubGVzcyBBZGRpdGlvbmFsS2V5cyBpc1xuLy8gX2V4cGxpY2l0eV8gcGFzc2VkIGFzIGdlbmVyaWMgYXJndW1lbnRcbi8vIEZpeGVzOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzIzMjUjaXNzdWVjb21tZW50LTY5MTA3MDAyMlxudHlwZSBOb0luZmVyPFQ+ID0gW1RdW1QgZXh0ZW5kcyBhbnkgPyAwIDogbmV2ZXJdXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZTxUIGV4dGVuZHMgb2JqZWN0LCBBZGRpdGlvbmFsS2V5cyBleHRlbmRzIFByb3BlcnR5S2V5ID0gbmV2ZXI+KFxuICAgIHRhcmdldDogVCxcbiAgICBhbm5vdGF0aW9ucz86IEFubm90YXRpb25zTWFwPFQsIE5vSW5mZXI8QWRkaXRpb25hbEtleXM+PixcbiAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbik6IFQge1xuICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucylbJG1vYnhdXG4gICAgc3RhcnRCYXRjaCgpXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKF9fREVWX18gJiYgYW5ub3RhdGlvbnMgJiYgdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkge1xuICAgICAgICAgICAgZGllKFxuICAgICAgICAgICAgICAgIGBtYWtlT2JzZXJ2YWJsZSBzZWNvbmQgYXJnIG11c3QgYmUgbnVsbGlzaCB3aGVuIHVzaW5nIGRlY29yYXRvcnMuIE1peGluZyBAZGVjb3JhdG9yIHN5bnRheCB3aXRoIGFubm90YXRpb25zIGlzIG5vdCBzdXBwb3J0ZWQuYFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgdG8gZGVjb3JhdG9yc1xuICAgICAgICBhbm5vdGF0aW9ucyA/Pz0gY29sbGVjdFN0b3JlZEFubm90YXRpb25zKHRhcmdldClcblxuICAgICAgICAvLyBBbm5vdGF0ZVxuICAgICAgICBvd25LZXlzKGFubm90YXRpb25zKS5mb3JFYWNoKGtleSA9PiBhZG0ubWFrZV8oa2V5LCBhbm5vdGF0aW9ucyFba2V5XSkpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZW5kQmF0Y2goKVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cbi8vIHByb3RvW2tleXNTeW1ib2xdID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oKVxuY29uc3Qga2V5c1N5bWJvbCA9IFN5bWJvbChcIm1vYngta2V5c1wiKVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUF1dG9PYnNlcnZhYmxlPFQgZXh0ZW5kcyBvYmplY3QsIEFkZGl0aW9uYWxLZXlzIGV4dGVuZHMgUHJvcGVydHlLZXkgPSBuZXZlcj4oXG4gICAgdGFyZ2V0OiBULFxuICAgIG92ZXJyaWRlcz86IEFubm90YXRpb25zTWFwPFQsIE5vSW5mZXI8QWRkaXRpb25hbEtleXM+PixcbiAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbik6IFQge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGlmICghaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmICFpc1BsYWluT2JqZWN0KE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKSkge1xuICAgICAgICAgICAgZGllKGAnbWFrZUF1dG9PYnNlcnZhYmxlJyBjYW4gb25seSBiZSB1c2VkIGZvciBjbGFzc2VzIHRoYXQgZG9uJ3QgaGF2ZSBhIHN1cGVyY2xhc3NgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgZGllKGBtYWtlQXV0b09ic2VydmFibGUgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYmplY3RzIG5vdCBhbHJlYWR5IG1hZGUgb2JzZXJ2YWJsZWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpbWl6YXRpb246IGF2b2lkIHZpc2l0aW5nIHByb3Rvc1xuICAgIC8vIEFzc3VtZXMgdGhhdCBhbm5vdGF0aW9uLm1ha2VfLy5leHRlbmRfIHdvcmtzIHRoZSBzYW1lIGZvciBwbGFpbiBvYmplY3RzXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZSh0YXJnZXQsIHRhcmdldCwgb3ZlcnJpZGVzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucylbJG1vYnhdXG5cbiAgICAvLyBPcHRpbWl6YXRpb246IGNhY2hlIGtleXMgb24gcHJvdG9cbiAgICAvLyBBc3N1bWVzIG1ha2VBdXRvT2JzZXJ2YWJsZSBjYW4gYmUgY2FsbGVkIG9ubHkgb25jZSBwZXIgb2JqZWN0IGFuZCBjYW4ndCBiZSB1c2VkIGluIHN1YmNsYXNzXG4gICAgaWYgKCF0YXJnZXRba2V5c1N5bWJvbF0pIHtcbiAgICAgICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxuICAgICAgICBjb25zdCBrZXlzID0gbmV3IFNldChbLi4ub3duS2V5cyh0YXJnZXQpLCAuLi5vd25LZXlzKHByb3RvKV0pXG4gICAgICAgIGtleXMuZGVsZXRlKFwiY29uc3RydWN0b3JcIilcbiAgICAgICAga2V5cy5kZWxldGUoJG1vYngpXG4gICAgICAgIGFkZEhpZGRlblByb3AocHJvdG8sIGtleXNTeW1ib2wsIGtleXMpXG4gICAgfVxuXG4gICAgc3RhcnRCYXRjaCgpXG4gICAgdHJ5IHtcbiAgICAgICAgdGFyZ2V0W2tleXNTeW1ib2xdLmZvckVhY2goa2V5ID0+XG4gICAgICAgICAgICBhZG0ubWFrZV8oXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIC8vIG11c3QgcGFzcyBcInVuZGVmaW5lZFwiIGZvciB7IGtleTogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgICAgICAhb3ZlcnJpZGVzID8gdHJ1ZSA6IGtleSBpbiBvdmVycmlkZXMgPyBvdmVycmlkZXNba2V5XSA6IHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKClcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHtcbiAgICAkbW9ieCxcbiAgICBBdG9tLFxuICAgIEVNUFRZX0FSUkFZLFxuICAgIElBdG9tLFxuICAgIElFbmhhbmNlcixcbiAgICBJSW50ZXJjZXB0YWJsZSxcbiAgICBJSW50ZXJjZXB0b3IsXG4gICAgSUxpc3RlbmFibGUsXG4gICAgTGFtYmRhLFxuICAgIGFkZEhpZGRlbkZpbmFsUHJvcCxcbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCxcbiAgICBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlLFxuICAgIGdldE5leHRJZCxcbiAgICBoYXNJbnRlcmNlcHRvcnMsXG4gICAgaGFzTGlzdGVuZXJzLFxuICAgIGludGVyY2VwdENoYW5nZSxcbiAgICBpc09iamVjdCxcbiAgICBpc1NweUVuYWJsZWQsXG4gICAgbm90aWZ5TGlzdGVuZXJzLFxuICAgIHJlZ2lzdGVySW50ZXJjZXB0b3IsXG4gICAgcmVnaXN0ZXJMaXN0ZW5lcixcbiAgICBzcHlSZXBvcnRFbmQsXG4gICAgc3B5UmVwb3J0U3RhcnQsXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCxcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZCxcbiAgICBhc3NlcnRQcm94aWVzLFxuICAgIHJlc2VydmVBcnJheUJ1ZmZlcixcbiAgICBoYXNQcm9wLFxuICAgIGRpZSxcbiAgICBnbG9iYWxTdGF0ZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5jb25zdCBTUExJQ0UgPSBcInNwbGljZVwiXG5leHBvcnQgY29uc3QgVVBEQVRFID0gXCJ1cGRhdGVcIlxuZXhwb3J0IGNvbnN0IE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwIC8vIFNlZSBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvODU5XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVBcnJheTxUID0gYW55PiBleHRlbmRzIEFycmF5PFQ+IHtcbiAgICBzcGxpY2VXaXRoQXJyYXkoaW5kZXg6IG51bWJlciwgZGVsZXRlQ291bnQ/OiBudW1iZXIsIG5ld0l0ZW1zPzogVFtdKTogVFtdXG4gICAgY2xlYXIoKTogVFtdXG4gICAgcmVwbGFjZShuZXdJdGVtczogVFtdKTogVFtdXG4gICAgcmVtb3ZlKHZhbHVlOiBUKTogYm9vbGVhblxuICAgIHRvSlNPTigpOiBUW11cbn1cblxuaW50ZXJmYWNlIElBcnJheUJhc2VDaGFuZ2U8VD4ge1xuICAgIG9iamVjdDogSU9ic2VydmFibGVBcnJheTxUPlxuICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCJcbiAgICBkZWJ1Z09iamVjdE5hbWU6IHN0cmluZ1xuICAgIGluZGV4OiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgSUFycmF5RGlkQ2hhbmdlPFQgPSBhbnk+ID0gSUFycmF5VXBkYXRlPFQ+IHwgSUFycmF5U3BsaWNlPFQ+XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFycmF5VXBkYXRlPFQgPSBhbnk+IGV4dGVuZHMgSUFycmF5QmFzZUNoYW5nZTxUPiB7XG4gICAgdHlwZTogXCJ1cGRhdGVcIlxuICAgIG5ld1ZhbHVlOiBUXG4gICAgb2xkVmFsdWU6IFRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXJyYXlTcGxpY2U8VCA9IGFueT4gZXh0ZW5kcyBJQXJyYXlCYXNlQ2hhbmdlPFQ+IHtcbiAgICB0eXBlOiBcInNwbGljZVwiXG4gICAgYWRkZWQ6IFRbXVxuICAgIGFkZGVkQ291bnQ6IG51bWJlclxuICAgIHJlbW92ZWQ6IFRbXVxuICAgIHJlbW92ZWRDb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFycmF5V2lsbENoYW5nZTxUID0gYW55PiB7XG4gICAgb2JqZWN0OiBJT2JzZXJ2YWJsZUFycmF5PFQ+XG4gICAgaW5kZXg6IG51bWJlclxuICAgIHR5cGU6IFwidXBkYXRlXCJcbiAgICBuZXdWYWx1ZTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcnJheVdpbGxTcGxpY2U8VCA9IGFueT4ge1xuICAgIG9iamVjdDogSU9ic2VydmFibGVBcnJheTxUPlxuICAgIGluZGV4OiBudW1iZXJcbiAgICB0eXBlOiBcInNwbGljZVwiXG4gICAgYWRkZWQ6IFRbXVxuICAgIHJlbW92ZWRDb3VudDogbnVtYmVyXG59XG5cbmNvbnN0IGFycmF5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgICAgICBjb25zdCBhZG06IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gdGFyZ2V0WyRtb2J4XVxuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYngpIHtcbiAgICAgICAgICAgIHJldHVybiBhZG1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFkbS5nZXRBcnJheUxlbmd0aF8oKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSBhcyBhbnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRtLmdldF8ocGFyc2VJbnQobmFtZSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1Byb3AoYXJyYXlFeHRlbnNpb25zLCBuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9uc1tuYW1lXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSB0YXJnZXRbJG1vYnhdXG4gICAgICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKSB7XG4gICAgICAgICAgICBhZG0uc2V0QXJyYXlMZW5ndGhfKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIiB8fCBpc05hTihuYW1lKSkge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG51bWVyaWMgc3RyaW5nXG4gICAgICAgICAgICBhZG0uc2V0XyhwYXJzZUludChuYW1lKSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIHByZXZlbnRFeHRlbnNpb25zKCkge1xuICAgICAgICBkaWUoMTUpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb25cbiAgICBpbXBsZW1lbnRzIElJbnRlcmNlcHRhYmxlPElBcnJheVdpbGxDaGFuZ2U8YW55PiB8IElBcnJheVdpbGxTcGxpY2U8YW55Pj4sIElMaXN0ZW5hYmxlXG57XG4gICAgYXRvbV86IElBdG9tXG4gICAgcmVhZG9ubHkgdmFsdWVzXzogYW55W10gPSBbXSAvLyB0aGlzIGlzIHRoZSBwcm9wIHRoYXQgZ2V0cyBwcm94aWVkLCBzbyBjYW4ndCByZXBsYWNlIGl0IVxuICAgIGludGVyY2VwdG9yc19cbiAgICBjaGFuZ2VMaXN0ZW5lcnNfXG4gICAgZW5oYW5jZXJfOiAobmV3VjogYW55LCBvbGRWOiBhbnkgfCB1bmRlZmluZWQpID0+IGFueVxuICAgIGRlaGFuY2VyOiBhbnlcbiAgICBwcm94eV8hOiBJT2JzZXJ2YWJsZUFycmF5PGFueT5cbiAgICBsYXN0S25vd25MZW5ndGhfID0gMFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUgPSBfX0RFVl9fID8gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZUFycmF5XCIsXG4gICAgICAgIGVuaGFuY2VyOiBJRW5oYW5jZXI8YW55PixcbiAgICAgICAgcHVibGljIG93bmVkXzogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGxlZ2FjeU1vZGVfOiBib29sZWFuXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXRvbV8gPSBuZXcgQXRvbShuYW1lKVxuICAgICAgICB0aGlzLmVuaGFuY2VyXyA9IChuZXdWLCBvbGRWKSA9PlxuICAgICAgICAgICAgZW5oYW5jZXIobmV3Viwgb2xkViwgX19ERVZfXyA/IG5hbWUgKyBcIlsuLl1cIiA6IFwiT2JzZXJ2YWJsZUFycmF5Wy4uXVwiKVxuICAgIH1cblxuICAgIGRlaGFuY2VWYWx1ZV8odmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIGRlaGFuY2VWYWx1ZXNfKHZhbHVlczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHRoaXMuZGVoYW5jZXIpIGFzIGFueVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXNcbiAgICB9XG5cbiAgICBpbnRlcmNlcHRfKGhhbmRsZXI6IElJbnRlcmNlcHRvcjxJQXJyYXlXaWxsQ2hhbmdlPGFueT4gfCBJQXJyYXlXaWxsU3BsaWNlPGFueT4+KTogTGFtYmRhIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3I8SUFycmF5V2lsbENoYW5nZTxhbnk+IHwgSUFycmF5V2lsbFNwbGljZTxhbnk+Pih0aGlzLCBoYW5kbGVyKVxuICAgIH1cblxuICAgIG9ic2VydmVfKFxuICAgICAgICBsaXN0ZW5lcjogKGNoYW5nZURhdGE6IElBcnJheURpZENoYW5nZTxhbnk+KSA9PiB2b2lkLFxuICAgICAgICBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZVxuICAgICk6IExhbWJkYSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKDxJQXJyYXlTcGxpY2U8YW55Pj57XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIGFzIGFueSxcbiAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMuYXRvbV8ubmFtZV8sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICBhZGRlZDogdGhpcy52YWx1ZXNfLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXNfLmxlbmd0aCxcbiAgICAgICAgICAgICAgICByZW1vdmVkOiBbXSxcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQ6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpXG4gICAgfVxuXG4gICAgZ2V0QXJyYXlMZW5ndGhfKCk6IG51bWJlciB7XG4gICAgICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNfLmxlbmd0aFxuICAgIH1cblxuICAgIHNldEFycmF5TGVuZ3RoXyhuZXdMZW5ndGg6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihuZXdMZW5ndGgpIHx8IG5ld0xlbmd0aCA8IDApIHtcbiAgICAgICAgICAgIGRpZShcIk91dCBvZiByYW5nZTogXCIgKyBuZXdMZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlc18ubGVuZ3RoXG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gbmV3IEFycmF5KG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkXG4gICAgICAgICAgICB9IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKG5ld0xlbmd0aCwgY3VycmVudExlbmd0aCAtIG5ld0xlbmd0aClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFycmF5TGVuZ3RoXyhvbGRMZW5ndGg6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aF8pIHtcbiAgICAgICAgICAgIGRpZSgxNilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gKz0gZGVsdGFcbiAgICAgICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gJiYgZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICByZXNlcnZlQXJyYXlCdWZmZXIob2xkTGVuZ3RoICsgZGVsdGEgKyAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BsaWNlV2l0aEFycmF5XyhpbmRleDogbnVtYmVyLCBkZWxldGVDb3VudD86IG51bWJlciwgbmV3SXRlbXM/OiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXylcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy52YWx1ZXNfLmxlbmd0aFxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGhcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleFxuICAgICAgICB9IGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkZWxldGVDb3VudCwgbGVuZ3RoIC0gaW5kZXgpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gRU1QVFlfQVJSQVlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJQXJyYXlXaWxsU3BsaWNlPGFueT4+KHRoaXMgYXMgYW55LCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyBhcyBhbnksXG4gICAgICAgICAgICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRU1QVFlfQVJSQVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudFxuICAgICAgICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWRcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0l0ZW1zID1cbiAgICAgICAgICAgIG5ld0l0ZW1zLmxlbmd0aCA9PT0gMCA/IG5ld0l0ZW1zIDogbmV3SXRlbXMubWFwKHYgPT4gdGhpcy5lbmhhbmNlcl8odiwgdW5kZWZpbmVkKSlcbiAgICAgICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gfHwgX19ERVZfXykge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudFxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJheUxlbmd0aF8obGVuZ3RoLCBsZW5ndGhEZWx0YSkgLy8gY2hlY2tzIGlmIGludGVybmFsIGFycmF5IHdhc24ndCBtb2RpZmllZFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzXyhpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKVxuXG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QXJyYXlTcGxpY2VfKGluZGV4LCBuZXdJdGVtcywgcmVzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXNfKHJlcylcbiAgICB9XG5cbiAgICBzcGxpY2VJdGVtc0ludG9WYWx1ZXNfKGluZGV4OiBudW1iZXIsIGRlbGV0ZUNvdW50OiBudW1iZXIsIG5ld0l0ZW1zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzXy5zcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50LCAuLi5uZXdJdGVtcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSBpdGVtcyByZW1vdmVkIGJ5IHRoZSBzcGxpY2VcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMudmFsdWVzXy5zbGljZShpbmRleCwgaW5kZXggKyBkZWxldGVDb3VudClcbiAgICAgICAgICAgIC8vIFRoZSBpdGVtcyB0aGF0IHRoYXQgc2hvdWxkIHJlbWFpbiBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgbGV0IG9sZEl0ZW1zID0gdGhpcy52YWx1ZXNfLnNsaWNlKGluZGV4ICsgZGVsZXRlQ291bnQpXG4gICAgICAgICAgICAvLyBOZXcgbGVuZ3RoIGlzIHRoZSBwcmV2aW91cyBsZW5ndGggKyBhZGRpdGlvbiBjb3VudCAtIGRlbGV0aW9uIGNvdW50XG4gICAgICAgICAgICB0aGlzLnZhbHVlc18ubGVuZ3RoICs9IG5ld0l0ZW1zLmxlbmd0aCAtIGRlbGV0ZUNvdW50XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNfW2luZGV4ICsgaV0gPSBuZXdJdGVtc1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzX1tpbmRleCArIG5ld0l0ZW1zLmxlbmd0aCArIGldID0gb2xkSXRlbXNbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfKGluZGV4OiBudW1iZXIsIG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgbm90aWZ5U3B5ID0gIXRoaXMub3duZWRfICYmIGlzU3B5RW5hYmxlZCgpXG4gICAgICAgIGNvbnN0IG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKVxuICAgICAgICBjb25zdCBjaGFuZ2U6IElBcnJheURpZENoYW5nZSB8IG51bGwgPVxuICAgICAgICAgICAgbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8gKHtcbiAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5hdG9tXy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgfSBhcyBjb25zdClcbiAgICAgICAgICAgICAgICA6IG51bGxcblxuICAgICAgICAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxuICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdG9tXy5yZXBvcnRDaGFuZ2VkKClcbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlBcnJheVNwbGljZV8oaW5kZXg6IG51bWJlciwgYWRkZWQ6IGFueVtdLCByZW1vdmVkOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBub3RpZnlTcHkgPSAhdGhpcy5vd25lZF8gJiYgaXNTcHlFbmFibGVkKClcbiAgICAgICAgY29uc3Qgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpXG4gICAgICAgIGNvbnN0IGNoYW5nZTogSUFycmF5U3BsaWNlIHwgbnVsbCA9XG4gICAgICAgICAgICBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyAoe1xuICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMuYXRvbV8ubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgYWRkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIH0gYXMgY29uc3QpXG4gICAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UhKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfKGluZGV4OiBudW1iZXIpOiBhbnkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5sZWdhY3lNb2RlXyAmJiBpbmRleCA+PSB0aGlzLnZhbHVlc18ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgX19ERVZfX1xuICAgICAgICAgICAgICAgICAgICA/IGBbbW9ieC5hcnJheV0gQXR0ZW1wdCB0byByZWFkIGFuIGFycmF5IGluZGV4ICgke2luZGV4fSkgdGhhdCBpcyBvdXQgb2YgYm91bmRzICgke3RoaXMudmFsdWVzXy5sZW5ndGh9KS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYYFxuICAgICAgICAgICAgICAgICAgICA6IGBbbW9ieF0gT3V0IG9mIGJvdW5kcyByZWFkOiAke2luZGV4fWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKClcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlXyh0aGlzLnZhbHVlc19baW5kZXhdKVxuICAgIH1cblxuICAgIHNldF8oaW5kZXg6IG51bWJlciwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlc19cbiAgICAgICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gJiYgaW5kZXggPiB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICBkaWUoMTcsIGluZGV4LCB2YWx1ZXMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhdCBpbmRleCBpbiByYW5nZVxuICAgICAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXylcbiAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgICAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJQXJyYXlXaWxsQ2hhbmdlPGFueT4+KHRoaXMgYXMgYW55LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyBhcyBhbnksIC8vIHNpbmNlIFwidGhpc1wiIGlzIHRoZSByZWFsIGFycmF5IHdlIG5lZWQgdG8gcGFzcyBpdHMgcHJveHlcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcl8obmV3VmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3Igb3V0IG9mIGJvdW5kIGluZGV4LCB3ZSBkb24ndCBjcmVhdGUgYW4gYWN0dWFsIHNwYXJzZSBhcnJheSxcbiAgICAgICAgICAgIC8vIGJ1dCByYXRoZXIgZmlsbCB0aGUgaG9sZXMgd2l0aCB1bmRlZmluZWQgKHNhbWUgYXMgc2V0QXJyYXlMZW5ndGhfKS5cbiAgICAgICAgICAgIC8vIFRoaXMgY291bGQgYmUgY29uc2lkZXJlZCBhIGJ1Zy5cbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gbmV3IEFycmF5KGluZGV4ICsgMSAtIHZhbHVlcy5sZW5ndGgpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkXG4gICAgICAgICAgICB9IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxuICAgICAgICAgICAgbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV0gPSBuZXdWYWx1ZVxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXlfKHZhbHVlcy5sZW5ndGgsIDAsIG5ld0l0ZW1zKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5PFQ+KFxuICAgIGluaXRpYWxWYWx1ZXM6IFRbXSB8IHVuZGVmaW5lZCxcbiAgICBlbmhhbmNlcjogSUVuaGFuY2VyPFQ+LFxuICAgIG5hbWUgPSBfX0RFVl9fID8gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZUFycmF5XCIsXG4gICAgb3duZWQgPSBmYWxzZVxuKTogSU9ic2VydmFibGVBcnJheTxUPiB7XG4gICAgYXNzZXJ0UHJveGllcygpXG4gICAgY29uc3QgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCwgZmFsc2UpXG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFkbS52YWx1ZXNfLCAkbW9ieCwgYWRtKVxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGFkbS52YWx1ZXNfLCBhcnJheVRyYXBzKSBhcyBhbnlcbiAgICBhZG0ucHJveHlfID0gcHJveHlcbiAgICBpZiAoaW5pdGlhbFZhbHVlcyAmJiBpbml0aWFsVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKVxuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpbml0aWFsVmFsdWVzKVxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KVxuICAgIH1cbiAgICByZXR1cm4gcHJveHlcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgdmFyIGFycmF5RXh0ZW5zaW9ucyA9IHtcbiAgICBjbGVhcigpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKVxuICAgIH0sXG5cbiAgICByZXBsYWNlKG5ld0l0ZW1zOiBhbnlbXSkge1xuICAgICAgICBjb25zdCBhZG06IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gdGhpc1skbW9ieF1cbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKDAsIGFkbS52YWx1ZXNfLmxlbmd0aCwgbmV3SXRlbXMpXG4gICAgfSxcblxuICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICB0b0pTT04oKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpXG4gICAgfSxcblxuICAgIC8qXG4gICAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXG4gICAgICogc2luY2UgdGhlc2UgZnVuY3Rpb25zIGFsdGVyIHRoZSBpbm5lciBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMuXG4gICAgICogQmVjYXVzZSB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMsIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbXB1dGVkIGZ1bmN0aW9uLFxuICAgICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxuICAgICAqL1xuICAgIHNwbGljZShpbmRleDogbnVtYmVyLCBkZWxldGVDb3VudD86IG51bWJlciwgLi4ubmV3SXRlbXM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBjb25zdCBhZG06IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gdGhpc1skbW9ieF1cbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4KVxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5XyhpbmRleCwgZGVsZXRlQ291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpXG4gICAgfSxcblxuICAgIHNwbGljZVdpdGhBcnJheShpbmRleDogbnVtYmVyLCBkZWxldGVDb3VudD86IG51bWJlciwgbmV3SXRlbXM/OiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuICh0aGlzWyRtb2J4XSBhcyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbikuc3BsaWNlV2l0aEFycmF5XyhcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgZGVsZXRlQ291bnQsXG4gICAgICAgICAgICBuZXdJdGVtc1xuICAgICAgICApXG4gICAgfSxcblxuICAgIHB1c2goLi4uaXRlbXM6IGFueVtdKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgYWRtOiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IHRoaXNbJG1vYnhdXG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGFkbS52YWx1ZXNfLmxlbmd0aCwgMCwgaXRlbXMpXG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzXy5sZW5ndGhcbiAgICB9LFxuXG4gICAgcG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpc1skbW9ieF0udmFsdWVzXy5sZW5ndGggLSAxLCAwKSwgMSlbMF1cbiAgICB9LFxuXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwLCAxKVswXVxuICAgIH0sXG5cbiAgICB1bnNoaWZ0KC4uLml0ZW1zOiBhbnlbXSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSB0aGlzWyRtb2J4XVxuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpdGVtcylcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXNfLmxlbmd0aFxuICAgIH0sXG5cbiAgICByZXZlcnNlKCk6IGFueVtdIHtcbiAgICAgICAgLy8gcmV2ZXJzZSBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIG1ha2VzIGl0IGJvdGggYSAnZGVyaXZhdGlvbicgYW5kIGEgJ211dGF0aW9uJy5cbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgICAgICAgZGllKDM3LCBcInJldmVyc2VcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2UodGhpcy5zbGljZSgpLnJldmVyc2UoKSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc29ydCgpOiBhbnlbXSB7XG4gICAgICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgICAgICAvLyB3aGljaCBnb2VzIGFnYWluc3QgYWxsIGdvb2QgcHJhY3RpY2VzLiBMZXQncyBub3QgY2hhbmdlIHRoZSBhcnJheSBpbiBwbGFjZSFcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgICAgICAgZGllKDM3LCBcInNvcnRcIilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5zbGljZSgpXG4gICAgICAgIGNvcHkuc29ydC5hcHBseShjb3B5LCBhcmd1bWVudHMpXG4gICAgICAgIHRoaXMucmVwbGFjZShjb3B5KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByZW1vdmUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhZG06IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gdGhpc1skbW9ieF1cbiAgICAgICAgY29uc3QgaWR4ID0gYWRtLmRlaGFuY2VWYWx1ZXNfKGFkbS52YWx1ZXNfKS5pbmRleE9mKHZhbHVlKVxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG4vKipcbiAqIFdyYXAgZnVuY3Rpb24gZnJvbSBwcm90b3R5cGVcbiAqIFdpdGhvdXQgdGhpcywgZXZlcnl0aGluZyB3b3JrcyBhcyB3ZWxsLCBidXQgdGhpcyB3b3Jrc1xuICogZmFzdGVyIGFzIGV2ZXJ5dGhpbmcgd29ya3Mgb24gdW5wcm94aWVkIHZhbHVlc1xuICovXG5hZGRBcnJheUV4dGVuc2lvbihcImNvbmNhdFwiLCBzaW1wbGVGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJmbGF0XCIsIHNpbXBsZUZ1bmMpXG5hZGRBcnJheUV4dGVuc2lvbihcImluY2x1ZGVzXCIsIHNpbXBsZUZ1bmMpXG5hZGRBcnJheUV4dGVuc2lvbihcImluZGV4T2ZcIiwgc2ltcGxlRnVuYylcbmFkZEFycmF5RXh0ZW5zaW9uKFwiam9pblwiLCBzaW1wbGVGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJsYXN0SW5kZXhPZlwiLCBzaW1wbGVGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJzbGljZVwiLCBzaW1wbGVGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJ0b1N0cmluZ1wiLCBzaW1wbGVGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJ0b0xvY2FsZVN0cmluZ1wiLCBzaW1wbGVGdW5jKVxuLy8gbWFwXG5hZGRBcnJheUV4dGVuc2lvbihcImV2ZXJ5XCIsIG1hcExpa2VGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJmaWx0ZXJcIiwgbWFwTGlrZUZ1bmMpXG5hZGRBcnJheUV4dGVuc2lvbihcImZpbmRcIiwgbWFwTGlrZUZ1bmMpXG5hZGRBcnJheUV4dGVuc2lvbihcImZpbmRJbmRleFwiLCBtYXBMaWtlRnVuYylcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmxhdE1hcFwiLCBtYXBMaWtlRnVuYylcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZm9yRWFjaFwiLCBtYXBMaWtlRnVuYylcbmFkZEFycmF5RXh0ZW5zaW9uKFwibWFwXCIsIG1hcExpa2VGdW5jKVxuYWRkQXJyYXlFeHRlbnNpb24oXCJzb21lXCIsIG1hcExpa2VGdW5jKVxuLy8gcmVkdWNlXG5hZGRBcnJheUV4dGVuc2lvbihcInJlZHVjZVwiLCByZWR1Y2VMaWtlRnVuYylcbmFkZEFycmF5RXh0ZW5zaW9uKFwicmVkdWNlUmlnaHRcIiwgcmVkdWNlTGlrZUZ1bmMpXG5cbmZ1bmN0aW9uIGFkZEFycmF5RXh0ZW5zaW9uKGZ1bmNOYW1lLCBmdW5jRmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW2Z1bmNOYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGFycmF5RXh0ZW5zaW9uc1tmdW5jTmFtZV0gPSBmdW5jRmFjdG9yeShmdW5jTmFtZSlcbiAgICB9XG59XG5cbi8vIFJlcG9ydCBhbmQgZGVsZWdhdGUgdG8gZGVoYW5jZWQgYXJyYXlcbmZ1bmN0aW9uIHNpbXBsZUZ1bmMoZnVuY05hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhZG06IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gdGhpc1skbW9ieF1cbiAgICAgICAgYWRtLmF0b21fLnJlcG9ydE9ic2VydmVkKClcbiAgICAgICAgY29uc3QgZGVoYW5jZWRWYWx1ZXMgPSBhZG0uZGVoYW5jZVZhbHVlc18oYWRtLnZhbHVlc18pXG4gICAgICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0uYXBwbHkoZGVoYW5jZWRWYWx1ZXMsIGFyZ3VtZW50cylcbiAgICB9XG59XG5cbi8vIE1ha2Ugc3VyZSBjYWxsYmFja3MgcmVjaWV2ZSBjb3JyZWN0IGFycmF5IGFyZyAjMjMyNlxuZnVuY3Rpb24gbWFwTGlrZUZ1bmMoZnVuY05hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSB0aGlzWyRtb2J4XVxuICAgICAgICBhZG0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICBjb25zdCBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXylcbiAgICAgICAgcmV0dXJuIGRlaGFuY2VkVmFsdWVzW2Z1bmNOYW1lXSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGVsZW1lbnQsIGluZGV4LCB0aGlzKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gTWFrZSBzdXJlIGNhbGxiYWNrcyByZWNpZXZlIGNvcnJlY3QgYXJyYXkgYXJnICMyMzI2XG5mdW5jdGlvbiByZWR1Y2VMaWtlRnVuYyhmdW5jTmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGFkbTogT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSB0aGlzWyRtb2J4XVxuICAgICAgICBhZG0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICBjb25zdCBkZWhhbmNlZFZhbHVlcyA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXylcbiAgICAgICAgLy8gIzI0MzIgLSByZWR1Y2UgYmVoYXZpb3IgZGVwZW5kcyBvbiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYXJndW1lbnRzWzBdXG4gICAgICAgIGFyZ3VtZW50c1swXSA9IChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4LCB0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0uYXBwbHkoZGVoYW5jZWRWYWx1ZXMsIGFyZ3VtZW50cylcbiAgICB9XG59XG5cbmNvbnN0IGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFxuICAgIFwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb25cIixcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblxuKVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpOiB0aGluZyBpcyBJT2JzZXJ2YWJsZUFycmF5PGFueT4ge1xuICAgIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pXG59XG4iLCJpbXBvcnQge1xuICAgICRtb2J4LFxuICAgIElFbmhhbmNlcixcbiAgICBJSW50ZXJjZXB0YWJsZSxcbiAgICBJSW50ZXJjZXB0b3IsXG4gICAgSUxpc3RlbmFibGUsXG4gICAgTGFtYmRhLFxuICAgIE9ic2VydmFibGVWYWx1ZSxcbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCxcbiAgICBjcmVhdGVBdG9tLFxuICAgIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUsXG4gICAgZGVlcEVuaGFuY2VyLFxuICAgIGdldE5leHRJZCxcbiAgICBnZXRQbGFpbk9iamVjdEtleXMsXG4gICAgaGFzSW50ZXJjZXB0b3JzLFxuICAgIGhhc0xpc3RlbmVycyxcbiAgICBpbnRlcmNlcHRDaGFuZ2UsXG4gICAgaXNFUzZNYXAsXG4gICAgaXNQbGFpbk9iamVjdCxcbiAgICBpc1NweUVuYWJsZWQsXG4gICAgbWFrZUl0ZXJhYmxlLFxuICAgIG5vdGlmeUxpc3RlbmVycyxcbiAgICByZWZlcmVuY2VFbmhhbmNlcixcbiAgICByZWdpc3RlckludGVyY2VwdG9yLFxuICAgIHJlZ2lzdGVyTGlzdGVuZXIsXG4gICAgc3B5UmVwb3J0RW5kLFxuICAgIHNweVJlcG9ydFN0YXJ0LFxuICAgIHN0cmluZ2lmeUtleSxcbiAgICB0cmFuc2FjdGlvbixcbiAgICB1bnRyYWNrZWQsXG4gICAgb25CZWNvbWVVbm9ic2VydmVkLFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIGRpZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIFVQREFURSxcbiAgICBJQXRvbSxcbiAgICBQdXJlU3B5RXZlbnQsXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGludGVyZmFjZSBJS2V5VmFsdWVNYXA8ViA9IGFueT4ge1xuICAgIFtrZXk6IHN0cmluZ106IFZcbn1cblxuZXhwb3J0IHR5cGUgSU1hcEVudHJ5PEsgPSBhbnksIFYgPSBhbnk+ID0gW0ssIFZdXG5leHBvcnQgdHlwZSBJUmVhZG9ubHlNYXBFbnRyeTxLID0gYW55LCBWID0gYW55PiA9IHJlYWRvbmx5IFtLLCBWXVxuZXhwb3J0IHR5cGUgSU1hcEVudHJpZXM8SyA9IGFueSwgViA9IGFueT4gPSBJTWFwRW50cnk8SywgVj5bXVxuZXhwb3J0IHR5cGUgSVJlYWRvbmx5TWFwRW50cmllczxLID0gYW55LCBWID0gYW55PiA9IElSZWFkb25seU1hcEVudHJ5PEssIFY+W11cblxuZXhwb3J0IHR5cGUgSU1hcERpZENoYW5nZTxLID0gYW55LCBWID0gYW55PiA9IHsgb2JzZXJ2YWJsZUtpbmQ6IFwibWFwXCI7IGRlYnVnT2JqZWN0TmFtZTogc3RyaW5nIH0gJiAoXG4gICAgfCB7XG4gICAgICAgICAgb2JqZWN0OiBPYnNlcnZhYmxlTWFwPEssIFY+XG4gICAgICAgICAgbmFtZTogSyAvLyBhY3R1YWwgdGhlIGtleSBvciBpbmRleCwgYnV0IHRoaXMgaXMgYmFzZWQgb24gdGhlIGFuY2llbnQgLm9ic2VydmUgcHJvcG9zYWwgZm9yIGNvbnNpc3RlbmN5XG4gICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIlxuICAgICAgICAgIG5ld1ZhbHVlOiBWXG4gICAgICAgICAgb2xkVmFsdWU6IFZcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICBvYmplY3Q6IE9ic2VydmFibGVNYXA8SywgVj5cbiAgICAgICAgICBuYW1lOiBLXG4gICAgICAgICAgdHlwZTogXCJhZGRcIlxuICAgICAgICAgIG5ld1ZhbHVlOiBWXG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAgb2JqZWN0OiBPYnNlcnZhYmxlTWFwPEssIFY+XG4gICAgICAgICAgbmFtZTogS1xuICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCJcbiAgICAgICAgICBvbGRWYWx1ZTogVlxuICAgICAgfVxuKVxuXG5leHBvcnQgaW50ZXJmYWNlIElNYXBXaWxsQ2hhbmdlPEsgPSBhbnksIFYgPSBhbnk+IHtcbiAgICBvYmplY3Q6IE9ic2VydmFibGVNYXA8SywgVj5cbiAgICB0eXBlOiBcInVwZGF0ZVwiIHwgXCJhZGRcIiB8IFwiZGVsZXRlXCJcbiAgICBuYW1lOiBLXG4gICAgbmV3VmFsdWU/OiBWXG59XG5cbmNvbnN0IE9ic2VydmFibGVNYXBNYXJrZXIgPSB7fVxuXG5leHBvcnQgY29uc3QgQUREID0gXCJhZGRcIlxuZXhwb3J0IGNvbnN0IERFTEVURSA9IFwiZGVsZXRlXCJcblxuZXhwb3J0IHR5cGUgSU9ic2VydmFibGVNYXBJbml0aWFsVmFsdWVzPEsgPSBhbnksIFYgPSBhbnk+ID1cbiAgICB8IElNYXBFbnRyaWVzPEssIFY+XG4gICAgfCBJUmVhZG9ubHlNYXBFbnRyaWVzPEssIFY+XG4gICAgfCBJS2V5VmFsdWVNYXA8Vj5cbiAgICB8IE1hcDxLLCBWPlxuXG4vLyBqdXN0IGV4dGVuZCBNYXA/IFNlZSBhbHNvIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL25lc3RoYXJ1cy8xM2I0ZDc0ZjJlZjRhMmY0MzU3ZGJkM2ZjMjNjMWU1NFxuLy8gQnV0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE1NTZcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlTWFwPEsgPSBhbnksIFYgPSBhbnk+XG4gICAgaW1wbGVtZW50cyBNYXA8SywgVj4sIElJbnRlcmNlcHRhYmxlPElNYXBXaWxsQ2hhbmdlPEssIFY+PiwgSUxpc3RlbmFibGUge1xuICAgIFskbW9ieF0gPSBPYnNlcnZhYmxlTWFwTWFya2VyXG4gICAgZGF0YV86IE1hcDxLLCBPYnNlcnZhYmxlVmFsdWU8Vj4+XG4gICAgaGFzTWFwXzogTWFwPEssIE9ic2VydmFibGVWYWx1ZTxib29sZWFuPj4gLy8gaGFzTWFwLCBub3QgaGFzaE1hcCA+LSkuXG4gICAga2V5c0F0b21fOiBJQXRvbVxuICAgIGludGVyY2VwdG9yc19cbiAgICBjaGFuZ2VMaXN0ZW5lcnNfXG4gICAgZGVoYW5jZXI6IGFueVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGluaXRpYWxEYXRhPzogSU9ic2VydmFibGVNYXBJbml0aWFsVmFsdWVzPEssIFY+LFxuICAgICAgICBwdWJsaWMgZW5oYW5jZXJfOiBJRW5oYW5jZXI8Vj4gPSBkZWVwRW5oYW5jZXIsXG4gICAgICAgIHB1YmxpYyBuYW1lXyA9IF9fREVWX18gPyBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZU1hcFwiXG4gICAgKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihNYXApKSB7XG4gICAgICAgICAgICBkaWUoMTgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlzQXRvbV8gPSBjcmVhdGVBdG9tKF9fREVWX18gPyBgJHt0aGlzLm5hbWVffS5rZXlzKClgIDogXCJPYnNlcnZhYmxlTWFwLmtleXMoKVwiKVxuICAgICAgICB0aGlzLmRhdGFfID0gbmV3IE1hcCgpXG4gICAgICAgIHRoaXMuaGFzTWFwXyA9IG5ldyBNYXAoKVxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlcyh0cnVlLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFzXyhrZXk6IEspOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YV8uaGFzKGtleSlcbiAgICB9XG5cbiAgICBoYXMoa2V5OiBLKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNfKGtleSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbnRyeSA9IHRoaXMuaGFzTWFwXy5nZXQoa2V5KVxuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRyeSA9IChlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNfKGtleSksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlRW5oYW5jZXIsXG4gICAgICAgICAgICAgICAgX19ERVZfXyA/IGAke3RoaXMubmFtZV99LiR7c3RyaW5naWZ5S2V5KGtleSl9P2AgOiBcIk9ic2VydmFibGVNYXAua2V5P1wiLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgdGhpcy5oYXNNYXBfLnNldChrZXksIG5ld0VudHJ5KVxuICAgICAgICAgICAgb25CZWNvbWVVbm9ic2VydmVkKG5ld0VudHJ5LCAoKSA9PiB0aGlzLmhhc01hcF8uZGVsZXRlKGtleSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW50cnkuZ2V0KClcbiAgICB9XG5cbiAgICBzZXQoa2V5OiBLLCB2YWx1ZTogVikge1xuICAgICAgICBjb25zdCBoYXNLZXkgPSB0aGlzLmhhc18oa2V5KVxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2U8SU1hcFdpbGxDaGFuZ2U8SywgVj4+KHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBoYXNLZXkgPyBVUERBVEUgOiBBREQsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZSFcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlXyhrZXksIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZV8oa2V5LCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGRlbGV0ZShrZXk6IEspOiBib29sZWFuIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5rZXlzQXRvbV8pXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJTWFwV2lsbENoYW5nZTxLLCBWPj4odGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNfKGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpXG4gICAgICAgICAgICBjb25zdCBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcylcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZTogSU1hcERpZENoYW5nZTxLLCBWPiB8IG51bGwgPVxuICAgICAgICAgICAgICAgIG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm1hcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogKDxhbnk+dGhpcy5kYXRhXy5nZXQoa2V5KSkudmFsdWVfLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJiBub3RpZnlTcHkpIHtcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UhIGFzIFB1cmVTcHlFdmVudClcbiAgICAgICAgICAgIH0gLy8gVE9ETyBmaXggdHlwZVxuICAgICAgICAgICAgdHJhbnNhY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFzTWFwXy5nZXQoa2V5KT8uc2V0TmV3VmFsdWVfKGZhbHNlKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmRhdGFfLmdldChrZXkpIVxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWVfKHVuZGVmaW5lZCBhcyBhbnkpXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5kZWxldGUoa2V5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZV8oa2V5OiBLLCBuZXdWYWx1ZTogViB8IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5kYXRhXy5nZXQoa2V5KSFcbiAgICAgICAgbmV3VmFsdWUgPSAob2JzZXJ2YWJsZSBhcyBhbnkpLnByZXBhcmVOZXdWYWx1ZV8obmV3VmFsdWUpIGFzIFZcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpXG4gICAgICAgICAgICBjb25zdCBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcylcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZTogSU1hcERpZENoYW5nZTxLLCBWPiB8IG51bGwgPVxuICAgICAgICAgICAgICAgIG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm1hcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogKG9ic2VydmFibGUgYXMgYW55KS52YWx1ZV8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlISBhcyBQdXJlU3B5RXZlbnQpXG4gICAgICAgICAgICB9IC8vIFRPRE8gZml4IHR5cGVcbiAgICAgICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlIGFzIFYpXG4gICAgICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFZhbHVlXyhrZXk6IEssIG5ld1ZhbHVlOiBWKSB7XG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMua2V5c0F0b21fKVxuICAgICAgICB0cmFuc2FjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVWYWx1ZShcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICB0aGlzLmVuaGFuY2VyXyxcbiAgICAgICAgICAgICAgICBfX0RFVl9fID8gYCR7dGhpcy5uYW1lX30uJHtzdHJpbmdpZnlLZXkoa2V5KX1gIDogXCJPYnNlcnZhYmxlTWFwLmtleVwiLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLmRhdGFfLnNldChrZXksIG9ic2VydmFibGUpXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IChvYnNlcnZhYmxlIGFzIGFueSkudmFsdWVfIC8vIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBjaGFuZ2VkXG4gICAgICAgICAgICB0aGlzLmhhc01hcF8uZ2V0KGtleSk/LnNldE5ld1ZhbHVlXyh0cnVlKVxuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpXG4gICAgICAgIGNvbnN0IG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKVxuICAgICAgICBjb25zdCBjaGFuZ2U6IElNYXBEaWRDaGFuZ2U8SywgVj4gfCBudWxsID1cbiAgICAgICAgICAgIG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJtYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UhIGFzIFB1cmVTcHlFdmVudClcbiAgICAgICAgfSAvLyBUT0RPIGZpeCB0eXBlXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KGtleTogSyk6IFYgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlXyh0aGlzLmRhdGFfLmdldChrZXkpIS5nZXQoKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHVuZGVmaW5lZClcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlaGFuY2VWYWx1ZV88WCBleHRlbmRzIFYgfCB1bmRlZmluZWQ+KHZhbHVlOiBYKTogWCB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIGtleXMoKTogSXRlcmFibGVJdGVyYXRvcjxLPiB7XG4gICAgICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydE9ic2VydmVkKClcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YV8ua2V5cygpXG4gICAgfVxuXG4gICAgdmFsdWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8Vj4ge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzKClcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGtleXMubmV4dCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRvbmUgPyAodW5kZWZpbmVkIGFzIGFueSkgOiBzZWxmLmdldCh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZW50cmllcygpOiBJdGVyYWJsZUl0ZXJhdG9yPElNYXBFbnRyeTxLLCBWPj4ge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5rZXlzKClcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGtleXMubmV4dCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRvbmUgPyAodW5kZWZpbmVkIGFzIGFueSkgOiAoW3ZhbHVlLCBzZWxmLmdldCh2YWx1ZSkhXSBhcyBbSywgVl0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKClcbiAgICB9XG5cbiAgICBmb3JFYWNoKGNhbGxiYWNrOiAodmFsdWU6IFYsIGtleTogSywgb2JqZWN0OiBNYXA8SywgVj4pID0+IHZvaWQsIHRoaXNBcmc/KSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgdGhpcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gICAgbWVyZ2Uob3RoZXI/OiBJT2JzZXJ2YWJsZU1hcEluaXRpYWxWYWx1ZXM8SywgVj4pOiBPYnNlcnZhYmxlTWFwPEssIFY+IHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gbmV3IE1hcChvdGhlcilcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpIHtcbiAgICAgICAgICAgICAgICBnZXRQbGFpbk9iamVjdEtleXMob3RoZXIpLmZvckVhY2goKGtleTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChrZXkgYXMgSywgKG90aGVyIGFzIElLZXlWYWx1ZU1hcClba2V5XSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKSB7XG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB0aGlzLnNldChrZXksIHZhbHVlKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFUzZNYXAob3RoZXIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmNvbnN0cnVjdG9yICE9PSBNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgZGllKDE5LCBvdGhlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGhpcy5zZXQoa2V5LCB2YWx1ZSkpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkaWUoMjAsIG90aGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0cmFuc2FjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICB1bnRyYWNrZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMua2V5cygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlcGxhY2UodmFsdWVzOiBJT2JzZXJ2YWJsZU1hcEluaXRpYWxWYWx1ZXM8SywgVj4pOiBPYnNlcnZhYmxlTWFwPEssIFY+IHtcbiAgICAgICAgLy8gSW1wbGVtZW50YXRpb24gcmVxdWlyZW1lbnRzOlxuICAgICAgICAvLyAtIHJlc3BlY3Qgb3JkZXJpbmcgb2YgcmVwbGFjZW1lbnQgbWFwXG4gICAgICAgIC8vIC0gYWxsb3cgaW50ZXJjZXB0b3JzIHRvIHJ1biBhbmQgcG90ZW50aWFsbHkgcHJldmVudCBpbmRpdmlkdWFsIG9wZXJhdGlvbnNcbiAgICAgICAgLy8gLSBkb24ndCByZWNyZWF0ZSBvYnNlcnZhYmxlcyB0aGF0IGFscmVhZHkgZXhpc3QgaW4gb3JpZ2luYWwgbWFwIChzbyB3ZSBkb24ndCBkZXN0cm95IGV4aXN0aW5nIHN1YnNjcmlwdGlvbnMpXG4gICAgICAgIC8vIC0gZG9uJ3QgX2tleXNBdG9tLnJlcG9ydENoYW5nZWQgaWYgdGhlIGtleXMgb2YgcmVzdWx0aW5nIG1hcCBhcmUgaW5kZW50aWNhbCAob3JkZXIgbWF0dGVycyEpXG4gICAgICAgIC8vIC0gbm90ZSB0aGF0IHJlc3VsdCBtYXAgbWF5IGRpZmZlciBmcm9tIHJlcGxhY2VtZW50IG1hcCBkdWUgdG8gdGhlIGludGVyY2VwdG9yc1xuICAgICAgICB0cmFuc2FjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvIG1hcCBzbyB3ZSBjYW4gZG8gcXVpY2sga2V5IGxvb2t1cHNcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50TWFwID0gY29udmVydFRvTWFwKHZhbHVlcylcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyZWREYXRhID0gbmV3IE1hcCgpXG4gICAgICAgICAgICAvLyBVc2VkIGZvciBvcHRpbWl6YXRpb25cbiAgICAgICAgICAgIGxldCBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IGZhbHNlXG4gICAgICAgICAgICAvLyBEZWxldGUga2V5cyB0aGF0IGRvbid0IGV4aXN0IGluIHJlcGxhY2VtZW50IG1hcFxuICAgICAgICAgICAgLy8gaWYgdGhlIGtleSBkZWxldGlvbiBpcyBwcmV2ZW50ZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgICAgICAgIC8vIGFkZCBlbnRyeSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXN1bHQgbWFwXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmRhdGFfLmtleXMoKSkge1xuICAgICAgICAgICAgICAgIC8vIENvbmN1cnJlbnRseSBpdGVyYXRpbmcvZGVsZXRpbmcga2V5c1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIHNob3VsZCBoYW5kbGUgdGhpcyBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSB0aGlzLmRlbGV0ZShrZXkpXG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcyB0aGUga2V5IHJlbW92ZWQ/XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpIHdhcyBhbHJlYWR5IGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5c1JlcG9ydENoYW5nZWRDYWxsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgcHJldmVudGVkIGJ5IGludGVyY2VwdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YV8uZ2V0KGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWREYXRhLnNldChrZXksIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWVyZ2UgZW50cmllc1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgcmVwbGFjZW1lbnRNYXAuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugd2lsbCB3YW50IHRvIGtub3cgd2hldGhlciBhIG5ldyBrZXkgaXMgYWRkZWRcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlFeGlzdGVkID0gdGhpcy5kYXRhXy5oYXMoa2V5KVxuICAgICAgICAgICAgICAgIC8vIEFkZCBvciB1cGRhdGUgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKVxuICAgICAgICAgICAgICAgIC8vIFRoZSBhZGRpdGlvbiBjb3VsZCBoYXZlIGJlZW4gcHJldmVudCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFfLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSB1cGRhdGUgY291bGQgaGF2ZSBiZWVuIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYWxzbyB3ZSB3YW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBzbyB1c2UgdmFsdWUgZnJvbSBfZGF0YSBtYXAgKGluc3RlYWQgb2YgcmVwbGFjZW1lbnQgbWFwKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YV8uZ2V0KGtleSlcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZERhdGEuc2V0KGtleSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcyBhIG5ldyBrZXkgYWRkZWQ/XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5RXhpc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKSB3YXMgYWxyZWFkeSBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHBvc3NpYmxlIGtleSBvcmRlciBjaGFuZ2VcbiAgICAgICAgICAgIGlmICgha2V5c1JlcG9ydENoYW5nZWRDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhXy5zaXplICE9PSBvcmRlcmVkRGF0YS5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNpemUgZGlmZmVycywga2V5cyBhcmUgZGVmaW5pdGVseSBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVyMSA9IHRoaXMuZGF0YV8ua2V5cygpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZXIyID0gb3JkZXJlZERhdGEua2V5cygpXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0MSA9IGl0ZXIxLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dDIgPSBpdGVyMi5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFuZXh0MS5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dDEudmFsdWUgIT09IG5leHQyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQxID0gaXRlcjEubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0MiA9IGl0ZXIyLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIGNvcnJlY3RseSBvcmRlcmVkIG1hcFxuICAgICAgICAgICAgdGhpcy5kYXRhXyA9IG9yZGVyZWREYXRhXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXy5zaXplXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBPYnNlcnZhYmxlTWFwXVwiXG4gICAgfVxuXG4gICAgdG9KU09OKCk6IFtLLCBWXVtdIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcylcbiAgICB9XG5cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiBcIk1hcFwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXG4gICAgICovXG4gICAgb2JzZXJ2ZV8obGlzdGVuZXI6IChjaGFuZ2VzOiBJTWFwRGlkQ2hhbmdlPEssIFY+KSA9PiB2b2lkLCBmaXJlSW1tZWRpYXRlbHk/OiBib29sZWFuKTogTGFtYmRhIHtcbiAgICAgICAgaWYgKF9fREVWX18gJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggbWFwcy5cIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcilcbiAgICB9XG5cbiAgICBpbnRlcmNlcHRfKGhhbmRsZXI6IElJbnRlcmNlcHRvcjxJTWFwV2lsbENoYW5nZTxLLCBWPj4pOiBMYW1iZGEge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKVxuICAgIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgdmFyIGlzT2JzZXJ2YWJsZU1hcCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApIGFzIChcbiAgICB0aGluZzogYW55XG4pID0+IHRoaW5nIGlzIE9ic2VydmFibGVNYXA8YW55LCBhbnk+XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb01hcChkYXRhU3RydWN0dXJlOiBhbnkpOiBNYXA8YW55LCBhbnk+IHtcbiAgICBpZiAoaXNFUzZNYXAoZGF0YVN0cnVjdHVyZSkgfHwgaXNPYnNlcnZhYmxlTWFwKGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgICAgIHJldHVybiBkYXRhU3RydWN0dXJlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwKGRhdGFTdHJ1Y3R1cmUpXG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhU3RydWN0dXJlKSB7XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgZGF0YVN0cnVjdHVyZVtrZXldKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGllKDIxLCBkYXRhU3RydWN0dXJlKVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgJG1vYngsXG4gICAgY3JlYXRlQXRvbSxcbiAgICBkZWVwRW5oYW5jZXIsXG4gICAgZ2V0TmV4dElkLFxuICAgIElFbmhhbmNlcixcbiAgICBpc1NweUVuYWJsZWQsXG4gICAgaGFzTGlzdGVuZXJzLFxuICAgIElMaXN0ZW5hYmxlLFxuICAgIHJlZ2lzdGVyTGlzdGVuZXIsXG4gICAgTGFtYmRhLFxuICAgIHNweVJlcG9ydFN0YXJ0LFxuICAgIG5vdGlmeUxpc3RlbmVycyxcbiAgICBzcHlSZXBvcnRFbmQsXG4gICAgY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSxcbiAgICBoYXNJbnRlcmNlcHRvcnMsXG4gICAgaW50ZXJjZXB0Q2hhbmdlLFxuICAgIElJbnRlcmNlcHRhYmxlLFxuICAgIElJbnRlcmNlcHRvcixcbiAgICByZWdpc3RlckludGVyY2VwdG9yLFxuICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkLFxuICAgIHVudHJhY2tlZCxcbiAgICBtYWtlSXRlcmFibGUsXG4gICAgdHJhbnNhY3Rpb24sXG4gICAgaXNFUzZTZXQsXG4gICAgSUF0b20sXG4gICAgREVMRVRFLFxuICAgIEFERCxcbiAgICBkaWUsXG4gICAgaXNGdW5jdGlvblxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5jb25zdCBPYnNlcnZhYmxlU2V0TWFya2VyID0ge31cblxuZXhwb3J0IHR5cGUgSU9ic2VydmFibGVTZXRJbml0aWFsVmFsdWVzPFQ+ID0gU2V0PFQ+IHwgcmVhZG9ubHkgVFtdXG5cbmV4cG9ydCB0eXBlIElTZXREaWRDaGFuZ2U8VCA9IGFueT4gPVxuICAgIHwge1xuICAgICAgICAgIG9iamVjdDogT2JzZXJ2YWJsZVNldDxUPlxuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiBzdHJpbmdcbiAgICAgICAgICB0eXBlOiBcImFkZFwiXG4gICAgICAgICAgbmV3VmFsdWU6IFRcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICBvYmplY3Q6IE9ic2VydmFibGVTZXQ8VD5cbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJzZXRcIlxuICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogc3RyaW5nXG4gICAgICAgICAgdHlwZTogXCJkZWxldGVcIlxuICAgICAgICAgIG9sZFZhbHVlOiBUXG4gICAgICB9XG5cbmV4cG9ydCB0eXBlIElTZXRXaWxsQ2hhbmdlPFQgPSBhbnk+ID1cbiAgICB8IHtcbiAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiXG4gICAgICAgICAgb2JqZWN0OiBPYnNlcnZhYmxlU2V0PFQ+XG4gICAgICAgICAgb2xkVmFsdWU6IFRcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICB0eXBlOiBcImFkZFwiXG4gICAgICAgICAgb2JqZWN0OiBPYnNlcnZhYmxlU2V0PFQ+XG4gICAgICAgICAgbmV3VmFsdWU6IFRcbiAgICAgIH1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVTZXQ8VCA9IGFueT4gaW1wbGVtZW50cyBTZXQ8VD4sIElJbnRlcmNlcHRhYmxlPElTZXRXaWxsQ2hhbmdlPiwgSUxpc3RlbmFibGUge1xuICAgIFskbW9ieF0gPSBPYnNlcnZhYmxlU2V0TWFya2VyXG4gICAgcHJpdmF0ZSBkYXRhXzogU2V0PGFueT4gPSBuZXcgU2V0KClcbiAgICBhdG9tXzogSUF0b21cbiAgICBjaGFuZ2VMaXN0ZW5lcnNfXG4gICAgaW50ZXJjZXB0b3JzX1xuICAgIGRlaGFuY2VyOiBhbnlcbiAgICBlbmhhbmNlcl86IChuZXdWOiBhbnksIG9sZFY6IGFueSB8IHVuZGVmaW5lZCkgPT4gYW55XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaW5pdGlhbERhdGE/OiBJT2JzZXJ2YWJsZVNldEluaXRpYWxWYWx1ZXM8VD4sXG4gICAgICAgIGVuaGFuY2VyOiBJRW5oYW5jZXI8VD4gPSBkZWVwRW5oYW5jZXIsXG4gICAgICAgIHB1YmxpYyBuYW1lXyA9IF9fREVWX18gPyBcIk9ic2VydmFibGVTZXRAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZVNldFwiXG4gICAgKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihTZXQpKSB7XG4gICAgICAgICAgICBkaWUoMjIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdG9tXyA9IGNyZWF0ZUF0b20odGhpcy5uYW1lXylcbiAgICAgICAgdGhpcy5lbmhhbmNlcl8gPSAobmV3Viwgb2xkVikgPT4gZW5oYW5jZXIobmV3Viwgb2xkViwgbmFtZV8pXG4gICAgICAgIGlmIChpbml0aWFsRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKGluaXRpYWxEYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWhhbmNlVmFsdWVfPFggZXh0ZW5kcyBUIHwgdW5kZWZpbmVkPih2YWx1ZTogWCk6IFgge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdHJhbnNhY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgdW50cmFja2VkKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuZGF0YV8udmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmb3JFYWNoKGNhbGxiYWNrRm46ICh2YWx1ZTogVCwgdmFsdWUyOiBULCBzZXQ6IFNldDxUPikgPT4gdm9pZCwgdGhpc0FyZz86IGFueSkge1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCB2YWx1ZSwgdmFsdWUsIHRoaXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFfLnNpemVcbiAgICB9XG5cbiAgICBhZGQodmFsdWU6IFQpIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tXylcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlPElTZXRXaWxsQ2hhbmdlPFQ+Pih0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZGVhbGx5LCB2YWx1ZSA9IGNoYW5nZS52YWx1ZSB3b3VsZCBiZSBkb25lIGhlcmUsIHNvIHRoYXQgdmFsdWVzIGNhbiBiZVxuICAgICAgICAgICAgLy8gY2hhbmdlZCBieSBpbnRlcmNlcHRvci4gU2FtZSBhcHBsaWVzIGZvciBvdGhlciBTZXQgYW5kIE1hcCBhcGkncy5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8uYWRkKHRoaXMuZW5oYW5jZXJfKHZhbHVlLCB1bmRlZmluZWQpKVxuICAgICAgICAgICAgICAgIHRoaXMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3Qgbm90aWZ5U3B5ID0gX19ERVZfXyAmJiBpc1NweUVuYWJsZWQoKVxuICAgICAgICAgICAgY29uc3Qgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgIG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICAgICAgPyA8SVNldERpZENoYW5nZTxUPj57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlISlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZGVsZXRlKHZhbHVlOiBUKSB7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJU2V0V2lsbENoYW5nZTxUPj4odGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBub3RpZnlTcHkgPSBfX0RFVl9fICYmIGlzU3B5RW5hYmxlZCgpXG4gICAgICAgICAgICBjb25zdCBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcylcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9XG4gICAgICAgICAgICAgICAgbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgICAgICA/IDxJU2V0RGlkQ2hhbmdlPFQ+PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwic2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgX19ERVZfXykge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmFuc2FjdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdG9tXy5yZXBvcnRDaGFuZ2VkKClcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgX19ERVZfXykge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGhhcyh2YWx1ZTogVCkge1xuICAgICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKClcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YV8uaGFzKHRoaXMuZGVoYW5jZVZhbHVlXyh2YWx1ZSkpXG4gICAgfVxuXG4gICAgZW50cmllcygpIHtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDBcbiAgICAgICAgY29uc3Qga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXMoKSlcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZTxbVCwgVF0+KHtcbiAgICAgICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBuZXh0SW5kZXhcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBba2V5c1tpbmRleF0sIHZhbHVlc1tpbmRleF1dLCBkb25lOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpXG4gICAgfVxuXG4gICAga2V5cygpOiBJdGVyYWJsZUl0ZXJhdG9yPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKClcbiAgICB9XG5cbiAgICB2YWx1ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxUPiB7XG4gICAgICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKVxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gMFxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlVmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLmRhdGFfLnZhbHVlcygpKVxuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlPFQ+KHtcbiAgICAgICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IG9ic2VydmFibGVWYWx1ZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZi5kZWhhbmNlVmFsdWVfKG9ic2VydmFibGVWYWx1ZXNbbmV4dEluZGV4KytdKSwgZG9uZTogZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA6IHsgZG9uZTogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KVxuICAgIH1cblxuICAgIHJlcGxhY2Uob3RoZXI6IE9ic2VydmFibGVTZXQ8VD4gfCBJT2JzZXJ2YWJsZVNldEluaXRpYWxWYWx1ZXM8VD4pOiBPYnNlcnZhYmxlU2V0PFQ+IHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gbmV3IFNldChvdGhlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zYWN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKVxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2godmFsdWUgPT4gdGhpcy5hZGQodmFsdWUpKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0VTNlNldChvdGhlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKClcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKHZhbHVlID0+IHRoaXMuYWRkKHZhbHVlKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRpZShcIkNhbm5vdCBpbml0aWFsaXplIHNldCBmcm9tIFwiICsgb3RoZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgb2JzZXJ2ZV8obGlzdGVuZXI6IChjaGFuZ2VzOiBJU2V0RGlkQ2hhbmdlPFQ+KSA9PiB2b2lkLCBmaXJlSW1tZWRpYXRlbHk/OiBib29sZWFuKTogTGFtYmRhIHtcbiAgICAgICAgLy8gLi4uICdmaXJlSW1tZWRpYXRlbHknIGNvdWxkIGFsc28gYmUgdHJ1ZT9cbiAgICAgICAgaWYgKF9fREVWX18gJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcilcbiAgICB9XG5cbiAgICBpbnRlcmNlcHRfKGhhbmRsZXI6IElJbnRlcmNlcHRvcjxJU2V0V2lsbENoYW5nZTxUPj4pOiBMYW1iZGEge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKVxuICAgIH1cblxuICAgIHRvSlNPTigpOiBUW10ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKVxuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgT2JzZXJ2YWJsZVNldF1cIlxuICAgIH1cblxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKVxuICAgIH1cblxuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIFwiU2V0XCJcbiAgICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IHZhciBpc09ic2VydmFibGVTZXQgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVNldFwiLCBPYnNlcnZhYmxlU2V0KSBhcyAoXG4gICAgdGhpbmc6IGFueVxuKSA9PiB0aGluZyBpcyBPYnNlcnZhYmxlU2V0PGFueT5cbiIsImltcG9ydCB7XG4gICAgQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMsXG4gICAgZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zLFxuICAgIHByb3BhZ2F0ZUNoYW5nZWQsXG4gICAgaXNBbm5vdGF0aW9uLFxuICAgICRtb2J4LFxuICAgIEF0b20sXG4gICAgQW5ub3RhdGlvbixcbiAgICBDb21wdXRlZFZhbHVlLFxuICAgIElBdG9tLFxuICAgIElDb21wdXRlZFZhbHVlT3B0aW9ucyxcbiAgICBJRW5oYW5jZXIsXG4gICAgSUludGVyY2VwdGFibGUsXG4gICAgSUxpc3RlbmFibGUsXG4gICAgTGFtYmRhLFxuICAgIE9ic2VydmFibGVWYWx1ZSxcbiAgICBhZGRIaWRkZW5Qcm9wLFxuICAgIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUsXG4gICAgZW5kQmF0Y2gsXG4gICAgZ2V0TmV4dElkLFxuICAgIGhhc0ludGVyY2VwdG9ycyxcbiAgICBoYXNMaXN0ZW5lcnMsXG4gICAgaW50ZXJjZXB0Q2hhbmdlLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzUGxhaW5PYmplY3QsXG4gICAgaXNTcHlFbmFibGVkLFxuICAgIG5vdGlmeUxpc3RlbmVycyxcbiAgICByZWZlcmVuY2VFbmhhbmNlcixcbiAgICByZWdpc3RlckludGVyY2VwdG9yLFxuICAgIHJlZ2lzdGVyTGlzdGVuZXIsXG4gICAgc3B5UmVwb3J0RW5kLFxuICAgIHNweVJlcG9ydFN0YXJ0LFxuICAgIHN0YXJ0QmF0Y2gsXG4gICAgc3RyaW5naWZ5S2V5LFxuICAgIGdsb2JhbFN0YXRlLFxuICAgIEFERCxcbiAgICBVUERBVEUsXG4gICAgZGllLFxuICAgIGhhc1Byb3AsXG4gICAgZ2V0RGVzY3JpcHRvcixcbiAgICBzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbCxcbiAgICBvd25LZXlzLFxuICAgIGlzT3ZlcnJpZGUsXG4gICAgZGVmaW5lUHJvcGVydHksXG4gICAgYXV0b0Fubm90YXRpb24sXG4gICAgZ2V0QWRtaW5pc3RyYXRpb24sXG4gICAgZ2V0RGVidWdOYW1lLFxuICAgIG9iamVjdFByb3RvdHlwZSxcbiAgICBNYWtlUmVzdWx0XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmNvbnN0IGRlc2NyaXB0b3JDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZXhwb3J0IHR5cGUgSU9iamVjdERpZENoYW5nZTxUID0gYW55PiA9IHtcbiAgICBvYnNlcnZhYmxlS2luZDogXCJvYmplY3RcIlxuICAgIG5hbWU6IFByb3BlcnR5S2V5XG4gICAgb2JqZWN0OiBUXG4gICAgZGVidWdPYmplY3ROYW1lOiBzdHJpbmdcbn0gJiAoXG4gICAgfCB7XG4gICAgICAgICAgdHlwZTogXCJhZGRcIlxuICAgICAgICAgIG5ld1ZhbHVlOiBhbnlcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiXG4gICAgICAgICAgb2xkVmFsdWU6IGFueVxuICAgICAgICAgIG5ld1ZhbHVlOiBhbnlcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiXG4gICAgICAgICAgb2xkVmFsdWU6IGFueVxuICAgICAgfVxuKVxuXG5leHBvcnQgdHlwZSBJT2JqZWN0V2lsbENoYW5nZTxUID0gYW55PiA9XG4gICAgfCB7XG4gICAgICAgICAgb2JqZWN0OiBUXG4gICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIiB8IFwiYWRkXCJcbiAgICAgICAgICBuYW1lOiBQcm9wZXJ0eUtleVxuICAgICAgICAgIG5ld1ZhbHVlOiBhbnlcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICBvYmplY3Q6IFRcbiAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiXG4gICAgICAgICAgbmFtZTogUHJvcGVydHlLZXlcbiAgICAgIH1cblxuY29uc3QgUkVNT1ZFID0gXCJyZW1vdmVcIlxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uXG4gICAgaW1wbGVtZW50cyBJSW50ZXJjZXB0YWJsZTxJT2JqZWN0V2lsbENoYW5nZT4sIElMaXN0ZW5hYmxlXG57XG4gICAga2V5c0F0b21fOiBJQXRvbVxuICAgIGNoYW5nZUxpc3RlbmVyc19cbiAgICBpbnRlcmNlcHRvcnNfXG4gICAgcHJveHlfOiBhbnlcbiAgICBpc1BsYWluT2JqZWN0XzogYm9vbGVhblxuICAgIGFwcGxpZWRBbm5vdGF0aW9uc18/OiBvYmplY3RcbiAgICBwcml2YXRlIHBlbmRpbmdLZXlzXzogdW5kZWZpbmVkIHwgTWFwPFByb3BlcnR5S2V5LCBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRhcmdldF86IGFueSxcbiAgICAgICAgcHVibGljIHZhbHVlc18gPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBPYnNlcnZhYmxlVmFsdWU8YW55PiB8IENvbXB1dGVkVmFsdWU8YW55Pj4oKSxcbiAgICAgICAgcHVibGljIG5hbWVfOiBzdHJpbmcsXG4gICAgICAgIC8vIFVzZWQgYW55dGltZSBhbm5vdGF0aW9uIGlzIG5vdCBleHBsaWNpdGVseSBwcm92aWRlZFxuICAgICAgICBwdWJsaWMgZGVmYXVsdEFubm90YXRpb25fOiBBbm5vdGF0aW9uID0gYXV0b0Fubm90YXRpb25cbiAgICApIHtcbiAgICAgICAgdGhpcy5rZXlzQXRvbV8gPSBuZXcgQXRvbShfX0RFVl9fID8gYCR7dGhpcy5uYW1lX30ua2V5c2AgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5c1wiKVxuICAgICAgICAvLyBPcHRpbWl6YXRpb246IHdlIHVzZSB0aGlzIGZyZXF1ZW50bHlcbiAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0XyA9IGlzUGxhaW5PYmplY3QodGhpcy50YXJnZXRfKVxuICAgICAgICBpZiAoX19ERVZfXyAmJiAhaXNBbm5vdGF0aW9uKHRoaXMuZGVmYXVsdEFubm90YXRpb25fKSkge1xuICAgICAgICAgICAgZGllKGBkZWZhdWx0QW5ub3RhdGlvbiBtdXN0IGJlIHZhbGlkIGFubm90YXRpb25gKVxuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAvLyBQcmVwYXJlIHN0cnVjdHVyZSBmb3IgdHJhY2tpbmcgd2hpY2ggZmllbGRzIHdlcmUgYWxyZWFkeSBhbm5vdGF0ZWRcbiAgICAgICAgICAgIHRoaXMuYXBwbGllZEFubm90YXRpb25zXyA9IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXk6IFByb3BlcnR5S2V5KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzXy5nZXQoa2V5KSEuZ2V0KClcbiAgICB9XG5cbiAgICBzZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXk6IFByb3BlcnR5S2V5LCBuZXdWYWx1ZSk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzXy5nZXQoa2V5KVxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUuc2V0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludGVyY2VwdFxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2U8SU9iamVjdFdpbGxDaGFuZ2U+KHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VmFsdWUgPSAoY2hhbmdlIGFzIGFueSkubmV3VmFsdWVcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZSA9IChvYnNlcnZhYmxlIGFzIGFueSkucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSlcblxuICAgICAgICAvLyBub3RpZnkgc3B5ICYgb2JzZXJ2ZXJzXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICAgICAgICBjb25zdCBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcylcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmeVNweSA9IF9fREVWX18gJiYgaXNTcHlFbmFibGVkKClcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZTogSU9iamVjdERpZENoYW5nZSB8IG51bGwgPVxuICAgICAgICAgICAgICAgIG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiAob2JzZXJ2YWJsZSBhcyBhbnkpLnZhbHVlXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7KG9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZVZhbHVlPGFueT4pLnNldE5ld1ZhbHVlXyhuZXdWYWx1ZSlcbiAgICAgICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGdldF8oa2V5OiBQcm9wZXJ0eUtleSk6IGFueSB7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gJiYgIWhhc1Byb3AodGhpcy50YXJnZXRfLCBrZXkpKSB7XG4gICAgICAgICAgICAvLyBLZXkgZG9lc24ndCBleGlzdCB5ZXQsIHN1YnNjcmliZSBmb3IgaXQgaW4gY2FzZSBpdCdzIGFkZGVkIGxhdGVyXG4gICAgICAgICAgICB0aGlzLmhhc18oa2V5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldF9ba2V5XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgKi9cbiAgICBzZXRfKGtleTogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHByb3h5VHJhcDogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB8IG51bGwge1xuICAgICAgICAvLyBEb24ndCB1c2UgLmhhcyhrZXkpIC0gd2UgY2FyZSBhYm91dCBvd25cbiAgICAgICAgaWYgKGhhc1Byb3AodGhpcy50YXJnZXRfLCBrZXkpKSB7XG4gICAgICAgICAgICAvLyBFeGlzdGluZyBwcm9wXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNfLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2YWJsZSAoY2FuIGJlIGludGVyY2VwdGVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3h5VHJhcCkge1xuICAgICAgICAgICAgICAgIC8vIE5vbi1vYnNlcnZhYmxlIC0gcHJveHlcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGhpcy50YXJnZXRfLCBrZXksIHZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb24tb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0X1trZXldID0gdmFsdWVcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTmV3IHByb3BcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuZF8oXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHsgdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXyxcbiAgICAgICAgICAgICAgICBwcm94eVRyYXBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRyYXAgZm9yIFwiaW5cIlxuICAgIGhhc18oa2V5OiBQcm9wZXJ0eUtleSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgICAgICAgLy8gU2tpcCBrZXkgc3Vic2NyaXB0aW9uIG91dHNpZGUgZGVyaXZhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGtleSBpbiB0aGlzLnRhcmdldF9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmdLZXlzXyB8fD0gbmV3IE1hcCgpXG4gICAgICAgIGxldCBlbnRyeSA9IHRoaXMucGVuZGluZ0tleXNfLmdldChrZXkpXG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZShcbiAgICAgICAgICAgICAgICBrZXkgaW4gdGhpcy50YXJnZXRfLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUVuaGFuY2VyLFxuICAgICAgICAgICAgICAgIF9fREVWX18gPyBgJHt0aGlzLm5hbWVffS4ke3N0cmluZ2lmeUtleShrZXkpfT9gIDogXCJPYnNlcnZhYmxlT2JqZWN0LmtleT9cIixcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nS2V5c18uc2V0KGtleSwgZW50cnkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XG4gICAgICogQHBhcmFtIHtBbm5vdGF0aW9ufGJvb2xlYW59IGFubm90YXRpb24gdHJ1ZSAtIHVzZSBkZWZhdWx0IGFubm90YXRpb24sIGZhbHNlIC0gaWdub3JlIHByb3BcbiAgICAgKi9cbiAgICBtYWtlXyhrZXk6IFByb3BlcnR5S2V5LCBhbm5vdGF0aW9uOiBBbm5vdGF0aW9uIHwgYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoYW5ub3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYW5ub3RhdGlvbiA9IHRoaXMuZGVmYXVsdEFubm90YXRpb25fXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFubm90YXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBhc3NlcnRBbm5vdGFibGUodGhpcywgYW5ub3RhdGlvbiwga2V5KVxuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy50YXJnZXRfKSkge1xuICAgICAgICAgICAgLy8gVGhyb3cgb24gbWlzc2luZyBrZXksIGV4Y2VwdCBmb3IgZGVjb3JhdG9yczpcbiAgICAgICAgICAgIC8vIERlY29yYXRvciBhbm5vdGF0aW9ucyBhcmUgY29sbGVjdGVkIGZyb20gd2hvbGUgcHJvdG90eXBlIGNoYWluLlxuICAgICAgICAgICAgLy8gV2hlbiBjYWxsZWQgZnJvbSBzdXBlcigpIHNvbWUgcHJvcHMgbWF5IG5vdCBleGlzdCB5ZXQuXG4gICAgICAgICAgICAvLyBIb3dldmVyIHdlIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgbWlzc2luZyBwcm9wLFxuICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgZGVjb3JhdG9yIG11c3QgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gc29tZXRoaW5nLlxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0X1tzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0/LltrZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8vIHdpbGwgYmUgYW5ub3RhdGVkIGJ5IHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpZSgxLCBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXywgYCR7dGhpcy5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLnRhcmdldF9cbiAgICAgICAgd2hpbGUgKHNvdXJjZSAmJiBzb3VyY2UgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3Ioc291cmNlLCBrZXkpXG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGNvbWUgPSBhbm5vdGF0aW9uLm1ha2VfKHRoaXMsIGtleSwgZGVzY3JpcHRvciwgc291cmNlKVxuICAgICAgICAgICAgICAgIGlmIChvdXRjb21lID09PSBNYWtlUmVzdWx0LkNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG91dGNvbWUgPT09IE1ha2VSZXN1bHQuQnJlYWspIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2UgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKVxuICAgICAgICB9XG4gICAgICAgIHJlY29yZEFubm90YXRpb25BcHBsaWVkKHRoaXMsIGFubm90YXRpb24sIGtleSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5RGVzY3JpcHRvcn0gZGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgKi9cbiAgICBleHRlbmRfKFxuICAgICAgICBrZXk6IFByb3BlcnR5S2V5LFxuICAgICAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgICAgIGFubm90YXRpb246IEFubm90YXRpb24gfCBib29sZWFuLFxuICAgICAgICBwcm94eVRyYXA6IGJvb2xlYW4gPSBmYWxzZVxuICAgICk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICAgICAgaWYgKGFubm90YXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGFubm90YXRpb24gPSB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uX1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbm5vdGF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5lUHJvcGVydHlfKGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKVxuICAgICAgICB9XG4gICAgICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpXG4gICAgICAgIGNvbnN0IG91dGNvbWUgPSBhbm5vdGF0aW9uLmV4dGVuZF8odGhpcywga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApXG4gICAgICAgIGlmIChvdXRjb21lKSB7XG4gICAgICAgICAgICByZWNvcmRBbm5vdGF0aW9uQXBwbGllZCh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dGNvbWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5RGVzY3JpcHRvcn0gZGVzY3JpcHRvclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJveHlUcmFwIHdoZXRoZXIgaXQncyBjYWxsZWQgZnJvbSBwcm94eSB0cmFwXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58bnVsbH0gdHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIChwcm94eVRyYXAgKyBub24tY29uZmlndXJhYmxlKSwgbnVsbCB3aGVuIGNhbmNlbGxlZCBieSBpbnRlcmNlcHRvclxuICAgICAqL1xuICAgIGRlZmluZVByb3BlcnR5XyhcbiAgICAgICAga2V5OiBQcm9wZXJ0eUtleSxcbiAgICAgICAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgICBwcm94eVRyYXA6IGJvb2xlYW4gPSBmYWxzZVxuICAgICk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKVxuXG4gICAgICAgICAgICAvLyBEZWxldGVcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KVxuICAgICAgICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgICAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVPdXRjb21lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFERCBpbnRlcmNlcHRvclxuICAgICAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJT2JqZWN0V2lsbENoYW5nZT4odGhpcywge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBkZXNjcmlwdG9yLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IG5ld1ZhbHVlIH0gPSBjaGFuZ2UgYXMgYW55XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kZXNjcmlwdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlZmluZVxuICAgICAgICAgICAgaWYgKHByb3h5VHJhcCkge1xuICAgICAgICAgICAgICAgIGlmICghUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm90aWZ5XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgZGVzY3JpcHRvci52YWx1ZSlcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGVuZEJhdGNoKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIG9yaWdpbmFsIGRlc2NyaXB0b3IgYmVjb21lcyByZWxldmFudCwgbW92ZSB0aGlzIHRvIGFubm90YXRpb24gZGlyZWN0bHlcbiAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfKFxuICAgICAgICBrZXk6IFByb3BlcnR5S2V5LFxuICAgICAgICB2YWx1ZTogYW55LFxuICAgICAgICBlbmhhbmNlcjogSUVuaGFuY2VyPGFueT4sXG4gICAgICAgIHByb3h5VHJhcDogYm9vbGVhbiA9IGZhbHNlXG4gICAgKTogYm9vbGVhbiB8IG51bGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnRCYXRjaCgpXG5cbiAgICAgICAgICAgIC8vIERlbGV0ZVxuICAgICAgICAgICAgY29uc3QgZGVsZXRlT3V0Y29tZSA9IHRoaXMuZGVsZXRlXyhrZXkpXG4gICAgICAgICAgICBpZiAoIWRlbGV0ZU91dGNvbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBGYWlsdXJlIG9yIGludGVyY2VwdGVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZU91dGNvbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQUREIGludGVyY2VwdG9yXG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlPElPYmplY3RXaWxsQ2hhbmdlPih0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChjaGFuZ2UgYXMgYW55KS5uZXdWYWx1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjYWNoZWREZXNjcmlwdG9yID0gZ2V0Q2FjaGVkT2JzZXJ2YWJsZVByb3BEZXNjcmlwdG9yKGtleSlcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnMgPyB0aGlzLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogY2FjaGVkRGVzY3JpcHRvci5nZXQsXG4gICAgICAgICAgICAgICAgc2V0OiBjYWNoZWREZXNjcmlwdG9yLnNldFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZpbmVcbiAgICAgICAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGVuaGFuY2VyLFxuICAgICAgICAgICAgICAgIF9fREVWX18gPyBgJHt0aGlzLm5hbWVffS4ke2tleS50b1N0cmluZygpfWAgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5XCIsXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdGhpcy52YWx1ZXNfLnNldChrZXksIG9ic2VydmFibGUpXG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSAodmFsdWUgcG9zc2libHkgY2hhbmdlZCBieSBPYnNlcnZhYmxlVmFsdWUpXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgb2JzZXJ2YWJsZS52YWx1ZV8pXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBlbmRCYXRjaCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiBvcmlnaW5hbCBkZXNjcmlwdG9yIGJlY29tZXMgcmVsZXZhbnQsIG1vdmUgdGhpcyB0byBhbm5vdGF0aW9uIGRpcmVjdGx5XG4gICAgZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eV8oXG4gICAgICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgICAgIG9wdGlvbnM6IElDb21wdXRlZFZhbHVlT3B0aW9uczxhbnk+LFxuICAgICAgICBwcm94eVRyYXA6IGJvb2xlYW4gPSBmYWxzZVxuICAgICk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKVxuXG4gICAgICAgICAgICAvLyBEZWxldGVcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZU91dGNvbWUgPSB0aGlzLmRlbGV0ZV8oa2V5KVxuICAgICAgICAgICAgaWYgKCFkZWxldGVPdXRjb21lKSB7XG4gICAgICAgICAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVPdXRjb21lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFERCBpbnRlcmNlcHRvclxuICAgICAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IGludGVyY2VwdENoYW5nZTxJT2JqZWN0V2lsbENoYW5nZT4odGhpcywge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5uYW1lIHx8PSBfX0RFVl9fID8gYCR7dGhpcy5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX1gIDogXCJPYnNlcnZhYmxlT2JqZWN0LmtleVwiXG4gICAgICAgICAgICBvcHRpb25zLmNvbnRleHQgPSB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF9cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZERlc2NyaXB0b3IgPSBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KVxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLnNhZmVEZXNjcmlwdG9ycyA/IHRoaXMuaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdldDogY2FjaGVkRGVzY3JpcHRvci5nZXQsXG4gICAgICAgICAgICAgICAgc2V0OiBjYWNoZWREZXNjcmlwdG9yLnNldFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZpbmVcbiAgICAgICAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWVzXy5zZXQoa2V5LCBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSlcblxuICAgICAgICAgICAgLy8gTm90aWZ5XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgdW5kZWZpbmVkKVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgZW5kQmF0Y2goKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XG4gICAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByb3h5VHJhcCB3aGV0aGVyIGl0J3MgY2FsbGVkIGZyb20gcHJveHkgdHJhcFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgKi9cbiAgICBkZWxldGVfKGtleTogUHJvcGVydHlLZXksIHByb3h5VHJhcDogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB8IG51bGwge1xuICAgICAgICAvLyBObyBzdWNoIHByb3BcbiAgICAgICAgaWYgKCFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludGVyY2VwdFxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2U8SU9iamVjdFdpbGxDaGFuZ2U+KHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gQ2FuY2VsbGVkXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKVxuICAgICAgICAgICAgY29uc3Qgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpXG4gICAgICAgICAgICBjb25zdCBub3RpZnlTcHkgPSBfX0RFVl9fICYmIGlzU3B5RW5hYmxlZCgpXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy52YWx1ZXNfLmdldChrZXkpXG4gICAgICAgICAgICAvLyBWYWx1ZSBuZWVkZWQgZm9yIHNwaWVzL2xpc3RlbmVyc1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAvLyBPcHRpbWl6YXRpb246IGRvbid0IHB1bGwgdGhlIHZhbHVlIHVubGVzcyB3ZSB3aWxsIG5lZWQgaXRcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSAmJiAobm90aWZ5IHx8IG5vdGlmeVNweSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGdldERlc2NyaXB0b3IodGhpcy50YXJnZXRfLCBrZXkpPy52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRlIHByb3AgKGRvIGZpcnN0LCBtYXkgZmFpbClcbiAgICAgICAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgICAgICAgICBpZiAoIVJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0X1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbGxvdyByZS1hbm5vdGF0aW5nIHRoaXMgZmllbGRcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXBwbGllZEFubm90YXRpb25zXyFba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgb2JzZXJ2YWJsZVxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc18uZGVsZXRlKGtleSlcbiAgICAgICAgICAgICAgICAvLyBmb3IgY29tcHV0ZWQsIHZhbHVlIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZV9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm90aWZ5OiBhdXRvcnVuKCgpID0+IG9ialtrZXldKSwgc2VlICMxNzk2XG4gICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm90aWZ5IFwia2V5cy9lbnRyaWVzL3ZhbHVlc1wiIG9ic2VydmVyc1xuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSBcImhhc1wiIG9ic2VydmVyc1xuICAgICAgICAgICAgLy8gXCJpblwiIGFzIGl0IG1heSBzdGlsbCBleGlzdCBpbiBwcm90b1xuICAgICAgICAgICAgdGhpcy5wZW5kaW5nS2V5c18/LmdldChrZXkpPy5zZXQoa2V5IGluIHRoaXMudGFyZ2V0XylcblxuICAgICAgICAgICAgLy8gTm90aWZ5IHNwaWVzL2xpc3RlbmVyc1xuICAgICAgICAgICAgaWYgKG5vdGlmeSB8fCBub3RpZnlTcHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2U6IElPYmplY3REaWRDaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRSxcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGVuZEJhdGNoKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xuICAgICAqL1xuICAgIG9ic2VydmVfKGNhbGxiYWNrOiAoY2hhbmdlczogSU9iamVjdERpZENoYW5nZSkgPT4gdm9pZCwgZmlyZUltbWVkaWF0ZWx5PzogYm9vbGVhbik6IExhbWJkYSB7XG4gICAgICAgIGlmIChfX0RFVl9fICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKVxuICAgIH1cblxuICAgIGludGVyY2VwdF8oaGFuZGxlcik6IExhbWJkYSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpXG4gICAgfVxuXG4gICAgbm90aWZ5UHJvcGVydHlBZGRpdGlvbl8oa2V5OiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSkge1xuICAgICAgICBjb25zdCBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcylcbiAgICAgICAgY29uc3Qgbm90aWZ5U3B5ID0gX19ERVZfXyAmJiBpc1NweUVuYWJsZWQoKVxuICAgICAgICBpZiAobm90aWZ5IHx8IG5vdGlmeVNweSkge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlOiBJT2JqZWN0RGlkQ2hhbmdlIHwgbnVsbCA9XG4gICAgICAgICAgICAgICAgbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgICAgICA/ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFERCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfSBhcyBjb25zdClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmIG5vdGlmeVNweSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBlbmRpbmdLZXlzXz8uZ2V0KGtleSk/LnNldCh0cnVlKVxuXG4gICAgICAgIC8vIE5vdGlmeSBcImtleXMvZW50cmllcy92YWx1ZXNcIiBvYnNlcnZlcnNcbiAgICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpXG4gICAgfVxuXG4gICAgb3duS2V5c18oKTogQXJyYXlMaWtlPHN0cmluZyB8IHN5bWJvbD4ge1xuICAgICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpXG4gICAgICAgIHJldHVybiBvd25LZXlzKHRoaXMudGFyZ2V0XylcbiAgICB9XG5cbiAgICBrZXlzXygpOiBQcm9wZXJ0eUtleVtdIHtcbiAgICAgICAgLy8gUmV0dXJucyBlbnVtZXJhYmxlICYmIG93biwgYnV0IHVuZm9ydHVuYXRlbHkga2V5c0F0b20gd2lsbCByZXBvcnQgb24gQU5ZIGtleSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIHdheSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIE9iamVjdC5rZXlzKG9iamVjdCkgYW5kIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpIC0gYm90aCBhcmUgaGFuZGxlZCBieSBvd25LZXlzIHRyYXAuXG4gICAgICAgIC8vIFdlIGNhbiBlaXRoZXIgb3Zlci1yZXBvcnQgaW4gT2JqZWN0LmtleXMob2JqZWN0KSBvciB1bmRlci1yZXBvcnQgaW4gUmVmbGVjdC5vd25LZXlzKG9iamVjdClcbiAgICAgICAgLy8gV2UgY2hvb3NlIHRvIG92ZXItcmVwb3J0IGluIE9iamVjdC5rZXlzKG9iamVjdCksIGJlY2F1c2U6XG4gICAgICAgIC8vIC0gdHlwaWNhbGx5IGl0J3MgdXNlZCB3aXRoIHNpbXBsZSBkYXRhIG9iamVjdHNcbiAgICAgICAgLy8gLSB3aGVuIHN5bWJvbGljL25vbi1lbnVtZXJhYmxlIGtleXMgYXJlIHJlbGV2YW50IFJlZmxlY3Qub3duS2V5cyB3b3JrcyBhcyBleHBlY3RlZFxuICAgICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRhcmdldF8pXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJc09ic2VydmFibGVPYmplY3Qge1xuICAgICRtb2J4OiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzT2JzZXJ2YWJsZU9iamVjdChcbiAgICB0YXJnZXQ6IGFueSxcbiAgICBvcHRpb25zPzogQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnNcbik6IElJc09ic2VydmFibGVPYmplY3Qge1xuICAgIGlmIChfX0RFVl9fICYmIG9wdGlvbnMgJiYgaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZGllKGBPcHRpb25zIGNhbid0IGJlIHByb3ZpZGVkIGZvciBhbHJlYWR5IG9ic2VydmFibGUgb2JqZWN0cy5gKVxuICAgIH1cblxuICAgIGlmIChoYXNQcm9wKHRhcmdldCwgJG1vYngpKSB7XG4gICAgICAgIGlmIChfX0RFVl9fICYmICEoZ2V0QWRtaW5pc3RyYXRpb24odGFyZ2V0KSBpbnN0YW5jZW9mIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbikpIHtcbiAgICAgICAgICAgIGRpZShcbiAgICAgICAgICAgICAgICBgQ2Fubm90IGNvbnZlcnQgJyR7Z2V0RGVidWdOYW1lKHRhcmdldCl9JyBpbnRvIG9ic2VydmFibGUgb2JqZWN0OmAgK1xuICAgICAgICAgICAgICAgICAgICBgXFxuVGhlIHRhcmdldCBpcyBhbHJlYWR5IG9ic2VydmFibGUgb2YgZGlmZmVyZW50IHR5cGUuYCArXG4gICAgICAgICAgICAgICAgICAgIGBcXG5FeHRlbmRpbmcgYnVpbHRpbnMgaXMgbm90IHN1cHBvcnRlZC5gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH1cblxuICAgIGlmIChfX0RFVl9fICYmICFPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCkpIHtcbiAgICAgICAgZGllKFwiQ2Fubm90IG1ha2UgdGhlIGRlc2lnbmF0ZWQgb2JqZWN0IG9ic2VydmFibGU7IGl0IGlzIG5vdCBleHRlbnNpYmxlXCIpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9XG4gICAgICAgIG9wdGlvbnM/Lm5hbWUgPz9cbiAgICAgICAgKF9fREVWX19cbiAgICAgICAgICAgID8gYCR7XG4gICAgICAgICAgICAgICAgICBpc1BsYWluT2JqZWN0KHRhcmdldCkgPyBcIk9ic2VydmFibGVPYmplY3RcIiA6IHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICAgIH1AJHtnZXROZXh0SWQoKX1gXG4gICAgICAgICAgICA6IFwiT2JzZXJ2YWJsZU9iamVjdFwiKVxuXG4gICAgY29uc3QgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbihcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBuZXcgTWFwKCksXG4gICAgICAgIFN0cmluZyhuYW1lKSxcbiAgICAgICAgZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zKG9wdGlvbnMpXG4gICAgKVxuXG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsICRtb2J4LCBhZG0pXG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cbmNvbnN0IGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcbiAgICBcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLFxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblxuKVxuXG5mdW5jdGlvbiBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgZGVzY3JpcHRvckNhY2hlW2tleV0gfHxcbiAgICAgICAgKGRlc2NyaXB0b3JDYWNoZVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoaXNPYmplY3QodGhpbmcpKSB7XG4gICAgICAgIHJldHVybiBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbigodGhpbmcgYXMgYW55KVskbW9ieF0pXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkQW5ub3RhdGlvbkFwcGxpZWQoXG4gICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgYW5ub3RhdGlvbjogQW5ub3RhdGlvbixcbiAgICBrZXk6IFByb3BlcnR5S2V5XG4pIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBhZG0uYXBwbGllZEFubm90YXRpb25zXyFba2V5XSA9IGFubm90YXRpb25cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGFwcGxpZWQgZGVjb3JhdG9yIGFubm90YXRpb24gc28gd2UgZG9uJ3QgdHJ5IHRvIGFwcGx5IGl0IGFnYWluIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgZGVsZXRlIGFkbS50YXJnZXRfW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXT8uW2tleV1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0QW5ub3RhYmxlKFxuICAgIGFkbTogT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLFxuICAgIGFubm90YXRpb246IEFubm90YXRpb24sXG4gICAga2V5OiBQcm9wZXJ0eUtleVxuKSB7XG4gICAgLy8gVmFsaWQgYW5ub3RhdGlvblxuICAgIGlmIChfX0RFVl9fICYmICFpc0Fubm90YXRpb24oYW5ub3RhdGlvbikpIHtcbiAgICAgICAgZGllKGBDYW5ub3QgYW5ub3RhdGUgJyR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfSc6IEludmFsaWQgYW5ub3RhdGlvbi5gKVxuICAgIH1cblxuICAgIC8qXG4gICAgLy8gQ29uZmlndXJhYmxlLCBub3Qgc2VhbGVkLCBub3QgZnJvemVuXG4gICAgLy8gUG9zc2libHkgbm90IG5lZWRlZCwganVzdCBhIGxpdHRsZSBiZXR0ZXIgZXJyb3IgdGhlbiB0aGUgb25lIHRocm93biBieSBlbmdpbmUuXG4gICAgLy8gQ2FzZXMgd2hlcmUgdGhpcyB3b3VsZCBiZSB1c2VmdWwgdGhlIG1vc3QgKHN1YmNsYXNzIGZpZWxkIGluaXRpYWxpemVyKSBhcmUgbm90IGludGVyY2VwdGFibGUgYnkgdGhpcy5cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zdCBjb25maWd1cmFibGUgPSBnZXREZXNjcmlwdG9yKGFkbS50YXJnZXRfLCBrZXkpPy5jb25maWd1cmFibGVcbiAgICAgICAgY29uc3QgZnJvemVuID0gT2JqZWN0LmlzRnJvemVuKGFkbS50YXJnZXRfKVxuICAgICAgICBjb25zdCBzZWFsZWQgPSBPYmplY3QuaXNTZWFsZWQoYWRtLnRhcmdldF8pXG4gICAgICAgIGlmICghY29uZmlndXJhYmxlIHx8IGZyb3plbiB8fCBzZWFsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGAke2FkbS5uYW1lX30uJHtrZXkudG9TdHJpbmcoKX1gXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBgQ2Fubm90IGFwcGx5ICcke3JlcXVlc3RlZEFubm90YXRpb25UeXBlfScgdG8gJyR7ZmllbGROYW1lfSc6YFxuICAgICAgICAgICAgaWYgKGZyb3plbikge1xuICAgICAgICAgICAgICAgIGVycm9yICs9IGBcXG5PYmplY3QgaXMgZnJvemVuLmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvciArPSBgXFxuT2JqZWN0IGlzIHNlYWxlZC5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgICAgIGVycm9yICs9IGBcXG5wcm9wZXJ0eSBpcyBub3QgY29uZmlndXJhYmxlLmBcbiAgICAgICAgICAgICAgICAvLyBNZW50aW9uIG9ubHkgaWYgY2F1c2VkIGJ5IHVzIHRvIGF2b2lkIGNvbmZ1c2lvblxuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKGFkbS5hcHBsaWVkQW5ub3RhdGlvbnMhLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yICs9IGBcXG5UbyBwcmV2ZW50IGFjY2lkZW50YWwgcmUtZGVmaW5pdGlvbiBvZiBhIGZpZWxkIGJ5IGEgc3ViY2xhc3MsIGBcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgKz0gYGFsbCBhbm5vdGF0ZWQgZmllbGRzIG9mIG5vbi1wbGFpbiBvYmplY3RzIChjbGFzc2VzKSBhcmUgbm90IGNvbmZpZ3VyYWJsZS5gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGllKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cbiAgICAvLyBOb3QgYW5ub3RhdGVkXG4gICAgaWYgKF9fREVWX18gJiYgIWlzT3ZlcnJpZGUoYW5ub3RhdGlvbikgJiYgaGFzUHJvcChhZG0uYXBwbGllZEFubm90YXRpb25zXyEsIGtleSkpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfWBcbiAgICAgICAgY29uc3QgY3VycmVudEFubm90YXRpb25UeXBlID0gYWRtLmFwcGxpZWRBbm5vdGF0aW9uc18hW2tleV0uYW5ub3RhdGlvblR5cGVfXG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZEFubm90YXRpb25UeXBlID0gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV9cbiAgICAgICAgZGllKFxuICAgICAgICAgICAgYENhbm5vdCBhcHBseSAnJHtyZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZX0nIHRvICcke2ZpZWxkTmFtZX0nOmAgK1xuICAgICAgICAgICAgICAgIGBcXG5UaGUgZmllbGQgaXMgYWxyZWFkeSBhbm5vdGF0ZWQgd2l0aCAnJHtjdXJyZW50QW5ub3RhdGlvblR5cGV9Jy5gICtcbiAgICAgICAgICAgICAgICBgXFxuUmUtYW5ub3RhdGluZyBmaWVsZHMgaXMgbm90IGFsbG93ZWQuYCArXG4gICAgICAgICAgICAgICAgYFxcblVzZSAnb3ZlcnJpZGUnIGFubm90YXRpb24gZm9yIG1ldGhvZHMgb3ZlcnJpZGRlbiBieSBzdWJjbGFzcy5gXG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIGdldE5leHRJZCxcbiAgICBhZGRIaWRkZW5GaW5hbFByb3AsXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCxcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZCxcbiAgICBtYWtlSXRlcmFibGUsXG4gICAgYWRkSGlkZGVuUHJvcCxcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbixcbiAgICAkbW9ieCxcbiAgICBhcnJheUV4dGVuc2lvbnMsXG4gICAgSUVuaGFuY2VyLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5LFxuICAgIElPYnNlcnZhYmxlQXJyYXksXG4gICAgZGVmaW5lUHJvcGVydHlcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuLy8gQnVnIGluIHNhZmFyaSA5LiogKG9yIGlPUyA5IHNhZmFyaSBtb2JpbGUpLiBTZWUgIzM2NFxuY29uc3QgRU5UUllfMCA9IGNyZWF0ZUFycmF5RW50cnlEZXNjcmlwdG9yKDApXG5cbmNvbnN0IHNhZmFyaVByb3RvdHlwZVNldHRlckluaGVyaXRhbmNlQnVnID0gKCgpID0+IHtcbiAgICBsZXQgdiA9IGZhbHNlXG4gICAgY29uc3QgcCA9IHt9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwiMFwiLCB7XG4gICAgICAgIHNldDogKCkgPT4ge1xuICAgICAgICAgICAgdiA9IHRydWVcbiAgICAgICAgfVxuICAgIH0pXG4gICAgT2JqZWN0LmNyZWF0ZShwKVtcIjBcIl0gPSAxXG4gICAgcmV0dXJuIHYgPT09IGZhbHNlXG59KSgpXG5cbi8qKlxuICogVGhpcyBhcnJheSBidWZmZXIgY29udGFpbnMgdHdvIGxpc3RzIG9mIHByb3BlcnRpZXMsIHNvIHRoYXQgYWxsIGFycmF5c1xuICogY2FuIHJlY3ljbGUgdGhlaXIgcHJvcGVydHkgZGVmaW5pdGlvbnMsIHdoaWNoIHNpZ25pZmljYW50bHkgaW1wcm92ZXMgcGVyZm9ybWFuY2Ugb2YgY3JlYXRpbmdcbiAqIHByb3BlcnRpZXMgb24gdGhlIGZseS5cbiAqL1xubGV0IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSAwXG5cbi8vIFR5cGVzY3JpcHQgd29ya2Fyb3VuZCB0byBtYWtlIHN1cmUgT2JzZXJ2YWJsZUFycmF5IGV4dGVuZHMgQXJyYXlcbmNsYXNzIFN0dWJBcnJheSB7fVxuZnVuY3Rpb24gaW5oZXJpdChjdG9yLCBwcm90bykge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGN0b3IucHJvdG90eXBlLCBwcm90bylcbiAgICB9IGVsc2UgaWYgKGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyA9IHByb3RvXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3Rvci5wcm90b3R5cGUgPSBwcm90b1xuICAgIH1cbn1cbmluaGVyaXQoU3R1YkFycmF5LCBBcnJheS5wcm90b3R5cGUpXG5cbi8vIFdlZXggcHJvdG8gZnJlZXplIHByb3RlY3Rpb24gd2FzIGhlcmUsXG4vLyBidXQgaXQgaXMgdW5jbGVhciB3aHkgdGhlIGhhY2sgaXMgbmVlZCBhcyBNb2JYIG5ldmVyIGNoYW5nZWQgdGhlIHByb3RvdHlwZVxuLy8gYW55d2F5LCBzbyByZW1vdmVkIGl0IGluIFY2XG5cbmNsYXNzIExlZ2FjeU9ic2VydmFibGVBcnJheTxUPiBleHRlbmRzIFN0dWJBcnJheSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IFRbXSB8IHVuZGVmaW5lZCxcbiAgICAgICAgZW5oYW5jZXI6IElFbmhhbmNlcjxUPixcbiAgICAgICAgbmFtZSA9IF9fREVWX18gPyBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlQXJyYXlcIixcbiAgICAgICAgb3duZWQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgY29uc3QgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCwgdHJ1ZSlcbiAgICAgICAgYWRtLnByb3h5XyA9IHRoaXMgYXMgYW55XG4gICAgICAgIGFkZEhpZGRlbkZpbmFsUHJvcCh0aGlzLCAkbW9ieCwgYWRtKVxuXG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzICYmIGluaXRpYWxWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaW5pdGlhbFZhbHVlcylcbiAgICAgICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2FmYXJpUHJvdG90eXBlU2V0dGVySW5oZXJpdGFuY2VCdWcpIHtcbiAgICAgICAgICAgIC8vIFNlZW1zIHRoYXQgU2FmYXJpIHdvbid0IHVzZSBudW1lcmljIHByb3RvdHlwZSBzZXR0ZXIgdW50aWxsIGFueSAqIG51bWVyaWMgcHJvcGVydHkgaXNcbiAgICAgICAgICAgIC8vIGRlZmluZWQgb24gdGhlIGluc3RhbmNlLiBBZnRlciB0aGF0IGl0IHdvcmtzIGZpbmUsIGV2ZW4gaWYgdGhpcyBwcm9wZXJ0eSBpcyBkZWxldGVkLlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiMFwiLCBFTlRSWV8wKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uY2F0KC4uLmFycmF5czogVFtdW10pOiBUW10ge1xuICAgICAgICA7KHRoaXNbJG1vYnhdIGFzIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFxuICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5zbGljZSgpLFxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBhcnJheXMubWFwKGEgPT4gKGlzT2JzZXJ2YWJsZUFycmF5KGEpID8gYS5zbGljZSgpIDogYSkpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAodGhpc1skbW9ieF0gYXMgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24pLmdldEFycmF5TGVuZ3RoXygpXG4gICAgfVxuXG4gICAgc2V0IGxlbmd0aChuZXdMZW5ndGg6IG51bWJlcikge1xuICAgICAgICA7KHRoaXNbJG1vYnhdIGFzIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKS5zZXRBcnJheUxlbmd0aF8obmV3TGVuZ3RoKVxuICAgIH1cblxuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIFwiQXJyYXlcIlxuICAgIH1cblxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gMFxuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IHNlbGYubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZltuZXh0SW5kZXgrK10sIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuT2JqZWN0LmVudHJpZXMoYXJyYXlFeHRlbnNpb25zKS5mb3JFYWNoKChbcHJvcCwgZm5dKSA9PiB7XG4gICAgaWYgKHByb3AgIT09IFwiY29uY2F0XCIpIHtcbiAgICAgICAgYWRkSGlkZGVuUHJvcChMZWdhY3lPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLCBwcm9wLCBmbilcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1skbW9ieF0uZ2V0XyhpbmRleClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbJG1vYnhdLnNldF8oaW5kZXgsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIGRlZmluZVByb3BlcnR5KExlZ2FjeU9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFwiXCIgKyBpbmRleCwgY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoaW5kZXgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXJ2ZUFycmF5QnVmZmVyKG1heDogbnVtYmVyKSB7XG4gICAgaWYgKG1heCA+IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFOyBpbmRleCA8IG1heCArIDEwMDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KVxuICAgICAgICB9XG4gICAgICAgIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSBtYXhcbiAgICB9XG59XG5cbnJlc2VydmVBcnJheUJ1ZmZlcigxMDAwKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGVnYWN5QXJyYXk8VD4oXG4gICAgaW5pdGlhbFZhbHVlczogVFtdIHwgdW5kZWZpbmVkLFxuICAgIGVuaGFuY2VyOiBJRW5oYW5jZXI8VD4sXG4gICAgbmFtZT86IHN0cmluZ1xuKTogSU9ic2VydmFibGVBcnJheTxUPiB7XG4gICAgcmV0dXJuIG5ldyBMZWdhY3lPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUpIGFzIGFueVxufVxuIiwiaW1wb3J0IHsgaXNBY3Rpb24gfSBmcm9tIFwiLi4vYXBpL2FjdGlvblwiXG5pbXBvcnQge1xuICAgICRtb2J4LFxuICAgIElEZXBUcmVlTm9kZSxcbiAgICBpc0F0b20sXG4gICAgaXNDb21wdXRlZFZhbHVlLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5LFxuICAgIGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBpc09ic2VydmFibGVPYmplY3QsXG4gICAgaXNSZWFjdGlvbixcbiAgICBpc09ic2VydmFibGVTZXQsXG4gICAgZGllLFxuICAgIGlzRnVuY3Rpb25cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0b20odGhpbmc6IGFueSwgcHJvcGVydHk/OiBQcm9wZXJ0eUtleSk6IElEZXBUcmVlTm9kZSB7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRpZSgyMylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGhpbmcgYXMgYW55KVskbW9ieF0uYXRvbV9cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nLmF0b21fXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nLmtleXNBdG9tX1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaW5nLmRhdGFfLmdldChwcm9wZXJ0eSkgfHwgdGhpbmcuaGFzTWFwXy5nZXQocHJvcGVydHkpXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBkaWUoMjUsIHByb3BlcnR5LCBnZXREZWJ1Z05hbWUodGhpbmcpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4XSkge1xuICAgICAgICAgICAgdGhpbmdbcHJvcGVydHldXG4gICAgICAgIH0gLy8gU2VlICMxMDcyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpZSgyNilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSAodGhpbmcgYXMgYW55KVskbW9ieF0udmFsdWVzXy5nZXQocHJvcGVydHkpXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBkaWUoMjcsIHByb3BlcnR5LCBnZXREZWJ1Z05hbWUodGhpbmcpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmdcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGluZykpIHtcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24odGhpbmdbJG1vYnhdKSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkaWUoMjgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZzogYW55LCBwcm9wZXJ0eT86IHN0cmluZykge1xuICAgIGlmICghdGhpbmcpIHtcbiAgICAgICAgZGllKDI5KVxuICAgIH1cbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKVxuICAgIH1cbiAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKSB7XG4gICAgICAgIHJldHVybiB0aGluZ1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVTZXQodGhpbmcpKSB7XG4gICAgICAgIHJldHVybiB0aGluZ1xuICAgIH1cbiAgICBpZiAodGhpbmdbJG1vYnhdKSB7XG4gICAgICAgIHJldHVybiB0aGluZ1skbW9ieF1cbiAgICB9XG4gICAgZGllKDI0LCB0aGluZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlYnVnTmFtZSh0aGluZzogYW55LCBwcm9wZXJ0eT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG5hbWVkXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSlcbiAgICB9IGVsc2UgaWYgKGlzQWN0aW9uKHRoaW5nKSkge1xuICAgICAgICByZXR1cm4gdGhpbmcubmFtZVxuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpIHtcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZWQubmFtZV9cbn1cbiIsImltcG9ydCB7XG4gICAgaXNFUzZNYXAsXG4gICAgaXNPYnNlcnZhYmxlQXJyYXksXG4gICAgaXNPYnNlcnZhYmxlTWFwLFxuICAgIGlzRVM2U2V0LFxuICAgIGlzT2JzZXJ2YWJsZVNldCxcbiAgICBoYXNQcm9wLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgb2JqZWN0UHJvdG90eXBlXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmRlY2xhcmUgY29uc3QgU3ltYm9sXG5jb25zdCB0b1N0cmluZyA9IG9iamVjdFByb3RvdHlwZS50b1N0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGE6IGFueSwgYjogYW55LCBkZXB0aDogbnVtYmVyID0gLTEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgZGVwdGgpXG59XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9ibG9iLzVjMjM3YTdjNjgyZmI2OGZkNTM3ODIwM2YwYmYyMmRjZTE2MjQ4NTQvdW5kZXJzY29yZS5qcyNMMTE4Ni1MMTI4OVxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbmZ1bmN0aW9uIGVxKGE6IGFueSwgYjogYW55LCBkZXB0aDogbnVtYmVyLCBhU3RhY2s/OiBhbnlbXSwgYlN0YWNrPzogYW55W10pIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiXG4gICAgfVxuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgIGlmIChhICE9PSBhKSB7XG4gICAgICAgIHJldHVybiBiICE9PSBiXG4gICAgfVxuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgYVxuICAgIGlmICh0eXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKVxuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgICBjYXNlIFwiW29iamVjdCBSZWdFeHBdXCI6XG4gICAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN0cmluZ11cIjpcbiAgICAgICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGEgPT09IFwiXCIgKyBiXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcbiAgICAgICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgICAgIGlmICgrYSAhPT0gK2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK2IgIT09ICtiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYlxuICAgICAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxuICAgICAgICBjYXNlIFwiW29iamVjdCBCb29sZWFuXVwiOlxuICAgICAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICAgICAgcmV0dXJuICthID09PSArYlxuICAgICAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKVxuICAgICAgICAgICAgKVxuICAgICAgICBjYXNlIFwiW29iamVjdCBNYXBdXCI6XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFNldF1cIjpcbiAgICAgICAgICAgIC8vIE1hcHMgYW5kIFNldHMgYXJlIHVud3JhcHBlZCB0byBhcnJheXMgb2YgZW50cnktcGFpcnMsIGFkZGluZyBhbiBpbmNpZGVudGFsIGxldmVsLlxuICAgICAgICAgICAgLy8gSGlkZSB0aGlzIGV4dHJhIGxldmVsIGJ5IGluY3JlYXNpbmcgdGhlIGRlcHRoLlxuICAgICAgICAgICAgaWYgKGRlcHRoID49IDApIHtcbiAgICAgICAgICAgICAgICBkZXB0aCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgIH1cbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBhID0gdW53cmFwKGEpXG4gICAgYiA9IHVud3JhcChiKVxuXG4gICAgY29uc3QgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCJcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgICBjb25zdCBhQ3RvciA9IGEuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBiQ3RvciA9IGIuY29uc3RydWN0b3JcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYUN0b3IgIT09IGJDdG9yICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24oYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24oYkN0b3IpICYmXG4gICAgICAgICAgICAgICAgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvclxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgXCJjb25zdHJ1Y3RvclwiIGluIGEgJiZcbiAgICAgICAgICAgIFwiY29uc3RydWN0b3JcIiBpbiBiXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgZGVwdGggPSAtMVxuICAgIH1cblxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cblxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdXG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdXG4gICAgbGV0IGxlbmd0aCA9IGFTdGFjay5sZW5ndGhcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSB7XG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKVxuICAgIGJTdGFjay5wdXNoKGIpXG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aFxuICAgICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhKVxuICAgICAgICBsZXQga2V5XG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdXG4gICAgICAgICAgICBpZiAoIShoYXNQcm9wKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGRlcHRoIC0gMSwgYVN0YWNrLCBiU3RhY2spKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKVxuICAgIGJTdGFjay5wb3AoKVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHVud3JhcChhOiBhbnkpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIGEuc2xpY2UoKVxuICAgIH1cbiAgICBpZiAoaXNFUzZNYXAoYSkgfHwgaXNPYnNlcnZhYmxlTWFwKGEpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKVxuICAgIH1cbiAgICBpZiAoaXNFUzZTZXQoYSkgfHwgaXNPYnNlcnZhYmxlU2V0KGEpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKVxuICAgIH1cbiAgICByZXR1cm4gYVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VJdGVyYWJsZTxUPihpdGVyYXRvcjogSXRlcmF0b3I8VD4pOiBJdGVyYWJsZUl0ZXJhdG9yPFQ+IHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZlxuICAgIHJldHVybiBpdGVyYXRvciBhcyBhbnlcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZigpIHtcbiAgICByZXR1cm4gdGhpc1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLCBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGNvbnN0IGVudW0gTWFrZVJlc3VsdCB7XG4gICAgQ2FuY2VsLFxuICAgIEJyZWFrLFxuICAgIENvbnRpbnVlXG59XG5cbmV4cG9ydCB0eXBlIEFubm90YXRpb24gPSB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBzdHJpbmdcbiAgICBtYWtlXyhcbiAgICAgICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgICAgc291cmNlOiBvYmplY3RcbiAgICApOiBNYWtlUmVzdWx0XG4gICAgZXh0ZW5kXyhcbiAgICAgICAgYWRtOiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24sXG4gICAgICAgIGtleTogUHJvcGVydHlLZXksXG4gICAgICAgIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgICAgcHJveHlUcmFwOiBib29sZWFuXG4gICAgKTogYm9vbGVhbiB8IG51bGxcbiAgICBvcHRpb25zXz86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBbm5vdGF0aW9uTWFwRW50cnkgPVxuICAgIHwgQW5ub3RhdGlvblxuICAgIHwgdHJ1ZSAvKiBmb2xsb3cgdGhlIGRlZmF1bHQgZGVjb3JhdG9yLCB1c3VhbGx5IGRlZXAgKi9cbiAgICB8IGZhbHNlIC8qIGRvbid0IGRlY29yYXRlIHRoaXMgcHJvcGVydHkgKi9cblxuLy8gQWRkaXRpb25hbEZpZWxkcyBjYW4gYmUgdXNlZCB0byBkZWNsYXJlIGFkZGl0aW9uYWwga2V5cyB0aGF0IGNhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSB0byBiZSBhYmxlIHRvXG4vLyBkZWNsYXJlIGFubm90YXRpb25zIGZvciBwcml2YXRlLyBwcm90ZWN0ZWQgbWVtYmVycywgc2VlICMyMzM5XG5leHBvcnQgdHlwZSBBbm5vdGF0aW9uc01hcDxULCBBZGRpdGlvbmFsRmllbGRzIGV4dGVuZHMgUHJvcGVydHlLZXk+ID0ge1xuICAgIFtQIGluIEV4Y2x1ZGU8a2V5b2YgVCwgXCJ0b1N0cmluZ1wiPl0/OiBBbm5vdGF0aW9uTWFwRW50cnlcbn0gJiBSZWNvcmQ8QWRkaXRpb25hbEZpZWxkcywgQW5ub3RhdGlvbk1hcEVudHJ5PlxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbm5vdGF0aW9uKHRoaW5nOiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBDYW4gYmUgZnVuY3Rpb25cbiAgICAgICAgdGhpbmcgaW5zdGFuY2VvZiBPYmplY3QgJiZcbiAgICAgICAgdHlwZW9mIHRoaW5nLmFubm90YXRpb25UeXBlXyA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICBpc0Z1bmN0aW9uKHRoaW5nLm1ha2VfKSAmJlxuICAgICAgICBpc0Z1bmN0aW9uKHRoaW5nLmV4dGVuZF8pXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbm5vdGF0aW9uTWFwRW50cnkodGhpbmc6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IFwiYm9vbGVhblwiIHx8IGlzQW5ub3RhdGlvbih0aGluZylcbn1cbiIsIi8qKlxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDIwXG4gKiBNSVQgTGljZW5zZWRcbiAqXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhIGdsb2JhbCBvdmVydmlldyBvZiBob3cgTW9iWCBpbnRlcm5hbGx5IHdvcmtzLFxuICogdGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gc3RhcnQ6XG4gKiBodHRwczovL21lZGl1bS5jb20vQG13ZXN0c3RyYXRlL2JlY29taW5nLWZ1bGx5LXJlYWN0aXZlLWFuLWluLWRlcHRoLWV4cGxhbmF0aW9uLW9mLW1vYnNlcnZhYmxlLTU1OTk1MjYyYTI1NCMueHZiaDZxZDc0XG4gKlxuICogU291cmNlIGZvbGRlcnM6XG4gKiA9PT09PT09PT09PT09PT1cbiAqXG4gKiAtIGFwaS8gICAgIE1vc3Qgb2YgdGhlIHB1YmxpYyBzdGF0aWMgbWV0aG9kcyBleHBvc2VkIGJ5IHRoZSBtb2R1bGUgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiAtIGNvcmUvICAgIEltcGxlbWVudGF0aW9uIG9mIHRoZSBNb2JYIGFsZ29yaXRobTsgYXRvbXMsIGRlcml2YXRpb25zLCByZWFjdGlvbnMsIGRlcGVuZGVuY3kgdHJlZXMsIG9wdGltaXphdGlvbnMuIENvb2wgc3R1ZmYgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiAtIHR5cGVzLyAgIEFsbCB0aGUgbWFnaWMgdGhhdCBpcyBuZWVkIHRvIGhhdmUgb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIHZhbHVlcyBpcyBpbiB0aGlzIGZvbGRlci4gSW5jbHVkaW5nIHRoZSBtb2RpZmllcnMgbGlrZSBgYXNGbGF0YC5cbiAqIC0gdXRpbHMvICAgVXRpbGl0eSBzdHVmZi5cbiAqXG4gKi9cbmltcG9ydCB7IGRpZSB9IGZyb20gXCIuL2Vycm9yc1wiXG5pbXBvcnQgeyBnZXRHbG9iYWwgfSBmcm9tIFwiLi91dGlscy9nbG9iYWxcIlxuO1tcIlN5bWJvbFwiLCBcIk1hcFwiLCBcIlNldFwiXS5mb3JFYWNoKG0gPT4ge1xuICAgIGxldCBnID0gZ2V0R2xvYmFsKClcbiAgICBpZiAodHlwZW9mIGdbbV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGllKGBNb2JYIHJlcXVpcmVzIGdsb2JhbCAnJHttfScgdG8gYmUgYXZhaWxhYmxlIG9yIHBvbHlmaWxsZWRgKVxuICAgIH1cbn0pXG5cbmltcG9ydCB7IHNweSwgZ2V0RGVidWdOYW1lLCAkbW9ieCB9IGZyb20gXCIuL2ludGVybmFsXCJcblxuZXhwb3J0IHtcbiAgICBJT2JzZXJ2YWJsZSxcbiAgICBJRGVwVHJlZU5vZGUsXG4gICAgUmVhY3Rpb24sXG4gICAgSVJlYWN0aW9uUHVibGljLFxuICAgIElSZWFjdGlvbkRpc3Bvc2VyLFxuICAgIHVudHJhY2tlZCxcbiAgICBJQXRvbSxcbiAgICBjcmVhdGVBdG9tLFxuICAgIHNweSxcbiAgICBJQ29tcHV0ZWRWYWx1ZSxcbiAgICBJRXF1YWxzQ29tcGFyZXIsXG4gICAgY29tcGFyZXIsXG4gICAgSUVuaGFuY2VyLFxuICAgIElJbnRlcmNlcHRhYmxlLFxuICAgIElJbnRlcmNlcHRvcixcbiAgICBJTGlzdGVuYWJsZSxcbiAgICBJT2JqZWN0V2lsbENoYW5nZSxcbiAgICBJT2JqZWN0RGlkQ2hhbmdlLFxuICAgIGlzT2JzZXJ2YWJsZU9iamVjdCxcbiAgICBJVmFsdWVEaWRDaGFuZ2UsXG4gICAgSVZhbHVlV2lsbENoYW5nZSxcbiAgICBJT2JzZXJ2YWJsZVZhbHVlLFxuICAgIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLFxuICAgIElPYnNlcnZhYmxlQXJyYXksXG4gICAgSUFycmF5V2lsbENoYW5nZSxcbiAgICBJQXJyYXlXaWxsU3BsaWNlLFxuICAgIElBcnJheVNwbGljZSxcbiAgICBJQXJyYXlVcGRhdGUsXG4gICAgSUFycmF5RGlkQ2hhbmdlLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5LFxuICAgIElLZXlWYWx1ZU1hcCxcbiAgICBPYnNlcnZhYmxlTWFwLFxuICAgIElNYXBFbnRyaWVzLFxuICAgIElNYXBFbnRyeSxcbiAgICBJTWFwV2lsbENoYW5nZSxcbiAgICBJTWFwRGlkQ2hhbmdlLFxuICAgIGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBJT2JzZXJ2YWJsZU1hcEluaXRpYWxWYWx1ZXMsXG4gICAgT2JzZXJ2YWJsZVNldCxcbiAgICBpc09ic2VydmFibGVTZXQsXG4gICAgSVNldERpZENoYW5nZSxcbiAgICBJU2V0V2lsbENoYW5nZSxcbiAgICBJT2JzZXJ2YWJsZVNldEluaXRpYWxWYWx1ZXMsXG4gICAgdHJhbnNhY3Rpb24sXG4gICAgb2JzZXJ2YWJsZSxcbiAgICBJT2JzZXJ2YWJsZUZhY3RvcnksXG4gICAgQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMsXG4gICAgY29tcHV0ZWQsXG4gICAgSUNvbXB1dGVkRmFjdG9yeSxcbiAgICBpc09ic2VydmFibGUsXG4gICAgaXNPYnNlcnZhYmxlUHJvcCxcbiAgICBpc0NvbXB1dGVkLFxuICAgIGlzQ29tcHV0ZWRQcm9wLFxuICAgIGV4dGVuZE9ic2VydmFibGUsXG4gICAgb2JzZXJ2ZSxcbiAgICBpbnRlcmNlcHQsXG4gICAgYXV0b3J1bixcbiAgICBJQXV0b3J1bk9wdGlvbnMsXG4gICAgcmVhY3Rpb24sXG4gICAgSVJlYWN0aW9uT3B0aW9ucyxcbiAgICB3aGVuLFxuICAgIElXaGVuT3B0aW9ucyxcbiAgICBhY3Rpb24sXG4gICAgaXNBY3Rpb24sXG4gICAgcnVuSW5BY3Rpb24sXG4gICAgSUFjdGlvbkZhY3RvcnksXG4gICAga2V5cyxcbiAgICB2YWx1ZXMsXG4gICAgZW50cmllcyxcbiAgICBzZXQsXG4gICAgcmVtb3ZlLFxuICAgIGhhcyxcbiAgICBnZXQsXG4gICAgYXBpT3duS2V5cyBhcyBvd25LZXlzLFxuICAgIGFwaURlZmluZVByb3BlcnR5IGFzIGRlZmluZVByb3BlcnR5LFxuICAgIGNvbmZpZ3VyZSxcbiAgICBvbkJlY29tZU9ic2VydmVkLFxuICAgIG9uQmVjb21lVW5vYnNlcnZlZCxcbiAgICBmbG93LFxuICAgIGlzRmxvdyxcbiAgICBmbG93UmVzdWx0LFxuICAgIEZsb3dDYW5jZWxsYXRpb25FcnJvcixcbiAgICBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvcixcbiAgICB0b0pTLFxuICAgIHRyYWNlLFxuICAgIElPYnNlcnZlclRyZWUsXG4gICAgSURlcGVuZGVuY3lUcmVlLFxuICAgIGdldERlcGVuZGVuY3lUcmVlLFxuICAgIGdldE9ic2VydmVyVHJlZSxcbiAgICByZXNldEdsb2JhbFN0YXRlIGFzIF9yZXNldEdsb2JhbFN0YXRlLFxuICAgIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSxcbiAgICBnZXREZWJ1Z05hbWUsXG4gICAgZ2V0QXRvbSxcbiAgICBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXMgYXMgX2FsbG93U3RhdGVDaGFuZ2VzLFxuICAgIHJ1bkluQWN0aW9uIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCAvLyBUaGlzIGhhcyBiZWNvbWUgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaW4gTW9ieCA2XG4gICAgTGFtYmRhLFxuICAgICRtb2J4LFxuICAgIGlzQ29tcHV0aW5nRGVyaXZhdGlvbiBhcyBfaXNDb21wdXRpbmdEZXJpdmF0aW9uLFxuICAgIG9uUmVhY3Rpb25FcnJvcixcbiAgICBpbnRlcmNlcHRSZWFkcyBhcyBfaW50ZXJjZXB0UmVhZHMsXG4gICAgSUNvbXB1dGVkVmFsdWVPcHRpb25zLFxuICAgIElBY3Rpb25SdW5JbmZvLFxuICAgIF9zdGFydEFjdGlvbixcbiAgICBfZW5kQWN0aW9uLFxuICAgIGFsbG93U3RhdGVSZWFkc1N0YXJ0IGFzIF9hbGxvd1N0YXRlUmVhZHNTdGFydCxcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQgYXMgX2FsbG93U3RhdGVSZWFkc0VuZCxcbiAgICBtYWtlT2JzZXJ2YWJsZSxcbiAgICBtYWtlQXV0b09ic2VydmFibGUsXG4gICAgYXV0b0FjdGlvbiBhcyBfYXV0b0FjdGlvbixcbiAgICBBbm5vdGF0aW9uc01hcCxcbiAgICBBbm5vdGF0aW9uTWFwRW50cnksXG4gICAgb3ZlcnJpZGVcbn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxuXG4vLyBEZXZ0b29scyBzdXBwb3J0XG5kZWNsYXJlIGNvbnN0IF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fOiB7IGluamVjdE1vYng6IChhbnkpID0+IHZvaWQgfVxuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZHlrb2cvbW9ieC1kZXZ0b29scy9cbiAgICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICAgICAgc3B5LFxuICAgICAgICBleHRyYXM6IHtcbiAgICAgICAgICAgIGdldERlYnVnTmFtZVxuICAgICAgICB9LFxuICAgICAgICAkbW9ieFxuICAgIH0pXG59XG4iXSwibmFtZXMiOlsibmljZUVycm9ycyIsImFubm90YXRpb25UeXBlIiwia2V5IiwidG9TdHJpbmciLCJpbmRleCIsImxlbmd0aCIsIm90aGVyIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZGF0YVN0cnVjdHVyZSIsInRoaW5nIiwicHJvcGVydHkiLCJkZXJpdmF0aW9uIiwibWV0aG9kIiwiZXJyb3JzIiwiZGllIiwiZXJyb3IiLCJhcmdzIiwiZSIsImFwcGx5IiwiRXJyb3IiLCJtYXAiLCJTdHJpbmciLCJqb2luIiwibW9ja0dsb2JhbCIsImdldEdsb2JhbCIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwiYXNzaWduIiwiT2JqZWN0IiwiZ2V0RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5Iiwib2JqZWN0UHJvdG90eXBlIiwicHJvdG90eXBlIiwiRU1QVFlfQVJSQVkiLCJmcmVlemUiLCJFTVBUWV9PQkpFQ1QiLCJoYXNQcm94eSIsIlByb3h5IiwicGxhaW5PYmplY3RTdHJpbmciLCJhc3NlcnRQcm94aWVzIiwid2FybkFib3V0UHJveHlSZXF1aXJlbWVudCIsIm1zZyIsImdsb2JhbFN0YXRlIiwidmVyaWZ5UHJveGllcyIsImdldE5leHRJZCIsIm1vYnhHdWlkIiwib25jZSIsImZ1bmMiLCJpbnZva2VkIiwiYXJndW1lbnRzIiwibm9vcCIsImlzRnVuY3Rpb24iLCJmbiIsImlzU3RyaW5naXNoIiwidmFsdWUiLCJ0IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsInByb3RvQ29uc3RydWN0b3IiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc0dlbmVyYXRvciIsIm9iaiIsImRpc3BsYXlOYW1lIiwiYWRkSGlkZGVuUHJvcCIsIm9iamVjdCIsInByb3BOYW1lIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiYWRkSGlkZGVuRmluYWxQcm9wIiwiY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSIsInRoZUNsYXNzIiwieCIsImlzRVM2TWFwIiwiTWFwIiwiaXNFUzZTZXQiLCJTZXQiLCJoYXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRQbGFpbk9iamVjdEtleXMiLCJrZXlzIiwic3ltYm9scyIsImZpbHRlciIsInMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm93bktleXMiLCJSZWZsZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbmNhdCIsInN0cmluZ2lmeUtleSIsInRvUHJpbWl0aXZlIiwiaGFzUHJvcCIsInRhcmdldCIsInByb3AiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicmVzIiwiZm9yRWFjaCIsInN0b3JlZEFubm90YXRpb25zU3ltYm9sIiwiU3ltYm9sIiwiY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbiIsImFubm90YXRpb24iLCJkZWNvcmF0b3IiLCJzdG9yZUFubm90YXRpb24iLCJpc092ZXJyaWRlIiwiZmllbGROYW1lIiwiYXNzZXJ0Tm90RGVjb3JhdGVkIiwiY3VycmVudEFubm90YXRpb25UeXBlIiwiYW5ub3RhdGlvblR5cGVfIiwicmVxdWVzdGVkQW5ub3RhdGlvblR5cGUiLCJjb2xsZWN0U3RvcmVkQW5ub3RhdGlvbnMiLCIkbW9ieCIsIkF0b20iLCJuYW1lXyIsImlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fIiwiaXNCZWluZ09ic2VydmVkXyIsIm9ic2VydmVyc18iLCJkaWZmVmFsdWVfIiwibGFzdEFjY2Vzc2VkQnlfIiwibG93ZXN0T2JzZXJ2ZXJTdGF0ZV8iLCJJRGVyaXZhdGlvblN0YXRlXyIsIk5PVF9UUkFDS0lOR18iLCJvbkJPTCIsIm9uQlVPTCIsIm9uQk8iLCJsaXN0ZW5lciIsIm9uQlVPIiwicmVwb3J0T2JzZXJ2ZWQiLCJyZXBvcnRDaGFuZ2VkIiwic3RhcnRCYXRjaCIsInByb3BhZ2F0ZUNoYW5nZWQiLCJzdGF0ZVZlcnNpb24iLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUlOX1NBRkVfSU5URUdFUiIsImVuZEJhdGNoIiwiaXNBdG9tIiwiY3JlYXRlQXRvbSIsIm9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyIiwib25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciIsImF0b20iLCJvbkJlY29tZU9ic2VydmVkIiwib25CZWNvbWVVbm9ic2VydmVkIiwiaWRlbnRpdHlDb21wYXJlciIsImEiLCJiIiwic3RydWN0dXJhbENvbXBhcmVyIiwiZGVlcEVxdWFsIiwic2hhbGxvd0NvbXBhcmVyIiwiZGVmYXVsdENvbXBhcmVyIiwiaXMiLCJjb21wYXJlciIsImlkZW50aXR5Iiwic3RydWN0dXJhbCIsInNoYWxsb3ciLCJkZWVwRW5oYW5jZXIiLCJ2IiwiXyIsImlzT2JzZXJ2YWJsZSIsIkFycmF5IiwiaXNBcnJheSIsIm9ic2VydmFibGUiLCJhcnJheSIsInVuZGVmaW5lZCIsInNldCIsImlzQWN0aW9uIiwiaXNGbG93IiwiZmxvdyIsImF1dG9BY3Rpb24iLCJzaGFsbG93RW5oYW5jZXIiLCJpc09ic2VydmFibGVPYmplY3QiLCJpc09ic2VydmFibGVBcnJheSIsImlzT2JzZXJ2YWJsZU1hcCIsImlzT2JzZXJ2YWJsZVNldCIsImRlZXAiLCJyZWZlcmVuY2VFbmhhbmNlciIsIm5ld1ZhbHVlIiwicmVmU3RydWN0RW5oYW5jZXIiLCJvbGRWYWx1ZSIsIk9WRVJSSURFIiwib3ZlcnJpZGUiLCJtYWtlXyIsImV4dGVuZF8iLCJhZG0iLCJpc1BsYWluT2JqZWN0XyIsImFwcGxpZWRBbm5vdGF0aW9uc18iLCJkZXNjcmlwdG9yIiwicHJveHlUcmFwIiwiY3JlYXRlQWN0aW9uQW5ub3RhdGlvbiIsIm9wdGlvbnMiLCJvcHRpb25zXyIsInNvdXJjZSIsImJvdW5kIiwidGFyZ2V0XyIsImFjdGlvbkRlc2NyaXB0b3IiLCJjcmVhdGVBY3Rpb25EZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHlfIiwiYXNzZXJ0QWN0aW9uRGVzY3JpcHRvciIsInNhZmVEZXNjcmlwdG9ycyIsImJpbmQiLCJwcm94eV8iLCJjcmVhdGVBY3Rpb24iLCJjcmVhdGVGbG93QW5ub3RhdGlvbiIsImZsb3dEZXNjcmlwdG9yIiwiY3JlYXRlRmxvd0Rlc2NyaXB0b3IiLCJhc3NlcnRGbG93RGVzY3JpcHRvciIsImlzTW9iWEZsb3ciLCJjcmVhdGVDb21wdXRlZEFubm90YXRpb24iLCJhc3NlcnRDb21wdXRlZERlc2NyaXB0b3IiLCJkZWZpbmVDb21wdXRlZFByb3BlcnR5XyIsImdldCIsImNyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uIiwiYXNzZXJ0T2JzZXJ2YWJsZURlc2NyaXB0b3IiLCJkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfIiwiZW5oYW5jZXIiLCJBVVRPIiwiYXV0b0Fubm90YXRpb24iLCJjcmVhdGVBdXRvQW5ub3RhdGlvbiIsImNvbXB1dGVkIiwiZmxvd0Fubm90YXRpb24iLCJhdXRvQmluZCIsImFjdGlvbkFubm90YXRpb24iLCJvYnNlcnZhYmxlQW5ub3RhdGlvbiIsInJlZiIsIk9CU0VSVkFCTEUiLCJPQlNFUlZBQkxFX1JFRiIsIk9CU0VSVkFCTEVfU0hBTExPVyIsIk9CU0VSVkFCTEVfU1RSVUNUIiwiZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zIiwiZGVmYXVsdERlY29yYXRvciIsInByb3h5IiwiYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyIsIm9ic2VydmFibGVSZWZBbm5vdGF0aW9uIiwib2JzZXJ2YWJsZVNoYWxsb3dBbm5vdGF0aW9uIiwib2JzZXJ2YWJsZVN0cnVjdEFubm90YXRpb24iLCJvYnNlcnZhYmxlRGVjb3JhdG9yQW5ub3RhdGlvbiIsImdldEVuaGFuY2VyRnJvbU9wdGlvbnMiLCJnZXRFbmhhbmNlckZyb21Bbm5vdGF0aW9uIiwiZ2V0QW5ub3RhdGlvbkZyb21PcHRpb25zIiwiY3JlYXRlT2JzZXJ2YWJsZSIsImFyZzIiLCJhcmczIiwiYm94Iiwib2JzZXJ2YWJsZUZhY3RvcmllcyIsIm8iLCJPYnNlcnZhYmxlVmFsdWUiLCJlcXVhbHMiLCJpbml0aWFsVmFsdWVzIiwidXNlUHJveGllcyIsImNyZWF0ZUxlZ2FjeUFycmF5IiwiY3JlYXRlT2JzZXJ2YWJsZUFycmF5IiwiT2JzZXJ2YWJsZU1hcCIsIk9ic2VydmFibGVTZXQiLCJwcm9wcyIsImRlY29yYXRvcnMiLCJleHRlbmRPYnNlcnZhYmxlIiwiYXNPYnNlcnZhYmxlT2JqZWN0IiwiYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCIsInN0cnVjdCIsIkNPTVBVVEVEIiwiQ09NUFVURURfU1RSVUNUIiwiY29tcHV0ZWRBbm5vdGF0aW9uIiwiY29tcHV0ZWRTdHJ1Y3RBbm5vdGF0aW9uIiwiYXJnMSIsIm9wdHMiLCJDb21wdXRlZFZhbHVlIiwiY3VycmVudEFjdGlvbklkIiwibmV4dEFjdGlvbklkIiwiaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUiLCJ0bXBOYW1lRGVzY3JpcHRvciIsImFjdGlvbk5hbWUiLCJleGVjdXRlQWN0aW9uIiwiaXNNb2J4QWN0aW9uIiwiY2FuUnVuQXNEZXJpdmF0aW9uIiwic2NvcGUiLCJydW5JbmZvIiwiX3N0YXJ0QWN0aW9uIiwiZXJyIiwiZXJyb3JfIiwiX2VuZEFjdGlvbiIsIm5vdGlmeVNweV8iLCJpc1NweUVuYWJsZWQiLCJzdGFydFRpbWVfIiwiRGF0ZSIsIm5vdyIsImZsYXR0ZW5lZEFyZ3MiLCJmcm9tIiwic3B5UmVwb3J0U3RhcnQiLCJ0eXBlIiwiQUNUSU9OIiwicHJldkRlcml2YXRpb25fIiwidHJhY2tpbmdEZXJpdmF0aW9uIiwicnVuQXNBY3Rpb24iLCJwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfIiwiYWxsb3dTdGF0ZUNoYW5nZXMiLCJ1bnRyYWNrZWRTdGFydCIsImFsbG93U3RhdGVDaGFuZ2VzU3RhcnQiLCJwcmV2QWxsb3dTdGF0ZVJlYWRzXyIsImFsbG93U3RhdGVSZWFkc1N0YXJ0IiwicnVuQXNBY3Rpb25fIiwiYWN0aW9uSWRfIiwicGFyZW50QWN0aW9uSWRfIiwic3VwcHJlc3NSZWFjdGlvbkVycm9ycyIsImFsbG93U3RhdGVDaGFuZ2VzRW5kIiwiYWxsb3dTdGF0ZVJlYWRzRW5kIiwidW50cmFja2VkRW5kIiwic3B5UmVwb3J0RW5kIiwidGltZSIsInByZXYiLCJDUkVBVEUiLCJub3RpZnlTcHkiLCJoYXNVbnJlcG9ydGVkQ2hhbmdlXyIsImludGVyY2VwdG9yc18iLCJjaGFuZ2VMaXN0ZW5lcnNfIiwidmFsdWVfIiwiZGVoYW5jZXIiLCJzcHlSZXBvcnQiLCJvYnNlcnZhYmxlS2luZCIsImRlYnVnT2JqZWN0TmFtZSIsImRlaGFuY2VWYWx1ZSIsInByZXBhcmVOZXdWYWx1ZV8iLCJVTkNIQU5HRUQiLCJVUERBVEUiLCJzZXROZXdWYWx1ZV8iLCJjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCIsImhhc0ludGVyY2VwdG9ycyIsImNoYW5nZSIsImludGVyY2VwdENoYW5nZSIsImhhc0xpc3RlbmVycyIsIm5vdGlmeUxpc3RlbmVycyIsImludGVyY2VwdF8iLCJoYW5kbGVyIiwicmVnaXN0ZXJJbnRlcmNlcHRvciIsIm9ic2VydmVfIiwiZmlyZUltbWVkaWF0ZWx5IiwicmVnaXN0ZXJMaXN0ZW5lciIsInJhdyIsInRvSlNPTiIsInZhbHVlT2YiLCJpc09ic2VydmFibGVWYWx1ZSIsIl9TeW1ib2wkdG9QcmltaXRpdmUiLCJkZXBlbmRlbmNpZXNTdGF0ZV8iLCJvYnNlcnZpbmdfIiwibmV3T2JzZXJ2aW5nXyIsInJ1bklkXyIsIlVQX1RPX0RBVEVfIiwidW5ib3VuZERlcHNDb3VudF8iLCJDYXVnaHRFeGNlcHRpb24iLCJ0cmlnZ2VyZWRCeV8iLCJpc0NvbXB1dGluZ18iLCJpc1J1bm5pbmdTZXR0ZXJfIiwic2V0dGVyXyIsImlzVHJhY2luZ18iLCJUcmFjZU1vZGUiLCJOT05FIiwic2NvcGVfIiwiZXF1YWxzXyIsInJlcXVpcmVzUmVhY3Rpb25fIiwia2VlcEFsaXZlXyIsImNvbXBhcmVTdHJ1Y3R1cmFsIiwiY29udGV4dCIsInJlcXVpcmVzUmVhY3Rpb24iLCJrZWVwQWxpdmUiLCJvbkJlY29tZVN0YWxlXyIsInByb3BhZ2F0ZU1heWJlQ2hhbmdlZCIsImluQmF0Y2giLCJzaXplIiwic2hvdWxkQ29tcHV0ZSIsIndhcm5BYm91dFVudHJhY2tlZFJlYWRfIiwiY29tcHV0ZVZhbHVlXyIsInByZXZUcmFja2luZ0NvbnRleHQiLCJ0cmFja2luZ0NvbnRleHQiLCJ0cmFja0FuZENvbXB1dGUiLCJwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQiLCJyZXN1bHQiLCJpc0NhdWdodEV4Y2VwdGlvbiIsImNhdXNlIiwid2FzU3VzcGVuZGVkIiwiY2hhbmdlZCIsInRyYWNrIiwidHJhY2tEZXJpdmVkRnVuY3Rpb24iLCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzIiwic3VzcGVuZF8iLCJjbGVhck9ic2VydmluZyIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdFRpbWUiLCJwcmV2VmFsdWUiLCJhdXRvcnVuIiwicHJldlUiLCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24iLCJ3YXJuIiwiaXNDb21wdXRlZFZhbHVlIiwiU1RBTEVfIiwiUE9TU0lCTFlfU1RBTEVfIiwicHJldkFsbG93U3RhdGVSZWFkcyIsInByZXZVbnRyYWNrZWQiLCJvYnMiLCJsIiwiaSIsImNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wIiwiaXNDb21wdXRpbmdEZXJpdmF0aW9uIiwiaGFzT2JzZXJ2ZXJzIiwiZW5mb3JjZUFjdGlvbnMiLCJjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQiLCJhbGxvd1N0YXRlUmVhZHMiLCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiIsImYiLCJydW5JZCIsInByZXZUcmFja2luZyIsImJpbmREZXBlbmRlbmNpZXMiLCJ3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyIsInJlcXVpcmVzT2JzZXJ2YWJsZV8iLCJyZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSIsInByZXZPYnNlcnZpbmciLCJvYnNlcnZpbmciLCJsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUiLCJpMCIsImRlcCIsInJlbW92ZU9ic2VydmVyIiwiYWRkT2JzZXJ2ZXIiLCJ1bnRyYWNrZWQiLCJhY3Rpb24iLCJwZXJzaXN0ZW50S2V5cyIsIk1vYlhHbG9iYWxzIiwidmVyc2lvbiIsInBlbmRpbmdVbm9ic2VydmF0aW9ucyIsInBlbmRpbmdSZWFjdGlvbnMiLCJpc1J1bm5pbmdSZWFjdGlvbnMiLCJzcHlMaXN0ZW5lcnMiLCJnbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMiLCJjYW5NZXJnZUdsb2JhbFN0YXRlIiwiaXNvbGF0ZUNhbGxlZCIsIl9fbW9ieEluc3RhbmNlQ291bnQiLCJfX21vYnhHbG9iYWxzIiwic2V0VGltZW91dCIsImlzb2xhdGVHbG9iYWxTdGF0ZSIsImdldEdsb2JhbFN0YXRlIiwicmVzZXRHbG9iYWxTdGF0ZSIsImRlZmF1bHRHbG9iYWxzIiwiaW5kZXhPZiIsImdldE9ic2VydmVycyIsIm5vZGUiLCJhZGQiLCJxdWV1ZUZvclVub2JzZXJ2YXRpb24iLCJwdXNoIiwicnVuUmVhY3Rpb25zIiwibGlzdCIsImQiLCJsb2dUcmFjZUluZm8iLCJCUkVBSyIsImxpbmVzIiwicHJpbnREZXBUcmVlIiwiZ2V0RGVwZW5kZW5jeVRyZWUiLCJGdW5jdGlvbiIsInJlcGxhY2UiLCJ0cmVlIiwiZGVwdGgiLCJyZXBlYXQiLCJkZXBlbmRlbmNpZXMiLCJjaGlsZCIsIlJlYWN0aW9uIiwib25JbnZhbGlkYXRlXyIsImVycm9ySGFuZGxlcl8iLCJpc0Rpc3Bvc2VkXyIsImlzU2NoZWR1bGVkXyIsImlzVHJhY2tQZW5kaW5nXyIsImlzUnVubmluZ18iLCJzY2hlZHVsZV8iLCJpc1NjaGVkdWxlZCIsInJ1blJlYWN0aW9uXyIsInJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8iLCJub3RpZnkiLCJzdGFydFRpbWUiLCJwcmV2UmVhY3Rpb24iLCJtZXNzYWdlIiwiZGlzcG9zZSIsImdldERpc3Bvc2VyXyIsInIiLCJ0cmFjZSIsImVudGVyQnJlYWtQb2ludCIsIm9uUmVhY3Rpb25FcnJvciIsImlkeCIsInNwbGljZSIsIk1BWF9SRUFDVElPTl9JVEVSQVRJT05TIiwicmVhY3Rpb25TY2hlZHVsZXIiLCJydW5SZWFjdGlvbnNIZWxwZXIiLCJhbGxSZWFjdGlvbnMiLCJpdGVyYXRpb25zIiwicmVtYWluaW5nUmVhY3Rpb25zIiwiaXNSZWFjdGlvbiIsInNldFJlYWN0aW9uU2NoZWR1bGVyIiwiYmFzZVNjaGVkdWxlciIsImV2ZW50IiwibGlzdGVuZXJzIiwiRU5EX0VWRU5UIiwic3B5IiwiQUNUSU9OX0JPVU5EIiwiQVVUT0FDVElPTiIsIkFVVE9BQ1RJT05fQk9VTkQiLCJERUZBVUxUX0FDVElPTl9OQU1FIiwiYWN0aW9uQm91bmRBbm5vdGF0aW9uIiwiYXV0b0FjdGlvbkFubm90YXRpb24iLCJhdXRvQWN0aW9uQm91bmRBbm5vdGF0aW9uIiwiY3JlYXRlQWN0aW9uRmFjdG9yeSIsInJ1bkluQWN0aW9uIiwidmlldyIsInJ1blN5bmMiLCJzY2hlZHVsZXIiLCJkZWxheSIsInJlYWN0aW9uIiwicmVhY3Rpb25SdW5uZXIiLCJvbkVycm9yIiwicmVxdWlyZXNPYnNlcnZhYmxlIiwiY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMiLCJydW4iLCJleHByZXNzaW9uIiwiZWZmZWN0IiwiZWZmZWN0QWN0aW9uIiwid3JhcEVycm9ySGFuZGxlciIsIm5leHRWYWx1ZSIsImVycm9ySGFuZGxlciIsImJhc2VGbiIsIk9OX0JFQ09NRV9PQlNFUlZFRCIsIk9OX0JFQ09NRV9VTk9CU0VSVkVEIiwiaW50ZXJjZXB0SG9vayIsImhvb2siLCJnZXRBdG9tIiwiY2IiLCJsaXN0ZW5lcnNLZXkiLCJob29rTGlzdGVuZXJzIiwiTkVWRVIiLCJBTFdBWVMiLCJPQlNFUlZFRCIsImNvbmZpZ3VyZSIsImVhIiwicHJvcGVydGllcyIsImFubm90YXRpb25zIiwiZGVzY3JpcHRvcnMiLCJub2RlVG9EZXBlbmRlbmN5VHJlZSIsInVuaXF1ZSIsImdldE9ic2VydmVyVHJlZSIsIm5vZGVUb09ic2VydmVyVHJlZSIsIm9ic2VydmVycyIsImdlbmVyYXRvcklkIiwiRmxvd0NhbmNlbGxhdGlvbkVycm9yIiwiY3JlYXRlIiwiaXNGbG93Q2FuY2VsbGF0aW9uRXJyb3IiLCJmbG93Qm91bmRBbm5vdGF0aW9uIiwiZ2VuZXJhdG9yIiwiY3R4IiwiZ2VuIiwicmVqZWN0b3IiLCJwZW5kaW5nUHJvbWlzZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0ZXBJZCIsIm9uRnVsZmlsbGVkIiwicmV0IiwibmV4dCIsIm9uUmVqZWN0ZWQiLCJ0aGVuIiwiZG9uZSIsImNhbmNlbCIsImNhbmNlbFByb21pc2UiLCJ5aWVsZGVkUHJvbWlzZSIsImZsb3dSZXN1bHQiLCJpbnRlcmNlcHRSZWFkcyIsInByb3BPckhhbmRsZXIiLCJnZXRBZG1pbmlzdHJhdGlvbiIsImludGVyY2VwdCIsImludGVyY2VwdFByb3BlcnR5IiwiaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSIsIl9pc0NvbXB1dGVkIiwidmFsdWVzXyIsImhhcyIsImlzQ29tcHV0ZWQiLCJpc0NvbXB1dGVkUHJvcCIsIl9pc09ic2VydmFibGUiLCJpc09ic2VydmFibGVQcm9wIiwia2V5c18iLCJ2YWx1ZXMiLCJzbGljZSIsImVudHJpZXMiLCJzZXRfIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJkZWxldGVfIiwiaGFzXyIsImdldF8iLCJhcGlEZWZpbmVQcm9wZXJ0eSIsImFwaU93bktleXMiLCJvd25LZXlzXyIsIm9ic2VydmUiLCJwcm9wT3JDYiIsImNiT3JGaXJlIiwib2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSIsIm9ic2VydmVPYnNlcnZhYmxlIiwiY2FjaGUiLCJ0b0pTSGVscGVyIiwiX19hbHJlYWR5U2VlbiIsInRvSlMiLCJwb3AiLCJnZXRBdG9tRnJvbUFyZ3MiLCJMT0ciLCJ0cmFuc2FjdGlvbiIsInRoaXNBcmciLCJ3aGVuIiwicHJlZGljYXRlIiwid2hlblByb21pc2UiLCJfd2hlbiIsInRpbWVvdXRIYW5kbGUiLCJ0aW1lb3V0IiwiZGlzcG9zZXIiLCJjb25kIiwiY2xlYXJUaW1lb3V0Iiwic2lnbmFsIiwiYWJvcnRlZCIsImFib3J0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRBZG0iLCJvYmplY3RQcm94eVRyYXBzIiwiZGVsZXRlUHJvcGVydHkiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsImludGVyY2VwdGFibGUiLCJpbnRlcmNlcHRvcnMiLCJsaXN0ZW5hYmxlIiwibWFrZU9ic2VydmFibGUiLCJrZXlzU3ltYm9sIiwibWFrZUF1dG9PYnNlcnZhYmxlIiwib3ZlcnJpZGVzIiwiU1BMSUNFIiwiTUFYX1NQTElDRV9TSVpFIiwiYXJyYXlUcmFwcyIsImdldEFycmF5TGVuZ3RoXyIsImlzTmFOIiwiYXJyYXlFeHRlbnNpb25zIiwic2V0QXJyYXlMZW5ndGhfIiwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24iLCJvd25lZF8iLCJsZWdhY3lNb2RlXyIsImF0b21fIiwiZW5oYW5jZXJfIiwibGFzdEtub3duTGVuZ3RoXyIsIm5ld1YiLCJvbGRWIiwiZGVoYW5jZVZhbHVlXyIsImRlaGFuY2VWYWx1ZXNfIiwiYWRkZWQiLCJhZGRlZENvdW50IiwicmVtb3ZlZCIsInJlbW92ZWRDb3VudCIsIm5ld0xlbmd0aCIsImN1cnJlbnRMZW5ndGgiLCJuZXdJdGVtcyIsInNwbGljZVdpdGhBcnJheV8iLCJ1cGRhdGVBcnJheUxlbmd0aF8iLCJvbGRMZW5ndGgiLCJkZWx0YSIsInJlc2VydmVBcnJheUJ1ZmZlciIsImRlbGV0ZUNvdW50IiwiTWF0aCIsIm1heCIsIm1pbiIsImxlbmd0aERlbHRhIiwic3BsaWNlSXRlbXNJbnRvVmFsdWVzXyIsIm5vdGlmeUFycmF5U3BsaWNlXyIsIm9sZEl0ZW1zIiwibm90aWZ5QXJyYXlDaGlsZFVwZGF0ZV8iLCJvd25lZCIsImNsZWFyIiwic3BsaWNlV2l0aEFycmF5IiwiaXRlbXMiLCJzaGlmdCIsInVuc2hpZnQiLCJyZXZlcnNlIiwic29ydCIsImNvcHkiLCJhZGRBcnJheUV4dGVuc2lvbiIsInNpbXBsZUZ1bmMiLCJtYXBMaWtlRnVuYyIsInJlZHVjZUxpa2VGdW5jIiwiZnVuY05hbWUiLCJmdW5jRmFjdG9yeSIsImRlaGFuY2VkVmFsdWVzIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uIiwiT2JzZXJ2YWJsZU1hcE1hcmtlciIsIkFERCIsIkRFTEVURSIsIml0ZXJhdG9yIiwidG9TdHJpbmdUYWciLCJpbml0aWFsRGF0YSIsImRhdGFfIiwiaGFzTWFwXyIsImtleXNBdG9tXyIsIm1lcmdlIiwiZW50cnkiLCJuZXdFbnRyeSIsImhhc0tleSIsInVwZGF0ZVZhbHVlXyIsImFkZFZhbHVlXyIsIm1ha2VJdGVyYWJsZSIsInJlcGxhY2VtZW50TWFwIiwiY29udmVydFRvTWFwIiwib3JkZXJlZERhdGEiLCJrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCIsImRlbGV0ZWQiLCJrZXlFeGlzdGVkIiwiaXRlcjEiLCJpdGVyMiIsIm5leHQxIiwibmV4dDIiLCJPYnNlcnZhYmxlU2V0TWFya2VyIiwiX1N5bWJvbCRpdGVyYXRvciIsIl9TeW1ib2wkdG9TdHJpbmdUYWciLCJjYWxsYmFja0ZuIiwibmV4dEluZGV4Iiwib2JzZXJ2YWJsZVZhbHVlcyIsImRlc2NyaXB0b3JDYWNoZSIsIlJFTU9WRSIsIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiIsImRlZmF1bHRBbm5vdGF0aW9uXyIsInBlbmRpbmdLZXlzXyIsImlzQW5ub3RhdGlvbiIsImdldE9ic2VydmFibGVQcm9wVmFsdWVfIiwic2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8iLCJhc3NlcnRBbm5vdGFibGUiLCJvdXRjb21lIiwicmVjb3JkQW5ub3RhdGlvbkFwcGxpZWQiLCJkZWxldGVPdXRjb21lIiwibm90aWZ5UHJvcGVydHlBZGRpdGlvbl8iLCJjYWNoZWREZXNjcmlwdG9yIiwiZ2V0Q2FjaGVkT2JzZXJ2YWJsZVByb3BEZXNjcmlwdG9yIiwiZ2V0RGVidWdOYW1lIiwiaXNFeHRlbnNpYmxlIiwiaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24iLCJFTlRSWV8wIiwiY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IiLCJPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFIiwiU3R1YkFycmF5IiwiaW5oZXJpdCIsImN0b3IiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkxlZ2FjeU9ic2VydmFibGVBcnJheSIsImFycmF5cyIsImNyZWF0ZUFycmF5QnVmZmVySXRlbSIsIm5hbWVkIiwiZXEiLCJhU3RhY2siLCJiU3RhY2siLCJjbGFzc05hbWUiLCJ1bndyYXAiLCJhcmVBcnJheXMiLCJhQ3RvciIsImJDdG9yIiwiZ2V0U2VsZiIsIm0iLCJnIiwiX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJpbmplY3RNb2J4IiwiZXh0cmFzIl0sInNvdXJjZVJvb3QiOiIifQ==