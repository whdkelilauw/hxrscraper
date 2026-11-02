(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([["vendors/xstate"],{

/***/ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromPromise: () => (/* binding */ fromPromise)
/* harmony export */ });
/* unused harmony exports createEmptyActor, fromCallback, fromEventObservable, fromObservable, fromTransition */
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dist/raise-1db27a82.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js");
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev/dist/xstate-dev.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dev/dist/xstate-dev.development.esm.js");



/**
 * Represents an actor created by `fromTransition`.
 *
 * The type of `self` within the actor's logic.
 *
 * @example
 *
 * ```ts
 * import {
 *   fromTransition,
 *   createActor,
 *   type AnyActorSystem
 * } from 'xstate';
 *
 * //* The actor's stored context.
 * type Context = {
 *   // The current count.
 *   count: number;
 *   // The amount to increase `count` by.
 *   step: number;
 * };
 * // The events the actor receives.
 * type Event = { type: 'increment' };
 * // The actor's input.
 * type Input = { step?: number };
 *
 * // Actor logic that increments `count` by `step` when it receives an event of
 * // type `increment`.
 * const logic = fromTransition<Context, Event, AnyActorSystem, Input>(
 *   (state, event, actorScope) => {
 *     actorScope.self;
 *     //         ^? TransitionActorRef<Context, Event>
 *
 *     if (event.type === 'increment') {
 *       return {
 *         ...state,
 *         count: state.count + state.step
 *       };
 *     }
 *     return state;
 *   },
 *   ({ input, self }) => {
 *     self;
 *     // ^? TransitionActorRef<Context, Event>
 *
 *     return {
 *       count: 0,
 *       step: input.step ?? 1
 *     };
 *   }
 * );
 *
 * const actor = createActor(logic, { input: { step: 10 } });
 * //    ^? TransitionActorRef<Context, Event>
 * ```
 *
 * @see {@link fromTransition}
 */ /**
 * Returns actor logic given a transition function and its initial state.
 *
 * A “transition function” is a function that takes the current `state` and
 * received `event` object as arguments, and returns the next state, similar to
 * a reducer.
 *
 * Actors created from transition logic (“transition actors”) can:
 *
 * - Receive events
 * - Emit snapshots of its state
 *
 * The transition function’s `state` is used as its transition actor’s
 * `context`.
 *
 * Note that the "state" for a transition function is provided by the initial
 * state argument, and is not the same as the State object of an actor or a
 * state within a machine configuration.
 *
 * @example
 *
 * ```ts
 * const transitionLogic = fromTransition(
 *   (state, event) => {
 *     if (event.type === 'increment') {
 *       return {
 *         ...state,
 *         count: state.count + 1
 *       };
 *     }
 *     return state;
 *   },
 *   { count: 0 }
 * );
 *
 * const transitionActor = createActor(transitionLogic);
 * transitionActor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 * transitionActor.start();
 * // => {
 * //   status: 'active',
 * //   context: { count: 0 },
 * //   ...
 * // }
 *
 * transitionActor.send({ type: 'increment' });
 * // => {
 * //   status: 'active',
 * //   context: { count: 1 },
 * //   ...
 * // }
 * ```
 *
 * @param transition The transition function used to describe the transition
 *   logic. It should return the next state given the current state and event.
 *   It receives the following arguments:
 *
 *   - `state` - the current state.
 *   - `event` - the received event.
 *   - `actorScope` - the actor scope object, with properties like `self` and
 *       `system`.
 *
 * @param initialContext The initial state of the transition function, either an
 *   object representing the state, or a function which returns a state object.
 *   If a function, it will receive as its only argument an object with the
 *   following properties:
 *
 *   - `input` - the `input` provided to its parent transition actor.
 *   - `self` - a reference to its parent transition actor.
 *
 * @returns Actor logic
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed
 */ function fromTransition(transition, initialContext) {
    return {
        config: transition,
        transition: (snapshot, event, actorScope)=>{
            return {
                ...snapshot,
                context: transition(snapshot.context, event, actorScope)
            };
        },
        getInitialSnapshot: (_, input)=>{
            return {
                status: 'active',
                output: undefined,
                error: undefined,
                context: typeof initialContext === 'function' ? initialContext({
                    input
                }) : initialContext
            };
        },
        getPersistedSnapshot: (snapshot)=>snapshot,
        restoreSnapshot: (snapshot)=>snapshot
    };
}
const instanceStates = /* #__PURE__ */ new WeakMap();
/**
 * Represents an actor created by `fromCallback`.
 *
 * The type of `self` within the actor's logic.
 *
 * @example
 *
 * ```ts
 * import { fromCallback, createActor } from 'xstate';
 *
 * // The events the actor receives.
 * type Event = { type: 'someEvent' };
 * // The actor's input.
 * type Input = { name: string };
 *
 * // Actor logic that logs whenever it receives an event of type `someEvent`.
 * const logic = fromCallback<Event, Input>(({ self, input, receive }) => {
 *   self;
 *   // ^? CallbackActorRef<Event, Input>
 *
 *   receive((event) => {
 *     if (event.type === 'someEvent') {
 *       console.log(`${input.name}: received "someEvent" event`);
 *       // logs 'myActor: received "someEvent" event'
 *     }
 *   });
 * });
 *
 * const actor = createActor(logic, { input: { name: 'myActor' } });
 * //    ^? CallbackActorRef<Event, Input>
 * ```
 *
 * @see {@link fromCallback}
 */ /**
 * An actor logic creator which returns callback logic as defined by a callback
 * function.
 *
 * @remarks
 * Useful for subscription-based or other free-form logic that can send events
 * back to the parent actor.
 *
 * Actors created from callback logic (“callback actors”) can:
 *
 * - Receive events via the `receive` function
 * - Send events to the parent actor via the `sendBack` function
 *
 * Callback actors are a bit different from other actors in that they:
 *
 * - Do not work with `onDone`
 * - Do not produce a snapshot using `.getSnapshot()`
 * - Do not emit values when used with `.subscribe()`
 * - Can not be stopped with `.stop()`
 *
 * @example
 *
 * ```typescript
 * const callbackLogic = fromCallback(({ sendBack, receive }) => {
 *   let lockStatus = 'unlocked';
 *
 *   const handler = (event) => {
 *     if (lockStatus === 'locked') {
 *       return;
 *     }
 *     sendBack(event);
 *   };
 *
 *   receive((event) => {
 *     if (event.type === 'lock') {
 *       lockStatus = 'locked';
 *     } else if (event.type === 'unlock') {
 *       lockStatus = 'unlocked';
 *     }
 *   });
 *
 *   document.body.addEventListener('click', handler);
 *
 *   return () => {
 *     document.body.removeEventListener('click', handler);
 *   };
 * });
 * ```
 *
 * @param callback - The callback function used to describe the callback logic
 *   The callback function is passed an object with the following properties:
 *
 *   - `receive` - A function that can send events back to the parent actor; the
 *       listener is then called whenever events are received by the callback
 *       actor
 *   - `sendBack` - A function that can send events back to the parent actor
 *   - `input` - Data that was provided to the callback actor
 *   - `self` - The parent actor of the callback actor
 *   - `system` - The actor system to which the callback actor belongs The callback
 *       function can (optionally) return a cleanup function, which is called
 *       when the actor is stopped.
 *
 * @returns Callback logic
 * @see {@link CallbackLogicFunction} for more information about the callback function and its object argument
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed
 */ function fromCallback(callback) {
    const logic = {
        config: callback,
        start: (state, actorScope)=>{
            const { self, system, emit } = actorScope;
            const callbackState = {
                receivers: undefined,
                dispose: undefined
            };
            instanceStates.set(self, callbackState);
            callbackState.dispose = callback({
                input: state.input,
                system,
                self,
                sendBack: (event)=>{
                    if (self.getSnapshot().status === 'stopped') {
                        return;
                    }
                    if (self._parent) {
                        system._relay(self, self._parent, event);
                    }
                },
                receive: (listener)=>{
                    var _callbackState;
                    var _receivers;
                    (_receivers = (_callbackState = callbackState).receivers) !== null && _receivers !== void 0 ? _receivers : _callbackState.receivers = new Set();
                    callbackState.receivers.add(listener);
                },
                emit
            });
        },
        transition: (state, event, actorScope)=>{
            var _callbackState_receivers;
            const callbackState = instanceStates.get(actorScope.self);
            if (event.type === _dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.X) {
                var _callbackState_dispose;
                state = {
                    ...state,
                    status: 'stopped',
                    error: undefined
                };
                (_callbackState_dispose = callbackState.dispose) === null || _callbackState_dispose === void 0 ? void 0 : _callbackState_dispose.call(callbackState);
                return state;
            }
            (_callbackState_receivers = callbackState.receivers) === null || _callbackState_receivers === void 0 ? void 0 : _callbackState_receivers.forEach((receiver)=>receiver(event));
            return state;
        },
        getInitialSnapshot: (_, input)=>{
            return {
                status: 'active',
                output: undefined,
                error: undefined,
                input
            };
        },
        getPersistedSnapshot: (snapshot)=>snapshot,
        restoreSnapshot: (snapshot)=>snapshot
    };
    return logic;
}
const XSTATE_OBSERVABLE_NEXT = 'xstate.observable.next';
const XSTATE_OBSERVABLE_ERROR = 'xstate.observable.error';
const XSTATE_OBSERVABLE_COMPLETE = 'xstate.observable.complete';
/**
 * Represents an actor created by `fromObservable` or `fromEventObservable`.
 *
 * The type of `self` within the actor's logic.
 *
 * @example
 *
 * ```ts
 * import { fromObservable, createActor } from 'xstate';
 * import { interval } from 'rxjs';
 *
 * // The type of the value observed by the actor's logic.
 * type Context = number;
 * // The actor's input.
 * type Input = { period?: number };
 *
 * // Actor logic that observes a number incremented every `input.period`
 * // milliseconds (default: 1_000).
 * const logic = fromObservable<Context, Input>(({ input, self }) => {
 *   self;
 *   // ^? ObservableActorRef<Event, Input>
 *
 *   return interval(input.period ?? 1_000);
 * });
 *
 * const actor = createActor(logic, { input: { period: 2_000 } });
 * //    ^? ObservableActorRef<Event, Input>
 * ```
 *
 * @see {@link fromObservable}
 * @see {@link fromEventObservable}
 */ /**
 * Observable actor logic is described by an observable stream of values. Actors
 * created from observable logic (“observable actors”) can:
 *
 * - Emit snapshots of the observable’s emitted value
 *
 * The observable’s emitted value is used as its observable actor’s `context`.
 *
 * Sending events to observable actors will have no effect.
 *
 * @example
 *
 * ```ts
 * import { fromObservable, createActor } from 'xstate';
 * import { interval } from 'rxjs';
 *
 * const logic = fromObservable((obj) => interval(1000));
 *
 * const actor = createActor(logic);
 *
 * actor.subscribe((snapshot) => {
 *   console.log(snapshot.context);
 * });
 *
 * actor.start();
 * // At every second:
 * // Logs 0
 * // Logs 1
 * // Logs 2
 * // ...
 * ```
 *
 * @param observableCreator A function that creates an observable. It receives
 *   one argument, an object with the following properties:
 *
 *   - `input` - Data that was provided to the observable actor
 *   - `self` - The parent actor
 *   - `system` - The actor system to which the observable actor belongs
 *
 *   It should return a {@link Subscribable}, which is compatible with an RxJS
 *   Observable, although RxJS is not required to create them.
 * @see {@link https://rxjs.dev} for documentation on RxJS Observable and observable creators.
 * @see {@link Subscribable} interface in XState, which is based on and compatible with RxJS Observable.
 */ function fromObservable(observableCreator) {
    // TODO: add event types
    const logic = {
        config: observableCreator,
        transition: (snapshot, event)=>{
            if (snapshot.status !== 'active') {
                return snapshot;
            }
            switch(event.type){
                case XSTATE_OBSERVABLE_NEXT:
                    {
                        const newSnapshot = {
                            ...snapshot,
                            context: event.data
                        };
                        return newSnapshot;
                    }
                case XSTATE_OBSERVABLE_ERROR:
                    return {
                        ...snapshot,
                        status: 'error',
                        error: event.data,
                        input: undefined,
                        _subscription: undefined
                    };
                case XSTATE_OBSERVABLE_COMPLETE:
                    return {
                        ...snapshot,
                        status: 'done',
                        input: undefined,
                        _subscription: undefined
                    };
                case _dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.X:
                    snapshot._subscription.unsubscribe();
                    return {
                        ...snapshot,
                        status: 'stopped',
                        input: undefined,
                        _subscription: undefined
                    };
                default:
                    return snapshot;
            }
        },
        getInitialSnapshot: (_, input)=>{
            return {
                status: 'active',
                output: undefined,
                error: undefined,
                context: undefined,
                input,
                _subscription: undefined
            };
        },
        start: (state, { self, system, emit })=>{
            if (state.status === 'done') {
                // Do not restart a completed observable
                return;
            }
            state._subscription = observableCreator({
                input: state.input,
                system,
                self,
                emit
            }).subscribe({
                next: (value)=>{
                    system._relay(self, self, {
                        type: XSTATE_OBSERVABLE_NEXT,
                        data: value
                    });
                },
                error: (err)=>{
                    system._relay(self, self, {
                        type: XSTATE_OBSERVABLE_ERROR,
                        data: err
                    });
                },
                complete: ()=>{
                    system._relay(self, self, {
                        type: XSTATE_OBSERVABLE_COMPLETE
                    });
                }
            });
        },
        getPersistedSnapshot: ({ _subscription, ...state })=>state,
        restoreSnapshot: (state)=>({
                ...state,
                _subscription: undefined
            })
    };
    return logic;
}
/**
 * Creates event observable logic that listens to an observable that delivers
 * event objects.
 *
 * Event observable actor logic is described by an observable stream of
 * {@link https://stately.ai/docs/transitions#event-objects | event objects}.
 * Actors created from event observable logic (“event observable actors”) can:
 *
 * - Implicitly send events to its parent actor
 * - Emit snapshots of its emitted event objects
 *
 * Sending events to event observable actors will have no effect.
 *
 * @example
 *
 * ```ts
 * import {
 *   fromEventObservable,
 *   Subscribable,
 *   EventObject,
 *   createMachine,
 *   createActor
 * } from 'xstate';
 * import { fromEvent } from 'rxjs';
 *
 * const mouseClickLogic = fromEventObservable(
 *   () => fromEvent(document.body, 'click') as Subscribable<EventObject>
 * );
 *
 * const canvasMachine = createMachine({
 *   invoke: {
 *     // Will send mouse `click` events to the canvas actor
 *     src: mouseClickLogic
 *   }
 * });
 *
 * const canvasActor = createActor(canvasMachine);
 * canvasActor.start();
 * ```
 *
 * @param lazyObservable A function that creates an observable that delivers
 *   event objects. It receives one argument, an object with the following
 *   properties:
 *
 *   - `input` - Data that was provided to the event observable actor
 *   - `self` - The parent actor
 *   - `system` - The actor system to which the event observable actor belongs.
 *
 *   It should return a {@link Subscribable}, which is compatible with an RxJS
 *   Observable, although RxJS is not required to create them.
 */ function fromEventObservable(lazyObservable) {
    // TODO: event types
    const logic = {
        config: lazyObservable,
        transition: (state, event)=>{
            if (state.status !== 'active') {
                return state;
            }
            switch(event.type){
                case XSTATE_OBSERVABLE_ERROR:
                    return {
                        ...state,
                        status: 'error',
                        error: event.data,
                        input: undefined,
                        _subscription: undefined
                    };
                case XSTATE_OBSERVABLE_COMPLETE:
                    return {
                        ...state,
                        status: 'done',
                        input: undefined,
                        _subscription: undefined
                    };
                case _dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.X:
                    state._subscription.unsubscribe();
                    return {
                        ...state,
                        status: 'stopped',
                        input: undefined,
                        _subscription: undefined
                    };
                default:
                    return state;
            }
        },
        getInitialSnapshot: (_, input)=>{
            return {
                status: 'active',
                output: undefined,
                error: undefined,
                context: undefined,
                input,
                _subscription: undefined
            };
        },
        start: (state, { self, system, emit })=>{
            if (state.status === 'done') {
                // Do not restart a completed observable
                return;
            }
            state._subscription = lazyObservable({
                input: state.input,
                system,
                self,
                emit
            }).subscribe({
                next: (value)=>{
                    if (self._parent) {
                        system._relay(self, self._parent, value);
                    }
                },
                error: (err)=>{
                    system._relay(self, self, {
                        type: XSTATE_OBSERVABLE_ERROR,
                        data: err
                    });
                },
                complete: ()=>{
                    system._relay(self, self, {
                        type: XSTATE_OBSERVABLE_COMPLETE
                    });
                }
            });
        },
        getPersistedSnapshot: ({ _subscription, ...snapshot })=>snapshot,
        restoreSnapshot: (snapshot)=>({
                ...snapshot,
                _subscription: undefined
            })
    };
    return logic;
}
const XSTATE_PROMISE_RESOLVE = 'xstate.promise.resolve';
const XSTATE_PROMISE_REJECT = 'xstate.promise.reject';
/**
 * Represents an actor created by `fromPromise`.
 *
 * The type of `self` within the actor's logic.
 *
 * @example
 *
 * ```ts
 * import { fromPromise, createActor } from 'xstate';
 *
 * // The actor's resolved output
 * type Output = string;
 * // The actor's input.
 * type Input = { message: string };
 *
 * // Actor logic that fetches the url of an image of a cat saying `input.message`.
 * const logic = fromPromise<Output, Input>(async ({ input, self }) => {
 *   self;
 *   // ^? PromiseActorRef<Output, Input>
 *
 *   const data = await fetch(
 *     `https://cataas.com/cat/says/${input.message}`
 *   );
 *   const url = await data.json();
 *   return url;
 * });
 *
 * const actor = createActor(logic, { input: { message: 'hello world' } });
 * //    ^? PromiseActorRef<Output, Input>
 * ```
 *
 * @see {@link fromPromise}
 */ const controllerMap = new WeakMap();
/**
 * An actor logic creator which returns promise logic as defined by an async
 * process that resolves or rejects after some time.
 *
 * Actors created from promise actor logic (“promise actors”) can:
 *
 * - Emit the resolved value of the promise
 * - Output the resolved value of the promise
 *
 * Sending events to promise actors will have no effect.
 *
 * @example
 *
 * ```ts
 * const promiseLogic = fromPromise(async () => {
 *   const result = await fetch('https://example.com/...').then((data) =>
 *     data.json()
 *   );
 *
 *   return result;
 * });
 *
 * const promiseActor = createActor(promiseLogic);
 * promiseActor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 * promiseActor.start();
 * // => {
 * //   output: undefined,
 * //   status: 'active'
 * //   ...
 * // }
 *
 * // After promise resolves
 * // => {
 * //   output: { ... },
 * //   status: 'done',
 * //   ...
 * // }
 * ```
 *
 * @param promiseCreator A function which returns a Promise, and accepts an
 *   object with the following properties:
 *
 *   - `input` - Data that was provided to the promise actor
 *   - `self` - The parent actor of the promise actor
 *   - `system` - The actor system to which the promise actor belongs
 *
 * @see {@link https://stately.ai/docs/input | Input docs} for more information about how input is passed
 */ function fromPromise(promiseCreator) {
    const logic = {
        config: promiseCreator,
        transition: (state, event, scope)=>{
            if (state.status !== 'active') {
                return state;
            }
            switch(event.type){
                case XSTATE_PROMISE_RESOLVE:
                    {
                        const resolvedValue = event.data;
                        return {
                            ...state,
                            status: 'done',
                            output: resolvedValue,
                            input: undefined
                        };
                    }
                case XSTATE_PROMISE_REJECT:
                    return {
                        ...state,
                        status: 'error',
                        error: event.data,
                        input: undefined
                    };
                case _dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.X:
                    {
                        var _controllerMap_get;
                        (_controllerMap_get = controllerMap.get(scope.self)) === null || _controllerMap_get === void 0 ? void 0 : _controllerMap_get.abort();
                        return {
                            ...state,
                            status: 'stopped',
                            input: undefined
                        };
                    }
                default:
                    return state;
            }
        },
        start: (state, { self, system, emit })=>{
            // TODO: determine how to allow customizing this so that promises
            // can be restarted if necessary
            if (state.status !== 'active') {
                return;
            }
            const controller = new AbortController();
            controllerMap.set(self, controller);
            const resolvedPromise = Promise.resolve(promiseCreator({
                input: state.input,
                system,
                self,
                signal: controller.signal,
                emit
            }));
            resolvedPromise.then((response)=>{
                if (self.getSnapshot().status !== 'active') {
                    return;
                }
                controllerMap.delete(self);
                system._relay(self, self, {
                    type: XSTATE_PROMISE_RESOLVE,
                    data: response
                });
            }, (errorData)=>{
                if (self.getSnapshot().status !== 'active') {
                    return;
                }
                controllerMap.delete(self);
                system._relay(self, self, {
                    type: XSTATE_PROMISE_REJECT,
                    data: errorData
                });
            });
        },
        getInitialSnapshot: (_, input)=>{
            return {
                status: 'active',
                output: undefined,
                error: undefined,
                input
            };
        },
        getPersistedSnapshot: (snapshot)=>snapshot,
        restoreSnapshot: (snapshot)=>snapshot
    };
    return logic;
}
const emptyLogic = fromTransition((_)=>undefined, undefined);
function createEmptyActor() {
    return (0,_dist_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_2__.A)(emptyLogic);
}



/***/ }),

/***/ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dev/dist/xstate-dev.development.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dev/dist/xstate-dev.development.esm.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devToolsAdapter: () => (/* binding */ devToolsAdapter)
/* harmony export */ });
/* unused harmony exports getGlobal, registerService */
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__);
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

function getGlobal() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    {
        console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
    }
}
function getDevTools() {
    const w = getGlobal();
    if (w.__xstate__) {
        return w.__xstate__;
    }
    return undefined;
}
function registerService(service) {
    if (typeof window === 'undefined') {
        return;
    }
    const devTools = getDevTools();
    if (devTools) {
        devTools.register(service);
    }
}
const devToolsAdapter = (service)=>{
    if (typeof window === 'undefined') {
        return;
    }
    const devTools = getDevTools();
    if (devTools) {
        devTools.register(service);
    }
};



/***/ }),

/***/ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ assign)
/* harmony export */ });
/* unused harmony exports S, b, c, e, f, l, s */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raise-1db27a82.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js");




function createSpawner(actorScope, { machine, context }, event, spawnedChildren) {
    const spawn = (src, options = {})=>{
        const { systemId, input } = options;
        if (typeof src === 'string') {
            const logic = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.z)(machine, src);
            if (!logic) {
                throw new Error(`Actor logic '${src}' not implemented in machine '${machine.id}'`);
            }
            const actorRef = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.A)(logic, {
                id: options.id,
                parent: actorScope.self,
                syncSnapshot: options.syncSnapshot,
                input: typeof input === 'function' ? input({
                    context,
                    event,
                    self: actorScope.self
                }) : input,
                src,
                systemId
            });
            spawnedChildren[actorRef.id] = actorRef;
            return actorRef;
        } else {
            const actorRef = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.A)(src, {
                id: options.id,
                parent: actorScope.self,
                syncSnapshot: options.syncSnapshot,
                input: options.input,
                src,
                systemId
            });
            return actorRef;
        }
    };
    return (src, options)=>{
        const actorRef = spawn(src, options); // TODO: fix types
        spawnedChildren[actorRef.id] = actorRef;
        actorScope.defer(()=>{
            if (actorRef._processingStatus === _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.T.Stopped) {
                return;
            }
            actorRef.start();
        });
        return actorRef;
    };
}
function resolveAssign(actorScope, snapshot, actionArgs, actionParams, { assignment }) {
    if (!snapshot.context) {
        throw new Error('Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.');
    }
    const spawnedChildren = {};
    const assignArgs = {
        context: snapshot.context,
        event: actionArgs.event,
        spawn: createSpawner(actorScope, snapshot, actionArgs.event, spawnedChildren),
        self: actorScope.self,
        system: actorScope.system
    };
    let partialUpdate = {};
    if (typeof assignment === 'function') {
        partialUpdate = assignment(assignArgs, actionParams);
    } else {
        for (const key of Object.keys(assignment)){
            const propAssignment = assignment[key];
            partialUpdate[key] = typeof propAssignment === 'function' ? propAssignment(assignArgs, actionParams) : propAssignment;
        }
    }
    const updatedContext = Object.assign({}, snapshot.context, partialUpdate);
    return [
        (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.U)(snapshot, {
            context: updatedContext,
            children: Object.keys(spawnedChildren).length ? {
                ...snapshot.children,
                ...spawnedChildren
            } : snapshot.children
        }),
        undefined,
        undefined
    ];
}
/**
 * Updates the current context of the machine.
 *
 * @example
 *
 * ```ts
 * import { createMachine, assign } from 'xstate';
 *
 * const countMachine = createMachine({
 *   context: {
 *     count: 0,
 *     message: ''
 *   },
 *   on: {
 *     inc: {
 *       actions: assign({
 *         count: ({ context }) => context.count + 1
 *       })
 *     },
 *     updateMessage: {
 *       actions: assign(({ context, event }) => {
 *         return {
 *           message: event.message.trim()
 *         };
 *       })
 *     }
 *   }
 * });
 * ```
 *
 * @param assignment An object that represents the partial context to update, or
 *   a function that returns an object that represents the partial context to
 *   update.
 */ function assign(assignment) {
    if (_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.V) {
        console.warn('Custom actions should not call `assign()` directly, as it is not imperative. See https://stately.ai/docs/actions#built-in-actions for more details.');
    }
    function assign(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    assign.type = 'xstate.assign';
    assign.assignment = assignment;
    assign.resolve = resolveAssign;
    return assign;
}
function resolveEmit(_, snapshot, args, actionParams, { event: eventOrExpr }) {
    const resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
    return [
        snapshot,
        {
            event: resolvedEvent
        },
        undefined
    ];
}
function executeEmit(actorScope, { event }) {
    actorScope.defer(()=>actorScope.emit(event));
}
/**
 * Emits an event to event handlers registered on the actor via `actor.on(event,
 * handler)`.
 *
 * @example
 *
 * ```ts
 * import { emit } from 'xstate';
 *
 * const machine = createMachine({
 *   // ...
 *   on: {
 *     something: {
 *       actions: emit({
 *         type: 'emitted',
 *         some: 'data'
 *       })
 *     }
 *   }
 *   // ...
 * });
 *
 * const actor = createActor(machine).start();
 *
 * actor.on('emitted', (event) => {
 *   console.log(event);
 * });
 *
 * actor.send({ type: 'something' });
 * // logs:
 * // {
 * //   type: 'emitted',
 * //   some: 'data'
 * // }
 * ```
 */ function emit(/** The event to emit, or an expression that returns an event to emit. */ eventOrExpr) {
    if (_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.V) {
        console.warn('Custom actions should not call `emit()` directly, as it is not imperative. See https://stately.ai/docs/actions#built-in-actions for more details.');
    }
    function emit(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    emit.type = 'xstate.emit';
    emit.event = eventOrExpr;
    emit.resolve = resolveEmit;
    emit.execute = executeEmit;
    return emit;
}
/**
 * @remarks
 * `T | unknown` reduces to `unknown` and that can be problematic when it comes
 * to contextual typing. It especially is a problem when the union has a
 * function member, like here:
 *
 * ```ts
 * declare function test(
 *   cbOrVal: ((arg: number) => unknown) | unknown
 * ): void;
 * test((arg) => {}); // oops, implicit any
 * ```
 *
 * This type can be used to avoid this problem. This union represents the same
 * value space as `unknown`.
 */ // https://github.com/microsoft/TypeScript/issues/23182#issuecomment-379091887
// @TODO: Replace with native `NoInfer` when TS issue gets fixed:
// https://github.com/microsoft/TypeScript/pull/57673
/** @deprecated Use the built-in `NoInfer` type instead */ /** The full definition of an event, with a string `type`. */ /**
 * The string or object representing the state value relative to the parent
 * state node.
 *
 * @remarks
 * - For a child atomic state node, this is a string, e.g., `"pending"`.
 * - For complex state nodes, this is an object, e.g., `{ success:
 *   "someChildState" }`.
 */ /** @deprecated Use `AnyMachineSnapshot` instead */ // TODO: possibly refactor this somehow, use even a simpler type, and maybe even make `machine.options` private or something
/** @ignore */ let SpecialTargets = /*#__PURE__*/ function(SpecialTargets) {
    SpecialTargets["Parent"] = "#_parent";
    SpecialTargets["Internal"] = "#_internal";
    return SpecialTargets;
}({});
/** @deprecated Use `AnyActor` instead. */ // Based on RxJS types
// TODO: in v6, this should only accept AnyActorLogic, like ActorRefFromLogic
/** @deprecated Use `Actor<T>` instead. */ /**
 * Represents logic which can be used by an actor.
 *
 * @template TSnapshot - The type of the snapshot.
 * @template TEvent - The type of the event object.
 * @template TInput - The type of the input.
 * @template TSystem - The type of the actor system.
 */ /** @deprecated */ // TODO: cover all that can be actually returned
function resolveSendTo(actorScope, snapshot, args, actionParams, { to, event: eventOrExpr, id, delay }, extra) {
    const delaysMap = snapshot.machine.implementations.delays;
    if (typeof eventOrExpr === 'string') {
        throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Only event objects may be used with sendTo; use sendTo({ type: "${eventOrExpr}" }) instead`);
    }
    const resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
    let resolvedDelay;
    if (typeof delay === 'string') {
        const configDelay = delaysMap && delaysMap[delay];
        resolvedDelay = typeof configDelay === 'function' ? configDelay(args, actionParams) : configDelay;
    } else {
        resolvedDelay = typeof delay === 'function' ? delay(args, actionParams) : delay;
    }
    const resolvedTarget = typeof to === 'function' ? to(args, actionParams) : to;
    let targetActorRef;
    if (typeof resolvedTarget === 'string') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        if (resolvedTarget === SpecialTargets.Parent) {
            targetActorRef = actorScope.self._parent;
        } else if (resolvedTarget === SpecialTargets.Internal) {
            targetActorRef = actorScope.self;
        } else if (resolvedTarget.startsWith('#_')) {
            // SCXML compatibility: https://www.w3.org/TR/scxml/#SCXMLEventProcessor
            // #_invokeid. If the target is the special term '#_invokeid', where invokeid is the invokeid of an SCXML session that the sending session has created by <invoke>, the Processor must add the event to the external queue of that session.
            targetActorRef = snapshot.children[resolvedTarget.slice(2)];
        } else {
            var _extra_deferredActorIds;
            targetActorRef = ((_extra_deferredActorIds = extra.deferredActorIds) === null || _extra_deferredActorIds === void 0 ? void 0 : _extra_deferredActorIds.includes(resolvedTarget)) ? resolvedTarget : snapshot.children[resolvedTarget];
        }
        if (!targetActorRef) {
            throw new Error(`Unable to send event to actor '${resolvedTarget}' from machine '${snapshot.machine.id}'.`);
        }
    } else {
        targetActorRef = resolvedTarget || actorScope.self;
    }
    return [
        snapshot,
        {
            to: targetActorRef,
            targetId: typeof resolvedTarget === 'string' ? resolvedTarget : undefined,
            event: resolvedEvent,
            id,
            delay: resolvedDelay
        },
        undefined
    ];
}
function retryResolveSendTo(_, snapshot, params) {
    if (typeof params.to === 'string') {
        params.to = snapshot.children[params.to];
    }
}
function executeSendTo(actorScope, params) {
    // this forms an outgoing events queue
    // thanks to that the recipient actors are able to read the *updated* snapshot value of the sender
    actorScope.defer(()=>{
        const { to, event, delay, id } = params;
        if (typeof delay === 'number') {
            actorScope.system.scheduler.schedule(actorScope.self, to, event, delay, id);
            return;
        }
        actorScope.system._relay(actorScope.self, // at this point, in a deferred task, it should already be mutated by retryResolveSendTo
        // if it initially started as a string
        to, event.type === _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.W ? (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.Y)(actorScope.self.id, event.data) : event);
    });
}
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event
 *   to send
 * @param options Send action options
 *
 *   - `id` - The unique send event identifier (used with `cancel()`).
 *   - `delay` - The number of milliseconds to delay the sending of the event.
 */ function sendTo(to, eventOrExpr, options) {
    if (_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.V) {
        console.warn('Custom actions should not call `sendTo()` directly, as it is not imperative. See https://stately.ai/docs/actions#built-in-actions for more details.');
    }
    function sendTo(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    sendTo.type = 'xstate.sendTo';
    sendTo.to = to;
    sendTo.event = eventOrExpr;
    sendTo.id = options === null || options === void 0 ? void 0 : options.id;
    sendTo.delay = options === null || options === void 0 ? void 0 : options.delay;
    sendTo.resolve = resolveSendTo;
    sendTo.retryResolve = retryResolveSendTo;
    sendTo.execute = executeSendTo;
    return sendTo;
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */ function sendParent(event, options) {
    return sendTo(SpecialTargets.Parent, event, options);
}
/**
 * Forwards (sends) an event to the `target` actor.
 *
 * @param target The target actor to forward the event to.
 * @param options Options to pass into the send action creator.
 */ function forwardTo(target, options) {
    if (!target || typeof target === 'function') {
        const originalTarget = target;
        target = (...args)=>{
            const resolvedTarget = typeof originalTarget === 'function' ? originalTarget(...args) : originalTarget;
            if (!resolvedTarget) {
                throw new Error(`Attempted to forward event to undefined actor. This risks an infinite loop in the sender.`);
            }
            return resolvedTarget;
        };
    }
    return sendTo(target, ({ event })=>event, options);
}
function resolveEnqueueActions(actorScope, snapshot, args, actionParams, { collect }) {
    const actions = [];
    const enqueue = function enqueue(action) {
        actions.push(action);
    };
    enqueue.assign = (...args)=>{
        actions.push(assign(...args));
    };
    enqueue.cancel = (...args)=>{
        actions.push((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.M)(...args));
    };
    enqueue.raise = (...args)=>{
        // for some reason it fails to infer `TDelay` from `...args` here and picks its default (`never`)
        // then it fails to typecheck that because `...args` use `string` in place of `TDelay`
        actions.push((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.O)(...args));
    };
    enqueue.sendTo = (...args)=>{
        // for some reason it fails to infer `TDelay` from `...args` here and picks its default (`never`)
        // then it fails to typecheck that because `...args` use `string` in place of `TDelay
        actions.push(sendTo(...args));
    };
    enqueue.sendParent = (...args)=>{
        actions.push(sendParent(...args));
    };
    enqueue.spawnChild = (...args)=>{
        actions.push((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.P)(...args));
    };
    enqueue.stopChild = (...args)=>{
        actions.push((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.R)(...args));
    };
    enqueue.emit = (...args)=>{
        actions.push(emit(...args));
    };
    collect({
        context: args.context,
        event: args.event,
        enqueue,
        check: (guard)=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_3__.e)(guard, snapshot.context, args.event, snapshot),
        self: actorScope.self,
        system: actorScope.system
    }, actionParams);
    return [
        snapshot,
        undefined,
        actions
    ];
}
/**
 * Creates an action object that will execute actions that are queued by the
 * `enqueue(action)` function.
 *
 * @example
 *
 * ```ts
 * import { createMachine, enqueueActions } from 'xstate';
 *
 * const machine = createMachine({
 *   entry: enqueueActions(({ enqueue, check }) => {
 *     enqueue.assign({ count: 0 });
 *
 *     if (check('someGuard')) {
 *       enqueue.assign({ count: 1 });
 *     }
 *
 *     enqueue('someAction');
 *   })
 * });
 * ```
 */ function enqueueActions(collect) {
    function enqueueActions(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    enqueueActions.type = 'xstate.enqueueActions';
    enqueueActions.collect = collect;
    enqueueActions.resolve = resolveEnqueueActions;
    return enqueueActions;
}
function resolveLog(_, snapshot, actionArgs, actionParams, { value, label }) {
    return [
        snapshot,
        {
            value: typeof value === 'function' ? value(actionArgs, actionParams) : value,
            label
        },
        undefined
    ];
}
function executeLog({ logger }, { value, label }) {
    if (label) {
        logger(label, value);
    } else {
        logger(value);
    }
}
/**
 * @param expr The expression function to evaluate which will be logged. Takes
 *   in 2 arguments:
 *
 *   - `ctx` - the current state context
 *   - `event` - the event that caused this action to be executed.
 *
 * @param label The label to give to the logged expression.
 */ function log(value = ({ context, event })=>({
        context,
        event
    }), label) {
    function log1(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    log1.type = 'xstate.log';
    log1.value = value;
    log1.label = label;
    log1.resolve = resolveLog;
    log1.execute = executeLog;
    return log1;
}



/***/ }),

/***/ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $$ACTOR_TYPE),
/* harmony export */   A: () => (/* binding */ createActor),
/* harmony export */   L: () => (/* binding */ toObserver),
/* harmony export */   M: () => (/* binding */ cancel),
/* harmony export */   N: () => (/* binding */ NULL_EVENT),
/* harmony export */   O: () => (/* binding */ raise),
/* harmony export */   P: () => (/* binding */ spawnChild),
/* harmony export */   R: () => (/* binding */ stopChild),
/* harmony export */   S: () => (/* binding */ STATE_DELIMITER),
/* harmony export */   T: () => (/* binding */ ProcessingStatus),
/* harmony export */   U: () => (/* binding */ cloneMachineSnapshot),
/* harmony export */   V: () => (/* binding */ executingCustomAction),
/* harmony export */   W: () => (/* binding */ XSTATE_ERROR),
/* harmony export */   X: () => (/* binding */ XSTATE_STOP),
/* harmony export */   Y: () => (/* binding */ createErrorActorEvent),
/* harmony export */   a: () => (/* binding */ toTransitionConfigArray),
/* harmony export */   b: () => (/* binding */ formatTransition),
/* harmony export */   c: () => (/* binding */ createInvokeId),
/* harmony export */   d: () => (/* binding */ formatInitialTransition),
/* harmony export */   e: () => (/* binding */ evaluateGuard),
/* harmony export */   f: () => (/* binding */ formatTransitions),
/* harmony export */   g: () => (/* binding */ getDelayedTransitions),
/* harmony export */   h: () => (/* binding */ getCandidates),
/* harmony export */   i: () => (/* binding */ getAllStateNodes),
/* harmony export */   j: () => (/* binding */ getStateNodes),
/* harmony export */   k: () => (/* binding */ createMachineSnapshot),
/* harmony export */   l: () => (/* binding */ isInFinalState),
/* harmony export */   m: () => (/* binding */ mapValues),
/* harmony export */   n: () => (/* binding */ macrostep),
/* harmony export */   o: () => (/* binding */ transitionNode),
/* harmony export */   p: () => (/* binding */ resolveActionsAndContext),
/* harmony export */   q: () => (/* binding */ createInitEvent),
/* harmony export */   r: () => (/* binding */ resolveStateValue),
/* harmony export */   s: () => (/* binding */ microstep),
/* harmony export */   t: () => (/* binding */ toArray),
/* harmony export */   u: () => (/* binding */ getInitialStateNodes),
/* harmony export */   v: () => (/* binding */ toStatePath),
/* harmony export */   w: () => (/* binding */ isStateId),
/* harmony export */   x: () => (/* binding */ getStateNodeByPath),
/* harmony export */   y: () => (/* binding */ getPersistedSnapshot),
/* harmony export */   z: () => (/* binding */ resolveReferencedActor)
/* harmony export */ });
/* unused harmony exports B, C, D, E, F, G, H, I, J, K, Q */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev/dist/xstate-dev.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dev/dist/xstate-dev.development.esm.js");





class Mailbox {
    start() {
        this._active = true;
        this.flush();
    }
    clear() {
        // we can't set _current to null because we might be currently processing
        // and enqueue following clear shouldnt start processing the enqueued item immediately
        if (this._current) {
            this._current.next = null;
            this._last = this._current;
        }
    }
    enqueue(event) {
        const enqueued = {
            value: event,
            next: null
        };
        if (this._current) {
            this._last.next = enqueued;
            this._last = enqueued;
            return;
        }
        this._current = enqueued;
        this._last = enqueued;
        if (this._active) {
            this.flush();
        }
    }
    flush() {
        while(this._current){
            // atm the given _process is responsible for implementing proper try/catch handling
            // we assume here that this won't throw in a way that can affect this mailbox
            const consumed = this._current;
            this._process(consumed.value);
            this._current = consumed.next;
        }
        this._last = null;
    }
    constructor(_process){
        this._process = _process;
        this._active = false;
        this._current = null;
        this._last = null;
    }
}
const STATE_DELIMITER = '.';
const TARGETLESS_KEY = '';
const NULL_EVENT = '';
const STATE_IDENTIFIER = '#';
const WILDCARD = '*';
const XSTATE_INIT = 'xstate.init';
const XSTATE_ERROR = 'xstate.error';
const XSTATE_STOP = 'xstate.stop';
/**
 * Returns an event that represents an implicit event that is sent after the
 * specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */ function createAfterEvent(delayRef, id) {
    return {
        type: `xstate.after.${delayRef}.${id}`
    };
}
/**
 * Returns an event that represents that a final state node has been reached in
 * the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param output The data to pass into the event
 */ function createDoneStateEvent(id, output) {
    return {
        type: `xstate.done.state.${id}`,
        output
    };
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state
 * node, but not when it is canceled.
 *
 * @param invokeId The invoked service ID
 * @param output The data to pass into the event
 */ function createDoneActorEvent(invokeId, output) {
    return {
        type: `xstate.done.actor.${invokeId}`,
        output,
        actorId: invokeId
    };
}
function createErrorActorEvent(id, error) {
    return {
        type: `xstate.error.actor.${id}`,
        error,
        actorId: id
    };
}
function createInitEvent(input) {
    return {
        type: XSTATE_INIT,
        input
    };
}
/**
 * This function makes sure that unhandled errors are thrown in a separate
 * macrotask. It allows those errors to be detected by global error handlers and
 * reported to bug tracking services without interrupting our own stack of
 * execution.
 *
 * @param err Error to be thrown
 */ function reportUnhandledError(err) {
    setTimeout(()=>{
        throw err;
    });
}
const symbolObservable = (()=>typeof Symbol === 'function' && Symbol.observable || '@@observable')();
function matchesState(parentStateId, childStateId) {
    const parentStateValue = toStateValue(parentStateId);
    const childStateValue = toStateValue(childStateId);
    if (typeof childStateValue === 'string') {
        if (typeof parentStateValue === 'string') {
            return childStateValue === parentStateValue;
        }
        // Parent more specific than child
        return false;
    }
    if (typeof parentStateValue === 'string') {
        return parentStateValue in childStateValue;
    }
    return Object.keys(parentStateValue).every((key)=>{
        if (!(key in childStateValue)) {
            return false;
        }
        return matchesState(parentStateValue[key], childStateValue[key]);
    });
}
function toStatePath(stateId) {
    if (isArray(stateId)) {
        return stateId;
    }
    const result = [];
    let segment = '';
    for(let i = 0; i < stateId.length; i++){
        const char = stateId.charCodeAt(i);
        switch(char){
            // \
            case 92:
                // consume the next character
                segment += stateId[i + 1];
                // and skip over it
                i++;
                continue;
            // .
            case 46:
                result.push(segment);
                segment = '';
                continue;
        }
        segment += stateId[i];
    }
    result.push(segment);
    return result;
}
function toStateValue(stateValue) {
    if (isMachineSnapshot(stateValue)) {
        return stateValue.value;
    }
    if (typeof stateValue !== 'string') {
        return stateValue;
    }
    const statePath = toStatePath(stateValue);
    return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
    if (statePath.length === 1) {
        return statePath[0];
    }
    const value = {};
    let marker = value;
    for(let i = 0; i < statePath.length - 1; i++){
        if (i === statePath.length - 2) {
            marker[statePath[i]] = statePath[i + 1];
        } else {
            const previous = marker;
            marker = {};
            previous[statePath[i]] = marker;
        }
    }
    return value;
}
function mapValues(collection, iteratee) {
    const result = {};
    const collectionKeys = Object.keys(collection);
    for(let i = 0; i < collectionKeys.length; i++){
        const key = collectionKeys[i];
        result[key] = iteratee(collection[key], key, collection, i);
    }
    return result;
}
function toArrayStrict(value) {
    if (isArray(value)) {
        return value;
    }
    return [
        value
    ];
}
function toArray(value) {
    if (value === undefined) {
        return [];
    }
    return toArrayStrict(value);
}
function resolveOutput(mapper, context, event, self) {
    if (typeof mapper === 'function') {
        return mapper({
            context,
            event,
            self
        });
    }
    if (!!mapper && typeof mapper === 'object' && Object.values(mapper).some((val)=>typeof val === 'function')) {
        console.warn(`Dynamically mapping values to individual properties is deprecated. Use a single function that returns the mapped object instead.\nFound object containing properties whose values are possibly mapping functions: ${Object.entries(mapper).filter(([, value])=>typeof value === 'function').map(([key, value])=>`\n - ${key}: ${value.toString().replace(/\n\s*/g, '')}`).join('')}`);
    }
    return mapper;
}
function isArray(value) {
    return Array.isArray(value);
}
function isErrorActorEvent(event) {
    return event.type.startsWith('xstate.error.actor');
}
function toTransitionConfigArray(configLike) {
    return toArrayStrict(configLike).map((transitionLike)=>{
        if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string') {
            return {
                target: transitionLike
            };
        }
        return transitionLike;
    });
}
function normalizeTarget(target) {
    if (target === undefined || target === TARGETLESS_KEY) {
        return undefined;
    }
    return toArray(target);
}
function toObserver(nextHandler, errorHandler, completionHandler) {
    var _this, _this1, _this2;
    const isObserver = typeof nextHandler === 'object';
    const self = isObserver ? nextHandler : undefined;
    return {
        next: (_this = isObserver ? nextHandler.next : nextHandler) === null || _this === void 0 ? void 0 : _this.bind(self),
        error: (_this1 = isObserver ? nextHandler.error : errorHandler) === null || _this1 === void 0 ? void 0 : _this1.bind(self),
        complete: (_this2 = isObserver ? nextHandler.complete : completionHandler) === null || _this2 === void 0 ? void 0 : _this2.bind(self)
    };
}
function createInvokeId(stateNodeId, index) {
    return `${index}.${stateNodeId}`;
}
function resolveReferencedActor(machine, src) {
    const match = src.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!match) {
        return machine.implementations.actors[src];
    }
    const [, indexStr, nodeId] = match;
    const node = machine.getStateNodeById(nodeId);
    const invokeConfig = node.config.invoke;
    return (Array.isArray(invokeConfig) ? invokeConfig[indexStr] : invokeConfig).src;
}
function getAllOwnEventDescriptors(snapshot) {
    return [
        ...new Set([
            ...snapshot._nodes.flatMap((sn)=>sn.ownEvents)
        ])
    ];
}
function createScheduledEventId(actorRef, id) {
    return `${actorRef.sessionId}.${id}`;
}
let idCounter = 0;
function createSystem(rootActor, options) {
    const children = new Map();
    const keyedActors = new Map();
    const reverseKeyedActors = new WeakMap();
    const inspectionObservers = new Set();
    const timerMap = {};
    const { clock, logger } = options;
    const scheduler = {
        schedule: (source, target, event, delay, id = Math.random().toString(36).slice(2))=>{
            const scheduledEvent = {
                source,
                target,
                event,
                delay,
                id,
                startedAt: Date.now()
            };
            const scheduledEventId = createScheduledEventId(source, id);
            system._snapshot._scheduledEvents[scheduledEventId] = scheduledEvent;
            const timeout = clock.setTimeout(()=>{
                delete timerMap[scheduledEventId];
                delete system._snapshot._scheduledEvents[scheduledEventId];
                system._relay(source, target, event);
            }, delay);
            timerMap[scheduledEventId] = timeout;
        },
        cancel: (source, id)=>{
            const scheduledEventId = createScheduledEventId(source, id);
            const timeout = timerMap[scheduledEventId];
            delete timerMap[scheduledEventId];
            delete system._snapshot._scheduledEvents[scheduledEventId];
            if (timeout !== undefined) {
                clock.clearTimeout(timeout);
            }
        },
        cancelAll: (actorRef)=>{
            for(const scheduledEventId in system._snapshot._scheduledEvents){
                const scheduledEvent = system._snapshot._scheduledEvents[scheduledEventId];
                if (scheduledEvent.source === actorRef) {
                    scheduler.cancel(actorRef, scheduledEvent.id);
                }
            }
        }
    };
    const sendInspectionEvent = (event)=>{
        if (!inspectionObservers.size) {
            return;
        }
        const resolvedInspectionEvent = {
            ...event,
            rootId: rootActor.sessionId
        };
        inspectionObservers.forEach((observer)=>{
            var _observer_next;
            return (_observer_next = observer.next) === null || _observer_next === void 0 ? void 0 : _observer_next.call(observer, resolvedInspectionEvent);
        });
    };
    var _ref;
    const system = {
        _snapshot: {
            _scheduledEvents: (_ref = (options === null || options === void 0 ? void 0 : options.snapshot) && options.snapshot.scheduler) !== null && _ref !== void 0 ? _ref : {}
        },
        _bookId: ()=>`x:${idCounter++}`,
        _register: (sessionId, actorRef)=>{
            children.set(sessionId, actorRef);
            return sessionId;
        },
        _unregister: (actorRef)=>{
            children.delete(actorRef.sessionId);
            const systemId = reverseKeyedActors.get(actorRef);
            if (systemId !== undefined) {
                keyedActors.delete(systemId);
                reverseKeyedActors.delete(actorRef);
            }
        },
        get: (systemId)=>{
            return keyedActors.get(systemId);
        },
        _set: (systemId, actorRef)=>{
            const existing = keyedActors.get(systemId);
            if (existing && existing !== actorRef) {
                throw new Error(`Actor with system ID '${systemId}' already exists.`);
            }
            keyedActors.set(systemId, actorRef);
            reverseKeyedActors.set(actorRef, systemId);
        },
        inspect: (observerOrFn)=>{
            const observer = toObserver(observerOrFn);
            inspectionObservers.add(observer);
            return {
                unsubscribe () {
                    inspectionObservers.delete(observer);
                }
            };
        },
        _sendInspectionEvent: sendInspectionEvent,
        _relay: (source, target, event)=>{
            system._sendInspectionEvent({
                type: '@xstate.event',
                sourceRef: source,
                actorRef: target,
                event
            });
            target._send(event);
        },
        scheduler,
        getSnapshot: ()=>{
            return {
                _scheduledEvents: {
                    ...system._snapshot._scheduledEvents
                }
            };
        },
        start: ()=>{
            const scheduledEvents = system._snapshot._scheduledEvents;
            system._snapshot._scheduledEvents = {};
            for(const scheduledId in scheduledEvents){
                const { source, target, event, delay, id } = scheduledEvents[scheduledId];
                scheduler.schedule(source, target, event, delay, id);
            }
        },
        _clock: clock,
        _logger: logger
    };
    return system;
}
let executingCustomAction = false;
const $$ACTOR_TYPE = 1;
// those values are currently used by @xstate/react directly so it's important to keep the assigned values in sync
let ProcessingStatus = /*#__PURE__*/ function(ProcessingStatus) {
    ProcessingStatus[ProcessingStatus["NotStarted"] = 0] = "NotStarted";
    ProcessingStatus[ProcessingStatus["Running"] = 1] = "Running";
    ProcessingStatus[ProcessingStatus["Stopped"] = 2] = "Stopped";
    return ProcessingStatus;
}({});
const defaultOptions = {
    clock: {
        setTimeout: (fn, ms)=>{
            return setTimeout(fn, ms);
        },
        clearTimeout: (id)=>{
            return clearTimeout(id);
        }
    },
    logger: console.log.bind(console),
    devTools: false
};
/**
 * An Actor is a running process that can receive events, send events and change
 * its behavior based on the events it receives, which can cause effects outside
 * of the actor. When you run a state machine, it becomes an actor.
 */ class Actor {
    _initState(persistedState) {
        try {
            var _this_options;
            this._snapshot = persistedState ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(persistedState, this._actorScope) : persistedState : this.logic.getInitialSnapshot(this._actorScope, (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.input);
        } catch (err) {
            // if we get here then it means that we assign a value to this._snapshot that is not of the correct type
            // we can't get the true `TSnapshot & { status: 'error'; }`, it's impossible
            // so right now this is a lie of sorts
            this._snapshot = {
                status: 'error',
                output: undefined,
                error: err
            };
        }
    }
    update(snapshot, event) {
        // Update state
        this._snapshot = snapshot;
        // Execute deferred effects
        let deferredFn;
        while(deferredFn = this._deferred.shift()){
            try {
                deferredFn();
            } catch (err) {
                // this error can only be caught when executing *initial* actions
                // it's the only time when we call actions provided by the user through those deferreds
                // when the actor is already running we always execute them synchronously while transitioning
                // no "builtin deferred" should actually throw an error since they are either safe
                // or the control flow is passed through the mailbox and errors should be caught by the `_process` used by the mailbox
                this._deferred.length = 0;
                this._snapshot = {
                    ...snapshot,
                    status: 'error',
                    error: err
                };
            }
        }
        switch(this._snapshot.status){
            case 'active':
                for (const observer of this.observers){
                    try {
                        var _observer_next;
                        (_observer_next = observer.next) === null || _observer_next === void 0 ? void 0 : _observer_next.call(observer, snapshot);
                    } catch (err) {
                        reportUnhandledError(err);
                    }
                }
                break;
            case 'done':
                // next observers are meant to be notified about done snapshots
                // this can be seen as something that is different from how observable work
                // but with observables `complete` callback is called without any arguments
                // it's more ergonomic for XState to treat a done snapshot as a "next" value
                // and the completion event as something that is separate,
                // something that merely follows emitting that done snapshot
                for (const observer of this.observers){
                    try {
                        var _observer_next1;
                        (_observer_next1 = observer.next) === null || _observer_next1 === void 0 ? void 0 : _observer_next1.call(observer, snapshot);
                    } catch (err) {
                        reportUnhandledError(err);
                    }
                }
                this._stopProcedure();
                this._complete();
                this._doneEvent = createDoneActorEvent(this.id, this._snapshot.output);
                if (this._parent) {
                    this.system._relay(this, this._parent, this._doneEvent);
                }
                break;
            case 'error':
                this._error(this._snapshot.error);
                break;
        }
        this.system._sendInspectionEvent({
            type: '@xstate.snapshot',
            actorRef: this,
            event,
            snapshot
        });
    }
    /**
   * Subscribe an observer to an actor’s snapshot values.
   *
   * @remarks
   * The observer will receive the actor’s snapshot value when it is emitted.
   * The observer can be:
   *
   * - A plain function that receives the latest snapshot, or
   * - An observer object whose `.next(snapshot)` method receives the latest
   *   snapshot
   *
   * @example
   *
   * ```ts
   * // Observer as a plain function
   * const subscription = actor.subscribe((snapshot) => {
   *   console.log(snapshot);
   * });
   * ```
   *
   * @example
   *
   * ```ts
   * // Observer as an object
   * const subscription = actor.subscribe({
   *   next(snapshot) {
   *     console.log(snapshot);
   *   },
   *   error(err) {
   *     // ...
   *   },
   *   complete() {
   *     // ...
   *   }
   * });
   * ```
   *
   * The return value of `actor.subscribe(observer)` is a subscription object
   * that has an `.unsubscribe()` method. You can call
   * `subscription.unsubscribe()` to unsubscribe the observer:
   *
   * @example
   *
   * ```ts
   * const subscription = actor.subscribe((snapshot) => {
   *   // ...
   * });
   *
   * // Unsubscribe the observer
   * subscription.unsubscribe();
   * ```
   *
   * When the actor is stopped, all of its observers will automatically be
   * unsubscribed.
   *
   * @param observer - Either a plain function that receives the latest
   *   snapshot, or an observer object whose `.next(snapshot)` method receives
   *   the latest snapshot
   */ subscribe(nextListenerOrObserver, errorListener, completeListener) {
        const observer = toObserver(nextListenerOrObserver, errorListener, completeListener);
        if (this._processingStatus !== ProcessingStatus.Stopped) {
            this.observers.add(observer);
        } else {
            switch(this._snapshot.status){
                case 'done':
                    try {
                        var _observer_complete;
                        (_observer_complete = observer.complete) === null || _observer_complete === void 0 ? void 0 : _observer_complete.call(observer);
                    } catch (err) {
                        reportUnhandledError(err);
                    }
                    break;
                case 'error':
                    {
                        const err = this._snapshot.error;
                        if (!observer.error) {
                            reportUnhandledError(err);
                        } else {
                            try {
                                observer.error(err);
                            } catch (err) {
                                reportUnhandledError(err);
                            }
                        }
                        break;
                    }
            }
        }
        return {
            unsubscribe: ()=>{
                this.observers.delete(observer);
            }
        };
    }
    on(type, handler) {
        let listeners = this.eventListeners.get(type);
        if (!listeners) {
            listeners = new Set();
            this.eventListeners.set(type, listeners);
        }
        const wrappedHandler = handler.bind(undefined);
        listeners.add(wrappedHandler);
        return {
            unsubscribe: ()=>{
                listeners.delete(wrappedHandler);
            }
        };
    }
    /** Starts the Actor from the initial state */ start() {
        if (this._processingStatus === ProcessingStatus.Running) {
            // Do not restart the service if it is already started
            return this;
        }
        if (this._syncSnapshot) {
            this.subscribe({
                next: (snapshot)=>{
                    if (snapshot.status === 'active') {
                        this.system._relay(this, this._parent, {
                            type: `xstate.snapshot.${this.id}`,
                            snapshot
                        });
                    }
                },
                error: ()=>{}
            });
        }
        this.system._register(this.sessionId, this);
        if (this._systemId) {
            this.system._set(this._systemId, this);
        }
        this._processingStatus = ProcessingStatus.Running;
        // TODO: this isn't correct when rehydrating
        const initEvent = createInitEvent(this.options.input);
        this.system._sendInspectionEvent({
            type: '@xstate.event',
            sourceRef: this._parent,
            actorRef: this,
            event: initEvent
        });
        const status = this._snapshot.status;
        switch(status){
            case 'done':
                // a state machine can be "done" upon initialization (it could reach a final state using initial microsteps)
                // we still need to complete observers, flush deferreds etc
                this.update(this._snapshot, initEvent);
                // TODO: rethink cleanup of observers, mailbox, etc
                return this;
            case 'error':
                this._error(this._snapshot.error);
                return this;
        }
        if (!this._parent) {
            this.system.start();
        }
        if (this.logic.start) {
            try {
                this.logic.start(this._snapshot, this._actorScope);
            } catch (err) {
                this._snapshot = {
                    ...this._snapshot,
                    status: 'error',
                    error: err
                };
                this._error(err);
                return this;
            }
        }
        // TODO: this notifies all subscribers but usually this is redundant
        // there is no real change happening here
        // we need to rethink if this needs to be refactored
        this.update(this._snapshot, initEvent);
        if (this.options.devTools) {
            this.attachDevTools();
        }
        this.mailbox.start();
        return this;
    }
    _process(event) {
        let nextState;
        let caughtError;
        try {
            nextState = this.logic.transition(this._snapshot, event, this._actorScope);
        } catch (err) {
            // we wrap it in a box so we can rethrow it later even if falsy value gets caught here
            caughtError = {
                err
            };
        }
        if (caughtError) {
            const { err } = caughtError;
            this._snapshot = {
                ...this._snapshot,
                status: 'error',
                error: err
            };
            this._error(err);
            return;
        }
        this.update(nextState, event);
        if (event.type === XSTATE_STOP) {
            this._stopProcedure();
            this._complete();
        }
    }
    _stop() {
        if (this._processingStatus === ProcessingStatus.Stopped) {
            return this;
        }
        this.mailbox.clear();
        if (this._processingStatus === ProcessingStatus.NotStarted) {
            this._processingStatus = ProcessingStatus.Stopped;
            return this;
        }
        this.mailbox.enqueue({
            type: XSTATE_STOP
        });
        return this;
    }
    /** Stops the Actor and unsubscribe all listeners. */ stop() {
        if (this._parent) {
            throw new Error('A non-root actor cannot be stopped directly.');
        }
        return this._stop();
    }
    _complete() {
        for (const observer of this.observers){
            try {
                var _observer_complete;
                (_observer_complete = observer.complete) === null || _observer_complete === void 0 ? void 0 : _observer_complete.call(observer);
            } catch (err) {
                reportUnhandledError(err);
            }
        }
        this.observers.clear();
    }
    _reportError(err) {
        if (!this.observers.size) {
            if (!this._parent) {
                reportUnhandledError(err);
            }
            return;
        }
        let reportError = false;
        for (const observer of this.observers){
            const errorListener = observer.error;
            reportError || (reportError = !errorListener);
            try {
                errorListener === null || errorListener === void 0 ? void 0 : errorListener(err);
            } catch (err2) {
                reportUnhandledError(err2);
            }
        }
        this.observers.clear();
        if (reportError) {
            reportUnhandledError(err);
        }
    }
    _error(err) {
        this._stopProcedure();
        this._reportError(err);
        if (this._parent) {
            this.system._relay(this, this._parent, createErrorActorEvent(this.id, err));
        }
    }
    // TODO: atm children don't belong entirely to the actor so
    // in a way - it's not even super aware of them
    // so we can't stop them from here but we really should!
    // right now, they are being stopped within the machine's transition
    // but that could throw and leave us with "orphaned" active actors
    _stopProcedure() {
        if (this._processingStatus !== ProcessingStatus.Running) {
            // Actor already stopped; do nothing
            return this;
        }
        // Cancel all delayed events
        this.system.scheduler.cancelAll(this);
        // TODO: mailbox.reset
        this.mailbox.clear();
        // TODO: after `stop` we must prepare ourselves for receiving events again
        // events sent *after* stop signal must be queued
        // it seems like this should be the common behavior for all of our consumers
        // so perhaps this should be unified somehow for all of them
        this.mailbox = new Mailbox(this._process.bind(this));
        this._processingStatus = ProcessingStatus.Stopped;
        this.system._unregister(this);
        return this;
    }
    /** @internal */ _send(event) {
        if (this._processingStatus === ProcessingStatus.Stopped) {
            // do nothing
            {
                const eventString = JSON.stringify(event);
                console.warn(`Event "${event.type}" was sent to stopped actor "${this.id} (${this.sessionId})". This actor has already reached its final state, and will not transition.\nEvent: ${eventString}`);
            }
            return;
        }
        this.mailbox.enqueue(event);
    }
    /**
   * Sends an event to the running Actor to trigger a transition.
   *
   * @param event The event to send
   */ send(event) {
        if (typeof event === 'string') {
            throw new Error(`Only event objects may be sent to actors; use .send({ type: "${event}" }) instead`);
        }
        this.system._relay(undefined, this, event);
    }
    attachDevTools() {
        const { devTools } = this.options;
        if (devTools) {
            const resolvedDevToolsAdapter = typeof devTools === 'function' ? devTools : _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_4__.devToolsAdapter;
            resolvedDevToolsAdapter(this);
        }
    }
    toJSON() {
        return {
            xstate$$type: $$ACTOR_TYPE,
            id: this.id
        };
    }
    /**
   * Obtain the internal state of the actor, which can be persisted.
   *
   * @remarks
   * The internal state can be persisted from any actor, not only machines.
   *
   * Note that the persisted state is not the same as the snapshot from
   * {@link Actor.getSnapshot}. Persisted state represents the internal state of
   * the actor, while snapshots represent the actor's last emitted value.
   *
   * Can be restored with {@link ActorOptions.state}
   * @see https://stately.ai/docs/persistence
   */ getPersistedSnapshot(options) {
        return this.logic.getPersistedSnapshot(this._snapshot, options);
    }
    [symbolObservable]() {
        return this;
    }
    /**
   * Read an actor’s snapshot synchronously.
   *
   * @remarks
   * The snapshot represent an actor's last emitted value.
   *
   * When an actor receives an event, its internal state may change. An actor
   * may emit a snapshot when a state transition occurs.
   *
   * Note that some actors, such as callback actors generated with
   * `fromCallback`, will not emit snapshots.
   * @see {@link Actor.subscribe} to subscribe to an actor’s snapshot values.
   * @see {@link Actor.getPersistedSnapshot} to persist the internal state of an actor (which is more than just a snapshot).
   */ getSnapshot() {
        if (!this._snapshot) {
            throw new Error(`Snapshot can't be read while the actor initializes itself`);
        }
        return this._snapshot;
    }
    /**
   * Creates a new actor instance for the given logic with the provided options,
   * if any.
   *
   * @param logic The logic to create an actor from
   * @param options Actor options
   */ constructor(logic, options){
        this.logic = logic;
        /** The current internal state of the actor. */ this._snapshot = void 0;
        /**
     * The clock that is responsible for setting and clearing timeouts, such as
     * delayed events and transitions.
     */ this.clock = void 0;
        this.options = void 0;
        /** The unique identifier for this actor relative to its parent. */ this.id = void 0;
        this.mailbox = new Mailbox(this._process.bind(this));
        this.observers = new Set();
        this.eventListeners = new Map();
        this.logger = void 0;
        /** @internal */ this._processingStatus = ProcessingStatus.NotStarted;
        // Actor Ref
        this._parent = void 0;
        /** @internal */ this._syncSnapshot = void 0;
        this.ref = void 0;
        // TODO: add typings for system
        this._actorScope = void 0;
        this._systemId = void 0;
        /** The globally unique process ID for this invocation. */ this.sessionId = void 0;
        /** The system to which this actor belongs. */ this.system = void 0;
        this._doneEvent = void 0;
        this.src = void 0;
        // array of functions to defer
        this._deferred = [];
        const resolvedOptions = {
            ...defaultOptions,
            ...options
        };
        const { clock, logger, parent, syncSnapshot, id, systemId, inspect } = resolvedOptions;
        this.system = parent ? parent.system : createSystem(this, {
            clock,
            logger
        });
        if (inspect && !parent) {
            // Always inspect at the system-level
            this.system.inspect(toObserver(inspect));
        }
        this.sessionId = this.system._bookId();
        this.id = id !== null && id !== void 0 ? id : this.sessionId;
        var _options_logger;
        this.logger = (_options_logger = options === null || options === void 0 ? void 0 : options.logger) !== null && _options_logger !== void 0 ? _options_logger : this.system._logger;
        var _options_clock;
        this.clock = (_options_clock = options === null || options === void 0 ? void 0 : options.clock) !== null && _options_clock !== void 0 ? _options_clock : this.system._clock;
        this._parent = parent;
        this._syncSnapshot = syncSnapshot;
        this.options = resolvedOptions;
        var _resolvedOptions_src;
        this.src = (_resolvedOptions_src = resolvedOptions.src) !== null && _resolvedOptions_src !== void 0 ? _resolvedOptions_src : logic;
        this.ref = this;
        this._actorScope = {
            self: this,
            id: this.id,
            sessionId: this.sessionId,
            logger: this.logger,
            defer: (fn)=>{
                this._deferred.push(fn);
            },
            system: this.system,
            stopChild: (child)=>{
                if (child._parent !== this) {
                    throw new Error(`Cannot stop child actor ${child.id} of ${this.id} because it is not a child`);
                }
                child._stop();
            },
            emit: (emittedEvent)=>{
                const listeners = this.eventListeners.get(emittedEvent.type);
                const wildcardListener = this.eventListeners.get('*');
                if (!listeners && !wildcardListener) {
                    return;
                }
                const allListeners = [
                    ...listeners ? listeners.values() : [],
                    ...wildcardListener ? wildcardListener.values() : []
                ];
                for (const handler of allListeners){
                    handler(emittedEvent);
                }
            },
            actionExecutor: (action)=>{
                const exec = ()=>{
                    this._actorScope.system._sendInspectionEvent({
                        type: '@xstate.action',
                        actorRef: this,
                        action: {
                            type: action.type,
                            params: action.params
                        }
                    });
                    if (!action.exec) {
                        return;
                    }
                    const saveExecutingCustomAction = executingCustomAction;
                    try {
                        executingCustomAction = true;
                        action.exec(action.info, action.params);
                    } finally{
                        executingCustomAction = saveExecutingCustomAction;
                    }
                };
                if (this._processingStatus === ProcessingStatus.Running) {
                    exec();
                } else {
                    this._deferred.push(exec);
                }
            }
        };
        // Ensure that the send method is bound to this Actor instance
        // if destructured
        this.send = this.send.bind(this);
        this.system._sendInspectionEvent({
            type: '@xstate.actor',
            actorRef: this
        });
        if (systemId) {
            this._systemId = systemId;
            this.system._set(systemId, this);
        }
        var _options_snapshot;
        this._initState((_options_snapshot = options === null || options === void 0 ? void 0 : options.snapshot) !== null && _options_snapshot !== void 0 ? _options_snapshot : options === null || options === void 0 ? void 0 : options.state);
        if (systemId && this._snapshot.status !== 'active') {
            this.system._unregister(this);
        }
    }
}
/**
 * Creates a new actor instance for the given actor logic with the provided
 * options, if any.
 *
 * @remarks
 * When you create an actor from actor logic via `createActor(logic)`, you
 * implicitly create an actor system where the created actor is the root actor.
 * Any actors spawned from this root actor and its descendants are part of that
 * actor system.
 * @example
 *
 * ```ts
 * import { createActor } from 'xstate';
 * import { someActorLogic } from './someActorLogic.ts';
 *
 * // Creating the actor, which implicitly creates an actor system with itself as the root actor
 * const actor = createActor(someActorLogic);
 *
 * actor.subscribe((snapshot) => {
 *   console.log(snapshot);
 * });
 *
 * // Actors must be started by calling `actor.start()`, which will also start the actor system.
 * actor.start();
 *
 * // Actors can receive events
 * actor.send({ type: 'someEvent' });
 *
 * // You can stop root actors by calling `actor.stop()`, which will also stop the actor system and all actors in that system.
 * actor.stop();
 * ```
 *
 * @param logic - The actor logic to create an actor from. For a state machine
 *   actor logic creator, see {@link createMachine}. Other actor logic creators
 *   include {@link fromCallback}, {@link fromEventObservable},
 *   {@link fromObservable}, {@link fromPromise}, and {@link fromTransition}.
 * @param options - Actor options
 */ function createActor(logic, ...[options]) {
    return new Actor(logic, options);
}
/**
 * Creates a new Interpreter instance for the given machine with the provided
 * options, if any.
 *
 * @deprecated Use `createActor` instead
 * @alias
 */ const interpret = createActor;
/**
 * @deprecated Use `Actor` instead.
 * @alias
 */ function resolveCancel(_, snapshot, actionArgs, actionParams, { sendId }) {
    const resolvedSendId = typeof sendId === 'function' ? sendId(actionArgs, actionParams) : sendId;
    return [
        snapshot,
        {
            sendId: resolvedSendId
        },
        undefined
    ];
}
function executeCancel(actorScope, params) {
    actorScope.defer(()=>{
        actorScope.system.scheduler.cancel(actorScope.self, params.sendId);
    });
}
/**
 * Cancels a delayed `sendTo(...)` action that is waiting to be executed. The
 * canceled `sendTo(...)` action will not send its event or execute, unless the
 * `delay` has already elapsed before `cancel(...)` is called.
 *
 * @example
 *
 * ```ts
 * import { createMachine, sendTo, cancel } from 'xstate';
 *
 * const machine = createMachine({
 *   // ...
 *   on: {
 *     sendEvent: {
 *       actions: sendTo(
 *         'some-actor',
 *         { type: 'someEvent' },
 *         {
 *           id: 'some-id',
 *           delay: 1000
 *         }
 *       )
 *     },
 *     cancelEvent: {
 *       actions: cancel('some-id')
 *     }
 *   }
 * });
 * ```
 *
 * @param sendId The `id` of the `sendTo(...)` action to cancel.
 */ function cancel(sendId) {
    function cancel(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    cancel.type = 'xstate.cancel';
    cancel.sendId = sendId;
    cancel.resolve = resolveCancel;
    cancel.execute = executeCancel;
    return cancel;
}
function resolveSpawn(actorScope, snapshot, actionArgs, _actionParams, { id, systemId, src, input, syncSnapshot }) {
    const logic = typeof src === 'string' ? resolveReferencedActor(snapshot.machine, src) : src;
    const resolvedId = typeof id === 'function' ? id(actionArgs) : id;
    let actorRef;
    let resolvedInput = undefined;
    if (logic) {
        resolvedInput = typeof input === 'function' ? input({
            context: snapshot.context,
            event: actionArgs.event,
            self: actorScope.self
        }) : input;
        actorRef = createActor(logic, {
            id: resolvedId,
            src,
            parent: actorScope.self,
            syncSnapshot,
            systemId,
            input: resolvedInput
        });
    }
    if (!actorRef) {
        console.warn(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-base-to-string
        `Actor type '${src}' not found in machine '${actorScope.id}'.`);
    }
    return [
        cloneMachineSnapshot(snapshot, {
            children: {
                ...snapshot.children,
                [resolvedId]: actorRef
            }
        }),
        {
            id,
            systemId,
            actorRef,
            src,
            input: resolvedInput
        },
        undefined
    ];
}
function executeSpawn(actorScope, { actorRef }) {
    if (!actorRef) {
        return;
    }
    actorScope.defer(()=>{
        if (actorRef._processingStatus === ProcessingStatus.Stopped) {
            return;
        }
        actorRef.start();
    });
}
function spawnChild(...[src, { id, systemId, input, syncSnapshot = false } = {}]) {
    function spawnChild1(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    spawnChild1.type = 'xstate.spawnChild';
    spawnChild1.id = id;
    spawnChild1.systemId = systemId;
    spawnChild1.src = src;
    spawnChild1.input = input;
    spawnChild1.syncSnapshot = syncSnapshot;
    spawnChild1.resolve = resolveSpawn;
    spawnChild1.execute = executeSpawn;
    return spawnChild1;
}
function resolveStop(_, snapshot, args, actionParams, { actorRef }) {
    const actorRefOrString = typeof actorRef === 'function' ? actorRef(args, actionParams) : actorRef;
    const resolvedActorRef = typeof actorRefOrString === 'string' ? snapshot.children[actorRefOrString] : actorRefOrString;
    let children = snapshot.children;
    if (resolvedActorRef) {
        children = {
            ...children
        };
        delete children[resolvedActorRef.id];
    }
    return [
        cloneMachineSnapshot(snapshot, {
            children
        }),
        resolvedActorRef,
        undefined
    ];
}
function executeStop(actorScope, actorRef) {
    if (!actorRef) {
        return;
    }
    // we need to eagerly unregister it here so a new actor with the same systemId can be registered immediately
    // since we defer actual stopping of the actor but we don't defer actor creations (and we can't do that)
    // this could throw on `systemId` collision, for example, when dealing with reentering transitions
    actorScope.system._unregister(actorRef);
    // this allows us to prevent an actor from being started if it gets stopped within the same macrostep
    // this can happen, for example, when the invoking state is being exited immediately by an always transition
    if (actorRef._processingStatus !== ProcessingStatus.Running) {
        actorScope.stopChild(actorRef);
        return;
    }
    // stopping a child enqueues a stop event in the child actor's mailbox
    // we need for all of the already enqueued events to be processed before we stop the child
    // the parent itself might want to send some events to a child (for example from exit actions on the invoking state)
    // and we don't want to ignore those events
    actorScope.defer(()=>{
        actorScope.stopChild(actorRef);
    });
}
/**
 * Stops a child actor.
 *
 * @param actorRef The actor to stop.
 */ function stopChild(actorRef) {
    function stop(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    stop.type = 'xstate.stopChild';
    stop.actorRef = actorRef;
    stop.resolve = resolveStop;
    stop.execute = executeStop;
    return stop;
}
/**
 * Stops a child actor.
 *
 * @deprecated Use `stopChild(...)` instead
 * @alias
 */ const stop = stopChild;
function checkStateIn(snapshot, _, { stateValue }) {
    if (typeof stateValue === 'string' && isStateId(stateValue)) {
        const target = snapshot.machine.getStateNodeById(stateValue);
        return snapshot._nodes.some((sn)=>sn === target);
    }
    return snapshot.matches(stateValue);
}
function stateIn(stateValue) {
    function stateIn() {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    stateIn.check = checkStateIn;
    stateIn.stateValue = stateValue;
    return stateIn;
}
function checkNot(snapshot, { context, event }, { guards }) {
    return !evaluateGuard(guards[0], context, event, snapshot);
}
/**
 * Higher-order guard that evaluates to `true` if the `guard` passed to it
 * evaluates to `false`.
 *
 * @category Guards
 * @example
 *
 * ```ts
 * import { setup, not } from 'xstate';
 *
 * const machine = setup({
 *   guards: {
 *     someNamedGuard: () => false
 *   }
 * }).createMachine({
 *   on: {
 *     someEvent: {
 *       guard: not('someNamedGuard'),
 *       actions: () => {
 *         // will be executed if guard in `not(...)`
 *         // evaluates to `false`
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * @returns A guard
 */ function not(guard) {
    function not(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    not.check = checkNot;
    not.guards = [
        guard
    ];
    return not;
}
function checkAnd(snapshot, { context, event }, { guards }) {
    return guards.every((guard)=>evaluateGuard(guard, context, event, snapshot));
}
/**
 * Higher-order guard that evaluates to `true` if all `guards` passed to it
 * evaluate to `true`.
 *
 * @category Guards
 * @example
 *
 * ```ts
 * import { setup, and } from 'xstate';
 *
 * const machine = setup({
 *   guards: {
 *     someNamedGuard: () => true
 *   }
 * }).createMachine({
 *   on: {
 *     someEvent: {
 *       guard: and([({ context }) => context.value > 0, 'someNamedGuard']),
 *       actions: () => {
 *         // will be executed if all guards in `and(...)`
 *         // evaluate to true
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * @returns A guard action object
 */ function and(guards) {
    function and(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    and.check = checkAnd;
    and.guards = guards;
    return and;
}
function checkOr(snapshot, { context, event }, { guards }) {
    return guards.some((guard)=>evaluateGuard(guard, context, event, snapshot));
}
/**
 * Higher-order guard that evaluates to `true` if any of the `guards` passed to
 * it evaluate to `true`.
 *
 * @category Guards
 * @example
 *
 * ```ts
 * import { setup, or } from 'xstate';
 *
 * const machine = setup({
 *   guards: {
 *     someNamedGuard: () => true
 *   }
 * }).createMachine({
 *   on: {
 *     someEvent: {
 *       guard: or([({ context }) => context.value > 0, 'someNamedGuard']),
 *       actions: () => {
 *         // will be executed if any of the guards in `or(...)`
 *         // evaluate to true
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * @returns A guard action object
 */ function or(guards) {
    function or(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    or.check = checkOr;
    or.guards = guards;
    return or;
}
// TODO: throw on cycles (depth check should be enough)
function evaluateGuard(guard, context, event, snapshot) {
    const { machine } = snapshot;
    const isInline = typeof guard === 'function';
    const resolved = isInline ? guard : machine.implementations.guards[typeof guard === 'string' ? guard : guard.type];
    if (!isInline && !resolved) {
        throw new Error(`Guard '${typeof guard === 'string' ? guard : guard.type}' is not implemented.'.`);
    }
    if (typeof resolved !== 'function') {
        return evaluateGuard(resolved, context, event, snapshot);
    }
    const guardArgs = {
        context,
        event
    };
    const guardParams = isInline || typeof guard === 'string' ? undefined : 'params' in guard ? typeof guard.params === 'function' ? guard.params({
        context,
        event
    }) : guard.params : undefined;
    if (!('check' in resolved)) {
        // the existing type of `.guards` assumes non-nullable `TExpressionGuard`
        // inline guards expect `TExpressionGuard` to be set to `undefined`
        // it's fine to cast this here, our logic makes sure that we call those 2 "variants" correctly
        return resolved(guardArgs, guardParams);
    }
    const builtinGuard = resolved;
    return builtinGuard.check(snapshot, guardArgs, resolved // this holds all params
    );
}
const isAtomicStateNode = (stateNode)=>stateNode.type === 'atomic' || stateNode.type === 'final';
function getChildren(stateNode) {
    return Object.values(stateNode.states).filter((sn)=>sn.type !== 'history');
}
function getProperAncestors(stateNode, toStateNode) {
    const ancestors = [];
    if (toStateNode === stateNode) {
        return ancestors;
    }
    // add all ancestors
    let m = stateNode.parent;
    while(m && m !== toStateNode){
        ancestors.push(m);
        m = m.parent;
    }
    return ancestors;
}
function getAllStateNodes(stateNodes) {
    const nodeSet = new Set(stateNodes);
    const adjList = getAdjList(nodeSet);
    // add descendants
    for (const s of nodeSet){
        // if previously active, add existing child nodes
        if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
            getInitialStateNodesWithTheirAncestors(s).forEach((sn)=>nodeSet.add(sn));
        } else {
            if (s.type === 'parallel') {
                for (const child of getChildren(s)){
                    if (child.type === 'history') {
                        continue;
                    }
                    if (!nodeSet.has(child)) {
                        const initialStates = getInitialStateNodesWithTheirAncestors(child);
                        for (const initialStateNode of initialStates){
                            nodeSet.add(initialStateNode);
                        }
                    }
                }
            }
        }
    }
    // add all ancestors
    for (const s of nodeSet){
        let m = s.parent;
        while(m){
            nodeSet.add(m);
            m = m.parent;
        }
    }
    return nodeSet;
}
function getValueFromAdj(baseNode, adjList) {
    const childStateNodes = adjList.get(baseNode);
    if (!childStateNodes) {
        return {}; // todo: fix?
    }
    if (baseNode.type === 'compound') {
        const childStateNode = childStateNodes[0];
        if (childStateNode) {
            if (isAtomicStateNode(childStateNode)) {
                return childStateNode.key;
            }
        } else {
            return {};
        }
    }
    const stateValue = {};
    for (const childStateNode of childStateNodes){
        stateValue[childStateNode.key] = getValueFromAdj(childStateNode, adjList);
    }
    return stateValue;
}
function getAdjList(stateNodes) {
    const adjList = new Map();
    for (const s of stateNodes){
        if (!adjList.has(s)) {
            adjList.set(s, []);
        }
        if (s.parent) {
            if (!adjList.has(s.parent)) {
                adjList.set(s.parent, []);
            }
            adjList.get(s.parent).push(s);
        }
    }
    return adjList;
}
function getStateValue(rootNode, stateNodes) {
    const config = getAllStateNodes(stateNodes);
    return getValueFromAdj(rootNode, getAdjList(config));
}
function isInFinalState(stateNodeSet, stateNode) {
    if (stateNode.type === 'compound') {
        return getChildren(stateNode).some((s)=>s.type === 'final' && stateNodeSet.has(s));
    }
    if (stateNode.type === 'parallel') {
        return getChildren(stateNode).every((sn)=>isInFinalState(stateNodeSet, sn));
    }
    return stateNode.type === 'final';
}
const isStateId = (str)=>str[0] === STATE_IDENTIFIER;
function getCandidates(stateNode, receivedEventType) {
    const candidates = stateNode.transitions.get(receivedEventType) || [
        ...stateNode.transitions.keys()
    ].filter((eventDescriptor)=>{
        // check if transition is a wildcard transition,
        // which matches any non-transient events
        if (eventDescriptor === WILDCARD) {
            return true;
        }
        if (!eventDescriptor.endsWith('.*')) {
            return false;
        }
        if (/.*\*.+/.test(eventDescriptor)) {
            console.warn(`Wildcards can only be the last token of an event descriptor (e.g., "event.*") or the entire event descriptor ("*"). Check the "${eventDescriptor}" event.`);
        }
        const partialEventTokens = eventDescriptor.split('.');
        const eventTokens = receivedEventType.split('.');
        for(let tokenIndex = 0; tokenIndex < partialEventTokens.length; tokenIndex++){
            const partialEventToken = partialEventTokens[tokenIndex];
            const eventToken = eventTokens[tokenIndex];
            if (partialEventToken === '*') {
                const isLastToken = tokenIndex === partialEventTokens.length - 1;
                if (!isLastToken) {
                    console.warn(`Infix wildcards in transition events are not allowed. Check the "${eventDescriptor}" transition.`);
                }
                return isLastToken;
            }
            if (partialEventToken !== eventToken) {
                return false;
            }
        }
        return true;
    }).sort((a, b)=>b.length - a.length).flatMap((key)=>stateNode.transitions.get(key));
    return candidates;
}
/** All delayed transitions from the config. */ function getDelayedTransitions(stateNode) {
    const afterConfig = stateNode.config.after;
    if (!afterConfig) {
        return [];
    }
    const mutateEntryExit = (delay)=>{
        const afterEvent = createAfterEvent(delay, stateNode.id);
        const eventType = afterEvent.type;
        stateNode.entry.push(raise(afterEvent, {
            id: eventType,
            delay
        }));
        stateNode.exit.push(cancel(eventType));
        return eventType;
    };
    const delayedTransitions = Object.keys(afterConfig).flatMap((delay)=>{
        const configTransition = afterConfig[delay];
        const resolvedTransition = typeof configTransition === 'string' ? {
            target: configTransition
        } : configTransition;
        const resolvedDelay = Number.isNaN(+delay) ? delay : +delay;
        const eventType = mutateEntryExit(resolvedDelay);
        return toArray(resolvedTransition).map((transition)=>({
                ...transition,
                event: eventType,
                delay: resolvedDelay
            }));
    });
    return delayedTransitions.map((delayedTransition)=>{
        const { delay } = delayedTransition;
        return {
            ...formatTransition(stateNode, delayedTransition.event, delayedTransition),
            delay
        };
    });
}
function formatTransition(stateNode, descriptor, transitionConfig) {
    const normalizedTarget = normalizeTarget(transitionConfig.target);
    var _transitionConfig_reenter;
    const reenter = (_transitionConfig_reenter = transitionConfig.reenter) !== null && _transitionConfig_reenter !== void 0 ? _transitionConfig_reenter : false;
    const target = resolveTarget(stateNode, normalizedTarget);
    // TODO: should this be part of a lint rule instead?
    if (transitionConfig.cond) {
        throw new Error(`State "${stateNode.id}" has declared \`cond\` for one of its transitions. This property has been renamed to \`guard\`. Please update your code.`);
    }
    const transition = {
        ...transitionConfig,
        actions: toArray(transitionConfig.actions),
        guard: transitionConfig.guard,
        target,
        source: stateNode,
        reenter,
        eventType: descriptor,
        toJSON: ()=>({
                ...transition,
                source: `#${stateNode.id}`,
                target: target ? target.map((t)=>`#${t.id}`) : undefined
            })
    };
    return transition;
}
function formatTransitions(stateNode) {
    const transitions = new Map();
    if (stateNode.config.on) {
        for (const descriptor of Object.keys(stateNode.config.on)){
            if (descriptor === NULL_EVENT) {
                throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
            }
            const transitionsConfig = stateNode.config.on[descriptor];
            transitions.set(descriptor, toTransitionConfigArray(transitionsConfig).map((t)=>formatTransition(stateNode, descriptor, t)));
        }
    }
    if (stateNode.config.onDone) {
        const descriptor = `xstate.done.state.${stateNode.id}`;
        transitions.set(descriptor, toTransitionConfigArray(stateNode.config.onDone).map((t)=>formatTransition(stateNode, descriptor, t)));
    }
    for (const invokeDef of stateNode.invoke){
        if (invokeDef.onDone) {
            const descriptor = `xstate.done.actor.${invokeDef.id}`;
            transitions.set(descriptor, toTransitionConfigArray(invokeDef.onDone).map((t)=>formatTransition(stateNode, descriptor, t)));
        }
        if (invokeDef.onError) {
            const descriptor = `xstate.error.actor.${invokeDef.id}`;
            transitions.set(descriptor, toTransitionConfigArray(invokeDef.onError).map((t)=>formatTransition(stateNode, descriptor, t)));
        }
        if (invokeDef.onSnapshot) {
            const descriptor = `xstate.snapshot.${invokeDef.id}`;
            transitions.set(descriptor, toTransitionConfigArray(invokeDef.onSnapshot).map((t)=>formatTransition(stateNode, descriptor, t)));
        }
    }
    for (const delayedTransition of stateNode.after){
        let existing = transitions.get(delayedTransition.eventType);
        if (!existing) {
            existing = [];
            transitions.set(delayedTransition.eventType, existing);
        }
        existing.push(delayedTransition);
    }
    return transitions;
}
function formatInitialTransition(stateNode, _target) {
    const resolvedTarget = typeof _target === 'string' ? stateNode.states[_target] : _target ? stateNode.states[_target.target] : undefined;
    if (!resolvedTarget && _target) {
        throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
        `Initial state node "${_target}" not found on parent state node #${stateNode.id}`);
    }
    const transition = {
        source: stateNode,
        actions: !_target || typeof _target === 'string' ? [] : toArray(_target.actions),
        eventType: null,
        reenter: false,
        target: resolvedTarget ? [
            resolvedTarget
        ] : [],
        toJSON: ()=>({
                ...transition,
                source: `#${stateNode.id}`,
                target: resolvedTarget ? [
                    `#${resolvedTarget.id}`
                ] : []
            })
    };
    return transition;
}
function resolveTarget(stateNode, targets) {
    if (targets === undefined) {
        // an undefined target signals that the state node should not transition from that state when receiving that event
        return undefined;
    }
    return targets.map((target)=>{
        if (typeof target !== 'string') {
            return target;
        }
        if (isStateId(target)) {
            return stateNode.machine.getStateNodeById(target);
        }
        const isInternalTarget = target[0] === STATE_DELIMITER;
        // If internal target is defined on machine,
        // do not include machine key on target
        if (isInternalTarget && !stateNode.parent) {
            return getStateNodeByPath(stateNode, target.slice(1));
        }
        const resolvedTarget = isInternalTarget ? stateNode.key + target : target;
        if (stateNode.parent) {
            try {
                const targetStateNode = getStateNodeByPath(stateNode.parent, resolvedTarget);
                return targetStateNode;
            } catch (err) {
                throw new Error(`Invalid transition definition for state node '${stateNode.id}':\n${err.message}`);
            }
        } else {
            throw new Error(`Invalid target: "${target}" is not a valid target from the root node. Did you mean ".${target}"?`);
        }
    });
}
function resolveHistoryDefaultTransition(stateNode) {
    const normalizedTarget = normalizeTarget(stateNode.config.target);
    if (!normalizedTarget) {
        return stateNode.parent.initial;
    }
    return {
        target: normalizedTarget.map((t)=>typeof t === 'string' ? getStateNodeByPath(stateNode.parent, t) : t)
    };
}
function isHistoryNode(stateNode) {
    return stateNode.type === 'history';
}
function getInitialStateNodesWithTheirAncestors(stateNode) {
    const states = getInitialStateNodes(stateNode);
    for (const initialState of states){
        for (const ancestor of getProperAncestors(initialState, stateNode)){
            states.add(ancestor);
        }
    }
    return states;
}
function getInitialStateNodes(stateNode) {
    const set = new Set();
    function iter(descStateNode) {
        if (set.has(descStateNode)) {
            return;
        }
        set.add(descStateNode);
        if (descStateNode.type === 'compound') {
            iter(descStateNode.initial.target[0]);
        } else if (descStateNode.type === 'parallel') {
            for (const child of getChildren(descStateNode)){
                iter(child);
            }
        }
    }
    iter(stateNode);
    return set;
}
/** Returns the child state node from its relative `stateKey`, or throws. */ function getStateNode(stateNode, stateKey) {
    if (isStateId(stateKey)) {
        return stateNode.machine.getStateNodeById(stateKey);
    }
    if (!stateNode.states) {
        throw new Error(`Unable to retrieve child state '${stateKey}' from '${stateNode.id}'; no child states exist.`);
    }
    const result = stateNode.states[stateKey];
    if (!result) {
        throw new Error(`Child state '${stateKey}' does not exist on '${stateNode.id}'`);
    }
    return result;
}
/**
 * Returns the relative state node from the given `statePath`, or throws.
 *
 * @param statePath The string or string array relative path to the state node.
 */ function getStateNodeByPath(stateNode, statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
        try {
            return stateNode.machine.getStateNodeById(statePath);
        } catch  {
        // try individual paths
        // throw e;
        }
    }
    const arrayStatePath = toStatePath(statePath).slice();
    let currentStateNode = stateNode;
    while(arrayStatePath.length){
        const key = arrayStatePath.shift();
        if (!key.length) {
            break;
        }
        currentStateNode = getStateNode(currentStateNode, key);
    }
    return currentStateNode;
}
/**
 * Returns the state nodes represented by the current state value.
 *
 * @param stateValue The state value or State instance
 */ function getStateNodes(stateNode, stateValue) {
    if (typeof stateValue === 'string') {
        const childStateNode = stateNode.states[stateValue];
        if (!childStateNode) {
            throw new Error(`State '${stateValue}' does not exist on '${stateNode.id}'`);
        }
        return [
            stateNode,
            childStateNode
        ];
    }
    const childStateKeys = Object.keys(stateValue);
    const childStateNodes = childStateKeys.map((subStateKey)=>getStateNode(stateNode, subStateKey)).filter(Boolean);
    return [
        stateNode.machine.root,
        stateNode
    ].concat(childStateNodes, childStateKeys.reduce((allSubStateNodes, subStateKey)=>{
        const subStateNode = getStateNode(stateNode, subStateKey);
        if (!subStateNode) {
            return allSubStateNodes;
        }
        const subStateNodes = getStateNodes(subStateNode, stateValue[subStateKey]);
        return allSubStateNodes.concat(subStateNodes);
    }, []));
}
function transitionAtomicNode(stateNode, stateValue, snapshot, event) {
    const childStateNode = getStateNode(stateNode, stateValue);
    const next = childStateNode.next(snapshot, event);
    if (!next || !next.length) {
        return stateNode.next(snapshot, event);
    }
    return next;
}
function transitionCompoundNode(stateNode, stateValue, snapshot, event) {
    const subStateKeys = Object.keys(stateValue);
    const childStateNode = getStateNode(stateNode, subStateKeys[0]);
    const next = transitionNode(childStateNode, stateValue[subStateKeys[0]], snapshot, event);
    if (!next || !next.length) {
        return stateNode.next(snapshot, event);
    }
    return next;
}
function transitionParallelNode(stateNode, stateValue, snapshot, event) {
    const allInnerTransitions = [];
    for (const subStateKey of Object.keys(stateValue)){
        const subStateValue = stateValue[subStateKey];
        if (!subStateValue) {
            continue;
        }
        const subStateNode = getStateNode(stateNode, subStateKey);
        const innerTransitions = transitionNode(subStateNode, subStateValue, snapshot, event);
        if (innerTransitions) {
            allInnerTransitions.push(...innerTransitions);
        }
    }
    if (!allInnerTransitions.length) {
        return stateNode.next(snapshot, event);
    }
    return allInnerTransitions;
}
function transitionNode(stateNode, stateValue, snapshot, event) {
    // leaf node
    if (typeof stateValue === 'string') {
        return transitionAtomicNode(stateNode, stateValue, snapshot, event);
    }
    // compound node
    if (Object.keys(stateValue).length === 1) {
        return transitionCompoundNode(stateNode, stateValue, snapshot, event);
    }
    // parallel node
    return transitionParallelNode(stateNode, stateValue, snapshot, event);
}
function getHistoryNodes(stateNode) {
    return Object.keys(stateNode.states).map((key)=>stateNode.states[key]).filter((sn)=>sn.type === 'history');
}
function isDescendant(childStateNode, parentStateNode) {
    let marker = childStateNode;
    while(marker.parent && marker.parent !== parentStateNode){
        marker = marker.parent;
    }
    return marker.parent === parentStateNode;
}
function hasIntersection(s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    for (const item of set1){
        if (set2.has(item)) {
            return true;
        }
    }
    for (const item of set2){
        if (set1.has(item)) {
            return true;
        }
    }
    return false;
}
function removeConflictingTransitions(enabledTransitions, stateNodeSet, historyValue) {
    const filteredTransitions = new Set();
    for (const t1 of enabledTransitions){
        let t1Preempted = false;
        const transitionsToRemove = new Set();
        for (const t2 of filteredTransitions){
            if (hasIntersection(computeExitSet([
                t1
            ], stateNodeSet, historyValue), computeExitSet([
                t2
            ], stateNodeSet, historyValue))) {
                if (isDescendant(t1.source, t2.source)) {
                    transitionsToRemove.add(t2);
                } else {
                    t1Preempted = true;
                    break;
                }
            }
        }
        if (!t1Preempted) {
            for (const t3 of transitionsToRemove){
                filteredTransitions.delete(t3);
            }
            filteredTransitions.add(t1);
        }
    }
    return Array.from(filteredTransitions);
}
function findLeastCommonAncestor(stateNodes) {
    const [head, ...tail] = stateNodes;
    for (const ancestor of getProperAncestors(head, undefined)){
        if (tail.every((sn)=>isDescendant(sn, ancestor))) {
            return ancestor;
        }
    }
}
function getEffectiveTargetStates(transition, historyValue) {
    if (!transition.target) {
        return [];
    }
    const targets = new Set();
    for (const targetNode of transition.target){
        if (isHistoryNode(targetNode)) {
            if (historyValue[targetNode.id]) {
                for (const node of historyValue[targetNode.id]){
                    targets.add(node);
                }
            } else {
                for (const node of getEffectiveTargetStates(resolveHistoryDefaultTransition(targetNode), historyValue)){
                    targets.add(node);
                }
            }
        } else {
            targets.add(targetNode);
        }
    }
    return [
        ...targets
    ];
}
function getTransitionDomain(transition, historyValue) {
    const targetStates = getEffectiveTargetStates(transition, historyValue);
    if (!targetStates) {
        return;
    }
    if (!transition.reenter && targetStates.every((target)=>target === transition.source || isDescendant(target, transition.source))) {
        return transition.source;
    }
    const lca = findLeastCommonAncestor(targetStates.concat(transition.source));
    if (lca) {
        return lca;
    }
    // at this point we know that it's a root transition since LCA couldn't be found
    if (transition.reenter) {
        return;
    }
    return transition.source.machine.root;
}
function computeExitSet(transitions, stateNodeSet, historyValue) {
    const statesToExit = new Set();
    for (const t of transitions){
        var _t_target;
        if ((_t_target = t.target) === null || _t_target === void 0 ? void 0 : _t_target.length) {
            const domain = getTransitionDomain(t, historyValue);
            if (t.reenter && t.source === domain) {
                statesToExit.add(domain);
            }
            for (const stateNode of stateNodeSet){
                if (isDescendant(stateNode, domain)) {
                    statesToExit.add(stateNode);
                }
            }
        }
    }
    return [
        ...statesToExit
    ];
}
function areStateNodeCollectionsEqual(prevStateNodes, nextStateNodeSet) {
    if (prevStateNodes.length !== nextStateNodeSet.size) {
        return false;
    }
    for (const node of prevStateNodes){
        if (!nextStateNodeSet.has(node)) {
            return false;
        }
    }
    return true;
}
/** https://www.w3.org/TR/scxml/#microstepProcedure */ function microstep(transitions, currentSnapshot, actorScope, event, isInitial, internalQueue) {
    if (!transitions.length) {
        return currentSnapshot;
    }
    const mutStateNodeSet = new Set(currentSnapshot._nodes);
    let historyValue = currentSnapshot.historyValue;
    const filteredTransitions = removeConflictingTransitions(transitions, mutStateNodeSet, historyValue);
    let nextState = currentSnapshot;
    // Exit states
    if (!isInitial) {
        [nextState, historyValue] = exitStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, historyValue, internalQueue, actorScope.actionExecutor);
    }
    // Execute transition content
    nextState = resolveActionsAndContext(nextState, event, actorScope, filteredTransitions.flatMap((t)=>t.actions), internalQueue, undefined);
    // Enter states
    nextState = enterStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial);
    const nextStateNodes = [
        ...mutStateNodeSet
    ];
    if (nextState.status === 'done') {
        nextState = resolveActionsAndContext(nextState, event, actorScope, nextStateNodes.sort((a, b)=>b.order - a.order).flatMap((state)=>state.exit), internalQueue, undefined);
    }
    // eslint-disable-next-line no-useless-catch
    try {
        if (historyValue === currentSnapshot.historyValue && areStateNodeCollectionsEqual(currentSnapshot._nodes, mutStateNodeSet)) {
            return nextState;
        }
        return cloneMachineSnapshot(nextState, {
            _nodes: nextStateNodes,
            historyValue
        });
    } catch (e) {
        // TODO: Refactor this once proper error handling is implemented.
        // See https://github.com/statelyai/rfcs/pull/4
        throw e;
    }
}
function getMachineOutput(snapshot, event, actorScope, rootNode, rootCompletionNode) {
    if (rootNode.output === undefined) {
        return;
    }
    const doneStateEvent = createDoneStateEvent(rootCompletionNode.id, rootCompletionNode.output !== undefined && rootCompletionNode.parent ? resolveOutput(rootCompletionNode.output, snapshot.context, event, actorScope.self) : undefined);
    return resolveOutput(rootNode.output, snapshot.context, doneStateEvent, actorScope.self);
}
function enterStates(currentSnapshot, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial) {
    let nextSnapshot = currentSnapshot;
    const statesToEnter = new Set();
    // those are states that were directly targeted or indirectly targeted by the explicit target
    // in other words, those are states for which initial actions should be executed
    // when we target `#deep_child` initial actions of its ancestors shouldn't be executed
    const statesForDefaultEntry = new Set();
    computeEntrySet(filteredTransitions, historyValue, statesForDefaultEntry, statesToEnter);
    // In the initial state, the root state node is "entered".
    if (isInitial) {
        statesForDefaultEntry.add(currentSnapshot.machine.root);
    }
    const completedNodes = new Set();
    for (const stateNodeToEnter of [
        ...statesToEnter
    ].sort((a, b)=>a.order - b.order)){
        mutStateNodeSet.add(stateNodeToEnter);
        const actions = [];
        // Add entry actions
        actions.push(...stateNodeToEnter.entry);
        for (const invokeDef of stateNodeToEnter.invoke){
            actions.push(spawnChild(invokeDef.src, {
                ...invokeDef,
                syncSnapshot: !!invokeDef.onSnapshot
            }));
        }
        if (statesForDefaultEntry.has(stateNodeToEnter)) {
            const initialActions = stateNodeToEnter.initial.actions;
            actions.push(...initialActions);
        }
        nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, actions, internalQueue, stateNodeToEnter.invoke.map((invokeDef)=>invokeDef.id));
        if (stateNodeToEnter.type === 'final') {
            const parent = stateNodeToEnter.parent;
            let ancestorMarker = (parent === null || parent === void 0 ? void 0 : parent.type) === 'parallel' ? parent : parent === null || parent === void 0 ? void 0 : parent.parent;
            let rootCompletionNode = ancestorMarker || stateNodeToEnter;
            if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'compound') {
                internalQueue.push(createDoneStateEvent(parent.id, stateNodeToEnter.output !== undefined ? resolveOutput(stateNodeToEnter.output, nextSnapshot.context, event, actorScope.self) : undefined));
            }
            while((ancestorMarker === null || ancestorMarker === void 0 ? void 0 : ancestorMarker.type) === 'parallel' && !completedNodes.has(ancestorMarker) && isInFinalState(mutStateNodeSet, ancestorMarker)){
                completedNodes.add(ancestorMarker);
                internalQueue.push(createDoneStateEvent(ancestorMarker.id));
                rootCompletionNode = ancestorMarker;
                ancestorMarker = ancestorMarker.parent;
            }
            if (ancestorMarker) {
                continue;
            }
            nextSnapshot = cloneMachineSnapshot(nextSnapshot, {
                status: 'done',
                output: getMachineOutput(nextSnapshot, event, actorScope, nextSnapshot.machine.root, rootCompletionNode)
            });
        }
    }
    return nextSnapshot;
}
function computeEntrySet(transitions, historyValue, statesForDefaultEntry, statesToEnter) {
    for (const t of transitions){
        const domain = getTransitionDomain(t, historyValue);
        for (const s of t.target || []){
            if (!isHistoryNode(s) && // if the target is different than the source then it will *definitely* be entered
            (t.source !== s || // we know that the domain can't lie within the source
            // if it's different than the source then it's outside of it and it means that the target has to be entered as well
            t.source !== domain || // reentering transitions always enter the target, even if it's the source itself
            t.reenter)) {
                statesToEnter.add(s);
                statesForDefaultEntry.add(s);
            }
            addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
        }
        const targetStates = getEffectiveTargetStates(t, historyValue);
        for (const s of targetStates){
            const ancestors = getProperAncestors(s, domain);
            if ((domain === null || domain === void 0 ? void 0 : domain.type) === 'parallel') {
                ancestors.push(domain);
            }
            addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, !t.source.parent && t.reenter ? undefined : domain);
        }
    }
}
function addDescendantStatesToEnter(stateNode, historyValue, statesForDefaultEntry, statesToEnter) {
    if (isHistoryNode(stateNode)) {
        if (historyValue[stateNode.id]) {
            const historyStateNodes = historyValue[stateNode.id];
            for (const s of historyStateNodes){
                statesToEnter.add(s);
                addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
            }
            for (const s of historyStateNodes){
                addProperAncestorStatesToEnter(s, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
            }
        } else {
            const historyDefaultTransition = resolveHistoryDefaultTransition(stateNode);
            for (const s of historyDefaultTransition.target){
                var _stateNode_parent;
                statesToEnter.add(s);
                if (historyDefaultTransition === ((_stateNode_parent = stateNode.parent) === null || _stateNode_parent === void 0 ? void 0 : _stateNode_parent.initial)) {
                    statesForDefaultEntry.add(stateNode.parent);
                }
                addDescendantStatesToEnter(s, historyValue, statesForDefaultEntry, statesToEnter);
            }
            for (const s of historyDefaultTransition.target){
                addProperAncestorStatesToEnter(s, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
            }
        }
    } else {
        if (stateNode.type === 'compound') {
            const [initialState] = stateNode.initial.target;
            if (!isHistoryNode(initialState)) {
                statesToEnter.add(initialState);
                statesForDefaultEntry.add(initialState);
            }
            addDescendantStatesToEnter(initialState, historyValue, statesForDefaultEntry, statesToEnter);
            addProperAncestorStatesToEnter(initialState, stateNode, statesToEnter, historyValue, statesForDefaultEntry);
        } else {
            if (stateNode.type === 'parallel') {
                for (const child of getChildren(stateNode).filter((sn)=>!isHistoryNode(sn))){
                    if (![
                        ...statesToEnter
                    ].some((s)=>isDescendant(s, child))) {
                        if (!isHistoryNode(child)) {
                            statesToEnter.add(child);
                            statesForDefaultEntry.add(child);
                        }
                        addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
                    }
                }
            }
        }
    }
}
function addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, reentrancyDomain) {
    for (const anc of ancestors){
        if (!reentrancyDomain || isDescendant(anc, reentrancyDomain)) {
            statesToEnter.add(anc);
        }
        if (anc.type === 'parallel') {
            for (const child of getChildren(anc).filter((sn)=>!isHistoryNode(sn))){
                if (![
                    ...statesToEnter
                ].some((s)=>isDescendant(s, child))) {
                    statesToEnter.add(child);
                    addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
                }
            }
        }
    }
}
function addProperAncestorStatesToEnter(stateNode, toStateNode, statesToEnter, historyValue, statesForDefaultEntry) {
    addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, getProperAncestors(stateNode, toStateNode));
}
function exitStates(currentSnapshot, event, actorScope, transitions, mutStateNodeSet, historyValue, internalQueue, _actionExecutor) {
    let nextSnapshot = currentSnapshot;
    const statesToExit = computeExitSet(transitions, mutStateNodeSet, historyValue);
    statesToExit.sort((a, b)=>b.order - a.order);
    let changedHistory;
    // From SCXML algorithm: https://www.w3.org/TR/scxml/#exitStates
    for (const exitStateNode of statesToExit){
        for (const historyNode of getHistoryNodes(exitStateNode)){
            let predicate;
            if (historyNode.history === 'deep') {
                predicate = (sn)=>isAtomicStateNode(sn) && isDescendant(sn, exitStateNode);
            } else {
                predicate = (sn)=>{
                    return sn.parent === exitStateNode;
                };
            }
            changedHistory !== null && changedHistory !== void 0 ? changedHistory : changedHistory = {
                ...historyValue
            };
            changedHistory[historyNode.id] = Array.from(mutStateNodeSet).filter(predicate);
        }
    }
    for (const s of statesToExit){
        nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, [
            ...s.exit,
            ...s.invoke.map((def)=>stopChild(def.id))
        ], internalQueue, undefined);
        mutStateNodeSet.delete(s);
    }
    return [
        nextSnapshot,
        changedHistory || historyValue
    ];
}
function getAction(machine, actionType) {
    return machine.implementations.actions[actionType];
}
function resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, extra, retries) {
    const { machine } = currentSnapshot;
    let intermediateSnapshot = currentSnapshot;
    for (const action of actions){
        const isInline = typeof action === 'function';
        const resolvedAction = isInline ? action : // the existing type of `.actions` assumes non-nullable `TExpressionAction`
        // it's fine to cast this here to get a common type and lack of errors in the rest of the code
        // our logic below makes sure that we call those 2 "variants" correctly
        getAction(machine, typeof action === 'string' ? action : action.type);
        const actionArgs = {
            context: intermediateSnapshot.context,
            event,
            self: actorScope.self,
            system: actorScope.system
        };
        const actionParams = isInline || typeof action === 'string' ? undefined : 'params' in action ? typeof action.params === 'function' ? action.params({
            context: intermediateSnapshot.context,
            event
        }) : action.params : undefined;
        if (!resolvedAction || !('resolve' in resolvedAction)) {
            actorScope.actionExecutor({
                type: typeof action === 'string' ? action : typeof action === 'object' ? action.type : action.name || '(anonymous)',
                info: actionArgs,
                params: actionParams,
                exec: resolvedAction
            });
            continue;
        }
        const builtinAction = resolvedAction;
        const [nextState, params, actions] = builtinAction.resolve(actorScope, intermediateSnapshot, actionArgs, actionParams, resolvedAction, // this holds all params
        extra);
        intermediateSnapshot = nextState;
        if ('retryResolve' in builtinAction) {
            retries === null || retries === void 0 ? void 0 : retries.push([
                builtinAction,
                params
            ]);
        }
        if ('execute' in builtinAction) {
            actorScope.actionExecutor({
                type: builtinAction.type,
                info: actionArgs,
                params,
                exec: builtinAction.execute.bind(null, actorScope, params)
            });
        }
        if (actions) {
            intermediateSnapshot = resolveAndExecuteActionsWithContext(intermediateSnapshot, event, actorScope, actions, extra, retries);
        }
    }
    return intermediateSnapshot;
}
function resolveActionsAndContext(currentSnapshot, event, actorScope, actions, internalQueue, deferredActorIds) {
    const retries = deferredActorIds ? [] : undefined;
    const nextState = resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, {
        internalQueue,
        deferredActorIds
    }, retries);
    retries === null || retries === void 0 ? void 0 : retries.forEach(([builtinAction, params])=>{
        builtinAction.retryResolve(actorScope, nextState, params);
    });
    return nextState;
}
function macrostep(snapshot, event, actorScope, internalQueue) {
    if (event.type === WILDCARD) {
        throw new Error(`An event cannot have the wildcard type ('${WILDCARD}')`);
    }
    let nextSnapshot = snapshot;
    const microstates = [];
    function addMicrostate(microstate, event, transitions) {
        actorScope.system._sendInspectionEvent({
            type: '@xstate.microstep',
            actorRef: actorScope.self,
            event,
            snapshot: microstate,
            _transitions: transitions
        });
        microstates.push(microstate);
    }
    // Handle stop event
    if (event.type === XSTATE_STOP) {
        nextSnapshot = cloneMachineSnapshot(stopChildren(nextSnapshot, event, actorScope), {
            status: 'stopped'
        });
        addMicrostate(nextSnapshot, event, []);
        return {
            snapshot: nextSnapshot,
            microstates
        };
    }
    let nextEvent = event;
    // Assume the state is at rest (no raised events)
    // Determine the next state based on the next microstep
    if (nextEvent.type !== XSTATE_INIT) {
        const currentEvent = nextEvent;
        const isErr = isErrorActorEvent(currentEvent);
        const transitions = selectTransitions(currentEvent, nextSnapshot);
        if (isErr && !transitions.length) {
            // TODO: we should likely only allow transitions selected by very explicit descriptors
            // `*` shouldn't be matched, likely `xstate.error.*` shouldnt be either
            // similarly `xstate.error.actor.*` and `xstate.error.actor.todo.*` have to be considered too
            nextSnapshot = cloneMachineSnapshot(snapshot, {
                status: 'error',
                error: currentEvent.error
            });
            addMicrostate(nextSnapshot, currentEvent, []);
            return {
                snapshot: nextSnapshot,
                microstates
            };
        }
        nextSnapshot = microstep(transitions, snapshot, actorScope, nextEvent, false, // isInitial
        internalQueue);
        addMicrostate(nextSnapshot, currentEvent, transitions);
    }
    let shouldSelectEventlessTransitions = true;
    while(nextSnapshot.status === 'active'){
        let enabledTransitions = shouldSelectEventlessTransitions ? selectEventlessTransitions(nextSnapshot, nextEvent) : [];
        // eventless transitions should always be selected after selecting *regular* transitions
        // by assigning `undefined` to `previousState` we ensure that `shouldSelectEventlessTransitions` gets always computed to true in such a case
        const previousState = enabledTransitions.length ? nextSnapshot : undefined;
        if (!enabledTransitions.length) {
            if (!internalQueue.length) {
                break;
            }
            nextEvent = internalQueue.shift();
            enabledTransitions = selectTransitions(nextEvent, nextSnapshot);
        }
        nextSnapshot = microstep(enabledTransitions, nextSnapshot, actorScope, nextEvent, false, internalQueue);
        shouldSelectEventlessTransitions = nextSnapshot !== previousState;
        addMicrostate(nextSnapshot, nextEvent, enabledTransitions);
    }
    if (nextSnapshot.status !== 'active') {
        stopChildren(nextSnapshot, nextEvent, actorScope);
    }
    return {
        snapshot: nextSnapshot,
        microstates
    };
}
function stopChildren(nextState, event, actorScope) {
    return resolveActionsAndContext(nextState, event, actorScope, Object.values(nextState.children).map((child)=>stopChild(child)), [], undefined);
}
function selectTransitions(event, nextState) {
    return nextState.machine.getTransitionData(nextState, event);
}
function selectEventlessTransitions(nextState, event) {
    const enabledTransitionSet = new Set();
    const atomicStates = nextState._nodes.filter(isAtomicStateNode);
    for (const stateNode of atomicStates){
        loop: for (const s of [
            stateNode
        ].concat(getProperAncestors(stateNode, undefined))){
            if (!s.always) {
                continue;
            }
            for (const transition of s.always){
                if (transition.guard === undefined || evaluateGuard(transition.guard, nextState.context, event, nextState)) {
                    enabledTransitionSet.add(transition);
                    break loop;
                }
            }
        }
    }
    return removeConflictingTransitions(Array.from(enabledTransitionSet), new Set(nextState._nodes), nextState.historyValue);
}
/**
 * Resolves a partial state value with its full representation in the state
 * node's machine.
 *
 * @param stateValue The partial state value to resolve.
 */ function resolveStateValue(rootNode, stateValue) {
    const allStateNodes = getAllStateNodes(getStateNodes(rootNode, stateValue));
    return getStateValue(rootNode, [
        ...allStateNodes
    ]);
}
function isMachineSnapshot(value) {
    return !!value && typeof value === 'object' && 'machine' in value && 'value' in value;
}
const machineSnapshotMatches = function matches(testValue) {
    return matchesState(testValue, this.value);
};
const machineSnapshotHasTag = function hasTag(tag) {
    return this.tags.has(tag);
};
const machineSnapshotCan = function can(event) {
    if (!this.machine) {
        console.warn(`state.can(...) used outside of a machine-created State object; this will always return false.`);
    }
    const transitionData = this.machine.getTransitionData(this, event);
    return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.length) && // Check that at least one transition is not forbidden
    transitionData.some((t)=>t.target !== undefined || t.actions.length);
};
const machineSnapshotToJSON = function toJSON() {
    const { _nodes: nodes, tags, machine, getMeta, toJSON, can, hasTag, matches, ...jsonValues } = this;
    return {
        ...jsonValues,
        tags: Array.from(tags)
    };
};
const machineSnapshotGetMeta = function getMeta() {
    return this._nodes.reduce((acc, stateNode)=>{
        if (stateNode.meta !== undefined) {
            acc[stateNode.id] = stateNode.meta;
        }
        return acc;
    }, {});
};
function createMachineSnapshot(config, machine) {
    return {
        status: config.status,
        output: config.output,
        error: config.error,
        machine,
        context: config.context,
        _nodes: config._nodes,
        value: getStateValue(machine.root, config._nodes),
        tags: new Set(config._nodes.flatMap((sn)=>sn.tags)),
        children: config.children,
        historyValue: config.historyValue || {},
        matches: machineSnapshotMatches,
        hasTag: machineSnapshotHasTag,
        can: machineSnapshotCan,
        getMeta: machineSnapshotGetMeta,
        toJSON: machineSnapshotToJSON
    };
}
function cloneMachineSnapshot(snapshot, config = {}) {
    return createMachineSnapshot({
        ...snapshot,
        ...config
    }, snapshot.machine);
}
function getPersistedSnapshot(snapshot, options) {
    const { _nodes: nodes, tags, machine, children, context, can, hasTag, matches, getMeta, toJSON, ...jsonValues } = snapshot;
    const childrenJson = {};
    for(const id in children){
        const child = children[id];
        if (typeof child.src !== 'string' && (!options || !('__unsafeAllowInlineActors' in options))) {
            throw new Error('An inline child actor cannot be persisted.');
        }
        childrenJson[id] = {
            snapshot: child.getPersistedSnapshot(options),
            src: child.src,
            systemId: child._systemId,
            syncSnapshot: child._syncSnapshot
        };
    }
    const persisted = {
        ...jsonValues,
        context: persistContext(context),
        children: childrenJson
    };
    return persisted;
}
function persistContext(contextPart) {
    let copy;
    for(const key in contextPart){
        const value = contextPart[key];
        if (value && typeof value === 'object') {
            if ('sessionId' in value && 'send' in value && 'ref' in value) {
                copy !== null && copy !== void 0 ? copy : copy = Array.isArray(contextPart) ? contextPart.slice() : {
                    ...contextPart
                };
                copy[key] = {
                    xstate$$type: $$ACTOR_TYPE,
                    id: value.id
                };
            } else {
                const result = persistContext(value);
                if (result !== value) {
                    copy !== null && copy !== void 0 ? copy : copy = Array.isArray(contextPart) ? contextPart.slice() : {
                        ...contextPart
                    };
                    copy[key] = result;
                }
            }
        }
    }
    return copy !== null && copy !== void 0 ? copy : contextPart;
}
function resolveRaise(_, snapshot, args, actionParams, { event: eventOrExpr, id, delay }, { internalQueue }) {
    const delaysMap = snapshot.machine.implementations.delays;
    if (typeof eventOrExpr === 'string') {
        throw new Error(// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Only event objects may be used with raise; use raise({ type: "${eventOrExpr}" }) instead`);
    }
    const resolvedEvent = typeof eventOrExpr === 'function' ? eventOrExpr(args, actionParams) : eventOrExpr;
    let resolvedDelay;
    if (typeof delay === 'string') {
        const configDelay = delaysMap && delaysMap[delay];
        resolvedDelay = typeof configDelay === 'function' ? configDelay(args, actionParams) : configDelay;
    } else {
        resolvedDelay = typeof delay === 'function' ? delay(args, actionParams) : delay;
    }
    if (typeof resolvedDelay !== 'number') {
        internalQueue.push(resolvedEvent);
    }
    return [
        snapshot,
        {
            event: resolvedEvent,
            id,
            delay: resolvedDelay
        },
        undefined
    ];
}
function executeRaise(actorScope, params) {
    const { event, delay, id } = params;
    if (typeof delay === 'number') {
        actorScope.defer(()=>{
            const self = actorScope.self;
            actorScope.system.scheduler.schedule(self, self, event, delay, id);
        });
        return;
    }
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */ function raise(eventOrExpr, options) {
    if (executingCustomAction) {
        console.warn('Custom actions should not call `raise()` directly, as it is not imperative. See https://stately.ai/docs/actions#built-in-actions for more details.');
    }
    function raise(_args, _params) {
        {
            throw new Error(`This isn't supposed to be called`);
        }
    }
    raise.type = 'xstate.raise';
    raise.event = eventOrExpr;
    raise.id = options === null || options === void 0 ? void 0 : options.id;
    raise.delay = options === null || options === void 0 ? void 0 : options.delay;
    raise.resolve = resolveRaise;
    raise.execute = executeRaise;
    return raise;
}



/***/ }),

/***/ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/xstate.development.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/xstate.development.esm.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* unused harmony exports SimulatedClock, StateMachine, StateNode, assertEvent, createMachine, getInitialSnapshot, getNextSnapshot, initialTransition, toPromise, transition, waitFor */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actors_dist_xstate_actors_development_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actors/dist/xstate-actors.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js");
/* harmony import */ var _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raise-1db27a82.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/raise-1db27a82.development.esm.js");
/* harmony import */ var _log_ef30c65f_development_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./log-ef30c65f.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/log-ef30c65f.development.esm.js");
/* harmony import */ var _dev_dist_xstate_dev_development_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dev/dist/xstate-dev.development.esm.js */ "./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dev/dist/xstate-dev.development.esm.js");











/**
 * Asserts that the given event object is of the specified type or types. Throws
 * an error if the event object is not of the specified types.
 *
 * @example
 *
 * ```ts
 * // ...
 * entry: ({ event }) => {
 *   assertEvent(event, 'doNothing');
 *   // event is { type: 'doNothing' }
 * },
 * // ...
 * exit: ({ event }) => {
 *   assertEvent(event, 'greet');
 *   // event is { type: 'greet'; message: string }
 *
 *   assertEvent(event, ['greet', 'notify']);
 *   // event is { type: 'greet'; message: string }
 *   // or { type: 'notify'; message: string; level: 'info' | 'error' }
 * },
 * ```
 */ function assertEvent(event, type) {
    const types = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.t)(type);
    if (!types.includes(event.type)) {
        const typesText = types.length === 1 ? `type "${types[0]}"` : `one of types "${types.join('", "')}"`;
        throw new Error(`Expected event ${JSON.stringify(event)} to have ${typesText}`);
    }
}
const cache = new WeakMap();
function memo(object, key, fn) {
    let memoizedData = cache.get(object);
    if (!memoizedData) {
        memoizedData = {
            [key]: fn()
        };
        cache.set(object, memoizedData);
    } else if (!(key in memoizedData)) {
        memoizedData[key] = fn();
    }
    return memoizedData[key];
}
const EMPTY_OBJECT = {};
const toSerializableAction = (action)=>{
    if (typeof action === 'string') {
        return {
            type: action
        };
    }
    if (typeof action === 'function') {
        if ('resolve' in action) {
            return {
                type: action.type
            };
        }
        return {
            type: action.name
        };
    }
    return action;
};
class StateNode {
    /** @internal */ _initialize() {
        this.transitions = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.f)(this);
        if (this.config.always) {
            this.always = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.a)(this.config.always).map((t)=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.b)(this, _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.N, t));
        }
        Object.keys(this.states).forEach((key)=>{
            this.states[key]._initialize();
        });
    }
    /** The well-structured state node definition. */ get definition() {
        return {
            id: this.id,
            key: this.key,
            version: this.machine.version,
            type: this.type,
            initial: this.initial ? {
                target: this.initial.target,
                source: this,
                actions: this.initial.actions.map(toSerializableAction),
                eventType: null,
                reenter: false,
                toJSON: ()=>({
                        target: this.initial.target.map((t)=>`#${t.id}`),
                        source: `#${this.id}`,
                        actions: this.initial.actions.map(toSerializableAction),
                        eventType: null
                    })
            } : undefined,
            history: this.history,
            states: (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.m)(this.states, (state)=>{
                return state.definition;
            }),
            on: this.on,
            transitions: [
                ...this.transitions.values()
            ].flat().map((t)=>({
                    ...t,
                    actions: t.actions.map(toSerializableAction)
                })),
            entry: this.entry.map(toSerializableAction),
            exit: this.exit.map(toSerializableAction),
            meta: this.meta,
            order: this.order || -1,
            output: this.output,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags
        };
    }
    /** @internal */ toJSON() {
        return this.definition;
    }
    /** The logic invoked as actors by this state node. */ get invoke() {
        return memo(this, 'invoke', ()=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.t)(this.config.invoke).map((invokeConfig, i)=>{
                const { src, systemId } = invokeConfig;
                var _invokeConfig_id;
                const resolvedId = (_invokeConfig_id = invokeConfig.id) !== null && _invokeConfig_id !== void 0 ? _invokeConfig_id : (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.id, i);
                const sourceName = typeof src === 'string' ? src : `xstate.invoke.${(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.id, i)}`;
                return {
                    ...invokeConfig,
                    src: sourceName,
                    id: resolvedId,
                    systemId: systemId,
                    toJSON () {
                        const { onDone, onError, ...invokeDefValues } = invokeConfig;
                        return {
                            ...invokeDefValues,
                            type: 'xstate.invoke',
                            src: sourceName,
                            id: resolvedId
                        };
                    }
                };
            }));
    }
    /** The mapping of events to transitions. */ get on() {
        return memo(this, 'on', ()=>{
            const transitions = this.transitions;
            return [
                ...transitions
            ].flatMap(([descriptor, t])=>t.map((t)=>[
                        descriptor,
                        t
                    ])).reduce((map, [descriptor, transition])=>{
                map[descriptor] = map[descriptor] || [];
                map[descriptor].push(transition);
                return map;
            }, {});
        });
    }
    get after() {
        return memo(this, 'delayedTransitions', ()=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.g)(this));
    }
    get initial() {
        return memo(this, 'initial', ()=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.d)(this, this.config.initial));
    }
    /** @internal */ next(snapshot, event) {
        const eventType = event.type;
        const actions = [];
        let selectedTransition;
        const candidates = memo(this, `candidates-${eventType}`, ()=>(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.h)(this, eventType));
        for (const candidate of candidates){
            const { guard } = candidate;
            const resolvedContext = snapshot.context;
            let guardPassed = false;
            try {
                guardPassed = !guard || (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.e)(guard, resolvedContext, event, snapshot);
            } catch (err) {
                const guardType = typeof guard === 'string' ? guard : typeof guard === 'object' ? guard.type : undefined;
                throw new Error(`Unable to evaluate guard ${guardType ? `'${guardType}' ` : ''}in transition for event '${eventType}' in state node '${this.id}':\n${err.message}`);
            }
            if (guardPassed) {
                actions.push(...candidate.actions);
                selectedTransition = candidate;
                break;
            }
        }
        return selectedTransition ? [
            selectedTransition
        ] : undefined;
    }
    /** All the event types accepted by this state node and its descendants. */ get events() {
        return memo(this, 'events', ()=>{
            const { states } = this;
            const events = new Set(this.ownEvents);
            if (states) {
                for (const stateId of Object.keys(states)){
                    const state = states[stateId];
                    if (state.states) {
                        for (const event of state.events){
                            events.add(`${event}`);
                        }
                    }
                }
            }
            return Array.from(events);
        });
    }
    /**
   * All the events that have transitions directly from this state node.
   *
   * Excludes any inert events.
   */ get ownEvents() {
        const events = new Set([
            ...this.transitions.keys()
        ].filter((descriptor)=>{
            return this.transitions.get(descriptor).some((transition)=>!(!transition.target && !transition.actions.length && !transition.reenter));
        }));
        return Array.from(events);
    }
    constructor(/** The raw config used to create the machine. */ config, options){
        this.config = config;
        /**
     * The relative key of the state node, which represents its location in the
     * overall state value.
     */ this.key = void 0;
        /** The unique ID of the state node. */ this.id = void 0;
        /**
     * The type of this state node:
     *
     * - `'atomic'` - no child state nodes
     * - `'compound'` - nested child state nodes (XOR)
     * - `'parallel'` - orthogonal nested child state nodes (AND)
     * - `'history'` - history state node
     * - `'final'` - final state node
     */ this.type = void 0;
        /** The string path from the root machine node to this node. */ this.path = void 0;
        /** The child state nodes. */ this.states = void 0;
        /**
     * The type of history on this state node. Can be:
     *
     * - `'shallow'` - recalls only top-level historical state value
     * - `'deep'` - recalls historical state value at all levels
     */ this.history = void 0;
        /** The action(s) to be executed upon entering the state node. */ this.entry = void 0;
        /** The action(s) to be executed upon exiting the state node. */ this.exit = void 0;
        /** The parent state node. */ this.parent = void 0;
        /** The root machine node. */ this.machine = void 0;
        /**
     * The meta data associated with this state node, which will be returned in
     * State instances.
     */ this.meta = void 0;
        /**
     * The output data sent with the "xstate.done.state._id_" event if this is a
     * final state node.
     */ this.output = void 0;
        /**
     * The order this state node appears. Corresponds to the implicit document
     * order.
     */ this.order = -1;
        this.description = void 0;
        this.tags = [];
        this.transitions = void 0;
        this.always = void 0;
        this.parent = options._parent;
        this.key = options._key;
        this.machine = options._machine;
        this.path = this.parent ? this.parent.path.concat(this.key) : [];
        this.id = this.config.id || [
            this.machine.id,
            ...this.path
        ].join(_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.S);
        this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
        this.description = this.config.description;
        this.order = this.machine.idMap.size;
        this.machine.idMap.set(this.id, this);
        this.states = this.config.states ? (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.m)(this.config.states, (stateConfig, key)=>{
            const stateNode = new StateNode(stateConfig, {
                _parent: this,
                _key: key,
                _machine: this.machine
            });
            return stateNode;
        }) : EMPTY_OBJECT;
        if (this.type === 'compound' && !this.config.initial) {
            throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
        }
        // History config
        this.history = this.config.history === true ? 'shallow' : this.config.history || false;
        this.entry = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.t)(this.config.entry).slice();
        this.exit = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.t)(this.config.exit).slice();
        this.meta = this.config.meta;
        this.output = this.type === 'final' || !this.parent ? this.config.output : undefined;
        this.tags = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.t)(config.tags).slice();
    }
}
const STATE_IDENTIFIER = '#';
class StateMachine {
    /**
   * Clones this state machine with the provided implementations and merges the
   * `context` (if provided).
   *
   * @param implementations Options (`actions`, `guards`, `actors`, `delays`,
   *   `context`) to recursively merge with the existing options.
   * @returns A new `StateMachine` instance with the provided implementations.
   */ provide(implementations) {
        const { actions, guards, actors, delays } = this.implementations;
        return new StateMachine(this.config, {
            actions: {
                ...actions,
                ...implementations.actions
            },
            guards: {
                ...guards,
                ...implementations.guards
            },
            actors: {
                ...actors,
                ...implementations.actors
            },
            delays: {
                ...delays,
                ...implementations.delays
            }
        });
    }
    resolveState(config) {
        const resolvedStateValue = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.r)(this.root, config.value);
        const nodeSet = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.i)((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.j)(this.root, resolvedStateValue));
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.k)({
            _nodes: [
                ...nodeSet
            ],
            context: config.context || {},
            children: {},
            status: (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.l)(nodeSet, this.root) ? 'done' : config.status || 'active',
            output: config.output,
            error: config.error,
            historyValue: config.historyValue
        }, this);
    }
    /**
   * Determines the next snapshot given the current `snapshot` and received
   * `event`. Calculates a full macrostep from all microsteps.
   *
   * @param snapshot The current snapshot
   * @param event The received event
   */ transition(snapshot, event, actorScope) {
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(snapshot, event, actorScope, []).snapshot;
    }
    /**
   * Determines the next state given the current `state` and `event`. Calculates
   * a microstep.
   *
   * @param state The current state
   * @param event The received event
   */ microstep(snapshot, event, actorScope) {
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(snapshot, event, actorScope, []).microstates;
    }
    getTransitionData(snapshot, event) {
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.o)(this.root, snapshot.value, snapshot, event) || [];
    }
    /**
   * The initial state _before_ evaluating any microsteps. This "pre-initial"
   * state is provided to initial actions executed in the initial state.
   */ getPreInitialState(actorScope, initEvent, internalQueue) {
        const { context } = this.config;
        const preInitial = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.k)({
            context: typeof context !== 'function' && context ? context : {},
            _nodes: [
                this.root
            ],
            children: {},
            status: 'active'
        }, this);
        if (typeof context === 'function') {
            const assignment = ({ spawn, event, self })=>context({
                    spawn,
                    input: event.input,
                    self
                });
            return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.p)(preInitial, initEvent, actorScope, [
                (0,_log_ef30c65f_development_esm_js__WEBPACK_IMPORTED_MODULE_8__.a)(assignment)
            ], internalQueue, undefined);
        }
        return preInitial;
    }
    /**
   * Returns the initial `State` instance, with reference to `self` as an
   * `ActorRef`.
   */ getInitialSnapshot(actorScope, input) {
        const initEvent = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.q)(input); // TODO: fix;
        const internalQueue = [];
        const preInitialState = this.getPreInitialState(actorScope, initEvent, internalQueue);
        const nextState = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.s)([
            {
                target: [
                    ...(0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.u)(this.root)
                ],
                source: this.root,
                reenter: true,
                actions: [],
                eventType: null,
                toJSON: null // TODO: fix
            }
        ], preInitialState, actorScope, initEvent, true, internalQueue);
        const { snapshot: macroState } = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.n)(nextState, initEvent, actorScope, internalQueue);
        return macroState;
    }
    start(snapshot) {
        Object.values(snapshot.children).forEach((child)=>{
            if (child.getSnapshot().status === 'active') {
                child.start();
            }
        });
    }
    getStateNodeById(stateId) {
        const fullPath = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.v)(stateId);
        const relativePath = fullPath.slice(1);
        const resolvedStateId = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.w)(fullPath[0]) ? fullPath[0].slice(STATE_IDENTIFIER.length) : fullPath[0];
        const stateNode = this.idMap.get(resolvedStateId);
        if (!stateNode) {
            throw new Error(`Child state node '#${resolvedStateId}' does not exist on machine '${this.id}'`);
        }
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.x)(stateNode, relativePath);
    }
    get definition() {
        return this.root.definition;
    }
    toJSON() {
        return this.definition;
    }
    getPersistedSnapshot(snapshot, options) {
        return (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.y)(snapshot, options);
    }
    restoreSnapshot(snapshot, _actorScope) {
        const children = {};
        const snapshotChildren = snapshot.children;
        Object.keys(snapshotChildren).forEach((actorId)=>{
            const actorData = snapshotChildren[actorId];
            const childState = actorData.snapshot;
            const src = actorData.src;
            const logic = typeof src === 'string' ? (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.z)(this, src) : src;
            if (!logic) {
                return;
            }
            const actorRef = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.A)(logic, {
                id: actorId,
                parent: _actorScope.self,
                syncSnapshot: actorData.syncSnapshot,
                snapshot: childState,
                src,
                systemId: actorData.systemId
            });
            children[actorId] = actorRef;
        });
        const restoredSnapshot = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.k)({
            ...snapshot,
            children,
            _nodes: Array.from((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.i)((0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.j)(this.root, snapshot.value)))
        }, this);
        const seen = new Set();
        function reviveContext(contextPart, children) {
            if (seen.has(contextPart)) {
                return;
            }
            seen.add(contextPart);
            for(const key in contextPart){
                const value = contextPart[key];
                if (value && typeof value === 'object') {
                    if ('xstate$$type' in value && value.xstate$$type === _raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.$) {
                        contextPart[key] = children[value.id];
                        continue;
                    }
                    reviveContext(value, children);
                }
            }
        }
        reviveContext(restoredSnapshot.context, children);
        return restoredSnapshot;
    }
    constructor(/** The raw config used to create the machine. */ config, implementations){
        this.config = config;
        /** The machine's own version. */ this.version = void 0;
        this.schemas = void 0;
        this.implementations = void 0;
        /** @internal */ this.__xstatenode = true;
        /** @internal */ this.idMap = new Map();
        this.root = void 0;
        this.id = void 0;
        this.states = void 0;
        this.events = void 0;
        this.id = config.id || '(machine)';
        var _implementations_actors, _implementations_actions, _implementations_delays, _implementations_guards;
        this.implementations = {
            actors: (_implementations_actors = implementations === null || implementations === void 0 ? void 0 : implementations.actors) !== null && _implementations_actors !== void 0 ? _implementations_actors : {},
            actions: (_implementations_actions = implementations === null || implementations === void 0 ? void 0 : implementations.actions) !== null && _implementations_actions !== void 0 ? _implementations_actions : {},
            delays: (_implementations_delays = implementations === null || implementations === void 0 ? void 0 : implementations.delays) !== null && _implementations_delays !== void 0 ? _implementations_delays : {},
            guards: (_implementations_guards = implementations === null || implementations === void 0 ? void 0 : implementations.guards) !== null && _implementations_guards !== void 0 ? _implementations_guards : {}
        };
        this.version = this.config.version;
        this.schemas = this.config.schemas;
        this.transition = this.transition.bind(this);
        this.getInitialSnapshot = this.getInitialSnapshot.bind(this);
        this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this);
        this.restoreSnapshot = this.restoreSnapshot.bind(this);
        this.start = this.start.bind(this);
        this.root = new StateNode(config, {
            _key: this.id,
            _machine: this
        });
        this.root._initialize();
        this.states = this.root.states; // TODO: remove!
        this.events = this.root.events;
        if (!('output' in this.root) && Object.values(this.states).some((state)=>state.type === 'final' && 'output' in state)) {
            console.warn('Missing `machine.output` declaration (top-level final state with output detected)');
        }
    }
}
/**
 * Creates a state machine (statechart) with the given configuration.
 *
 * The state machine represents the pure logic of a state machine actor.
 *
 * @example
 *
 * ```ts
 * import { createMachine } from 'xstate';
 *
 * const lightMachine = createMachine({
 *   id: 'light',
 *   initial: 'green',
 *   states: {
 *     green: {
 *       on: {
 *         TIMER: { target: 'yellow' }
 *       }
 *     },
 *     yellow: {
 *       on: {
 *         TIMER: { target: 'red' }
 *       }
 *     },
 *     red: {
 *       on: {
 *         TIMER: { target: 'green' }
 *       }
 *     }
 *   }
 * });
 *
 * const lightActor = createActor(lightMachine);
 * lightActor.start();
 *
 * lightActor.send({ type: 'TIMER' });
 * ```
 *
 * @param config The state machine configuration.
 * @param options DEPRECATED: use `setup({ ... })` or `machine.provide({ ... })`
 *   to provide machine implementations instead.
 */ function createMachine(config, implementations) {
    return new StateMachine(config, implementations);
}
/** @internal */ function createInertActorScope(actorLogic) {
    const self = (0,_raise_1db27a82_development_esm_js__WEBPACK_IMPORTED_MODULE_7__.A)(actorLogic);
    const inertActorScope = {
        self,
        defer: ()=>{},
        id: '',
        logger: ()=>{},
        sessionId: '',
        stopChild: ()=>{},
        system: self.system,
        emit: ()=>{},
        actionExecutor: ()=>{}
    };
    return inertActorScope;
}
/** @deprecated Use `initialTransition(…)` instead. */ function getInitialSnapshot(actorLogic, ...[input]) {
    const actorScope = createInertActorScope(actorLogic);
    return actorLogic.getInitialSnapshot(actorScope, input);
}
/**
 * Determines the next snapshot for the given `actorLogic` based on the given
 * `snapshot` and `event`.
 *
 * If the `snapshot` is `undefined`, the initial snapshot of the `actorLogic` is
 * used.
 *
 * @deprecated Use `transition(…)` instead.
 * @example
 *
 * ```ts
 * import { getNextSnapshot } from 'xstate';
 * import { trafficLightMachine } from './trafficLightMachine.ts';
 *
 * const nextSnapshot = getNextSnapshot(
 *   trafficLightMachine, // actor logic
 *   undefined, // snapshot (or initial state if undefined)
 *   { type: 'TIMER' }
 * ); // event object
 *
 * console.log(nextSnapshot.value);
 * // => 'yellow'
 *
 * const nextSnapshot2 = getNextSnapshot(
 *   trafficLightMachine, // actor logic
 *   nextSnapshot, // snapshot
 *   { type: 'TIMER' }
 * ); // event object
 *
 * console.log(nextSnapshot2.value);
 * // =>'red'
 * ```
 */ function getNextSnapshot(actorLogic, snapshot, event) {
    const inertActorScope = createInertActorScope(actorLogic);
    inertActorScope.self._snapshot = snapshot;
    return actorLogic.transition(snapshot, event, inertActorScope);
}
// at the moment we allow extra actors - ones that are not specified by `children`
// this could be reconsidered in the future
function setup({ schemas, actors, actions, guards, delays }) {
    return {
        createMachine: (config)=>createMachine({
                ...config,
                schemas
            }, {
                actors,
                actions,
                guards,
                delays
            })
    };
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class SimulatedClock {
    now() {
        return this._now;
    }
    getId() {
        return this._id++;
    }
    setTimeout(fn, timeout) {
        this._flushingInvalidated = this._flushing;
        const id = this.getId();
        this.timeouts.set(id, {
            start: this.now(),
            timeout,
            fn
        });
        return id;
    }
    clearTimeout(id) {
        this._flushingInvalidated = this._flushing;
        this.timeouts.delete(id);
    }
    set(time) {
        if (this._now > time) {
            throw new Error('Unable to travel back in time');
        }
        this._now = time;
        this.flushTimeouts();
    }
    flushTimeouts() {
        if (this._flushing) {
            this._flushingInvalidated = true;
            return;
        }
        this._flushing = true;
        const sorted = [
            ...this.timeouts
        ].sort(([_idA, timeoutA], [_idB, timeoutB])=>{
            const endA = timeoutA.start + timeoutA.timeout;
            const endB = timeoutB.start + timeoutB.timeout;
            return endB > endA ? -1 : 1;
        });
        for (const [id, timeout] of sorted){
            if (this._flushingInvalidated) {
                this._flushingInvalidated = false;
                this._flushing = false;
                this.flushTimeouts();
                return;
            }
            if (this.now() - timeout.start >= timeout.timeout) {
                this.timeouts.delete(id);
                timeout.fn.call(null);
            }
        }
        this._flushing = false;
    }
    increment(ms) {
        this._now += ms;
        this.flushTimeouts();
    }
    constructor(){
        this.timeouts = new Map();
        this._now = 0;
        this._id = 0;
        this._flushing = false;
        this._flushingInvalidated = false;
    }
}
/**
 * Returns a promise that resolves to the `output` of the actor when it is done.
 *
 * @example
 *
 * ```ts
 * const machine = createMachine({
 *   // ...
 *   output: {
 *     count: 42
 *   }
 * });
 *
 * const actor = createActor(machine);
 *
 * actor.start();
 *
 * const output = await toPromise(actor);
 *
 * console.log(output);
 * // logs { count: 42 }
 * ```
 */ function toPromise(actor) {
    return new Promise((resolve, reject)=>{
        actor.subscribe({
            complete: ()=>{
                resolve(actor.getSnapshot().output);
            },
            error: reject
        });
    });
}
/**
 * Given actor `logic`, a `snapshot`, and an `event`, returns a tuple of the
 * `nextSnapshot` and `actions` to execute.
 *
 * This is a pure function that does not execute `actions`.
 */ function transition(logic, snapshot, event) {
    const executableActions = [];
    const actorScope = createInertActorScope(logic);
    actorScope.actionExecutor = (action)=>{
        executableActions.push(action);
    };
    const nextSnapshot = logic.transition(snapshot, event, actorScope);
    return [
        nextSnapshot,
        executableActions
    ];
}
/**
 * Given actor `logic` and optional `input`, returns a tuple of the
 * `nextSnapshot` and `actions` to execute from the initial transition (no
 * previous state).
 *
 * This is a pure function that does not execute `actions`.
 */ function initialTransition(logic, ...[input]) {
    const executableActions = [];
    const actorScope = createInertActorScope(logic);
    actorScope.actionExecutor = (action)=>{
        executableActions.push(action);
    };
    const nextSnapshot = logic.getInitialSnapshot(actorScope, input);
    return [
        nextSnapshot,
        executableActions
    ];
}
const defaultWaitForOptions = {
    timeout: Infinity // much more than 10 seconds
};
/**
 * Subscribes to an actor ref and waits for its emitted value to satisfy a
 * predicate, and then resolves with that value. Will throw if the desired state
 * is not reached after an optional timeout. (defaults to Infinity).
 *
 * @example
 *
 * ```js
 * const state = await waitFor(someService, (state) => {
 *   return state.hasTag('loaded');
 * });
 *
 * state.hasTag('loaded'); // true
 * ```
 *
 * @param actorRef The actor ref to subscribe to
 * @param predicate Determines if a value matches the condition to wait for
 * @param options
 * @returns A promise that eventually resolves to the emitted value that matches
 *   the condition
 */ function waitFor(actorRef, predicate, options) {
    const resolvedOptions = {
        ...defaultWaitForOptions,
        ...options
    };
    return new Promise((res, rej)=>{
        const { signal } = resolvedOptions;
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            rej(signal.reason);
            return;
        }
        let done = false;
        if (resolvedOptions.timeout < 0) {
            console.error('`timeout` passed to `waitFor` is negative and it will reject its internal promise immediately.');
        }
        const handle = resolvedOptions.timeout === Infinity ? undefined : setTimeout(()=>{
            dispose();
            rej(new Error(`Timeout of ${resolvedOptions.timeout} ms exceeded`));
        }, resolvedOptions.timeout);
        const dispose = ()=>{
            clearTimeout(handle);
            done = true;
            sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
            if (abortListener) {
                signal.removeEventListener('abort', abortListener);
            }
        };
        function checkEmitted(emitted) {
            if (predicate(emitted)) {
                dispose();
                res(emitted);
            }
        }
        /**
     * If the `signal` option is provided, this will be the listener for its
     * `abort` event
     */ let abortListener;
        // eslint-disable-next-line prefer-const
        let sub; // avoid TDZ when disposing synchronously
        // See if the current snapshot already matches the predicate
        checkEmitted(actorRef.getSnapshot());
        if (done) {
            return;
        }
        // only define the `abortListener` if the `signal` option is provided
        if (signal) {
            abortListener = ()=>{
                dispose();
                // XState does not "own" the signal, so we should reject with its reason (if any)
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                rej(signal.reason);
            };
            signal.addEventListener('abort', abortListener);
        }
        sub = actorRef.subscribe({
            next: checkEmitted,
            error: (err)=>{
                dispose();
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                rej(err);
            },
            complete: ()=>{
                dispose();
                rej(new Error(`Actor terminated without satisfying predicate`));
            }
        });
        if (done) {
            sub.unsubscribe();
        }
    });
}



/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var isObject = require('../internals/is-object');\n| var $String = String;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-method-is-strict.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-method-is-strict.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function() {
            return 1;
        }, 1);
    });
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-reduce.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-reduce.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| import \"core-js/modules/web.self.js\";\n| var aCallable = require('../internals/a-callable');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-is-node.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-is-node.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ENVIRONMENT = __webpack_require__(/*! ../internals/environment */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment.js");
module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global Bun, Deno -- detection */ var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
}();


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
        target = globalThis;
    } else if (STATIC) {
        target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
        target = globalThis[TARGET] && globalThis[TARGET].prototype;
    }
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js");
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js ***!
  \*****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.self.js\";\n| var check = function(it) {\n|     return it && it.Math === Math && it;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js ***!
  \**********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.object.has-own.js\";\n| var uncurryThis = require('../internals/function-uncurry-this');\n| var toObject = require('../internals/to-object');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js");
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
    store.inspectSource = function(it) {
        return functionToString(it);
    };
}
module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js ***!
  \********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
        name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
        defineProperty(value, 'length', {
            value: options.arity
        });
    }
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
        state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var DESCRIPTORS = require('../internals/descriptors');\n| var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js ***!
  \**************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| var uncurryThis = require('../internals/function-uncurry-this');\n| var hasOwn = require('../internals/has-own-property');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var isNullOrUndefined = require('../internals/is-null-or-undefined');\n| var $TypeError = TypeError;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| var IS_PURE = require('../internals/is-pure');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var call = require('../internals/function-call');\n| var isObject = require('../internals/is-object');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js ***!
  \*********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.includes.js\";\n| var $ = require('../internals/export');\n| var $includes = require('../internals/array-includes').includes;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js ***!
  \*****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| import \"core-js/modules/es.error.cause.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/environment-is-node */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-is-node.js");
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| /* eslint-disable no-unused-vars -- required for functions `.length` */ var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/.pnpm/xstate@5.19.0/node_modules/xstate/dist/xstate.development.esm.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztJQUFNekUsUUFBUUw7QUFBTyxHQUFHO0lBQ2xEbFQsUUFBUSxTQUFTQSxPQUFPaVksV0FBVyxrQkFBa0IsR0FBbkI7UUFDaEMsSUFBSTF2QixTQUFTc3JCLFVBQVV0ckIsTUFBTTtRQUM3QixPQUFPbXZCLFFBQVEsSUFBSSxFQUFFTyxZQUFZMXZCLFFBQVFBLFNBQVMsSUFBSXNyQixTQUFTLENBQUMsRUFBRSxHQUFHeHpCO0lBQ3ZFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS94c3RhdGVANS4xOS4wL25vZGVfbW9kdWxlcy94c3RhdGUvYWN0b3JzL2Rpc3QveHN0YXRlLWFjdG9ycy5kZXZlbG9wbWVudC5lc20uanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0veHN0YXRlQDUuMTkuMC9ub2RlX21vZHVsZXMveHN0YXRlL2Rldi9kaXN0L3hzdGF0ZS1kZXYuZGV2ZWxvcG1lbnQuZXNtLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3hzdGF0ZUA1LjE5LjAvbm9kZV9tb2R1bGVzL3hzdGF0ZS9kaXN0L2xvZy1lZjMwYzY1Zi5kZXZlbG9wbWVudC5lc20uanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0veHN0YXRlQDUuMTkuMC9ub2RlX21vZHVsZXMveHN0YXRlL2Rpc3QvcmFpc2UtMWRiMjdhODIuZGV2ZWxvcG1lbnQuZXNtLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3hzdGF0ZUA1LjE5LjAvbm9kZV9tb2R1bGVzL3hzdGF0ZS9kaXN0L3hzdGF0ZS5kZXZlbG9wbWVudC5lc20uanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWCBhcyBYU1RBVEVfU1RPUCwgQSBhcyBjcmVhdGVBY3RvciB9IGZyb20gJy4uLy4uL2Rpc3QvcmFpc2UtMWRiMjdhODIuZGV2ZWxvcG1lbnQuZXNtLmpzJztcbmltcG9ydCAnLi4vLi4vZGV2L2Rpc3QveHN0YXRlLWRldi5kZXZlbG9wbWVudC5lc20uanMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYWN0b3IgY3JlYXRlZCBieSBgZnJvbVRyYW5zaXRpb25gLlxuICpcbiAqIFRoZSB0eXBlIG9mIGBzZWxmYCB3aXRoaW4gdGhlIGFjdG9yJ3MgbG9naWMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHtcbiAqICAgZnJvbVRyYW5zaXRpb24sXG4gKiAgIGNyZWF0ZUFjdG9yLFxuICogICB0eXBlIEFueUFjdG9yU3lzdGVtXG4gKiB9IGZyb20gJ3hzdGF0ZSc7XG4gKlxuICogLy8qIFRoZSBhY3RvcidzIHN0b3JlZCBjb250ZXh0LlxuICogdHlwZSBDb250ZXh0ID0ge1xuICogICAvLyBUaGUgY3VycmVudCBjb3VudC5cbiAqICAgY291bnQ6IG51bWJlcjtcbiAqICAgLy8gVGhlIGFtb3VudCB0byBpbmNyZWFzZSBgY291bnRgIGJ5LlxuICogICBzdGVwOiBudW1iZXI7XG4gKiB9O1xuICogLy8gVGhlIGV2ZW50cyB0aGUgYWN0b3IgcmVjZWl2ZXMuXG4gKiB0eXBlIEV2ZW50ID0geyB0eXBlOiAnaW5jcmVtZW50JyB9O1xuICogLy8gVGhlIGFjdG9yJ3MgaW5wdXQuXG4gKiB0eXBlIElucHV0ID0geyBzdGVwPzogbnVtYmVyIH07XG4gKlxuICogLy8gQWN0b3IgbG9naWMgdGhhdCBpbmNyZW1lbnRzIGBjb3VudGAgYnkgYHN0ZXBgIHdoZW4gaXQgcmVjZWl2ZXMgYW4gZXZlbnQgb2ZcbiAqIC8vIHR5cGUgYGluY3JlbWVudGAuXG4gKiBjb25zdCBsb2dpYyA9IGZyb21UcmFuc2l0aW9uPENvbnRleHQsIEV2ZW50LCBBbnlBY3RvclN5c3RlbSwgSW5wdXQ+KFxuICogICAoc3RhdGUsIGV2ZW50LCBhY3RvclNjb3BlKSA9PiB7XG4gKiAgICAgYWN0b3JTY29wZS5zZWxmO1xuICogICAgIC8vICAgICAgICAgXj8gVHJhbnNpdGlvbkFjdG9yUmVmPENvbnRleHQsIEV2ZW50PlxuICpcbiAqICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2luY3JlbWVudCcpIHtcbiAqICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgIC4uLnN0YXRlLFxuICogICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyBzdGF0ZS5zdGVwXG4gKiAgICAgICB9O1xuICogICAgIH1cbiAqICAgICByZXR1cm4gc3RhdGU7XG4gKiAgIH0sXG4gKiAgICh7IGlucHV0LCBzZWxmIH0pID0+IHtcbiAqICAgICBzZWxmO1xuICogICAgIC8vIF4/IFRyYW5zaXRpb25BY3RvclJlZjxDb250ZXh0LCBFdmVudD5cbiAqXG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGNvdW50OiAwLFxuICogICAgICAgc3RlcDogaW5wdXQuc3RlcCA/PyAxXG4gKiAgICAgfTtcbiAqICAgfVxuICogKTtcbiAqXG4gKiBjb25zdCBhY3RvciA9IGNyZWF0ZUFjdG9yKGxvZ2ljLCB7IGlucHV0OiB7IHN0ZXA6IDEwIH0gfSk7XG4gKiAvLyAgICBePyBUcmFuc2l0aW9uQWN0b3JSZWY8Q29udGV4dCwgRXZlbnQ+XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tVHJhbnNpdGlvbn1cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYWN0b3IgbG9naWMgZ2l2ZW4gYSB0cmFuc2l0aW9uIGZ1bmN0aW9uIGFuZCBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAqXG4gKiBBIOKAnHRyYW5zaXRpb24gZnVuY3Rpb27igJ0gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBjdXJyZW50IGBzdGF0ZWAgYW5kXG4gKiByZWNlaXZlZCBgZXZlbnRgIG9iamVjdCBhcyBhcmd1bWVudHMsIGFuZCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlLCBzaW1pbGFyIHRvXG4gKiBhIHJlZHVjZXIuXG4gKlxuICogQWN0b3JzIGNyZWF0ZWQgZnJvbSB0cmFuc2l0aW9uIGxvZ2ljICjigJx0cmFuc2l0aW9uIGFjdG9yc+KAnSkgY2FuOlxuICpcbiAqIC0gUmVjZWl2ZSBldmVudHNcbiAqIC0gRW1pdCBzbmFwc2hvdHMgb2YgaXRzIHN0YXRlXG4gKlxuICogVGhlIHRyYW5zaXRpb24gZnVuY3Rpb27igJlzIGBzdGF0ZWAgaXMgdXNlZCBhcyBpdHMgdHJhbnNpdGlvbiBhY3RvcuKAmXNcbiAqIGBjb250ZXh0YC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIFwic3RhdGVcIiBmb3IgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ5IHRoZSBpbml0aWFsXG4gKiBzdGF0ZSBhcmd1bWVudCwgYW5kIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgU3RhdGUgb2JqZWN0IG9mIGFuIGFjdG9yIG9yIGFcbiAqIHN0YXRlIHdpdGhpbiBhIG1hY2hpbmUgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB0cmFuc2l0aW9uTG9naWMgPSBmcm9tVHJhbnNpdGlvbihcbiAqICAgKHN0YXRlLCBldmVudCkgPT4ge1xuICogICAgIGlmIChldmVudC50eXBlID09PSAnaW5jcmVtZW50Jykge1xuICogICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIDFcbiAqICAgICAgIH07XG4gKiAgICAgfVxuICogICAgIHJldHVybiBzdGF0ZTtcbiAqICAgfSxcbiAqICAgeyBjb3VudDogMCB9XG4gKiApO1xuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25BY3RvciA9IGNyZWF0ZUFjdG9yKHRyYW5zaXRpb25Mb2dpYyk7XG4gKiB0cmFuc2l0aW9uQWN0b3Iuc3Vic2NyaWJlKChzbmFwc2hvdCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XG4gKiB9KTtcbiAqIHRyYW5zaXRpb25BY3Rvci5zdGFydCgpO1xuICogLy8gPT4ge1xuICogLy8gICBzdGF0dXM6ICdhY3RpdmUnLFxuICogLy8gICBjb250ZXh0OiB7IGNvdW50OiAwIH0sXG4gKiAvLyAgIC4uLlxuICogLy8gfVxuICpcbiAqIHRyYW5zaXRpb25BY3Rvci5zZW5kKHsgdHlwZTogJ2luY3JlbWVudCcgfSk7XG4gKiAvLyA9PiB7XG4gKiAvLyAgIHN0YXR1czogJ2FjdGl2ZScsXG4gKiAvLyAgIGNvbnRleHQ6IHsgY291bnQ6IDEgfSxcbiAqIC8vICAgLi4uXG4gKiAvLyB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdHJhbnNpdGlvbiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB1c2VkIHRvIGRlc2NyaWJlIHRoZSB0cmFuc2l0aW9uXG4gKiAgIGxvZ2ljLiBJdCBzaG91bGQgcmV0dXJuIHRoZSBuZXh0IHN0YXRlIGdpdmVuIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBldmVudC5cbiAqICAgSXQgcmVjZWl2ZXMgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG4gKlxuICogICAtIGBzdGF0ZWAgLSB0aGUgY3VycmVudCBzdGF0ZS5cbiAqICAgLSBgZXZlbnRgIC0gdGhlIHJlY2VpdmVkIGV2ZW50LlxuICogICAtIGBhY3RvclNjb3BlYCAtIHRoZSBhY3RvciBzY29wZSBvYmplY3QsIHdpdGggcHJvcGVydGllcyBsaWtlIGBzZWxmYCBhbmRcbiAqICAgICAgIGBzeXN0ZW1gLlxuICpcbiAqIEBwYXJhbSBpbml0aWFsQ29udGV4dCBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgdHJhbnNpdGlvbiBmdW5jdGlvbiwgZWl0aGVyIGFuXG4gKiAgIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlLCBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBzdGF0ZSBvYmplY3QuXG4gKiAgIElmIGEgZnVuY3Rpb24sIGl0IHdpbGwgcmVjZWl2ZSBhcyBpdHMgb25seSBhcmd1bWVudCBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqICAgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGBpbnB1dGAgLSB0aGUgYGlucHV0YCBwcm92aWRlZCB0byBpdHMgcGFyZW50IHRyYW5zaXRpb24gYWN0b3IuXG4gKiAgIC0gYHNlbGZgIC0gYSByZWZlcmVuY2UgdG8gaXRzIHBhcmVudCB0cmFuc2l0aW9uIGFjdG9yLlxuICpcbiAqIEByZXR1cm5zIEFjdG9yIGxvZ2ljXG4gKiBAc2VlIHtAbGluayBodHRwczovL3N0YXRlbHkuYWkvZG9jcy9pbnB1dCB8IElucHV0IGRvY3N9IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyBpbnB1dCBpcyBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZnJvbVRyYW5zaXRpb24odHJhbnNpdGlvbiwgaW5pdGlhbENvbnRleHQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maWc6IHRyYW5zaXRpb24sXG4gICAgdHJhbnNpdGlvbjogKHNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgIGNvbnRleHQ6IHRyYW5zaXRpb24oc25hcHNob3QuY29udGV4dCwgZXZlbnQsIGFjdG9yU2NvcGUpXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFNuYXBzaG90OiAoXywgaW5wdXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgIG91dHB1dDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0OiB0eXBlb2YgaW5pdGlhbENvbnRleHQgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsQ29udGV4dCh7XG4gICAgICAgICAgaW5wdXRcbiAgICAgICAgfSkgOiBpbml0aWFsQ29udGV4dFxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldFBlcnNpc3RlZFNuYXBzaG90OiBzbmFwc2hvdCA9PiBzbmFwc2hvdCxcbiAgICByZXN0b3JlU25hcHNob3Q6IHNuYXBzaG90ID0+IHNuYXBzaG90XG4gIH07XG59XG5cbmNvbnN0IGluc3RhbmNlU3RhdGVzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFjdG9yIGNyZWF0ZWQgYnkgYGZyb21DYWxsYmFja2AuXG4gKlxuICogVGhlIHR5cGUgb2YgYHNlbGZgIHdpdGhpbiB0aGUgYWN0b3IncyBsb2dpYy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tQ2FsbGJhY2ssIGNyZWF0ZUFjdG9yIH0gZnJvbSAneHN0YXRlJztcbiAqXG4gKiAvLyBUaGUgZXZlbnRzIHRoZSBhY3RvciByZWNlaXZlcy5cbiAqIHR5cGUgRXZlbnQgPSB7IHR5cGU6ICdzb21lRXZlbnQnIH07XG4gKiAvLyBUaGUgYWN0b3IncyBpbnB1dC5cbiAqIHR5cGUgSW5wdXQgPSB7IG5hbWU6IHN0cmluZyB9O1xuICpcbiAqIC8vIEFjdG9yIGxvZ2ljIHRoYXQgbG9ncyB3aGVuZXZlciBpdCByZWNlaXZlcyBhbiBldmVudCBvZiB0eXBlIGBzb21lRXZlbnRgLlxuICogY29uc3QgbG9naWMgPSBmcm9tQ2FsbGJhY2s8RXZlbnQsIElucHV0PigoeyBzZWxmLCBpbnB1dCwgcmVjZWl2ZSB9KSA9PiB7XG4gKiAgIHNlbGY7XG4gKiAgIC8vIF4/IENhbGxiYWNrQWN0b3JSZWY8RXZlbnQsIElucHV0PlxuICpcbiAqICAgcmVjZWl2ZSgoZXZlbnQpID0+IHtcbiAqICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3NvbWVFdmVudCcpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKGAke2lucHV0Lm5hbWV9OiByZWNlaXZlZCBcInNvbWVFdmVudFwiIGV2ZW50YCk7XG4gKiAgICAgICAvLyBsb2dzICdteUFjdG9yOiByZWNlaXZlZCBcInNvbWVFdmVudFwiIGV2ZW50J1xuICogICAgIH1cbiAqICAgfSk7XG4gKiB9KTtcbiAqXG4gKiBjb25zdCBhY3RvciA9IGNyZWF0ZUFjdG9yKGxvZ2ljLCB7IGlucHV0OiB7IG5hbWU6ICdteUFjdG9yJyB9IH0pO1xuICogLy8gICAgXj8gQ2FsbGJhY2tBY3RvclJlZjxFdmVudCwgSW5wdXQ+XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBmcm9tQ2FsbGJhY2t9XG4gKi9cblxuLyoqXG4gKiBBbiBhY3RvciBsb2dpYyBjcmVhdG9yIHdoaWNoIHJldHVybnMgY2FsbGJhY2sgbG9naWMgYXMgZGVmaW5lZCBieSBhIGNhbGxiYWNrXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAcmVtYXJrc1xuICogVXNlZnVsIGZvciBzdWJzY3JpcHRpb24tYmFzZWQgb3Igb3RoZXIgZnJlZS1mb3JtIGxvZ2ljIHRoYXQgY2FuIHNlbmQgZXZlbnRzXG4gKiBiYWNrIHRvIHRoZSBwYXJlbnQgYWN0b3IuXG4gKlxuICogQWN0b3JzIGNyZWF0ZWQgZnJvbSBjYWxsYmFjayBsb2dpYyAo4oCcY2FsbGJhY2sgYWN0b3Jz4oCdKSBjYW46XG4gKlxuICogLSBSZWNlaXZlIGV2ZW50cyB2aWEgdGhlIGByZWNlaXZlYCBmdW5jdGlvblxuICogLSBTZW5kIGV2ZW50cyB0byB0aGUgcGFyZW50IGFjdG9yIHZpYSB0aGUgYHNlbmRCYWNrYCBmdW5jdGlvblxuICpcbiAqIENhbGxiYWNrIGFjdG9ycyBhcmUgYSBiaXQgZGlmZmVyZW50IGZyb20gb3RoZXIgYWN0b3JzIGluIHRoYXQgdGhleTpcbiAqXG4gKiAtIERvIG5vdCB3b3JrIHdpdGggYG9uRG9uZWBcbiAqIC0gRG8gbm90IHByb2R1Y2UgYSBzbmFwc2hvdCB1c2luZyBgLmdldFNuYXBzaG90KClgXG4gKiAtIERvIG5vdCBlbWl0IHZhbHVlcyB3aGVuIHVzZWQgd2l0aCBgLnN1YnNjcmliZSgpYFxuICogLSBDYW4gbm90IGJlIHN0b3BwZWQgd2l0aCBgLnN0b3AoKWBcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNvbnN0IGNhbGxiYWNrTG9naWMgPSBmcm9tQ2FsbGJhY2soKHsgc2VuZEJhY2ssIHJlY2VpdmUgfSkgPT4ge1xuICogICBsZXQgbG9ja1N0YXR1cyA9ICd1bmxvY2tlZCc7XG4gKlxuICogICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gKiAgICAgaWYgKGxvY2tTdGF0dXMgPT09ICdsb2NrZWQnKSB7XG4gKiAgICAgICByZXR1cm47XG4gKiAgICAgfVxuICogICAgIHNlbmRCYWNrKGV2ZW50KTtcbiAqICAgfTtcbiAqXG4gKiAgIHJlY2VpdmUoKGV2ZW50KSA9PiB7XG4gKiAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdsb2NrJykge1xuICogICAgICAgbG9ja1N0YXR1cyA9ICdsb2NrZWQnO1xuICogICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ3VubG9jaycpIHtcbiAqICAgICAgIGxvY2tTdGF0dXMgPSAndW5sb2NrZWQnO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gKlxuICogICByZXR1cm4gKCkgPT4ge1xuICogICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcbiAqICAgfTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHVzZWQgdG8gZGVzY3JpYmUgdGhlIGNhbGxiYWNrIGxvZ2ljXG4gKiAgIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBwYXNzZWQgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgcmVjZWl2ZWAgLSBBIGZ1bmN0aW9uIHRoYXQgY2FuIHNlbmQgZXZlbnRzIGJhY2sgdG8gdGhlIHBhcmVudCBhY3RvcjsgdGhlXG4gKiAgICAgICBsaXN0ZW5lciBpcyB0aGVuIGNhbGxlZCB3aGVuZXZlciBldmVudHMgYXJlIHJlY2VpdmVkIGJ5IHRoZSBjYWxsYmFja1xuICogICAgICAgYWN0b3JcbiAqICAgLSBgc2VuZEJhY2tgIC0gQSBmdW5jdGlvbiB0aGF0IGNhbiBzZW5kIGV2ZW50cyBiYWNrIHRvIHRoZSBwYXJlbnQgYWN0b3JcbiAqICAgLSBgaW5wdXRgIC0gRGF0YSB0aGF0IHdhcyBwcm92aWRlZCB0byB0aGUgY2FsbGJhY2sgYWN0b3JcbiAqICAgLSBgc2VsZmAgLSBUaGUgcGFyZW50IGFjdG9yIG9mIHRoZSBjYWxsYmFjayBhY3RvclxuICogICAtIGBzeXN0ZW1gIC0gVGhlIGFjdG9yIHN5c3RlbSB0byB3aGljaCB0aGUgY2FsbGJhY2sgYWN0b3IgYmVsb25ncyBUaGUgY2FsbGJhY2tcbiAqICAgICAgIGZ1bmN0aW9uIGNhbiAob3B0aW9uYWxseSkgcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkXG4gKiAgICAgICB3aGVuIHRoZSBhY3RvciBpcyBzdG9wcGVkLlxuICpcbiAqIEByZXR1cm5zIENhbGxiYWNrIGxvZ2ljXG4gKiBAc2VlIHtAbGluayBDYWxsYmFja0xvZ2ljRnVuY3Rpb259IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbiBhbmQgaXRzIG9iamVjdCBhcmd1bWVudFxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zdGF0ZWx5LmFpL2RvY3MvaW5wdXQgfCBJbnB1dCBkb2NzfSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgaW5wdXQgaXMgcGFzc2VkXG4gKi9cbmZ1bmN0aW9uIGZyb21DYWxsYmFjayhjYWxsYmFjaykge1xuICBjb25zdCBsb2dpYyA9IHtcbiAgICBjb25maWc6IGNhbGxiYWNrLFxuICAgIHN0YXJ0OiAoc3RhdGUsIGFjdG9yU2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZixcbiAgICAgICAgc3lzdGVtLFxuICAgICAgICBlbWl0XG4gICAgICB9ID0gYWN0b3JTY29wZTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrU3RhdGUgPSB7XG4gICAgICAgIHJlY2VpdmVyczogdW5kZWZpbmVkLFxuICAgICAgICBkaXNwb3NlOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBpbnN0YW5jZVN0YXRlcy5zZXQoc2VsZiwgY2FsbGJhY2tTdGF0ZSk7XG4gICAgICBjYWxsYmFja1N0YXRlLmRpc3Bvc2UgPSBjYWxsYmFjayh7XG4gICAgICAgIGlucHV0OiBzdGF0ZS5pbnB1dCxcbiAgICAgICAgc3lzdGVtLFxuICAgICAgICBzZWxmLFxuICAgICAgICBzZW5kQmFjazogZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChzZWxmLmdldFNuYXBzaG90KCkuc3RhdHVzID09PSAnc3RvcHBlZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGYuX3BhcmVudCkge1xuICAgICAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLl9wYXJlbnQsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmU6IGxpc3RlbmVyID0+IHtcbiAgICAgICAgICBjYWxsYmFja1N0YXRlLnJlY2VpdmVycyA/Pz0gbmV3IFNldCgpO1xuICAgICAgICAgIGNhbGxiYWNrU3RhdGUucmVjZWl2ZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdHJhbnNpdGlvbjogKHN0YXRlLCBldmVudCwgYWN0b3JTY29wZSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2tTdGF0ZSA9IGluc3RhbmNlU3RhdGVzLmdldChhY3RvclNjb3BlLnNlbGYpO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFhTVEFURV9TVE9QKSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHN0YXR1czogJ3N0b3BwZWQnLFxuICAgICAgICAgIGVycm9yOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbGJhY2tTdGF0ZS5kaXNwb3NlPy4oKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2tTdGF0ZS5yZWNlaXZlcnM/LmZvckVhY2gocmVjZWl2ZXIgPT4gcmVjZWl2ZXIoZXZlbnQpKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTbmFwc2hvdDogKF8sIGlucHV0KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdhY3RpdmUnLFxuICAgICAgICBvdXRwdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgaW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRQZXJzaXN0ZWRTbmFwc2hvdDogc25hcHNob3QgPT4gc25hcHNob3QsXG4gICAgcmVzdG9yZVNuYXBzaG90OiBzbmFwc2hvdCA9PiBzbmFwc2hvdFxuICB9O1xuICByZXR1cm4gbG9naWM7XG59XG5cbmNvbnN0IFhTVEFURV9PQlNFUlZBQkxFX05FWFQgPSAneHN0YXRlLm9ic2VydmFibGUubmV4dCc7XG5jb25zdCBYU1RBVEVfT0JTRVJWQUJMRV9FUlJPUiA9ICd4c3RhdGUub2JzZXJ2YWJsZS5lcnJvcic7XG5jb25zdCBYU1RBVEVfT0JTRVJWQUJMRV9DT01QTEVURSA9ICd4c3RhdGUub2JzZXJ2YWJsZS5jb21wbGV0ZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhY3RvciBjcmVhdGVkIGJ5IGBmcm9tT2JzZXJ2YWJsZWAgb3IgYGZyb21FdmVudE9ic2VydmFibGVgLlxuICpcbiAqIFRoZSB0eXBlIG9mIGBzZWxmYCB3aXRoaW4gdGhlIGFjdG9yJ3MgbG9naWMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbU9ic2VydmFibGUsIGNyZWF0ZUFjdG9yIH0gZnJvbSAneHN0YXRlJztcbiAqIGltcG9ydCB7IGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4gKlxuICogLy8gVGhlIHR5cGUgb2YgdGhlIHZhbHVlIG9ic2VydmVkIGJ5IHRoZSBhY3RvcidzIGxvZ2ljLlxuICogdHlwZSBDb250ZXh0ID0gbnVtYmVyO1xuICogLy8gVGhlIGFjdG9yJ3MgaW5wdXQuXG4gKiB0eXBlIElucHV0ID0geyBwZXJpb2Q/OiBudW1iZXIgfTtcbiAqXG4gKiAvLyBBY3RvciBsb2dpYyB0aGF0IG9ic2VydmVzIGEgbnVtYmVyIGluY3JlbWVudGVkIGV2ZXJ5IGBpbnB1dC5wZXJpb2RgXG4gKiAvLyBtaWxsaXNlY29uZHMgKGRlZmF1bHQ6IDFfMDAwKS5cbiAqIGNvbnN0IGxvZ2ljID0gZnJvbU9ic2VydmFibGU8Q29udGV4dCwgSW5wdXQ+KCh7IGlucHV0LCBzZWxmIH0pID0+IHtcbiAqICAgc2VsZjtcbiAqICAgLy8gXj8gT2JzZXJ2YWJsZUFjdG9yUmVmPEV2ZW50LCBJbnB1dD5cbiAqXG4gKiAgIHJldHVybiBpbnRlcnZhbChpbnB1dC5wZXJpb2QgPz8gMV8wMDApO1xuICogfSk7XG4gKlxuICogY29uc3QgYWN0b3IgPSBjcmVhdGVBY3Rvcihsb2dpYywgeyBpbnB1dDogeyBwZXJpb2Q6IDJfMDAwIH0gfSk7XG4gKiAvLyAgICBePyBPYnNlcnZhYmxlQWN0b3JSZWY8RXZlbnQsIElucHV0PlxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbU9ic2VydmFibGV9XG4gKiBAc2VlIHtAbGluayBmcm9tRXZlbnRPYnNlcnZhYmxlfVxuICovXG5cbi8qKlxuICogT2JzZXJ2YWJsZSBhY3RvciBsb2dpYyBpcyBkZXNjcmliZWQgYnkgYW4gb2JzZXJ2YWJsZSBzdHJlYW0gb2YgdmFsdWVzLiBBY3RvcnNcbiAqIGNyZWF0ZWQgZnJvbSBvYnNlcnZhYmxlIGxvZ2ljICjigJxvYnNlcnZhYmxlIGFjdG9yc+KAnSkgY2FuOlxuICpcbiAqIC0gRW1pdCBzbmFwc2hvdHMgb2YgdGhlIG9ic2VydmFibGXigJlzIGVtaXR0ZWQgdmFsdWVcbiAqXG4gKiBUaGUgb2JzZXJ2YWJsZeKAmXMgZW1pdHRlZCB2YWx1ZSBpcyB1c2VkIGFzIGl0cyBvYnNlcnZhYmxlIGFjdG9y4oCZcyBgY29udGV4dGAuXG4gKlxuICogU2VuZGluZyBldmVudHMgdG8gb2JzZXJ2YWJsZSBhY3RvcnMgd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBmcm9tT2JzZXJ2YWJsZSwgY3JlYXRlQWN0b3IgfSBmcm9tICd4c3RhdGUnO1xuICogaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBsb2dpYyA9IGZyb21PYnNlcnZhYmxlKChvYmopID0+IGludGVydmFsKDEwMDApKTtcbiAqXG4gKiBjb25zdCBhY3RvciA9IGNyZWF0ZUFjdG9yKGxvZ2ljKTtcbiAqXG4gKiBhY3Rvci5zdWJzY3JpYmUoKHNuYXBzaG90KSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHNuYXBzaG90LmNvbnRleHQpO1xuICogfSk7XG4gKlxuICogYWN0b3Iuc3RhcnQoKTtcbiAqIC8vIEF0IGV2ZXJ5IHNlY29uZDpcbiAqIC8vIExvZ3MgMFxuICogLy8gTG9ncyAxXG4gKiAvLyBMb2dzIDJcbiAqIC8vIC4uLlxuICogYGBgXG4gKlxuICogQHBhcmFtIG9ic2VydmFibGVDcmVhdG9yIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuIG9ic2VydmFibGUuIEl0IHJlY2VpdmVzXG4gKiAgIG9uZSBhcmd1bWVudCwgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgaW5wdXRgIC0gRGF0YSB0aGF0IHdhcyBwcm92aWRlZCB0byB0aGUgb2JzZXJ2YWJsZSBhY3RvclxuICogICAtIGBzZWxmYCAtIFRoZSBwYXJlbnQgYWN0b3JcbiAqICAgLSBgc3lzdGVtYCAtIFRoZSBhY3RvciBzeXN0ZW0gdG8gd2hpY2ggdGhlIG9ic2VydmFibGUgYWN0b3IgYmVsb25nc1xuICpcbiAqICAgSXQgc2hvdWxkIHJldHVybiBhIHtAbGluayBTdWJzY3JpYmFibGV9LCB3aGljaCBpcyBjb21wYXRpYmxlIHdpdGggYW4gUnhKU1xuICogICBPYnNlcnZhYmxlLCBhbHRob3VnaCBSeEpTIGlzIG5vdCByZXF1aXJlZCB0byBjcmVhdGUgdGhlbS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcnhqcy5kZXZ9IGZvciBkb2N1bWVudGF0aW9uIG9uIFJ4SlMgT2JzZXJ2YWJsZSBhbmQgb2JzZXJ2YWJsZSBjcmVhdG9ycy5cbiAqIEBzZWUge0BsaW5rIFN1YnNjcmliYWJsZX0gaW50ZXJmYWNlIGluIFhTdGF0ZSwgd2hpY2ggaXMgYmFzZWQgb24gYW5kIGNvbXBhdGlibGUgd2l0aCBSeEpTIE9ic2VydmFibGUuXG4gKi9cbmZ1bmN0aW9uIGZyb21PYnNlcnZhYmxlKG9ic2VydmFibGVDcmVhdG9yKSB7XG4gIC8vIFRPRE86IGFkZCBldmVudCB0eXBlc1xuICBjb25zdCBsb2dpYyA9IHtcbiAgICBjb25maWc6IG9ic2VydmFibGVDcmVhdG9yLFxuICAgIHRyYW5zaXRpb246IChzbmFwc2hvdCwgZXZlbnQpID0+IHtcbiAgICAgIGlmIChzbmFwc2hvdC5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJldHVybiBzbmFwc2hvdDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIFhTVEFURV9PQlNFUlZBQkxFX05FWFQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbmV3U25hcHNob3QgPSB7XG4gICAgICAgICAgICAgIC4uLnNuYXBzaG90LFxuICAgICAgICAgICAgICBjb250ZXh0OiBldmVudC5kYXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NuYXBzaG90O1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBYU1RBVEVfT0JTRVJWQUJMRV9FUlJPUjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZXZlbnQuZGF0YSxcbiAgICAgICAgICAgIGlucHV0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfc3Vic2NyaXB0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFhTVEFURV9PQlNFUlZBQkxFX0NPTVBMRVRFOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zbmFwc2hvdCxcbiAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9zdWJzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgWFNUQVRFX1NUT1A6XG4gICAgICAgICAgc25hcHNob3QuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zbmFwc2hvdCxcbiAgICAgICAgICAgIHN0YXR1czogJ3N0b3BwZWQnLFxuICAgICAgICAgICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9zdWJzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHNuYXBzaG90O1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFNuYXBzaG90OiAoXywgaW5wdXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgIG91dHB1dDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0OiB1bmRlZmluZWQsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBfc3Vic2NyaXB0aW9uOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzdGFydDogKHN0YXRlLCB7XG4gICAgICBzZWxmLFxuICAgICAgc3lzdGVtLFxuICAgICAgZW1pdFxuICAgIH0pID0+IHtcbiAgICAgIGlmIChzdGF0ZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgICAvLyBEbyBub3QgcmVzdGFydCBhIGNvbXBsZXRlZCBvYnNlcnZhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLl9zdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlQ3JlYXRvcih7XG4gICAgICAgIGlucHV0OiBzdGF0ZS5pbnB1dCxcbiAgICAgICAgc3lzdGVtLFxuICAgICAgICBzZWxmLFxuICAgICAgICBlbWl0XG4gICAgICB9KS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLCB7XG4gICAgICAgICAgICB0eXBlOiBYU1RBVEVfT0JTRVJWQUJMRV9ORVhULFxuICAgICAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGVyciA9PiB7XG4gICAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLCB7XG4gICAgICAgICAgICB0eXBlOiBYU1RBVEVfT0JTRVJWQUJMRV9FUlJPUixcbiAgICAgICAgICAgIGRhdGE6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHN5c3RlbS5fcmVsYXkoc2VsZiwgc2VsZiwge1xuICAgICAgICAgICAgdHlwZTogWFNUQVRFX09CU0VSVkFCTEVfQ09NUExFVEVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRQZXJzaXN0ZWRTbmFwc2hvdDogKHtcbiAgICAgIF9zdWJzY3JpcHRpb24sXG4gICAgICAuLi5zdGF0ZVxuICAgIH0pID0+IHN0YXRlLFxuICAgIHJlc3RvcmVTbmFwc2hvdDogc3RhdGUgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgX3N1YnNjcmlwdGlvbjogdW5kZWZpbmVkXG4gICAgfSlcbiAgfTtcbiAgcmV0dXJuIGxvZ2ljO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgZXZlbnQgb2JzZXJ2YWJsZSBsb2dpYyB0aGF0IGxpc3RlbnMgdG8gYW4gb2JzZXJ2YWJsZSB0aGF0IGRlbGl2ZXJzXG4gKiBldmVudCBvYmplY3RzLlxuICpcbiAqIEV2ZW50IG9ic2VydmFibGUgYWN0b3IgbG9naWMgaXMgZGVzY3JpYmVkIGJ5IGFuIG9ic2VydmFibGUgc3RyZWFtIG9mXG4gKiB7QGxpbmsgaHR0cHM6Ly9zdGF0ZWx5LmFpL2RvY3MvdHJhbnNpdGlvbnMjZXZlbnQtb2JqZWN0cyB8IGV2ZW50IG9iamVjdHN9LlxuICogQWN0b3JzIGNyZWF0ZWQgZnJvbSBldmVudCBvYnNlcnZhYmxlIGxvZ2ljICjigJxldmVudCBvYnNlcnZhYmxlIGFjdG9yc+KAnSkgY2FuOlxuICpcbiAqIC0gSW1wbGljaXRseSBzZW5kIGV2ZW50cyB0byBpdHMgcGFyZW50IGFjdG9yXG4gKiAtIEVtaXQgc25hcHNob3RzIG9mIGl0cyBlbWl0dGVkIGV2ZW50IG9iamVjdHNcbiAqXG4gKiBTZW5kaW5nIGV2ZW50cyB0byBldmVudCBvYnNlcnZhYmxlIGFjdG9ycyB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7XG4gKiAgIGZyb21FdmVudE9ic2VydmFibGUsXG4gKiAgIFN1YnNjcmliYWJsZSxcbiAqICAgRXZlbnRPYmplY3QsXG4gKiAgIGNyZWF0ZU1hY2hpbmUsXG4gKiAgIGNyZWF0ZUFjdG9yXG4gKiB9IGZyb20gJ3hzdGF0ZSc7XG4gKiBpbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbiAqXG4gKiBjb25zdCBtb3VzZUNsaWNrTG9naWMgPSBmcm9tRXZlbnRPYnNlcnZhYmxlKFxuICogICAoKSA9PiBmcm9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2NsaWNrJykgYXMgU3Vic2NyaWJhYmxlPEV2ZW50T2JqZWN0PlxuICogKTtcbiAqXG4gKiBjb25zdCBjYW52YXNNYWNoaW5lID0gY3JlYXRlTWFjaGluZSh7XG4gKiAgIGludm9rZToge1xuICogICAgIC8vIFdpbGwgc2VuZCBtb3VzZSBgY2xpY2tgIGV2ZW50cyB0byB0aGUgY2FudmFzIGFjdG9yXG4gKiAgICAgc3JjOiBtb3VzZUNsaWNrTG9naWNcbiAqICAgfVxuICogfSk7XG4gKlxuICogY29uc3QgY2FudmFzQWN0b3IgPSBjcmVhdGVBY3RvcihjYW52YXNNYWNoaW5lKTtcbiAqIGNhbnZhc0FjdG9yLnN0YXJ0KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbGF6eU9ic2VydmFibGUgQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGRlbGl2ZXJzXG4gKiAgIGV2ZW50IG9iamVjdHMuIEl0IHJlY2VpdmVzIG9uZSBhcmd1bWVudCwgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZ1xuICogICBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgaW5wdXRgIC0gRGF0YSB0aGF0IHdhcyBwcm92aWRlZCB0byB0aGUgZXZlbnQgb2JzZXJ2YWJsZSBhY3RvclxuICogICAtIGBzZWxmYCAtIFRoZSBwYXJlbnQgYWN0b3JcbiAqICAgLSBgc3lzdGVtYCAtIFRoZSBhY3RvciBzeXN0ZW0gdG8gd2hpY2ggdGhlIGV2ZW50IG9ic2VydmFibGUgYWN0b3IgYmVsb25ncy5cbiAqXG4gKiAgIEl0IHNob3VsZCByZXR1cm4gYSB7QGxpbmsgU3Vic2NyaWJhYmxlfSwgd2hpY2ggaXMgY29tcGF0aWJsZSB3aXRoIGFuIFJ4SlNcbiAqICAgT2JzZXJ2YWJsZSwgYWx0aG91Z2ggUnhKUyBpcyBub3QgcmVxdWlyZWQgdG8gY3JlYXRlIHRoZW0uXG4gKi9cbmZ1bmN0aW9uIGZyb21FdmVudE9ic2VydmFibGUobGF6eU9ic2VydmFibGUpIHtcbiAgLy8gVE9ETzogZXZlbnQgdHlwZXNcbiAgY29uc3QgbG9naWMgPSB7XG4gICAgY29uZmlnOiBsYXp5T2JzZXJ2YWJsZSxcbiAgICB0cmFuc2l0aW9uOiAoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAoc3RhdGUuc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSBYU1RBVEVfT0JTRVJWQUJMRV9FUlJPUjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZXZlbnQuZGF0YSxcbiAgICAgICAgICAgIGlucHV0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBfc3Vic2NyaXB0aW9uOiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFhTVEFURV9PQlNFUlZBQkxFX0NPTVBMRVRFOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICAgICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9zdWJzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgWFNUQVRFX1NUT1A6XG4gICAgICAgICAgc3RhdGUuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1czogJ3N0b3BwZWQnLFxuICAgICAgICAgICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9zdWJzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFNuYXBzaG90OiAoXywgaW5wdXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgIG91dHB1dDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0OiB1bmRlZmluZWQsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBfc3Vic2NyaXB0aW9uOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzdGFydDogKHN0YXRlLCB7XG4gICAgICBzZWxmLFxuICAgICAgc3lzdGVtLFxuICAgICAgZW1pdFxuICAgIH0pID0+IHtcbiAgICAgIGlmIChzdGF0ZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgICAvLyBEbyBub3QgcmVzdGFydCBhIGNvbXBsZXRlZCBvYnNlcnZhYmxlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLl9zdWJzY3JpcHRpb24gPSBsYXp5T2JzZXJ2YWJsZSh7XG4gICAgICAgIGlucHV0OiBzdGF0ZS5pbnB1dCxcbiAgICAgICAgc3lzdGVtLFxuICAgICAgICBzZWxmLFxuICAgICAgICBlbWl0XG4gICAgICB9KS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGYuX3BhcmVudCkge1xuICAgICAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLl9wYXJlbnQsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xuICAgICAgICAgIHN5c3RlbS5fcmVsYXkoc2VsZiwgc2VsZiwge1xuICAgICAgICAgICAgdHlwZTogWFNUQVRFX09CU0VSVkFCTEVfRVJST1IsXG4gICAgICAgICAgICBkYXRhOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBzeXN0ZW0uX3JlbGF5KHNlbGYsIHNlbGYsIHtcbiAgICAgICAgICAgIHR5cGU6IFhTVEFURV9PQlNFUlZBQkxFX0NPTVBMRVRFXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0UGVyc2lzdGVkU25hcHNob3Q6ICh7XG4gICAgICBfc3Vic2NyaXB0aW9uLFxuICAgICAgLi4uc25hcHNob3RcbiAgICB9KSA9PiBzbmFwc2hvdCxcbiAgICByZXN0b3JlU25hcHNob3Q6IHNuYXBzaG90ID0+ICh7XG4gICAgICAuLi5zbmFwc2hvdCxcbiAgICAgIF9zdWJzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgIH0pXG4gIH07XG4gIHJldHVybiBsb2dpYztcbn1cblxuY29uc3QgWFNUQVRFX1BST01JU0VfUkVTT0xWRSA9ICd4c3RhdGUucHJvbWlzZS5yZXNvbHZlJztcbmNvbnN0IFhTVEFURV9QUk9NSVNFX1JFSkVDVCA9ICd4c3RhdGUucHJvbWlzZS5yZWplY3QnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYWN0b3IgY3JlYXRlZCBieSBgZnJvbVByb21pc2VgLlxuICpcbiAqIFRoZSB0eXBlIG9mIGBzZWxmYCB3aXRoaW4gdGhlIGFjdG9yJ3MgbG9naWMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZnJvbVByb21pc2UsIGNyZWF0ZUFjdG9yIH0gZnJvbSAneHN0YXRlJztcbiAqXG4gKiAvLyBUaGUgYWN0b3IncyByZXNvbHZlZCBvdXRwdXRcbiAqIHR5cGUgT3V0cHV0ID0gc3RyaW5nO1xuICogLy8gVGhlIGFjdG9yJ3MgaW5wdXQuXG4gKiB0eXBlIElucHV0ID0geyBtZXNzYWdlOiBzdHJpbmcgfTtcbiAqXG4gKiAvLyBBY3RvciBsb2dpYyB0aGF0IGZldGNoZXMgdGhlIHVybCBvZiBhbiBpbWFnZSBvZiBhIGNhdCBzYXlpbmcgYGlucHV0Lm1lc3NhZ2VgLlxuICogY29uc3QgbG9naWMgPSBmcm9tUHJvbWlzZTxPdXRwdXQsIElucHV0Pihhc3luYyAoeyBpbnB1dCwgc2VsZiB9KSA9PiB7XG4gKiAgIHNlbGY7XG4gKiAgIC8vIF4/IFByb21pc2VBY3RvclJlZjxPdXRwdXQsIElucHV0PlxuICpcbiAqICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICogICAgIGBodHRwczovL2NhdGFhcy5jb20vY2F0L3NheXMvJHtpbnB1dC5tZXNzYWdlfWBcbiAqICAgKTtcbiAqICAgY29uc3QgdXJsID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gKiAgIHJldHVybiB1cmw7XG4gKiB9KTtcbiAqXG4gKiBjb25zdCBhY3RvciA9IGNyZWF0ZUFjdG9yKGxvZ2ljLCB7IGlucHV0OiB7IG1lc3NhZ2U6ICdoZWxsbyB3b3JsZCcgfSB9KTtcbiAqIC8vICAgIF4/IFByb21pc2VBY3RvclJlZjxPdXRwdXQsIElucHV0PlxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgZnJvbVByb21pc2V9XG4gKi9cblxuY29uc3QgY29udHJvbGxlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogQW4gYWN0b3IgbG9naWMgY3JlYXRvciB3aGljaCByZXR1cm5zIHByb21pc2UgbG9naWMgYXMgZGVmaW5lZCBieSBhbiBhc3luY1xuICogcHJvY2VzcyB0aGF0IHJlc29sdmVzIG9yIHJlamVjdHMgYWZ0ZXIgc29tZSB0aW1lLlxuICpcbiAqIEFjdG9ycyBjcmVhdGVkIGZyb20gcHJvbWlzZSBhY3RvciBsb2dpYyAo4oCccHJvbWlzZSBhY3RvcnPigJ0pIGNhbjpcbiAqXG4gKiAtIEVtaXQgdGhlIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBwcm9taXNlXG4gKiAtIE91dHB1dCB0aGUgcmVzb2x2ZWQgdmFsdWUgb2YgdGhlIHByb21pc2VcbiAqXG4gKiBTZW5kaW5nIGV2ZW50cyB0byBwcm9taXNlIGFjdG9ycyB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHByb21pc2VMb2dpYyA9IGZyb21Qcm9taXNlKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZXhhbXBsZS5jb20vLi4uJykudGhlbigoZGF0YSkgPT5cbiAqICAgICBkYXRhLmpzb24oKVxuICogICApO1xuICpcbiAqICAgcmV0dXJuIHJlc3VsdDtcbiAqIH0pO1xuICpcbiAqIGNvbnN0IHByb21pc2VBY3RvciA9IGNyZWF0ZUFjdG9yKHByb21pc2VMb2dpYyk7XG4gKiBwcm9taXNlQWN0b3Iuc3Vic2NyaWJlKChzbmFwc2hvdCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XG4gKiB9KTtcbiAqIHByb21pc2VBY3Rvci5zdGFydCgpO1xuICogLy8gPT4ge1xuICogLy8gICBvdXRwdXQ6IHVuZGVmaW5lZCxcbiAqIC8vICAgc3RhdHVzOiAnYWN0aXZlJ1xuICogLy8gICAuLi5cbiAqIC8vIH1cbiAqXG4gKiAvLyBBZnRlciBwcm9taXNlIHJlc29sdmVzXG4gKiAvLyA9PiB7XG4gKiAvLyAgIG91dHB1dDogeyAuLi4gfSxcbiAqIC8vICAgc3RhdHVzOiAnZG9uZScsXG4gKiAvLyAgIC4uLlxuICogLy8gfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHByb21pc2VDcmVhdG9yIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UsIGFuZCBhY2NlcHRzIGFuXG4gKiAgIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYGlucHV0YCAtIERhdGEgdGhhdCB3YXMgcHJvdmlkZWQgdG8gdGhlIHByb21pc2UgYWN0b3JcbiAqICAgLSBgc2VsZmAgLSBUaGUgcGFyZW50IGFjdG9yIG9mIHRoZSBwcm9taXNlIGFjdG9yXG4gKiAgIC0gYHN5c3RlbWAgLSBUaGUgYWN0b3Igc3lzdGVtIHRvIHdoaWNoIHRoZSBwcm9taXNlIGFjdG9yIGJlbG9uZ3NcbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL3N0YXRlbHkuYWkvZG9jcy9pbnB1dCB8IElucHV0IGRvY3N9IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyBpbnB1dCBpcyBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZUNyZWF0b3IpIHtcbiAgY29uc3QgbG9naWMgPSB7XG4gICAgY29uZmlnOiBwcm9taXNlQ3JlYXRvcixcbiAgICB0cmFuc2l0aW9uOiAoc3RhdGUsIGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnN0YXR1cyAhPT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgWFNUQVRFX1BST01JU0VfUkVTT0xWRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFZhbHVlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdkb25lJyxcbiAgICAgICAgICAgICAgb3V0cHV0OiByZXNvbHZlZFZhbHVlLFxuICAgICAgICAgICAgICBpbnB1dDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBYU1RBVEVfUFJPTUlTRV9SRUpFQ1Q6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3I6IGV2ZW50LmRhdGEsXG4gICAgICAgICAgICBpbnB1dDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBYU1RBVEVfU1RPUDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250cm9sbGVyTWFwLmdldChzY29wZS5zZWxmKT8uYWJvcnQoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdzdG9wcGVkJyxcbiAgICAgICAgICAgICAgaW5wdXQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RhcnQ6IChzdGF0ZSwge1xuICAgICAgc2VsZixcbiAgICAgIHN5c3RlbSxcbiAgICAgIGVtaXRcbiAgICB9KSA9PiB7XG4gICAgICAvLyBUT0RPOiBkZXRlcm1pbmUgaG93IHRvIGFsbG93IGN1c3RvbWl6aW5nIHRoaXMgc28gdGhhdCBwcm9taXNlc1xuICAgICAgLy8gY2FuIGJlIHJlc3RhcnRlZCBpZiBuZWNlc3NhcnlcbiAgICAgIGlmIChzdGF0ZS5zdGF0dXMgIT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICBjb250cm9sbGVyTWFwLnNldChzZWxmLCBjb250cm9sbGVyKTtcbiAgICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShwcm9taXNlQ3JlYXRvcih7XG4gICAgICAgIGlucHV0OiBzdGF0ZS5pbnB1dCxcbiAgICAgICAgc3lzdGVtLFxuICAgICAgICBzZWxmLFxuICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICBlbWl0XG4gICAgICB9KSk7XG4gICAgICByZXNvbHZlZFByb21pc2UudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChzZWxmLmdldFNuYXBzaG90KCkuc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyTWFwLmRlbGV0ZShzZWxmKTtcbiAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLCB7XG4gICAgICAgICAgdHlwZTogWFNUQVRFX1BST01JU0VfUkVTT0xWRSxcbiAgICAgICAgICBkYXRhOiByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgIH0sIGVycm9yRGF0YSA9PiB7XG4gICAgICAgIGlmIChzZWxmLmdldFNuYXBzaG90KCkuc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyTWFwLmRlbGV0ZShzZWxmKTtcbiAgICAgICAgc3lzdGVtLl9yZWxheShzZWxmLCBzZWxmLCB7XG4gICAgICAgICAgdHlwZTogWFNUQVRFX1BST01JU0VfUkVKRUNULFxuICAgICAgICAgIGRhdGE6IGVycm9yRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFNuYXBzaG90OiAoXywgaW5wdXQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgIG91dHB1dDogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBpbnB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldFBlcnNpc3RlZFNuYXBzaG90OiBzbmFwc2hvdCA9PiBzbmFwc2hvdCxcbiAgICByZXN0b3JlU25hcHNob3Q6IHNuYXBzaG90ID0+IHNuYXBzaG90XG4gIH07XG4gIHJldHVybiBsb2dpYztcbn1cblxuY29uc3QgZW1wdHlMb2dpYyA9IGZyb21UcmFuc2l0aW9uKF8gPT4gdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlBY3RvcigpIHtcbiAgcmV0dXJuIGNyZWF0ZUFjdG9yKGVtcHR5TG9naWMpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbXB0eUFjdG9yLCBmcm9tQ2FsbGJhY2ssIGZyb21FdmVudE9ic2VydmFibGUsIGZyb21PYnNlcnZhYmxlLCBmcm9tUHJvbWlzZSwgZnJvbVRyYW5zaXRpb24gfTtcbiIsIi8vIEZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZ2xvYmFsVGhpc1xuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuICB7XG4gICAgY29uc29sZS53YXJuKCdYU3RhdGUgY291bGQgbm90IGZpbmQgYSBnbG9iYWwgb2JqZWN0IGluIHRoaXMgZW52aXJvbm1lbnQuIFBsZWFzZSBsZXQgdGhlIG1haW50YWluZXJzIGtub3cgYW5kIHJhaXNlIGFuIGlzc3VlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdGF0ZWx5YWkveHN0YXRlL2lzc3VlcycpO1xuICB9XG59XG5mdW5jdGlvbiBnZXREZXZUb29scygpIHtcbiAgY29uc3QgdyA9IGdldEdsb2JhbCgpO1xuICBpZiAody5fX3hzdGF0ZV9fKSB7XG4gICAgcmV0dXJuIHcuX194c3RhdGVfXztcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2UpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRldlRvb2xzID0gZ2V0RGV2VG9vbHMoKTtcbiAgaWYgKGRldlRvb2xzKSB7XG4gICAgZGV2VG9vbHMucmVnaXN0ZXIoc2VydmljZSk7XG4gIH1cbn1cbmNvbnN0IGRldlRvb2xzQWRhcHRlciA9IHNlcnZpY2UgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGV2VG9vbHMgPSBnZXREZXZUb29scygpO1xuICBpZiAoZGV2VG9vbHMpIHtcbiAgICBkZXZUb29scy5yZWdpc3RlcihzZXJ2aWNlKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGV2VG9vbHNBZGFwdGVyLCBnZXRHbG9iYWwsIHJlZ2lzdGVyU2VydmljZSB9O1xuIiwiaW1wb3J0IHsgVCBhcyBQcm9jZXNzaW5nU3RhdHVzLCB6IGFzIHJlc29sdmVSZWZlcmVuY2VkQWN0b3IsIEEgYXMgY3JlYXRlQWN0b3IsIFUgYXMgY2xvbmVNYWNoaW5lU25hcHNob3QsIFYgYXMgZXhlY3V0aW5nQ3VzdG9tQWN0aW9uLCBXIGFzIFhTVEFURV9FUlJPUiwgWSBhcyBjcmVhdGVFcnJvckFjdG9yRXZlbnQsIGUgYXMgZXZhbHVhdGVHdWFyZCwgTSBhcyBjYW5jZWwsIE8gYXMgcmFpc2UsIFAgYXMgc3Bhd25DaGlsZCwgUiBhcyBzdG9wQ2hpbGQgfSBmcm9tICcuL3JhaXNlLTFkYjI3YTgyLmRldmVsb3BtZW50LmVzbS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYXduZXIoYWN0b3JTY29wZSwge1xuICBtYWNoaW5lLFxuICBjb250ZXh0XG59LCBldmVudCwgc3Bhd25lZENoaWxkcmVuKSB7XG4gIGNvbnN0IHNwYXduID0gKHNyYywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc3lzdGVtSWQsXG4gICAgICBpbnB1dFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgbG9naWMgPSByZXNvbHZlUmVmZXJlbmNlZEFjdG9yKG1hY2hpbmUsIHNyYyk7XG4gICAgICBpZiAoIWxvZ2ljKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0b3IgbG9naWMgJyR7c3JjfScgbm90IGltcGxlbWVudGVkIGluIG1hY2hpbmUgJyR7bWFjaGluZS5pZH0nYCk7XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RvclJlZiA9IGNyZWF0ZUFjdG9yKGxvZ2ljLCB7XG4gICAgICAgIGlkOiBvcHRpb25zLmlkLFxuICAgICAgICBwYXJlbnQ6IGFjdG9yU2NvcGUuc2VsZixcbiAgICAgICAgc3luY1NuYXBzaG90OiBvcHRpb25zLnN5bmNTbmFwc2hvdCxcbiAgICAgICAgaW5wdXQ6IHR5cGVvZiBpbnB1dCA9PT0gJ2Z1bmN0aW9uJyA/IGlucHV0KHtcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHNlbGY6IGFjdG9yU2NvcGUuc2VsZlxuICAgICAgICB9KSA6IGlucHV0LFxuICAgICAgICBzcmMsXG4gICAgICAgIHN5c3RlbUlkXG4gICAgICB9KTtcbiAgICAgIHNwYXduZWRDaGlsZHJlblthY3RvclJlZi5pZF0gPSBhY3RvclJlZjtcbiAgICAgIHJldHVybiBhY3RvclJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0b3JSZWYgPSBjcmVhdGVBY3RvcihzcmMsIHtcbiAgICAgICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgICAgIHBhcmVudDogYWN0b3JTY29wZS5zZWxmLFxuICAgICAgICBzeW5jU25hcHNob3Q6IG9wdGlvbnMuc3luY1NuYXBzaG90LFxuICAgICAgICBpbnB1dDogb3B0aW9ucy5pbnB1dCxcbiAgICAgICAgc3JjLFxuICAgICAgICBzeXN0ZW1JZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWN0b3JSZWY7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKHNyYywgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGFjdG9yUmVmID0gc3Bhd24oc3JjLCBvcHRpb25zKTsgLy8gVE9ETzogZml4IHR5cGVzXG4gICAgc3Bhd25lZENoaWxkcmVuW2FjdG9yUmVmLmlkXSA9IGFjdG9yUmVmO1xuICAgIGFjdG9yU2NvcGUuZGVmZXIoKCkgPT4ge1xuICAgICAgaWYgKGFjdG9yUmVmLl9wcm9jZXNzaW5nU3RhdHVzID09PSBQcm9jZXNzaW5nU3RhdHVzLlN0b3BwZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYWN0b3JSZWYuc3RhcnQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWN0b3JSZWY7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3NpZ24oYWN0b3JTY29wZSwgc25hcHNob3QsIGFjdGlvbkFyZ3MsIGFjdGlvblBhcmFtcywge1xuICBhc3NpZ25tZW50XG59KSB7XG4gIGlmICghc25hcHNob3QuY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGFzc2lnbiB0byB1bmRlZmluZWQgYGNvbnRleHRgLiBFbnN1cmUgdGhhdCBgY29udGV4dGAgaXMgZGVmaW5lZCBpbiB0aGUgbWFjaGluZSBjb25maWcuJyk7XG4gIH1cbiAgY29uc3Qgc3Bhd25lZENoaWxkcmVuID0ge307XG4gIGNvbnN0IGFzc2lnbkFyZ3MgPSB7XG4gICAgY29udGV4dDogc25hcHNob3QuY29udGV4dCxcbiAgICBldmVudDogYWN0aW9uQXJncy5ldmVudCxcbiAgICBzcGF3bjogY3JlYXRlU3Bhd25lcihhY3RvclNjb3BlLCBzbmFwc2hvdCwgYWN0aW9uQXJncy5ldmVudCwgc3Bhd25lZENoaWxkcmVuKSxcbiAgICBzZWxmOiBhY3RvclNjb3BlLnNlbGYsXG4gICAgc3lzdGVtOiBhY3RvclNjb3BlLnN5c3RlbVxuICB9O1xuICBsZXQgcGFydGlhbFVwZGF0ZSA9IHt9O1xuICBpZiAodHlwZW9mIGFzc2lnbm1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJ0aWFsVXBkYXRlID0gYXNzaWdubWVudChhc3NpZ25BcmdzLCBhY3Rpb25QYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFzc2lnbm1lbnQpKSB7XG4gICAgICBjb25zdCBwcm9wQXNzaWdubWVudCA9IGFzc2lnbm1lbnRba2V5XTtcbiAgICAgIHBhcnRpYWxVcGRhdGVba2V5XSA9IHR5cGVvZiBwcm9wQXNzaWdubWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BBc3NpZ25tZW50KGFzc2lnbkFyZ3MsIGFjdGlvblBhcmFtcykgOiBwcm9wQXNzaWdubWVudDtcbiAgICB9XG4gIH1cbiAgY29uc3QgdXBkYXRlZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwc2hvdC5jb250ZXh0LCBwYXJ0aWFsVXBkYXRlKTtcbiAgcmV0dXJuIFtjbG9uZU1hY2hpbmVTbmFwc2hvdChzbmFwc2hvdCwge1xuICAgIGNvbnRleHQ6IHVwZGF0ZWRDb250ZXh0LFxuICAgIGNoaWxkcmVuOiBPYmplY3Qua2V5cyhzcGF3bmVkQ2hpbGRyZW4pLmxlbmd0aCA/IHtcbiAgICAgIC4uLnNuYXBzaG90LmNoaWxkcmVuLFxuICAgICAgLi4uc3Bhd25lZENoaWxkcmVuXG4gICAgfSA6IHNuYXBzaG90LmNoaWxkcmVuXG4gIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZF07XG59XG4vKipcbiAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgY29udGV4dCBvZiB0aGUgbWFjaGluZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjcmVhdGVNYWNoaW5lLCBhc3NpZ24gfSBmcm9tICd4c3RhdGUnO1xuICpcbiAqIGNvbnN0IGNvdW50TWFjaGluZSA9IGNyZWF0ZU1hY2hpbmUoe1xuICogICBjb250ZXh0OiB7XG4gKiAgICAgY291bnQ6IDAsXG4gKiAgICAgbWVzc2FnZTogJydcbiAqICAgfSxcbiAqICAgb246IHtcbiAqICAgICBpbmM6IHtcbiAqICAgICAgIGFjdGlvbnM6IGFzc2lnbih7XG4gKiAgICAgICAgIGNvdW50OiAoeyBjb250ZXh0IH0pID0+IGNvbnRleHQuY291bnQgKyAxXG4gKiAgICAgICB9KVxuICogICAgIH0sXG4gKiAgICAgdXBkYXRlTWVzc2FnZToge1xuICogICAgICAgYWN0aW9uczogYXNzaWduKCh7IGNvbnRleHQsIGV2ZW50IH0pID0+IHtcbiAqICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICBtZXNzYWdlOiBldmVudC5tZXNzYWdlLnRyaW0oKVxuICogICAgICAgICB9O1xuICogICAgICAgfSlcbiAqICAgICB9XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGFzc2lnbm1lbnQgQW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgcGFydGlhbCBjb250ZXh0IHRvIHVwZGF0ZSwgb3JcbiAqICAgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgcGFydGlhbCBjb250ZXh0IHRvXG4gKiAgIHVwZGF0ZS5cbiAqL1xuZnVuY3Rpb24gYXNzaWduKGFzc2lnbm1lbnQpIHtcbiAgaWYgKGV4ZWN1dGluZ0N1c3RvbUFjdGlvbikge1xuICAgIGNvbnNvbGUud2FybignQ3VzdG9tIGFjdGlvbnMgc2hvdWxkIG5vdCBjYWxsIGBhc3NpZ24oKWAgZGlyZWN0bHksIGFzIGl0IGlzIG5vdCBpbXBlcmF0aXZlLiBTZWUgaHR0cHM6Ly9zdGF0ZWx5LmFpL2RvY3MvYWN0aW9ucyNidWlsdC1pbi1hY3Rpb25zIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduKF9hcmdzLCBfcGFyYW1zKSB7XG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIGlzbid0IHN1cHBvc2VkIHRvIGJlIGNhbGxlZGApO1xuICAgIH1cbiAgfVxuICBhc3NpZ24udHlwZSA9ICd4c3RhdGUuYXNzaWduJztcbiAgYXNzaWduLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICBhc3NpZ24ucmVzb2x2ZSA9IHJlc29sdmVBc3NpZ247XG4gIHJldHVybiBhc3NpZ247XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFbWl0KF8sIHNuYXBzaG90LCBhcmdzLCBhY3Rpb25QYXJhbXMsIHtcbiAgZXZlbnQ6IGV2ZW50T3JFeHByXG59KSB7XG4gIGNvbnN0IHJlc29sdmVkRXZlbnQgPSB0eXBlb2YgZXZlbnRPckV4cHIgPT09ICdmdW5jdGlvbicgPyBldmVudE9yRXhwcihhcmdzLCBhY3Rpb25QYXJhbXMpIDogZXZlbnRPckV4cHI7XG4gIHJldHVybiBbc25hcHNob3QsIHtcbiAgICBldmVudDogcmVzb2x2ZWRFdmVudFxuICB9LCB1bmRlZmluZWRdO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUVtaXQoYWN0b3JTY29wZSwge1xuICBldmVudFxufSkge1xuICBhY3RvclNjb3BlLmRlZmVyKCgpID0+IGFjdG9yU2NvcGUuZW1pdChldmVudCkpO1xufVxuLyoqXG4gKiBFbWl0cyBhbiBldmVudCB0byBldmVudCBoYW5kbGVycyByZWdpc3RlcmVkIG9uIHRoZSBhY3RvciB2aWEgYGFjdG9yLm9uKGV2ZW50LFxuICogaGFuZGxlcilgLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGVtaXQgfSBmcm9tICd4c3RhdGUnO1xuICpcbiAqIGNvbnN0IG1hY2hpbmUgPSBjcmVhdGVNYWNoaW5lKHtcbiAqICAgLy8gLi4uXG4gKiAgIG9uOiB7XG4gKiAgICAgc29tZXRoaW5nOiB7XG4gKiAgICAgICBhY3Rpb25zOiBlbWl0KHtcbiAqICAgICAgICAgdHlwZTogJ2VtaXR0ZWQnLFxuICogICAgICAgICBzb21lOiAnZGF0YSdcbiAqICAgICAgIH0pXG4gKiAgICAgfVxuICogICB9XG4gKiAgIC8vIC4uLlxuICogfSk7XG4gKlxuICogY29uc3QgYWN0b3IgPSBjcmVhdGVBY3RvcihtYWNoaW5lKS5zdGFydCgpO1xuICpcbiAqIGFjdG9yLm9uKCdlbWl0dGVkJywgKGV2ZW50KSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAqIH0pO1xuICpcbiAqIGFjdG9yLnNlbmQoeyB0eXBlOiAnc29tZXRoaW5nJyB9KTtcbiAqIC8vIGxvZ3M6XG4gKiAvLyB7XG4gKiAvLyAgIHR5cGU6ICdlbWl0dGVkJyxcbiAqIC8vICAgc29tZTogJ2RhdGEnXG4gKiAvLyB9XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZW1pdCgvKiogVGhlIGV2ZW50IHRvIGVtaXQsIG9yIGFuIGV4cHJlc3Npb24gdGhhdCByZXR1cm5zIGFuIGV2ZW50IHRvIGVtaXQuICovXG5ldmVudE9yRXhwcikge1xuICBpZiAoZXhlY3V0aW5nQ3VzdG9tQWN0aW9uKSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gYWN0aW9ucyBzaG91bGQgbm90IGNhbGwgYGVtaXQoKWAgZGlyZWN0bHksIGFzIGl0IGlzIG5vdCBpbXBlcmF0aXZlLiBTZWUgaHR0cHM6Ly9zdGF0ZWx5LmFpL2RvY3MvYWN0aW9ucyNidWlsdC1pbi1hY3Rpb25zIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gIH1cbiAgZnVuY3Rpb24gZW1pdChfYXJncywgX3BhcmFtcykge1xuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBpc24ndCBzdXBwb3NlZCB0byBiZSBjYWxsZWRgKTtcbiAgICB9XG4gIH1cbiAgZW1pdC50eXBlID0gJ3hzdGF0ZS5lbWl0JztcbiAgZW1pdC5ldmVudCA9IGV2ZW50T3JFeHByO1xuICBlbWl0LnJlc29sdmUgPSByZXNvbHZlRW1pdDtcbiAgZW1pdC5leGVjdXRlID0gZXhlY3V0ZUVtaXQ7XG4gIHJldHVybiBlbWl0O1xufVxuXG4vKipcbiAqIEByZW1hcmtzXG4gKiBgVCB8IHVua25vd25gIHJlZHVjZXMgdG8gYHVua25vd25gIGFuZCB0aGF0IGNhbiBiZSBwcm9ibGVtYXRpYyB3aGVuIGl0IGNvbWVzXG4gKiB0byBjb250ZXh0dWFsIHR5cGluZy4gSXQgZXNwZWNpYWxseSBpcyBhIHByb2JsZW0gd2hlbiB0aGUgdW5pb24gaGFzIGFcbiAqIGZ1bmN0aW9uIG1lbWJlciwgbGlrZSBoZXJlOlxuICpcbiAqIGBgYHRzXG4gKiBkZWNsYXJlIGZ1bmN0aW9uIHRlc3QoXG4gKiAgIGNiT3JWYWw6ICgoYXJnOiBudW1iZXIpID0+IHVua25vd24pIHwgdW5rbm93blxuICogKTogdm9pZDtcbiAqIHRlc3QoKGFyZykgPT4ge30pOyAvLyBvb3BzLCBpbXBsaWNpdCBhbnlcbiAqIGBgYFxuICpcbiAqIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCB0byBhdm9pZCB0aGlzIHByb2JsZW0uIFRoaXMgdW5pb24gcmVwcmVzZW50cyB0aGUgc2FtZVxuICogdmFsdWUgc3BhY2UgYXMgYHVua25vd25gLlxuICovXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjMxODIjaXNzdWVjb21tZW50LTM3OTA5MTg4N1xuXG4vLyBAVE9ETzogUmVwbGFjZSB3aXRoIG5hdGl2ZSBgTm9JbmZlcmAgd2hlbiBUUyBpc3N1ZSBnZXRzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L3B1bGwvNTc2NzNcblxuLyoqIEBkZXByZWNhdGVkIFVzZSB0aGUgYnVpbHQtaW4gYE5vSW5mZXJgIHR5cGUgaW5zdGVhZCAqL1xuXG4vKiogVGhlIGZ1bGwgZGVmaW5pdGlvbiBvZiBhbiBldmVudCwgd2l0aCBhIHN0cmluZyBgdHlwZWAuICovXG5cbi8qKlxuICogVGhlIHN0cmluZyBvciBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSB2YWx1ZSByZWxhdGl2ZSB0byB0aGUgcGFyZW50XG4gKiBzdGF0ZSBub2RlLlxuICpcbiAqIEByZW1hcmtzXG4gKiAtIEZvciBhIGNoaWxkIGF0b21pYyBzdGF0ZSBub2RlLCB0aGlzIGlzIGEgc3RyaW5nLCBlLmcuLCBgXCJwZW5kaW5nXCJgLlxuICogLSBGb3IgY29tcGxleCBzdGF0ZSBub2RlcywgdGhpcyBpcyBhbiBvYmplY3QsIGUuZy4sIGB7IHN1Y2Nlc3M6XG4gKiAgIFwic29tZUNoaWxkU3RhdGVcIiB9YC5cbiAqL1xuXG4vKiogQGRlcHJlY2F0ZWQgVXNlIGBBbnlNYWNoaW5lU25hcHNob3RgIGluc3RlYWQgKi9cblxuLy8gVE9ETzogcG9zc2libHkgcmVmYWN0b3IgdGhpcyBzb21laG93LCB1c2UgZXZlbiBhIHNpbXBsZXIgdHlwZSwgYW5kIG1heWJlIGV2ZW4gbWFrZSBgbWFjaGluZS5vcHRpb25zYCBwcml2YXRlIG9yIHNvbWV0aGluZ1xuLyoqIEBpZ25vcmUgKi9cblxubGV0IFNwZWNpYWxUYXJnZXRzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChTcGVjaWFsVGFyZ2V0cykge1xuICBTcGVjaWFsVGFyZ2V0c1tcIlBhcmVudFwiXSA9IFwiI19wYXJlbnRcIjtcbiAgU3BlY2lhbFRhcmdldHNbXCJJbnRlcm5hbFwiXSA9IFwiI19pbnRlcm5hbFwiO1xuICByZXR1cm4gU3BlY2lhbFRhcmdldHM7XG59KHt9KTtcblxuLyoqIEBkZXByZWNhdGVkIFVzZSBgQW55QWN0b3JgIGluc3RlYWQuICovXG5cbi8vIEJhc2VkIG9uIFJ4SlMgdHlwZXNcblxuLy8gVE9ETzogaW4gdjYsIHRoaXMgc2hvdWxkIG9ubHkgYWNjZXB0IEFueUFjdG9yTG9naWMsIGxpa2UgQWN0b3JSZWZGcm9tTG9naWNcblxuLyoqIEBkZXByZWNhdGVkIFVzZSBgQWN0b3I8VD5gIGluc3RlYWQuICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBsb2dpYyB3aGljaCBjYW4gYmUgdXNlZCBieSBhbiBhY3Rvci5cbiAqXG4gKiBAdGVtcGxhdGUgVFNuYXBzaG90IC0gVGhlIHR5cGUgb2YgdGhlIHNuYXBzaG90LlxuICogQHRlbXBsYXRlIFRFdmVudCAtIFRoZSB0eXBlIG9mIHRoZSBldmVudCBvYmplY3QuXG4gKiBAdGVtcGxhdGUgVElucHV0IC0gVGhlIHR5cGUgb2YgdGhlIGlucHV0LlxuICogQHRlbXBsYXRlIFRTeXN0ZW0gLSBUaGUgdHlwZSBvZiB0aGUgYWN0b3Igc3lzdGVtLlxuICovXG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuXG4vLyBUT0RPOiBjb3ZlciBhbGwgdGhhdCBjYW4gYmUgYWN0dWFsbHkgcmV0dXJuZWRcblxuZnVuY3Rpb24gcmVzb2x2ZVNlbmRUbyhhY3RvclNjb3BlLCBzbmFwc2hvdCwgYXJncywgYWN0aW9uUGFyYW1zLCB7XG4gIHRvLFxuICBldmVudDogZXZlbnRPckV4cHIsXG4gIGlkLFxuICBkZWxheVxufSwgZXh0cmEpIHtcbiAgY29uc3QgZGVsYXlzTWFwID0gc25hcHNob3QubWFjaGluZS5pbXBsZW1lbnRhdGlvbnMuZGVsYXlzO1xuICBpZiAodHlwZW9mIGV2ZW50T3JFeHByID09PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zXG4gICAgYE9ubHkgZXZlbnQgb2JqZWN0cyBtYXkgYmUgdXNlZCB3aXRoIHNlbmRUbzsgdXNlIHNlbmRUbyh7IHR5cGU6IFwiJHtldmVudE9yRXhwcn1cIiB9KSBpbnN0ZWFkYCk7XG4gIH1cbiAgY29uc3QgcmVzb2x2ZWRFdmVudCA9IHR5cGVvZiBldmVudE9yRXhwciA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50T3JFeHByKGFyZ3MsIGFjdGlvblBhcmFtcykgOiBldmVudE9yRXhwcjtcbiAgbGV0IHJlc29sdmVkRGVsYXk7XG4gIGlmICh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY29uZmlnRGVsYXkgPSBkZWxheXNNYXAgJiYgZGVsYXlzTWFwW2RlbGF5XTtcbiAgICByZXNvbHZlZERlbGF5ID0gdHlwZW9mIGNvbmZpZ0RlbGF5ID09PSAnZnVuY3Rpb24nID8gY29uZmlnRGVsYXkoYXJncywgYWN0aW9uUGFyYW1zKSA6IGNvbmZpZ0RlbGF5O1xuICB9IGVsc2Uge1xuICAgIHJlc29sdmVkRGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdmdW5jdGlvbicgPyBkZWxheShhcmdzLCBhY3Rpb25QYXJhbXMpIDogZGVsYXk7XG4gIH1cbiAgY29uc3QgcmVzb2x2ZWRUYXJnZXQgPSB0eXBlb2YgdG8gPT09ICdmdW5jdGlvbicgPyB0byhhcmdzLCBhY3Rpb25QYXJhbXMpIDogdG87XG4gIGxldCB0YXJnZXRBY3RvclJlZjtcbiAgaWYgKHR5cGVvZiByZXNvbHZlZFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1lbnVtLWNvbXBhcmlzb25cbiAgICBpZiAocmVzb2x2ZWRUYXJnZXQgPT09IFNwZWNpYWxUYXJnZXRzLlBhcmVudCkge1xuICAgICAgdGFyZ2V0QWN0b3JSZWYgPSBhY3RvclNjb3BlLnNlbGYuX3BhcmVudDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZW51bS1jb21wYXJpc29uXG4gICAgZWxzZSBpZiAocmVzb2x2ZWRUYXJnZXQgPT09IFNwZWNpYWxUYXJnZXRzLkludGVybmFsKSB7XG4gICAgICB0YXJnZXRBY3RvclJlZiA9IGFjdG9yU2NvcGUuc2VsZjtcbiAgICB9IGVsc2UgaWYgKHJlc29sdmVkVGFyZ2V0LnN0YXJ0c1dpdGgoJyNfJykpIHtcbiAgICAgIC8vIFNDWE1MIGNvbXBhdGliaWxpdHk6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zY3htbC8jU0NYTUxFdmVudFByb2Nlc3NvclxuICAgICAgLy8gI19pbnZva2VpZC4gSWYgdGhlIHRhcmdldCBpcyB0aGUgc3BlY2lhbCB0ZXJtICcjX2ludm9rZWlkJywgd2hlcmUgaW52b2tlaWQgaXMgdGhlIGludm9rZWlkIG9mIGFuIFNDWE1MIHNlc3Npb24gdGhhdCB0aGUgc2VuZGluZyBzZXNzaW9uIGhhcyBjcmVhdGVkIGJ5IDxpbnZva2U+LCB0aGUgUHJvY2Vzc29yIG11c3QgYWRkIHRoZSBldmVudCB0byB0aGUgZXh0ZXJuYWwgcXVldWUgb2YgdGhhdCBzZXNzaW9uLlxuICAgICAgdGFyZ2V0QWN0b3JSZWYgPSBzbmFwc2hvdC5jaGlsZHJlbltyZXNvbHZlZFRhcmdldC5zbGljZSgyKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEFjdG9yUmVmID0gZXh0cmEuZGVmZXJyZWRBY3Rvcklkcz8uaW5jbHVkZXMocmVzb2x2ZWRUYXJnZXQpID8gcmVzb2x2ZWRUYXJnZXQgOiBzbmFwc2hvdC5jaGlsZHJlbltyZXNvbHZlZFRhcmdldF07XG4gICAgfVxuICAgIGlmICghdGFyZ2V0QWN0b3JSZWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHNlbmQgZXZlbnQgdG8gYWN0b3IgJyR7cmVzb2x2ZWRUYXJnZXR9JyBmcm9tIG1hY2hpbmUgJyR7c25hcHNob3QubWFjaGluZS5pZH0nLmApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRBY3RvclJlZiA9IHJlc29sdmVkVGFyZ2V0IHx8IGFjdG9yU2NvcGUuc2VsZjtcbiAgfVxuICByZXR1cm4gW3NuYXBzaG90LCB7XG4gICAgdG86IHRhcmdldEFjdG9yUmVmLFxuICAgIHRhcmdldElkOiB0eXBlb2YgcmVzb2x2ZWRUYXJnZXQgPT09ICdzdHJpbmcnID8gcmVzb2x2ZWRUYXJnZXQgOiB1bmRlZmluZWQsXG4gICAgZXZlbnQ6IHJlc29sdmVkRXZlbnQsXG4gICAgaWQsXG4gICAgZGVsYXk6IHJlc29sdmVkRGVsYXlcbiAgfSwgdW5kZWZpbmVkXTtcbn1cbmZ1bmN0aW9uIHJldHJ5UmVzb2x2ZVNlbmRUbyhfLCBzbmFwc2hvdCwgcGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1zLnRvID09PSAnc3RyaW5nJykge1xuICAgIHBhcmFtcy50byA9IHNuYXBzaG90LmNoaWxkcmVuW3BhcmFtcy50b107XG4gIH1cbn1cbmZ1bmN0aW9uIGV4ZWN1dGVTZW5kVG8oYWN0b3JTY29wZSwgcGFyYW1zKSB7XG4gIC8vIHRoaXMgZm9ybXMgYW4gb3V0Z29pbmcgZXZlbnRzIHF1ZXVlXG4gIC8vIHRoYW5rcyB0byB0aGF0IHRoZSByZWNpcGllbnQgYWN0b3JzIGFyZSBhYmxlIHRvIHJlYWQgdGhlICp1cGRhdGVkKiBzbmFwc2hvdCB2YWx1ZSBvZiB0aGUgc2VuZGVyXG4gIGFjdG9yU2NvcGUuZGVmZXIoKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvLFxuICAgICAgZXZlbnQsXG4gICAgICBkZWxheSxcbiAgICAgIGlkXG4gICAgfSA9IHBhcmFtcztcbiAgICBpZiAodHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgYWN0b3JTY29wZS5zeXN0ZW0uc2NoZWR1bGVyLnNjaGVkdWxlKGFjdG9yU2NvcGUuc2VsZiwgdG8sIGV2ZW50LCBkZWxheSwgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhY3RvclNjb3BlLnN5c3RlbS5fcmVsYXkoYWN0b3JTY29wZS5zZWxmLFxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGluIGEgZGVmZXJyZWQgdGFzaywgaXQgc2hvdWxkIGFscmVhZHkgYmUgbXV0YXRlZCBieSByZXRyeVJlc29sdmVTZW5kVG9cbiAgICAvLyBpZiBpdCBpbml0aWFsbHkgc3RhcnRlZCBhcyBhIHN0cmluZ1xuICAgIHRvLCBldmVudC50eXBlID09PSBYU1RBVEVfRVJST1IgPyBjcmVhdGVFcnJvckFjdG9yRXZlbnQoYWN0b3JTY29wZS5zZWxmLmlkLCBldmVudC5kYXRhKSA6IGV2ZW50KTtcbiAgfSk7XG59XG4vKipcbiAqIFNlbmRzIGFuIGV2ZW50IHRvIGFuIGFjdG9yLlxuICpcbiAqIEBwYXJhbSBhY3RvciBUaGUgYEFjdG9yUmVmYCB0byBzZW5kIHRoZSBldmVudCB0by5cbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gc2VuZCwgb3IgYW4gZXhwcmVzc2lvbiB0aGF0IGV2YWx1YXRlcyB0byB0aGUgZXZlbnRcbiAqICAgdG8gc2VuZFxuICogQHBhcmFtIG9wdGlvbnMgU2VuZCBhY3Rpb24gb3B0aW9uc1xuICpcbiAqICAgLSBgaWRgIC0gVGhlIHVuaXF1ZSBzZW5kIGV2ZW50IGlkZW50aWZpZXIgKHVzZWQgd2l0aCBgY2FuY2VsKClgKS5cbiAqICAgLSBgZGVsYXlgIC0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHNlbmRpbmcgb2YgdGhlIGV2ZW50LlxuICovXG5mdW5jdGlvbiBzZW5kVG8odG8sIGV2ZW50T3JFeHByLCBvcHRpb25zKSB7XG4gIGlmIChleGVjdXRpbmdDdXN0b21BY3Rpb24pIHtcbiAgICBjb25zb2xlLndhcm4oJ0N1c3RvbSBhY3Rpb25zIHNob3VsZCBub3QgY2FsbCBgc2VuZFRvKClgIGRpcmVjdGx5LCBhcyBpdCBpcyBub3QgaW1wZXJhdGl2ZS4gU2VlIGh0dHBzOi8vc3RhdGVseS5haS9kb2NzL2FjdGlvbnMjYnVpbHQtaW4tYWN0aW9ucyBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICB9XG4gIGZ1bmN0aW9uIHNlbmRUbyhfYXJncywgX3BhcmFtcykge1xuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBpc24ndCBzdXBwb3NlZCB0byBiZSBjYWxsZWRgKTtcbiAgICB9XG4gIH1cbiAgc2VuZFRvLnR5cGUgPSAneHN0YXRlLnNlbmRUbyc7XG4gIHNlbmRUby50byA9IHRvO1xuICBzZW5kVG8uZXZlbnQgPSBldmVudE9yRXhwcjtcbiAgc2VuZFRvLmlkID0gb3B0aW9ucz8uaWQ7XG4gIHNlbmRUby5kZWxheSA9IG9wdGlvbnM/LmRlbGF5O1xuICBzZW5kVG8ucmVzb2x2ZSA9IHJlc29sdmVTZW5kVG87XG4gIHNlbmRUby5yZXRyeVJlc29sdmUgPSByZXRyeVJlc29sdmVTZW5kVG87XG4gIHNlbmRUby5leGVjdXRlID0gZXhlY3V0ZVNlbmRUbztcbiAgcmV0dXJuIHNlbmRUbztcbn1cblxuLyoqXG4gKiBTZW5kcyBhbiBldmVudCB0byB0aGlzIG1hY2hpbmUncyBwYXJlbnQuXG4gKlxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBzZW5kIHRvIHRoZSBwYXJlbnQgbWFjaGluZS5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBzZW5kIGV2ZW50LlxuICovXG5mdW5jdGlvbiBzZW5kUGFyZW50KGV2ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBzZW5kVG8oU3BlY2lhbFRhcmdldHMuUGFyZW50LCBldmVudCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIEZvcndhcmRzIChzZW5kcykgYW4gZXZlbnQgdG8gdGhlIGB0YXJnZXRgIGFjdG9yLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBhY3RvciB0byBmb3J3YXJkIHRoZSBldmVudCB0by5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBzZW5kIGFjdGlvbiBjcmVhdG9yLlxuICovXG5mdW5jdGlvbiBmb3J3YXJkVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gIGlmICgoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSkge1xuICAgIGNvbnN0IG9yaWdpbmFsVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRhcmdldCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZFRhcmdldCA9IHR5cGVvZiBvcmlnaW5hbFRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9yaWdpbmFsVGFyZ2V0KC4uLmFyZ3MpIDogb3JpZ2luYWxUYXJnZXQ7XG4gICAgICBpZiAoIXJlc29sdmVkVGFyZ2V0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGZvcndhcmQgZXZlbnQgdG8gdW5kZWZpbmVkIGFjdG9yLiBUaGlzIHJpc2tzIGFuIGluZmluaXRlIGxvb3AgaW4gdGhlIHNlbmRlci5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlZFRhcmdldDtcbiAgICB9O1xuICB9XG4gIHJldHVybiBzZW5kVG8odGFyZ2V0LCAoe1xuICAgIGV2ZW50XG4gIH0pID0+IGV2ZW50LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVucXVldWVBY3Rpb25zKGFjdG9yU2NvcGUsIHNuYXBzaG90LCBhcmdzLCBhY3Rpb25QYXJhbXMsIHtcbiAgY29sbGVjdFxufSkge1xuICBjb25zdCBhY3Rpb25zID0gW107XG4gIGNvbnN0IGVucXVldWUgPSBmdW5jdGlvbiBlbnF1ZXVlKGFjdGlvbikge1xuICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICB9O1xuICBlbnF1ZXVlLmFzc2lnbiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYWN0aW9ucy5wdXNoKGFzc2lnbiguLi5hcmdzKSk7XG4gIH07XG4gIGVucXVldWUuY2FuY2VsID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhY3Rpb25zLnB1c2goY2FuY2VsKC4uLmFyZ3MpKTtcbiAgfTtcbiAgZW5xdWV1ZS5yYWlzZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgLy8gZm9yIHNvbWUgcmVhc29uIGl0IGZhaWxzIHRvIGluZmVyIGBURGVsYXlgIGZyb20gYC4uLmFyZ3NgIGhlcmUgYW5kIHBpY2tzIGl0cyBkZWZhdWx0IChgbmV2ZXJgKVxuICAgIC8vIHRoZW4gaXQgZmFpbHMgdG8gdHlwZWNoZWNrIHRoYXQgYmVjYXVzZSBgLi4uYXJnc2AgdXNlIGBzdHJpbmdgIGluIHBsYWNlIG9mIGBURGVsYXlgXG4gICAgYWN0aW9ucy5wdXNoKHJhaXNlKC4uLmFyZ3MpKTtcbiAgfTtcbiAgZW5xdWV1ZS5zZW5kVG8gPSAoLi4uYXJncykgPT4ge1xuICAgIC8vIGZvciBzb21lIHJlYXNvbiBpdCBmYWlscyB0byBpbmZlciBgVERlbGF5YCBmcm9tIGAuLi5hcmdzYCBoZXJlIGFuZCBwaWNrcyBpdHMgZGVmYXVsdCAoYG5ldmVyYClcbiAgICAvLyB0aGVuIGl0IGZhaWxzIHRvIHR5cGVjaGVjayB0aGF0IGJlY2F1c2UgYC4uLmFyZ3NgIHVzZSBgc3RyaW5nYCBpbiBwbGFjZSBvZiBgVERlbGF5XG4gICAgYWN0aW9ucy5wdXNoKHNlbmRUbyguLi5hcmdzKSk7XG4gIH07XG4gIGVucXVldWUuc2VuZFBhcmVudCA9ICguLi5hcmdzKSA9PiB7XG4gICAgYWN0aW9ucy5wdXNoKHNlbmRQYXJlbnQoLi4uYXJncykpO1xuICB9O1xuICBlbnF1ZXVlLnNwYXduQ2hpbGQgPSAoLi4uYXJncykgPT4ge1xuICAgIGFjdGlvbnMucHVzaChzcGF3bkNoaWxkKC4uLmFyZ3MpKTtcbiAgfTtcbiAgZW5xdWV1ZS5zdG9wQ2hpbGQgPSAoLi4uYXJncykgPT4ge1xuICAgIGFjdGlvbnMucHVzaChzdG9wQ2hpbGQoLi4uYXJncykpO1xuICB9O1xuICBlbnF1ZXVlLmVtaXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGFjdGlvbnMucHVzaChlbWl0KC4uLmFyZ3MpKTtcbiAgfTtcbiAgY29sbGVjdCh7XG4gICAgY29udGV4dDogYXJncy5jb250ZXh0LFxuICAgIGV2ZW50OiBhcmdzLmV2ZW50LFxuICAgIGVucXVldWUsXG4gICAgY2hlY2s6IGd1YXJkID0+IGV2YWx1YXRlR3VhcmQoZ3VhcmQsIHNuYXBzaG90LmNvbnRleHQsIGFyZ3MuZXZlbnQsIHNuYXBzaG90KSxcbiAgICBzZWxmOiBhY3RvclNjb3BlLnNlbGYsXG4gICAgc3lzdGVtOiBhY3RvclNjb3BlLnN5c3RlbVxuICB9LCBhY3Rpb25QYXJhbXMpO1xuICByZXR1cm4gW3NuYXBzaG90LCB1bmRlZmluZWQsIGFjdGlvbnNdO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGFjdGlvbiBvYmplY3QgdGhhdCB3aWxsIGV4ZWN1dGUgYWN0aW9ucyB0aGF0IGFyZSBxdWV1ZWQgYnkgdGhlXG4gKiBgZW5xdWV1ZShhY3Rpb24pYCBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjcmVhdGVNYWNoaW5lLCBlbnF1ZXVlQWN0aW9ucyB9IGZyb20gJ3hzdGF0ZSc7XG4gKlxuICogY29uc3QgbWFjaGluZSA9IGNyZWF0ZU1hY2hpbmUoe1xuICogICBlbnRyeTogZW5xdWV1ZUFjdGlvbnMoKHsgZW5xdWV1ZSwgY2hlY2sgfSkgPT4ge1xuICogICAgIGVucXVldWUuYXNzaWduKHsgY291bnQ6IDAgfSk7XG4gKlxuICogICAgIGlmIChjaGVjaygnc29tZUd1YXJkJykpIHtcbiAqICAgICAgIGVucXVldWUuYXNzaWduKHsgY291bnQ6IDEgfSk7XG4gKiAgICAgfVxuICpcbiAqICAgICBlbnF1ZXVlKCdzb21lQWN0aW9uJyk7XG4gKiAgIH0pXG4gKiB9KTtcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBlbnF1ZXVlQWN0aW9ucyhjb2xsZWN0KSB7XG4gIGZ1bmN0aW9uIGVucXVldWVBY3Rpb25zKF9hcmdzLCBfcGFyYW1zKSB7XG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIGlzbid0IHN1cHBvc2VkIHRvIGJlIGNhbGxlZGApO1xuICAgIH1cbiAgfVxuICBlbnF1ZXVlQWN0aW9ucy50eXBlID0gJ3hzdGF0ZS5lbnF1ZXVlQWN0aW9ucyc7XG4gIGVucXVldWVBY3Rpb25zLmNvbGxlY3QgPSBjb2xsZWN0O1xuICBlbnF1ZXVlQWN0aW9ucy5yZXNvbHZlID0gcmVzb2x2ZUVucXVldWVBY3Rpb25zO1xuICByZXR1cm4gZW5xdWV1ZUFjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMb2coXywgc25hcHNob3QsIGFjdGlvbkFyZ3MsIGFjdGlvblBhcmFtcywge1xuICB2YWx1ZSxcbiAgbGFiZWxcbn0pIHtcbiAgcmV0dXJuIFtzbmFwc2hvdCwge1xuICAgIHZhbHVlOiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShhY3Rpb25BcmdzLCBhY3Rpb25QYXJhbXMpIDogdmFsdWUsXG4gICAgbGFiZWxcbiAgfSwgdW5kZWZpbmVkXTtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVMb2coe1xuICBsb2dnZXJcbn0sIHtcbiAgdmFsdWUsXG4gIGxhYmVsXG59KSB7XG4gIGlmIChsYWJlbCkge1xuICAgIGxvZ2dlcihsYWJlbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlcih2YWx1ZSk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIGV4cHIgVGhlIGV4cHJlc3Npb24gZnVuY3Rpb24gdG8gZXZhbHVhdGUgd2hpY2ggd2lsbCBiZSBsb2dnZWQuIFRha2VzXG4gKiAgIGluIDIgYXJndW1lbnRzOlxuICpcbiAqICAgLSBgY3R4YCAtIHRoZSBjdXJyZW50IHN0YXRlIGNvbnRleHRcbiAqICAgLSBgZXZlbnRgIC0gdGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoaXMgYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSBsYWJlbCBUaGUgbGFiZWwgdG8gZ2l2ZSB0byB0aGUgbG9nZ2VkIGV4cHJlc3Npb24uXG4gKi9cbmZ1bmN0aW9uIGxvZyh2YWx1ZSA9ICh7XG4gIGNvbnRleHQsXG4gIGV2ZW50XG59KSA9PiAoe1xuICBjb250ZXh0LFxuICBldmVudFxufSksIGxhYmVsKSB7XG4gIGZ1bmN0aW9uIGxvZyhfYXJncywgX3BhcmFtcykge1xuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBpc24ndCBzdXBwb3NlZCB0byBiZSBjYWxsZWRgKTtcbiAgICB9XG4gIH1cbiAgbG9nLnR5cGUgPSAneHN0YXRlLmxvZyc7XG4gIGxvZy52YWx1ZSA9IHZhbHVlO1xuICBsb2cubGFiZWwgPSBsYWJlbDtcbiAgbG9nLnJlc29sdmUgPSByZXNvbHZlTG9nO1xuICBsb2cuZXhlY3V0ZSA9IGV4ZWN1dGVMb2c7XG4gIHJldHVybiBsb2c7XG59XG5cbmV4cG9ydCB7IFNwZWNpYWxUYXJnZXRzIGFzIFMsIGFzc2lnbiBhcyBhLCBlbnF1ZXVlQWN0aW9ucyBhcyBiLCBzZW5kVG8gYXMgYywgZW1pdCBhcyBlLCBmb3J3YXJkVG8gYXMgZiwgbG9nIGFzIGwsIHNlbmRQYXJlbnQgYXMgcyB9O1xuIiwiaW1wb3J0IHsgZGV2VG9vbHNBZGFwdGVyIH0gZnJvbSAnLi4vZGV2L2Rpc3QveHN0YXRlLWRldi5kZXZlbG9wbWVudC5lc20uanMnO1xuXG5jbGFzcyBNYWlsYm94IHtcbiAgY29uc3RydWN0b3IoX3Byb2Nlc3MpIHtcbiAgICB0aGlzLl9wcm9jZXNzID0gX3Byb2Nlc3M7XG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fY3VycmVudCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdCA9IG51bGw7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgLy8gd2UgY2FuJ3Qgc2V0IF9jdXJyZW50IHRvIG51bGwgYmVjYXVzZSB3ZSBtaWdodCBiZSBjdXJyZW50bHkgcHJvY2Vzc2luZ1xuICAgIC8vIGFuZCBlbnF1ZXVlIGZvbGxvd2luZyBjbGVhciBzaG91bGRudCBzdGFydCBwcm9jZXNzaW5nIHRoZSBlbnF1ZXVlZCBpdGVtIGltbWVkaWF0ZWx5XG4gICAgaWYgKHRoaXMuX2N1cnJlbnQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnQubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0ID0gdGhpcy5fY3VycmVudDtcbiAgICB9XG4gIH1cbiAgZW5xdWV1ZShldmVudCkge1xuICAgIGNvbnN0IGVucXVldWVkID0ge1xuICAgICAgdmFsdWU6IGV2ZW50LFxuICAgICAgbmV4dDogbnVsbFxuICAgIH07XG4gICAgaWYgKHRoaXMuX2N1cnJlbnQpIHtcbiAgICAgIHRoaXMuX2xhc3QubmV4dCA9IGVucXVldWVkO1xuICAgICAgdGhpcy5fbGFzdCA9IGVucXVldWVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50ID0gZW5xdWV1ZWQ7XG4gICAgdGhpcy5fbGFzdCA9IGVucXVldWVkO1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cbiAgZmx1c2goKSB7XG4gICAgd2hpbGUgKHRoaXMuX2N1cnJlbnQpIHtcbiAgICAgIC8vIGF0bSB0aGUgZ2l2ZW4gX3Byb2Nlc3MgaXMgcmVzcG9uc2libGUgZm9yIGltcGxlbWVudGluZyBwcm9wZXIgdHJ5L2NhdGNoIGhhbmRsaW5nXG4gICAgICAvLyB3ZSBhc3N1bWUgaGVyZSB0aGF0IHRoaXMgd29uJ3QgdGhyb3cgaW4gYSB3YXkgdGhhdCBjYW4gYWZmZWN0IHRoaXMgbWFpbGJveFxuICAgICAgY29uc3QgY29uc3VtZWQgPSB0aGlzLl9jdXJyZW50O1xuICAgICAgdGhpcy5fcHJvY2Vzcyhjb25zdW1lZC52YWx1ZSk7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gY29uc3VtZWQubmV4dDtcbiAgICB9XG4gICAgdGhpcy5fbGFzdCA9IG51bGw7XG4gIH1cbn1cblxuY29uc3QgU1RBVEVfREVMSU1JVEVSID0gJy4nO1xuY29uc3QgVEFSR0VUTEVTU19LRVkgPSAnJztcbmNvbnN0IE5VTExfRVZFTlQgPSAnJztcbmNvbnN0IFNUQVRFX0lERU5USUZJRVIgPSAnIyc7XG5jb25zdCBXSUxEQ0FSRCA9ICcqJztcbmNvbnN0IFhTVEFURV9JTklUID0gJ3hzdGF0ZS5pbml0JztcbmNvbnN0IFhTVEFURV9FUlJPUiA9ICd4c3RhdGUuZXJyb3InO1xuY29uc3QgWFNUQVRFX1NUT1AgPSAneHN0YXRlLnN0b3AnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gZXZlbnQgdGhhdCByZXByZXNlbnRzIGFuIGltcGxpY2l0IGV2ZW50IHRoYXQgaXMgc2VudCBhZnRlciB0aGVcbiAqIHNwZWNpZmllZCBgZGVsYXlgLlxuICpcbiAqIEBwYXJhbSBkZWxheVJlZiBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0gaWQgVGhlIHN0YXRlIG5vZGUgSUQgd2hlcmUgdGhpcyBldmVudCBpcyBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFmdGVyRXZlbnQoZGVsYXlSZWYsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYHhzdGF0ZS5hZnRlci4ke2RlbGF5UmVmfS4ke2lkfWBcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGV2ZW50IHRoYXQgcmVwcmVzZW50cyB0aGF0IGEgZmluYWwgc3RhdGUgbm9kZSBoYXMgYmVlbiByZWFjaGVkIGluXG4gKiB0aGUgcGFyZW50IHN0YXRlIG5vZGUuXG4gKlxuICogQHBhcmFtIGlkIFRoZSBmaW5hbCBzdGF0ZSBub2RlJ3MgcGFyZW50IHN0YXRlIG5vZGUgYGlkYFxuICogQHBhcmFtIG91dHB1dCBUaGUgZGF0YSB0byBwYXNzIGludG8gdGhlIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURvbmVTdGF0ZUV2ZW50KGlkLCBvdXRwdXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBgeHN0YXRlLmRvbmUuc3RhdGUuJHtpZH1gLFxuICAgIG91dHB1dFxuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXZlbnQgdGhhdCByZXByZXNlbnRzIHRoYXQgYW4gaW52b2tlZCBzZXJ2aWNlIGhhcyB0ZXJtaW5hdGVkLlxuICpcbiAqIEFuIGludm9rZWQgc2VydmljZSBpcyB0ZXJtaW5hdGVkIHdoZW4gaXQgaGFzIHJlYWNoZWQgYSB0b3AtbGV2ZWwgZmluYWwgc3RhdGVcbiAqIG5vZGUsIGJ1dCBub3Qgd2hlbiBpdCBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAcGFyYW0gaW52b2tlSWQgVGhlIGludm9rZWQgc2VydmljZSBJRFxuICogQHBhcmFtIG91dHB1dCBUaGUgZGF0YSB0byBwYXNzIGludG8gdGhlIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURvbmVBY3RvckV2ZW50KGludm9rZUlkLCBvdXRwdXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBgeHN0YXRlLmRvbmUuYWN0b3IuJHtpbnZva2VJZH1gLFxuICAgIG91dHB1dCxcbiAgICBhY3RvcklkOiBpbnZva2VJZFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JBY3RvckV2ZW50KGlkLCBlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGB4c3RhdGUuZXJyb3IuYWN0b3IuJHtpZH1gLFxuICAgIGVycm9yLFxuICAgIGFjdG9ySWQ6IGlkXG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbml0RXZlbnQoaW5wdXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBYU1RBVEVfSU5JVCxcbiAgICBpbnB1dFxuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gbWFrZXMgc3VyZSB0aGF0IHVuaGFuZGxlZCBlcnJvcnMgYXJlIHRocm93biBpbiBhIHNlcGFyYXRlXG4gKiBtYWNyb3Rhc2suIEl0IGFsbG93cyB0aG9zZSBlcnJvcnMgdG8gYmUgZGV0ZWN0ZWQgYnkgZ2xvYmFsIGVycm9yIGhhbmRsZXJzIGFuZFxuICogcmVwb3J0ZWQgdG8gYnVnIHRyYWNraW5nIHNlcnZpY2VzIHdpdGhvdXQgaW50ZXJydXB0aW5nIG91ciBvd24gc3RhY2sgb2ZcbiAqIGV4ZWN1dGlvbi5cbiAqXG4gKiBAcGFyYW0gZXJyIEVycm9yIHRvIGJlIHRocm93blxuICovXG5mdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn1cblxuY29uc3Qgc3ltYm9sT2JzZXJ2YWJsZSA9ICgoKSA9PiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnKSgpO1xuXG5mdW5jdGlvbiBtYXRjaGVzU3RhdGUocGFyZW50U3RhdGVJZCwgY2hpbGRTdGF0ZUlkKSB7XG4gIGNvbnN0IHBhcmVudFN0YXRlVmFsdWUgPSB0b1N0YXRlVmFsdWUocGFyZW50U3RhdGVJZCk7XG4gIGNvbnN0IGNoaWxkU3RhdGVWYWx1ZSA9IHRvU3RhdGVWYWx1ZShjaGlsZFN0YXRlSWQpO1xuICBpZiAodHlwZW9mIGNoaWxkU3RhdGVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHBhcmVudFN0YXRlVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY2hpbGRTdGF0ZVZhbHVlID09PSBwYXJlbnRTdGF0ZVZhbHVlO1xuICAgIH1cblxuICAgIC8vIFBhcmVudCBtb3JlIHNwZWNpZmljIHRoYW4gY2hpbGRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBwYXJlbnRTdGF0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJlbnRTdGF0ZVZhbHVlIGluIGNoaWxkU3RhdGVWYWx1ZTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMocGFyZW50U3RhdGVWYWx1ZSkuZXZlcnkoa2V5ID0+IHtcbiAgICBpZiAoIShrZXkgaW4gY2hpbGRTdGF0ZVZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlKHBhcmVudFN0YXRlVmFsdWVba2V5XSwgY2hpbGRTdGF0ZVZhbHVlW2tleV0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHRvU3RhdGVQYXRoKHN0YXRlSWQpIHtcbiAgaWYgKGlzQXJyYXkoc3RhdGVJZCkpIHtcbiAgICByZXR1cm4gc3RhdGVJZDtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IHNlZ21lbnQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUlkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHN0YXRlSWQuY2hhckNvZGVBdChpKTtcbiAgICBzd2l0Y2ggKGNoYXIpIHtcbiAgICAgIC8vIFxcXG4gICAgICBjYXNlIDkyOlxuICAgICAgICAvLyBjb25zdW1lIHRoZSBuZXh0IGNoYXJhY3RlclxuICAgICAgICBzZWdtZW50ICs9IHN0YXRlSWRbaSArIDFdO1xuICAgICAgICAvLyBhbmQgc2tpcCBvdmVyIGl0XG4gICAgICAgIGkrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICAvLyAuXG4gICAgICBjYXNlIDQ2OlxuICAgICAgICByZXN1bHQucHVzaChzZWdtZW50KTtcbiAgICAgICAgc2VnbWVudCA9ICcnO1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgc2VnbWVudCArPSBzdGF0ZUlkW2ldO1xuICB9XG4gIHJlc3VsdC5wdXNoKHNlZ21lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9TdGF0ZVZhbHVlKHN0YXRlVmFsdWUpIHtcbiAgaWYgKGlzTWFjaGluZVNuYXBzaG90KHN0YXRlVmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0YXRlVmFsdWUudmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBzdGF0ZVZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdGF0ZVZhbHVlO1xuICB9XG4gIGNvbnN0IHN0YXRlUGF0aCA9IHRvU3RhdGVQYXRoKHN0YXRlVmFsdWUpO1xuICByZXR1cm4gcGF0aFRvU3RhdGVWYWx1ZShzdGF0ZVBhdGgpO1xufVxuZnVuY3Rpb24gcGF0aFRvU3RhdGVWYWx1ZShzdGF0ZVBhdGgpIHtcbiAgaWYgKHN0YXRlUGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gc3RhdGVQYXRoWzBdO1xuICB9XG4gIGNvbnN0IHZhbHVlID0ge307XG4gIGxldCBtYXJrZXIgPSB2YWx1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZVBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKGkgPT09IHN0YXRlUGF0aC5sZW5ndGggLSAyKSB7XG4gICAgICBtYXJrZXJbc3RhdGVQYXRoW2ldXSA9IHN0YXRlUGF0aFtpICsgMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gbWFya2VyO1xuICAgICAgbWFya2VyID0ge307XG4gICAgICBwcmV2aW91c1tzdGF0ZVBhdGhbaV1dID0gbWFya2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBtYXBWYWx1ZXMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGNvbGxlY3Rpb25LZXlzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGlvbktleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjb2xsZWN0aW9uS2V5c1tpXTtcbiAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlKGNvbGxlY3Rpb25ba2V5XSwga2V5LCBjb2xsZWN0aW9uLCBpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9BcnJheVN0cmljdCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIFt2YWx1ZV07XG59XG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiB0b0FycmF5U3RyaWN0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVPdXRwdXQobWFwcGVyLCBjb250ZXh0LCBldmVudCwgc2VsZikge1xuICBpZiAodHlwZW9mIG1hcHBlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXBwZXIoe1xuICAgICAgY29udGV4dCxcbiAgICAgIGV2ZW50LFxuICAgICAgc2VsZlxuICAgIH0pO1xuICB9XG4gIGlmICghIW1hcHBlciAmJiB0eXBlb2YgbWFwcGVyID09PSAnb2JqZWN0JyAmJiBPYmplY3QudmFsdWVzKG1hcHBlcikuc29tZSh2YWwgPT4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICBjb25zb2xlLndhcm4oYER5bmFtaWNhbGx5IG1hcHBpbmcgdmFsdWVzIHRvIGluZGl2aWR1YWwgcHJvcGVydGllcyBpcyBkZXByZWNhdGVkLiBVc2UgYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtYXBwZWQgb2JqZWN0IGluc3RlYWQuXFxuRm91bmQgb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyB3aG9zZSB2YWx1ZXMgYXJlIHBvc3NpYmx5IG1hcHBpbmcgZnVuY3Rpb25zOiAke09iamVjdC5lbnRyaWVzKG1hcHBlcikuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykubWFwKChba2V5LCB2YWx1ZV0pID0+IGBcXG4gLSAke2tleX06ICR7dmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXG5cXHMqL2csICcnKX1gKS5qb2luKCcnKX1gKTtcbiAgfVxuICByZXR1cm4gbWFwcGVyO1xufVxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0Vycm9yQWN0b3JFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQudHlwZS5zdGFydHNXaXRoKCd4c3RhdGUuZXJyb3IuYWN0b3InKTtcbn1cbmZ1bmN0aW9uIHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KGNvbmZpZ0xpa2UpIHtcbiAgcmV0dXJuIHRvQXJyYXlTdHJpY3QoY29uZmlnTGlrZSkubWFwKHRyYW5zaXRpb25MaWtlID0+IHtcbiAgICBpZiAodHlwZW9mIHRyYW5zaXRpb25MaWtlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdHJhbnNpdGlvbkxpa2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YXJnZXQ6IHRyYW5zaXRpb25MaWtlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbkxpa2U7XG4gIH0pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVGFyZ2V0KHRhcmdldCkge1xuICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBUQVJHRVRMRVNTX0tFWSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHRvQXJyYXkodGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIHRvT2JzZXJ2ZXIobmV4dEhhbmRsZXIsIGVycm9ySGFuZGxlciwgY29tcGxldGlvbkhhbmRsZXIpIHtcbiAgY29uc3QgaXNPYnNlcnZlciA9IHR5cGVvZiBuZXh0SGFuZGxlciA9PT0gJ29iamVjdCc7XG4gIGNvbnN0IHNlbGYgPSBpc09ic2VydmVyID8gbmV4dEhhbmRsZXIgOiB1bmRlZmluZWQ7XG4gIHJldHVybiB7XG4gICAgbmV4dDogKGlzT2JzZXJ2ZXIgPyBuZXh0SGFuZGxlci5uZXh0IDogbmV4dEhhbmRsZXIpPy5iaW5kKHNlbGYpLFxuICAgIGVycm9yOiAoaXNPYnNlcnZlciA/IG5leHRIYW5kbGVyLmVycm9yIDogZXJyb3JIYW5kbGVyKT8uYmluZChzZWxmKSxcbiAgICBjb21wbGV0ZTogKGlzT2JzZXJ2ZXIgPyBuZXh0SGFuZGxlci5jb21wbGV0ZSA6IGNvbXBsZXRpb25IYW5kbGVyKT8uYmluZChzZWxmKVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSW52b2tlSWQoc3RhdGVOb2RlSWQsIGluZGV4KSB7XG4gIHJldHVybiBgJHtpbmRleH0uJHtzdGF0ZU5vZGVJZH1gO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVJlZmVyZW5jZWRBY3RvcihtYWNoaW5lLCBzcmMpIHtcbiAgY29uc3QgbWF0Y2ggPSBzcmMubWF0Y2goL154c3RhdGVcXC5pbnZva2VcXC4oXFxkKylcXC4oLiopLyk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbWFjaGluZS5pbXBsZW1lbnRhdGlvbnMuYWN0b3JzW3NyY107XG4gIH1cbiAgY29uc3QgWywgaW5kZXhTdHIsIG5vZGVJZF0gPSBtYXRjaDtcbiAgY29uc3Qgbm9kZSA9IG1hY2hpbmUuZ2V0U3RhdGVOb2RlQnlJZChub2RlSWQpO1xuICBjb25zdCBpbnZva2VDb25maWcgPSBub2RlLmNvbmZpZy5pbnZva2U7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShpbnZva2VDb25maWcpID8gaW52b2tlQ29uZmlnW2luZGV4U3RyXSA6IGludm9rZUNvbmZpZykuc3JjO1xufVxuZnVuY3Rpb24gZ2V0QWxsT3duRXZlbnREZXNjcmlwdG9ycyhzbmFwc2hvdCkge1xuICByZXR1cm4gWy4uLm5ldyBTZXQoWy4uLnNuYXBzaG90Ll9ub2Rlcy5mbGF0TWFwKHNuID0+IHNuLm93bkV2ZW50cyldKV07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlZEV2ZW50SWQoYWN0b3JSZWYsIGlkKSB7XG4gIHJldHVybiBgJHthY3RvclJlZi5zZXNzaW9uSWR9LiR7aWR9YDtcbn1cbmxldCBpZENvdW50ZXIgPSAwO1xuZnVuY3Rpb24gY3JlYXRlU3lzdGVtKHJvb3RBY3Rvciwgb3B0aW9ucykge1xuICBjb25zdCBjaGlsZHJlbiA9IG5ldyBNYXAoKTtcbiAgY29uc3Qga2V5ZWRBY3RvcnMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHJldmVyc2VLZXllZEFjdG9ycyA9IG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IGluc3BlY3Rpb25PYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHRpbWVyTWFwID0ge307XG4gIGNvbnN0IHtcbiAgICBjbG9jayxcbiAgICBsb2dnZXJcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHNjaGVkdWxlciA9IHtcbiAgICBzY2hlZHVsZTogKHNvdXJjZSwgdGFyZ2V0LCBldmVudCwgZGVsYXksIGlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVkdWxlZEV2ZW50ID0ge1xuICAgICAgICBzb3VyY2UsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGRlbGF5LFxuICAgICAgICBpZCxcbiAgICAgICAgc3RhcnRlZEF0OiBEYXRlLm5vdygpXG4gICAgICB9O1xuICAgICAgY29uc3Qgc2NoZWR1bGVkRXZlbnRJZCA9IGNyZWF0ZVNjaGVkdWxlZEV2ZW50SWQoc291cmNlLCBpZCk7XG4gICAgICBzeXN0ZW0uX3NuYXBzaG90Ll9zY2hlZHVsZWRFdmVudHNbc2NoZWR1bGVkRXZlbnRJZF0gPSBzY2hlZHVsZWRFdmVudDtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBjbG9jay5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVsZXRlIHRpbWVyTWFwW3NjaGVkdWxlZEV2ZW50SWRdO1xuICAgICAgICBkZWxldGUgc3lzdGVtLl9zbmFwc2hvdC5fc2NoZWR1bGVkRXZlbnRzW3NjaGVkdWxlZEV2ZW50SWRdO1xuICAgICAgICBzeXN0ZW0uX3JlbGF5KHNvdXJjZSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgICB0aW1lck1hcFtzY2hlZHVsZWRFdmVudElkXSA9IHRpbWVvdXQ7XG4gICAgfSxcbiAgICBjYW5jZWw6IChzb3VyY2UsIGlkKSA9PiB7XG4gICAgICBjb25zdCBzY2hlZHVsZWRFdmVudElkID0gY3JlYXRlU2NoZWR1bGVkRXZlbnRJZChzb3VyY2UsIGlkKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aW1lck1hcFtzY2hlZHVsZWRFdmVudElkXTtcbiAgICAgIGRlbGV0ZSB0aW1lck1hcFtzY2hlZHVsZWRFdmVudElkXTtcbiAgICAgIGRlbGV0ZSBzeXN0ZW0uX3NuYXBzaG90Ll9zY2hlZHVsZWRFdmVudHNbc2NoZWR1bGVkRXZlbnRJZF07XG4gICAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsb2NrLmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbmNlbEFsbDogYWN0b3JSZWYgPT4ge1xuICAgICAgZm9yIChjb25zdCBzY2hlZHVsZWRFdmVudElkIGluIHN5c3RlbS5fc25hcHNob3QuX3NjaGVkdWxlZEV2ZW50cykge1xuICAgICAgICBjb25zdCBzY2hlZHVsZWRFdmVudCA9IHN5c3RlbS5fc25hcHNob3QuX3NjaGVkdWxlZEV2ZW50c1tzY2hlZHVsZWRFdmVudElkXTtcbiAgICAgICAgaWYgKHNjaGVkdWxlZEV2ZW50LnNvdXJjZSA9PT0gYWN0b3JSZWYpIHtcbiAgICAgICAgICBzY2hlZHVsZXIuY2FuY2VsKGFjdG9yUmVmLCBzY2hlZHVsZWRFdmVudC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlbmRJbnNwZWN0aW9uRXZlbnQgPSBldmVudCA9PiB7XG4gICAgaWYgKCFpbnNwZWN0aW9uT2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWRJbnNwZWN0aW9uRXZlbnQgPSB7XG4gICAgICAuLi5ldmVudCxcbiAgICAgIHJvb3RJZDogcm9vdEFjdG9yLnNlc3Npb25JZFxuICAgIH07XG4gICAgaW5zcGVjdGlvbk9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IG9ic2VydmVyLm5leHQ/LihyZXNvbHZlZEluc3BlY3Rpb25FdmVudCkpO1xuICB9O1xuICBjb25zdCBzeXN0ZW0gPSB7XG4gICAgX3NuYXBzaG90OiB7XG4gICAgICBfc2NoZWR1bGVkRXZlbnRzOiAob3B0aW9ucz8uc25hcHNob3QgJiYgb3B0aW9ucy5zbmFwc2hvdC5zY2hlZHVsZXIpID8/IHt9XG4gICAgfSxcbiAgICBfYm9va0lkOiAoKSA9PiBgeDoke2lkQ291bnRlcisrfWAsXG4gICAgX3JlZ2lzdGVyOiAoc2Vzc2lvbklkLCBhY3RvclJlZikgPT4ge1xuICAgICAgY2hpbGRyZW4uc2V0KHNlc3Npb25JZCwgYWN0b3JSZWYpO1xuICAgICAgcmV0dXJuIHNlc3Npb25JZDtcbiAgICB9LFxuICAgIF91bnJlZ2lzdGVyOiBhY3RvclJlZiA9PiB7XG4gICAgICBjaGlsZHJlbi5kZWxldGUoYWN0b3JSZWYuc2Vzc2lvbklkKTtcbiAgICAgIGNvbnN0IHN5c3RlbUlkID0gcmV2ZXJzZUtleWVkQWN0b3JzLmdldChhY3RvclJlZik7XG4gICAgICBpZiAoc3lzdGVtSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXllZEFjdG9ycy5kZWxldGUoc3lzdGVtSWQpO1xuICAgICAgICByZXZlcnNlS2V5ZWRBY3RvcnMuZGVsZXRlKGFjdG9yUmVmKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogc3lzdGVtSWQgPT4ge1xuICAgICAgcmV0dXJuIGtleWVkQWN0b3JzLmdldChzeXN0ZW1JZCk7XG4gICAgfSxcbiAgICBfc2V0OiAoc3lzdGVtSWQsIGFjdG9yUmVmKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IGtleWVkQWN0b3JzLmdldChzeXN0ZW1JZCk7XG4gICAgICBpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcgIT09IGFjdG9yUmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0b3Igd2l0aCBzeXN0ZW0gSUQgJyR7c3lzdGVtSWR9JyBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICAgIH1cbiAgICAgIGtleWVkQWN0b3JzLnNldChzeXN0ZW1JZCwgYWN0b3JSZWYpO1xuICAgICAgcmV2ZXJzZUtleWVkQWN0b3JzLnNldChhY3RvclJlZiwgc3lzdGVtSWQpO1xuICAgIH0sXG4gICAgaW5zcGVjdDogb2JzZXJ2ZXJPckZuID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdG9PYnNlcnZlcihvYnNlcnZlck9yRm4pO1xuICAgICAgaW5zcGVjdGlvbk9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgaW5zcGVjdGlvbk9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgX3NlbmRJbnNwZWN0aW9uRXZlbnQ6IHNlbmRJbnNwZWN0aW9uRXZlbnQsXG4gICAgX3JlbGF5OiAoc291cmNlLCB0YXJnZXQsIGV2ZW50KSA9PiB7XG4gICAgICBzeXN0ZW0uX3NlbmRJbnNwZWN0aW9uRXZlbnQoe1xuICAgICAgICB0eXBlOiAnQHhzdGF0ZS5ldmVudCcsXG4gICAgICAgIHNvdXJjZVJlZjogc291cmNlLFxuICAgICAgICBhY3RvclJlZjogdGFyZ2V0LFxuICAgICAgICBldmVudFxuICAgICAgfSk7XG4gICAgICB0YXJnZXQuX3NlbmQoZXZlbnQpO1xuICAgIH0sXG4gICAgc2NoZWR1bGVyLFxuICAgIGdldFNuYXBzaG90OiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfc2NoZWR1bGVkRXZlbnRzOiB7XG4gICAgICAgICAgLi4uc3lzdGVtLl9zbmFwc2hvdC5fc2NoZWR1bGVkRXZlbnRzXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBzdGFydDogKCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZWR1bGVkRXZlbnRzID0gc3lzdGVtLl9zbmFwc2hvdC5fc2NoZWR1bGVkRXZlbnRzO1xuICAgICAgc3lzdGVtLl9zbmFwc2hvdC5fc2NoZWR1bGVkRXZlbnRzID0ge307XG4gICAgICBmb3IgKGNvbnN0IHNjaGVkdWxlZElkIGluIHNjaGVkdWxlZEV2ZW50cykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc291cmNlLFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBkZWxheSxcbiAgICAgICAgICBpZFxuICAgICAgICB9ID0gc2NoZWR1bGVkRXZlbnRzW3NjaGVkdWxlZElkXTtcbiAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKHNvdXJjZSwgdGFyZ2V0LCBldmVudCwgZGVsYXksIGlkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jbG9jazogY2xvY2ssXG4gICAgX2xvZ2dlcjogbG9nZ2VyXG4gIH07XG4gIHJldHVybiBzeXN0ZW07XG59XG5cbmxldCBleGVjdXRpbmdDdXN0b21BY3Rpb24gPSBmYWxzZTtcbmNvbnN0ICQkQUNUT1JfVFlQRSA9IDE7XG5cbi8vIHRob3NlIHZhbHVlcyBhcmUgY3VycmVudGx5IHVzZWQgYnkgQHhzdGF0ZS9yZWFjdCBkaXJlY3RseSBzbyBpdCdzIGltcG9ydGFudCB0byBrZWVwIHRoZSBhc3NpZ25lZCB2YWx1ZXMgaW4gc3luY1xubGV0IFByb2Nlc3NpbmdTdGF0dXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKFByb2Nlc3NpbmdTdGF0dXMpIHtcbiAgUHJvY2Vzc2luZ1N0YXR1c1tQcm9jZXNzaW5nU3RhdHVzW1wiTm90U3RhcnRlZFwiXSA9IDBdID0gXCJOb3RTdGFydGVkXCI7XG4gIFByb2Nlc3NpbmdTdGF0dXNbUHJvY2Vzc2luZ1N0YXR1c1tcIlJ1bm5pbmdcIl0gPSAxXSA9IFwiUnVubmluZ1wiO1xuICBQcm9jZXNzaW5nU3RhdHVzW1Byb2Nlc3NpbmdTdGF0dXNbXCJTdG9wcGVkXCJdID0gMl0gPSBcIlN0b3BwZWRcIjtcbiAgcmV0dXJuIFByb2Nlc3NpbmdTdGF0dXM7XG59KHt9KTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBjbG9jazoge1xuICAgIHNldFRpbWVvdXQ6IChmbiwgbXMpID0+IHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGlkID0+IHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH1cbiAgfSxcbiAgbG9nZ2VyOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICBkZXZUb29sczogZmFsc2Vcbn07XG5cbi8qKlxuICogQW4gQWN0b3IgaXMgYSBydW5uaW5nIHByb2Nlc3MgdGhhdCBjYW4gcmVjZWl2ZSBldmVudHMsIHNlbmQgZXZlbnRzIGFuZCBjaGFuZ2VcbiAqIGl0cyBiZWhhdmlvciBiYXNlZCBvbiB0aGUgZXZlbnRzIGl0IHJlY2VpdmVzLCB3aGljaCBjYW4gY2F1c2UgZWZmZWN0cyBvdXRzaWRlXG4gKiBvZiB0aGUgYWN0b3IuIFdoZW4geW91IHJ1biBhIHN0YXRlIG1hY2hpbmUsIGl0IGJlY29tZXMgYW4gYWN0b3IuXG4gKi9cbmNsYXNzIEFjdG9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYWN0b3IgaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBsb2dpYyB3aXRoIHRoZSBwcm92aWRlZCBvcHRpb25zLFxuICAgKiBpZiBhbnkuXG4gICAqXG4gICAqIEBwYXJhbSBsb2dpYyBUaGUgbG9naWMgdG8gY3JlYXRlIGFuIGFjdG9yIGZyb21cbiAgICogQHBhcmFtIG9wdGlvbnMgQWN0b3Igb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IobG9naWMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgLyoqIFRoZSBjdXJyZW50IGludGVybmFsIHN0YXRlIG9mIHRoZSBhY3Rvci4gKi9cbiAgICB0aGlzLl9zbmFwc2hvdCA9IHZvaWQgMDtcbiAgICAvKipcbiAgICAgKiBUaGUgY2xvY2sgdGhhdCBpcyByZXNwb25zaWJsZSBmb3Igc2V0dGluZyBhbmQgY2xlYXJpbmcgdGltZW91dHMsIHN1Y2ggYXNcbiAgICAgKiBkZWxheWVkIGV2ZW50cyBhbmQgdHJhbnNpdGlvbnMuXG4gICAgICovXG4gICAgdGhpcy5jbG9jayA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgLyoqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBhY3RvciByZWxhdGl2ZSB0byBpdHMgcGFyZW50LiAqL1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5tYWlsYm94ID0gbmV3IE1haWxib3godGhpcy5fcHJvY2Vzcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMubG9nZ2VyID0gdm9pZCAwO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0aGlzLl9wcm9jZXNzaW5nU3RhdHVzID0gUHJvY2Vzc2luZ1N0YXR1cy5Ob3RTdGFydGVkO1xuICAgIC8vIEFjdG9yIFJlZlxuICAgIHRoaXMuX3BhcmVudCA9IHZvaWQgMDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgdGhpcy5fc3luY1NuYXBzaG90ID0gdm9pZCAwO1xuICAgIHRoaXMucmVmID0gdm9pZCAwO1xuICAgIC8vIFRPRE86IGFkZCB0eXBpbmdzIGZvciBzeXN0ZW1cbiAgICB0aGlzLl9hY3RvclNjb3BlID0gdm9pZCAwO1xuICAgIHRoaXMuX3N5c3RlbUlkID0gdm9pZCAwO1xuICAgIC8qKiBUaGUgZ2xvYmFsbHkgdW5pcXVlIHByb2Nlc3MgSUQgZm9yIHRoaXMgaW52b2NhdGlvbi4gKi9cbiAgICB0aGlzLnNlc3Npb25JZCA9IHZvaWQgMDtcbiAgICAvKiogVGhlIHN5c3RlbSB0byB3aGljaCB0aGlzIGFjdG9yIGJlbG9uZ3MuICovXG4gICAgdGhpcy5zeXN0ZW0gPSB2b2lkIDA7XG4gICAgdGhpcy5fZG9uZUV2ZW50ID0gdm9pZCAwO1xuICAgIHRoaXMuc3JjID0gdm9pZCAwO1xuICAgIC8vIGFycmF5IG9mIGZ1bmN0aW9ucyB0byBkZWZlclxuICAgIHRoaXMuX2RlZmVycmVkID0gW107XG4gICAgY29uc3QgcmVzb2x2ZWRPcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCB7XG4gICAgICBjbG9jayxcbiAgICAgIGxvZ2dlcixcbiAgICAgIHBhcmVudCxcbiAgICAgIHN5bmNTbmFwc2hvdCxcbiAgICAgIGlkLFxuICAgICAgc3lzdGVtSWQsXG4gICAgICBpbnNwZWN0XG4gICAgfSA9IHJlc29sdmVkT3B0aW9ucztcbiAgICB0aGlzLnN5c3RlbSA9IHBhcmVudCA/IHBhcmVudC5zeXN0ZW0gOiBjcmVhdGVTeXN0ZW0odGhpcywge1xuICAgICAgY2xvY2ssXG4gICAgICBsb2dnZXJcbiAgICB9KTtcbiAgICBpZiAoaW5zcGVjdCAmJiAhcGFyZW50KSB7XG4gICAgICAvLyBBbHdheXMgaW5zcGVjdCBhdCB0aGUgc3lzdGVtLWxldmVsXG4gICAgICB0aGlzLnN5c3RlbS5pbnNwZWN0KHRvT2JzZXJ2ZXIoaW5zcGVjdCkpO1xuICAgIH1cbiAgICB0aGlzLnNlc3Npb25JZCA9IHRoaXMuc3lzdGVtLl9ib29rSWQoKTtcbiAgICB0aGlzLmlkID0gaWQgPz8gdGhpcy5zZXNzaW9uSWQ7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zPy5sb2dnZXIgPz8gdGhpcy5zeXN0ZW0uX2xvZ2dlcjtcbiAgICB0aGlzLmNsb2NrID0gb3B0aW9ucz8uY2xvY2sgPz8gdGhpcy5zeXN0ZW0uX2Nsb2NrO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl9zeW5jU25hcHNob3QgPSBzeW5jU25hcHNob3Q7XG4gICAgdGhpcy5vcHRpb25zID0gcmVzb2x2ZWRPcHRpb25zO1xuICAgIHRoaXMuc3JjID0gcmVzb2x2ZWRPcHRpb25zLnNyYyA/PyBsb2dpYztcbiAgICB0aGlzLnJlZiA9IHRoaXM7XG4gICAgdGhpcy5fYWN0b3JTY29wZSA9IHtcbiAgICAgIHNlbGY6IHRoaXMsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBsb2dnZXI6IHRoaXMubG9nZ2VyLFxuICAgICAgZGVmZXI6IGZuID0+IHtcbiAgICAgICAgdGhpcy5fZGVmZXJyZWQucHVzaChmbik7XG4gICAgICB9LFxuICAgICAgc3lzdGVtOiB0aGlzLnN5c3RlbSxcbiAgICAgIHN0b3BDaGlsZDogY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuX3BhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHN0b3AgY2hpbGQgYWN0b3IgJHtjaGlsZC5pZH0gb2YgJHt0aGlzLmlkfSBiZWNhdXNlIGl0IGlzIG5vdCBhIGNoaWxkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQuX3N0b3AoKTtcbiAgICAgIH0sXG4gICAgICBlbWl0OiBlbWl0dGVkRXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChlbWl0dGVkRXZlbnQudHlwZSk7XG4gICAgICAgIGNvbnN0IHdpbGRjYXJkTGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmdldCgnKicpO1xuICAgICAgICBpZiAoIWxpc3RlbmVycyAmJiAhd2lsZGNhcmRMaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxMaXN0ZW5lcnMgPSBbLi4uKGxpc3RlbmVycyA/IGxpc3RlbmVycy52YWx1ZXMoKSA6IFtdKSwgLi4uKHdpbGRjYXJkTGlzdGVuZXIgPyB3aWxkY2FyZExpc3RlbmVyLnZhbHVlcygpIDogW10pXTtcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIGFsbExpc3RlbmVycykge1xuICAgICAgICAgIGhhbmRsZXIoZW1pdHRlZEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGlvbkV4ZWN1dG9yOiBhY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBleGVjID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FjdG9yU2NvcGUuc3lzdGVtLl9zZW5kSW5zcGVjdGlvbkV2ZW50KHtcbiAgICAgICAgICAgIHR5cGU6ICdAeHN0YXRlLmFjdGlvbicsXG4gICAgICAgICAgICBhY3RvclJlZjogdGhpcyxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBhY3Rpb24ucGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFhY3Rpb24uZXhlYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzYXZlRXhlY3V0aW5nQ3VzdG9tQWN0aW9uID0gZXhlY3V0aW5nQ3VzdG9tQWN0aW9uO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleGVjdXRpbmdDdXN0b21BY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgYWN0aW9uLmV4ZWMoYWN0aW9uLmluZm8sIGFjdGlvbi5wYXJhbXMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBleGVjdXRpbmdDdXN0b21BY3Rpb24gPSBzYXZlRXhlY3V0aW5nQ3VzdG9tQWN0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmdTdGF0dXMgPT09IFByb2Nlc3NpbmdTdGF0dXMuUnVubmluZykge1xuICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWZlcnJlZC5wdXNoKGV4ZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBzZW5kIG1ldGhvZCBpcyBib3VuZCB0byB0aGlzIEFjdG9yIGluc3RhbmNlXG4gICAgLy8gaWYgZGVzdHJ1Y3R1cmVkXG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zeXN0ZW0uX3NlbmRJbnNwZWN0aW9uRXZlbnQoe1xuICAgICAgdHlwZTogJ0B4c3RhdGUuYWN0b3InLFxuICAgICAgYWN0b3JSZWY6IHRoaXNcbiAgICB9KTtcbiAgICBpZiAoc3lzdGVtSWQpIHtcbiAgICAgIHRoaXMuX3N5c3RlbUlkID0gc3lzdGVtSWQ7XG4gICAgICB0aGlzLnN5c3RlbS5fc2V0KHN5c3RlbUlkLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5faW5pdFN0YXRlKG9wdGlvbnM/LnNuYXBzaG90ID8/IG9wdGlvbnM/LnN0YXRlKTtcbiAgICBpZiAoc3lzdGVtSWQgJiYgdGhpcy5fc25hcHNob3Quc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5zeXN0ZW0uX3VucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuICB9XG4gIF9pbml0U3RhdGUocGVyc2lzdGVkU3RhdGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fc25hcHNob3QgPSBwZXJzaXN0ZWRTdGF0ZSA/IHRoaXMubG9naWMucmVzdG9yZVNuYXBzaG90ID8gdGhpcy5sb2dpYy5yZXN0b3JlU25hcHNob3QocGVyc2lzdGVkU3RhdGUsIHRoaXMuX2FjdG9yU2NvcGUpIDogcGVyc2lzdGVkU3RhdGUgOiB0aGlzLmxvZ2ljLmdldEluaXRpYWxTbmFwc2hvdCh0aGlzLl9hY3RvclNjb3BlLCB0aGlzLm9wdGlvbnM/LmlucHV0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGlmIHdlIGdldCBoZXJlIHRoZW4gaXQgbWVhbnMgdGhhdCB3ZSBhc3NpZ24gYSB2YWx1ZSB0byB0aGlzLl9zbmFwc2hvdCB0aGF0IGlzIG5vdCBvZiB0aGUgY29ycmVjdCB0eXBlXG4gICAgICAvLyB3ZSBjYW4ndCBnZXQgdGhlIHRydWUgYFRTbmFwc2hvdCAmIHsgc3RhdHVzOiAnZXJyb3InOyB9YCwgaXQncyBpbXBvc3NpYmxlXG4gICAgICAvLyBzbyByaWdodCBub3cgdGhpcyBpcyBhIGxpZSBvZiBzb3J0c1xuICAgICAgdGhpcy5fc25hcHNob3QgPSB7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgb3V0cHV0OiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHVwZGF0ZShzbmFwc2hvdCwgZXZlbnQpIHtcbiAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICB0aGlzLl9zbmFwc2hvdCA9IHNuYXBzaG90O1xuXG4gICAgLy8gRXhlY3V0ZSBkZWZlcnJlZCBlZmZlY3RzXG4gICAgbGV0IGRlZmVycmVkRm47XG4gICAgd2hpbGUgKGRlZmVycmVkRm4gPSB0aGlzLl9kZWZlcnJlZC5zaGlmdCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkZWZlcnJlZEZuKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gdGhpcyBlcnJvciBjYW4gb25seSBiZSBjYXVnaHQgd2hlbiBleGVjdXRpbmcgKmluaXRpYWwqIGFjdGlvbnNcbiAgICAgICAgLy8gaXQncyB0aGUgb25seSB0aW1lIHdoZW4gd2UgY2FsbCBhY3Rpb25zIHByb3ZpZGVkIGJ5IHRoZSB1c2VyIHRocm91Z2ggdGhvc2UgZGVmZXJyZWRzXG4gICAgICAgIC8vIHdoZW4gdGhlIGFjdG9yIGlzIGFscmVhZHkgcnVubmluZyB3ZSBhbHdheXMgZXhlY3V0ZSB0aGVtIHN5bmNocm9ub3VzbHkgd2hpbGUgdHJhbnNpdGlvbmluZ1xuICAgICAgICAvLyBubyBcImJ1aWx0aW4gZGVmZXJyZWRcIiBzaG91bGQgYWN0dWFsbHkgdGhyb3cgYW4gZXJyb3Igc2luY2UgdGhleSBhcmUgZWl0aGVyIHNhZmVcbiAgICAgICAgLy8gb3IgdGhlIGNvbnRyb2wgZmxvdyBpcyBwYXNzZWQgdGhyb3VnaCB0aGUgbWFpbGJveCBhbmQgZXJyb3JzIHNob3VsZCBiZSBjYXVnaHQgYnkgdGhlIGBfcHJvY2Vzc2AgdXNlZCBieSB0aGUgbWFpbGJveFxuICAgICAgICB0aGlzLl9kZWZlcnJlZC5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdCA9IHtcbiAgICAgICAgICAuLi5zbmFwc2hvdCxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuX3NuYXBzaG90LnN0YXR1cykge1xuICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0Py4oc25hcHNob3QpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgLy8gbmV4dCBvYnNlcnZlcnMgYXJlIG1lYW50IHRvIGJlIG5vdGlmaWVkIGFib3V0IGRvbmUgc25hcHNob3RzXG4gICAgICAgIC8vIHRoaXMgY2FuIGJlIHNlZW4gYXMgc29tZXRoaW5nIHRoYXQgaXMgZGlmZmVyZW50IGZyb20gaG93IG9ic2VydmFibGUgd29ya1xuICAgICAgICAvLyBidXQgd2l0aCBvYnNlcnZhYmxlcyBgY29tcGxldGVgIGNhbGxiYWNrIGlzIGNhbGxlZCB3aXRob3V0IGFueSBhcmd1bWVudHNcbiAgICAgICAgLy8gaXQncyBtb3JlIGVyZ29ub21pYyBmb3IgWFN0YXRlIHRvIHRyZWF0IGEgZG9uZSBzbmFwc2hvdCBhcyBhIFwibmV4dFwiIHZhbHVlXG4gICAgICAgIC8vIGFuZCB0aGUgY29tcGxldGlvbiBldmVudCBhcyBzb21ldGhpbmcgdGhhdCBpcyBzZXBhcmF0ZSxcbiAgICAgICAgLy8gc29tZXRoaW5nIHRoYXQgbWVyZWx5IGZvbGxvd3MgZW1pdHRpbmcgdGhhdCBkb25lIHNuYXBzaG90XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dD8uKHNuYXBzaG90KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3BQcm9jZWR1cmUoKTtcbiAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fZG9uZUV2ZW50ID0gY3JlYXRlRG9uZUFjdG9yRXZlbnQodGhpcy5pZCwgdGhpcy5fc25hcHNob3Qub3V0cHV0KTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgIHRoaXMuc3lzdGVtLl9yZWxheSh0aGlzLCB0aGlzLl9wYXJlbnQsIHRoaXMuX2RvbmVFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuX2Vycm9yKHRoaXMuX3NuYXBzaG90LmVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc3lzdGVtLl9zZW5kSW5zcGVjdGlvbkV2ZW50KHtcbiAgICAgIHR5cGU6ICdAeHN0YXRlLnNuYXBzaG90JyxcbiAgICAgIGFjdG9yUmVmOiB0aGlzLFxuICAgICAgZXZlbnQsXG4gICAgICBzbmFwc2hvdFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSBhbiBvYnNlcnZlciB0byBhbiBhY3RvcuKAmXMgc25hcHNob3QgdmFsdWVzLlxuICAgKlxuICAgKiBAcmVtYXJrc1xuICAgKiBUaGUgb2JzZXJ2ZXIgd2lsbCByZWNlaXZlIHRoZSBhY3RvcuKAmXMgc25hcHNob3QgdmFsdWUgd2hlbiBpdCBpcyBlbWl0dGVkLlxuICAgKiBUaGUgb2JzZXJ2ZXIgY2FuIGJlOlxuICAgKlxuICAgKiAtIEEgcGxhaW4gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgbGF0ZXN0IHNuYXBzaG90LCBvclxuICAgKiAtIEFuIG9ic2VydmVyIG9iamVjdCB3aG9zZSBgLm5leHQoc25hcHNob3QpYCBtZXRob2QgcmVjZWl2ZXMgdGhlIGxhdGVzdFxuICAgKiAgIHNuYXBzaG90XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIC8vIE9ic2VydmVyIGFzIGEgcGxhaW4gZnVuY3Rpb25cbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gYWN0b3Iuc3Vic2NyaWJlKChzbmFwc2hvdCkgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKHNuYXBzaG90KTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiAvLyBPYnNlcnZlciBhcyBhbiBvYmplY3RcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gYWN0b3Iuc3Vic2NyaWJlKHtcbiAgICogICBuZXh0KHNuYXBzaG90KSB7XG4gICAqICAgICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XG4gICAqICAgfSxcbiAgICogICBlcnJvcihlcnIpIHtcbiAgICogICAgIC8vIC4uLlxuICAgKiAgIH0sXG4gICAqICAgY29tcGxldGUoKSB7XG4gICAqICAgICAvLyAuLi5cbiAgICogICB9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHJldHVybiB2YWx1ZSBvZiBgYWN0b3Iuc3Vic2NyaWJlKG9ic2VydmVyKWAgaXMgYSBzdWJzY3JpcHRpb24gb2JqZWN0XG4gICAqIHRoYXQgaGFzIGFuIGAudW5zdWJzY3JpYmUoKWAgbWV0aG9kLiBZb3UgY2FuIGNhbGxcbiAgICogYHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpYCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2ZXI6XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGFjdG9yLnN1YnNjcmliZSgoc25hcHNob3QpID0+IHtcbiAgICogICAvLyAuLi5cbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFVuc3Vic2NyaWJlIHRoZSBvYnNlcnZlclxuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIFdoZW4gdGhlIGFjdG9yIGlzIHN0b3BwZWQsIGFsbCBvZiBpdHMgb2JzZXJ2ZXJzIHdpbGwgYXV0b21hdGljYWxseSBiZVxuICAgKiB1bnN1YnNjcmliZWQuXG4gICAqXG4gICAqIEBwYXJhbSBvYnNlcnZlciAtIEVpdGhlciBhIHBsYWluIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIGxhdGVzdFxuICAgKiAgIHNuYXBzaG90LCBvciBhbiBvYnNlcnZlciBvYmplY3Qgd2hvc2UgYC5uZXh0KHNuYXBzaG90KWAgbWV0aG9kIHJlY2VpdmVzXG4gICAqICAgdGhlIGxhdGVzdCBzbmFwc2hvdFxuICAgKi9cblxuICBzdWJzY3JpYmUobmV4dExpc3RlbmVyT3JPYnNlcnZlciwgZXJyb3JMaXN0ZW5lciwgY29tcGxldGVMaXN0ZW5lcikge1xuICAgIGNvbnN0IG9ic2VydmVyID0gdG9PYnNlcnZlcihuZXh0TGlzdGVuZXJPck9ic2VydmVyLCBlcnJvckxpc3RlbmVyLCBjb21wbGV0ZUxpc3RlbmVyKTtcbiAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1N0YXR1cyAhPT0gUHJvY2Vzc2luZ1N0YXR1cy5TdG9wcGVkKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuX3NuYXBzaG90LnN0YXR1cykge1xuICAgICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGU/LigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLl9zbmFwc2hvdC5lcnJvcjtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQodHlwZSk7XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc2V0KHR5cGUsIGxpc3RlbmVycyk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRIYW5kbGVyID0gaGFuZGxlci5iaW5kKHVuZGVmaW5lZCk7XG4gICAgbGlzdGVuZXJzLmFkZCh3cmFwcGVkSGFuZGxlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVycy5kZWxldGUod3JhcHBlZEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiogU3RhcnRzIHRoZSBBY3RvciBmcm9tIHRoZSBpbml0aWFsIHN0YXRlICovXG4gIHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nU3RhdHVzID09PSBQcm9jZXNzaW5nU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICAgIC8vIERvIG5vdCByZXN0YXJ0IHRoZSBzZXJ2aWNlIGlmIGl0IGlzIGFscmVhZHkgc3RhcnRlZFxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zeW5jU25hcHNob3QpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogc25hcHNob3QgPT4ge1xuICAgICAgICAgIGlmIChzbmFwc2hvdC5zdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICB0aGlzLnN5c3RlbS5fcmVsYXkodGhpcywgdGhpcy5fcGFyZW50LCB7XG4gICAgICAgICAgICAgIHR5cGU6IGB4c3RhdGUuc25hcHNob3QuJHt0aGlzLmlkfWAsXG4gICAgICAgICAgICAgIHNuYXBzaG90XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3lzdGVtLl9yZWdpc3Rlcih0aGlzLnNlc3Npb25JZCwgdGhpcyk7XG4gICAgaWYgKHRoaXMuX3N5c3RlbUlkKSB7XG4gICAgICB0aGlzLnN5c3RlbS5fc2V0KHRoaXMuX3N5c3RlbUlkLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5fcHJvY2Vzc2luZ1N0YXR1cyA9IFByb2Nlc3NpbmdTdGF0dXMuUnVubmluZztcblxuICAgIC8vIFRPRE86IHRoaXMgaXNuJ3QgY29ycmVjdCB3aGVuIHJlaHlkcmF0aW5nXG4gICAgY29uc3QgaW5pdEV2ZW50ID0gY3JlYXRlSW5pdEV2ZW50KHRoaXMub3B0aW9ucy5pbnB1dCk7XG4gICAgdGhpcy5zeXN0ZW0uX3NlbmRJbnNwZWN0aW9uRXZlbnQoe1xuICAgICAgdHlwZTogJ0B4c3RhdGUuZXZlbnQnLFxuICAgICAgc291cmNlUmVmOiB0aGlzLl9wYXJlbnQsXG4gICAgICBhY3RvclJlZjogdGhpcyxcbiAgICAgIGV2ZW50OiBpbml0RXZlbnRcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLl9zbmFwc2hvdC5zdGF0dXM7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICAvLyBhIHN0YXRlIG1hY2hpbmUgY2FuIGJlIFwiZG9uZVwiIHVwb24gaW5pdGlhbGl6YXRpb24gKGl0IGNvdWxkIHJlYWNoIGEgZmluYWwgc3RhdGUgdXNpbmcgaW5pdGlhbCBtaWNyb3N0ZXBzKVxuICAgICAgICAvLyB3ZSBzdGlsbCBuZWVkIHRvIGNvbXBsZXRlIG9ic2VydmVycywgZmx1c2ggZGVmZXJyZWRzIGV0Y1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLl9zbmFwc2hvdCwgaW5pdEV2ZW50KTtcbiAgICAgICAgLy8gVE9ETzogcmV0aGluayBjbGVhbnVwIG9mIG9ic2VydmVycywgbWFpbGJveCwgZXRjXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB0aGlzLl9lcnJvcih0aGlzLl9zbmFwc2hvdC5lcnJvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5zeXN0ZW0uc3RhcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9naWMuc3RhcnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9naWMuc3RhcnQodGhpcy5fc25hcHNob3QsIHRoaXMuX2FjdG9yU2NvcGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90ID0ge1xuICAgICAgICAgIC4uLnRoaXMuX3NuYXBzaG90LFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IHRoaXMgbm90aWZpZXMgYWxsIHN1YnNjcmliZXJzIGJ1dCB1c3VhbGx5IHRoaXMgaXMgcmVkdW5kYW50XG4gICAgLy8gdGhlcmUgaXMgbm8gcmVhbCBjaGFuZ2UgaGFwcGVuaW5nIGhlcmVcbiAgICAvLyB3ZSBuZWVkIHRvIHJldGhpbmsgaWYgdGhpcyBuZWVkcyB0byBiZSByZWZhY3RvcmVkXG4gICAgdGhpcy51cGRhdGUodGhpcy5fc25hcHNob3QsIGluaXRFdmVudCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZXZUb29scykge1xuICAgICAgdGhpcy5hdHRhY2hEZXZUb29scygpO1xuICAgIH1cbiAgICB0aGlzLm1haWxib3guc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBfcHJvY2VzcyhldmVudCkge1xuICAgIGxldCBuZXh0U3RhdGU7XG4gICAgbGV0IGNhdWdodEVycm9yO1xuICAgIHRyeSB7XG4gICAgICBuZXh0U3RhdGUgPSB0aGlzLmxvZ2ljLnRyYW5zaXRpb24odGhpcy5fc25hcHNob3QsIGV2ZW50LCB0aGlzLl9hY3RvclNjb3BlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIHdlIHdyYXAgaXQgaW4gYSBib3ggc28gd2UgY2FuIHJldGhyb3cgaXQgbGF0ZXIgZXZlbiBpZiBmYWxzeSB2YWx1ZSBnZXRzIGNhdWdodCBoZXJlXG4gICAgICBjYXVnaHRFcnJvciA9IHtcbiAgICAgICAgZXJyXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoY2F1Z2h0RXJyb3IpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXJyXG4gICAgICB9ID0gY2F1Z2h0RXJyb3I7XG4gICAgICB0aGlzLl9zbmFwc2hvdCA9IHtcbiAgICAgICAgLi4udGhpcy5fc25hcHNob3QsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgZXJyb3I6IGVyclxuICAgICAgfTtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKG5leHRTdGF0ZSwgZXZlbnQpO1xuICAgIGlmIChldmVudC50eXBlID09PSBYU1RBVEVfU1RPUCkge1xuICAgICAgdGhpcy5fc3RvcFByb2NlZHVyZSgpO1xuICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbiAgX3N0b3AoKSB7XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmdTdGF0dXMgPT09IFByb2Nlc3NpbmdTdGF0dXMuU3RvcHBlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubWFpbGJveC5jbGVhcigpO1xuICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nU3RhdHVzID09PSBQcm9jZXNzaW5nU3RhdHVzLk5vdFN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NpbmdTdGF0dXMgPSBQcm9jZXNzaW5nU3RhdHVzLlN0b3BwZWQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5tYWlsYm94LmVucXVldWUoe1xuICAgICAgdHlwZTogWFNUQVRFX1NUT1BcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTdG9wcyB0aGUgQWN0b3IgYW5kIHVuc3Vic2NyaWJlIGFsbCBsaXN0ZW5lcnMuICovXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIG5vbi1yb290IGFjdG9yIGNhbm5vdCBiZSBzdG9wcGVkIGRpcmVjdGx5LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RvcCgpO1xuICB9XG4gIF9jb21wbGV0ZSgpIHtcbiAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZT8uKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlcnMuY2xlYXIoKTtcbiAgfVxuICBfcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgaWYgKCF0aGlzLm9ic2VydmVycy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVwb3J0RXJyb3IgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICBjb25zdCBlcnJvckxpc3RlbmVyID0gb2JzZXJ2ZXIuZXJyb3I7XG4gICAgICByZXBvcnRFcnJvciB8fD0gIWVycm9yTGlzdGVuZXI7XG4gICAgICB0cnkge1xuICAgICAgICBlcnJvckxpc3RlbmVyPy4oZXJyKTtcbiAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyMik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZXJzLmNsZWFyKCk7XG4gICAgaWYgKHJlcG9ydEVycm9yKSB7XG4gICAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuICBfZXJyb3IoZXJyKSB7XG4gICAgdGhpcy5fc3RvcFByb2NlZHVyZSgpO1xuICAgIHRoaXMuX3JlcG9ydEVycm9yKGVycik7XG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5zeXN0ZW0uX3JlbGF5KHRoaXMsIHRoaXMuX3BhcmVudCwgY3JlYXRlRXJyb3JBY3RvckV2ZW50KHRoaXMuaWQsIGVycikpO1xuICAgIH1cbiAgfVxuICAvLyBUT0RPOiBhdG0gY2hpbGRyZW4gZG9uJ3QgYmVsb25nIGVudGlyZWx5IHRvIHRoZSBhY3RvciBzb1xuICAvLyBpbiBhIHdheSAtIGl0J3Mgbm90IGV2ZW4gc3VwZXIgYXdhcmUgb2YgdGhlbVxuICAvLyBzbyB3ZSBjYW4ndCBzdG9wIHRoZW0gZnJvbSBoZXJlIGJ1dCB3ZSByZWFsbHkgc2hvdWxkIVxuICAvLyByaWdodCBub3csIHRoZXkgYXJlIGJlaW5nIHN0b3BwZWQgd2l0aGluIHRoZSBtYWNoaW5lJ3MgdHJhbnNpdGlvblxuICAvLyBidXQgdGhhdCBjb3VsZCB0aHJvdyBhbmQgbGVhdmUgdXMgd2l0aCBcIm9ycGhhbmVkXCIgYWN0aXZlIGFjdG9yc1xuICBfc3RvcFByb2NlZHVyZSgpIHtcbiAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1N0YXR1cyAhPT0gUHJvY2Vzc2luZ1N0YXR1cy5SdW5uaW5nKSB7XG4gICAgICAvLyBBY3RvciBhbHJlYWR5IHN0b3BwZWQ7IGRvIG5vdGhpbmdcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCBhbGwgZGVsYXllZCBldmVudHNcbiAgICB0aGlzLnN5c3RlbS5zY2hlZHVsZXIuY2FuY2VsQWxsKHRoaXMpO1xuXG4gICAgLy8gVE9ETzogbWFpbGJveC5yZXNldFxuICAgIHRoaXMubWFpbGJveC5jbGVhcigpO1xuICAgIC8vIFRPRE86IGFmdGVyIGBzdG9wYCB3ZSBtdXN0IHByZXBhcmUgb3Vyc2VsdmVzIGZvciByZWNlaXZpbmcgZXZlbnRzIGFnYWluXG4gICAgLy8gZXZlbnRzIHNlbnQgKmFmdGVyKiBzdG9wIHNpZ25hbCBtdXN0IGJlIHF1ZXVlZFxuICAgIC8vIGl0IHNlZW1zIGxpa2UgdGhpcyBzaG91bGQgYmUgdGhlIGNvbW1vbiBiZWhhdmlvciBmb3IgYWxsIG9mIG91ciBjb25zdW1lcnNcbiAgICAvLyBzbyBwZXJoYXBzIHRoaXMgc2hvdWxkIGJlIHVuaWZpZWQgc29tZWhvdyBmb3IgYWxsIG9mIHRoZW1cbiAgICB0aGlzLm1haWxib3ggPSBuZXcgTWFpbGJveCh0aGlzLl9wcm9jZXNzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdTdGF0dXMgPSBQcm9jZXNzaW5nU3RhdHVzLlN0b3BwZWQ7XG4gICAgdGhpcy5zeXN0ZW0uX3VucmVnaXN0ZXIodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmdTdGF0dXMgPT09IFByb2Nlc3NpbmdTdGF0dXMuU3RvcHBlZCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAge1xuICAgICAgICBjb25zdCBldmVudFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV2ZW50KTtcbiAgICAgICAgY29uc29sZS53YXJuKGBFdmVudCBcIiR7ZXZlbnQudHlwZX1cIiB3YXMgc2VudCB0byBzdG9wcGVkIGFjdG9yIFwiJHt0aGlzLmlkfSAoJHt0aGlzLnNlc3Npb25JZH0pXCIuIFRoaXMgYWN0b3IgaGFzIGFscmVhZHkgcmVhY2hlZCBpdHMgZmluYWwgc3RhdGUsIGFuZCB3aWxsIG5vdCB0cmFuc2l0aW9uLlxcbkV2ZW50OiAke2V2ZW50U3RyaW5nfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1haWxib3guZW5xdWV1ZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHJ1bm5pbmcgQWN0b3IgdG8gdHJpZ2dlciBhIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gc2VuZFxuICAgKi9cbiAgc2VuZChldmVudCkge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9ubHkgZXZlbnQgb2JqZWN0cyBtYXkgYmUgc2VudCB0byBhY3RvcnM7IHVzZSAuc2VuZCh7IHR5cGU6IFwiJHtldmVudH1cIiB9KSBpbnN0ZWFkYCk7XG4gICAgfVxuICAgIHRoaXMuc3lzdGVtLl9yZWxheSh1bmRlZmluZWQsIHRoaXMsIGV2ZW50KTtcbiAgfVxuICBhdHRhY2hEZXZUb29scygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZXZUb29sc1xuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKGRldlRvb2xzKSB7XG4gICAgICBjb25zdCByZXNvbHZlZERldlRvb2xzQWRhcHRlciA9IHR5cGVvZiBkZXZUb29scyA9PT0gJ2Z1bmN0aW9uJyA/IGRldlRvb2xzIDogZGV2VG9vbHNBZGFwdGVyO1xuICAgICAgcmVzb2x2ZWREZXZUb29sc0FkYXB0ZXIodGhpcyk7XG4gICAgfVxuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeHN0YXRlJCR0eXBlOiAkJEFDVE9SX1RZUEUsXG4gICAgICBpZDogdGhpcy5pZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT2J0YWluIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgYWN0b3IsIHdoaWNoIGNhbiBiZSBwZXJzaXN0ZWQuXG4gICAqXG4gICAqIEByZW1hcmtzXG4gICAqIFRoZSBpbnRlcm5hbCBzdGF0ZSBjYW4gYmUgcGVyc2lzdGVkIGZyb20gYW55IGFjdG9yLCBub3Qgb25seSBtYWNoaW5lcy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBwZXJzaXN0ZWQgc3RhdGUgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBzbmFwc2hvdCBmcm9tXG4gICAqIHtAbGluayBBY3Rvci5nZXRTbmFwc2hvdH0uIFBlcnNpc3RlZCBzdGF0ZSByZXByZXNlbnRzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZlxuICAgKiB0aGUgYWN0b3IsIHdoaWxlIHNuYXBzaG90cyByZXByZXNlbnQgdGhlIGFjdG9yJ3MgbGFzdCBlbWl0dGVkIHZhbHVlLlxuICAgKlxuICAgKiBDYW4gYmUgcmVzdG9yZWQgd2l0aCB7QGxpbmsgQWN0b3JPcHRpb25zLnN0YXRlfVxuICAgKiBAc2VlIGh0dHBzOi8vc3RhdGVseS5haS9kb2NzL3BlcnNpc3RlbmNlXG4gICAqL1xuXG4gIGdldFBlcnNpc3RlZFNuYXBzaG90KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpYy5nZXRQZXJzaXN0ZWRTbmFwc2hvdCh0aGlzLl9zbmFwc2hvdCwgb3B0aW9ucyk7XG4gIH1cbiAgW3N5bWJvbE9ic2VydmFibGVdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYW4gYWN0b3LigJlzIHNuYXBzaG90IHN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIEByZW1hcmtzXG4gICAqIFRoZSBzbmFwc2hvdCByZXByZXNlbnQgYW4gYWN0b3IncyBsYXN0IGVtaXR0ZWQgdmFsdWUuXG4gICAqXG4gICAqIFdoZW4gYW4gYWN0b3IgcmVjZWl2ZXMgYW4gZXZlbnQsIGl0cyBpbnRlcm5hbCBzdGF0ZSBtYXkgY2hhbmdlLiBBbiBhY3RvclxuICAgKiBtYXkgZW1pdCBhIHNuYXBzaG90IHdoZW4gYSBzdGF0ZSB0cmFuc2l0aW9uIG9jY3Vycy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHNvbWUgYWN0b3JzLCBzdWNoIGFzIGNhbGxiYWNrIGFjdG9ycyBnZW5lcmF0ZWQgd2l0aFxuICAgKiBgZnJvbUNhbGxiYWNrYCwgd2lsbCBub3QgZW1pdCBzbmFwc2hvdHMuXG4gICAqIEBzZWUge0BsaW5rIEFjdG9yLnN1YnNjcmliZX0gdG8gc3Vic2NyaWJlIHRvIGFuIGFjdG9y4oCZcyBzbmFwc2hvdCB2YWx1ZXMuXG4gICAqIEBzZWUge0BsaW5rIEFjdG9yLmdldFBlcnNpc3RlZFNuYXBzaG90fSB0byBwZXJzaXN0IHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBhbiBhY3RvciAod2hpY2ggaXMgbW9yZSB0aGFuIGp1c3QgYSBzbmFwc2hvdCkuXG4gICAqL1xuICBnZXRTbmFwc2hvdCgpIHtcbiAgICBpZiAoIXRoaXMuX3NuYXBzaG90KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFNuYXBzaG90IGNhbid0IGJlIHJlYWQgd2hpbGUgdGhlIGFjdG9yIGluaXRpYWxpemVzIGl0c2VsZmApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc25hcHNob3Q7XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBhY3RvciBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGFjdG9yIGxvZ2ljIHdpdGggdGhlIHByb3ZpZGVkXG4gKiBvcHRpb25zLCBpZiBhbnkuXG4gKlxuICogQHJlbWFya3NcbiAqIFdoZW4geW91IGNyZWF0ZSBhbiBhY3RvciBmcm9tIGFjdG9yIGxvZ2ljIHZpYSBgY3JlYXRlQWN0b3IobG9naWMpYCwgeW91XG4gKiBpbXBsaWNpdGx5IGNyZWF0ZSBhbiBhY3RvciBzeXN0ZW0gd2hlcmUgdGhlIGNyZWF0ZWQgYWN0b3IgaXMgdGhlIHJvb3QgYWN0b3IuXG4gKiBBbnkgYWN0b3JzIHNwYXduZWQgZnJvbSB0aGlzIHJvb3QgYWN0b3IgYW5kIGl0cyBkZXNjZW5kYW50cyBhcmUgcGFydCBvZiB0aGF0XG4gKiBhY3RvciBzeXN0ZW0uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjcmVhdGVBY3RvciB9IGZyb20gJ3hzdGF0ZSc7XG4gKiBpbXBvcnQgeyBzb21lQWN0b3JMb2dpYyB9IGZyb20gJy4vc29tZUFjdG9yTG9naWMudHMnO1xuICpcbiAqIC8vIENyZWF0aW5nIHRoZSBhY3Rvciwgd2hpY2ggaW1wbGljaXRseSBjcmVhdGVzIGFuIGFjdG9yIHN5c3RlbSB3aXRoIGl0c2VsZiBhcyB0aGUgcm9vdCBhY3RvclxuICogY29uc3QgYWN0b3IgPSBjcmVhdGVBY3Rvcihzb21lQWN0b3JMb2dpYyk7XG4gKlxuICogYWN0b3Iuc3Vic2NyaWJlKChzbmFwc2hvdCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhzbmFwc2hvdCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBBY3RvcnMgbXVzdCBiZSBzdGFydGVkIGJ5IGNhbGxpbmcgYGFjdG9yLnN0YXJ0KClgLCB3aGljaCB3aWxsIGFsc28gc3RhcnQgdGhlIGFjdG9yIHN5c3RlbS5cbiAqIGFjdG9yLnN0YXJ0KCk7XG4gKlxuICogLy8gQWN0b3JzIGNhbiByZWNlaXZlIGV2ZW50c1xuICogYWN0b3Iuc2VuZCh7IHR5cGU6ICdzb21lRXZlbnQnIH0pO1xuICpcbiAqIC8vIFlvdSBjYW4gc3RvcCByb290IGFjdG9ycyBieSBjYWxsaW5nIGBhY3Rvci5zdG9wKClgLCB3aGljaCB3aWxsIGFsc28gc3RvcCB0aGUgYWN0b3Igc3lzdGVtIGFuZCBhbGwgYWN0b3JzIGluIHRoYXQgc3lzdGVtLlxuICogYWN0b3Iuc3RvcCgpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGxvZ2ljIC0gVGhlIGFjdG9yIGxvZ2ljIHRvIGNyZWF0ZSBhbiBhY3RvciBmcm9tLiBGb3IgYSBzdGF0ZSBtYWNoaW5lXG4gKiAgIGFjdG9yIGxvZ2ljIGNyZWF0b3IsIHNlZSB7QGxpbmsgY3JlYXRlTWFjaGluZX0uIE90aGVyIGFjdG9yIGxvZ2ljIGNyZWF0b3JzXG4gKiAgIGluY2x1ZGUge0BsaW5rIGZyb21DYWxsYmFja30sIHtAbGluayBmcm9tRXZlbnRPYnNlcnZhYmxlfSxcbiAqICAge0BsaW5rIGZyb21PYnNlcnZhYmxlfSwge0BsaW5rIGZyb21Qcm9taXNlfSwgYW5kIHtAbGluayBmcm9tVHJhbnNpdGlvbn0uXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFjdG9yIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWN0b3IobG9naWMsIC4uLltvcHRpb25zXSkge1xuICByZXR1cm4gbmV3IEFjdG9yKGxvZ2ljLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVycHJldGVyIGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gbWFjaGluZSB3aXRoIHRoZSBwcm92aWRlZFxuICogb3B0aW9ucywgaWYgYW55LlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBgY3JlYXRlQWN0b3JgIGluc3RlYWRcbiAqIEBhbGlhc1xuICovXG5jb25zdCBpbnRlcnByZXQgPSBjcmVhdGVBY3RvcjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYEFjdG9yYCBpbnN0ZWFkLlxuICogQGFsaWFzXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZUNhbmNlbChfLCBzbmFwc2hvdCwgYWN0aW9uQXJncywgYWN0aW9uUGFyYW1zLCB7XG4gIHNlbmRJZFxufSkge1xuICBjb25zdCByZXNvbHZlZFNlbmRJZCA9IHR5cGVvZiBzZW5kSWQgPT09ICdmdW5jdGlvbicgPyBzZW5kSWQoYWN0aW9uQXJncywgYWN0aW9uUGFyYW1zKSA6IHNlbmRJZDtcbiAgcmV0dXJuIFtzbmFwc2hvdCwge1xuICAgIHNlbmRJZDogcmVzb2x2ZWRTZW5kSWRcbiAgfSwgdW5kZWZpbmVkXTtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVDYW5jZWwoYWN0b3JTY29wZSwgcGFyYW1zKSB7XG4gIGFjdG9yU2NvcGUuZGVmZXIoKCkgPT4ge1xuICAgIGFjdG9yU2NvcGUuc3lzdGVtLnNjaGVkdWxlci5jYW5jZWwoYWN0b3JTY29wZS5zZWxmLCBwYXJhbXMuc2VuZElkKTtcbiAgfSk7XG59XG4vKipcbiAqIENhbmNlbHMgYSBkZWxheWVkIGBzZW5kVG8oLi4uKWAgYWN0aW9uIHRoYXQgaXMgd2FpdGluZyB0byBiZSBleGVjdXRlZC4gVGhlXG4gKiBjYW5jZWxlZCBgc2VuZFRvKC4uLilgIGFjdGlvbiB3aWxsIG5vdCBzZW5kIGl0cyBldmVudCBvciBleGVjdXRlLCB1bmxlc3MgdGhlXG4gKiBgZGVsYXlgIGhhcyBhbHJlYWR5IGVsYXBzZWQgYmVmb3JlIGBjYW5jZWwoLi4uKWAgaXMgY2FsbGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGNyZWF0ZU1hY2hpbmUsIHNlbmRUbywgY2FuY2VsIH0gZnJvbSAneHN0YXRlJztcbiAqXG4gKiBjb25zdCBtYWNoaW5lID0gY3JlYXRlTWFjaGluZSh7XG4gKiAgIC8vIC4uLlxuICogICBvbjoge1xuICogICAgIHNlbmRFdmVudDoge1xuICogICAgICAgYWN0aW9uczogc2VuZFRvKFxuICogICAgICAgICAnc29tZS1hY3RvcicsXG4gKiAgICAgICAgIHsgdHlwZTogJ3NvbWVFdmVudCcgfSxcbiAqICAgICAgICAge1xuICogICAgICAgICAgIGlkOiAnc29tZS1pZCcsXG4gKiAgICAgICAgICAgZGVsYXk6IDEwMDBcbiAqICAgICAgICAgfVxuICogICAgICAgKVxuICogICAgIH0sXG4gKiAgICAgY2FuY2VsRXZlbnQ6IHtcbiAqICAgICAgIGFjdGlvbnM6IGNhbmNlbCgnc29tZS1pZCcpXG4gKiAgICAgfVxuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZW5kSWQgVGhlIGBpZGAgb2YgdGhlIGBzZW5kVG8oLi4uKWAgYWN0aW9uIHRvIGNhbmNlbC5cbiAqL1xuZnVuY3Rpb24gY2FuY2VsKHNlbmRJZCkge1xuICBmdW5jdGlvbiBjYW5jZWwoX2FyZ3MsIF9wYXJhbXMpIHtcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkYCk7XG4gICAgfVxuICB9XG4gIGNhbmNlbC50eXBlID0gJ3hzdGF0ZS5jYW5jZWwnO1xuICBjYW5jZWwuc2VuZElkID0gc2VuZElkO1xuICBjYW5jZWwucmVzb2x2ZSA9IHJlc29sdmVDYW5jZWw7XG4gIGNhbmNlbC5leGVjdXRlID0gZXhlY3V0ZUNhbmNlbDtcbiAgcmV0dXJuIGNhbmNlbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNwYXduKGFjdG9yU2NvcGUsIHNuYXBzaG90LCBhY3Rpb25BcmdzLCBfYWN0aW9uUGFyYW1zLCB7XG4gIGlkLFxuICBzeXN0ZW1JZCxcbiAgc3JjLFxuICBpbnB1dCxcbiAgc3luY1NuYXBzaG90XG59KSB7XG4gIGNvbnN0IGxvZ2ljID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyByZXNvbHZlUmVmZXJlbmNlZEFjdG9yKHNuYXBzaG90Lm1hY2hpbmUsIHNyYykgOiBzcmM7XG4gIGNvbnN0IHJlc29sdmVkSWQgPSB0eXBlb2YgaWQgPT09ICdmdW5jdGlvbicgPyBpZChhY3Rpb25BcmdzKSA6IGlkO1xuICBsZXQgYWN0b3JSZWY7XG4gIGxldCByZXNvbHZlZElucHV0ID0gdW5kZWZpbmVkO1xuICBpZiAobG9naWMpIHtcbiAgICByZXNvbHZlZElucHV0ID0gdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nID8gaW5wdXQoe1xuICAgICAgY29udGV4dDogc25hcHNob3QuY29udGV4dCxcbiAgICAgIGV2ZW50OiBhY3Rpb25BcmdzLmV2ZW50LFxuICAgICAgc2VsZjogYWN0b3JTY29wZS5zZWxmXG4gICAgfSkgOiBpbnB1dDtcbiAgICBhY3RvclJlZiA9IGNyZWF0ZUFjdG9yKGxvZ2ljLCB7XG4gICAgICBpZDogcmVzb2x2ZWRJZCxcbiAgICAgIHNyYyxcbiAgICAgIHBhcmVudDogYWN0b3JTY29wZS5zZWxmLFxuICAgICAgc3luY1NuYXBzaG90LFxuICAgICAgc3lzdGVtSWQsXG4gICAgICBpbnB1dDogcmVzb2x2ZWRJbnB1dFxuICAgIH0pO1xuICB9XG4gIGlmICghYWN0b3JSZWYpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC10ZW1wbGF0ZS1leHByZXNzaW9ucyxAdHlwZXNjcmlwdC1lc2xpbnQvbm8tYmFzZS10by1zdHJpbmdcbiAgICBgQWN0b3IgdHlwZSAnJHtzcmN9JyBub3QgZm91bmQgaW4gbWFjaGluZSAnJHthY3RvclNjb3BlLmlkfScuYCk7XG4gIH1cbiAgcmV0dXJuIFtjbG9uZU1hY2hpbmVTbmFwc2hvdChzbmFwc2hvdCwge1xuICAgIGNoaWxkcmVuOiB7XG4gICAgICAuLi5zbmFwc2hvdC5jaGlsZHJlbixcbiAgICAgIFtyZXNvbHZlZElkXTogYWN0b3JSZWZcbiAgICB9XG4gIH0pLCB7XG4gICAgaWQsXG4gICAgc3lzdGVtSWQsXG4gICAgYWN0b3JSZWYsXG4gICAgc3JjLFxuICAgIGlucHV0OiByZXNvbHZlZElucHV0XG4gIH0sIHVuZGVmaW5lZF07XG59XG5mdW5jdGlvbiBleGVjdXRlU3Bhd24oYWN0b3JTY29wZSwge1xuICBhY3RvclJlZlxufSkge1xuICBpZiAoIWFjdG9yUmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdG9yU2NvcGUuZGVmZXIoKCkgPT4ge1xuICAgIGlmIChhY3RvclJlZi5fcHJvY2Vzc2luZ1N0YXR1cyA9PT0gUHJvY2Vzc2luZ1N0YXR1cy5TdG9wcGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdG9yUmVmLnN0YXJ0KCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc3Bhd25DaGlsZCguLi5bc3JjLCB7XG4gIGlkLFxuICBzeXN0ZW1JZCxcbiAgaW5wdXQsXG4gIHN5bmNTbmFwc2hvdCA9IGZhbHNlXG59ID0ge31dKSB7XG4gIGZ1bmN0aW9uIHNwYXduQ2hpbGQoX2FyZ3MsIF9wYXJhbXMpIHtcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkYCk7XG4gICAgfVxuICB9XG4gIHNwYXduQ2hpbGQudHlwZSA9ICd4c3RhdGUuc3Bhd25DaGlsZCc7XG4gIHNwYXduQ2hpbGQuaWQgPSBpZDtcbiAgc3Bhd25DaGlsZC5zeXN0ZW1JZCA9IHN5c3RlbUlkO1xuICBzcGF3bkNoaWxkLnNyYyA9IHNyYztcbiAgc3Bhd25DaGlsZC5pbnB1dCA9IGlucHV0O1xuICBzcGF3bkNoaWxkLnN5bmNTbmFwc2hvdCA9IHN5bmNTbmFwc2hvdDtcbiAgc3Bhd25DaGlsZC5yZXNvbHZlID0gcmVzb2x2ZVNwYXduO1xuICBzcGF3bkNoaWxkLmV4ZWN1dGUgPSBleGVjdXRlU3Bhd247XG4gIHJldHVybiBzcGF3bkNoaWxkO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU3RvcChfLCBzbmFwc2hvdCwgYXJncywgYWN0aW9uUGFyYW1zLCB7XG4gIGFjdG9yUmVmXG59KSB7XG4gIGNvbnN0IGFjdG9yUmVmT3JTdHJpbmcgPSB0eXBlb2YgYWN0b3JSZWYgPT09ICdmdW5jdGlvbicgPyBhY3RvclJlZihhcmdzLCBhY3Rpb25QYXJhbXMpIDogYWN0b3JSZWY7XG4gIGNvbnN0IHJlc29sdmVkQWN0b3JSZWYgPSB0eXBlb2YgYWN0b3JSZWZPclN0cmluZyA9PT0gJ3N0cmluZycgPyBzbmFwc2hvdC5jaGlsZHJlblthY3RvclJlZk9yU3RyaW5nXSA6IGFjdG9yUmVmT3JTdHJpbmc7XG4gIGxldCBjaGlsZHJlbiA9IHNuYXBzaG90LmNoaWxkcmVuO1xuICBpZiAocmVzb2x2ZWRBY3RvclJlZikge1xuICAgIGNoaWxkcmVuID0ge1xuICAgICAgLi4uY2hpbGRyZW5cbiAgICB9O1xuICAgIGRlbGV0ZSBjaGlsZHJlbltyZXNvbHZlZEFjdG9yUmVmLmlkXTtcbiAgfVxuICByZXR1cm4gW2Nsb25lTWFjaGluZVNuYXBzaG90KHNuYXBzaG90LCB7XG4gICAgY2hpbGRyZW5cbiAgfSksIHJlc29sdmVkQWN0b3JSZWYsIHVuZGVmaW5lZF07XG59XG5mdW5jdGlvbiBleGVjdXRlU3RvcChhY3RvclNjb3BlLCBhY3RvclJlZikge1xuICBpZiAoIWFjdG9yUmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gd2UgbmVlZCB0byBlYWdlcmx5IHVucmVnaXN0ZXIgaXQgaGVyZSBzbyBhIG5ldyBhY3RvciB3aXRoIHRoZSBzYW1lIHN5c3RlbUlkIGNhbiBiZSByZWdpc3RlcmVkIGltbWVkaWF0ZWx5XG4gIC8vIHNpbmNlIHdlIGRlZmVyIGFjdHVhbCBzdG9wcGluZyBvZiB0aGUgYWN0b3IgYnV0IHdlIGRvbid0IGRlZmVyIGFjdG9yIGNyZWF0aW9ucyAoYW5kIHdlIGNhbid0IGRvIHRoYXQpXG4gIC8vIHRoaXMgY291bGQgdGhyb3cgb24gYHN5c3RlbUlkYCBjb2xsaXNpb24sIGZvciBleGFtcGxlLCB3aGVuIGRlYWxpbmcgd2l0aCByZWVudGVyaW5nIHRyYW5zaXRpb25zXG4gIGFjdG9yU2NvcGUuc3lzdGVtLl91bnJlZ2lzdGVyKGFjdG9yUmVmKTtcblxuICAvLyB0aGlzIGFsbG93cyB1cyB0byBwcmV2ZW50IGFuIGFjdG9yIGZyb20gYmVpbmcgc3RhcnRlZCBpZiBpdCBnZXRzIHN0b3BwZWQgd2l0aGluIHRoZSBzYW1lIG1hY3Jvc3RlcFxuICAvLyB0aGlzIGNhbiBoYXBwZW4sIGZvciBleGFtcGxlLCB3aGVuIHRoZSBpbnZva2luZyBzdGF0ZSBpcyBiZWluZyBleGl0ZWQgaW1tZWRpYXRlbHkgYnkgYW4gYWx3YXlzIHRyYW5zaXRpb25cbiAgaWYgKGFjdG9yUmVmLl9wcm9jZXNzaW5nU3RhdHVzICE9PSBQcm9jZXNzaW5nU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICBhY3RvclNjb3BlLnN0b3BDaGlsZChhY3RvclJlZik7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHN0b3BwaW5nIGEgY2hpbGQgZW5xdWV1ZXMgYSBzdG9wIGV2ZW50IGluIHRoZSBjaGlsZCBhY3RvcidzIG1haWxib3hcbiAgLy8gd2UgbmVlZCBmb3IgYWxsIG9mIHRoZSBhbHJlYWR5IGVucXVldWVkIGV2ZW50cyB0byBiZSBwcm9jZXNzZWQgYmVmb3JlIHdlIHN0b3AgdGhlIGNoaWxkXG4gIC8vIHRoZSBwYXJlbnQgaXRzZWxmIG1pZ2h0IHdhbnQgdG8gc2VuZCBzb21lIGV2ZW50cyB0byBhIGNoaWxkIChmb3IgZXhhbXBsZSBmcm9tIGV4aXQgYWN0aW9ucyBvbiB0aGUgaW52b2tpbmcgc3RhdGUpXG4gIC8vIGFuZCB3ZSBkb24ndCB3YW50IHRvIGlnbm9yZSB0aG9zZSBldmVudHNcbiAgYWN0b3JTY29wZS5kZWZlcigoKSA9PiB7XG4gICAgYWN0b3JTY29wZS5zdG9wQ2hpbGQoYWN0b3JSZWYpO1xuICB9KTtcbn1cbi8qKlxuICogU3RvcHMgYSBjaGlsZCBhY3Rvci5cbiAqXG4gKiBAcGFyYW0gYWN0b3JSZWYgVGhlIGFjdG9yIHRvIHN0b3AuXG4gKi9cbmZ1bmN0aW9uIHN0b3BDaGlsZChhY3RvclJlZikge1xuICBmdW5jdGlvbiBzdG9wKF9hcmdzLCBfcGFyYW1zKSB7XG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIGlzbid0IHN1cHBvc2VkIHRvIGJlIGNhbGxlZGApO1xuICAgIH1cbiAgfVxuICBzdG9wLnR5cGUgPSAneHN0YXRlLnN0b3BDaGlsZCc7XG4gIHN0b3AuYWN0b3JSZWYgPSBhY3RvclJlZjtcbiAgc3RvcC5yZXNvbHZlID0gcmVzb2x2ZVN0b3A7XG4gIHN0b3AuZXhlY3V0ZSA9IGV4ZWN1dGVTdG9wO1xuICByZXR1cm4gc3RvcDtcbn1cblxuLyoqXG4gKiBTdG9wcyBhIGNoaWxkIGFjdG9yLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBgc3RvcENoaWxkKC4uLilgIGluc3RlYWRcbiAqIEBhbGlhc1xuICovXG5jb25zdCBzdG9wID0gc3RvcENoaWxkO1xuXG5mdW5jdGlvbiBjaGVja1N0YXRlSW4oc25hcHNob3QsIF8sIHtcbiAgc3RhdGVWYWx1ZVxufSkge1xuICBpZiAodHlwZW9mIHN0YXRlVmFsdWUgPT09ICdzdHJpbmcnICYmIGlzU3RhdGVJZChzdGF0ZVZhbHVlKSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHNuYXBzaG90Lm1hY2hpbmUuZ2V0U3RhdGVOb2RlQnlJZChzdGF0ZVZhbHVlKTtcbiAgICByZXR1cm4gc25hcHNob3QuX25vZGVzLnNvbWUoc24gPT4gc24gPT09IHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIHNuYXBzaG90Lm1hdGNoZXMoc3RhdGVWYWx1ZSk7XG59XG5mdW5jdGlvbiBzdGF0ZUluKHN0YXRlVmFsdWUpIHtcbiAgZnVuY3Rpb24gc3RhdGVJbigpIHtcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkYCk7XG4gICAgfVxuICB9XG4gIHN0YXRlSW4uY2hlY2sgPSBjaGVja1N0YXRlSW47XG4gIHN0YXRlSW4uc3RhdGVWYWx1ZSA9IHN0YXRlVmFsdWU7XG4gIHJldHVybiBzdGF0ZUluO1xufVxuZnVuY3Rpb24gY2hlY2tOb3Qoc25hcHNob3QsIHtcbiAgY29udGV4dCxcbiAgZXZlbnRcbn0sIHtcbiAgZ3VhcmRzXG59KSB7XG4gIHJldHVybiAhZXZhbHVhdGVHdWFyZChndWFyZHNbMF0sIGNvbnRleHQsIGV2ZW50LCBzbmFwc2hvdCk7XG59XG5cbi8qKlxuICogSGlnaGVyLW9yZGVyIGd1YXJkIHRoYXQgZXZhbHVhdGVzIHRvIGB0cnVlYCBpZiB0aGUgYGd1YXJkYCBwYXNzZWQgdG8gaXRcbiAqIGV2YWx1YXRlcyB0byBgZmFsc2VgLlxuICpcbiAqIEBjYXRlZ29yeSBHdWFyZHNcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHNldHVwLCBub3QgfSBmcm9tICd4c3RhdGUnO1xuICpcbiAqIGNvbnN0IG1hY2hpbmUgPSBzZXR1cCh7XG4gKiAgIGd1YXJkczoge1xuICogICAgIHNvbWVOYW1lZEd1YXJkOiAoKSA9PiBmYWxzZVxuICogICB9XG4gKiB9KS5jcmVhdGVNYWNoaW5lKHtcbiAqICAgb246IHtcbiAqICAgICBzb21lRXZlbnQ6IHtcbiAqICAgICAgIGd1YXJkOiBub3QoJ3NvbWVOYW1lZEd1YXJkJyksXG4gKiAgICAgICBhY3Rpb25zOiAoKSA9PiB7XG4gKiAgICAgICAgIC8vIHdpbGwgYmUgZXhlY3V0ZWQgaWYgZ3VhcmQgaW4gYG5vdCguLi4pYFxuICogICAgICAgICAvLyBldmFsdWF0ZXMgdG8gYGZhbHNlYFxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBBIGd1YXJkXG4gKi9cbmZ1bmN0aW9uIG5vdChndWFyZCkge1xuICBmdW5jdGlvbiBub3QoX2FyZ3MsIF9wYXJhbXMpIHtcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoaXMgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkYCk7XG4gICAgfVxuICB9XG4gIG5vdC5jaGVjayA9IGNoZWNrTm90O1xuICBub3QuZ3VhcmRzID0gW2d1YXJkXTtcbiAgcmV0dXJuIG5vdDtcbn1cbmZ1bmN0aW9uIGNoZWNrQW5kKHNuYXBzaG90LCB7XG4gIGNvbnRleHQsXG4gIGV2ZW50XG59LCB7XG4gIGd1YXJkc1xufSkge1xuICByZXR1cm4gZ3VhcmRzLmV2ZXJ5KGd1YXJkID0+IGV2YWx1YXRlR3VhcmQoZ3VhcmQsIGNvbnRleHQsIGV2ZW50LCBzbmFwc2hvdCkpO1xufVxuXG4vKipcbiAqIEhpZ2hlci1vcmRlciBndWFyZCB0aGF0IGV2YWx1YXRlcyB0byBgdHJ1ZWAgaWYgYWxsIGBndWFyZHNgIHBhc3NlZCB0byBpdFxuICogZXZhbHVhdGUgdG8gYHRydWVgLlxuICpcbiAqIEBjYXRlZ29yeSBHdWFyZHNcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHNldHVwLCBhbmQgfSBmcm9tICd4c3RhdGUnO1xuICpcbiAqIGNvbnN0IG1hY2hpbmUgPSBzZXR1cCh7XG4gKiAgIGd1YXJkczoge1xuICogICAgIHNvbWVOYW1lZEd1YXJkOiAoKSA9PiB0cnVlXG4gKiAgIH1cbiAqIH0pLmNyZWF0ZU1hY2hpbmUoe1xuICogICBvbjoge1xuICogICAgIHNvbWVFdmVudDoge1xuICogICAgICAgZ3VhcmQ6IGFuZChbKHsgY29udGV4dCB9KSA9PiBjb250ZXh0LnZhbHVlID4gMCwgJ3NvbWVOYW1lZEd1YXJkJ10pLFxuICogICAgICAgYWN0aW9uczogKCkgPT4ge1xuICogICAgICAgICAvLyB3aWxsIGJlIGV4ZWN1dGVkIGlmIGFsbCBndWFyZHMgaW4gYGFuZCguLi4pYFxuICogICAgICAgICAvLyBldmFsdWF0ZSB0byB0cnVlXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIEEgZ3VhcmQgYWN0aW9uIG9iamVjdFxuICovXG5mdW5jdGlvbiBhbmQoZ3VhcmRzKSB7XG4gIGZ1bmN0aW9uIGFuZChfYXJncywgX3BhcmFtcykge1xuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBpc24ndCBzdXBwb3NlZCB0byBiZSBjYWxsZWRgKTtcbiAgICB9XG4gIH1cbiAgYW5kLmNoZWNrID0gY2hlY2tBbmQ7XG4gIGFuZC5ndWFyZHMgPSBndWFyZHM7XG4gIHJldHVybiBhbmQ7XG59XG5mdW5jdGlvbiBjaGVja09yKHNuYXBzaG90LCB7XG4gIGNvbnRleHQsXG4gIGV2ZW50XG59LCB7XG4gIGd1YXJkc1xufSkge1xuICByZXR1cm4gZ3VhcmRzLnNvbWUoZ3VhcmQgPT4gZXZhbHVhdGVHdWFyZChndWFyZCwgY29udGV4dCwgZXZlbnQsIHNuYXBzaG90KSk7XG59XG5cbi8qKlxuICogSGlnaGVyLW9yZGVyIGd1YXJkIHRoYXQgZXZhbHVhdGVzIHRvIGB0cnVlYCBpZiBhbnkgb2YgdGhlIGBndWFyZHNgIHBhc3NlZCB0b1xuICogaXQgZXZhbHVhdGUgdG8gYHRydWVgLlxuICpcbiAqIEBjYXRlZ29yeSBHdWFyZHNcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IHNldHVwLCBvciB9IGZyb20gJ3hzdGF0ZSc7XG4gKlxuICogY29uc3QgbWFjaGluZSA9IHNldHVwKHtcbiAqICAgZ3VhcmRzOiB7XG4gKiAgICAgc29tZU5hbWVkR3VhcmQ6ICgpID0+IHRydWVcbiAqICAgfVxuICogfSkuY3JlYXRlTWFjaGluZSh7XG4gKiAgIG9uOiB7XG4gKiAgICAgc29tZUV2ZW50OiB7XG4gKiAgICAgICBndWFyZDogb3IoWyh7IGNvbnRleHQgfSkgPT4gY29udGV4dC52YWx1ZSA+IDAsICdzb21lTmFtZWRHdWFyZCddKSxcbiAqICAgICAgIGFjdGlvbnM6ICgpID0+IHtcbiAqICAgICAgICAgLy8gd2lsbCBiZSBleGVjdXRlZCBpZiBhbnkgb2YgdGhlIGd1YXJkcyBpbiBgb3IoLi4uKWBcbiAqICAgICAgICAgLy8gZXZhbHVhdGUgdG8gdHJ1ZVxuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBBIGd1YXJkIGFjdGlvbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gb3IoZ3VhcmRzKSB7XG4gIGZ1bmN0aW9uIG9yKF9hcmdzLCBfcGFyYW1zKSB7XG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIGlzbid0IHN1cHBvc2VkIHRvIGJlIGNhbGxlZGApO1xuICAgIH1cbiAgfVxuICBvci5jaGVjayA9IGNoZWNrT3I7XG4gIG9yLmd1YXJkcyA9IGd1YXJkcztcbiAgcmV0dXJuIG9yO1xufVxuXG4vLyBUT0RPOiB0aHJvdyBvbiBjeWNsZXMgKGRlcHRoIGNoZWNrIHNob3VsZCBiZSBlbm91Z2gpXG5mdW5jdGlvbiBldmFsdWF0ZUd1YXJkKGd1YXJkLCBjb250ZXh0LCBldmVudCwgc25hcHNob3QpIHtcbiAgY29uc3Qge1xuICAgIG1hY2hpbmVcbiAgfSA9IHNuYXBzaG90O1xuICBjb25zdCBpc0lubGluZSA9IHR5cGVvZiBndWFyZCA9PT0gJ2Z1bmN0aW9uJztcbiAgY29uc3QgcmVzb2x2ZWQgPSBpc0lubGluZSA/IGd1YXJkIDogbWFjaGluZS5pbXBsZW1lbnRhdGlvbnMuZ3VhcmRzW3R5cGVvZiBndWFyZCA9PT0gJ3N0cmluZycgPyBndWFyZCA6IGd1YXJkLnR5cGVdO1xuICBpZiAoIWlzSW5saW5lICYmICFyZXNvbHZlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgR3VhcmQgJyR7dHlwZW9mIGd1YXJkID09PSAnc3RyaW5nJyA/IGd1YXJkIDogZ3VhcmQudHlwZX0nIGlzIG5vdCBpbXBsZW1lbnRlZC4nLmApO1xuICB9XG4gIGlmICh0eXBlb2YgcmVzb2x2ZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZXZhbHVhdGVHdWFyZChyZXNvbHZlZCwgY29udGV4dCwgZXZlbnQsIHNuYXBzaG90KTtcbiAgfVxuICBjb25zdCBndWFyZEFyZ3MgPSB7XG4gICAgY29udGV4dCxcbiAgICBldmVudFxuICB9O1xuICBjb25zdCBndWFyZFBhcmFtcyA9IGlzSW5saW5lIHx8IHR5cGVvZiBndWFyZCA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiAncGFyYW1zJyBpbiBndWFyZCA/IHR5cGVvZiBndWFyZC5wYXJhbXMgPT09ICdmdW5jdGlvbicgPyBndWFyZC5wYXJhbXMoe1xuICAgIGNvbnRleHQsXG4gICAgZXZlbnRcbiAgfSkgOiBndWFyZC5wYXJhbXMgOiB1bmRlZmluZWQ7XG4gIGlmICghKCdjaGVjaycgaW4gcmVzb2x2ZWQpKSB7XG4gICAgLy8gdGhlIGV4aXN0aW5nIHR5cGUgb2YgYC5ndWFyZHNgIGFzc3VtZXMgbm9uLW51bGxhYmxlIGBURXhwcmVzc2lvbkd1YXJkYFxuICAgIC8vIGlubGluZSBndWFyZHMgZXhwZWN0IGBURXhwcmVzc2lvbkd1YXJkYCB0byBiZSBzZXQgdG8gYHVuZGVmaW5lZGBcbiAgICAvLyBpdCdzIGZpbmUgdG8gY2FzdCB0aGlzIGhlcmUsIG91ciBsb2dpYyBtYWtlcyBzdXJlIHRoYXQgd2UgY2FsbCB0aG9zZSAyIFwidmFyaWFudHNcIiBjb3JyZWN0bHlcbiAgICByZXR1cm4gcmVzb2x2ZWQoZ3VhcmRBcmdzLCBndWFyZFBhcmFtcyk7XG4gIH1cbiAgY29uc3QgYnVpbHRpbkd1YXJkID0gcmVzb2x2ZWQ7XG4gIHJldHVybiBidWlsdGluR3VhcmQuY2hlY2soc25hcHNob3QsIGd1YXJkQXJncywgcmVzb2x2ZWQgLy8gdGhpcyBob2xkcyBhbGwgcGFyYW1zXG4gICk7XG59XG5cbmNvbnN0IGlzQXRvbWljU3RhdGVOb2RlID0gc3RhdGVOb2RlID0+IHN0YXRlTm9kZS50eXBlID09PSAnYXRvbWljJyB8fCBzdGF0ZU5vZGUudHlwZSA9PT0gJ2ZpbmFsJztcbmZ1bmN0aW9uIGdldENoaWxkcmVuKHN0YXRlTm9kZSkge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzdGF0ZU5vZGUuc3RhdGVzKS5maWx0ZXIoc24gPT4gc24udHlwZSAhPT0gJ2hpc3RvcnknKTtcbn1cbmZ1bmN0aW9uIGdldFByb3BlckFuY2VzdG9ycyhzdGF0ZU5vZGUsIHRvU3RhdGVOb2RlKSB7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IFtdO1xuICBpZiAodG9TdGF0ZU5vZGUgPT09IHN0YXRlTm9kZSkge1xuICAgIHJldHVybiBhbmNlc3RvcnM7XG4gIH1cblxuICAvLyBhZGQgYWxsIGFuY2VzdG9yc1xuICBsZXQgbSA9IHN0YXRlTm9kZS5wYXJlbnQ7XG4gIHdoaWxlIChtICYmIG0gIT09IHRvU3RhdGVOb2RlKSB7XG4gICAgYW5jZXN0b3JzLnB1c2gobSk7XG4gICAgbSA9IG0ucGFyZW50O1xuICB9XG4gIHJldHVybiBhbmNlc3RvcnM7XG59XG5mdW5jdGlvbiBnZXRBbGxTdGF0ZU5vZGVzKHN0YXRlTm9kZXMpIHtcbiAgY29uc3Qgbm9kZVNldCA9IG5ldyBTZXQoc3RhdGVOb2Rlcyk7XG4gIGNvbnN0IGFkakxpc3QgPSBnZXRBZGpMaXN0KG5vZGVTZXQpO1xuXG4gIC8vIGFkZCBkZXNjZW5kYW50c1xuICBmb3IgKGNvbnN0IHMgb2Ygbm9kZVNldCkge1xuICAgIC8vIGlmIHByZXZpb3VzbHkgYWN0aXZlLCBhZGQgZXhpc3RpbmcgY2hpbGQgbm9kZXNcbiAgICBpZiAocy50eXBlID09PSAnY29tcG91bmQnICYmICghYWRqTGlzdC5nZXQocykgfHwgIWFkakxpc3QuZ2V0KHMpLmxlbmd0aCkpIHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZU5vZGVzV2l0aFRoZWlyQW5jZXN0b3JzKHMpLmZvckVhY2goc24gPT4gbm9kZVNldC5hZGQoc24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHMudHlwZSA9PT0gJ3BhcmFsbGVsJykge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGdldENoaWxkcmVuKHMpKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdoaXN0b3J5Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbm9kZVNldC5oYXMoY2hpbGQpKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0aWFsU3RhdGVzID0gZ2V0SW5pdGlhbFN0YXRlTm9kZXNXaXRoVGhlaXJBbmNlc3RvcnMoY2hpbGQpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbml0aWFsU3RhdGVOb2RlIG9mIGluaXRpYWxTdGF0ZXMpIHtcbiAgICAgICAgICAgICAgbm9kZVNldC5hZGQoaW5pdGlhbFN0YXRlTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIGFsbCBhbmNlc3RvcnNcbiAgZm9yIChjb25zdCBzIG9mIG5vZGVTZXQpIHtcbiAgICBsZXQgbSA9IHMucGFyZW50O1xuICAgIHdoaWxlIChtKSB7XG4gICAgICBub2RlU2V0LmFkZChtKTtcbiAgICAgIG0gPSBtLnBhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGVTZXQ7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21BZGooYmFzZU5vZGUsIGFkakxpc3QpIHtcbiAgY29uc3QgY2hpbGRTdGF0ZU5vZGVzID0gYWRqTGlzdC5nZXQoYmFzZU5vZGUpO1xuICBpZiAoIWNoaWxkU3RhdGVOb2Rlcykge1xuICAgIHJldHVybiB7fTsgLy8gdG9kbzogZml4P1xuICB9XG4gIGlmIChiYXNlTm9kZS50eXBlID09PSAnY29tcG91bmQnKSB7XG4gICAgY29uc3QgY2hpbGRTdGF0ZU5vZGUgPSBjaGlsZFN0YXRlTm9kZXNbMF07XG4gICAgaWYgKGNoaWxkU3RhdGVOb2RlKSB7XG4gICAgICBpZiAoaXNBdG9taWNTdGF0ZU5vZGUoY2hpbGRTdGF0ZU5vZGUpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFN0YXRlTm9kZS5rZXk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc3RhdGVWYWx1ZSA9IHt9O1xuICBmb3IgKGNvbnN0IGNoaWxkU3RhdGVOb2RlIG9mIGNoaWxkU3RhdGVOb2Rlcykge1xuICAgIHN0YXRlVmFsdWVbY2hpbGRTdGF0ZU5vZGUua2V5XSA9IGdldFZhbHVlRnJvbUFkaihjaGlsZFN0YXRlTm9kZSwgYWRqTGlzdCk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlVmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBZGpMaXN0KHN0YXRlTm9kZXMpIHtcbiAgY29uc3QgYWRqTGlzdCA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBzIG9mIHN0YXRlTm9kZXMpIHtcbiAgICBpZiAoIWFkakxpc3QuaGFzKHMpKSB7XG4gICAgICBhZGpMaXN0LnNldChzLCBbXSk7XG4gICAgfVxuICAgIGlmIChzLnBhcmVudCkge1xuICAgICAgaWYgKCFhZGpMaXN0LmhhcyhzLnBhcmVudCkpIHtcbiAgICAgICAgYWRqTGlzdC5zZXQocy5wYXJlbnQsIFtdKTtcbiAgICAgIH1cbiAgICAgIGFkakxpc3QuZ2V0KHMucGFyZW50KS5wdXNoKHMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYWRqTGlzdDtcbn1cbmZ1bmN0aW9uIGdldFN0YXRlVmFsdWUocm9vdE5vZGUsIHN0YXRlTm9kZXMpIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0QWxsU3RhdGVOb2RlcyhzdGF0ZU5vZGVzKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbUFkaihyb290Tm9kZSwgZ2V0QWRqTGlzdChjb25maWcpKTtcbn1cbmZ1bmN0aW9uIGlzSW5GaW5hbFN0YXRlKHN0YXRlTm9kZVNldCwgc3RhdGVOb2RlKSB7XG4gIGlmIChzdGF0ZU5vZGUudHlwZSA9PT0gJ2NvbXBvdW5kJykge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihzdGF0ZU5vZGUpLnNvbWUocyA9PiBzLnR5cGUgPT09ICdmaW5hbCcgJiYgc3RhdGVOb2RlU2V0LmhhcyhzKSk7XG4gIH1cbiAgaWYgKHN0YXRlTm9kZS50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuKHN0YXRlTm9kZSkuZXZlcnkoc24gPT4gaXNJbkZpbmFsU3RhdGUoc3RhdGVOb2RlU2V0LCBzbikpO1xuICB9XG4gIHJldHVybiBzdGF0ZU5vZGUudHlwZSA9PT0gJ2ZpbmFsJztcbn1cbmNvbnN0IGlzU3RhdGVJZCA9IHN0ciA9PiBzdHJbMF0gPT09IFNUQVRFX0lERU5USUZJRVI7XG5mdW5jdGlvbiBnZXRDYW5kaWRhdGVzKHN0YXRlTm9kZSwgcmVjZWl2ZWRFdmVudFR5cGUpIHtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IHN0YXRlTm9kZS50cmFuc2l0aW9ucy5nZXQocmVjZWl2ZWRFdmVudFR5cGUpIHx8IFsuLi5zdGF0ZU5vZGUudHJhbnNpdGlvbnMua2V5cygpXS5maWx0ZXIoZXZlbnREZXNjcmlwdG9yID0+IHtcbiAgICAvLyBjaGVjayBpZiB0cmFuc2l0aW9uIGlzIGEgd2lsZGNhcmQgdHJhbnNpdGlvbixcbiAgICAvLyB3aGljaCBtYXRjaGVzIGFueSBub24tdHJhbnNpZW50IGV2ZW50c1xuICAgIGlmIChldmVudERlc2NyaXB0b3IgPT09IFdJTERDQVJEKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFldmVudERlc2NyaXB0b3IuZW5kc1dpdGgoJy4qJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKC8uKlxcKi4rLy50ZXN0KGV2ZW50RGVzY3JpcHRvcikpIHtcbiAgICAgIGNvbnNvbGUud2FybihgV2lsZGNhcmRzIGNhbiBvbmx5IGJlIHRoZSBsYXN0IHRva2VuIG9mIGFuIGV2ZW50IGRlc2NyaXB0b3IgKGUuZy4sIFwiZXZlbnQuKlwiKSBvciB0aGUgZW50aXJlIGV2ZW50IGRlc2NyaXB0b3IgKFwiKlwiKS4gQ2hlY2sgdGhlIFwiJHtldmVudERlc2NyaXB0b3J9XCIgZXZlbnQuYCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcnRpYWxFdmVudFRva2VucyA9IGV2ZW50RGVzY3JpcHRvci5zcGxpdCgnLicpO1xuICAgIGNvbnN0IGV2ZW50VG9rZW5zID0gcmVjZWl2ZWRFdmVudFR5cGUuc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCB0b2tlbkluZGV4ID0gMDsgdG9rZW5JbmRleCA8IHBhcnRpYWxFdmVudFRva2Vucy5sZW5ndGg7IHRva2VuSW5kZXgrKykge1xuICAgICAgY29uc3QgcGFydGlhbEV2ZW50VG9rZW4gPSBwYXJ0aWFsRXZlbnRUb2tlbnNbdG9rZW5JbmRleF07XG4gICAgICBjb25zdCBldmVudFRva2VuID0gZXZlbnRUb2tlbnNbdG9rZW5JbmRleF07XG4gICAgICBpZiAocGFydGlhbEV2ZW50VG9rZW4gPT09ICcqJykge1xuICAgICAgICBjb25zdCBpc0xhc3RUb2tlbiA9IHRva2VuSW5kZXggPT09IHBhcnRpYWxFdmVudFRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAoIWlzTGFzdFRva2VuKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBJbmZpeCB3aWxkY2FyZHMgaW4gdHJhbnNpdGlvbiBldmVudHMgYXJlIG5vdCBhbGxvd2VkLiBDaGVjayB0aGUgXCIke2V2ZW50RGVzY3JpcHRvcn1cIiB0cmFuc2l0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0xhc3RUb2tlbjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0aWFsRXZlbnRUb2tlbiAhPT0gZXZlbnRUb2tlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KS5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKS5mbGF0TWFwKGtleSA9PiBzdGF0ZU5vZGUudHJhbnNpdGlvbnMuZ2V0KGtleSkpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn1cblxuLyoqIEFsbCBkZWxheWVkIHRyYW5zaXRpb25zIGZyb20gdGhlIGNvbmZpZy4gKi9cbmZ1bmN0aW9uIGdldERlbGF5ZWRUcmFuc2l0aW9ucyhzdGF0ZU5vZGUpIHtcbiAgY29uc3QgYWZ0ZXJDb25maWcgPSBzdGF0ZU5vZGUuY29uZmlnLmFmdGVyO1xuICBpZiAoIWFmdGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IG11dGF0ZUVudHJ5RXhpdCA9IGRlbGF5ID0+IHtcbiAgICBjb25zdCBhZnRlckV2ZW50ID0gY3JlYXRlQWZ0ZXJFdmVudChkZWxheSwgc3RhdGVOb2RlLmlkKTtcbiAgICBjb25zdCBldmVudFR5cGUgPSBhZnRlckV2ZW50LnR5cGU7XG4gICAgc3RhdGVOb2RlLmVudHJ5LnB1c2gocmFpc2UoYWZ0ZXJFdmVudCwge1xuICAgICAgaWQ6IGV2ZW50VHlwZSxcbiAgICAgIGRlbGF5XG4gICAgfSkpO1xuICAgIHN0YXRlTm9kZS5leGl0LnB1c2goY2FuY2VsKGV2ZW50VHlwZSkpO1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH07XG4gIGNvbnN0IGRlbGF5ZWRUcmFuc2l0aW9ucyA9IE9iamVjdC5rZXlzKGFmdGVyQ29uZmlnKS5mbGF0TWFwKGRlbGF5ID0+IHtcbiAgICBjb25zdCBjb25maWdUcmFuc2l0aW9uID0gYWZ0ZXJDb25maWdbZGVsYXldO1xuICAgIGNvbnN0IHJlc29sdmVkVHJhbnNpdGlvbiA9IHR5cGVvZiBjb25maWdUcmFuc2l0aW9uID09PSAnc3RyaW5nJyA/IHtcbiAgICAgIHRhcmdldDogY29uZmlnVHJhbnNpdGlvblxuICAgIH0gOiBjb25maWdUcmFuc2l0aW9uO1xuICAgIGNvbnN0IHJlc29sdmVkRGVsYXkgPSBOdW1iZXIuaXNOYU4oK2RlbGF5KSA/IGRlbGF5IDogK2RlbGF5O1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG11dGF0ZUVudHJ5RXhpdChyZXNvbHZlZERlbGF5KTtcbiAgICByZXR1cm4gdG9BcnJheShyZXNvbHZlZFRyYW5zaXRpb24pLm1hcCh0cmFuc2l0aW9uID0+ICh7XG4gICAgICAuLi50cmFuc2l0aW9uLFxuICAgICAgZXZlbnQ6IGV2ZW50VHlwZSxcbiAgICAgIGRlbGF5OiByZXNvbHZlZERlbGF5XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIGRlbGF5ZWRUcmFuc2l0aW9ucy5tYXAoZGVsYXllZFRyYW5zaXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5XG4gICAgfSA9IGRlbGF5ZWRUcmFuc2l0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5mb3JtYXRUcmFuc2l0aW9uKHN0YXRlTm9kZSwgZGVsYXllZFRyYW5zaXRpb24uZXZlbnQsIGRlbGF5ZWRUcmFuc2l0aW9uKSxcbiAgICAgIGRlbGF5XG4gICAgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmb3JtYXRUcmFuc2l0aW9uKHN0YXRlTm9kZSwgZGVzY3JpcHRvciwgdHJhbnNpdGlvbkNvbmZpZykge1xuICBjb25zdCBub3JtYWxpemVkVGFyZ2V0ID0gbm9ybWFsaXplVGFyZ2V0KHRyYW5zaXRpb25Db25maWcudGFyZ2V0KTtcbiAgY29uc3QgcmVlbnRlciA9IHRyYW5zaXRpb25Db25maWcucmVlbnRlciA/PyBmYWxzZTtcbiAgY29uc3QgdGFyZ2V0ID0gcmVzb2x2ZVRhcmdldChzdGF0ZU5vZGUsIG5vcm1hbGl6ZWRUYXJnZXQpO1xuXG4gIC8vIFRPRE86IHNob3VsZCB0aGlzIGJlIHBhcnQgb2YgYSBsaW50IHJ1bGUgaW5zdGVhZD9cbiAgaWYgKHRyYW5zaXRpb25Db25maWcuY29uZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU3RhdGUgXCIke3N0YXRlTm9kZS5pZH1cIiBoYXMgZGVjbGFyZWQgXFxgY29uZFxcYCBmb3Igb25lIG9mIGl0cyB0cmFuc2l0aW9ucy4gVGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiByZW5hbWVkIHRvIFxcYGd1YXJkXFxgLiBQbGVhc2UgdXBkYXRlIHlvdXIgY29kZS5gKTtcbiAgfVxuICBjb25zdCB0cmFuc2l0aW9uID0ge1xuICAgIC4uLnRyYW5zaXRpb25Db25maWcsXG4gICAgYWN0aW9uczogdG9BcnJheSh0cmFuc2l0aW9uQ29uZmlnLmFjdGlvbnMpLFxuICAgIGd1YXJkOiB0cmFuc2l0aW9uQ29uZmlnLmd1YXJkLFxuICAgIHRhcmdldCxcbiAgICBzb3VyY2U6IHN0YXRlTm9kZSxcbiAgICByZWVudGVyLFxuICAgIGV2ZW50VHlwZTogZGVzY3JpcHRvcixcbiAgICB0b0pTT046ICgpID0+ICh7XG4gICAgICAuLi50cmFuc2l0aW9uLFxuICAgICAgc291cmNlOiBgIyR7c3RhdGVOb2RlLmlkfWAsXG4gICAgICB0YXJnZXQ6IHRhcmdldCA/IHRhcmdldC5tYXAodCA9PiBgIyR7dC5pZH1gKSA6IHVuZGVmaW5lZFxuICAgIH0pXG4gIH07XG4gIHJldHVybiB0cmFuc2l0aW9uO1xufVxuZnVuY3Rpb24gZm9ybWF0VHJhbnNpdGlvbnMoc3RhdGVOb2RlKSB7XG4gIGNvbnN0IHRyYW5zaXRpb25zID0gbmV3IE1hcCgpO1xuICBpZiAoc3RhdGVOb2RlLmNvbmZpZy5vbikge1xuICAgIGZvciAoY29uc3QgZGVzY3JpcHRvciBvZiBPYmplY3Qua2V5cyhzdGF0ZU5vZGUuY29uZmlnLm9uKSkge1xuICAgICAgaWYgKGRlc2NyaXB0b3IgPT09IE5VTExfRVZFTlQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOdWxsIGV2ZW50cyAoXCJcIikgY2Fubm90IGJlIHNwZWNpZmllZCBhcyBhIHRyYW5zaXRpb24ga2V5LiBVc2UgYGFsd2F5czogeyAuLi4gfWAgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25zQ29uZmlnID0gc3RhdGVOb2RlLmNvbmZpZy5vbltkZXNjcmlwdG9yXTtcbiAgICAgIHRyYW5zaXRpb25zLnNldChkZXNjcmlwdG9yLCB0b1RyYW5zaXRpb25Db25maWdBcnJheSh0cmFuc2l0aW9uc0NvbmZpZykubWFwKHQgPT4gZm9ybWF0VHJhbnNpdGlvbihzdGF0ZU5vZGUsIGRlc2NyaXB0b3IsIHQpKSk7XG4gICAgfVxuICB9XG4gIGlmIChzdGF0ZU5vZGUuY29uZmlnLm9uRG9uZSkge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBgeHN0YXRlLmRvbmUuc3RhdGUuJHtzdGF0ZU5vZGUuaWR9YDtcbiAgICB0cmFuc2l0aW9ucy5zZXQoZGVzY3JpcHRvciwgdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoc3RhdGVOb2RlLmNvbmZpZy5vbkRvbmUpLm1hcCh0ID0+IGZvcm1hdFRyYW5zaXRpb24oc3RhdGVOb2RlLCBkZXNjcmlwdG9yLCB0KSkpO1xuICB9XG4gIGZvciAoY29uc3QgaW52b2tlRGVmIG9mIHN0YXRlTm9kZS5pbnZva2UpIHtcbiAgICBpZiAoaW52b2tlRGVmLm9uRG9uZSkge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGB4c3RhdGUuZG9uZS5hY3Rvci4ke2ludm9rZURlZi5pZH1gO1xuICAgICAgdHJhbnNpdGlvbnMuc2V0KGRlc2NyaXB0b3IsIHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KGludm9rZURlZi5vbkRvbmUpLm1hcCh0ID0+IGZvcm1hdFRyYW5zaXRpb24oc3RhdGVOb2RlLCBkZXNjcmlwdG9yLCB0KSkpO1xuICAgIH1cbiAgICBpZiAoaW52b2tlRGVmLm9uRXJyb3IpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBgeHN0YXRlLmVycm9yLmFjdG9yLiR7aW52b2tlRGVmLmlkfWA7XG4gICAgICB0cmFuc2l0aW9ucy5zZXQoZGVzY3JpcHRvciwgdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoaW52b2tlRGVmLm9uRXJyb3IpLm1hcCh0ID0+IGZvcm1hdFRyYW5zaXRpb24oc3RhdGVOb2RlLCBkZXNjcmlwdG9yLCB0KSkpO1xuICAgIH1cbiAgICBpZiAoaW52b2tlRGVmLm9uU25hcHNob3QpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBgeHN0YXRlLnNuYXBzaG90LiR7aW52b2tlRGVmLmlkfWA7XG4gICAgICB0cmFuc2l0aW9ucy5zZXQoZGVzY3JpcHRvciwgdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoaW52b2tlRGVmLm9uU25hcHNob3QpLm1hcCh0ID0+IGZvcm1hdFRyYW5zaXRpb24oc3RhdGVOb2RlLCBkZXNjcmlwdG9yLCB0KSkpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGRlbGF5ZWRUcmFuc2l0aW9uIG9mIHN0YXRlTm9kZS5hZnRlcikge1xuICAgIGxldCBleGlzdGluZyA9IHRyYW5zaXRpb25zLmdldChkZWxheWVkVHJhbnNpdGlvbi5ldmVudFR5cGUpO1xuICAgIGlmICghZXhpc3RpbmcpIHtcbiAgICAgIGV4aXN0aW5nID0gW107XG4gICAgICB0cmFuc2l0aW9ucy5zZXQoZGVsYXllZFRyYW5zaXRpb24uZXZlbnRUeXBlLCBleGlzdGluZyk7XG4gICAgfVxuICAgIGV4aXN0aW5nLnB1c2goZGVsYXllZFRyYW5zaXRpb24pO1xuICB9XG4gIHJldHVybiB0cmFuc2l0aW9ucztcbn1cbmZ1bmN0aW9uIGZvcm1hdEluaXRpYWxUcmFuc2l0aW9uKHN0YXRlTm9kZSwgX3RhcmdldCkge1xuICBjb25zdCByZXNvbHZlZFRhcmdldCA9IHR5cGVvZiBfdGFyZ2V0ID09PSAnc3RyaW5nJyA/IHN0YXRlTm9kZS5zdGF0ZXNbX3RhcmdldF0gOiBfdGFyZ2V0ID8gc3RhdGVOb2RlLnN0YXRlc1tfdGFyZ2V0LnRhcmdldF0gOiB1bmRlZmluZWQ7XG4gIGlmICghcmVzb2x2ZWRUYXJnZXQgJiYgX3RhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tYmFzZS10by1zdHJpbmdcbiAgICBgSW5pdGlhbCBzdGF0ZSBub2RlIFwiJHtfdGFyZ2V0fVwiIG5vdCBmb3VuZCBvbiBwYXJlbnQgc3RhdGUgbm9kZSAjJHtzdGF0ZU5vZGUuaWR9YCk7XG4gIH1cbiAgY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgICBzb3VyY2U6IHN0YXRlTm9kZSxcbiAgICBhY3Rpb25zOiAhX3RhcmdldCB8fCB0eXBlb2YgX3RhcmdldCA9PT0gJ3N0cmluZycgPyBbXSA6IHRvQXJyYXkoX3RhcmdldC5hY3Rpb25zKSxcbiAgICBldmVudFR5cGU6IG51bGwsXG4gICAgcmVlbnRlcjogZmFsc2UsXG4gICAgdGFyZ2V0OiByZXNvbHZlZFRhcmdldCA/IFtyZXNvbHZlZFRhcmdldF0gOiBbXSxcbiAgICB0b0pTT046ICgpID0+ICh7XG4gICAgICAuLi50cmFuc2l0aW9uLFxuICAgICAgc291cmNlOiBgIyR7c3RhdGVOb2RlLmlkfWAsXG4gICAgICB0YXJnZXQ6IHJlc29sdmVkVGFyZ2V0ID8gW2AjJHtyZXNvbHZlZFRhcmdldC5pZH1gXSA6IFtdXG4gICAgfSlcbiAgfTtcbiAgcmV0dXJuIHRyYW5zaXRpb247XG59XG5mdW5jdGlvbiByZXNvbHZlVGFyZ2V0KHN0YXRlTm9kZSwgdGFyZ2V0cykge1xuICBpZiAodGFyZ2V0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gYW4gdW5kZWZpbmVkIHRhcmdldCBzaWduYWxzIHRoYXQgdGhlIHN0YXRlIG5vZGUgc2hvdWxkIG5vdCB0cmFuc2l0aW9uIGZyb20gdGhhdCBzdGF0ZSB3aGVuIHJlY2VpdmluZyB0aGF0IGV2ZW50XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gdGFyZ2V0cy5tYXAodGFyZ2V0ID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGlmIChpc1N0YXRlSWQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHN0YXRlTm9kZS5tYWNoaW5lLmdldFN0YXRlTm9kZUJ5SWQodGFyZ2V0KTtcbiAgICB9XG4gICAgY29uc3QgaXNJbnRlcm5hbFRhcmdldCA9IHRhcmdldFswXSA9PT0gU1RBVEVfREVMSU1JVEVSO1xuICAgIC8vIElmIGludGVybmFsIHRhcmdldCBpcyBkZWZpbmVkIG9uIG1hY2hpbmUsXG4gICAgLy8gZG8gbm90IGluY2x1ZGUgbWFjaGluZSBrZXkgb24gdGFyZ2V0XG4gICAgaWYgKGlzSW50ZXJuYWxUYXJnZXQgJiYgIXN0YXRlTm9kZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiBnZXRTdGF0ZU5vZGVCeVBhdGgoc3RhdGVOb2RlLCB0YXJnZXQuc2xpY2UoMSkpO1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZFRhcmdldCA9IGlzSW50ZXJuYWxUYXJnZXQgPyBzdGF0ZU5vZGUua2V5ICsgdGFyZ2V0IDogdGFyZ2V0O1xuICAgIGlmIChzdGF0ZU5vZGUucGFyZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZU5vZGUgPSBnZXRTdGF0ZU5vZGVCeVBhdGgoc3RhdGVOb2RlLnBhcmVudCwgcmVzb2x2ZWRUYXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3RhdGVOb2RlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0cmFuc2l0aW9uIGRlZmluaXRpb24gZm9yIHN0YXRlIG5vZGUgJyR7c3RhdGVOb2RlLmlkfSc6XFxuJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRhcmdldDogXCIke3RhcmdldH1cIiBpcyBub3QgYSB2YWxpZCB0YXJnZXQgZnJvbSB0aGUgcm9vdCBub2RlLiBEaWQgeW91IG1lYW4gXCIuJHt0YXJnZXR9XCI/YCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIaXN0b3J5RGVmYXVsdFRyYW5zaXRpb24oc3RhdGVOb2RlKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRUYXJnZXQgPSBub3JtYWxpemVUYXJnZXQoc3RhdGVOb2RlLmNvbmZpZy50YXJnZXQpO1xuICBpZiAoIW5vcm1hbGl6ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gc3RhdGVOb2RlLnBhcmVudC5pbml0aWFsO1xuICB9XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiBub3JtYWxpemVkVGFyZ2V0Lm1hcCh0ID0+IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IGdldFN0YXRlTm9kZUJ5UGF0aChzdGF0ZU5vZGUucGFyZW50LCB0KSA6IHQpXG4gIH07XG59XG5mdW5jdGlvbiBpc0hpc3RvcnlOb2RlKHN0YXRlTm9kZSkge1xuICByZXR1cm4gc3RhdGVOb2RlLnR5cGUgPT09ICdoaXN0b3J5Jztcbn1cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZU5vZGVzV2l0aFRoZWlyQW5jZXN0b3JzKHN0YXRlTm9kZSkge1xuICBjb25zdCBzdGF0ZXMgPSBnZXRJbml0aWFsU3RhdGVOb2RlcyhzdGF0ZU5vZGUpO1xuICBmb3IgKGNvbnN0IGluaXRpYWxTdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGFuY2VzdG9yIG9mIGdldFByb3BlckFuY2VzdG9ycyhpbml0aWFsU3RhdGUsIHN0YXRlTm9kZSkpIHtcbiAgICAgIHN0YXRlcy5hZGQoYW5jZXN0b3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGVzO1xufVxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlTm9kZXMoc3RhdGVOb2RlKSB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgZnVuY3Rpb24gaXRlcihkZXNjU3RhdGVOb2RlKSB7XG4gICAgaWYgKHNldC5oYXMoZGVzY1N0YXRlTm9kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0LmFkZChkZXNjU3RhdGVOb2RlKTtcbiAgICBpZiAoZGVzY1N0YXRlTm9kZS50eXBlID09PSAnY29tcG91bmQnKSB7XG4gICAgICBpdGVyKGRlc2NTdGF0ZU5vZGUuaW5pdGlhbC50YXJnZXRbMF0pO1xuICAgIH0gZWxzZSBpZiAoZGVzY1N0YXRlTm9kZS50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGdldENoaWxkcmVuKGRlc2NTdGF0ZU5vZGUpKSB7XG4gICAgICAgIGl0ZXIoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpdGVyKHN0YXRlTm9kZSk7XG4gIHJldHVybiBzZXQ7XG59XG4vKiogUmV0dXJucyB0aGUgY2hpbGQgc3RhdGUgbm9kZSBmcm9tIGl0cyByZWxhdGl2ZSBgc3RhdGVLZXlgLCBvciB0aHJvd3MuICovXG5mdW5jdGlvbiBnZXRTdGF0ZU5vZGUoc3RhdGVOb2RlLCBzdGF0ZUtleSkge1xuICBpZiAoaXNTdGF0ZUlkKHN0YXRlS2V5KSkge1xuICAgIHJldHVybiBzdGF0ZU5vZGUubWFjaGluZS5nZXRTdGF0ZU5vZGVCeUlkKHN0YXRlS2V5KTtcbiAgfVxuICBpZiAoIXN0YXRlTm9kZS5zdGF0ZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byByZXRyaWV2ZSBjaGlsZCBzdGF0ZSAnJHtzdGF0ZUtleX0nIGZyb20gJyR7c3RhdGVOb2RlLmlkfSc7IG5vIGNoaWxkIHN0YXRlcyBleGlzdC5gKTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBzdGF0ZU5vZGUuc3RhdGVzW3N0YXRlS2V5XTtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENoaWxkIHN0YXRlICcke3N0YXRlS2V5fScgZG9lcyBub3QgZXhpc3Qgb24gJyR7c3RhdGVOb2RlLmlkfSdgKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlbGF0aXZlIHN0YXRlIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gYHN0YXRlUGF0aGAsIG9yIHRocm93cy5cbiAqXG4gKiBAcGFyYW0gc3RhdGVQYXRoIFRoZSBzdHJpbmcgb3Igc3RyaW5nIGFycmF5IHJlbGF0aXZlIHBhdGggdG8gdGhlIHN0YXRlIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGdldFN0YXRlTm9kZUJ5UGF0aChzdGF0ZU5vZGUsIHN0YXRlUGF0aCkge1xuICBpZiAodHlwZW9mIHN0YXRlUGF0aCA9PT0gJ3N0cmluZycgJiYgaXNTdGF0ZUlkKHN0YXRlUGF0aCkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHN0YXRlTm9kZS5tYWNoaW5lLmdldFN0YXRlTm9kZUJ5SWQoc3RhdGVQYXRoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIHRyeSBpbmRpdmlkdWFsIHBhdGhzXG4gICAgICAvLyB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBjb25zdCBhcnJheVN0YXRlUGF0aCA9IHRvU3RhdGVQYXRoKHN0YXRlUGF0aCkuc2xpY2UoKTtcbiAgbGV0IGN1cnJlbnRTdGF0ZU5vZGUgPSBzdGF0ZU5vZGU7XG4gIHdoaWxlIChhcnJheVN0YXRlUGF0aC5sZW5ndGgpIHtcbiAgICBjb25zdCBrZXkgPSBhcnJheVN0YXRlUGF0aC5zaGlmdCgpO1xuICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1cnJlbnRTdGF0ZU5vZGUgPSBnZXRTdGF0ZU5vZGUoY3VycmVudFN0YXRlTm9kZSwga2V5KTtcbiAgfVxuICByZXR1cm4gY3VycmVudFN0YXRlTm9kZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdGF0ZSBub2RlcyByZXByZXNlbnRlZCBieSB0aGUgY3VycmVudCBzdGF0ZSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGVWYWx1ZSBUaGUgc3RhdGUgdmFsdWUgb3IgU3RhdGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVOb2RlcyhzdGF0ZU5vZGUsIHN0YXRlVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBzdGF0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNoaWxkU3RhdGVOb2RlID0gc3RhdGVOb2RlLnN0YXRlc1tzdGF0ZVZhbHVlXTtcbiAgICBpZiAoIWNoaWxkU3RhdGVOb2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0YXRlICcke3N0YXRlVmFsdWV9JyBkb2VzIG5vdCBleGlzdCBvbiAnJHtzdGF0ZU5vZGUuaWR9J2ApO1xuICAgIH1cbiAgICByZXR1cm4gW3N0YXRlTm9kZSwgY2hpbGRTdGF0ZU5vZGVdO1xuICB9XG4gIGNvbnN0IGNoaWxkU3RhdGVLZXlzID0gT2JqZWN0LmtleXMoc3RhdGVWYWx1ZSk7XG4gIGNvbnN0IGNoaWxkU3RhdGVOb2RlcyA9IGNoaWxkU3RhdGVLZXlzLm1hcChzdWJTdGF0ZUtleSA9PiBnZXRTdGF0ZU5vZGUoc3RhdGVOb2RlLCBzdWJTdGF0ZUtleSkpLmZpbHRlcihCb29sZWFuKTtcbiAgcmV0dXJuIFtzdGF0ZU5vZGUubWFjaGluZS5yb290LCBzdGF0ZU5vZGVdLmNvbmNhdChjaGlsZFN0YXRlTm9kZXMsIGNoaWxkU3RhdGVLZXlzLnJlZHVjZSgoYWxsU3ViU3RhdGVOb2Rlcywgc3ViU3RhdGVLZXkpID0+IHtcbiAgICBjb25zdCBzdWJTdGF0ZU5vZGUgPSBnZXRTdGF0ZU5vZGUoc3RhdGVOb2RlLCBzdWJTdGF0ZUtleSk7XG4gICAgaWYgKCFzdWJTdGF0ZU5vZGUpIHtcbiAgICAgIHJldHVybiBhbGxTdWJTdGF0ZU5vZGVzO1xuICAgIH1cbiAgICBjb25zdCBzdWJTdGF0ZU5vZGVzID0gZ2V0U3RhdGVOb2RlcyhzdWJTdGF0ZU5vZGUsIHN0YXRlVmFsdWVbc3ViU3RhdGVLZXldKTtcbiAgICByZXR1cm4gYWxsU3ViU3RhdGVOb2Rlcy5jb25jYXQoc3ViU3RhdGVOb2Rlcyk7XG4gIH0sIFtdKSk7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uQXRvbWljTm9kZShzdGF0ZU5vZGUsIHN0YXRlVmFsdWUsIHNuYXBzaG90LCBldmVudCkge1xuICBjb25zdCBjaGlsZFN0YXRlTm9kZSA9IGdldFN0YXRlTm9kZShzdGF0ZU5vZGUsIHN0YXRlVmFsdWUpO1xuICBjb25zdCBuZXh0ID0gY2hpbGRTdGF0ZU5vZGUubmV4dChzbmFwc2hvdCwgZXZlbnQpO1xuICBpZiAoIW5leHQgfHwgIW5leHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlTm9kZS5uZXh0KHNuYXBzaG90LCBldmVudCk7XG4gIH1cbiAgcmV0dXJuIG5leHQ7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uQ29tcG91bmROb2RlKHN0YXRlTm9kZSwgc3RhdGVWYWx1ZSwgc25hcHNob3QsIGV2ZW50KSB7XG4gIGNvbnN0IHN1YlN0YXRlS2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlVmFsdWUpO1xuICBjb25zdCBjaGlsZFN0YXRlTm9kZSA9IGdldFN0YXRlTm9kZShzdGF0ZU5vZGUsIHN1YlN0YXRlS2V5c1swXSk7XG4gIGNvbnN0IG5leHQgPSB0cmFuc2l0aW9uTm9kZShjaGlsZFN0YXRlTm9kZSwgc3RhdGVWYWx1ZVtzdWJTdGF0ZUtleXNbMF1dLCBzbmFwc2hvdCwgZXZlbnQpO1xuICBpZiAoIW5leHQgfHwgIW5leHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlTm9kZS5uZXh0KHNuYXBzaG90LCBldmVudCk7XG4gIH1cbiAgcmV0dXJuIG5leHQ7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uUGFyYWxsZWxOb2RlKHN0YXRlTm9kZSwgc3RhdGVWYWx1ZSwgc25hcHNob3QsIGV2ZW50KSB7XG4gIGNvbnN0IGFsbElubmVyVHJhbnNpdGlvbnMgPSBbXTtcbiAgZm9yIChjb25zdCBzdWJTdGF0ZUtleSBvZiBPYmplY3Qua2V5cyhzdGF0ZVZhbHVlKSkge1xuICAgIGNvbnN0IHN1YlN0YXRlVmFsdWUgPSBzdGF0ZVZhbHVlW3N1YlN0YXRlS2V5XTtcbiAgICBpZiAoIXN1YlN0YXRlVmFsdWUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBzdWJTdGF0ZU5vZGUgPSBnZXRTdGF0ZU5vZGUoc3RhdGVOb2RlLCBzdWJTdGF0ZUtleSk7XG4gICAgY29uc3QgaW5uZXJUcmFuc2l0aW9ucyA9IHRyYW5zaXRpb25Ob2RlKHN1YlN0YXRlTm9kZSwgc3ViU3RhdGVWYWx1ZSwgc25hcHNob3QsIGV2ZW50KTtcbiAgICBpZiAoaW5uZXJUcmFuc2l0aW9ucykge1xuICAgICAgYWxsSW5uZXJUcmFuc2l0aW9ucy5wdXNoKC4uLmlubmVyVHJhbnNpdGlvbnMpO1xuICAgIH1cbiAgfVxuICBpZiAoIWFsbElubmVyVHJhbnNpdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlTm9kZS5uZXh0KHNuYXBzaG90LCBldmVudCk7XG4gIH1cbiAgcmV0dXJuIGFsbElubmVyVHJhbnNpdGlvbnM7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uTm9kZShzdGF0ZU5vZGUsIHN0YXRlVmFsdWUsIHNuYXBzaG90LCBldmVudCkge1xuICAvLyBsZWFmIG5vZGVcbiAgaWYgKHR5cGVvZiBzdGF0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0cmFuc2l0aW9uQXRvbWljTm9kZShzdGF0ZU5vZGUsIHN0YXRlVmFsdWUsIHNuYXBzaG90LCBldmVudCk7XG4gIH1cblxuICAvLyBjb21wb3VuZCBub2RlXG4gIGlmIChPYmplY3Qua2V5cyhzdGF0ZVZhbHVlKS5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbkNvbXBvdW5kTm9kZShzdGF0ZU5vZGUsIHN0YXRlVmFsdWUsIHNuYXBzaG90LCBldmVudCk7XG4gIH1cblxuICAvLyBwYXJhbGxlbCBub2RlXG4gIHJldHVybiB0cmFuc2l0aW9uUGFyYWxsZWxOb2RlKHN0YXRlTm9kZSwgc3RhdGVWYWx1ZSwgc25hcHNob3QsIGV2ZW50KTtcbn1cbmZ1bmN0aW9uIGdldEhpc3RvcnlOb2RlcyhzdGF0ZU5vZGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlTm9kZS5zdGF0ZXMpLm1hcChrZXkgPT4gc3RhdGVOb2RlLnN0YXRlc1trZXldKS5maWx0ZXIoc24gPT4gc24udHlwZSA9PT0gJ2hpc3RvcnknKTtcbn1cbmZ1bmN0aW9uIGlzRGVzY2VuZGFudChjaGlsZFN0YXRlTm9kZSwgcGFyZW50U3RhdGVOb2RlKSB7XG4gIGxldCBtYXJrZXIgPSBjaGlsZFN0YXRlTm9kZTtcbiAgd2hpbGUgKG1hcmtlci5wYXJlbnQgJiYgbWFya2VyLnBhcmVudCAhPT0gcGFyZW50U3RhdGVOb2RlKSB7XG4gICAgbWFya2VyID0gbWFya2VyLnBhcmVudDtcbiAgfVxuICByZXR1cm4gbWFya2VyLnBhcmVudCA9PT0gcGFyZW50U3RhdGVOb2RlO1xufVxuZnVuY3Rpb24gaGFzSW50ZXJzZWN0aW9uKHMxLCBzMikge1xuICBjb25zdCBzZXQxID0gbmV3IFNldChzMSk7XG4gIGNvbnN0IHNldDIgPSBuZXcgU2V0KHMyKTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHNldDEpIHtcbiAgICBpZiAoc2V0Mi5oYXMoaXRlbSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2V0Mikge1xuICAgIGlmIChzZXQxLmhhcyhpdGVtKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNvbmZsaWN0aW5nVHJhbnNpdGlvbnMoZW5hYmxlZFRyYW5zaXRpb25zLCBzdGF0ZU5vZGVTZXQsIGhpc3RvcnlWYWx1ZSkge1xuICBjb25zdCBmaWx0ZXJlZFRyYW5zaXRpb25zID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHQxIG9mIGVuYWJsZWRUcmFuc2l0aW9ucykge1xuICAgIGxldCB0MVByZWVtcHRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHRyYW5zaXRpb25zVG9SZW1vdmUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChjb25zdCB0MiBvZiBmaWx0ZXJlZFRyYW5zaXRpb25zKSB7XG4gICAgICBpZiAoaGFzSW50ZXJzZWN0aW9uKGNvbXB1dGVFeGl0U2V0KFt0MV0sIHN0YXRlTm9kZVNldCwgaGlzdG9yeVZhbHVlKSwgY29tcHV0ZUV4aXRTZXQoW3QyXSwgc3RhdGVOb2RlU2V0LCBoaXN0b3J5VmFsdWUpKSkge1xuICAgICAgICBpZiAoaXNEZXNjZW5kYW50KHQxLnNvdXJjZSwgdDIuc291cmNlKSkge1xuICAgICAgICAgIHRyYW5zaXRpb25zVG9SZW1vdmUuYWRkKHQyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0MVByZWVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0MVByZWVtcHRlZCkge1xuICAgICAgZm9yIChjb25zdCB0MyBvZiB0cmFuc2l0aW9uc1RvUmVtb3ZlKSB7XG4gICAgICAgIGZpbHRlcmVkVHJhbnNpdGlvbnMuZGVsZXRlKHQzKTtcbiAgICAgIH1cbiAgICAgIGZpbHRlcmVkVHJhbnNpdGlvbnMuYWRkKHQxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20oZmlsdGVyZWRUcmFuc2l0aW9ucyk7XG59XG5mdW5jdGlvbiBmaW5kTGVhc3RDb21tb25BbmNlc3RvcihzdGF0ZU5vZGVzKSB7XG4gIGNvbnN0IFtoZWFkLCAuLi50YWlsXSA9IHN0YXRlTm9kZXM7XG4gIGZvciAoY29uc3QgYW5jZXN0b3Igb2YgZ2V0UHJvcGVyQW5jZXN0b3JzKGhlYWQsIHVuZGVmaW5lZCkpIHtcbiAgICBpZiAodGFpbC5ldmVyeShzbiA9PiBpc0Rlc2NlbmRhbnQoc24sIGFuY2VzdG9yKSkpIHtcbiAgICAgIHJldHVybiBhbmNlc3RvcjtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEVmZmVjdGl2ZVRhcmdldFN0YXRlcyh0cmFuc2l0aW9uLCBoaXN0b3J5VmFsdWUpIHtcbiAgaWYgKCF0cmFuc2l0aW9uLnRhcmdldCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCB0YXJnZXRzID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHRhcmdldE5vZGUgb2YgdHJhbnNpdGlvbi50YXJnZXQpIHtcbiAgICBpZiAoaXNIaXN0b3J5Tm9kZSh0YXJnZXROb2RlKSkge1xuICAgICAgaWYgKGhpc3RvcnlWYWx1ZVt0YXJnZXROb2RlLmlkXSkge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaGlzdG9yeVZhbHVlW3RhcmdldE5vZGUuaWRdKSB7XG4gICAgICAgICAgdGFyZ2V0cy5hZGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBnZXRFZmZlY3RpdmVUYXJnZXRTdGF0ZXMocmVzb2x2ZUhpc3RvcnlEZWZhdWx0VHJhbnNpdGlvbih0YXJnZXROb2RlKSwgaGlzdG9yeVZhbHVlKSkge1xuICAgICAgICAgIHRhcmdldHMuYWRkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldHMuYWRkKHRhcmdldE5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gWy4uLnRhcmdldHNdO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkRvbWFpbih0cmFuc2l0aW9uLCBoaXN0b3J5VmFsdWUpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVzID0gZ2V0RWZmZWN0aXZlVGFyZ2V0U3RhdGVzKHRyYW5zaXRpb24sIGhpc3RvcnlWYWx1ZSk7XG4gIGlmICghdGFyZ2V0U3RhdGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdHJhbnNpdGlvbi5yZWVudGVyICYmIHRhcmdldFN0YXRlcy5ldmVyeSh0YXJnZXQgPT4gdGFyZ2V0ID09PSB0cmFuc2l0aW9uLnNvdXJjZSB8fCBpc0Rlc2NlbmRhbnQodGFyZ2V0LCB0cmFuc2l0aW9uLnNvdXJjZSkpKSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb24uc291cmNlO1xuICB9XG4gIGNvbnN0IGxjYSA9IGZpbmRMZWFzdENvbW1vbkFuY2VzdG9yKHRhcmdldFN0YXRlcy5jb25jYXQodHJhbnNpdGlvbi5zb3VyY2UpKTtcbiAgaWYgKGxjYSkge1xuICAgIHJldHVybiBsY2E7XG4gIH1cblxuICAvLyBhdCB0aGlzIHBvaW50IHdlIGtub3cgdGhhdCBpdCdzIGEgcm9vdCB0cmFuc2l0aW9uIHNpbmNlIExDQSBjb3VsZG4ndCBiZSBmb3VuZFxuICBpZiAodHJhbnNpdGlvbi5yZWVudGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB0cmFuc2l0aW9uLnNvdXJjZS5tYWNoaW5lLnJvb3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlRXhpdFNldCh0cmFuc2l0aW9ucywgc3RhdGVOb2RlU2V0LCBoaXN0b3J5VmFsdWUpIHtcbiAgY29uc3Qgc3RhdGVzVG9FeGl0ID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHQgb2YgdHJhbnNpdGlvbnMpIHtcbiAgICBpZiAodC50YXJnZXQ/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgZG9tYWluID0gZ2V0VHJhbnNpdGlvbkRvbWFpbih0LCBoaXN0b3J5VmFsdWUpO1xuICAgICAgaWYgKHQucmVlbnRlciAmJiB0LnNvdXJjZSA9PT0gZG9tYWluKSB7XG4gICAgICAgIHN0YXRlc1RvRXhpdC5hZGQoZG9tYWluKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qgc3RhdGVOb2RlIG9mIHN0YXRlTm9kZVNldCkge1xuICAgICAgICBpZiAoaXNEZXNjZW5kYW50KHN0YXRlTm9kZSwgZG9tYWluKSkge1xuICAgICAgICAgIHN0YXRlc1RvRXhpdC5hZGQoc3RhdGVOb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gWy4uLnN0YXRlc1RvRXhpdF07XG59XG5mdW5jdGlvbiBhcmVTdGF0ZU5vZGVDb2xsZWN0aW9uc0VxdWFsKHByZXZTdGF0ZU5vZGVzLCBuZXh0U3RhdGVOb2RlU2V0KSB7XG4gIGlmIChwcmV2U3RhdGVOb2Rlcy5sZW5ndGggIT09IG5leHRTdGF0ZU5vZGVTZXQuc2l6ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGNvbnN0IG5vZGUgb2YgcHJldlN0YXRlTm9kZXMpIHtcbiAgICBpZiAoIW5leHRTdGF0ZU5vZGVTZXQuaGFzKG5vZGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKiogaHR0cHM6Ly93d3cudzMub3JnL1RSL3NjeG1sLyNtaWNyb3N0ZXBQcm9jZWR1cmUgKi9cbmZ1bmN0aW9uIG1pY3Jvc3RlcCh0cmFuc2l0aW9ucywgY3VycmVudFNuYXBzaG90LCBhY3RvclNjb3BlLCBldmVudCwgaXNJbml0aWFsLCBpbnRlcm5hbFF1ZXVlKSB7XG4gIGlmICghdHJhbnNpdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTbmFwc2hvdDtcbiAgfVxuICBjb25zdCBtdXRTdGF0ZU5vZGVTZXQgPSBuZXcgU2V0KGN1cnJlbnRTbmFwc2hvdC5fbm9kZXMpO1xuICBsZXQgaGlzdG9yeVZhbHVlID0gY3VycmVudFNuYXBzaG90Lmhpc3RvcnlWYWx1ZTtcbiAgY29uc3QgZmlsdGVyZWRUcmFuc2l0aW9ucyA9IHJlbW92ZUNvbmZsaWN0aW5nVHJhbnNpdGlvbnModHJhbnNpdGlvbnMsIG11dFN0YXRlTm9kZVNldCwgaGlzdG9yeVZhbHVlKTtcbiAgbGV0IG5leHRTdGF0ZSA9IGN1cnJlbnRTbmFwc2hvdDtcblxuICAvLyBFeGl0IHN0YXRlc1xuICBpZiAoIWlzSW5pdGlhbCkge1xuICAgIFtuZXh0U3RhdGUsIGhpc3RvcnlWYWx1ZV0gPSBleGl0U3RhdGVzKG5leHRTdGF0ZSwgZXZlbnQsIGFjdG9yU2NvcGUsIGZpbHRlcmVkVHJhbnNpdGlvbnMsIG11dFN0YXRlTm9kZVNldCwgaGlzdG9yeVZhbHVlLCBpbnRlcm5hbFF1ZXVlLCBhY3RvclNjb3BlLmFjdGlvbkV4ZWN1dG9yKTtcbiAgfVxuXG4gIC8vIEV4ZWN1dGUgdHJhbnNpdGlvbiBjb250ZW50XG4gIG5leHRTdGF0ZSA9IHJlc29sdmVBY3Rpb25zQW5kQ29udGV4dChuZXh0U3RhdGUsIGV2ZW50LCBhY3RvclNjb3BlLCBmaWx0ZXJlZFRyYW5zaXRpb25zLmZsYXRNYXAodCA9PiB0LmFjdGlvbnMpLCBpbnRlcm5hbFF1ZXVlLCB1bmRlZmluZWQpO1xuXG4gIC8vIEVudGVyIHN0YXRlc1xuICBuZXh0U3RhdGUgPSBlbnRlclN0YXRlcyhuZXh0U3RhdGUsIGV2ZW50LCBhY3RvclNjb3BlLCBmaWx0ZXJlZFRyYW5zaXRpb25zLCBtdXRTdGF0ZU5vZGVTZXQsIGludGVybmFsUXVldWUsIGhpc3RvcnlWYWx1ZSwgaXNJbml0aWFsKTtcbiAgY29uc3QgbmV4dFN0YXRlTm9kZXMgPSBbLi4ubXV0U3RhdGVOb2RlU2V0XTtcbiAgaWYgKG5leHRTdGF0ZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgIG5leHRTdGF0ZSA9IHJlc29sdmVBY3Rpb25zQW5kQ29udGV4dChuZXh0U3RhdGUsIGV2ZW50LCBhY3RvclNjb3BlLCBuZXh0U3RhdGVOb2Rlcy5zb3J0KChhLCBiKSA9PiBiLm9yZGVyIC0gYS5vcmRlcikuZmxhdE1hcChzdGF0ZSA9PiBzdGF0ZS5leGl0KSwgaW50ZXJuYWxRdWV1ZSwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhdGNoXG4gIHRyeSB7XG4gICAgaWYgKGhpc3RvcnlWYWx1ZSA9PT0gY3VycmVudFNuYXBzaG90Lmhpc3RvcnlWYWx1ZSAmJiBhcmVTdGF0ZU5vZGVDb2xsZWN0aW9uc0VxdWFsKGN1cnJlbnRTbmFwc2hvdC5fbm9kZXMsIG11dFN0YXRlTm9kZVNldCkpIHtcbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZU1hY2hpbmVTbmFwc2hvdChuZXh0U3RhdGUsIHtcbiAgICAgIF9ub2RlczogbmV4dFN0YXRlTm9kZXMsXG4gICAgICBoaXN0b3J5VmFsdWVcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRPRE86IFJlZmFjdG9yIHRoaXMgb25jZSBwcm9wZXIgZXJyb3IgaGFuZGxpbmcgaXMgaW1wbGVtZW50ZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGF0ZWx5YWkvcmZjcy9wdWxsLzRcbiAgICB0aHJvdyBlO1xuICB9XG59XG5mdW5jdGlvbiBnZXRNYWNoaW5lT3V0cHV0KHNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgcm9vdE5vZGUsIHJvb3RDb21wbGV0aW9uTm9kZSkge1xuICBpZiAocm9vdE5vZGUub3V0cHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG9uZVN0YXRlRXZlbnQgPSBjcmVhdGVEb25lU3RhdGVFdmVudChyb290Q29tcGxldGlvbk5vZGUuaWQsIHJvb3RDb21wbGV0aW9uTm9kZS5vdXRwdXQgIT09IHVuZGVmaW5lZCAmJiByb290Q29tcGxldGlvbk5vZGUucGFyZW50ID8gcmVzb2x2ZU91dHB1dChyb290Q29tcGxldGlvbk5vZGUub3V0cHV0LCBzbmFwc2hvdC5jb250ZXh0LCBldmVudCwgYWN0b3JTY29wZS5zZWxmKSA6IHVuZGVmaW5lZCk7XG4gIHJldHVybiByZXNvbHZlT3V0cHV0KHJvb3ROb2RlLm91dHB1dCwgc25hcHNob3QuY29udGV4dCwgZG9uZVN0YXRlRXZlbnQsIGFjdG9yU2NvcGUuc2VsZik7XG59XG5mdW5jdGlvbiBlbnRlclN0YXRlcyhjdXJyZW50U25hcHNob3QsIGV2ZW50LCBhY3RvclNjb3BlLCBmaWx0ZXJlZFRyYW5zaXRpb25zLCBtdXRTdGF0ZU5vZGVTZXQsIGludGVybmFsUXVldWUsIGhpc3RvcnlWYWx1ZSwgaXNJbml0aWFsKSB7XG4gIGxldCBuZXh0U25hcHNob3QgPSBjdXJyZW50U25hcHNob3Q7XG4gIGNvbnN0IHN0YXRlc1RvRW50ZXIgPSBuZXcgU2V0KCk7XG4gIC8vIHRob3NlIGFyZSBzdGF0ZXMgdGhhdCB3ZXJlIGRpcmVjdGx5IHRhcmdldGVkIG9yIGluZGlyZWN0bHkgdGFyZ2V0ZWQgYnkgdGhlIGV4cGxpY2l0IHRhcmdldFxuICAvLyBpbiBvdGhlciB3b3JkcywgdGhvc2UgYXJlIHN0YXRlcyBmb3Igd2hpY2ggaW5pdGlhbCBhY3Rpb25zIHNob3VsZCBiZSBleGVjdXRlZFxuICAvLyB3aGVuIHdlIHRhcmdldCBgI2RlZXBfY2hpbGRgIGluaXRpYWwgYWN0aW9ucyBvZiBpdHMgYW5jZXN0b3JzIHNob3VsZG4ndCBiZSBleGVjdXRlZFxuICBjb25zdCBzdGF0ZXNGb3JEZWZhdWx0RW50cnkgPSBuZXcgU2V0KCk7XG4gIGNvbXB1dGVFbnRyeVNldChmaWx0ZXJlZFRyYW5zaXRpb25zLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgc3RhdGVzVG9FbnRlcik7XG5cbiAgLy8gSW4gdGhlIGluaXRpYWwgc3RhdGUsIHRoZSByb290IHN0YXRlIG5vZGUgaXMgXCJlbnRlcmVkXCIuXG4gIGlmIChpc0luaXRpYWwpIHtcbiAgICBzdGF0ZXNGb3JEZWZhdWx0RW50cnkuYWRkKGN1cnJlbnRTbmFwc2hvdC5tYWNoaW5lLnJvb3QpO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlZE5vZGVzID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHN0YXRlTm9kZVRvRW50ZXIgb2YgWy4uLnN0YXRlc1RvRW50ZXJdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSkge1xuICAgIG11dFN0YXRlTm9kZVNldC5hZGQoc3RhdGVOb2RlVG9FbnRlcik7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuXG4gICAgLy8gQWRkIGVudHJ5IGFjdGlvbnNcbiAgICBhY3Rpb25zLnB1c2goLi4uc3RhdGVOb2RlVG9FbnRlci5lbnRyeSk7XG4gICAgZm9yIChjb25zdCBpbnZva2VEZWYgb2Ygc3RhdGVOb2RlVG9FbnRlci5pbnZva2UpIHtcbiAgICAgIGFjdGlvbnMucHVzaChzcGF3bkNoaWxkKGludm9rZURlZi5zcmMsIHtcbiAgICAgICAgLi4uaW52b2tlRGVmLFxuICAgICAgICBzeW5jU25hcHNob3Q6ICEhaW52b2tlRGVmLm9uU25hcHNob3RcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlc0ZvckRlZmF1bHRFbnRyeS5oYXMoc3RhdGVOb2RlVG9FbnRlcikpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxBY3Rpb25zID0gc3RhdGVOb2RlVG9FbnRlci5pbml0aWFsLmFjdGlvbnM7XG4gICAgICBhY3Rpb25zLnB1c2goLi4uaW5pdGlhbEFjdGlvbnMpO1xuICAgIH1cbiAgICBuZXh0U25hcHNob3QgPSByZXNvbHZlQWN0aW9uc0FuZENvbnRleHQobmV4dFNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgYWN0aW9ucywgaW50ZXJuYWxRdWV1ZSwgc3RhdGVOb2RlVG9FbnRlci5pbnZva2UubWFwKGludm9rZURlZiA9PiBpbnZva2VEZWYuaWQpKTtcbiAgICBpZiAoc3RhdGVOb2RlVG9FbnRlci50eXBlID09PSAnZmluYWwnKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBzdGF0ZU5vZGVUb0VudGVyLnBhcmVudDtcbiAgICAgIGxldCBhbmNlc3Rvck1hcmtlciA9IHBhcmVudD8udHlwZSA9PT0gJ3BhcmFsbGVsJyA/IHBhcmVudCA6IHBhcmVudD8ucGFyZW50O1xuICAgICAgbGV0IHJvb3RDb21wbGV0aW9uTm9kZSA9IGFuY2VzdG9yTWFya2VyIHx8IHN0YXRlTm9kZVRvRW50ZXI7XG4gICAgICBpZiAocGFyZW50Py50eXBlID09PSAnY29tcG91bmQnKSB7XG4gICAgICAgIGludGVybmFsUXVldWUucHVzaChjcmVhdGVEb25lU3RhdGVFdmVudChwYXJlbnQuaWQsIHN0YXRlTm9kZVRvRW50ZXIub3V0cHV0ICE9PSB1bmRlZmluZWQgPyByZXNvbHZlT3V0cHV0KHN0YXRlTm9kZVRvRW50ZXIub3V0cHV0LCBuZXh0U25hcHNob3QuY29udGV4dCwgZXZlbnQsIGFjdG9yU2NvcGUuc2VsZikgOiB1bmRlZmluZWQpKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChhbmNlc3Rvck1hcmtlcj8udHlwZSA9PT0gJ3BhcmFsbGVsJyAmJiAhY29tcGxldGVkTm9kZXMuaGFzKGFuY2VzdG9yTWFya2VyKSAmJiBpc0luRmluYWxTdGF0ZShtdXRTdGF0ZU5vZGVTZXQsIGFuY2VzdG9yTWFya2VyKSkge1xuICAgICAgICBjb21wbGV0ZWROb2Rlcy5hZGQoYW5jZXN0b3JNYXJrZXIpO1xuICAgICAgICBpbnRlcm5hbFF1ZXVlLnB1c2goY3JlYXRlRG9uZVN0YXRlRXZlbnQoYW5jZXN0b3JNYXJrZXIuaWQpKTtcbiAgICAgICAgcm9vdENvbXBsZXRpb25Ob2RlID0gYW5jZXN0b3JNYXJrZXI7XG4gICAgICAgIGFuY2VzdG9yTWFya2VyID0gYW5jZXN0b3JNYXJrZXIucGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKGFuY2VzdG9yTWFya2VyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbmV4dFNuYXBzaG90ID0gY2xvbmVNYWNoaW5lU25hcHNob3QobmV4dFNuYXBzaG90LCB7XG4gICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgICBvdXRwdXQ6IGdldE1hY2hpbmVPdXRwdXQobmV4dFNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgbmV4dFNuYXBzaG90Lm1hY2hpbmUucm9vdCwgcm9vdENvbXBsZXRpb25Ob2RlKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXh0U25hcHNob3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlRW50cnlTZXQodHJhbnNpdGlvbnMsIGhpc3RvcnlWYWx1ZSwgc3RhdGVzRm9yRGVmYXVsdEVudHJ5LCBzdGF0ZXNUb0VudGVyKSB7XG4gIGZvciAoY29uc3QgdCBvZiB0cmFuc2l0aW9ucykge1xuICAgIGNvbnN0IGRvbWFpbiA9IGdldFRyYW5zaXRpb25Eb21haW4odCwgaGlzdG9yeVZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgdC50YXJnZXQgfHwgW10pIHtcbiAgICAgIGlmICghaXNIaXN0b3J5Tm9kZShzKSAmJiAoXG4gICAgICAvLyBpZiB0aGUgdGFyZ2V0IGlzIGRpZmZlcmVudCB0aGFuIHRoZSBzb3VyY2UgdGhlbiBpdCB3aWxsICpkZWZpbml0ZWx5KiBiZSBlbnRlcmVkXG4gICAgICB0LnNvdXJjZSAhPT0gcyB8fFxuICAgICAgLy8gd2Uga25vdyB0aGF0IHRoZSBkb21haW4gY2FuJ3QgbGllIHdpdGhpbiB0aGUgc291cmNlXG4gICAgICAvLyBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIHRoZSBzb3VyY2UgdGhlbiBpdCdzIG91dHNpZGUgb2YgaXQgYW5kIGl0IG1lYW5zIHRoYXQgdGhlIHRhcmdldCBoYXMgdG8gYmUgZW50ZXJlZCBhcyB3ZWxsXG4gICAgICB0LnNvdXJjZSAhPT0gZG9tYWluIHx8XG4gICAgICAvLyByZWVudGVyaW5nIHRyYW5zaXRpb25zIGFsd2F5cyBlbnRlciB0aGUgdGFyZ2V0LCBldmVuIGlmIGl0J3MgdGhlIHNvdXJjZSBpdHNlbGZcbiAgICAgIHQucmVlbnRlcikpIHtcbiAgICAgICAgc3RhdGVzVG9FbnRlci5hZGQocyk7XG4gICAgICAgIHN0YXRlc0ZvckRlZmF1bHRFbnRyeS5hZGQocyk7XG4gICAgICB9XG4gICAgICBhZGREZXNjZW5kYW50U3RhdGVzVG9FbnRlcihzLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgc3RhdGVzVG9FbnRlcik7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFN0YXRlcyA9IGdldEVmZmVjdGl2ZVRhcmdldFN0YXRlcyh0LCBoaXN0b3J5VmFsdWUpO1xuICAgIGZvciAoY29uc3QgcyBvZiB0YXJnZXRTdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9ycyA9IGdldFByb3BlckFuY2VzdG9ycyhzLCBkb21haW4pO1xuICAgICAgaWYgKGRvbWFpbj8udHlwZSA9PT0gJ3BhcmFsbGVsJykge1xuICAgICAgICBhbmNlc3RvcnMucHVzaChkb21haW4pO1xuICAgICAgfVxuICAgICAgYWRkQW5jZXN0b3JTdGF0ZXNUb0VudGVyKHN0YXRlc1RvRW50ZXIsIGhpc3RvcnlWYWx1ZSwgc3RhdGVzRm9yRGVmYXVsdEVudHJ5LCBhbmNlc3RvcnMsICF0LnNvdXJjZS5wYXJlbnQgJiYgdC5yZWVudGVyID8gdW5kZWZpbmVkIDogZG9tYWluKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZERlc2NlbmRhbnRTdGF0ZXNUb0VudGVyKHN0YXRlTm9kZSwgaGlzdG9yeVZhbHVlLCBzdGF0ZXNGb3JEZWZhdWx0RW50cnksIHN0YXRlc1RvRW50ZXIpIHtcbiAgaWYgKGlzSGlzdG9yeU5vZGUoc3RhdGVOb2RlKSkge1xuICAgIGlmIChoaXN0b3J5VmFsdWVbc3RhdGVOb2RlLmlkXSkge1xuICAgICAgY29uc3QgaGlzdG9yeVN0YXRlTm9kZXMgPSBoaXN0b3J5VmFsdWVbc3RhdGVOb2RlLmlkXTtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBoaXN0b3J5U3RhdGVOb2Rlcykge1xuICAgICAgICBzdGF0ZXNUb0VudGVyLmFkZChzKTtcbiAgICAgICAgYWRkRGVzY2VuZGFudFN0YXRlc1RvRW50ZXIocywgaGlzdG9yeVZhbHVlLCBzdGF0ZXNGb3JEZWZhdWx0RW50cnksIHN0YXRlc1RvRW50ZXIpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBzIG9mIGhpc3RvcnlTdGF0ZU5vZGVzKSB7XG4gICAgICAgIGFkZFByb3BlckFuY2VzdG9yU3RhdGVzVG9FbnRlcihzLCBzdGF0ZU5vZGUucGFyZW50LCBzdGF0ZXNUb0VudGVyLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlEZWZhdWx0VHJhbnNpdGlvbiA9IHJlc29sdmVIaXN0b3J5RGVmYXVsdFRyYW5zaXRpb24oc3RhdGVOb2RlKTtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBoaXN0b3J5RGVmYXVsdFRyYW5zaXRpb24udGFyZ2V0KSB7XG4gICAgICAgIHN0YXRlc1RvRW50ZXIuYWRkKHMpO1xuICAgICAgICBpZiAoaGlzdG9yeURlZmF1bHRUcmFuc2l0aW9uID09PSBzdGF0ZU5vZGUucGFyZW50Py5pbml0aWFsKSB7XG4gICAgICAgICAgc3RhdGVzRm9yRGVmYXVsdEVudHJ5LmFkZChzdGF0ZU5vZGUucGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBhZGREZXNjZW5kYW50U3RhdGVzVG9FbnRlcihzLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgc3RhdGVzVG9FbnRlcik7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgaGlzdG9yeURlZmF1bHRUcmFuc2l0aW9uLnRhcmdldCkge1xuICAgICAgICBhZGRQcm9wZXJBbmNlc3RvclN0YXRlc1RvRW50ZXIocywgc3RhdGVOb2RlLnBhcmVudCwgc3RhdGVzVG9FbnRlciwgaGlzdG9yeVZhbHVlLCBzdGF0ZXNGb3JEZWZhdWx0RW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoc3RhdGVOb2RlLnR5cGUgPT09ICdjb21wb3VuZCcpIHtcbiAgICAgIGNvbnN0IFtpbml0aWFsU3RhdGVdID0gc3RhdGVOb2RlLmluaXRpYWwudGFyZ2V0O1xuICAgICAgaWYgKCFpc0hpc3RvcnlOb2RlKGluaXRpYWxTdGF0ZSkpIHtcbiAgICAgICAgc3RhdGVzVG9FbnRlci5hZGQoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgc3RhdGVzRm9yRGVmYXVsdEVudHJ5LmFkZChpbml0aWFsU3RhdGUpO1xuICAgICAgfVxuICAgICAgYWRkRGVzY2VuZGFudFN0YXRlc1RvRW50ZXIoaW5pdGlhbFN0YXRlLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgc3RhdGVzVG9FbnRlcik7XG4gICAgICBhZGRQcm9wZXJBbmNlc3RvclN0YXRlc1RvRW50ZXIoaW5pdGlhbFN0YXRlLCBzdGF0ZU5vZGUsIHN0YXRlc1RvRW50ZXIsIGhpc3RvcnlWYWx1ZSwgc3RhdGVzRm9yRGVmYXVsdEVudHJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXRlTm9kZS50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZ2V0Q2hpbGRyZW4oc3RhdGVOb2RlKS5maWx0ZXIoc24gPT4gIWlzSGlzdG9yeU5vZGUoc24pKSkge1xuICAgICAgICAgIGlmICghWy4uLnN0YXRlc1RvRW50ZXJdLnNvbWUocyA9PiBpc0Rlc2NlbmRhbnQocywgY2hpbGQpKSkge1xuICAgICAgICAgICAgaWYgKCFpc0hpc3RvcnlOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgICBzdGF0ZXNUb0VudGVyLmFkZChjaGlsZCk7XG4gICAgICAgICAgICAgIHN0YXRlc0ZvckRlZmF1bHRFbnRyeS5hZGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkRGVzY2VuZGFudFN0YXRlc1RvRW50ZXIoY2hpbGQsIGhpc3RvcnlWYWx1ZSwgc3RhdGVzRm9yRGVmYXVsdEVudHJ5LCBzdGF0ZXNUb0VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEFuY2VzdG9yU3RhdGVzVG9FbnRlcihzdGF0ZXNUb0VudGVyLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgYW5jZXN0b3JzLCByZWVudHJhbmN5RG9tYWluKSB7XG4gIGZvciAoY29uc3QgYW5jIG9mIGFuY2VzdG9ycykge1xuICAgIGlmICghcmVlbnRyYW5jeURvbWFpbiB8fCBpc0Rlc2NlbmRhbnQoYW5jLCByZWVudHJhbmN5RG9tYWluKSkge1xuICAgICAgc3RhdGVzVG9FbnRlci5hZGQoYW5jKTtcbiAgICB9XG4gICAgaWYgKGFuYy50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGdldENoaWxkcmVuKGFuYykuZmlsdGVyKHNuID0+ICFpc0hpc3RvcnlOb2RlKHNuKSkpIHtcbiAgICAgICAgaWYgKCFbLi4uc3RhdGVzVG9FbnRlcl0uc29tZShzID0+IGlzRGVzY2VuZGFudChzLCBjaGlsZCkpKSB7XG4gICAgICAgICAgc3RhdGVzVG9FbnRlci5hZGQoY2hpbGQpO1xuICAgICAgICAgIGFkZERlc2NlbmRhbnRTdGF0ZXNUb0VudGVyKGNoaWxkLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSwgc3RhdGVzVG9FbnRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZFByb3BlckFuY2VzdG9yU3RhdGVzVG9FbnRlcihzdGF0ZU5vZGUsIHRvU3RhdGVOb2RlLCBzdGF0ZXNUb0VudGVyLCBoaXN0b3J5VmFsdWUsIHN0YXRlc0ZvckRlZmF1bHRFbnRyeSkge1xuICBhZGRBbmNlc3RvclN0YXRlc1RvRW50ZXIoc3RhdGVzVG9FbnRlciwgaGlzdG9yeVZhbHVlLCBzdGF0ZXNGb3JEZWZhdWx0RW50cnksIGdldFByb3BlckFuY2VzdG9ycyhzdGF0ZU5vZGUsIHRvU3RhdGVOb2RlKSk7XG59XG5mdW5jdGlvbiBleGl0U3RhdGVzKGN1cnJlbnRTbmFwc2hvdCwgZXZlbnQsIGFjdG9yU2NvcGUsIHRyYW5zaXRpb25zLCBtdXRTdGF0ZU5vZGVTZXQsIGhpc3RvcnlWYWx1ZSwgaW50ZXJuYWxRdWV1ZSwgX2FjdGlvbkV4ZWN1dG9yKSB7XG4gIGxldCBuZXh0U25hcHNob3QgPSBjdXJyZW50U25hcHNob3Q7XG4gIGNvbnN0IHN0YXRlc1RvRXhpdCA9IGNvbXB1dGVFeGl0U2V0KHRyYW5zaXRpb25zLCBtdXRTdGF0ZU5vZGVTZXQsIGhpc3RvcnlWYWx1ZSk7XG4gIHN0YXRlc1RvRXhpdC5zb3J0KChhLCBiKSA9PiBiLm9yZGVyIC0gYS5vcmRlcik7XG4gIGxldCBjaGFuZ2VkSGlzdG9yeTtcblxuICAvLyBGcm9tIFNDWE1MIGFsZ29yaXRobTogaHR0cHM6Ly93d3cudzMub3JnL1RSL3NjeG1sLyNleGl0U3RhdGVzXG4gIGZvciAoY29uc3QgZXhpdFN0YXRlTm9kZSBvZiBzdGF0ZXNUb0V4aXQpIHtcbiAgICBmb3IgKGNvbnN0IGhpc3RvcnlOb2RlIG9mIGdldEhpc3RvcnlOb2RlcyhleGl0U3RhdGVOb2RlKSkge1xuICAgICAgbGV0IHByZWRpY2F0ZTtcbiAgICAgIGlmIChoaXN0b3J5Tm9kZS5oaXN0b3J5ID09PSAnZGVlcCcpIHtcbiAgICAgICAgcHJlZGljYXRlID0gc24gPT4gaXNBdG9taWNTdGF0ZU5vZGUoc24pICYmIGlzRGVzY2VuZGFudChzbiwgZXhpdFN0YXRlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVkaWNhdGUgPSBzbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNuLnBhcmVudCA9PT0gZXhpdFN0YXRlTm9kZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNoYW5nZWRIaXN0b3J5ID8/PSB7XG4gICAgICAgIC4uLmhpc3RvcnlWYWx1ZVxuICAgICAgfTtcbiAgICAgIGNoYW5nZWRIaXN0b3J5W2hpc3RvcnlOb2RlLmlkXSA9IEFycmF5LmZyb20obXV0U3RhdGVOb2RlU2V0KS5maWx0ZXIocHJlZGljYXRlKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCBzIG9mIHN0YXRlc1RvRXhpdCkge1xuICAgIG5leHRTbmFwc2hvdCA9IHJlc29sdmVBY3Rpb25zQW5kQ29udGV4dChuZXh0U25hcHNob3QsIGV2ZW50LCBhY3RvclNjb3BlLCBbLi4ucy5leGl0LCAuLi5zLmludm9rZS5tYXAoZGVmID0+IHN0b3BDaGlsZChkZWYuaWQpKV0sIGludGVybmFsUXVldWUsIHVuZGVmaW5lZCk7XG4gICAgbXV0U3RhdGVOb2RlU2V0LmRlbGV0ZShzKTtcbiAgfVxuICByZXR1cm4gW25leHRTbmFwc2hvdCwgY2hhbmdlZEhpc3RvcnkgfHwgaGlzdG9yeVZhbHVlXTtcbn1cbmZ1bmN0aW9uIGdldEFjdGlvbihtYWNoaW5lLCBhY3Rpb25UeXBlKSB7XG4gIHJldHVybiBtYWNoaW5lLmltcGxlbWVudGF0aW9ucy5hY3Rpb25zW2FjdGlvblR5cGVdO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUFuZEV4ZWN1dGVBY3Rpb25zV2l0aENvbnRleHQoY3VycmVudFNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgYWN0aW9ucywgZXh0cmEsIHJldHJpZXMpIHtcbiAgY29uc3Qge1xuICAgIG1hY2hpbmVcbiAgfSA9IGN1cnJlbnRTbmFwc2hvdDtcbiAgbGV0IGludGVybWVkaWF0ZVNuYXBzaG90ID0gY3VycmVudFNuYXBzaG90O1xuICBmb3IgKGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgY29uc3QgaXNJbmxpbmUgPSB0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IHJlc29sdmVkQWN0aW9uID0gaXNJbmxpbmUgPyBhY3Rpb24gOlxuICAgIC8vIHRoZSBleGlzdGluZyB0eXBlIG9mIGAuYWN0aW9uc2AgYXNzdW1lcyBub24tbnVsbGFibGUgYFRFeHByZXNzaW9uQWN0aW9uYFxuICAgIC8vIGl0J3MgZmluZSB0byBjYXN0IHRoaXMgaGVyZSB0byBnZXQgYSBjb21tb24gdHlwZSBhbmQgbGFjayBvZiBlcnJvcnMgaW4gdGhlIHJlc3Qgb2YgdGhlIGNvZGVcbiAgICAvLyBvdXIgbG9naWMgYmVsb3cgbWFrZXMgc3VyZSB0aGF0IHdlIGNhbGwgdGhvc2UgMiBcInZhcmlhbnRzXCIgY29ycmVjdGx5XG5cbiAgICBnZXRBY3Rpb24obWFjaGluZSwgdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBhY3Rpb24gOiBhY3Rpb24udHlwZSk7XG4gICAgY29uc3QgYWN0aW9uQXJncyA9IHtcbiAgICAgIGNvbnRleHQ6IGludGVybWVkaWF0ZVNuYXBzaG90LmNvbnRleHQsXG4gICAgICBldmVudCxcbiAgICAgIHNlbGY6IGFjdG9yU2NvcGUuc2VsZixcbiAgICAgIHN5c3RlbTogYWN0b3JTY29wZS5zeXN0ZW1cbiAgICB9O1xuICAgIGNvbnN0IGFjdGlvblBhcmFtcyA9IGlzSW5saW5lIHx8IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogJ3BhcmFtcycgaW4gYWN0aW9uID8gdHlwZW9mIGFjdGlvbi5wYXJhbXMgPT09ICdmdW5jdGlvbicgPyBhY3Rpb24ucGFyYW1zKHtcbiAgICAgIGNvbnRleHQ6IGludGVybWVkaWF0ZVNuYXBzaG90LmNvbnRleHQsXG4gICAgICBldmVudFxuICAgIH0pIDogYWN0aW9uLnBhcmFtcyA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIXJlc29sdmVkQWN0aW9uIHx8ICEoJ3Jlc29sdmUnIGluIHJlc29sdmVkQWN0aW9uKSkge1xuICAgICAgYWN0b3JTY29wZS5hY3Rpb25FeGVjdXRvcih7XG4gICAgICAgIHR5cGU6IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gYWN0aW9uIDogdHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcgPyBhY3Rpb24udHlwZSA6IGFjdGlvbi5uYW1lIHx8ICcoYW5vbnltb3VzKScsXG4gICAgICAgIGluZm86IGFjdGlvbkFyZ3MsXG4gICAgICAgIHBhcmFtczogYWN0aW9uUGFyYW1zLFxuICAgICAgICBleGVjOiByZXNvbHZlZEFjdGlvblxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgYnVpbHRpbkFjdGlvbiA9IHJlc29sdmVkQWN0aW9uO1xuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHBhcmFtcywgYWN0aW9uc10gPSBidWlsdGluQWN0aW9uLnJlc29sdmUoYWN0b3JTY29wZSwgaW50ZXJtZWRpYXRlU25hcHNob3QsIGFjdGlvbkFyZ3MsIGFjdGlvblBhcmFtcywgcmVzb2x2ZWRBY3Rpb24sXG4gICAgLy8gdGhpcyBob2xkcyBhbGwgcGFyYW1zXG4gICAgZXh0cmEpO1xuICAgIGludGVybWVkaWF0ZVNuYXBzaG90ID0gbmV4dFN0YXRlO1xuICAgIGlmICgncmV0cnlSZXNvbHZlJyBpbiBidWlsdGluQWN0aW9uKSB7XG4gICAgICByZXRyaWVzPy5wdXNoKFtidWlsdGluQWN0aW9uLCBwYXJhbXNdKTtcbiAgICB9XG4gICAgaWYgKCdleGVjdXRlJyBpbiBidWlsdGluQWN0aW9uKSB7XG4gICAgICBhY3RvclNjb3BlLmFjdGlvbkV4ZWN1dG9yKHtcbiAgICAgICAgdHlwZTogYnVpbHRpbkFjdGlvbi50eXBlLFxuICAgICAgICBpbmZvOiBhY3Rpb25BcmdzLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGV4ZWM6IGJ1aWx0aW5BY3Rpb24uZXhlY3V0ZS5iaW5kKG51bGwsIGFjdG9yU2NvcGUsIHBhcmFtcylcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9ucykge1xuICAgICAgaW50ZXJtZWRpYXRlU25hcHNob3QgPSByZXNvbHZlQW5kRXhlY3V0ZUFjdGlvbnNXaXRoQ29udGV4dChpbnRlcm1lZGlhdGVTbmFwc2hvdCwgZXZlbnQsIGFjdG9yU2NvcGUsIGFjdGlvbnMsIGV4dHJhLCByZXRyaWVzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGludGVybWVkaWF0ZVNuYXBzaG90O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUFjdGlvbnNBbmRDb250ZXh0KGN1cnJlbnRTbmFwc2hvdCwgZXZlbnQsIGFjdG9yU2NvcGUsIGFjdGlvbnMsIGludGVybmFsUXVldWUsIGRlZmVycmVkQWN0b3JJZHMpIHtcbiAgY29uc3QgcmV0cmllcyA9IGRlZmVycmVkQWN0b3JJZHMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgbmV4dFN0YXRlID0gcmVzb2x2ZUFuZEV4ZWN1dGVBY3Rpb25zV2l0aENvbnRleHQoY3VycmVudFNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgYWN0aW9ucywge1xuICAgIGludGVybmFsUXVldWUsXG4gICAgZGVmZXJyZWRBY3Rvcklkc1xuICB9LCByZXRyaWVzKTtcbiAgcmV0cmllcz8uZm9yRWFjaCgoW2J1aWx0aW5BY3Rpb24sIHBhcmFtc10pID0+IHtcbiAgICBidWlsdGluQWN0aW9uLnJldHJ5UmVzb2x2ZShhY3RvclNjb3BlLCBuZXh0U3RhdGUsIHBhcmFtcyk7XG4gIH0pO1xuICByZXR1cm4gbmV4dFN0YXRlO1xufVxuZnVuY3Rpb24gbWFjcm9zdGVwKHNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSwgaW50ZXJuYWxRdWV1ZSkge1xuICBpZiAoZXZlbnQudHlwZSA9PT0gV0lMRENBUkQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGV2ZW50IGNhbm5vdCBoYXZlIHRoZSB3aWxkY2FyZCB0eXBlICgnJHtXSUxEQ0FSRH0nKWApO1xuICB9XG4gIGxldCBuZXh0U25hcHNob3QgPSBzbmFwc2hvdDtcbiAgY29uc3QgbWljcm9zdGF0ZXMgPSBbXTtcbiAgZnVuY3Rpb24gYWRkTWljcm9zdGF0ZShtaWNyb3N0YXRlLCBldmVudCwgdHJhbnNpdGlvbnMpIHtcbiAgICBhY3RvclNjb3BlLnN5c3RlbS5fc2VuZEluc3BlY3Rpb25FdmVudCh7XG4gICAgICB0eXBlOiAnQHhzdGF0ZS5taWNyb3N0ZXAnLFxuICAgICAgYWN0b3JSZWY6IGFjdG9yU2NvcGUuc2VsZixcbiAgICAgIGV2ZW50LFxuICAgICAgc25hcHNob3Q6IG1pY3Jvc3RhdGUsXG4gICAgICBfdHJhbnNpdGlvbnM6IHRyYW5zaXRpb25zXG4gICAgfSk7XG4gICAgbWljcm9zdGF0ZXMucHVzaChtaWNyb3N0YXRlKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSBzdG9wIGV2ZW50XG4gIGlmIChldmVudC50eXBlID09PSBYU1RBVEVfU1RPUCkge1xuICAgIG5leHRTbmFwc2hvdCA9IGNsb25lTWFjaGluZVNuYXBzaG90KHN0b3BDaGlsZHJlbihuZXh0U25hcHNob3QsIGV2ZW50LCBhY3RvclNjb3BlKSwge1xuICAgICAgc3RhdHVzOiAnc3RvcHBlZCdcbiAgICB9KTtcbiAgICBhZGRNaWNyb3N0YXRlKG5leHRTbmFwc2hvdCwgZXZlbnQsIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgc25hcHNob3Q6IG5leHRTbmFwc2hvdCxcbiAgICAgIG1pY3Jvc3RhdGVzXG4gICAgfTtcbiAgfVxuICBsZXQgbmV4dEV2ZW50ID0gZXZlbnQ7XG5cbiAgLy8gQXNzdW1lIHRoZSBzdGF0ZSBpcyBhdCByZXN0IChubyByYWlzZWQgZXZlbnRzKVxuICAvLyBEZXRlcm1pbmUgdGhlIG5leHQgc3RhdGUgYmFzZWQgb24gdGhlIG5leHQgbWljcm9zdGVwXG4gIGlmIChuZXh0RXZlbnQudHlwZSAhPT0gWFNUQVRFX0lOSVQpIHtcbiAgICBjb25zdCBjdXJyZW50RXZlbnQgPSBuZXh0RXZlbnQ7XG4gICAgY29uc3QgaXNFcnIgPSBpc0Vycm9yQWN0b3JFdmVudChjdXJyZW50RXZlbnQpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25zID0gc2VsZWN0VHJhbnNpdGlvbnMoY3VycmVudEV2ZW50LCBuZXh0U25hcHNob3QpO1xuICAgIGlmIChpc0VyciAmJiAhdHJhbnNpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgbGlrZWx5IG9ubHkgYWxsb3cgdHJhbnNpdGlvbnMgc2VsZWN0ZWQgYnkgdmVyeSBleHBsaWNpdCBkZXNjcmlwdG9yc1xuICAgICAgLy8gYCpgIHNob3VsZG4ndCBiZSBtYXRjaGVkLCBsaWtlbHkgYHhzdGF0ZS5lcnJvci4qYCBzaG91bGRudCBiZSBlaXRoZXJcbiAgICAgIC8vIHNpbWlsYXJseSBgeHN0YXRlLmVycm9yLmFjdG9yLipgIGFuZCBgeHN0YXRlLmVycm9yLmFjdG9yLnRvZG8uKmAgaGF2ZSB0byBiZSBjb25zaWRlcmVkIHRvb1xuICAgICAgbmV4dFNuYXBzaG90ID0gY2xvbmVNYWNoaW5lU25hcHNob3Qoc25hcHNob3QsIHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBlcnJvcjogY3VycmVudEV2ZW50LmVycm9yXG4gICAgICB9KTtcbiAgICAgIGFkZE1pY3Jvc3RhdGUobmV4dFNuYXBzaG90LCBjdXJyZW50RXZlbnQsIFtdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNuYXBzaG90OiBuZXh0U25hcHNob3QsXG4gICAgICAgIG1pY3Jvc3RhdGVzXG4gICAgICB9O1xuICAgIH1cbiAgICBuZXh0U25hcHNob3QgPSBtaWNyb3N0ZXAodHJhbnNpdGlvbnMsIHNuYXBzaG90LCBhY3RvclNjb3BlLCBuZXh0RXZlbnQsIGZhbHNlLFxuICAgIC8vIGlzSW5pdGlhbFxuICAgIGludGVybmFsUXVldWUpO1xuICAgIGFkZE1pY3Jvc3RhdGUobmV4dFNuYXBzaG90LCBjdXJyZW50RXZlbnQsIHRyYW5zaXRpb25zKTtcbiAgfVxuICBsZXQgc2hvdWxkU2VsZWN0RXZlbnRsZXNzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICB3aGlsZSAobmV4dFNuYXBzaG90LnN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICBsZXQgZW5hYmxlZFRyYW5zaXRpb25zID0gc2hvdWxkU2VsZWN0RXZlbnRsZXNzVHJhbnNpdGlvbnMgPyBzZWxlY3RFdmVudGxlc3NUcmFuc2l0aW9ucyhuZXh0U25hcHNob3QsIG5leHRFdmVudCkgOiBbXTtcblxuICAgIC8vIGV2ZW50bGVzcyB0cmFuc2l0aW9ucyBzaG91bGQgYWx3YXlzIGJlIHNlbGVjdGVkIGFmdGVyIHNlbGVjdGluZyAqcmVndWxhciogdHJhbnNpdGlvbnNcbiAgICAvLyBieSBhc3NpZ25pbmcgYHVuZGVmaW5lZGAgdG8gYHByZXZpb3VzU3RhdGVgIHdlIGVuc3VyZSB0aGF0IGBzaG91bGRTZWxlY3RFdmVudGxlc3NUcmFuc2l0aW9uc2AgZ2V0cyBhbHdheXMgY29tcHV0ZWQgdG8gdHJ1ZSBpbiBzdWNoIGEgY2FzZVxuICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBlbmFibGVkVHJhbnNpdGlvbnMubGVuZ3RoID8gbmV4dFNuYXBzaG90IDogdW5kZWZpbmVkO1xuICAgIGlmICghZW5hYmxlZFRyYW5zaXRpb25zLmxlbmd0aCkge1xuICAgICAgaWYgKCFpbnRlcm5hbFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5leHRFdmVudCA9IGludGVybmFsUXVldWUuc2hpZnQoKTtcbiAgICAgIGVuYWJsZWRUcmFuc2l0aW9ucyA9IHNlbGVjdFRyYW5zaXRpb25zKG5leHRFdmVudCwgbmV4dFNuYXBzaG90KTtcbiAgICB9XG4gICAgbmV4dFNuYXBzaG90ID0gbWljcm9zdGVwKGVuYWJsZWRUcmFuc2l0aW9ucywgbmV4dFNuYXBzaG90LCBhY3RvclNjb3BlLCBuZXh0RXZlbnQsIGZhbHNlLCBpbnRlcm5hbFF1ZXVlKTtcbiAgICBzaG91bGRTZWxlY3RFdmVudGxlc3NUcmFuc2l0aW9ucyA9IG5leHRTbmFwc2hvdCAhPT0gcHJldmlvdXNTdGF0ZTtcbiAgICBhZGRNaWNyb3N0YXRlKG5leHRTbmFwc2hvdCwgbmV4dEV2ZW50LCBlbmFibGVkVHJhbnNpdGlvbnMpO1xuICB9XG4gIGlmIChuZXh0U25hcHNob3Quc3RhdHVzICE9PSAnYWN0aXZlJykge1xuICAgIHN0b3BDaGlsZHJlbihuZXh0U25hcHNob3QsIG5leHRFdmVudCwgYWN0b3JTY29wZSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzbmFwc2hvdDogbmV4dFNuYXBzaG90LFxuICAgIG1pY3Jvc3RhdGVzXG4gIH07XG59XG5mdW5jdGlvbiBzdG9wQ2hpbGRyZW4obmV4dFN0YXRlLCBldmVudCwgYWN0b3JTY29wZSkge1xuICByZXR1cm4gcmVzb2x2ZUFjdGlvbnNBbmRDb250ZXh0KG5leHRTdGF0ZSwgZXZlbnQsIGFjdG9yU2NvcGUsIE9iamVjdC52YWx1ZXMobmV4dFN0YXRlLmNoaWxkcmVuKS5tYXAoY2hpbGQgPT4gc3RvcENoaWxkKGNoaWxkKSksIFtdLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gc2VsZWN0VHJhbnNpdGlvbnMoZXZlbnQsIG5leHRTdGF0ZSkge1xuICByZXR1cm4gbmV4dFN0YXRlLm1hY2hpbmUuZ2V0VHJhbnNpdGlvbkRhdGEobmV4dFN0YXRlLCBldmVudCk7XG59XG5mdW5jdGlvbiBzZWxlY3RFdmVudGxlc3NUcmFuc2l0aW9ucyhuZXh0U3RhdGUsIGV2ZW50KSB7XG4gIGNvbnN0IGVuYWJsZWRUcmFuc2l0aW9uU2V0ID0gbmV3IFNldCgpO1xuICBjb25zdCBhdG9taWNTdGF0ZXMgPSBuZXh0U3RhdGUuX25vZGVzLmZpbHRlcihpc0F0b21pY1N0YXRlTm9kZSk7XG4gIGZvciAoY29uc3Qgc3RhdGVOb2RlIG9mIGF0b21pY1N0YXRlcykge1xuICAgIGxvb3A6IGZvciAoY29uc3QgcyBvZiBbc3RhdGVOb2RlXS5jb25jYXQoZ2V0UHJvcGVyQW5jZXN0b3JzKHN0YXRlTm9kZSwgdW5kZWZpbmVkKSkpIHtcbiAgICAgIGlmICghcy5hbHdheXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHRyYW5zaXRpb24gb2Ygcy5hbHdheXMpIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24uZ3VhcmQgPT09IHVuZGVmaW5lZCB8fCBldmFsdWF0ZUd1YXJkKHRyYW5zaXRpb24uZ3VhcmQsIG5leHRTdGF0ZS5jb250ZXh0LCBldmVudCwgbmV4dFN0YXRlKSkge1xuICAgICAgICAgIGVuYWJsZWRUcmFuc2l0aW9uU2V0LmFkZCh0cmFuc2l0aW9uKTtcbiAgICAgICAgICBicmVhayBsb29wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZW1vdmVDb25mbGljdGluZ1RyYW5zaXRpb25zKEFycmF5LmZyb20oZW5hYmxlZFRyYW5zaXRpb25TZXQpLCBuZXcgU2V0KG5leHRTdGF0ZS5fbm9kZXMpLCBuZXh0U3RhdGUuaGlzdG9yeVZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIHBhcnRpYWwgc3RhdGUgdmFsdWUgd2l0aCBpdHMgZnVsbCByZXByZXNlbnRhdGlvbiBpbiB0aGUgc3RhdGVcbiAqIG5vZGUncyBtYWNoaW5lLlxuICpcbiAqIEBwYXJhbSBzdGF0ZVZhbHVlIFRoZSBwYXJ0aWFsIHN0YXRlIHZhbHVlIHRvIHJlc29sdmUuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTdGF0ZVZhbHVlKHJvb3ROb2RlLCBzdGF0ZVZhbHVlKSB7XG4gIGNvbnN0IGFsbFN0YXRlTm9kZXMgPSBnZXRBbGxTdGF0ZU5vZGVzKGdldFN0YXRlTm9kZXMocm9vdE5vZGUsIHN0YXRlVmFsdWUpKTtcbiAgcmV0dXJuIGdldFN0YXRlVmFsdWUocm9vdE5vZGUsIFsuLi5hbGxTdGF0ZU5vZGVzXSk7XG59XG5cbmZ1bmN0aW9uIGlzTWFjaGluZVNuYXBzaG90KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ21hY2hpbmUnIGluIHZhbHVlICYmICd2YWx1ZScgaW4gdmFsdWU7XG59XG5jb25zdCBtYWNoaW5lU25hcHNob3RNYXRjaGVzID0gZnVuY3Rpb24gbWF0Y2hlcyh0ZXN0VmFsdWUpIHtcbiAgcmV0dXJuIG1hdGNoZXNTdGF0ZSh0ZXN0VmFsdWUsIHRoaXMudmFsdWUpO1xufTtcbmNvbnN0IG1hY2hpbmVTbmFwc2hvdEhhc1RhZyA9IGZ1bmN0aW9uIGhhc1RhZyh0YWcpIHtcbiAgcmV0dXJuIHRoaXMudGFncy5oYXModGFnKTtcbn07XG5jb25zdCBtYWNoaW5lU25hcHNob3RDYW4gPSBmdW5jdGlvbiBjYW4oZXZlbnQpIHtcbiAgaWYgKCF0aGlzLm1hY2hpbmUpIHtcbiAgICBjb25zb2xlLndhcm4oYHN0YXRlLmNhbiguLi4pIHVzZWQgb3V0c2lkZSBvZiBhIG1hY2hpbmUtY3JlYXRlZCBTdGF0ZSBvYmplY3Q7IHRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGZhbHNlLmApO1xuICB9XG4gIGNvbnN0IHRyYW5zaXRpb25EYXRhID0gdGhpcy5tYWNoaW5lLmdldFRyYW5zaXRpb25EYXRhKHRoaXMsIGV2ZW50KTtcbiAgcmV0dXJuICEhdHJhbnNpdGlvbkRhdGE/Lmxlbmd0aCAmJlxuICAvLyBDaGVjayB0aGF0IGF0IGxlYXN0IG9uZSB0cmFuc2l0aW9uIGlzIG5vdCBmb3JiaWRkZW5cbiAgdHJhbnNpdGlvbkRhdGEuc29tZSh0ID0+IHQudGFyZ2V0ICE9PSB1bmRlZmluZWQgfHwgdC5hY3Rpb25zLmxlbmd0aCk7XG59O1xuY29uc3QgbWFjaGluZVNuYXBzaG90VG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICBjb25zdCB7XG4gICAgX25vZGVzOiBub2RlcyxcbiAgICB0YWdzLFxuICAgIG1hY2hpbmUsXG4gICAgZ2V0TWV0YSxcbiAgICB0b0pTT04sXG4gICAgY2FuLFxuICAgIGhhc1RhZyxcbiAgICBtYXRjaGVzLFxuICAgIC4uLmpzb25WYWx1ZXNcbiAgfSA9IHRoaXM7XG4gIHJldHVybiB7XG4gICAgLi4uanNvblZhbHVlcyxcbiAgICB0YWdzOiBBcnJheS5mcm9tKHRhZ3MpXG4gIH07XG59O1xuY29uc3QgbWFjaGluZVNuYXBzaG90R2V0TWV0YSA9IGZ1bmN0aW9uIGdldE1ldGEoKSB7XG4gIHJldHVybiB0aGlzLl9ub2Rlcy5yZWR1Y2UoKGFjYywgc3RhdGVOb2RlKSA9PiB7XG4gICAgaWYgKHN0YXRlTm9kZS5tZXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjY1tzdGF0ZU5vZGUuaWRdID0gc3RhdGVOb2RlLm1ldGE7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVNYWNoaW5lU25hcHNob3QoY29uZmlnLCBtYWNoaW5lKSB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBjb25maWcuc3RhdHVzLFxuICAgIG91dHB1dDogY29uZmlnLm91dHB1dCxcbiAgICBlcnJvcjogY29uZmlnLmVycm9yLFxuICAgIG1hY2hpbmUsXG4gICAgY29udGV4dDogY29uZmlnLmNvbnRleHQsXG4gICAgX25vZGVzOiBjb25maWcuX25vZGVzLFxuICAgIHZhbHVlOiBnZXRTdGF0ZVZhbHVlKG1hY2hpbmUucm9vdCwgY29uZmlnLl9ub2RlcyksXG4gICAgdGFnczogbmV3IFNldChjb25maWcuX25vZGVzLmZsYXRNYXAoc24gPT4gc24udGFncykpLFxuICAgIGNoaWxkcmVuOiBjb25maWcuY2hpbGRyZW4sXG4gICAgaGlzdG9yeVZhbHVlOiBjb25maWcuaGlzdG9yeVZhbHVlIHx8IHt9LFxuICAgIG1hdGNoZXM6IG1hY2hpbmVTbmFwc2hvdE1hdGNoZXMsXG4gICAgaGFzVGFnOiBtYWNoaW5lU25hcHNob3RIYXNUYWcsXG4gICAgY2FuOiBtYWNoaW5lU25hcHNob3RDYW4sXG4gICAgZ2V0TWV0YTogbWFjaGluZVNuYXBzaG90R2V0TWV0YSxcbiAgICB0b0pTT046IG1hY2hpbmVTbmFwc2hvdFRvSlNPTlxuICB9O1xufVxuZnVuY3Rpb24gY2xvbmVNYWNoaW5lU25hcHNob3Qoc25hcHNob3QsIGNvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBjcmVhdGVNYWNoaW5lU25hcHNob3Qoe1xuICAgIC4uLnNuYXBzaG90LFxuICAgIC4uLmNvbmZpZ1xuICB9LCBzbmFwc2hvdC5tYWNoaW5lKTtcbn1cbmZ1bmN0aW9uIGdldFBlcnNpc3RlZFNuYXBzaG90KHNuYXBzaG90LCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBfbm9kZXM6IG5vZGVzLFxuICAgIHRhZ3MsXG4gICAgbWFjaGluZSxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0LFxuICAgIGNhbixcbiAgICBoYXNUYWcsXG4gICAgbWF0Y2hlcyxcbiAgICBnZXRNZXRhLFxuICAgIHRvSlNPTixcbiAgICAuLi5qc29uVmFsdWVzXG4gIH0gPSBzbmFwc2hvdDtcbiAgY29uc3QgY2hpbGRyZW5Kc29uID0ge307XG4gIGZvciAoY29uc3QgaWQgaW4gY2hpbGRyZW4pIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2lkXTtcbiAgICBpZiAodHlwZW9mIGNoaWxkLnNyYyAhPT0gJ3N0cmluZycgJiYgKCFvcHRpb25zIHx8ICEoJ19fdW5zYWZlQWxsb3dJbmxpbmVBY3RvcnMnIGluIG9wdGlvbnMpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiBpbmxpbmUgY2hpbGQgYWN0b3IgY2Fubm90IGJlIHBlcnNpc3RlZC4nKTtcbiAgICB9XG4gICAgY2hpbGRyZW5Kc29uW2lkXSA9IHtcbiAgICAgIHNuYXBzaG90OiBjaGlsZC5nZXRQZXJzaXN0ZWRTbmFwc2hvdChvcHRpb25zKSxcbiAgICAgIHNyYzogY2hpbGQuc3JjLFxuICAgICAgc3lzdGVtSWQ6IGNoaWxkLl9zeXN0ZW1JZCxcbiAgICAgIHN5bmNTbmFwc2hvdDogY2hpbGQuX3N5bmNTbmFwc2hvdFxuICAgIH07XG4gIH1cbiAgY29uc3QgcGVyc2lzdGVkID0ge1xuICAgIC4uLmpzb25WYWx1ZXMsXG4gICAgY29udGV4dDogcGVyc2lzdENvbnRleHQoY29udGV4dCksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuSnNvblxuICB9O1xuICByZXR1cm4gcGVyc2lzdGVkO1xufVxuZnVuY3Rpb24gcGVyc2lzdENvbnRleHQoY29udGV4dFBhcnQpIHtcbiAgbGV0IGNvcHk7XG4gIGZvciAoY29uc3Qga2V5IGluIGNvbnRleHRQYXJ0KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZXh0UGFydFtrZXldO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ3Nlc3Npb25JZCcgaW4gdmFsdWUgJiYgJ3NlbmQnIGluIHZhbHVlICYmICdyZWYnIGluIHZhbHVlKSB7XG4gICAgICAgIGNvcHkgPz89IEFycmF5LmlzQXJyYXkoY29udGV4dFBhcnQpID8gY29udGV4dFBhcnQuc2xpY2UoKSA6IHtcbiAgICAgICAgICAuLi5jb250ZXh0UGFydFxuICAgICAgICB9O1xuICAgICAgICBjb3B5W2tleV0gPSB7XG4gICAgICAgICAgeHN0YXRlJCR0eXBlOiAkJEFDVE9SX1RZUEUsXG4gICAgICAgICAgaWQ6IHZhbHVlLmlkXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBwZXJzaXN0Q29udGV4dCh2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY29weSA/Pz0gQXJyYXkuaXNBcnJheShjb250ZXh0UGFydCkgPyBjb250ZXh0UGFydC5zbGljZSgpIDoge1xuICAgICAgICAgICAgLi4uY29udGV4dFBhcnRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvcHlba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weSA/PyBjb250ZXh0UGFydDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJhaXNlKF8sIHNuYXBzaG90LCBhcmdzLCBhY3Rpb25QYXJhbXMsIHtcbiAgZXZlbnQ6IGV2ZW50T3JFeHByLFxuICBpZCxcbiAgZGVsYXlcbn0sIHtcbiAgaW50ZXJuYWxRdWV1ZVxufSkge1xuICBjb25zdCBkZWxheXNNYXAgPSBzbmFwc2hvdC5tYWNoaW5lLmltcGxlbWVudGF0aW9ucy5kZWxheXM7XG4gIGlmICh0eXBlb2YgZXZlbnRPckV4cHIgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcbiAgICBgT25seSBldmVudCBvYmplY3RzIG1heSBiZSB1c2VkIHdpdGggcmFpc2U7IHVzZSByYWlzZSh7IHR5cGU6IFwiJHtldmVudE9yRXhwcn1cIiB9KSBpbnN0ZWFkYCk7XG4gIH1cbiAgY29uc3QgcmVzb2x2ZWRFdmVudCA9IHR5cGVvZiBldmVudE9yRXhwciA9PT0gJ2Z1bmN0aW9uJyA/IGV2ZW50T3JFeHByKGFyZ3MsIGFjdGlvblBhcmFtcykgOiBldmVudE9yRXhwcjtcbiAgbGV0IHJlc29sdmVkRGVsYXk7XG4gIGlmICh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY29uZmlnRGVsYXkgPSBkZWxheXNNYXAgJiYgZGVsYXlzTWFwW2RlbGF5XTtcbiAgICByZXNvbHZlZERlbGF5ID0gdHlwZW9mIGNvbmZpZ0RlbGF5ID09PSAnZnVuY3Rpb24nID8gY29uZmlnRGVsYXkoYXJncywgYWN0aW9uUGFyYW1zKSA6IGNvbmZpZ0RlbGF5O1xuICB9IGVsc2Uge1xuICAgIHJlc29sdmVkRGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdmdW5jdGlvbicgPyBkZWxheShhcmdzLCBhY3Rpb25QYXJhbXMpIDogZGVsYXk7XG4gIH1cbiAgaWYgKHR5cGVvZiByZXNvbHZlZERlbGF5ICE9PSAnbnVtYmVyJykge1xuICAgIGludGVybmFsUXVldWUucHVzaChyZXNvbHZlZEV2ZW50KTtcbiAgfVxuICByZXR1cm4gW3NuYXBzaG90LCB7XG4gICAgZXZlbnQ6IHJlc29sdmVkRXZlbnQsXG4gICAgaWQsXG4gICAgZGVsYXk6IHJlc29sdmVkRGVsYXlcbiAgfSwgdW5kZWZpbmVkXTtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVSYWlzZShhY3RvclNjb3BlLCBwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIGV2ZW50LFxuICAgIGRlbGF5LFxuICAgIGlkXG4gIH0gPSBwYXJhbXM7XG4gIGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgYWN0b3JTY29wZS5kZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBzZWxmID0gYWN0b3JTY29wZS5zZWxmO1xuICAgICAgYWN0b3JTY29wZS5zeXN0ZW0uc2NoZWR1bGVyLnNjaGVkdWxlKHNlbGYsIHNlbGYsIGV2ZW50LCBkZWxheSwgaWQpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxufVxuLyoqXG4gKiBSYWlzZXMgYW4gZXZlbnQuIFRoaXMgcGxhY2VzIHRoZSBldmVudCBpbiB0aGUgaW50ZXJuYWwgZXZlbnQgcXVldWUsIHNvIHRoYXRcbiAqIHRoZSBldmVudCBpcyBpbW1lZGlhdGVseSBjb25zdW1lZCBieSB0aGUgbWFjaGluZSBpbiB0aGUgY3VycmVudCBzdGVwLlxuICpcbiAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHRvIHJhaXNlLlxuICovXG5mdW5jdGlvbiByYWlzZShldmVudE9yRXhwciwgb3B0aW9ucykge1xuICBpZiAoZXhlY3V0aW5nQ3VzdG9tQWN0aW9uKSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gYWN0aW9ucyBzaG91bGQgbm90IGNhbGwgYHJhaXNlKClgIGRpcmVjdGx5LCBhcyBpdCBpcyBub3QgaW1wZXJhdGl2ZS4gU2VlIGh0dHBzOi8vc3RhdGVseS5haS9kb2NzL2FjdGlvbnMjYnVpbHQtaW4tYWN0aW9ucyBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICB9XG4gIGZ1bmN0aW9uIHJhaXNlKF9hcmdzLCBfcGFyYW1zKSB7XG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIGlzbid0IHN1cHBvc2VkIHRvIGJlIGNhbGxlZGApO1xuICAgIH1cbiAgfVxuICByYWlzZS50eXBlID0gJ3hzdGF0ZS5yYWlzZSc7XG4gIHJhaXNlLmV2ZW50ID0gZXZlbnRPckV4cHI7XG4gIHJhaXNlLmlkID0gb3B0aW9ucz8uaWQ7XG4gIHJhaXNlLmRlbGF5ID0gb3B0aW9ucz8uZGVsYXk7XG4gIHJhaXNlLnJlc29sdmUgPSByZXNvbHZlUmFpc2U7XG4gIHJhaXNlLmV4ZWN1dGUgPSBleGVjdXRlUmFpc2U7XG4gIHJldHVybiByYWlzZTtcbn1cblxuZXhwb3J0IHsgJCRBQ1RPUl9UWVBFIGFzICQsIGNyZWF0ZUFjdG9yIGFzIEEsIEFjdG9yIGFzIEIsIGludGVycHJldCBhcyBDLCBhbmQgYXMgRCwgbm90IGFzIEUsIG9yIGFzIEYsIHN0YXRlSW4gYXMgRywgaXNNYWNoaW5lU25hcHNob3QgYXMgSCwgZ2V0QWxsT3duRXZlbnREZXNjcmlwdG9ycyBhcyBJLCBtYXRjaGVzU3RhdGUgYXMgSiwgcGF0aFRvU3RhdGVWYWx1ZSBhcyBLLCB0b09ic2VydmVyIGFzIEwsIGNhbmNlbCBhcyBNLCBOVUxMX0VWRU5UIGFzIE4sIHJhaXNlIGFzIE8sIHNwYXduQ2hpbGQgYXMgUCwgc3RvcCBhcyBRLCBzdG9wQ2hpbGQgYXMgUiwgU1RBVEVfREVMSU1JVEVSIGFzIFMsIFByb2Nlc3NpbmdTdGF0dXMgYXMgVCwgY2xvbmVNYWNoaW5lU25hcHNob3QgYXMgVSwgZXhlY3V0aW5nQ3VzdG9tQWN0aW9uIGFzIFYsIFhTVEFURV9FUlJPUiBhcyBXLCBYU1RBVEVfU1RPUCBhcyBYLCBjcmVhdGVFcnJvckFjdG9yRXZlbnQgYXMgWSwgdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkgYXMgYSwgZm9ybWF0VHJhbnNpdGlvbiBhcyBiLCBjcmVhdGVJbnZva2VJZCBhcyBjLCBmb3JtYXRJbml0aWFsVHJhbnNpdGlvbiBhcyBkLCBldmFsdWF0ZUd1YXJkIGFzIGUsIGZvcm1hdFRyYW5zaXRpb25zIGFzIGYsIGdldERlbGF5ZWRUcmFuc2l0aW9ucyBhcyBnLCBnZXRDYW5kaWRhdGVzIGFzIGgsIGdldEFsbFN0YXRlTm9kZXMgYXMgaSwgZ2V0U3RhdGVOb2RlcyBhcyBqLCBjcmVhdGVNYWNoaW5lU25hcHNob3QgYXMgaywgaXNJbkZpbmFsU3RhdGUgYXMgbCwgbWFwVmFsdWVzIGFzIG0sIG1hY3Jvc3RlcCBhcyBuLCB0cmFuc2l0aW9uTm9kZSBhcyBvLCByZXNvbHZlQWN0aW9uc0FuZENvbnRleHQgYXMgcCwgY3JlYXRlSW5pdEV2ZW50IGFzIHEsIHJlc29sdmVTdGF0ZVZhbHVlIGFzIHIsIG1pY3Jvc3RlcCBhcyBzLCB0b0FycmF5IGFzIHQsIGdldEluaXRpYWxTdGF0ZU5vZGVzIGFzIHUsIHRvU3RhdGVQYXRoIGFzIHYsIGlzU3RhdGVJZCBhcyB3LCBnZXRTdGF0ZU5vZGVCeVBhdGggYXMgeCwgZ2V0UGVyc2lzdGVkU25hcHNob3QgYXMgeSwgcmVzb2x2ZVJlZmVyZW5jZWRBY3RvciBhcyB6IH07XG4iLCJleHBvcnQgeyBjcmVhdGVFbXB0eUFjdG9yLCBmcm9tQ2FsbGJhY2ssIGZyb21FdmVudE9ic2VydmFibGUsIGZyb21PYnNlcnZhYmxlLCBmcm9tUHJvbWlzZSwgZnJvbVRyYW5zaXRpb24gfSBmcm9tICcuLi9hY3RvcnMvZGlzdC94c3RhdGUtYWN0b3JzLmRldmVsb3BtZW50LmVzbS5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJyYXksIFMgYXMgU1RBVEVfREVMSU1JVEVSLCBtIGFzIG1hcFZhbHVlcywgZiBhcyBmb3JtYXRUcmFuc2l0aW9ucywgYSBhcyB0b1RyYW5zaXRpb25Db25maWdBcnJheSwgYiBhcyBmb3JtYXRUcmFuc2l0aW9uLCBOIGFzIE5VTExfRVZFTlQsIGUgYXMgZXZhbHVhdGVHdWFyZCwgYyBhcyBjcmVhdGVJbnZva2VJZCwgZyBhcyBnZXREZWxheWVkVHJhbnNpdGlvbnMsIGQgYXMgZm9ybWF0SW5pdGlhbFRyYW5zaXRpb24sIGggYXMgZ2V0Q2FuZGlkYXRlcywgciBhcyByZXNvbHZlU3RhdGVWYWx1ZSwgaSBhcyBnZXRBbGxTdGF0ZU5vZGVzLCBqIGFzIGdldFN0YXRlTm9kZXMsIGsgYXMgY3JlYXRlTWFjaGluZVNuYXBzaG90LCBsIGFzIGlzSW5GaW5hbFN0YXRlLCBuIGFzIG1hY3Jvc3RlcCwgbyBhcyB0cmFuc2l0aW9uTm9kZSwgcCBhcyByZXNvbHZlQWN0aW9uc0FuZENvbnRleHQsIHEgYXMgY3JlYXRlSW5pdEV2ZW50LCBzIGFzIG1pY3Jvc3RlcCwgdSBhcyBnZXRJbml0aWFsU3RhdGVOb2RlcywgdiBhcyB0b1N0YXRlUGF0aCwgdyBhcyBpc1N0YXRlSWQsIHggYXMgZ2V0U3RhdGVOb2RlQnlQYXRoLCB5IGFzIGdldFBlcnNpc3RlZFNuYXBzaG90LCB6IGFzIHJlc29sdmVSZWZlcmVuY2VkQWN0b3IsIEEgYXMgY3JlYXRlQWN0b3IsICQgYXMgJCRBQ1RPUl9UWVBFIH0gZnJvbSAnLi9yYWlzZS0xZGIyN2E4Mi5kZXZlbG9wbWVudC5lc20uanMnO1xuZXhwb3J0IHsgQiBhcyBBY3RvciwgSSBhcyBfX3Vuc2FmZV9nZXRBbGxPd25FdmVudERlc2NyaXB0b3JzLCBEIGFzIGFuZCwgTSBhcyBjYW5jZWwsIEEgYXMgY3JlYXRlQWN0b3IsIGogYXMgZ2V0U3RhdGVOb2RlcywgQyBhcyBpbnRlcnByZXQsIEggYXMgaXNNYWNoaW5lU25hcHNob3QsIEogYXMgbWF0Y2hlc1N0YXRlLCBFIGFzIG5vdCwgRiBhcyBvciwgSyBhcyBwYXRoVG9TdGF0ZVZhbHVlLCBPIGFzIHJhaXNlLCBQIGFzIHNwYXduQ2hpbGQsIEcgYXMgc3RhdGVJbiwgUSBhcyBzdG9wLCBSIGFzIHN0b3BDaGlsZCwgTCBhcyB0b09ic2VydmVyIH0gZnJvbSAnLi9yYWlzZS0xZGIyN2E4Mi5kZXZlbG9wbWVudC5lc20uanMnO1xuaW1wb3J0IHsgYSBhcyBhc3NpZ24gfSBmcm9tICcuL2xvZy1lZjMwYzY1Zi5kZXZlbG9wbWVudC5lc20uanMnO1xuZXhwb3J0IHsgUyBhcyBTcGVjaWFsVGFyZ2V0cywgYSBhcyBhc3NpZ24sIGUgYXMgZW1pdCwgYiBhcyBlbnF1ZXVlQWN0aW9ucywgZiBhcyBmb3J3YXJkVG8sIGwgYXMgbG9nLCBzIGFzIHNlbmRQYXJlbnQsIGMgYXMgc2VuZFRvIH0gZnJvbSAnLi9sb2ctZWYzMGM2NWYuZGV2ZWxvcG1lbnQuZXNtLmpzJztcbmltcG9ydCAnLi4vZGV2L2Rpc3QveHN0YXRlLWRldi5kZXZlbG9wbWVudC5lc20uanMnO1xuXG4vKipcbiAqIEFzc2VydHMgdGhhdCB0aGUgZ2l2ZW4gZXZlbnQgb2JqZWN0IGlzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBvciB0eXBlcy4gVGhyb3dzXG4gKiBhbiBlcnJvciBpZiB0aGUgZXZlbnQgb2JqZWN0IGlzIG5vdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIC8vIC4uLlxuICogZW50cnk6ICh7IGV2ZW50IH0pID0+IHtcbiAqICAgYXNzZXJ0RXZlbnQoZXZlbnQsICdkb05vdGhpbmcnKTtcbiAqICAgLy8gZXZlbnQgaXMgeyB0eXBlOiAnZG9Ob3RoaW5nJyB9XG4gKiB9LFxuICogLy8gLi4uXG4gKiBleGl0OiAoeyBldmVudCB9KSA9PiB7XG4gKiAgIGFzc2VydEV2ZW50KGV2ZW50LCAnZ3JlZXQnKTtcbiAqICAgLy8gZXZlbnQgaXMgeyB0eXBlOiAnZ3JlZXQnOyBtZXNzYWdlOiBzdHJpbmcgfVxuICpcbiAqICAgYXNzZXJ0RXZlbnQoZXZlbnQsIFsnZ3JlZXQnLCAnbm90aWZ5J10pO1xuICogICAvLyBldmVudCBpcyB7IHR5cGU6ICdncmVldCc7IG1lc3NhZ2U6IHN0cmluZyB9XG4gKiAgIC8vIG9yIHsgdHlwZTogJ25vdGlmeSc7IG1lc3NhZ2U6IHN0cmluZzsgbGV2ZWw6ICdpbmZvJyB8ICdlcnJvcicgfVxuICogfSxcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBhc3NlcnRFdmVudChldmVudCwgdHlwZSkge1xuICBjb25zdCB0eXBlcyA9IHRvQXJyYXkodHlwZSk7XG4gIGlmICghdHlwZXMuaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcbiAgICBjb25zdCB0eXBlc1RleHQgPSB0eXBlcy5sZW5ndGggPT09IDEgPyBgdHlwZSBcIiR7dHlwZXNbMF19XCJgIDogYG9uZSBvZiB0eXBlcyBcIiR7dHlwZXMuam9pbignXCIsIFwiJyl9XCJgO1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZXZlbnQgJHtKU09OLnN0cmluZ2lmeShldmVudCl9IHRvIGhhdmUgJHt0eXBlc1RleHR9YCk7XG4gIH1cbn1cblxuY29uc3QgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gbWVtbyhvYmplY3QsIGtleSwgZm4pIHtcbiAgbGV0IG1lbW9pemVkRGF0YSA9IGNhY2hlLmdldChvYmplY3QpO1xuICBpZiAoIW1lbW9pemVkRGF0YSkge1xuICAgIG1lbW9pemVkRGF0YSA9IHtcbiAgICAgIFtrZXldOiBmbigpXG4gICAgfTtcbiAgICBjYWNoZS5zZXQob2JqZWN0LCBtZW1vaXplZERhdGEpO1xuICB9IGVsc2UgaWYgKCEoa2V5IGluIG1lbW9pemVkRGF0YSkpIHtcbiAgICBtZW1vaXplZERhdGFba2V5XSA9IGZuKCk7XG4gIH1cbiAgcmV0dXJuIG1lbW9pemVkRGF0YVtrZXldO1xufVxuXG5jb25zdCBFTVBUWV9PQkpFQ1QgPSB7fTtcbmNvbnN0IHRvU2VyaWFsaXphYmxlQWN0aW9uID0gYWN0aW9uID0+IHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvblxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoJ3Jlc29sdmUnIGluIGFjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uLnR5cGVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb24ubmFtZVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGFjdGlvbjtcbn07XG5jbGFzcyBTdGF0ZU5vZGUge1xuICBjb25zdHJ1Y3RvcigvKiogVGhlIHJhdyBjb25maWcgdXNlZCB0byBjcmVhdGUgdGhlIG1hY2hpbmUuICovXG4gIGNvbmZpZywgb3B0aW9ucykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIC8qKlxuICAgICAqIFRoZSByZWxhdGl2ZSBrZXkgb2YgdGhlIHN0YXRlIG5vZGUsIHdoaWNoIHJlcHJlc2VudHMgaXRzIGxvY2F0aW9uIGluIHRoZVxuICAgICAqIG92ZXJhbGwgc3RhdGUgdmFsdWUuXG4gICAgICovXG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgLyoqIFRoZSB1bmlxdWUgSUQgb2YgdGhlIHN0YXRlIG5vZGUuICovXG4gICAgdGhpcy5pZCA9IHZvaWQgMDtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGlzIHN0YXRlIG5vZGU6XG4gICAgICpcbiAgICAgKiAtIGAnYXRvbWljJ2AgLSBubyBjaGlsZCBzdGF0ZSBub2Rlc1xuICAgICAqIC0gYCdjb21wb3VuZCdgIC0gbmVzdGVkIGNoaWxkIHN0YXRlIG5vZGVzIChYT1IpXG4gICAgICogLSBgJ3BhcmFsbGVsJ2AgLSBvcnRob2dvbmFsIG5lc3RlZCBjaGlsZCBzdGF0ZSBub2RlcyAoQU5EKVxuICAgICAqIC0gYCdoaXN0b3J5J2AgLSBoaXN0b3J5IHN0YXRlIG5vZGVcbiAgICAgKiAtIGAnZmluYWwnYCAtIGZpbmFsIHN0YXRlIG5vZGVcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB2b2lkIDA7XG4gICAgLyoqIFRoZSBzdHJpbmcgcGF0aCBmcm9tIHRoZSByb290IG1hY2hpbmUgbm9kZSB0byB0aGlzIG5vZGUuICovXG4gICAgdGhpcy5wYXRoID0gdm9pZCAwO1xuICAgIC8qKiBUaGUgY2hpbGQgc3RhdGUgbm9kZXMuICovXG4gICAgdGhpcy5zdGF0ZXMgPSB2b2lkIDA7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgaGlzdG9yeSBvbiB0aGlzIHN0YXRlIG5vZGUuIENhbiBiZTpcbiAgICAgKlxuICAgICAqIC0gYCdzaGFsbG93J2AgLSByZWNhbGxzIG9ubHkgdG9wLWxldmVsIGhpc3RvcmljYWwgc3RhdGUgdmFsdWVcbiAgICAgKiAtIGAnZGVlcCdgIC0gcmVjYWxscyBoaXN0b3JpY2FsIHN0YXRlIHZhbHVlIGF0IGFsbCBsZXZlbHNcbiAgICAgKi9cbiAgICB0aGlzLmhpc3RvcnkgPSB2b2lkIDA7XG4gICAgLyoqIFRoZSBhY3Rpb24ocykgdG8gYmUgZXhlY3V0ZWQgdXBvbiBlbnRlcmluZyB0aGUgc3RhdGUgbm9kZS4gKi9cbiAgICB0aGlzLmVudHJ5ID0gdm9pZCAwO1xuICAgIC8qKiBUaGUgYWN0aW9uKHMpIHRvIGJlIGV4ZWN1dGVkIHVwb24gZXhpdGluZyB0aGUgc3RhdGUgbm9kZS4gKi9cbiAgICB0aGlzLmV4aXQgPSB2b2lkIDA7XG4gICAgLyoqIFRoZSBwYXJlbnQgc3RhdGUgbm9kZS4gKi9cbiAgICB0aGlzLnBhcmVudCA9IHZvaWQgMDtcbiAgICAvKiogVGhlIHJvb3QgbWFjaGluZSBub2RlLiAqL1xuICAgIHRoaXMubWFjaGluZSA9IHZvaWQgMDtcbiAgICAvKipcbiAgICAgKiBUaGUgbWV0YSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0YXRlIG5vZGUsIHdoaWNoIHdpbGwgYmUgcmV0dXJuZWQgaW5cbiAgICAgKiBTdGF0ZSBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgdGhpcy5tZXRhID0gdm9pZCAwO1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgZGF0YSBzZW50IHdpdGggdGhlIFwieHN0YXRlLmRvbmUuc3RhdGUuX2lkX1wiIGV2ZW50IGlmIHRoaXMgaXMgYVxuICAgICAqIGZpbmFsIHN0YXRlIG5vZGUuXG4gICAgICovXG4gICAgdGhpcy5vdXRwdXQgPSB2b2lkIDA7XG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyIHRoaXMgc3RhdGUgbm9kZSBhcHBlYXJzLiBDb3JyZXNwb25kcyB0byB0aGUgaW1wbGljaXQgZG9jdW1lbnRcbiAgICAgKiBvcmRlci5cbiAgICAgKi9cbiAgICB0aGlzLm9yZGVyID0gLTE7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuYWx3YXlzID0gdm9pZCAwO1xuICAgIHRoaXMucGFyZW50ID0gb3B0aW9ucy5fcGFyZW50O1xuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5fa2V5O1xuICAgIHRoaXMubWFjaGluZSA9IG9wdGlvbnMuX21hY2hpbmU7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5wYXRoLmNvbmNhdCh0aGlzLmtleSkgOiBbXTtcbiAgICB0aGlzLmlkID0gdGhpcy5jb25maWcuaWQgfHwgW3RoaXMubWFjaGluZS5pZCwgLi4udGhpcy5wYXRoXS5qb2luKFNUQVRFX0RFTElNSVRFUik7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZSB8fCAodGhpcy5jb25maWcuc3RhdGVzICYmIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLnN0YXRlcykubGVuZ3RoID8gJ2NvbXBvdW5kJyA6IHRoaXMuY29uZmlnLmhpc3RvcnkgPyAnaGlzdG9yeScgOiAnYXRvbWljJyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMub3JkZXIgPSB0aGlzLm1hY2hpbmUuaWRNYXAuc2l6ZTtcbiAgICB0aGlzLm1hY2hpbmUuaWRNYXAuc2V0KHRoaXMuaWQsIHRoaXMpO1xuICAgIHRoaXMuc3RhdGVzID0gdGhpcy5jb25maWcuc3RhdGVzID8gbWFwVmFsdWVzKHRoaXMuY29uZmlnLnN0YXRlcywgKHN0YXRlQ29uZmlnLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlTm9kZSA9IG5ldyBTdGF0ZU5vZGUoc3RhdGVDb25maWcsIHtcbiAgICAgICAgX3BhcmVudDogdGhpcyxcbiAgICAgICAgX2tleToga2V5LFxuICAgICAgICBfbWFjaGluZTogdGhpcy5tYWNoaW5lXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdGF0ZU5vZGU7XG4gICAgfSkgOiBFTVBUWV9PQkpFQ1Q7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbXBvdW5kJyAmJiAhdGhpcy5jb25maWcuaW5pdGlhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBpbml0aWFsIHN0YXRlIHNwZWNpZmllZCBmb3IgY29tcG91bmQgc3RhdGUgbm9kZSBcIiMke3RoaXMuaWR9XCIuIFRyeSBhZGRpbmcgeyBpbml0aWFsOiBcIiR7T2JqZWN0LmtleXModGhpcy5zdGF0ZXMpWzBdfVwiIH0gdG8gdGhlIHN0YXRlIGNvbmZpZy5gKTtcbiAgICB9XG5cbiAgICAvLyBIaXN0b3J5IGNvbmZpZ1xuICAgIHRoaXMuaGlzdG9yeSA9IHRoaXMuY29uZmlnLmhpc3RvcnkgPT09IHRydWUgPyAnc2hhbGxvdycgOiB0aGlzLmNvbmZpZy5oaXN0b3J5IHx8IGZhbHNlO1xuICAgIHRoaXMuZW50cnkgPSB0b0FycmF5KHRoaXMuY29uZmlnLmVudHJ5KS5zbGljZSgpO1xuICAgIHRoaXMuZXhpdCA9IHRvQXJyYXkodGhpcy5jb25maWcuZXhpdCkuc2xpY2UoKTtcbiAgICB0aGlzLm1ldGEgPSB0aGlzLmNvbmZpZy5tZXRhO1xuICAgIHRoaXMub3V0cHV0ID0gdGhpcy50eXBlID09PSAnZmluYWwnIHx8ICF0aGlzLnBhcmVudCA/IHRoaXMuY29uZmlnLm91dHB1dCA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhZ3MgPSB0b0FycmF5KGNvbmZpZy50YWdzKS5zbGljZSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gZm9ybWF0VHJhbnNpdGlvbnModGhpcyk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFsd2F5cykge1xuICAgICAgdGhpcy5hbHdheXMgPSB0b1RyYW5zaXRpb25Db25maWdBcnJheSh0aGlzLmNvbmZpZy5hbHdheXMpLm1hcCh0ID0+IGZvcm1hdFRyYW5zaXRpb24odGhpcywgTlVMTF9FVkVOVCwgdCkpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZXNba2V5XS5faW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFRoZSB3ZWxsLXN0cnVjdHVyZWQgc3RhdGUgbm9kZSBkZWZpbml0aW9uLiAqL1xuICBnZXQgZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5tYWNoaW5lLnZlcnNpb24sXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpbml0aWFsOiB0aGlzLmluaXRpYWwgPyB7XG4gICAgICAgIHRhcmdldDogdGhpcy5pbml0aWFsLnRhcmdldCxcbiAgICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgICBhY3Rpb25zOiB0aGlzLmluaXRpYWwuYWN0aW9ucy5tYXAodG9TZXJpYWxpemFibGVBY3Rpb24pLFxuICAgICAgICBldmVudFR5cGU6IG51bGwsXG4gICAgICAgIHJlZW50ZXI6IGZhbHNlLFxuICAgICAgICB0b0pTT046ICgpID0+ICh7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmluaXRpYWwudGFyZ2V0Lm1hcCh0ID0+IGAjJHt0LmlkfWApLFxuICAgICAgICAgIHNvdXJjZTogYCMke3RoaXMuaWR9YCxcbiAgICAgICAgICBhY3Rpb25zOiB0aGlzLmluaXRpYWwuYWN0aW9ucy5tYXAodG9TZXJpYWxpemFibGVBY3Rpb24pLFxuICAgICAgICAgIGV2ZW50VHlwZTogbnVsbFxuICAgICAgICB9KVxuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIHN0YXRlczogbWFwVmFsdWVzKHRoaXMuc3RhdGVzLCBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5kZWZpbml0aW9uO1xuICAgICAgfSksXG4gICAgICBvbjogdGhpcy5vbixcbiAgICAgIHRyYW5zaXRpb25zOiBbLi4udGhpcy50cmFuc2l0aW9ucy52YWx1ZXMoKV0uZmxhdCgpLm1hcCh0ID0+ICh7XG4gICAgICAgIC4uLnQsXG4gICAgICAgIGFjdGlvbnM6IHQuYWN0aW9ucy5tYXAodG9TZXJpYWxpemFibGVBY3Rpb24pXG4gICAgICB9KSksXG4gICAgICBlbnRyeTogdGhpcy5lbnRyeS5tYXAodG9TZXJpYWxpemFibGVBY3Rpb24pLFxuICAgICAgZXhpdDogdGhpcy5leGl0Lm1hcCh0b1NlcmlhbGl6YWJsZUFjdGlvbiksXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgICBvcmRlcjogdGhpcy5vcmRlciB8fCAtMSxcbiAgICAgIG91dHB1dDogdGhpcy5vdXRwdXQsXG4gICAgICBpbnZva2U6IHRoaXMuaW52b2tlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0YWdzOiB0aGlzLnRhZ3NcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8qKiBUaGUgbG9naWMgaW52b2tlZCBhcyBhY3RvcnMgYnkgdGhpcyBzdGF0ZSBub2RlLiAqL1xuICBnZXQgaW52b2tlKCkge1xuICAgIHJldHVybiBtZW1vKHRoaXMsICdpbnZva2UnLCAoKSA9PiB0b0FycmF5KHRoaXMuY29uZmlnLmludm9rZSkubWFwKChpbnZva2VDb25maWcsIGkpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3JjLFxuICAgICAgICBzeXN0ZW1JZFxuICAgICAgfSA9IGludm9rZUNvbmZpZztcbiAgICAgIGNvbnN0IHJlc29sdmVkSWQgPSBpbnZva2VDb25maWcuaWQgPz8gY3JlYXRlSW52b2tlSWQodGhpcy5pZCwgaSk7XG4gICAgICBjb25zdCBzb3VyY2VOYW1lID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBgeHN0YXRlLmludm9rZS4ke2NyZWF0ZUludm9rZUlkKHRoaXMuaWQsIGkpfWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnZva2VDb25maWcsXG4gICAgICAgIHNyYzogc291cmNlTmFtZSxcbiAgICAgICAgaWQ6IHJlc29sdmVkSWQsXG4gICAgICAgIHN5c3RlbUlkOiBzeXN0ZW1JZCxcbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG9uRG9uZSxcbiAgICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgICAgICAuLi5pbnZva2VEZWZWYWx1ZXNcbiAgICAgICAgICB9ID0gaW52b2tlQ29uZmlnO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pbnZva2VEZWZWYWx1ZXMsXG4gICAgICAgICAgICB0eXBlOiAneHN0YXRlLmludm9rZScsXG4gICAgICAgICAgICBzcmM6IHNvdXJjZU5hbWUsXG4gICAgICAgICAgICBpZDogcmVzb2x2ZWRJZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqIFRoZSBtYXBwaW5nIG9mIGV2ZW50cyB0byB0cmFuc2l0aW9ucy4gKi9cbiAgZ2V0IG9uKCkge1xuICAgIHJldHVybiBtZW1vKHRoaXMsICdvbicsICgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcbiAgICAgIHJldHVybiBbLi4udHJhbnNpdGlvbnNdLmZsYXRNYXAoKFtkZXNjcmlwdG9yLCB0XSkgPT4gdC5tYXAodCA9PiBbZGVzY3JpcHRvciwgdF0pKS5yZWR1Y2UoKG1hcCwgW2Rlc2NyaXB0b3IsIHRyYW5zaXRpb25dKSA9PiB7XG4gICAgICAgIG1hcFtkZXNjcmlwdG9yXSA9IG1hcFtkZXNjcmlwdG9yXSB8fCBbXTtcbiAgICAgICAgbWFwW2Rlc2NyaXB0b3JdLnB1c2godHJhbnNpdGlvbik7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9LCB7fSk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGFmdGVyKCkge1xuICAgIHJldHVybiBtZW1vKHRoaXMsICdkZWxheWVkVHJhbnNpdGlvbnMnLCAoKSA9PiBnZXREZWxheWVkVHJhbnNpdGlvbnModGhpcykpO1xuICB9XG4gIGdldCBpbml0aWFsKCkge1xuICAgIHJldHVybiBtZW1vKHRoaXMsICdpbml0aWFsJywgKCkgPT4gZm9ybWF0SW5pdGlhbFRyYW5zaXRpb24odGhpcywgdGhpcy5jb25maWcuaW5pdGlhbCkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZXh0KHNuYXBzaG90LCBldmVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgIGxldCBzZWxlY3RlZFRyYW5zaXRpb247XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IG1lbW8odGhpcywgYGNhbmRpZGF0ZXMtJHtldmVudFR5cGV9YCwgKCkgPT4gZ2V0Q2FuZGlkYXRlcyh0aGlzLCBldmVudFR5cGUpKTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGd1YXJkXG4gICAgICB9ID0gY2FuZGlkYXRlO1xuICAgICAgY29uc3QgcmVzb2x2ZWRDb250ZXh0ID0gc25hcHNob3QuY29udGV4dDtcbiAgICAgIGxldCBndWFyZFBhc3NlZCA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ3VhcmRQYXNzZWQgPSAhZ3VhcmQgfHwgZXZhbHVhdGVHdWFyZChndWFyZCwgcmVzb2x2ZWRDb250ZXh0LCBldmVudCwgc25hcHNob3QpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IGd1YXJkVHlwZSA9IHR5cGVvZiBndWFyZCA9PT0gJ3N0cmluZycgPyBndWFyZCA6IHR5cGVvZiBndWFyZCA9PT0gJ29iamVjdCcgPyBndWFyZC50eXBlIDogdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBldmFsdWF0ZSBndWFyZCAke2d1YXJkVHlwZSA/IGAnJHtndWFyZFR5cGV9JyBgIDogJyd9aW4gdHJhbnNpdGlvbiBmb3IgZXZlbnQgJyR7ZXZlbnRUeXBlfScgaW4gc3RhdGUgbm9kZSAnJHt0aGlzLmlkfSc6XFxuJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChndWFyZFBhc3NlZCkge1xuICAgICAgICBhY3Rpb25zLnB1c2goLi4uY2FuZGlkYXRlLmFjdGlvbnMpO1xuICAgICAgICBzZWxlY3RlZFRyYW5zaXRpb24gPSBjYW5kaWRhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRUcmFuc2l0aW9uID8gW3NlbGVjdGVkVHJhbnNpdGlvbl0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKiogQWxsIHRoZSBldmVudCB0eXBlcyBhY2NlcHRlZCBieSB0aGlzIHN0YXRlIG5vZGUgYW5kIGl0cyBkZXNjZW5kYW50cy4gKi9cbiAgZ2V0IGV2ZW50cygpIHtcbiAgICByZXR1cm4gbWVtbyh0aGlzLCAnZXZlbnRzJywgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzdGF0ZXNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgY29uc3QgZXZlbnRzID0gbmV3IFNldCh0aGlzLm93bkV2ZW50cyk7XG4gICAgICBpZiAoc3RhdGVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVJZCBvZiBPYmplY3Qua2V5cyhzdGF0ZXMpKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbc3RhdGVJZF07XG4gICAgICAgICAgaWYgKHN0YXRlLnN0YXRlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBzdGF0ZS5ldmVudHMpIHtcbiAgICAgICAgICAgICAgZXZlbnRzLmFkZChgJHtldmVudH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50cyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIHRoZSBldmVudHMgdGhhdCBoYXZlIHRyYW5zaXRpb25zIGRpcmVjdGx5IGZyb20gdGhpcyBzdGF0ZSBub2RlLlxuICAgKlxuICAgKiBFeGNsdWRlcyBhbnkgaW5lcnQgZXZlbnRzLlxuICAgKi9cbiAgZ2V0IG93bkV2ZW50cygpIHtcbiAgICBjb25zdCBldmVudHMgPSBuZXcgU2V0KFsuLi50aGlzLnRyYW5zaXRpb25zLmtleXMoKV0uZmlsdGVyKGRlc2NyaXB0b3IgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvbnMuZ2V0KGRlc2NyaXB0b3IpLnNvbWUodHJhbnNpdGlvbiA9PiAhKCF0cmFuc2l0aW9uLnRhcmdldCAmJiAhdHJhbnNpdGlvbi5hY3Rpb25zLmxlbmd0aCAmJiAhdHJhbnNpdGlvbi5yZWVudGVyKSk7XG4gICAgfSkpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50cyk7XG4gIH1cbn1cblxuY29uc3QgU1RBVEVfSURFTlRJRklFUiA9ICcjJztcbmNsYXNzIFN0YXRlTWFjaGluZSB7XG4gIGNvbnN0cnVjdG9yKC8qKiBUaGUgcmF3IGNvbmZpZyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWFjaGluZS4gKi9cbiAgY29uZmlnLCBpbXBsZW1lbnRhdGlvbnMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAvKiogVGhlIG1hY2hpbmUncyBvd24gdmVyc2lvbi4gKi9cbiAgICB0aGlzLnZlcnNpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5zY2hlbWFzID0gdm9pZCAwO1xuICAgIHRoaXMuaW1wbGVtZW50YXRpb25zID0gdm9pZCAwO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0aGlzLl9feHN0YXRlbm9kZSA9IHRydWU7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRoaXMuaWRNYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5yb290ID0gdm9pZCAwO1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5zdGF0ZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5ldmVudHMgPSB2b2lkIDA7XG4gICAgdGhpcy5pZCA9IGNvbmZpZy5pZCB8fCAnKG1hY2hpbmUpJztcbiAgICB0aGlzLmltcGxlbWVudGF0aW9ucyA9IHtcbiAgICAgIGFjdG9yczogaW1wbGVtZW50YXRpb25zPy5hY3RvcnMgPz8ge30sXG4gICAgICBhY3Rpb25zOiBpbXBsZW1lbnRhdGlvbnM/LmFjdGlvbnMgPz8ge30sXG4gICAgICBkZWxheXM6IGltcGxlbWVudGF0aW9ucz8uZGVsYXlzID8/IHt9LFxuICAgICAgZ3VhcmRzOiBpbXBsZW1lbnRhdGlvbnM/Lmd1YXJkcyA/PyB7fVxuICAgIH07XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5jb25maWcudmVyc2lvbjtcbiAgICB0aGlzLnNjaGVtYXMgPSB0aGlzLmNvbmZpZy5zY2hlbWFzO1xuICAgIHRoaXMudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SW5pdGlhbFNuYXBzaG90ID0gdGhpcy5nZXRJbml0aWFsU25hcHNob3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFBlcnNpc3RlZFNuYXBzaG90ID0gdGhpcy5nZXRQZXJzaXN0ZWRTbmFwc2hvdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzdG9yZVNuYXBzaG90ID0gdGhpcy5yZXN0b3JlU25hcHNob3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucm9vdCA9IG5ldyBTdGF0ZU5vZGUoY29uZmlnLCB7XG4gICAgICBfa2V5OiB0aGlzLmlkLFxuICAgICAgX21hY2hpbmU6IHRoaXNcbiAgICB9KTtcbiAgICB0aGlzLnJvb3QuX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLnN0YXRlcyA9IHRoaXMucm9vdC5zdGF0ZXM7IC8vIFRPRE86IHJlbW92ZSFcbiAgICB0aGlzLmV2ZW50cyA9IHRoaXMucm9vdC5ldmVudHM7XG4gICAgaWYgKCEoJ291dHB1dCcgaW4gdGhpcy5yb290KSAmJiBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGVzKS5zb21lKHN0YXRlID0+IHN0YXRlLnR5cGUgPT09ICdmaW5hbCcgJiYgJ291dHB1dCcgaW4gc3RhdGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgYG1hY2hpbmUub3V0cHV0YCBkZWNsYXJhdGlvbiAodG9wLWxldmVsIGZpbmFsIHN0YXRlIHdpdGggb3V0cHV0IGRldGVjdGVkKScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9uZXMgdGhpcyBzdGF0ZSBtYWNoaW5lIHdpdGggdGhlIHByb3ZpZGVkIGltcGxlbWVudGF0aW9ucyBhbmQgbWVyZ2VzIHRoZVxuICAgKiBgY29udGV4dGAgKGlmIHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIGltcGxlbWVudGF0aW9ucyBPcHRpb25zIChgYWN0aW9uc2AsIGBndWFyZHNgLCBgYWN0b3JzYCwgYGRlbGF5c2AsXG4gICAqICAgYGNvbnRleHRgKSB0byByZWN1cnNpdmVseSBtZXJnZSB3aXRoIHRoZSBleGlzdGluZyBvcHRpb25zLlxuICAgKiBAcmV0dXJucyBBIG5ldyBgU3RhdGVNYWNoaW5lYCBpbnN0YW5jZSB3aXRoIHRoZSBwcm92aWRlZCBpbXBsZW1lbnRhdGlvbnMuXG4gICAqL1xuICBwcm92aWRlKGltcGxlbWVudGF0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbnMsXG4gICAgICBndWFyZHMsXG4gICAgICBhY3RvcnMsXG4gICAgICBkZWxheXNcbiAgICB9ID0gdGhpcy5pbXBsZW1lbnRhdGlvbnM7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZU1hY2hpbmUodGhpcy5jb25maWcsIHtcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgLi4uYWN0aW9ucyxcbiAgICAgICAgLi4uaW1wbGVtZW50YXRpb25zLmFjdGlvbnNcbiAgICAgIH0sXG4gICAgICBndWFyZHM6IHtcbiAgICAgICAgLi4uZ3VhcmRzLFxuICAgICAgICAuLi5pbXBsZW1lbnRhdGlvbnMuZ3VhcmRzXG4gICAgICB9LFxuICAgICAgYWN0b3JzOiB7XG4gICAgICAgIC4uLmFjdG9ycyxcbiAgICAgICAgLi4uaW1wbGVtZW50YXRpb25zLmFjdG9yc1xuICAgICAgfSxcbiAgICAgIGRlbGF5czoge1xuICAgICAgICAuLi5kZWxheXMsXG4gICAgICAgIC4uLmltcGxlbWVudGF0aW9ucy5kZWxheXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXNvbHZlU3RhdGUoY29uZmlnKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZVZhbHVlID0gcmVzb2x2ZVN0YXRlVmFsdWUodGhpcy5yb290LCBjb25maWcudmFsdWUpO1xuICAgIGNvbnN0IG5vZGVTZXQgPSBnZXRBbGxTdGF0ZU5vZGVzKGdldFN0YXRlTm9kZXModGhpcy5yb290LCByZXNvbHZlZFN0YXRlVmFsdWUpKTtcbiAgICByZXR1cm4gY3JlYXRlTWFjaGluZVNuYXBzaG90KHtcbiAgICAgIF9ub2RlczogWy4uLm5vZGVTZXRdLFxuICAgICAgY29udGV4dDogY29uZmlnLmNvbnRleHQgfHwge30sXG4gICAgICBjaGlsZHJlbjoge30sXG4gICAgICBzdGF0dXM6IGlzSW5GaW5hbFN0YXRlKG5vZGVTZXQsIHRoaXMucm9vdCkgPyAnZG9uZScgOiBjb25maWcuc3RhdHVzIHx8ICdhY3RpdmUnLFxuICAgICAgb3V0cHV0OiBjb25maWcub3V0cHV0LFxuICAgICAgZXJyb3I6IGNvbmZpZy5lcnJvcixcbiAgICAgIGhpc3RvcnlWYWx1ZTogY29uZmlnLmhpc3RvcnlWYWx1ZVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG5leHQgc25hcHNob3QgZ2l2ZW4gdGhlIGN1cnJlbnQgYHNuYXBzaG90YCBhbmQgcmVjZWl2ZWRcbiAgICogYGV2ZW50YC4gQ2FsY3VsYXRlcyBhIGZ1bGwgbWFjcm9zdGVwIGZyb20gYWxsIG1pY3Jvc3RlcHMuXG4gICAqXG4gICAqIEBwYXJhbSBzbmFwc2hvdCBUaGUgY3VycmVudCBzbmFwc2hvdFxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIHJlY2VpdmVkIGV2ZW50XG4gICAqL1xuICB0cmFuc2l0aW9uKHNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSkge1xuICAgIHJldHVybiBtYWNyb3N0ZXAoc25hcHNob3QsIGV2ZW50LCBhY3RvclNjb3BlLCBbXSkuc25hcHNob3Q7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbmV4dCBzdGF0ZSBnaXZlbiB0aGUgY3VycmVudCBgc3RhdGVgIGFuZCBgZXZlbnRgLiBDYWxjdWxhdGVzXG4gICAqIGEgbWljcm9zdGVwLlxuICAgKlxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHBhcmFtIGV2ZW50IFRoZSByZWNlaXZlZCBldmVudFxuICAgKi9cbiAgbWljcm9zdGVwKHNuYXBzaG90LCBldmVudCwgYWN0b3JTY29wZSkge1xuICAgIHJldHVybiBtYWNyb3N0ZXAoc25hcHNob3QsIGV2ZW50LCBhY3RvclNjb3BlLCBbXSkubWljcm9zdGF0ZXM7XG4gIH1cbiAgZ2V0VHJhbnNpdGlvbkRhdGEoc25hcHNob3QsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25Ob2RlKHRoaXMucm9vdCwgc25hcHNob3QudmFsdWUsIHNuYXBzaG90LCBldmVudCkgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgc3RhdGUgX2JlZm9yZV8gZXZhbHVhdGluZyBhbnkgbWljcm9zdGVwcy4gVGhpcyBcInByZS1pbml0aWFsXCJcbiAgICogc3RhdGUgaXMgcHJvdmlkZWQgdG8gaW5pdGlhbCBhY3Rpb25zIGV4ZWN1dGVkIGluIHRoZSBpbml0aWFsIHN0YXRlLlxuICAgKi9cbiAgZ2V0UHJlSW5pdGlhbFN0YXRlKGFjdG9yU2NvcGUsIGluaXRFdmVudCwgaW50ZXJuYWxRdWV1ZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRleHRcbiAgICB9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgcHJlSW5pdGlhbCA9IGNyZWF0ZU1hY2hpbmVTbmFwc2hvdCh7XG4gICAgICBjb250ZXh0OiB0eXBlb2YgY29udGV4dCAhPT0gJ2Z1bmN0aW9uJyAmJiBjb250ZXh0ID8gY29udGV4dCA6IHt9LFxuICAgICAgX25vZGVzOiBbdGhpcy5yb290XSxcbiAgICAgIGNoaWxkcmVuOiB7fSxcbiAgICAgIHN0YXR1czogJ2FjdGl2ZSdcbiAgICB9LCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSAoe1xuICAgICAgICBzcGF3bixcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHNlbGZcbiAgICAgIH0pID0+IGNvbnRleHQoe1xuICAgICAgICBzcGF3bixcbiAgICAgICAgaW5wdXQ6IGV2ZW50LmlucHV0LFxuICAgICAgICBzZWxmXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNvbHZlQWN0aW9uc0FuZENvbnRleHQocHJlSW5pdGlhbCwgaW5pdEV2ZW50LCBhY3RvclNjb3BlLCBbYXNzaWduKGFzc2lnbm1lbnQpXSwgaW50ZXJuYWxRdWV1ZSwgdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZUluaXRpYWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCBgU3RhdGVgIGluc3RhbmNlLCB3aXRoIHJlZmVyZW5jZSB0byBgc2VsZmAgYXMgYW5cbiAgICogYEFjdG9yUmVmYC5cbiAgICovXG4gIGdldEluaXRpYWxTbmFwc2hvdChhY3RvclNjb3BlLCBpbnB1dCkge1xuICAgIGNvbnN0IGluaXRFdmVudCA9IGNyZWF0ZUluaXRFdmVudChpbnB1dCk7IC8vIFRPRE86IGZpeDtcbiAgICBjb25zdCBpbnRlcm5hbFF1ZXVlID0gW107XG4gICAgY29uc3QgcHJlSW5pdGlhbFN0YXRlID0gdGhpcy5nZXRQcmVJbml0aWFsU3RhdGUoYWN0b3JTY29wZSwgaW5pdEV2ZW50LCBpbnRlcm5hbFF1ZXVlKTtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSBtaWNyb3N0ZXAoW3tcbiAgICAgIHRhcmdldDogWy4uLmdldEluaXRpYWxTdGF0ZU5vZGVzKHRoaXMucm9vdCldLFxuICAgICAgc291cmNlOiB0aGlzLnJvb3QsXG4gICAgICByZWVudGVyOiB0cnVlLFxuICAgICAgYWN0aW9uczogW10sXG4gICAgICBldmVudFR5cGU6IG51bGwsXG4gICAgICB0b0pTT046IG51bGwgLy8gVE9ETzogZml4XG4gICAgfV0sIHByZUluaXRpYWxTdGF0ZSwgYWN0b3JTY29wZSwgaW5pdEV2ZW50LCB0cnVlLCBpbnRlcm5hbFF1ZXVlKTtcbiAgICBjb25zdCB7XG4gICAgICBzbmFwc2hvdDogbWFjcm9TdGF0ZVxuICAgIH0gPSBtYWNyb3N0ZXAobmV4dFN0YXRlLCBpbml0RXZlbnQsIGFjdG9yU2NvcGUsIGludGVybmFsUXVldWUpO1xuICAgIHJldHVybiBtYWNyb1N0YXRlO1xuICB9XG4gIHN0YXJ0KHNuYXBzaG90KSB7XG4gICAgT2JqZWN0LnZhbHVlcyhzbmFwc2hvdC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQuZ2V0U25hcHNob3QoKS5zdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIGNoaWxkLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0U3RhdGVOb2RlQnlJZChzdGF0ZUlkKSB7XG4gICAgY29uc3QgZnVsbFBhdGggPSB0b1N0YXRlUGF0aChzdGF0ZUlkKTtcbiAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBmdWxsUGF0aC5zbGljZSgxKTtcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlSWQgPSBpc1N0YXRlSWQoZnVsbFBhdGhbMF0pID8gZnVsbFBhdGhbMF0uc2xpY2UoU1RBVEVfSURFTlRJRklFUi5sZW5ndGgpIDogZnVsbFBhdGhbMF07XG4gICAgY29uc3Qgc3RhdGVOb2RlID0gdGhpcy5pZE1hcC5nZXQocmVzb2x2ZWRTdGF0ZUlkKTtcbiAgICBpZiAoIXN0YXRlTm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGlsZCBzdGF0ZSBub2RlICcjJHtyZXNvbHZlZFN0YXRlSWR9JyBkb2VzIG5vdCBleGlzdCBvbiBtYWNoaW5lICcke3RoaXMuaWR9J2ApO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0U3RhdGVOb2RlQnlQYXRoKHN0YXRlTm9kZSwgcmVsYXRpdmVQYXRoKTtcbiAgfVxuICBnZXQgZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmRlZmluaXRpb247XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cbiAgZ2V0UGVyc2lzdGVkU25hcHNob3Qoc25hcHNob3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0UGVyc2lzdGVkU25hcHNob3Qoc25hcHNob3QsIG9wdGlvbnMpO1xuICB9XG4gIHJlc3RvcmVTbmFwc2hvdChzbmFwc2hvdCwgX2FjdG9yU2NvcGUpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHt9O1xuICAgIGNvbnN0IHNuYXBzaG90Q2hpbGRyZW4gPSBzbmFwc2hvdC5jaGlsZHJlbjtcbiAgICBPYmplY3Qua2V5cyhzbmFwc2hvdENoaWxkcmVuKS5mb3JFYWNoKGFjdG9ySWQgPT4ge1xuICAgICAgY29uc3QgYWN0b3JEYXRhID0gc25hcHNob3RDaGlsZHJlblthY3RvcklkXTtcbiAgICAgIGNvbnN0IGNoaWxkU3RhdGUgPSBhY3RvckRhdGEuc25hcHNob3Q7XG4gICAgICBjb25zdCBzcmMgPSBhY3RvckRhdGEuc3JjO1xuICAgICAgY29uc3QgbG9naWMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHJlc29sdmVSZWZlcmVuY2VkQWN0b3IodGhpcywgc3JjKSA6IHNyYztcbiAgICAgIGlmICghbG9naWMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0b3JSZWYgPSBjcmVhdGVBY3Rvcihsb2dpYywge1xuICAgICAgICBpZDogYWN0b3JJZCxcbiAgICAgICAgcGFyZW50OiBfYWN0b3JTY29wZS5zZWxmLFxuICAgICAgICBzeW5jU25hcHNob3Q6IGFjdG9yRGF0YS5zeW5jU25hcHNob3QsXG4gICAgICAgIHNuYXBzaG90OiBjaGlsZFN0YXRlLFxuICAgICAgICBzcmMsXG4gICAgICAgIHN5c3RlbUlkOiBhY3RvckRhdGEuc3lzdGVtSWRcbiAgICAgIH0pO1xuICAgICAgY2hpbGRyZW5bYWN0b3JJZF0gPSBhY3RvclJlZjtcbiAgICB9KTtcbiAgICBjb25zdCByZXN0b3JlZFNuYXBzaG90ID0gY3JlYXRlTWFjaGluZVNuYXBzaG90KHtcbiAgICAgIC4uLnNuYXBzaG90LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBfbm9kZXM6IEFycmF5LmZyb20oZ2V0QWxsU3RhdGVOb2RlcyhnZXRTdGF0ZU5vZGVzKHRoaXMucm9vdCwgc25hcHNob3QudmFsdWUpKSlcbiAgICB9LCB0aGlzKTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHJldml2ZUNvbnRleHQoY29udGV4dFBhcnQsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoc2Vlbi5oYXMoY29udGV4dFBhcnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlZW4uYWRkKGNvbnRleHRQYXJ0KTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbnRleHRQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dFBhcnRba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoJ3hzdGF0ZSQkdHlwZScgaW4gdmFsdWUgJiYgdmFsdWUueHN0YXRlJCR0eXBlID09PSAkJEFDVE9SX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbnRleHRQYXJ0W2tleV0gPSBjaGlsZHJlblt2YWx1ZS5pZF07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV2aXZlQ29udGV4dCh2YWx1ZSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldml2ZUNvbnRleHQocmVzdG9yZWRTbmFwc2hvdC5jb250ZXh0LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIHJlc3RvcmVkU25hcHNob3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhdGUgbWFjaGluZSAoc3RhdGVjaGFydCkgd2l0aCB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbi5cbiAqXG4gKiBUaGUgc3RhdGUgbWFjaGluZSByZXByZXNlbnRzIHRoZSBwdXJlIGxvZ2ljIG9mIGEgc3RhdGUgbWFjaGluZSBhY3Rvci5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBjcmVhdGVNYWNoaW5lIH0gZnJvbSAneHN0YXRlJztcbiAqXG4gKiBjb25zdCBsaWdodE1hY2hpbmUgPSBjcmVhdGVNYWNoaW5lKHtcbiAqICAgaWQ6ICdsaWdodCcsXG4gKiAgIGluaXRpYWw6ICdncmVlbicsXG4gKiAgIHN0YXRlczoge1xuICogICAgIGdyZWVuOiB7XG4gKiAgICAgICBvbjoge1xuICogICAgICAgICBUSU1FUjogeyB0YXJnZXQ6ICd5ZWxsb3cnIH1cbiAqICAgICAgIH1cbiAqICAgICB9LFxuICogICAgIHllbGxvdzoge1xuICogICAgICAgb246IHtcbiAqICAgICAgICAgVElNRVI6IHsgdGFyZ2V0OiAncmVkJyB9XG4gKiAgICAgICB9XG4gKiAgICAgfSxcbiAqICAgICByZWQ6IHtcbiAqICAgICAgIG9uOiB7XG4gKiAgICAgICAgIFRJTUVSOiB7IHRhcmdldDogJ2dyZWVuJyB9XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiB9KTtcbiAqXG4gKiBjb25zdCBsaWdodEFjdG9yID0gY3JlYXRlQWN0b3IobGlnaHRNYWNoaW5lKTtcbiAqIGxpZ2h0QWN0b3Iuc3RhcnQoKTtcbiAqXG4gKiBsaWdodEFjdG9yLnNlbmQoeyB0eXBlOiAnVElNRVInIH0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbmZpZyBUaGUgc3RhdGUgbWFjaGluZSBjb25maWd1cmF0aW9uLlxuICogQHBhcmFtIG9wdGlvbnMgREVQUkVDQVRFRDogdXNlIGBzZXR1cCh7IC4uLiB9KWAgb3IgYG1hY2hpbmUucHJvdmlkZSh7IC4uLiB9KWBcbiAqICAgdG8gcHJvdmlkZSBtYWNoaW5lIGltcGxlbWVudGF0aW9ucyBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVNYWNoaW5lKGNvbmZpZywgaW1wbGVtZW50YXRpb25zKSB7XG4gIHJldHVybiBuZXcgU3RhdGVNYWNoaW5lKGNvbmZpZywgaW1wbGVtZW50YXRpb25zKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZnVuY3Rpb24gY3JlYXRlSW5lcnRBY3RvclNjb3BlKGFjdG9yTG9naWMpIHtcbiAgY29uc3Qgc2VsZiA9IGNyZWF0ZUFjdG9yKGFjdG9yTG9naWMpO1xuICBjb25zdCBpbmVydEFjdG9yU2NvcGUgPSB7XG4gICAgc2VsZixcbiAgICBkZWZlcjogKCkgPT4ge30sXG4gICAgaWQ6ICcnLFxuICAgIGxvZ2dlcjogKCkgPT4ge30sXG4gICAgc2Vzc2lvbklkOiAnJyxcbiAgICBzdG9wQ2hpbGQ6ICgpID0+IHt9LFxuICAgIHN5c3RlbTogc2VsZi5zeXN0ZW0sXG4gICAgZW1pdDogKCkgPT4ge30sXG4gICAgYWN0aW9uRXhlY3V0b3I6ICgpID0+IHt9XG4gIH07XG4gIHJldHVybiBpbmVydEFjdG9yU2NvcGU7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2UgYGluaXRpYWxUcmFuc2l0aW9uKOKApilgIGluc3RlYWQuICovXG5mdW5jdGlvbiBnZXRJbml0aWFsU25hcHNob3QoYWN0b3JMb2dpYywgLi4uW2lucHV0XSkge1xuICBjb25zdCBhY3RvclNjb3BlID0gY3JlYXRlSW5lcnRBY3RvclNjb3BlKGFjdG9yTG9naWMpO1xuICByZXR1cm4gYWN0b3JMb2dpYy5nZXRJbml0aWFsU25hcHNob3QoYWN0b3JTY29wZSwgaW5wdXQpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIG5leHQgc25hcHNob3QgZm9yIHRoZSBnaXZlbiBgYWN0b3JMb2dpY2AgYmFzZWQgb24gdGhlIGdpdmVuXG4gKiBgc25hcHNob3RgIGFuZCBgZXZlbnRgLlxuICpcbiAqIElmIHRoZSBgc25hcHNob3RgIGlzIGB1bmRlZmluZWRgLCB0aGUgaW5pdGlhbCBzbmFwc2hvdCBvZiB0aGUgYGFjdG9yTG9naWNgIGlzXG4gKiB1c2VkLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBgdHJhbnNpdGlvbijigKYpYCBpbnN0ZWFkLlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgZ2V0TmV4dFNuYXBzaG90IH0gZnJvbSAneHN0YXRlJztcbiAqIGltcG9ydCB7IHRyYWZmaWNMaWdodE1hY2hpbmUgfSBmcm9tICcuL3RyYWZmaWNMaWdodE1hY2hpbmUudHMnO1xuICpcbiAqIGNvbnN0IG5leHRTbmFwc2hvdCA9IGdldE5leHRTbmFwc2hvdChcbiAqICAgdHJhZmZpY0xpZ2h0TWFjaGluZSwgLy8gYWN0b3IgbG9naWNcbiAqICAgdW5kZWZpbmVkLCAvLyBzbmFwc2hvdCAob3IgaW5pdGlhbCBzdGF0ZSBpZiB1bmRlZmluZWQpXG4gKiAgIHsgdHlwZTogJ1RJTUVSJyB9XG4gKiApOyAvLyBldmVudCBvYmplY3RcbiAqXG4gKiBjb25zb2xlLmxvZyhuZXh0U25hcHNob3QudmFsdWUpO1xuICogLy8gPT4gJ3llbGxvdydcbiAqXG4gKiBjb25zdCBuZXh0U25hcHNob3QyID0gZ2V0TmV4dFNuYXBzaG90KFxuICogICB0cmFmZmljTGlnaHRNYWNoaW5lLCAvLyBhY3RvciBsb2dpY1xuICogICBuZXh0U25hcHNob3QsIC8vIHNuYXBzaG90XG4gKiAgIHsgdHlwZTogJ1RJTUVSJyB9XG4gKiApOyAvLyBldmVudCBvYmplY3RcbiAqXG4gKiBjb25zb2xlLmxvZyhuZXh0U25hcHNob3QyLnZhbHVlKTtcbiAqIC8vID0+J3JlZCdcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBnZXROZXh0U25hcHNob3QoYWN0b3JMb2dpYywgc25hcHNob3QsIGV2ZW50KSB7XG4gIGNvbnN0IGluZXJ0QWN0b3JTY29wZSA9IGNyZWF0ZUluZXJ0QWN0b3JTY29wZShhY3RvckxvZ2ljKTtcbiAgaW5lcnRBY3RvclNjb3BlLnNlbGYuX3NuYXBzaG90ID0gc25hcHNob3Q7XG4gIHJldHVybiBhY3RvckxvZ2ljLnRyYW5zaXRpb24oc25hcHNob3QsIGV2ZW50LCBpbmVydEFjdG9yU2NvcGUpO1xufVxuXG4vLyBhdCB0aGUgbW9tZW50IHdlIGFsbG93IGV4dHJhIGFjdG9ycyAtIG9uZXMgdGhhdCBhcmUgbm90IHNwZWNpZmllZCBieSBgY2hpbGRyZW5gXG4vLyB0aGlzIGNvdWxkIGJlIHJlY29uc2lkZXJlZCBpbiB0aGUgZnV0dXJlXG5cbmZ1bmN0aW9uIHNldHVwKHtcbiAgc2NoZW1hcyxcbiAgYWN0b3JzLFxuICBhY3Rpb25zLFxuICBndWFyZHMsXG4gIGRlbGF5c1xufSkge1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1hY2hpbmU6IGNvbmZpZyA9PiBjcmVhdGVNYWNoaW5lKHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIHNjaGVtYXNcbiAgICB9LCB7XG4gICAgICBhY3RvcnMsXG4gICAgICBhY3Rpb25zLFxuICAgICAgZ3VhcmRzLFxuICAgICAgZGVsYXlzXG4gICAgfSlcbiAgfTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtZGVjbGFyYXRpb24tbWVyZ2luZ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1kZWNsYXJhdGlvbi1tZXJnaW5nXG5jbGFzcyBTaW11bGF0ZWRDbG9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGltZW91dHMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fbm93ID0gMDtcbiAgICB0aGlzLl9pZCA9IDA7XG4gICAgdGhpcy5fZmx1c2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9mbHVzaGluZ0ludmFsaWRhdGVkID0gZmFsc2U7XG4gIH1cbiAgbm93KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3c7XG4gIH1cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkKys7XG4gIH1cbiAgc2V0VGltZW91dChmbiwgdGltZW91dCkge1xuICAgIHRoaXMuX2ZsdXNoaW5nSW52YWxpZGF0ZWQgPSB0aGlzLl9mbHVzaGluZztcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcbiAgICB0aGlzLnRpbWVvdXRzLnNldChpZCwge1xuICAgICAgc3RhcnQ6IHRoaXMubm93KCksXG4gICAgICB0aW1lb3V0LFxuICAgICAgZm5cbiAgICB9KTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGlkKSB7XG4gICAgdGhpcy5fZmx1c2hpbmdJbnZhbGlkYXRlZCA9IHRoaXMuX2ZsdXNoaW5nO1xuICAgIHRoaXMudGltZW91dHMuZGVsZXRlKGlkKTtcbiAgfVxuICBzZXQodGltZSkge1xuICAgIGlmICh0aGlzLl9ub3cgPiB0aW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byB0cmF2ZWwgYmFjayBpbiB0aW1lJyk7XG4gICAgfVxuICAgIHRoaXMuX25vdyA9IHRpbWU7XG4gICAgdGhpcy5mbHVzaFRpbWVvdXRzKCk7XG4gIH1cbiAgZmx1c2hUaW1lb3V0cygpIHtcbiAgICBpZiAodGhpcy5fZmx1c2hpbmcpIHtcbiAgICAgIHRoaXMuX2ZsdXNoaW5nSW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9mbHVzaGluZyA9IHRydWU7XG4gICAgY29uc3Qgc29ydGVkID0gWy4uLnRoaXMudGltZW91dHNdLnNvcnQoKFtfaWRBLCB0aW1lb3V0QV0sIFtfaWRCLCB0aW1lb3V0Ql0pID0+IHtcbiAgICAgIGNvbnN0IGVuZEEgPSB0aW1lb3V0QS5zdGFydCArIHRpbWVvdXRBLnRpbWVvdXQ7XG4gICAgICBjb25zdCBlbmRCID0gdGltZW91dEIuc3RhcnQgKyB0aW1lb3V0Qi50aW1lb3V0O1xuICAgICAgcmV0dXJuIGVuZEIgPiBlbmRBID8gLTEgOiAxO1xuICAgIH0pO1xuICAgIGZvciAoY29uc3QgW2lkLCB0aW1lb3V0XSBvZiBzb3J0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mbHVzaGluZ0ludmFsaWRhdGVkKSB7XG4gICAgICAgIHRoaXMuX2ZsdXNoaW5nSW52YWxpZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVvdXRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5vdygpIC0gdGltZW91dC5zdGFydCA+PSB0aW1lb3V0LnRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0cy5kZWxldGUoaWQpO1xuICAgICAgICB0aW1lb3V0LmZuLmNhbGwobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2ZsdXNoaW5nID0gZmFsc2U7XG4gIH1cbiAgaW5jcmVtZW50KG1zKSB7XG4gICAgdGhpcy5fbm93ICs9IG1zO1xuICAgIHRoaXMuZmx1c2hUaW1lb3V0cygpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgYG91dHB1dGAgb2YgdGhlIGFjdG9yIHdoZW4gaXQgaXMgZG9uZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBtYWNoaW5lID0gY3JlYXRlTWFjaGluZSh7XG4gKiAgIC8vIC4uLlxuICogICBvdXRwdXQ6IHtcbiAqICAgICBjb3VudDogNDJcbiAqICAgfVxuICogfSk7XG4gKlxuICogY29uc3QgYWN0b3IgPSBjcmVhdGVBY3RvcihtYWNoaW5lKTtcbiAqXG4gKiBhY3Rvci5zdGFydCgpO1xuICpcbiAqIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRvUHJvbWlzZShhY3Rvcik7XG4gKlxuICogY29uc29sZS5sb2cob3V0cHV0KTtcbiAqIC8vIGxvZ3MgeyBjb3VudDogNDIgfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIHRvUHJvbWlzZShhY3Rvcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGFjdG9yLnN1YnNjcmliZSh7XG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGFjdG9yLmdldFNuYXBzaG90KCkub3V0cHV0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogcmVqZWN0XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdpdmVuIGFjdG9yIGBsb2dpY2AsIGEgYHNuYXBzaG90YCwgYW5kIGFuIGBldmVudGAsIHJldHVybnMgYSB0dXBsZSBvZiB0aGVcbiAqIGBuZXh0U25hcHNob3RgIGFuZCBgYWN0aW9uc2AgdG8gZXhlY3V0ZS5cbiAqXG4gKiBUaGlzIGlzIGEgcHVyZSBmdW5jdGlvbiB0aGF0IGRvZXMgbm90IGV4ZWN1dGUgYGFjdGlvbnNgLlxuICovXG5mdW5jdGlvbiB0cmFuc2l0aW9uKGxvZ2ljLCBzbmFwc2hvdCwgZXZlbnQpIHtcbiAgY29uc3QgZXhlY3V0YWJsZUFjdGlvbnMgPSBbXTtcbiAgY29uc3QgYWN0b3JTY29wZSA9IGNyZWF0ZUluZXJ0QWN0b3JTY29wZShsb2dpYyk7XG4gIGFjdG9yU2NvcGUuYWN0aW9uRXhlY3V0b3IgPSBhY3Rpb24gPT4ge1xuICAgIGV4ZWN1dGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgbmV4dFNuYXBzaG90ID0gbG9naWMudHJhbnNpdGlvbihzbmFwc2hvdCwgZXZlbnQsIGFjdG9yU2NvcGUpO1xuICByZXR1cm4gW25leHRTbmFwc2hvdCwgZXhlY3V0YWJsZUFjdGlvbnNdO1xufVxuXG4vKipcbiAqIEdpdmVuIGFjdG9yIGBsb2dpY2AgYW5kIG9wdGlvbmFsIGBpbnB1dGAsIHJldHVybnMgYSB0dXBsZSBvZiB0aGVcbiAqIGBuZXh0U25hcHNob3RgIGFuZCBgYWN0aW9uc2AgdG8gZXhlY3V0ZSBmcm9tIHRoZSBpbml0aWFsIHRyYW5zaXRpb24gKG5vXG4gKiBwcmV2aW91cyBzdGF0ZSkuXG4gKlxuICogVGhpcyBpcyBhIHB1cmUgZnVuY3Rpb24gdGhhdCBkb2VzIG5vdCBleGVjdXRlIGBhY3Rpb25zYC5cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbFRyYW5zaXRpb24obG9naWMsIC4uLltpbnB1dF0pIHtcbiAgY29uc3QgZXhlY3V0YWJsZUFjdGlvbnMgPSBbXTtcbiAgY29uc3QgYWN0b3JTY29wZSA9IGNyZWF0ZUluZXJ0QWN0b3JTY29wZShsb2dpYyk7XG4gIGFjdG9yU2NvcGUuYWN0aW9uRXhlY3V0b3IgPSBhY3Rpb24gPT4ge1xuICAgIGV4ZWN1dGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgbmV4dFNuYXBzaG90ID0gbG9naWMuZ2V0SW5pdGlhbFNuYXBzaG90KGFjdG9yU2NvcGUsIGlucHV0KTtcbiAgcmV0dXJuIFtuZXh0U25hcHNob3QsIGV4ZWN1dGFibGVBY3Rpb25zXTtcbn1cblxuY29uc3QgZGVmYXVsdFdhaXRGb3JPcHRpb25zID0ge1xuICB0aW1lb3V0OiBJbmZpbml0eSAvLyBtdWNoIG1vcmUgdGhhbiAxMCBzZWNvbmRzXG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXMgdG8gYW4gYWN0b3IgcmVmIGFuZCB3YWl0cyBmb3IgaXRzIGVtaXR0ZWQgdmFsdWUgdG8gc2F0aXNmeSBhXG4gKiBwcmVkaWNhdGUsIGFuZCB0aGVuIHJlc29sdmVzIHdpdGggdGhhdCB2YWx1ZS4gV2lsbCB0aHJvdyBpZiB0aGUgZGVzaXJlZCBzdGF0ZVxuICogaXMgbm90IHJlYWNoZWQgYWZ0ZXIgYW4gb3B0aW9uYWwgdGltZW91dC4gKGRlZmF1bHRzIHRvIEluZmluaXR5KS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBzdGF0ZSA9IGF3YWl0IHdhaXRGb3Ioc29tZVNlcnZpY2UsIChzdGF0ZSkgPT4ge1xuICogICByZXR1cm4gc3RhdGUuaGFzVGFnKCdsb2FkZWQnKTtcbiAqIH0pO1xuICpcbiAqIHN0YXRlLmhhc1RhZygnbG9hZGVkJyk7IC8vIHRydWVcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBhY3RvclJlZiBUaGUgYWN0b3IgcmVmIHRvIHN1YnNjcmliZSB0b1xuICogQHBhcmFtIHByZWRpY2F0ZSBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgbWF0Y2hlcyB0aGUgY29uZGl0aW9uIHRvIHdhaXQgZm9yXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgZXZlbnR1YWxseSByZXNvbHZlcyB0byB0aGUgZW1pdHRlZCB2YWx1ZSB0aGF0IG1hdGNoZXNcbiAqICAgdGhlIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiB3YWl0Rm9yKGFjdG9yUmVmLCBwcmVkaWNhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgcmVzb2x2ZWRPcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRXYWl0Rm9yT3B0aW9ucyxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzaWduYWxcbiAgICB9ID0gcmVzb2x2ZWRPcHRpb25zO1xuICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgcmVqKHNpZ25hbC5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgIGlmIChyZXNvbHZlZE9wdGlvbnMudGltZW91dCA8IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2B0aW1lb3V0YCBwYXNzZWQgdG8gYHdhaXRGb3JgIGlzIG5lZ2F0aXZlIGFuZCBpdCB3aWxsIHJlamVjdCBpdHMgaW50ZXJuYWwgcHJvbWlzZSBpbW1lZGlhdGVseS4nKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlID0gcmVzb2x2ZWRPcHRpb25zLnRpbWVvdXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwb3NlKCk7XG4gICAgICByZWoobmV3IEVycm9yKGBUaW1lb3V0IG9mICR7cmVzb2x2ZWRPcHRpb25zLnRpbWVvdXR9IG1zIGV4Y2VlZGVkYCkpO1xuICAgIH0sIHJlc29sdmVkT3B0aW9ucy50aW1lb3V0KTtcbiAgICBjb25zdCBkaXNwb3NlID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIHN1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChhYm9ydExpc3RlbmVyKSB7XG4gICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gY2hlY2tFbWl0dGVkKGVtaXR0ZWQpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUoZW1pdHRlZCkpIHtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgICAgICByZXMoZW1pdHRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGBzaWduYWxgIG9wdGlvbiBpcyBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHRoZSBsaXN0ZW5lciBmb3IgaXRzXG4gICAgICogYGFib3J0YCBldmVudFxuICAgICAqL1xuICAgIGxldCBhYm9ydExpc3RlbmVyO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICBsZXQgc3ViOyAvLyBhdm9pZCBURFogd2hlbiBkaXNwb3Npbmcgc3luY2hyb25vdXNseVxuXG4gICAgLy8gU2VlIGlmIHRoZSBjdXJyZW50IHNuYXBzaG90IGFscmVhZHkgbWF0Y2hlcyB0aGUgcHJlZGljYXRlXG4gICAgY2hlY2tFbWl0dGVkKGFjdG9yUmVmLmdldFNuYXBzaG90KCkpO1xuICAgIGlmIChkb25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gb25seSBkZWZpbmUgdGhlIGBhYm9ydExpc3RlbmVyYCBpZiB0aGUgYHNpZ25hbGAgb3B0aW9uIGlzIHByb3ZpZGVkXG4gICAgaWYgKHNpZ25hbCkge1xuICAgICAgYWJvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgICAgICAvLyBYU3RhdGUgZG9lcyBub3QgXCJvd25cIiB0aGUgc2lnbmFsLCBzbyB3ZSBzaG91bGQgcmVqZWN0IHdpdGggaXRzIHJlYXNvbiAoaWYgYW55KVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcbiAgICAgICAgcmVqKHNpZ25hbC5yZWFzb24pO1xuICAgICAgfTtcbiAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0TGlzdGVuZXIpO1xuICAgIH1cbiAgICBzdWIgPSBhY3RvclJlZi5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogY2hlY2tFbWl0dGVkLFxuICAgICAgZXJyb3I6IGVyciA9PiB7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG4gICAgICAgIHJlaihlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICAgICAgcmVqKG5ldyBFcnJvcihgQWN0b3IgdGVybWluYXRlZCB3aXRob3V0IHNhdGlzZnlpbmcgcHJlZGljYXRlYCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBTaW11bGF0ZWRDbG9jaywgU3RhdGVNYWNoaW5lLCBTdGF0ZU5vZGUsIGFzc2VydEV2ZW50LCBjcmVhdGVNYWNoaW5lLCBnZXRJbml0aWFsU25hcHNob3QsIGdldE5leHRTbmFwc2hvdCwgaW5pdGlhbFRyYW5zaXRpb24sIHNldHVwLCB0b1Byb21pc2UsIHRyYW5zaXRpb24sIHdhaXRGb3IgfTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVOVklST05NRU5UID09PSAnTk9ERSc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBCdW4sIERlbm8gLS0gZGV0ZWN0aW9uICovXG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgdXNlckFnZW50U3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHVzZXJBZ2VudC5zbGljZSgwLCBzdHJpbmcubGVuZ3RoKSA9PT0gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnQnVuLycpKSByZXR1cm4gJ0JVTic7XG4gIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdDbG91ZGZsYXJlLVdvcmtlcnMnKSkgcmV0dXJuICdDTE9VREZMQVJFJztcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0Rlbm8vJykpIHJldHVybiAnREVOTyc7XG4gIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdOb2RlLmpzLycpKSByZXR1cm4gJ05PREUnO1xuICBpZiAoZ2xvYmFsVGhpcy5CdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnKSByZXR1cm4gJ0JVTic7XG4gIGlmIChnbG9iYWxUaGlzLkRlbm8gJiYgdHlwZW9mIERlbm8udmVyc2lvbiA9PSAnb2JqZWN0JykgcmV0dXJuICdERU5PJztcbiAgaWYgKGNsYXNzb2YoZ2xvYmFsVGhpcy5wcm9jZXNzKSA9PT0gJ3Byb2Nlc3MnKSByZXR1cm4gJ05PREUnO1xuICBpZiAoZ2xvYmFsVGhpcy53aW5kb3cgJiYgZ2xvYmFsVGhpcy5kb2N1bWVudCkgcmV0dXJuICdCUk9XU0VSJztcbiAgcmV0dXJuICdSRVNUJztcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtbm9kZScpO1xuXG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcbnZhciBGT1JDRUQgPSBDSFJPTUVfQlVHIHx8ICFhcnJheU1ldGhvZElzU3RyaWN0KCdyZWR1Y2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgbGVuZ3RoLCBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiWCIsIlhTVEFURV9TVE9QIiwiQSIsImNyZWF0ZUFjdG9yIiwiZnJvbVRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiaW5pdGlhbENvbnRleHQiLCJjb25maWciLCJzbmFwc2hvdCIsImV2ZW50IiwiYWN0b3JTY29wZSIsImNvbnRleHQiLCJnZXRJbml0aWFsU25hcHNob3QiLCJfIiwiaW5wdXQiLCJzdGF0dXMiLCJvdXRwdXQiLCJ1bmRlZmluZWQiLCJlcnJvciIsImdldFBlcnNpc3RlZFNuYXBzaG90IiwicmVzdG9yZVNuYXBzaG90IiwiaW5zdGFuY2VTdGF0ZXMiLCJXZWFrTWFwIiwiZnJvbUNhbGxiYWNrIiwiY2FsbGJhY2siLCJsb2dpYyIsInN0YXJ0Iiwic3RhdGUiLCJzZWxmIiwic3lzdGVtIiwiZW1pdCIsImNhbGxiYWNrU3RhdGUiLCJyZWNlaXZlcnMiLCJkaXNwb3NlIiwic2V0Iiwic2VuZEJhY2siLCJnZXRTbmFwc2hvdCIsIl9wYXJlbnQiLCJfcmVsYXkiLCJyZWNlaXZlIiwibGlzdGVuZXIiLCJTZXQiLCJhZGQiLCJnZXQiLCJ0eXBlIiwiZm9yRWFjaCIsInJlY2VpdmVyIiwiWFNUQVRFX09CU0VSVkFCTEVfTkVYVCIsIlhTVEFURV9PQlNFUlZBQkxFX0VSUk9SIiwiWFNUQVRFX09CU0VSVkFCTEVfQ09NUExFVEUiLCJmcm9tT2JzZXJ2YWJsZSIsIm9ic2VydmFibGVDcmVhdG9yIiwibmV3U25hcHNob3QiLCJkYXRhIiwiX3N1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwibmV4dCIsInZhbHVlIiwiZXJyIiwiY29tcGxldGUiLCJmcm9tRXZlbnRPYnNlcnZhYmxlIiwibGF6eU9ic2VydmFibGUiLCJYU1RBVEVfUFJPTUlTRV9SRVNPTFZFIiwiWFNUQVRFX1BST01JU0VfUkVKRUNUIiwiY29udHJvbGxlck1hcCIsImZyb21Qcm9taXNlIiwicHJvbWlzZUNyZWF0b3IiLCJzY29wZSIsInJlc29sdmVkVmFsdWUiLCJhYm9ydCIsImNvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJyZXNvbHZlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNpZ25hbCIsInRoZW4iLCJyZXNwb25zZSIsImRlbGV0ZSIsImVycm9yRGF0YSIsImVtcHR5TG9naWMiLCJjcmVhdGVFbXB0eUFjdG9yIiwiZ2V0R2xvYmFsIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsImdsb2JhbCIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0RGV2VG9vbHMiLCJ3IiwiX194c3RhdGVfXyIsInJlZ2lzdGVyU2VydmljZSIsInNlcnZpY2UiLCJkZXZUb29scyIsInJlZ2lzdGVyIiwiZGV2VG9vbHNBZGFwdGVyIiwiVCIsIlByb2Nlc3NpbmdTdGF0dXMiLCJ6IiwicmVzb2x2ZVJlZmVyZW5jZWRBY3RvciIsIlUiLCJjbG9uZU1hY2hpbmVTbmFwc2hvdCIsIlYiLCJleGVjdXRpbmdDdXN0b21BY3Rpb24iLCJXIiwiWFNUQVRFX0VSUk9SIiwiWSIsImNyZWF0ZUVycm9yQWN0b3JFdmVudCIsImUiLCJldmFsdWF0ZUd1YXJkIiwiTSIsImNhbmNlbCIsIk8iLCJyYWlzZSIsIlAiLCJzcGF3bkNoaWxkIiwiUiIsInN0b3BDaGlsZCIsImNyZWF0ZVNwYXduZXIiLCJtYWNoaW5lIiwic3Bhd25lZENoaWxkcmVuIiwic3Bhd24iLCJzcmMiLCJvcHRpb25zIiwic3lzdGVtSWQiLCJFcnJvciIsImlkIiwiYWN0b3JSZWYiLCJwYXJlbnQiLCJzeW5jU25hcHNob3QiLCJkZWZlciIsIl9wcm9jZXNzaW5nU3RhdHVzIiwiU3RvcHBlZCIsInJlc29sdmVBc3NpZ24iLCJhY3Rpb25BcmdzIiwiYWN0aW9uUGFyYW1zIiwiYXNzaWdubWVudCIsImFzc2lnbkFyZ3MiLCJwYXJ0aWFsVXBkYXRlIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInByb3BBc3NpZ25tZW50IiwidXBkYXRlZENvbnRleHQiLCJhc3NpZ24iLCJjaGlsZHJlbiIsImxlbmd0aCIsIl9hcmdzIiwiX3BhcmFtcyIsInJlc29sdmVFbWl0IiwiYXJncyIsImV2ZW50T3JFeHByIiwicmVzb2x2ZWRFdmVudCIsImV4ZWN1dGVFbWl0IiwiZXhlY3V0ZSIsIlNwZWNpYWxUYXJnZXRzIiwicmVzb2x2ZVNlbmRUbyIsInRvIiwiZGVsYXkiLCJleHRyYSIsImRlbGF5c01hcCIsImltcGxlbWVudGF0aW9ucyIsImRlbGF5cyIsInJlc29sdmVkRGVsYXkiLCJjb25maWdEZWxheSIsInJlc29sdmVkVGFyZ2V0IiwidGFyZ2V0QWN0b3JSZWYiLCJQYXJlbnQiLCJJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJzbGljZSIsImRlZmVycmVkQWN0b3JJZHMiLCJpbmNsdWRlcyIsInRhcmdldElkIiwicmV0cnlSZXNvbHZlU2VuZFRvIiwicGFyYW1zIiwiZXhlY3V0ZVNlbmRUbyIsInNjaGVkdWxlciIsInNjaGVkdWxlIiwic2VuZFRvIiwicmV0cnlSZXNvbHZlIiwic2VuZFBhcmVudCIsImZvcndhcmRUbyIsInRhcmdldCIsIm9yaWdpbmFsVGFyZ2V0IiwicmVzb2x2ZUVucXVldWVBY3Rpb25zIiwiY29sbGVjdCIsImFjdGlvbnMiLCJlbnF1ZXVlIiwiYWN0aW9uIiwicHVzaCIsImNoZWNrIiwiZ3VhcmQiLCJlbnF1ZXVlQWN0aW9ucyIsInJlc29sdmVMb2ciLCJsYWJlbCIsImV4ZWN1dGVMb2ciLCJsb2dnZXIiLCJsb2ciLCJTIiwiYSIsImIiLCJjIiwiZiIsImwiLCJzIiwiTWFpbGJveCIsIl9hY3RpdmUiLCJmbHVzaCIsImNsZWFyIiwiX2N1cnJlbnQiLCJfbGFzdCIsImVucXVldWVkIiwiY29uc3VtZWQiLCJfcHJvY2VzcyIsImNvbnN0cnVjdG9yIiwiU1RBVEVfREVMSU1JVEVSIiwiVEFSR0VUTEVTU19LRVkiLCJOVUxMX0VWRU5UIiwiU1RBVEVfSURFTlRJRklFUiIsIldJTERDQVJEIiwiWFNUQVRFX0lOSVQiLCJjcmVhdGVBZnRlckV2ZW50IiwiZGVsYXlSZWYiLCJjcmVhdGVEb25lU3RhdGVFdmVudCIsImNyZWF0ZURvbmVBY3RvckV2ZW50IiwiaW52b2tlSWQiLCJhY3RvcklkIiwiY3JlYXRlSW5pdEV2ZW50IiwicmVwb3J0VW5oYW5kbGVkRXJyb3IiLCJzZXRUaW1lb3V0Iiwic3ltYm9sT2JzZXJ2YWJsZSIsIlN5bWJvbCIsIm9ic2VydmFibGUiLCJtYXRjaGVzU3RhdGUiLCJwYXJlbnRTdGF0ZUlkIiwiY2hpbGRTdGF0ZUlkIiwicGFyZW50U3RhdGVWYWx1ZSIsInRvU3RhdGVWYWx1ZSIsImNoaWxkU3RhdGVWYWx1ZSIsImV2ZXJ5IiwidG9TdGF0ZVBhdGgiLCJzdGF0ZUlkIiwiaXNBcnJheSIsInJlc3VsdCIsInNlZ21lbnQiLCJpIiwiY2hhciIsImNoYXJDb2RlQXQiLCJzdGF0ZVZhbHVlIiwiaXNNYWNoaW5lU25hcHNob3QiLCJzdGF0ZVBhdGgiLCJwYXRoVG9TdGF0ZVZhbHVlIiwibWFya2VyIiwicHJldmlvdXMiLCJtYXBWYWx1ZXMiLCJjb2xsZWN0aW9uIiwiaXRlcmF0ZWUiLCJjb2xsZWN0aW9uS2V5cyIsInRvQXJyYXlTdHJpY3QiLCJ0b0FycmF5IiwicmVzb2x2ZU91dHB1dCIsIm1hcHBlciIsInZhbHVlcyIsInNvbWUiLCJ2YWwiLCJlbnRyaWVzIiwiZmlsdGVyIiwibWFwIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiam9pbiIsIkFycmF5IiwiaXNFcnJvckFjdG9yRXZlbnQiLCJ0b1RyYW5zaXRpb25Db25maWdBcnJheSIsImNvbmZpZ0xpa2UiLCJ0cmFuc2l0aW9uTGlrZSIsIm5vcm1hbGl6ZVRhcmdldCIsInRvT2JzZXJ2ZXIiLCJuZXh0SGFuZGxlciIsImVycm9ySGFuZGxlciIsImNvbXBsZXRpb25IYW5kbGVyIiwiaXNPYnNlcnZlciIsImJpbmQiLCJjcmVhdGVJbnZva2VJZCIsInN0YXRlTm9kZUlkIiwiaW5kZXgiLCJtYXRjaCIsImFjdG9ycyIsImluZGV4U3RyIiwibm9kZUlkIiwibm9kZSIsImdldFN0YXRlTm9kZUJ5SWQiLCJpbnZva2VDb25maWciLCJpbnZva2UiLCJnZXRBbGxPd25FdmVudERlc2NyaXB0b3JzIiwiX25vZGVzIiwiZmxhdE1hcCIsInNuIiwib3duRXZlbnRzIiwiY3JlYXRlU2NoZWR1bGVkRXZlbnRJZCIsInNlc3Npb25JZCIsImlkQ291bnRlciIsImNyZWF0ZVN5c3RlbSIsInJvb3RBY3RvciIsIk1hcCIsImtleWVkQWN0b3JzIiwicmV2ZXJzZUtleWVkQWN0b3JzIiwiaW5zcGVjdGlvbk9ic2VydmVycyIsInRpbWVyTWFwIiwiY2xvY2siLCJzb3VyY2UiLCJNYXRoIiwicmFuZG9tIiwic2NoZWR1bGVkRXZlbnQiLCJzdGFydGVkQXQiLCJEYXRlIiwibm93Iiwic2NoZWR1bGVkRXZlbnRJZCIsIl9zbmFwc2hvdCIsIl9zY2hlZHVsZWRFdmVudHMiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2FuY2VsQWxsIiwic2VuZEluc3BlY3Rpb25FdmVudCIsInNpemUiLCJyZXNvbHZlZEluc3BlY3Rpb25FdmVudCIsInJvb3RJZCIsIm9ic2VydmVyIiwiX2Jvb2tJZCIsIl9yZWdpc3RlciIsIl91bnJlZ2lzdGVyIiwiX3NldCIsImV4aXN0aW5nIiwiaW5zcGVjdCIsIm9ic2VydmVyT3JGbiIsIl9zZW5kSW5zcGVjdGlvbkV2ZW50Iiwic291cmNlUmVmIiwiX3NlbmQiLCJzY2hlZHVsZWRFdmVudHMiLCJzY2hlZHVsZWRJZCIsIl9jbG9jayIsIl9sb2dnZXIiLCIkJEFDVE9SX1RZUEUiLCJkZWZhdWx0T3B0aW9ucyIsImZuIiwibXMiLCJBY3RvciIsIl9pbml0U3RhdGUiLCJwZXJzaXN0ZWRTdGF0ZSIsIl9hY3RvclNjb3BlIiwidXBkYXRlIiwiZGVmZXJyZWRGbiIsIl9kZWZlcnJlZCIsInNoaWZ0Iiwib2JzZXJ2ZXJzIiwiX3N0b3BQcm9jZWR1cmUiLCJfY29tcGxldGUiLCJfZG9uZUV2ZW50IiwiX2Vycm9yIiwibmV4dExpc3RlbmVyT3JPYnNlcnZlciIsImVycm9yTGlzdGVuZXIiLCJjb21wbGV0ZUxpc3RlbmVyIiwib24iLCJoYW5kbGVyIiwibGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lcnMiLCJ3cmFwcGVkSGFuZGxlciIsIlJ1bm5pbmciLCJfc3luY1NuYXBzaG90IiwiX3N5c3RlbUlkIiwiaW5pdEV2ZW50IiwiYXR0YWNoRGV2VG9vbHMiLCJtYWlsYm94IiwibmV4dFN0YXRlIiwiY2F1Z2h0RXJyb3IiLCJfc3RvcCIsIk5vdFN0YXJ0ZWQiLCJzdG9wIiwiX3JlcG9ydEVycm9yIiwicmVwb3J0RXJyb3IiLCJlcnIyIiwiZXZlbnRTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInJlc29sdmVkRGV2VG9vbHNBZGFwdGVyIiwidG9KU09OIiwieHN0YXRlJCR0eXBlIiwicmVmIiwicmVzb2x2ZWRPcHRpb25zIiwiY2hpbGQiLCJlbWl0dGVkRXZlbnQiLCJ3aWxkY2FyZExpc3RlbmVyIiwiYWxsTGlzdGVuZXJzIiwiYWN0aW9uRXhlY3V0b3IiLCJleGVjIiwic2F2ZUV4ZWN1dGluZ0N1c3RvbUFjdGlvbiIsImluZm8iLCJpbnRlcnByZXQiLCJyZXNvbHZlQ2FuY2VsIiwic2VuZElkIiwicmVzb2x2ZWRTZW5kSWQiLCJleGVjdXRlQ2FuY2VsIiwicmVzb2x2ZVNwYXduIiwiX2FjdGlvblBhcmFtcyIsInJlc29sdmVkSWQiLCJyZXNvbHZlZElucHV0IiwiZXhlY3V0ZVNwYXduIiwicmVzb2x2ZVN0b3AiLCJhY3RvclJlZk9yU3RyaW5nIiwicmVzb2x2ZWRBY3RvclJlZiIsImV4ZWN1dGVTdG9wIiwiY2hlY2tTdGF0ZUluIiwiaXNTdGF0ZUlkIiwibWF0Y2hlcyIsInN0YXRlSW4iLCJjaGVja05vdCIsImd1YXJkcyIsIm5vdCIsImNoZWNrQW5kIiwiYW5kIiwiY2hlY2tPciIsIm9yIiwiaXNJbmxpbmUiLCJyZXNvbHZlZCIsImd1YXJkQXJncyIsImd1YXJkUGFyYW1zIiwiYnVpbHRpbkd1YXJkIiwiaXNBdG9taWNTdGF0ZU5vZGUiLCJzdGF0ZU5vZGUiLCJnZXRDaGlsZHJlbiIsInN0YXRlcyIsImdldFByb3BlckFuY2VzdG9ycyIsInRvU3RhdGVOb2RlIiwiYW5jZXN0b3JzIiwibSIsImdldEFsbFN0YXRlTm9kZXMiLCJzdGF0ZU5vZGVzIiwibm9kZVNldCIsImFkakxpc3QiLCJnZXRBZGpMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlTm9kZXNXaXRoVGhlaXJBbmNlc3RvcnMiLCJoYXMiLCJpbml0aWFsU3RhdGVzIiwiaW5pdGlhbFN0YXRlTm9kZSIsImdldFZhbHVlRnJvbUFkaiIsImJhc2VOb2RlIiwiY2hpbGRTdGF0ZU5vZGVzIiwiY2hpbGRTdGF0ZU5vZGUiLCJnZXRTdGF0ZVZhbHVlIiwicm9vdE5vZGUiLCJpc0luRmluYWxTdGF0ZSIsInN0YXRlTm9kZVNldCIsInN0ciIsImdldENhbmRpZGF0ZXMiLCJyZWNlaXZlZEV2ZW50VHlwZSIsImNhbmRpZGF0ZXMiLCJ0cmFuc2l0aW9ucyIsImV2ZW50RGVzY3JpcHRvciIsImVuZHNXaXRoIiwidGVzdCIsInBhcnRpYWxFdmVudFRva2VucyIsInNwbGl0IiwiZXZlbnRUb2tlbnMiLCJ0b2tlbkluZGV4IiwicGFydGlhbEV2ZW50VG9rZW4iLCJldmVudFRva2VuIiwiaXNMYXN0VG9rZW4iLCJzb3J0IiwiZ2V0RGVsYXllZFRyYW5zaXRpb25zIiwiYWZ0ZXJDb25maWciLCJhZnRlciIsIm11dGF0ZUVudHJ5RXhpdCIsImFmdGVyRXZlbnQiLCJldmVudFR5cGUiLCJlbnRyeSIsImV4aXQiLCJkZWxheWVkVHJhbnNpdGlvbnMiLCJjb25maWdUcmFuc2l0aW9uIiwicmVzb2x2ZWRUcmFuc2l0aW9uIiwiTnVtYmVyIiwiaXNOYU4iLCJkZWxheWVkVHJhbnNpdGlvbiIsImZvcm1hdFRyYW5zaXRpb24iLCJkZXNjcmlwdG9yIiwidHJhbnNpdGlvbkNvbmZpZyIsIm5vcm1hbGl6ZWRUYXJnZXQiLCJyZWVudGVyIiwicmVzb2x2ZVRhcmdldCIsImNvbmQiLCJ0IiwiZm9ybWF0VHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uc0NvbmZpZyIsIm9uRG9uZSIsImludm9rZURlZiIsIm9uRXJyb3IiLCJvblNuYXBzaG90IiwiZm9ybWF0SW5pdGlhbFRyYW5zaXRpb24iLCJfdGFyZ2V0IiwidGFyZ2V0cyIsImlzSW50ZXJuYWxUYXJnZXQiLCJnZXRTdGF0ZU5vZGVCeVBhdGgiLCJ0YXJnZXRTdGF0ZU5vZGUiLCJtZXNzYWdlIiwicmVzb2x2ZUhpc3RvcnlEZWZhdWx0VHJhbnNpdGlvbiIsImluaXRpYWwiLCJpc0hpc3RvcnlOb2RlIiwiZ2V0SW5pdGlhbFN0YXRlTm9kZXMiLCJpbml0aWFsU3RhdGUiLCJhbmNlc3RvciIsIml0ZXIiLCJkZXNjU3RhdGVOb2RlIiwiZ2V0U3RhdGVOb2RlIiwic3RhdGVLZXkiLCJhcnJheVN0YXRlUGF0aCIsImN1cnJlbnRTdGF0ZU5vZGUiLCJnZXRTdGF0ZU5vZGVzIiwiY2hpbGRTdGF0ZUtleXMiLCJzdWJTdGF0ZUtleSIsIkJvb2xlYW4iLCJyb290IiwiY29uY2F0IiwicmVkdWNlIiwiYWxsU3ViU3RhdGVOb2RlcyIsInN1YlN0YXRlTm9kZSIsInN1YlN0YXRlTm9kZXMiLCJ0cmFuc2l0aW9uQXRvbWljTm9kZSIsInRyYW5zaXRpb25Db21wb3VuZE5vZGUiLCJzdWJTdGF0ZUtleXMiLCJ0cmFuc2l0aW9uTm9kZSIsInRyYW5zaXRpb25QYXJhbGxlbE5vZGUiLCJhbGxJbm5lclRyYW5zaXRpb25zIiwic3ViU3RhdGVWYWx1ZSIsImlubmVyVHJhbnNpdGlvbnMiLCJnZXRIaXN0b3J5Tm9kZXMiLCJpc0Rlc2NlbmRhbnQiLCJwYXJlbnRTdGF0ZU5vZGUiLCJoYXNJbnRlcnNlY3Rpb24iLCJzMSIsInMyIiwic2V0MSIsInNldDIiLCJpdGVtIiwicmVtb3ZlQ29uZmxpY3RpbmdUcmFuc2l0aW9ucyIsImVuYWJsZWRUcmFuc2l0aW9ucyIsImhpc3RvcnlWYWx1ZSIsImZpbHRlcmVkVHJhbnNpdGlvbnMiLCJ0MSIsInQxUHJlZW1wdGVkIiwidHJhbnNpdGlvbnNUb1JlbW92ZSIsInQyIiwiY29tcHV0ZUV4aXRTZXQiLCJ0MyIsImZyb20iLCJmaW5kTGVhc3RDb21tb25BbmNlc3RvciIsImhlYWQiLCJ0YWlsIiwiZ2V0RWZmZWN0aXZlVGFyZ2V0U3RhdGVzIiwidGFyZ2V0Tm9kZSIsImdldFRyYW5zaXRpb25Eb21haW4iLCJ0YXJnZXRTdGF0ZXMiLCJsY2EiLCJzdGF0ZXNUb0V4aXQiLCJkb21haW4iLCJhcmVTdGF0ZU5vZGVDb2xsZWN0aW9uc0VxdWFsIiwicHJldlN0YXRlTm9kZXMiLCJuZXh0U3RhdGVOb2RlU2V0IiwibWljcm9zdGVwIiwiY3VycmVudFNuYXBzaG90IiwiaXNJbml0aWFsIiwiaW50ZXJuYWxRdWV1ZSIsIm11dFN0YXRlTm9kZVNldCIsImV4aXRTdGF0ZXMiLCJyZXNvbHZlQWN0aW9uc0FuZENvbnRleHQiLCJlbnRlclN0YXRlcyIsIm5leHRTdGF0ZU5vZGVzIiwib3JkZXIiLCJnZXRNYWNoaW5lT3V0cHV0Iiwicm9vdENvbXBsZXRpb25Ob2RlIiwiZG9uZVN0YXRlRXZlbnQiLCJuZXh0U25hcHNob3QiLCJzdGF0ZXNUb0VudGVyIiwic3RhdGVzRm9yRGVmYXVsdEVudHJ5IiwiY29tcHV0ZUVudHJ5U2V0IiwiY29tcGxldGVkTm9kZXMiLCJzdGF0ZU5vZGVUb0VudGVyIiwiaW5pdGlhbEFjdGlvbnMiLCJhbmNlc3Rvck1hcmtlciIsImFkZERlc2NlbmRhbnRTdGF0ZXNUb0VudGVyIiwiYWRkQW5jZXN0b3JTdGF0ZXNUb0VudGVyIiwiaGlzdG9yeVN0YXRlTm9kZXMiLCJhZGRQcm9wZXJBbmNlc3RvclN0YXRlc1RvRW50ZXIiLCJoaXN0b3J5RGVmYXVsdFRyYW5zaXRpb24iLCJyZWVudHJhbmN5RG9tYWluIiwiYW5jIiwiX2FjdGlvbkV4ZWN1dG9yIiwiY2hhbmdlZEhpc3RvcnkiLCJleGl0U3RhdGVOb2RlIiwiaGlzdG9yeU5vZGUiLCJwcmVkaWNhdGUiLCJoaXN0b3J5IiwiZGVmIiwiZ2V0QWN0aW9uIiwiYWN0aW9uVHlwZSIsInJlc29sdmVBbmRFeGVjdXRlQWN0aW9uc1dpdGhDb250ZXh0IiwicmV0cmllcyIsImludGVybWVkaWF0ZVNuYXBzaG90IiwicmVzb2x2ZWRBY3Rpb24iLCJuYW1lIiwiYnVpbHRpbkFjdGlvbiIsIm1hY3Jvc3RlcCIsIm1pY3Jvc3RhdGVzIiwiYWRkTWljcm9zdGF0ZSIsIm1pY3Jvc3RhdGUiLCJfdHJhbnNpdGlvbnMiLCJzdG9wQ2hpbGRyZW4iLCJuZXh0RXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc0VyciIsInNlbGVjdFRyYW5zaXRpb25zIiwic2hvdWxkU2VsZWN0RXZlbnRsZXNzVHJhbnNpdGlvbnMiLCJzZWxlY3RFdmVudGxlc3NUcmFuc2l0aW9ucyIsInByZXZpb3VzU3RhdGUiLCJnZXRUcmFuc2l0aW9uRGF0YSIsImVuYWJsZWRUcmFuc2l0aW9uU2V0IiwiYXRvbWljU3RhdGVzIiwibG9vcCIsImFsd2F5cyIsInJlc29sdmVTdGF0ZVZhbHVlIiwiYWxsU3RhdGVOb2RlcyIsIm1hY2hpbmVTbmFwc2hvdE1hdGNoZXMiLCJ0ZXN0VmFsdWUiLCJtYWNoaW5lU25hcHNob3RIYXNUYWciLCJoYXNUYWciLCJ0YWciLCJ0YWdzIiwibWFjaGluZVNuYXBzaG90Q2FuIiwiY2FuIiwidHJhbnNpdGlvbkRhdGEiLCJtYWNoaW5lU25hcHNob3RUb0pTT04iLCJub2RlcyIsImdldE1ldGEiLCJqc29uVmFsdWVzIiwibWFjaGluZVNuYXBzaG90R2V0TWV0YSIsImFjYyIsIm1ldGEiLCJjcmVhdGVNYWNoaW5lU25hcHNob3QiLCJjaGlsZHJlbkpzb24iLCJwZXJzaXN0ZWQiLCJwZXJzaXN0Q29udGV4dCIsImNvbnRleHRQYXJ0IiwiY29weSIsInJlc29sdmVSYWlzZSIsImV4ZWN1dGVSYWlzZSIsIiQiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk4iLCJRIiwiZCIsImciLCJoIiwiaiIsImsiLCJuIiwibyIsInAiLCJxIiwiciIsInUiLCJ2IiwieCIsInkiLCJfX3Vuc2FmZV9nZXRBbGxPd25FdmVudERlc2NyaXB0b3JzIiwiYXNzZXJ0RXZlbnQiLCJ0eXBlcyIsInR5cGVzVGV4dCIsImNhY2hlIiwibWVtbyIsIm9iamVjdCIsIm1lbW9pemVkRGF0YSIsIkVNUFRZX09CSkVDVCIsInRvU2VyaWFsaXphYmxlQWN0aW9uIiwiU3RhdGVOb2RlIiwiX2luaXRpYWxpemUiLCJkZWZpbml0aW9uIiwidmVyc2lvbiIsImZsYXQiLCJkZXNjcmlwdGlvbiIsInNvdXJjZU5hbWUiLCJpbnZva2VEZWZWYWx1ZXMiLCJzZWxlY3RlZFRyYW5zaXRpb24iLCJjYW5kaWRhdGUiLCJyZXNvbHZlZENvbnRleHQiLCJndWFyZFBhc3NlZCIsImd1YXJkVHlwZSIsImV2ZW50cyIsInBhdGgiLCJfa2V5IiwiX21hY2hpbmUiLCJpZE1hcCIsInN0YXRlQ29uZmlnIiwiU3RhdGVNYWNoaW5lIiwicHJvdmlkZSIsInJlc29sdmVTdGF0ZSIsInJlc29sdmVkU3RhdGVWYWx1ZSIsImdldFByZUluaXRpYWxTdGF0ZSIsInByZUluaXRpYWwiLCJwcmVJbml0aWFsU3RhdGUiLCJtYWNyb1N0YXRlIiwiZnVsbFBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJyZXNvbHZlZFN0YXRlSWQiLCJzbmFwc2hvdENoaWxkcmVuIiwiYWN0b3JEYXRhIiwiY2hpbGRTdGF0ZSIsInJlc3RvcmVkU25hcHNob3QiLCJzZWVuIiwicmV2aXZlQ29udGV4dCIsInNjaGVtYXMiLCJfX3hzdGF0ZW5vZGUiLCJjcmVhdGVNYWNoaW5lIiwiY3JlYXRlSW5lcnRBY3RvclNjb3BlIiwiYWN0b3JMb2dpYyIsImluZXJ0QWN0b3JTY29wZSIsImdldE5leHRTbmFwc2hvdCIsInNldHVwIiwiU2ltdWxhdGVkQ2xvY2siLCJfbm93IiwiZ2V0SWQiLCJfaWQiLCJfZmx1c2hpbmdJbnZhbGlkYXRlZCIsIl9mbHVzaGluZyIsInRpbWVvdXRzIiwidGltZSIsImZsdXNoVGltZW91dHMiLCJzb3J0ZWQiLCJfaWRBIiwidGltZW91dEEiLCJfaWRCIiwidGltZW91dEIiLCJlbmRBIiwiZW5kQiIsImNhbGwiLCJpbmNyZW1lbnQiLCJ0b1Byb21pc2UiLCJhY3RvciIsInJlamVjdCIsImV4ZWN1dGFibGVBY3Rpb25zIiwiaW5pdGlhbFRyYW5zaXRpb24iLCJkZWZhdWx0V2FpdEZvck9wdGlvbnMiLCJJbmZpbml0eSIsIndhaXRGb3IiLCJyZXMiLCJyZWoiLCJhYm9ydGVkIiwicmVhc29uIiwiZG9uZSIsImhhbmRsZSIsInN1YiIsImFib3J0TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tFbWl0dGVkIiwiZW1pdHRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmYWlscyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTUVUSE9EX05BTUUiLCJhcmd1bWVudCIsIm1ldGhvZCIsInVuY3VycnlUaGlzIiwic3RyaW5nU2xpY2UiLCJpdCIsImhhc093biIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImV4Y2VwdGlvbnMiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkRFU0NSSVBUT1JTIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaXNDYWxsYWJsZSIsIm1ha2VCdWlsdEluIiwiZGVmaW5lR2xvYmFsUHJvcGVydHkiLCJzaW1wbGUiLCJ1bnNhZmUiLCJub25Db25maWd1cmFibGUiLCJub25Xcml0YWJsZSIsImlzT2JqZWN0IiwiZG9jdW1lbnQiLCJFWElTVFMiLCJjcmVhdGVFbGVtZW50IiwiRU5WSVJPTk1FTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJTdHJpbmciLCJwcm9jZXNzIiwiRGVubyIsInZlcnNpb25zIiwidjgiLCJjbGFzc29mIiwidXNlckFnZW50U3RhcnRzV2l0aCIsInN0cmluZyIsIkJ1biIsImNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSIsImRlZmluZUJ1aWx0SW4iLCJjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzIiwiaXNGb3JjZWQiLCJUQVJHRVQiLCJHTE9CQUwiLCJTVEFUSUMiLCJzdGF0IiwiRk9SQ0VEIiwidGFyZ2V0UHJvcGVydHkiLCJzb3VyY2VQcm9wZXJ0eSIsInByb3RvdHlwZSIsImRvbnRDYWxsR2V0U2V0IiwiZm9yY2VkIiwic2hhbSIsImhhc093blByb3BlcnR5IiwiTkFUSVZFX0JJTkQiLCJGdW5jdGlvbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXREZXNjcmlwdG9yIiwiUFJPUEVSIiwic29tZXRoaW5nIiwiQ09ORklHVVJBQkxFIiwidW5jdXJyeVRoaXNXaXRoQmluZCIsImFGdW5jdGlvbiIsIm5hbWVzcGFjZSIsIiRPYmplY3QiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInN0b3JlIiwiZnVuY3Rpb25Ub1N0cmluZyIsImluc3BlY3RTb3VyY2UiLCJkb2N1bWVudEFsbCIsImFsbCIsInJlcGxhY2VtZW50IiwiZmVhdHVyZSIsImRldGVjdGlvbiIsIm5vcm1hbGl6ZSIsIlBPTFlGSUxMIiwiTkFUSVZFIiwidG9Mb3dlckNhc2UiLCJnZXRCdWlsdEluIiwiaXNQcm90b3R5cGVPZiIsIlVTRV9TWU1CT0xfQVNfVUlEIiwiJFN5bWJvbCIsIkNPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FIiwiSW50ZXJuYWxTdGF0ZU1vZHVsZSIsImVuZm9yY2VJbnRlcm5hbFN0YXRlIiwiZW5mb3JjZSIsImdldEludGVybmFsU3RhdGUiLCIkU3RyaW5nIiwiQ09ORklHVVJBQkxFX0xFTkdUSCIsIlRFTVBMQVRFIiwiZ2V0dGVyIiwic2V0dGVyIiwiYXJpdHkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSIsInRvSW5kZXhlZE9iamVjdCIsInRvUHJvcGVydHlLZXkiLCJJRThfRE9NX0RFRklORSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbnRlcm5hbE9iamVjdEtleXMiLCJlbnVtQnVnS2V5cyIsImhpZGRlbktleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTkFTSE9STl9CVUciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlIiwiYW5PYmplY3QiLCJWOF9WRVJTSU9OIiwic3ltYm9sIiwiSW5kZXhlZE9iamVjdCIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJ0b1ByaW1pdGl2ZSIsImlzU3ltYm9sIiwiTkFUSVZFX1NZTUJPTCIsIml0ZXJhdG9yIiwiJHJlZHVjZSIsImxlZnQiLCJhcnJheU1ldGhvZElzU3RyaWN0IiwiQ0hST01FX1ZFUlNJT04iLCJJU19OT0RFIiwiQ0hST01FX0JVRyIsInByb3RvIiwiY2FsbGJhY2tmbiJdLCJzb3VyY2VSb290IjoiIn0=