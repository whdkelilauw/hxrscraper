/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Extension/src/background/storages/browser-storage.ts":
/*!**************************************************************!*\
  !*** ./Extension/src/background/storages/browser-storage.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserStorage: () => (/* binding */ BrowserStorage)
/* harmony export */ });
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
/**
 * Wrapper for StorageArea with dev-friendly interface.
 *
 * @template Data The type of the value stored in the storage.
 */ class BrowserStorage {
    /**
     * Sets data to storage.
     *
     * @param key Storage key.
     * @param value Storage value.
     */ async set(key, value) {
        await this.storage.set({
            [key]: value
        });
    }
    /**
     * Returns data from storage.
     *
     * @param key Storage key.
     *
     * @returns Storage value.
     */ async get(key) {
        return this.storage.get(key).then((data)=>data[key]);
    }
    /**
     * Removes data from storage.
     *
     * @param key Storage key.
     */ async remove(key) {
        await this.storage.remove(key);
    }
    /**
     * Sets multiple key-value pairs in the storage.
     *
     * @param data The key-value pairs to set.
     *
     * @returns True if all operations were successful, false otherwise.
     *
     * @example
     * ```ts
     * const storage = new Storage();
     * await storage.setMultiple({
     *    key1: 'value1',
     *    key2: 'value2',
     * });
     * ```
     */ // TODO: Implement some kind of transaction to ensure atomicity, if possible
    // Note: We only use this method for Firefox if "Never Remember History" is enabled
    async setMultiple(data) {
        try {
            await this.storage.set(data);
            return true;
        } catch (e) {
            return false;
        }
    }
    /**
     * Removes multiple key-value pairs from the storage.
     *
     * @param keys The keys to remove.
     *
     * @returns True if all operations were successful, false otherwise.
     */ async removeMultiple(keys) {
        await this.storage.remove(keys);
        return true;
    }
    /**
     * Get the entire contents of the storage.
     *
     * @returns Promise that resolves with the entire contents of the storage.
     */ async entries() {
        return this.storage.get(null);
    }
    /**
     * Get all keys from the storage.
     *
     * @returns Promise that resolves with all keys from the storage.
     */ async keys() {
        return Object.keys(await this.entries());
    }
    /**
     * Checks if the storage has a key.
     *
     * @param key The key to check.
     *
     * @returns True if the key exists, false otherwise.
     */ async has(key) {
        return this.storage.get(key).then((data)=>key in data);
    }
    /**
     * Clears the storage.
     */ async clear() {
        await this.storage.clear();
    }
    /**
     * Constructs an instance of the BrowserStorage class.
     *
     * @param storage The storage area to use.
     */ constructor(storage){
        _define_property(this, "storage", void 0);
        this.storage = storage;
    }
}


/***/ }),

/***/ "./Extension/src/background/storages/hybrid-storage.ts":
/*!*************************************************************!*\
  !*** ./Extension/src/background/storages/hybrid-storage.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HybridStorage: () => (/* binding */ HybridStorage)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "./node_modules/.pnpm/nanoid@3.3.6/node_modules/nanoid/index.browser.js");
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superjson */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/index.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "./node_modules/.pnpm/idb@8.0.2/node_modules/idb/build/index.js");
/* harmony import */ var _browser_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser-storage */ "./Extension/src/background/storages/browser-storage.ts");
/* harmony import */ var _idb_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idb-storage */ "./Extension/src/background/storages/idb-storage.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * This file implements a hybrid storage solution that abstracts over different storage mechanisms,
 * providing a unified API for storage operations. It automatically chooses between IndexedDB storage and
 * a fallback storage mechanism based on the environment's capabilities.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}






/**
 * Implements a hybrid storage mechanism that can switch between IndexedDB and a fallback storage
 * based on browser capabilities and environment constraints. This class adheres to the StorageInterface,
 * allowing for asynchronous get and set operations.
 *
 * @template Data The type of the value stored in the storage.
 */ class HybridStorage {
    /**
     * Checks if the given storage is an instance of IDBStorage.
     *
     * @param storage The storage instance to check.
     *
     * @returns True if the storage is an instance of IDBStorage, false otherwise.
     */ static isIdbStorage(storage) {
        return storage instanceof _idb_storage__WEBPACK_IMPORTED_MODULE_3__.IDBStorage;
    }
    /**
     * Determines the appropriate storage mechanism to use. If IndexedDB is supported, it uses IDBStorage;
     * otherwise, it falls back to a generic Storage mechanism. This selection is made once and cached
     * for subsequent operations.
     *
     * @returns The storage instance to be used for data operations.
     */ async getStorage() {
        if (this.storage) {
            return this.storage;
        }
        if (await HybridStorage.isIDBSupported()) {
            this.storage = new _idb_storage__WEBPACK_IMPORTED_MODULE_3__.IDBStorage();
        } else {
            this.storage = new _browser_storage__WEBPACK_IMPORTED_MODULE_4__.BrowserStorage(this.fallbackStorage);
        }
        return this.storage;
    }
    /**
     * Checks if the given value is a SuperJSONResult.
     *
     * @param value The value to check.
     *
     * @returns True if the value is a SuperJSONResult, false otherwise.
     */ static isSuperJSONResult(value) {
        return typeof value === 'object' && value !== null && HybridStorage.SUPERJSON_META_KEY in value;
    }
    /**
     * Checks if IndexedDB is supported in the current environment.
     * This is determined by trying to open a test database; if successful, IndexedDB is supported.
     * The result of this check is cached to prevent multiple checks.
     *
     * @returns True if IndexedDB is supported, false otherwise.
     */ static async isIDBSupported() {
        if (HybridStorage.isIDBCapabilityChecked) {
            return HybridStorage.idbSupported;
        }
        if (HybridStorage.idbCapabilityCheckerPromise) {
            return HybridStorage.idbCapabilityCheckerPromise;
        }
        HybridStorage.idbCapabilityCheckerPromise = (async ()=>{
            try {
                const testDbName = `${HybridStorage.TEST_IDB_NAME_PREFIX}${(0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)()}`;
                const testDb = await (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDB)(testDbName, HybridStorage.TEST_IDB_VERSION);
                testDb.close();
                await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDB)(testDbName);
                HybridStorage.idbSupported = true;
            } catch (e) {
                HybridStorage.idbSupported = false;
            }
            HybridStorage.isIDBCapabilityChecked = true;
            return HybridStorage.idbSupported;
        })();
        return HybridStorage.idbCapabilityCheckerPromise;
    }
    /**
     * Asynchronously sets a value for a given key in the selected storage mechanism.
     *
     * @param key The key under which the value is stored.
     * @param value The value to be stored.
     *
     * @returns A promise that resolves when the operation is complete.
     */ async set(key, value) {
        const storage = await this.getStorage();
        // If the selected storage mechanism is IndexedDB, we store the value as is,
        // as IndexedDB can store complex objects.
        if (HybridStorage.isIdbStorage(storage)) {
            return storage.set(key, value);
        }
        const serialized = HybridStorage.serialize(value);
        // If the serialized value contains a meta key, it means that the value provided
        // contains special data that are not JSON-serializable and require SuperJSON serialization,
        // like typed arrays, dates, and other complex objects.
        // In this case, we store the SuperJSON-serialized value.
        if (HybridStorage.SUPERJSON_META_KEY in serialized) {
            return storage.set(key, serialized);
        }
        // If the serialized value does not contain a meta key, it means that the value
        // provided was a primitive value or a plain object that is JSON-serializable,
        // and it does not contain any special data that requires SuperJSON serialization.
        // In this case, we store the value as is.
        return storage.set(key, value);
    }
    /**
     * Asynchronously retrieves the value for a given key from the selected storage mechanism.
     *
     * @param key The key whose value is to be retrieved.
     *
     * @returns A promise that resolves with the retrieved value, or undefined if the key does not exist.
     */ async get(key) {
        const storage = await this.getStorage();
        // If the selected storage mechanism is IndexedDB, we return the value as is,
        // as IndexedDB can store complex objects.
        if (HybridStorage.isIdbStorage(storage)) {
            return storage.get(key);
        }
        const value = await storage.get(key);
        // Do not attempt to deserialize undefined values.
        if (value === undefined) {
            return undefined;
        }
        // If the value is a SuperJSON-serialized object, we need to deserialize it.
        if (HybridStorage.isSuperJSONResult(value)) {
            return HybridStorage.deserialize(value);
        }
        // Otherwise, we return the value as is.
        return value;
    }
    /**
     * Asynchronously removes the value for a given key from the selected storage mechanism.
     *
     * @param key The key whose value is to be removed.
     */ async remove(key) {
        const storage = await this.getStorage();
        await storage.remove(key);
    }
    /**
     * Atomic set operation for multiple key-value pairs.
     * This method are using transaction to ensure atomicity, if any of the operations fail,
     * the entire operation is rolled back. This helps to prevent data corruption / inconsistency.
     *
     * @param data The key-value pairs to set.
     *
     * @returns True if all operations were successful, false otherwise.
     *
     * @example
     * ```ts
     * const storage = new HybridStorage();
     * await storage.setMultiple({
     *    key1: 'value1',
     *    key2: 'value2',
     * });
     * ```
     */ async setMultiple(data) {
        const storage = await this.getStorage();
        if (HybridStorage.isIdbStorage(storage)) {
            var _ref;
            return (_ref = await storage.setMultiple(data)) !== null && _ref !== void 0 ? _ref : false;
        }
        const cloneData = Object.entries(data).reduce((acc, [key, value])=>{
            const serialized = superjson__WEBPACK_IMPORTED_MODULE_1__.SuperJSON.serialize(value);
            // If the serialized value contains a meta key, it means that the value provided
            // contains special data that are not JSON-serializable and require SuperJSON serialization,
            // like typed arrays, dates, and other complex objects.
            // In this case, we store the SuperJSON-serialized value.
            if (HybridStorage.SUPERJSON_META_KEY in serialized) {
                acc[key] = serialized;
                return acc;
            }
            // If the serialized value does not contain a meta key, it means that the value
            // provided was a primitive value or a plain object that is JSON-serializable,
            // and it does not contain any special data that requires SuperJSON serialization.
            // In this case, we store the value as is.
            acc[key] = value;
            return acc;
        }, {});
        var _ref1;
        return (_ref1 = await storage.setMultiple(cloneData)) !== null && _ref1 !== void 0 ? _ref1 : false;
    }
    /**
     * Removes multiple key-value pairs from the storage.
     *
     * @param keys The keys to remove.
     *
     * @returns True if all operations were successful, false otherwise.
     */ async removeMultiple(keys) {
        const storage = await this.getStorage();
        var _ref;
        return (_ref = await storage.removeMultiple(keys)) !== null && _ref !== void 0 ? _ref : false;
    }
    /**
     * Get the entire contents of the storage.
     *
     * @returns Promise that resolves with the entire contents of the storage.
     */ async entries() {
        const storage = await this.getStorage();
        if (HybridStorage.isIdbStorage(storage)) {
            return storage.entries();
        }
        const entries = await storage.entries();
        return Object.entries(entries).reduce((acc, [key, value])=>{
            acc[key] = HybridStorage.isSuperJSONResult(value) ? HybridStorage.deserialize(value) : value;
            return acc;
        }, {});
    }
    /**
     * Get all keys from the storage.
     *
     * @returns Promise that resolves with all keys from the storage.
     */ async keys() {
        const storage = await this.getStorage();
        return storage.keys();
    }
    /**
     * Check if a key exists in the storage.
     *
     * @param key The key to check.
     *
     * @returns True if the key exists, false otherwise.
     */ async has(key) {
        const storage = await this.getStorage();
        return storage.has(key);
    }
    /**
     * Clears the storage.
     */ async clear() {
        const storage = await this.getStorage();
        await storage.clear();
    }
    /**
     * Constructs an instance of the HybridStorage class.
     *
     * @param fallbackStorage The storage area to use when IndexedDB is not supported.
     */ constructor(fallbackStorage){
        /**
     * Holds the instance of the selected storage mechanism.
     *
     * @note We use SuperJSON to serialize and deserialize the data when using the fallback storage mechanism,
     * because it only supports storing JSON-serializable data.
     */ _define_property(this, "storage", null);
        /**
     * The storage area to use when IndexedDB is not supported.
     */ _define_property(this, "fallbackStorage", void 0);
        this.fallbackStorage = fallbackStorage;
    }
}
/**
     * A flag indicating whether IndexedDB support has already been checked.
     */ _define_property(HybridStorage, "isIDBCapabilityChecked", false);
/**
     * A promise that resolves to whether IndexedDB is supported in the environment.
     * This promise is used to cache the result of the support check to prevent multiple checks.
     */ _define_property(HybridStorage, "idbCapabilityCheckerPromise", null);
/**
     * A flag that stores the result of the IndexedDB support check.
     * If true, IndexedDB is supported in the environment.
     */ _define_property(HybridStorage, "idbSupported", false);
/**
     * Prefix for the test IndexedDB database name.
     * This test database is used to check if IndexedDB is supported in the current environment.
     */ _define_property(HybridStorage, "TEST_IDB_NAME_PREFIX", 'test_');
/**
     * Version number for the test IndexedDB database.
     */ _define_property(HybridStorage, "TEST_IDB_VERSION", 1);
/**
     * The key used to store metadata in SuperJSON-serialized data.
     */ _define_property(HybridStorage, "SUPERJSON_META_KEY", 'meta');
/**
     * Serializes the given data using SuperJSON.
     *
     * @param data The data to serialize.
     *
     * @returns The serialized data.
     */ _define_property(HybridStorage, "serialize", (data)=>superjson__WEBPACK_IMPORTED_MODULE_1__.SuperJSON.serialize(data));
/**
     * Deserializes the given data using SuperJSON.
     *
     * @param data The data to deserialize.
     *
     * @returns The deserialized data.
     */ _define_property(HybridStorage, "deserialize", (data)=>superjson__WEBPACK_IMPORTED_MODULE_1__.SuperJSON.deserialize(data));


/***/ }),

/***/ "./Extension/src/background/storages/idb-storage.ts":
/*!**********************************************************!*\
  !*** ./Extension/src/background/storages/idb-storage.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDBStorage: () => (/* binding */ IDBStorage)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/.pnpm/idb@8.0.2/node_modules/idb/build/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/logger */ "./Extension/src/common/logger.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}


/**
 * Provides a storage mechanism using IndexedDB. This class implements the
 * StorageInterface with asynchronous methods to interact with the database.
 *
 * @template Data The type of the value stored in the storage.
 */ class IDBStorage {
    /**
     * Ensures the database is opened before any operations. If the database
     * is not already opened, it opens the database.
     *
     * @returns The opened database instance.
     */ async getOpenedDb() {
        if (this.db) {
            return this.db;
        }
        if (this.dbGetterPromise) {
            return this.dbGetterPromise;
        }
        this.dbGetterPromise = (async ()=>{
            this.db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(this.name, this.version, {
                upgrade: (db)=>{
                    // Make sure the store exists
                    if (!db.objectStoreNames.contains(this.store)) {
                        db.createObjectStore(this.store);
                    }
                }
            });
            this.dbGetterPromise = null;
            return this.db;
        })();
        return this.dbGetterPromise;
    }
    /**
     * Retrieves a value by key from the store.
     *
     * @param key The key of the value to retrieve.
     *
     * @returns The value associated with the key.
     */ async get(key) {
        const db = await this.getOpenedDb();
        return db.get(this.store, key);
    }
    /**
     * Sets a value in the store with the specified key.
     *
     * @param key The key under which to store the value.
     * @param value The value to store.
     */ async set(key, value) {
        const db = await this.getOpenedDb();
        await db.put(this.store, value, key);
    }
    /**
     * Removes a value from the store by key.
     *
     * @param key The key of the value to remove.
     */ async remove(key) {
        const db = await this.getOpenedDb();
        await db.delete(this.store, key);
    }
    /**
     * Atomic set operation for multiple key-value pairs.
     * This method is using transaction to ensure atomicity, if any of the operations fail,
     * the entire operation is rolled back. This helps to prevent data corruption / inconsistency.
     *
     * @param data The key-value pairs to set.
     *
     * @returns True if all operations were successful, false otherwise.
     *
     * @example
     * ```ts
     * const storage = new IDBStorage();
     * await storage.setMultiple({
     *    key1: 'value1',
     *    key2: 'value2',
     * });
     * ```
     */ async setMultiple(data) {
        const db = await this.getOpenedDb();
        const tx = db.transaction(this.store, 'readwrite');
        try {
            await Promise.all(Object.entries(data).map(([key, value])=>tx.store.put(value, key)));
            await tx.done;
        } catch (e) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__.logger.error('[ext.IDBStorage.setMultiple]: error while setting multiple keys in the storage:', e);
            tx.abort();
            return false;
        }
        return true;
    }
    /**
     * Removes multiple key-value pairs from the storage.
     *
     * @param keys The keys to remove.
     *
     * @returns True if all operations were successful, false otherwise.
     */ async removeMultiple(keys) {
        const db = await this.getOpenedDb();
        const tx = db.transaction(this.store, 'readwrite');
        try {
            await Promise.all(keys.map((key)=>tx.store.delete(key)));
            await tx.done;
        } catch (e) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__.logger.error('[ext.IDBStorage.removeMultiple]: error while removing multiple keys from the storage:', e);
            tx.abort();
            return false;
        }
        return true;
    }
    /**
     * Get the entire contents of the storage.
     *
     * @returns Promise that resolves with the entire contents of the storage.
     */ async entries() {
        const db = await this.getOpenedDb();
        const entries = {};
        const tx = db.transaction(this.store, 'readonly');
        // eslint-disable-next-line no-restricted-syntax
        for await (const cursor of tx.store){
            const key = String(cursor.key);
            entries[key] = cursor.value;
        }
        return entries;
    }
    /**
     * Get all keys in the storage.
     *
     * @returns Promise that resolves with all keys in the storage.
     */ async keys() {
        const db = await this.getOpenedDb();
        const idbKeys = await db.getAllKeys(this.store);
        return idbKeys.map((key)=>key.toString());
    }
    /**
     * Check if a key exists in the storage.
     *
     * @param key The key to check.
     *
     * @returns True if the key exists, false otherwise.
     */ async has(key) {
        const db = await this.getOpenedDb();
        const idbKey = await db.getKey(this.store, key);
        return idbKey !== undefined;
    }
    /**
     * Clears the storage.
     */ async clear() {
        const db = await this.getOpenedDb();
        await db.clear(this.store);
    }
    /**
     * Constructs an instance of the IDBStorage class.
     *
     * @param [name=IDBStorage.DEFAULT_IDB_NAME] The name of the database.
     * @param [version=1] The version of the database.
     * @param [store=IDBStorage.DEFAULT_STORE_NAME] The name of the store within the database.
     */ constructor(name = IDBStorage.DEFAULT_IDB_NAME, version = IDBStorage.DEFAULT_IDB_VERSION, store = IDBStorage.DEFAULT_STORE_NAME){
        /**
     * Holds the instance of the IndexedDB database.
     */ _define_property(this, "db", null);
        /**
     * Promise to get IndexedDB database.
     */ _define_property(this, "dbGetterPromise", null);
        /**
     * The name of the database.
     */ _define_property(this, "name", void 0);
        /**
     * The version of the database. Used for upgrades.
     */ _define_property(this, "version", void 0);
        /**
     * The name of the store within the database.
     */ _define_property(this, "store", void 0);
        this.name = name;
        this.version = version;
        this.store = store;
    }
}
/**
     * The default name of the store within the database.
     */ _define_property(IDBStorage, "DEFAULT_STORE_NAME", 'defaultStore');
/**
     * The default version of the database.
     */ _define_property(IDBStorage, "DEFAULT_IDB_VERSION", 1);
/**
     * The default name of the database.
     */ _define_property(IDBStorage, "DEFAULT_IDB_NAME", 'adguardIDB');


/***/ }),

/***/ "./Extension/src/background/storages/shared-instances.ts":
/*!***************************************************************!*\
  !*** ./Extension/src/background/storages/shared-instances.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserStorage: () => (/* binding */ browserStorage)
/* harmony export */ });
/* unused harmony export hybridStorage */
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var _browser_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser-storage */ "./Extension/src/background/storages/browser-storage.ts");
/* harmony import */ var _hybrid_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hybrid-storage */ "./Extension/src/background/storages/hybrid-storage.ts");
/* harmony import */ var _idb_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idb-storage */ "./Extension/src/background/storages/idb-storage.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 




/**
 * Storage instance for accessing `browser.storage.local`.
 */ const browserStorage = new _browser_storage__WEBPACK_IMPORTED_MODULE_4__.BrowserStorage(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local);
/**
 * Storage instance for accessing `IndexedDB` with fallback to `browser.storage.local`.
 */ const hybridStorage = new _hybrid_storage__WEBPACK_IMPORTED_MODULE_2__.HybridStorage(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].storage.local);
// Expose storage instances to the global scope for debugging purposes,
// because it's hard to access them from the console in the background
// page or impossible from Application tab -> IndexedDB (showing empty page).
if (true) {
    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    self.hybridStorage = hybridStorage;
    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    self.HybridStorage = _hybrid_storage__WEBPACK_IMPORTED_MODULE_2__.HybridStorage;
    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    self.IDBStorage = _idb_storage__WEBPACK_IMPORTED_MODULE_3__.IDBStorage;
}


/***/ }),

/***/ "./Extension/src/common/i18n.ts":
/*!**************************************!*\
  !*** ./Extension/src/common/i18n.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18n: () => (/* binding */ I18n)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/**
 * @file
 * I18n file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
/**
 * Injects translations to DOM elements with i18n attributes
 */ class I18n {
    /**
     * Initializes injector.
     */ static init() {
        document.addEventListener('DOMContentLoaded', I18n.translate);
    }
    /**
     * Processes i18n injections
     */ static translate() {
        I18n.translateElements('i18n');
        I18n.translateAttributes('i18n-plhr', 'placeholder');
        I18n.translateAttributes('i18n-href', 'href');
        I18n.translateAttributes('i18n-title', 'title');
    }
    /**
     * Translates elements with specified {@link i18nAttributeName}
     *
     * @param i18nAttributeName - i18n attribute
     */ static translateElements(i18nAttributeName) {
        document.querySelectorAll(`[${i18nAttributeName}]`).forEach((el)=>{
            const message = I18n.getI18nMessage(el, i18nAttributeName);
            if (!message) {
                return;
            }
            I18n.translateElement(el, message);
        });
    }
    /**
     * Replaces content of {@link element} to translation
     *
     * @param element - target element
     * @param message - element text
     */ static translateElement(element, message) {
        try {
            // remove original content
            while(element.lastChild){
                element.removeChild(element.lastChild);
            }
            // append translated content
            I18n.processString(message, element);
        } catch (ex) {
        // Ignore exceptions
        }
    }
    /**
     * Creates translated {@link element} child nodes and appends it to parent
     *
     * @param html - html string
     * @param element - target element
     */ static processString(html, element) {
        let el;
        const match1 = /^([^]*?)<(a|strong|span|i)([^>]*)>(.*?)<\/\2>([^]*)$/m.exec(html);
        const match2 = /^([^]*?)<(br|input)([^>]*)\/?>([^]*)$/m.exec(html);
        if (match1) {
            // TODO: safe types
            /* eslint-disable @typescript-eslint/no-non-null-assertion */ I18n.processString(match1[1], element);
            el = I18n.createElement(match1[2], match1[3]);
            I18n.processString(match1[4], el);
            element.appendChild(el);
            I18n.processString(match1[5], element);
        } else if (match2) {
            I18n.processString(match2[1], element);
            el = I18n.createElement(match2[2], match2[3]);
            element.appendChild(el);
            I18n.processString(match2[4], element);
        /* eslint-enable @typescript-eslint/no-non-null-assertion */ } else {
            element.appendChild(document.createTextNode(html.replace(/&nbsp;/g, '\u00A0')));
        }
    }
    /**
     * Creates elements with specified attributes.
     *
     * @param tagName - element tag
     * @param attributes - attributes string value
     *
     * @returns created element
     */ static createElement(tagName, attributes) {
        const el = document.createElement(tagName);
        if (!attributes) {
            return el;
        }
        attributes.split(/([a-z]+='[^']+')/).forEach((attr)=>{
            if (!attr) {
                return;
            }
            const index = attr.indexOf('=');
            let attrName;
            let attrValue;
            if (index > 0) {
                attrName = attr.substring(0, index);
                attrValue = attr.substring(index + 2, attr.length - 1);
            }
            if (attrName && attrValue) {
                el.setAttribute(attrName, attrValue);
            }
        });
        return el;
    }
    /**
     * Finds all elements with specified {@link i18nAttributeName},
     * translates attributes and sets to elements {@link attributeName}
     *
     * @param i18nAttributeName -  name of i18n attribute
     * @param attributeName  - name of translated attribute
     */ static translateAttributes(i18nAttributeName, attributeName) {
        document.querySelectorAll(`[${i18nAttributeName}]`).forEach((element)=>{
            const message = I18n.getI18nMessage(element, i18nAttributeName);
            if (!message) {
                return;
            }
            element.setAttribute(attributeName, message);
        });
    }
    /**
     * Returns element attribute value and translate it.
     *
     * @param element - page element
     * @param attributeName - name of element attribute
     *
     * @returns translated attribute value
     */ static getI18nMessage(element, attributeName) {
        const attribute = element.getAttribute(attributeName);
        if (!attribute) {
            return null;
        }
        return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].i18n.getMessage(attribute);
    }
}


/***/ }),

/***/ "./Extension/src/common/logger.ts":
/*!****************************************!*\
  !*** ./Extension/src/common/logger.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adguard_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adguard/logger */ "./node_modules/.pnpm/@adguard+logger@2.0.0/node_modules/@adguard/logger/dist/es/index.mjs");
/* harmony import */ var _background_storages_shared_instances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../background/storages/shared-instances */ "./Extension/src/background/storages/shared-instances.ts");
/**
 * @file
 *
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}




/**
 * Extended logger with persistent log level setting.
 * Extends the base Logger class with browser storage integration
 * for saving and retrieving log level preferences.
 */ class ExtendedLogger extends _adguard_logger__WEBPACK_IMPORTED_MODULE_2__.Logger {
    /**
     * Checks if the current log level is verbose (Debug or Verbose).
     *
     * This method is useful for determining if detailed logging should
     * be enabled across the application in different modules. Some kind of
     * "single point of truth".
     *
     * @returns True if current log level is Debug or Verbose, false otherwise.
     */ isVerbose() {
        return this.currentLevel === _adguard_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Debug || this.currentLevel === _adguard_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Verbose;
    }
    /**
     * Sets log with persistent value, which will be saved, if
     * browser.storage.local is available.
     *
     * @param level Log level to set.
     */ setLogLevel(level) {
        this.currentLevel = level;
        _background_storages_shared_instances__WEBPACK_IMPORTED_MODULE_3__.browserStorage.set(ExtendedLogger.LOG_LEVEL_LOCAL_STORAGE_KEY, level).catch((error)=>{
            // eslint-disable-next-line max-len
            this.error('[ext.ExtendedLogger.setLogLevel]: failed to save log level in browser.storage.local: ', error);
        });
    }
    /**
     * Validates if the provided value is a valid LogLevel.
     *
     * @param value Value to validate.
     *
     * @returns {boolean} True if the value is a valid LogLevel, false otherwise.
     */ static isValidLogLevel(value) {
        return typeof value === 'string' && Object.values(_adguard_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel).includes(value);
    }
    /**
     * Initializes the logger by loading the saved log level from browser storage.
     * Falls back to the default log level if retrieval fails or the stored level is invalid.
     *
     * @returns Promise that resolves when initialization is complete.
     */ async init() {
        try {
            const logLevel = await _background_storages_shared_instances__WEBPACK_IMPORTED_MODULE_3__.browserStorage.get(ExtendedLogger.LOG_LEVEL_LOCAL_STORAGE_KEY);
            if (!ExtendedLogger.isValidLogLevel(logLevel)) {
                // Print a warning only if the log level is valuable.
                if (logLevel !== null && logLevel !== undefined) {
                    // eslint-disable-next-line max-len
                    this.warn('[ext.ExtendedLogger.init]: log level from browser.storage.local is not valid. Value: ', logLevel);
                }
                return;
            }
            try {
                this.setLogLevel(logLevel);
            } catch (e) {
                // eslint-disable-next-line max-len
                this.warn('[ext.ExtendedLogger.init]: failed to set log level from browser.storage.local, will set to default level. Error: ', e);
                this.setLogLevel(ExtendedLogger.DEFAULT_LOG_LEVEL);
            }
        } catch (error) {
            // eslint-disable-next-line max-len
            this.warn('[ext.ExtendedLogger.init]: failed to get log level from browser.storage.local: ', error);
        }
    }
    /**
     * Creates a new instance of ExtendedLogger.
     * Initializes the logger with the default log level based on build configuration.
     */ constructor(){
        super();
        this.currentLevel = ExtendedLogger.DEFAULT_LOG_LEVEL;
    }
}
/**
     * Key for storing the current log level in browser storage.
     */ _define_property(ExtendedLogger, "LOG_LEVEL_LOCAL_STORAGE_KEY", 'log-level');
/**
     * Default log level based on the build configuration.
     */ _define_property(ExtendedLogger, "DEFAULT_LOG_LEVEL",  false ? 0 : _adguard_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Debug);
const logger = new ExtendedLogger();
// Expose logger to the window object,
// to have possibility to switch log level from the console.
// Example: adguard.logger.setCurrentLevel('trace');
// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
    adguard: {
        ...self.adguard,
        logger
    }
});



/***/ }),

/***/ "./Extension/src/common/messages/constants.ts":
/*!****************************************************!*\
  !*** ./Extension/src/common/messages/constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MESSAGE_HANDLER_NAME: () => (/* binding */ APP_MESSAGE_HANDLER_NAME),
/* harmony export */   MessageType: () => (/* binding */ MessageType)
/* harmony export */ });
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ /**
 * Important: do not use z.inferOf, because it brings a lot of side effects with
 * many dependencies to the bundle.
 *
 * Also please try, if possible, to not import here external modules
 * other that types.
 */ const APP_MESSAGE_HANDLER_NAME = 'app';
/**
 * Message types used for message passing between extension contexts
 * (popup, filtering log, content scripts, background)
 */ var MessageType = /*#__PURE__*/ function(MessageType) {
    MessageType["CreateEventListener"] = "createEventListener";
    MessageType["RemoveListener"] = "removeListener";
    MessageType["OpenExtensionStore"] = "openExtensionStore";
    MessageType["AddAndEnableFilter"] = "addAndEnableFilter";
    MessageType["ApplySettingsJson"] = "applySettingsJson";
    MessageType["OpenFilteringLog"] = "openFilteringLog";
    MessageType["OpenFullscreenUserRules"] = "openFullscreenUserRules";
    MessageType["UpdateFullscreenUserRulesTheme"] = "updateFullscreenUserRulesTheme";
    MessageType["ResetBlockedAdsCount"] = "resetBlockedAdsCount";
    MessageType["ResetSettings"] = "resetSettings";
    MessageType["GetUserRules"] = "getUserRules";
    MessageType["SaveUserRules"] = "saveUserRules";
    MessageType["GetAllowlistDomains"] = "getAllowlistDomains";
    MessageType["SaveAllowlistDomains"] = "saveAllowlistDomains";
    MessageType["CheckFiltersUpdate"] = "checkFiltersUpdate";
    MessageType["CheckExtensionUpdateMv3"] = "checkExtensionUpdateMv3";
    MessageType["UpdateExtensionMv3"] = "updateExtensionMv3";
    MessageType["DisableFiltersGroup"] = "disableFiltersGroup";
    MessageType["DisableFilter"] = "disableFilter";
    MessageType["LoadCustomFilterInfo"] = "loadCustomFilterInfo";
    MessageType["SubscribeToCustomFilter"] = "subscribeToCustomFilter";
    MessageType["RemoveAntiBannerFilter"] = "removeAntiBannerFilter";
    MessageType["GetIsAppInitialized"] = "getIsAppInitialized";
    MessageType["GetTabInfoForPopup"] = "getTabInfoForPopup";
    MessageType["ChangeApplicationFilteringPaused"] = "changeApplicationFilteringPaused";
    MessageType["OpenRulesLimitsTab"] = "openRulesLimitsTab";
    MessageType["OpenSettingsTab"] = "openSettingsTab";
    MessageType["OpenAssistant"] = "openAssistant";
    MessageType["OpenAbuseTab"] = "openAbuseTab";
    MessageType["OpenSiteReportTab"] = "openSiteReportTab";
    MessageType["OpenComparePage"] = "openComparePage";
    MessageType["OpenChromeExtensionsSettingsPage"] = "openChromeExtensionsSettingsPage";
    MessageType["OpenExtensionDetailsPage"] = "openExtensionDetailsPage";
    MessageType["ResetUserRulesForPage"] = "resetUserRulesForPage";
    MessageType["RemoveAllowlistDomain"] = "removeAllowlistDomain";
    MessageType["AddAllowlistDomainForTabId"] = "addAllowlistDomainForTabId";
    MessageType["AddAllowlistDomainForUrl"] = "addAllowlistDomainForUrl";
    MessageType["OnOpenFilteringLogPage"] = "onOpenFilteringLogPage";
    MessageType["GetFilteringLogData"] = "getFilteringLogData";
    MessageType["InitializeFrameScript"] = "initializeFrameScript";
    MessageType["InitializeBlockingPageScript"] = "initializeBlockingPageScript";
    MessageType["OnCloseFilteringLogPage"] = "onCloseFilteringLogPage";
    MessageType["GetFilteringInfoByTabId"] = "getFilteringInfoByTabId";
    MessageType["SynchronizeOpenTabs"] = "synchronizeOpenTabs";
    MessageType["ClearEventsByTabId"] = "clearEventsByTabId";
    MessageType["RefreshPage"] = "refreshPage";
    MessageType["AddUserRule"] = "addUserRule";
    MessageType["RemoveUserRule"] = "removeUserRule";
    MessageType["EnableFiltersGroup"] = "enableFiltersGroup";
    MessageType["NotifyListeners"] = "notifyListeners";
    MessageType["AddLongLivedConnection"] = "addLongLivedConnection";
    MessageType["GetOptionsData"] = "getOptionsData";
    MessageType["ChangeUserSettings"] = "changeUserSetting";
    MessageType["CheckRequestFilterReady"] = "checkRequestFilterReady";
    MessageType["OpenThankyouPage"] = "openThankYouPage";
    MessageType["OpenSafebrowsingTrusted"] = "openSafebrowsingTrusted";
    MessageType["GetSelectorsAndScripts"] = "getSelectorsAndScripts";
    MessageType["CheckPageScriptWrapperRequest"] = "checkPageScriptWrapperRequest";
    MessageType["ProcessShouldCollapse"] = "processShouldCollapse";
    MessageType["ProcessShouldCollapseMany"] = "processShouldCollapseMany";
    MessageType["AddFilteringSubscription"] = "addFilterSubscription";
    MessageType["SetNotificationViewed"] = "setNotificationViewed";
    MessageType["SaveCssHitsStats"] = "saveCssHitStats";
    MessageType["GetCookieRules"] = "getCookieRules";
    MessageType["SaveCookieLogEvent"] = "saveCookieRuleEvent";
    MessageType["LoadSettingsJson"] = "loadSettingsJson";
    MessageType["AddUrlToTrusted"] = "addUrlToTrusted";
    MessageType["SetPreserveLogState"] = "setPreserveLogState";
    MessageType["GetUserRulesEditorData"] = "getUserRulesEditorData";
    MessageType["GetEditorStorageContent"] = "getEditorStorageContent";
    MessageType["SetEditorStorageContent"] = "setEditorStorageContent";
    MessageType["SetFilteringLogWindowState"] = "setFilteringLogWindowState";
    MessageType["AppInitialized"] = "appInitialized";
    MessageType["UpdateTotalBlocked"] = "updateTotalBlocked";
    MessageType["ScriptletCloseWindow"] = "scriptletCloseWindow";
    MessageType["ShowRuleLimitsAlert"] = "showRuleLimitsAlert";
    MessageType["ShowAlertPopup"] = "showAlertPopup";
    MessageType["ShowVersionUpdatedPopup"] = "showVersionUpdatedPopup";
    MessageType["UpdateListeners"] = "updateListeners";
    MessageType["SetConsentedFilters"] = "setConsentedFilters";
    MessageType["GetIsConsentedFilter"] = "getIsConsentedFilter";
    MessageType["SendTelemetryCustomEvent"] = "sendTelemetryCustomEvent";
    MessageType["SendTelemetryPageViewEvent"] = "sendTelemetryPageViewEvent";
    MessageType["AddTelemetryOpenedPage"] = "addTelemetryOpenedPage";
    MessageType["RemoveTelemetryOpenedPage"] = "removeTelemetryOpenedPage";
    MessageType["GetRulesLimitsCountersMv3"] = "getRulesLimitsCountersMv3";
    MessageType["CanEnableStaticFilterMv3"] = "canEnableStaticFilterMv3";
    MessageType["CanEnableStaticGroupMv3"] = "canEnableStaticGroupMv3";
    MessageType["ClearRulesLimitsWarningMv3"] = "clearRulesLimitsWarningMv3";
    MessageType["RestoreFiltersMv3"] = "restoreFiltersMv3";
    MessageType["CurrentLimitsMv3"] = "currentLimitsMv3";
    return MessageType;
}({});


/***/ }),

/***/ "./Extension/src/common/messages/index.ts":
/*!************************************************!*\
  !*** ./Extension/src/common/messages/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MESSAGE_HANDLER_NAME: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.APP_MESSAGE_HANDLER_NAME),
/* harmony export */   MessageType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MessageType),
/* harmony export */   messageHasTypeAndDataFields: () => (/* reexport safe */ _message_handler__WEBPACK_IMPORTED_MODULE_2__.messageHasTypeAndDataFields),
/* harmony export */   messageHasTypeField: () => (/* reexport safe */ _message_handler__WEBPACK_IMPORTED_MODULE_2__.messageHasTypeField)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
/* harmony import */ var _send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-message */ "./Extension/src/common/messages/send-message.ts");
/* harmony import */ var _message_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-handler */ "./Extension/src/common/messages/message-handler.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // Since exports from './constants' are: the MessageType enum and a lot of types,
// and imports there are types only, so it should not affect bundle size
// eslint-disable-next-line no-restricted-syntax





/***/ }),

/***/ "./Extension/src/common/messages/message-handler.ts":
/*!**********************************************************!*\
  !*** ./Extension/src/common/messages/message-handler.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageHasTypeAndDataFields: () => (/* binding */ messageHasTypeAndDataFields),
/* harmony export */   messageHasTypeField: () => (/* binding */ messageHasTypeField)
/* harmony export */ });
/* unused harmony export MessageHandler */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}



/**
 * Type guard for messages that have a 'type' field with possible {@link MessageType}.
 *
 * @note Added to no bring here huge zod library.
 *
 * @param message Unknown message.
 *
 * @returns True if message has 'type' field with possible {@link MessageType}.
 */ const messageHasTypeField = (message)=>{
    return typeof message === 'object' && message !== null && 'type' in message;
};
/**
 * Type guard for messages that have a 'type' field and 'data' field and looks like {@link Message}.
 *
 * @note Added to no bring here huge zod library.
 *
 * @param message Unknown message.
 *
 * @returns True if message has 'type' and 'data' fields and looks like {@link Message}.
 */ const messageHasTypeAndDataFields = (message)=>{
    return messageHasTypeField(message) && 'data' in message;
};
/**
 * API for handling Messages via {@link browser.runtime.onMessage}
 */ class MessageHandler {
    init() {
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessage.addListener(this.handleMessage);
    }
    /**
     * Add message listener.
     * Listeners limited to 1 per message type to prevent race
     * condition while response processing.
     *
     * TODO: implement listeners priority execution strategy
     *
     * @param type - {@link ValidMessageTypes}
     * @param listener - {@link MessageListener}
     *
     * @throws error, if message listener already added
     */ addListener(type, listener) {
        if (this.listeners.has(type)) {
            throw new Error(`Message handler: ${type} listener has already been registered`);
        }
        // Cast through unknown to help TS understand that the listener is of
        // the correct type. It will check types at compile time.
        this.listeners.set(type, listener);
    }
    /**
     * Removes message listener.
     *
     * @param type - {@link ValidMessageTypes}
     */ removeListener(type) {
        this.listeners.delete(type);
    }
    /**
     * Removes all listeners
     */ removeListeners() {
        this.listeners.clear();
    }
    /**
     * Check if the message is of type {@link Message}.
     *
     * @param message Message of basic type {@link Message} or {@link EngineMessage}.
     *
     * @returns True if the message is of type {@link Message}.
     */ static isValidMessageType(message) {
        return message.handlerName === _constants__WEBPACK_IMPORTED_MODULE_2__.APP_MESSAGE_HANDLER_NAME && 'type' in message;
    }
    constructor(){
        _define_property(this, "listeners", new Map());
        this.handleMessage = this.handleMessage.bind(this);
    }
}


/***/ }),

/***/ "./Extension/src/common/messages/send-message.ts":
/*!*******************************************************!*\
  !*** ./Extension/src/common/messages/send-message.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports sendMessage, sendTabMessage */
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

/**
 * TODO: Consider moving this file to the background folder, because all messages
 * from the UI should be send via methods of Messenger class instead of using
 * directly sendMessage to proper types checking.
 *
 * {@link sendMessage} sends app message via {@link browser.runtime.sendMessage} and
 * gets response from another extension page message handler
 *
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns message handler response
 */ async function sendMessage(message) {
    try {
        return await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage({
            handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__.APP_MESSAGE_HANDLER_NAME,
            ...message
        });
    } catch (e) {
    // do nothing
    }
}
/**
 * {@link sendTabMessage} sends message to specified tab via {@link browser.tabs.sendMessage} and
 * gets response from it
 *
 * @param tabId - tab id
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns tab message handler response
 */ async function sendTabMessage(tabId, message) {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].tabs.sendMessage(tabId, {
        handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__.APP_MESSAGE_HANDLER_NAME,
        ...message
    });
}


/***/ }),

/***/ "./Extension/src/pages/post-install.ts":
/*!*********************************************!*\
  !*** ./Extension/src/pages/post-install.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostInstall: () => (/* binding */ PostInstall)
/* harmony export */ });
/* harmony import */ var nanobar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanobar */ "./node_modules/.pnpm/nanobar@0.4.2/node_modules/nanobar/nanobar.js");
/* harmony import */ var nanobar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nanobar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/logger */ "./Extension/src/common/logger.ts");
/* harmony import */ var _services_messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/messenger */ "./Extension/src/pages/services/messenger.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ // @ts-ignore
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}



class PostInstall {
    static init() {
        document.addEventListener('DOMContentLoaded', PostInstall.onDOMContentLoaded);
    }
    static onDOMContentLoaded() {
        PostInstall.nanobar.go(15);
        PostInstall.checkRequestFilterReady();
    }
    static async checkRequestFilterReady() {
        try {
            const ready = await _services_messenger__WEBPACK_IMPORTED_MODULE_2__.messenger.checkRequestFilterReady();
            if (ready) {
                PostInstall.onEngineLoaded();
            } else {
                setTimeout(PostInstall.checkRequestFilterReady, PostInstall.checkRequestTimeoutMs);
            }
        } catch (e) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__.logger.error('[ext.PostInstall.checkRequestFilterReady]: failed to check request filter ready', e);
            // retry request, if message handler is not ready
            setTimeout(PostInstall.checkRequestFilterReady, PostInstall.checkRequestTimeoutMs);
        }
    }
    static onEngineLoaded() {
        PostInstall.nanobar.go(100);
        setTimeout(()=>{
            if (window) {
                _services_messenger__WEBPACK_IMPORTED_MODULE_2__.messenger.openThankyouPage();
            }
        }, PostInstall.openThankyouPageTimeoutMs);
    }
}
_define_property(PostInstall, "nanobar", new (nanobar__WEBPACK_IMPORTED_MODULE_0___default())({
    classname: 'adg-progress-bar'
}));
_define_property(PostInstall, "checkRequestTimeoutMs", 500);
_define_property(PostInstall, "openThankyouPageTimeoutMs", 1000);


/***/ }),

/***/ "./Extension/src/pages/services/messenger.ts":
/*!***************************************************!*\
  !*** ./Extension/src/pages/services/messenger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messenger: () => (/* binding */ messenger)
/* harmony export */ });
/* unused harmony exports Page, Messenger */
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/.pnpm/nanoid@3.3.6/node_modules/nanoid/index.browser.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/logger */ "./Extension/src/common/logger.ts");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/messages */ "./Extension/src/common/messages/index.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





var Page = /*#__PURE__*/ function(Page) {
    Page["FullscreenUserRules"] = "fullscreen-user-rules";
    Page["FilteringLog"] = "filtering-log";
    Page["Popup"] = "popup";
    return Page;
}({});
/**
 * MessengerCommon class, used to communicate with the background page from the UI.
 * Actually, it's a wrapper around the browser.runtime.sendMessage method.
 */ class Messenger {
    /**
     * Sends a message to the background page.
     *
     * All messages described in the {@link MessageType} enum.
     * All answers described in the {@link MessageMap} type.
     *
     * @param type Message type.
     * @param data Message data. Optional because not all messages have data.
     *
     * @returns Promise that resolves with the response from the background page.
     * Type of the response depends on the message type. Go to {@link MessageMap}
     * to see all possible message types and their responses.
     */ // eslint-disable-next-line class-methods-use-this
    async sendMessage(type, data) {
        const response = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.sendMessage({
            handlerName: _common_messages__WEBPACK_IMPORTED_MODULE_3__.APP_MESSAGE_HANDLER_NAME,
            type,
            data
        });
        return response;
    }
    /**
     * Sends a message from background page to update listeners on the UI.
     *
     * @returns Promise that resolves when the message is sent.
     */ async updateListeners() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.UpdateListeners);
    }
    /**
     * Sends a message to the background page to get the settings data for
     * the options page with some additional info.
     *
     * @returns Promise that resolves with the settings data for
     * the options page with some additional info.
     */ async getOptionsData() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetOptionsData);
    }
    /**
     * Sends a message to the background page to change the user setting.
     *
     * @param settingId Setting identifier.
     * @param value Setting value.
     *
     * @returns Promise that resolves after the message is sent.
     */ async changeUserSetting(settingId, value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ChangeUserSettings, {
            key: settingId,
            value
        });
    }
    /**
     * Sends a message to the background page to open the extension store.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openExtensionStore() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenExtensionStore);
    }
    /**
     * Sends a message to the background page to open the compare page.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openComparePage() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenComparePage);
    }
    /**
     * Sends a message to the background page to open the Chrome extensions settings page.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openChromeExtensionsPage() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenChromeExtensionsSettingsPage);
    }
    /**
     * Sends a message to the background page to open the extension details page.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openExtensionDetailsPage() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenExtensionDetailsPage);
    }
    /**
     * Sends a message to the background page to enable a filter by filter id.
     *
     * @param filterId Filter identifier.
     *
     * @returns Promise that resolves after the message is sent.
     */ async enableFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddAndEnableFilter, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to disable a filter by filter id.
     *
     * @param filterId Filter identifier.
     *
     * @returns Promise that resolves after the message is sent.
     */ async disableFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.DisableFilter, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to apply settings from a JSON object.
     *
     * @param json JSON object representing the settings to apply.
     *
     * @returns Promise that resolves after the message is sent.
     */ async applySettingsJson(json) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ApplySettingsJson, {
            json
        });
    }
    /**
     * Sends a message to the background page to open the filtering log.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openFilteringLog() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenFilteringLog);
    }
    /**
     * Sends a message to the background page to reset the blocked ads statistics.
     *
     * @returns Promise that resolves after the message is sent.
     */ async resetStatistics() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ResetBlockedAdsCount);
    }
    /**
     * Sends a message to the background page to set the filtering log window state.
     *
     * @param windowState State of the filtering log window.
     *
     * @returns Promise that resolves after the message is sent.
     */ async setFilteringLogWindowState(windowState) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SetFilteringLogWindowState, {
            windowState
        });
    }
    /**
     * Sends a message to the background page to reset the settings.
     *
     * @returns Promise that resolves after the message is sent.
     */ async resetSettings() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ResetSettings);
    }
    /**
     * Sends a message to the background page to get the user rules.
     *
     * @returns Promise that resolves with the user rules.
     */ async getUserRules() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetUserRules);
    }
    /**
     * Sends a message to the background page to save user rules.
     *
     * @param value User rules value to save.
     *
     * @returns Promise that resolves after the message is sent.
     */ async saveUserRules(value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SaveUserRules, {
            value
        });
    }
    /**
     * Sends a message to the background page to open user rules editor in fullscreen.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openFullscreenUserRules() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenFullscreenUserRules);
    }
    /**
     * Sends a message to the background page to get the allowlist domains.
     *
     * @returns Promise that resolves with the list of allowlist domains.
     */ async getAllowlist() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetAllowlistDomains);
    }
    /**
     * Sends a message to the background page to save the allowlist domains.
     *
     * @param value Allowlist domains value to save.
     *
     * @returns Promise that resolves after the message is sent.
     */ async saveAllowlist(value) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SaveAllowlistDomains, {
            value
        });
    }
    /**
     * Sends a message to the background page to mark a notification as viewed.
     *
     * @param withDelay Whether the notification should be marked as viewed after a delay.
     *
     * @returns Promise that resolves after the message is sent.
     */ async setNotificationViewed(withDelay) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SetNotificationViewed, {
            withDelay
        });
    }
    /**
     * Sends a message to the background page to update filters.
     *
     * @returns Promise that resolves with the list of filters.
     */ async updateFiltersMV2() {
        if (true) {
            _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn('[ext.Messenger.updateFiltersMV2]: filters update is not supported in MV3');
            return [];
        }
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CheckFiltersUpdate);
    }
    /**
     * Sends a message to the background page to check for extension updates.
     */ async checkUpdatesMV3() {
        if (false) {}
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CheckExtensionUpdateMv3);
    }
    /**
     * Sends a message to the background page to update extension.
     */ async updateExtensionMV3({ from }) {
        if (false) {}
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.UpdateExtensionMv3, {
            from
        });
    }
    /**
     * Sends a message to the background page to update the status of a filter group.
     *
     * @param id Group identifier.
     * @param enabled Whether the group should be enabled or disabled.
     *
     * @returns Promise that resolves after the message is sent.
     */ async updateGroupStatus(id, enabled) {
        const type = enabled ? _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.EnableFiltersGroup : _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.DisableFiltersGroup;
        const groupId = Number.parseInt(id, 10);
        return this.sendMessage(type, {
            groupId
        });
    }
    /**
     * Sends a message to the background page to set consented filters.
     *
     * @param filterIds List of filter identifiers.
     *
     * @returns Promise that resolves after the message is sent.
     */ async setConsentedFilters(filterIds) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SetConsentedFilters, {
            filterIds
        });
    }
    /**
     * Sends a message to the background page to check if a filter is consented.
     *
     * @param filterId Filter identifier.
     *
     * @returns Promise that resolves with the result of the check.
     */ async getIsConsentedFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetIsConsentedFilter, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to check a custom filter URL.
     *
     * @param url Custom filter URL.
     *
     * @returns Promise that resolves with the result of the check.
     */ async checkCustomUrl(url) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.LoadCustomFilterInfo, {
            url
        });
    }
    /**
     * Sends a message to the background page to add a custom filter.
     *
     * @param {CustomFilterSubscriptionData} filter Custom filter data.
     *
     * @returns {Promise<CustomFilterMetadata>} Custom filter metadata.
     */ async addCustomFilter(filter) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SubscribeToCustomFilter, {
            filter
        });
    }
    /**
     * Sends a message to the background page to remove a custom filter.
     *
     * @param filterId Custom filter ID.
     *
     * @returns Promise that resolves after the filter is removed.
     */ async removeCustomFilter(filterId) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RemoveAntiBannerFilter, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to check if the application is initialized.
     *
     * @returns Promise that resolves to a boolean value:
     * true if the application is initialized, false otherwise.
     */ async getIsAppInitialized() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetIsAppInitialized);
    }
    /**
     * Sends a message to the background to get the tab info for the popup.
     *
     * @param tabId Tab ID.
     *
     * @returns Promise that resolves with the tab info or undefined.
     */ async getTabInfoForPopup(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetTabInfoForPopup, {
            tabId
        });
    }
    /**
     * Sends a message to the background page to change application filtering state.
     *
     * @param state Application filtering state.
     *
     * @returns Promise that resolves after the state is changed.
     */ async changeApplicationFilteringPaused(state) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ChangeApplicationFilteringPaused, {
            state
        });
    }
    /**
     * Sends a message to the background page to update the theme of the fullscreen user rules.
     *
     * @param theme Theme to set.
     *
     * @returns Promise that resolves after the theme is updated.
     */ async updateFullscreenUserRulesTheme(theme) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.UpdateFullscreenUserRulesTheme, {
            theme
        });
    }
    /**
     * Sends a message to the background page to open the rules limits tab.
     *
     * @returns Promise that resolves after the tab is opened.
     */ async openRulesLimitsTab() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenRulesLimitsTab);
    }
    /**
     * Sends a message to the background page to open the settings tab.
     *
     * @returns Promise that resolves after the tab is opened.
     */ async openSettingsTab() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenSettingsTab);
    }
    /**
     * Sends a message to the background page to open the assistant.
     *
     * @returns Promise that resolves after the assistant is opened.
     */ async openAssistant() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenAssistant);
    }
    /**
     * Sends a message to the background page to open the abuse reporting tab for a site.
     *
     * @param url The URL of the site to report abuse for.
     * @param from The source of the request.
     *
     * @returns Promise that resolves after the tab is opened.
     */ async openAbuseSite(url, from) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenAbuseTab, {
            url,
            from
        });
    }
    /**
     * Sends a message to the background page to check site security.
     *
     * @param url The URL of the site to check.
     * @param from The source of the request.
     *
     * @returns Promise that resolves with the site security info.
     */ async checkSiteSecurity(url, from) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenSiteReportTab, {
            url,
            from
        });
    }
    /**
     * Sends a message to the background page to reset user rules for a specific page.
     *
     * @param url The URL of the page.
     *
     * @returns Promise that resolves after the user rules are reset.
     */ async resetUserRulesForPage(url) {
        const [currentTab] = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].tabs.query({
            active: true,
            currentWindow: true
        });
        if (!(currentTab === null || currentTab === void 0 ? void 0 : currentTab.id)) {
            _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn('[ext.Messenger.resetUserRulesForPage]: cannot get current tab id');
            return;
        }
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ResetUserRulesForPage, {
            url,
            tabId: currentTab === null || currentTab === void 0 ? void 0 : currentTab.id
        });
    }
    /**
     * Sends a message to the background page to remove an allowlist domain.
     *
     * @param tabId The ID of the tab.
     * @param tabRefresh Whether the tab should be refreshed.
     *
     * @returns Promise that resolves after the domain is removed.
     */ async removeAllowlistDomain(tabId, tabRefresh) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RemoveAllowlistDomain, {
            tabId,
            tabRefresh
        });
    }
    /**
     * Sends a message to the background page to add an allowlist domain for a specific tab.
     *
     * @param tabId The ID of the tab.
     *
     * @returns Promise that resolves after the domain is added.
     */ async addAllowlistDomainForTabId(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddAllowlistDomainForTabId, {
            tabId
        });
    }
    /**
     * Sends a message to the background page to add an allowlist domain for a specific URL.
     *
     * Please note that after adding an allowlist domain, the tab will not be reloaded,
     * it should be done separately later if needed.
     *
     * @param url The URL of the page.
     *
     * @returns Promise that resolves after the domain is added.
     */ async addAllowlistDomainForUrl(url) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddAllowlistDomainForUrl, {
            url
        });
    }
    /**
     * Works only in MV2, since MV3 doesn't support filtering log yet.
     *
     * @returns Promise that resolves after the filtering log page is opened.
     */ async onOpenFilteringLogPage() {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OnOpenFilteringLogPage);
    }
    /**
     * Sends a message to the background page to get filtering log data.
     *
     * @returns Promise that resolves with filtering log data.
     */ async getFilteringLogData() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetFilteringLogData);
    }
    /**
     * Sends a message to the background page to close the filtering log page.
     *
     * @returns Promise that resolves after the page is closed.
     */ async onCloseFilteringLogPage() {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OnCloseFilteringLogPage);
    }
    /**
     * Sends a message to the background page to get filtering info by tab ID.
     *
     * @param tabId The ID of the tab.
     *
     * @returns Promise that resolves with filtering info about the tab.
     */ async getFilteringInfoByTabId(tabId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetFilteringInfoByTabId, {
            tabId
        });
    }
    /**
     * Sends a message to the background page to synchronize the list of open tabs.
     *
     * @returns Promise that resolves with an array of filtering info about open tabs.
     */ async synchronizeOpenTabs() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SynchronizeOpenTabs);
    }
    /**
     * Sends a message to the background page to clear events by tab ID.
     *
     * @param tabId The ID of the tab.
     * @param ignorePreserveLog Optional flag to ignore the preserve log state.
     *
     * @returns Promise that resolves after the events are cleared.
     */ async clearEventsByTabId(tabId, ignorePreserveLog) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ClearEventsByTabId, {
            tabId,
            ignorePreserveLog
        });
    }
    /**
     * Sends a message to the background page to refresh the current page by tab ID.
     *
     * @param tabId The ID of the tab.
     *
     * @returns Promise that resolves after the page is refreshed.
     */ async refreshPage(tabId) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RefreshPage, {
            tabId
        });
    }
    /**
     * Sends a message to the background page to add a user rule.
     *
     * @param ruleText User rule text to be added.
     *
     * @returns Promise that resolves after the message is sent.
     */ async addUserRule(ruleText) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddUserRule, {
            ruleText
        });
    }
    /**
     * Sends a message to the background page to remove a user rule.
     *
     * @param ruleText User rule text to be removed.
     *
     * @returns Promise that resolves after the message is sent.
     */ async removeUserRule(ruleText) {
        await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RemoveUserRule, {
            ruleText
        });
    }
    /**
     * Sends a message to the background page to set the preserve log state.
     *
     * @param state State indicating whether to preserve the log.
     *
     * @returns Promise that resolves after the message is sent.
     */ async setPreserveLogState(state) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SetPreserveLogState, {
            state
        });
    }
    /**
     * Sends a message to the background page to get the editor storage content.
     *
     * @returns Promise that resolves with the editor storage content.
     */ async getEditorStorageContent() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetEditorStorageContent);
    }
    /**
     * Sends a message to the background page to set the editor storage content.
     *
     * @param content Content to be stored in the editor.
     *
     * @returns Promise that resolves after the message is sent.
     */ async setEditorStorageContent(content) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SetEditorStorageContent, {
            content
        });
    }
    /**
     * Sends a message to the background page to get the rules limits counters for MV3.
     *
     * @returns Promise that resolves with the rules limits counters for MV3.
     */ async getRulesLimitsCounters() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetRulesLimitsCountersMv3);
    }
    /**
     * Sends a message to the background page to check if it is possible to enable a static filter.
     *
     * @param filterId Filter ID to check.
     *
     * @returns Promise that resolves with the result of the static filter check.
     *
     * @throws Error If the filter is not static.
     */ async canEnableStaticFilter(filterId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CanEnableStaticFilterMv3, {
            filterId
        });
    }
    /**
     * Sends a message to the background page to check if all dynamic rules for a user rules' group can be enabled.
     *
     * @param groupId Group identifier to check.
     *
     * @returns Promise that resolves with the result of the static group check.
     */ async canEnableStaticGroup(groupId) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CanEnableStaticGroupMv3, {
            groupId
        });
    }
    /**
     * Sends a message to the background page to get the current static filters limits.
     *
     * @returns Promise that resolves with the current static filters limits.
     */ async getCurrentLimits() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CurrentLimitsMv3);
    }
    /**
     * Sends a message to the background page to check if the request filter is ready.
     *
     * @returns Promise that resolves to a boolean indicating if the request filter is ready.
     */ async checkRequestFilterReady() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CheckRequestFilterReady);
    }
    /**
     * Sends a message to the background page to add a URL to the trusted list.
     *
     * @param url URL to be added to the trusted list.
     *
     * @returns Promise that resolves after the message is sent.
     */ async addUrlToTrusted(url) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddUrlToTrusted, {
            url
        });
    }
    /**
     * Sends a message to the background page to get user rules editor data.
     *
     * @returns Promise that resolves with the user rules editor data.
     */ async getUserRulesEditorData() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetUserRulesEditorData);
    }
    /**
     * Sends a message to the background page to restore filters in MV3.
     *
     * @returns Promise that resolves after the message is sent.
     */ async restoreFiltersMv3() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RestoreFiltersMv3);
    }
    /**
     * Sends a message to the background page to clear the rules limits warning in MV3.
     *
     * @returns Promise that resolves after the message is sent.
     */ async clearRulesLimitsWarningMv3() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.ClearRulesLimitsWarningMv3);
    }
    /**
     * Sends a message to the background page to get the allowlist domains.
     *
     * @returns Promise that resolves with the allowlist domains.
     */ async getAllowlistDomains() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.GetAllowlistDomains);
    }
    /**
     * Sends a message to the background page to load the settings JSON.
     *
     * @returns Promise that resolves with the loaded settings JSON.
     */ async loadSettingsJson() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.LoadSettingsJson);
    }
    /**
     * Sends a message to the background page to open the thank you page.
     *
     * @returns Promise that resolves after the message is sent.
     */ async openThankyouPage() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenThankyouPage);
    }
    /**
     * Sends a message to the background page to initialize the frame script.
     *
     * @returns Promise that resolves with the initialization data for the frame script.
     */ async initializeFrameScript() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.InitializeFrameScript);
    }
    /**
     * Sends a message to the background page to initialize the blocking page script.
     *
     * @returns Promise that resolves with the initialization data for the blocking page script.
     */ async initializeBlockingPageScript() {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.InitializeBlockingPageScript);
    }
    /**
     * Sends a message to the background page to mark url as trusted and ignore
     * safebrowsing checks for it.
     *
     * @returns Promise that resolves with the initialization data for the frame script.
     */ async openSafebrowsingTrusted(url) {
        return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.OpenSafebrowsingTrusted, {
            url
        });
    }
    /**
     * Creates an instance of the Messenger class.
     */ constructor(){
        _define_property(this, "onMessage", webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessage);
        /**
     * Method subscribes to notifier module events.
     *
     * @param events List of events to which subscribe.
     * @param callback Callback called when event fires.
     * @param onUnloadCallback Callback used to remove listener on unload.
     *
     * @returns Function to remove listener on unload.
     */ _define_property(this, "createEventListener", async (events, callback, onUnloadCallback)=>{
            let listenerId;
            const response = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CreateEventListener, {
                events
            });
            listenerId = response.listenerId;
            const onUpdateListeners = async ()=>{
                const updatedResponse = await this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.CreateEventListener, {
                    events
                });
                listenerId = updatedResponse.listenerId;
            };
            const messageHandler = (message)=>{
                if (!(0,_common_messages__WEBPACK_IMPORTED_MODULE_3__.messageHasTypeField)(message)) {
                    _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.error('[ext.Messenger]: received message in Messenger.createEventListener has no type field:', message);
                    return undefined;
                }
                if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.NotifyListeners) {
                    if (!(0,_common_messages__WEBPACK_IMPORTED_MODULE_3__.messageHasTypeAndDataFields)(message)) {
                        _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.error('[ext.Messenger]: received message with type MessageType.NotifyListeners has no data:', message);
                        return undefined;
                    }
                    const castedMessage = message;
                    const [type, ...data] = castedMessage.data;
                    if (events.includes(type)) {
                        callback({
                            type,
                            data
                        });
                    }
                }
                if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.UpdateListeners) {
                    onUpdateListeners();
                }
            };
            const onUnload = ()=>{
                if (!listenerId) {
                    return;
                }
                webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessage.removeListener(messageHandler);
                window.removeEventListener('beforeunload', onUnload);
                window.removeEventListener('unload', onUnload);
                this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RemoveListener, {
                    listenerId
                });
                listenerId = null;
                if (typeof onUnloadCallback === 'function') {
                    onUnloadCallback();
                }
            };
            webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessage.addListener(messageHandler);
            window.addEventListener('beforeunload', onUnload);
            window.addEventListener('unload', onUnload);
            return onUnload;
        });
        /**
     * Sends a message to the background page to send a telemetry page view event.
     *
     * @param screenName Screen name of the page.
     * @param pageId Page ID of the page.
     *
     * @returns Promise that resolves after the message is sent.
     */ _define_property(this, "sendTelemetryPageViewEvent", async (screenName, pageId)=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SendTelemetryPageViewEvent, {
                screenName,
                pageId
            });
        });
        /**
     * Sends a message to the background page to send a telemetry custom event.
     *
     * @param screenName Screen name of the page.
     * @param eventName Name of the event.
     *
     * @returns Promise that resolves after the message is sent.
     */ _define_property(this, "sendTelemetryCustomEvent", async (screenName, eventName)=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.SendTelemetryCustomEvent, {
                screenName,
                eventName
            });
        });
        /**
     * Adds opened page to telemetry tracking.
     *
     * @returns Promise that resolves with the page ID.
     */ _define_property(this, "addTelemetryOpenedPage", async ()=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddTelemetryOpenedPage);
        });
        /**
     * Removes opened page from telemetry tracking.
     *
     * @param pageId Page ID to remove.
     *
     * @returns Promise that resolves after the message is sent.
     */ _define_property(this, "removeTelemetryOpenedPage", async (pageId)=>{
            return this.sendMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.RemoveTelemetryOpenedPage, {
                pageId
            });
        });
        this.resetUserRulesForPage = this.resetUserRulesForPage.bind(this);
        this.updateFiltersMV2 = this.updateFiltersMV2.bind(this);
        this.removeAllowlistDomain = this.removeAllowlistDomain.bind(this);
        this.addAllowlistDomainForTabId = this.addAllowlistDomainForTabId.bind(this);
        this.addAllowlistDomainForUrl = this.addAllowlistDomainForUrl.bind(this);
    }
}
/**
     * Creates long-lived connections between an extension page and the background page.
     *
     * @param page Page name.
     * @param events List of events to which subscribe.
     * @param callback Callback called when event fires.
     *
     * @returns Object with onUnload callback and portId.
     */ _define_property(Messenger, "createLongLivedConnection", (page, events, callback)=>{
    let port;
    let forceDisconnected = false;
    const portId = `${page}_${(0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)()}`;
    const connect = ()=>{
        port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.connect({
            name: portId
        });
        port.postMessage({
            type: _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddLongLivedConnection,
            data: {
                events
            }
        });
        port.onMessage.addListener((message)=>{
            if (!(0,_common_messages__WEBPACK_IMPORTED_MODULE_3__.messageHasTypeField)(message)) {
                _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.error('[ext.Messenger]: received message in Messenger.createLongLivedConnection has no type field:', message);
                return;
            }
            if (message.type === _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.NotifyListeners) {
                if (!(0,_common_messages__WEBPACK_IMPORTED_MODULE_3__.messageHasTypeAndDataFields)(message)) {
                    _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.error('[ext.Messenger]: received message with type MessageType.NotifyListeners has no data:', message);
                    return;
                }
                const castedMessage = message;
                const [type, ...data] = castedMessage.data;
                callback({
                    type,
                    data
                });
            }
        });
        port.onDisconnect.addListener(()=>{
            if (webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.lastError) {
                _common_logger__WEBPACK_IMPORTED_MODULE_2__.logger.error('[ext.Messenger]: received error on disconnect:', webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.lastError.message);
            }
            // we try to connect again if the background page was terminated
            if (!forceDisconnected) {
                connect();
            }
        });
    };
    connect();
    const onUnload = ()=>{
        if (port) {
            forceDisconnected = true;
            port.disconnect();
        }
    };
    window.addEventListener('beforeunload', onUnload);
    window.addEventListener('unload', onUnload);
    return {
        onUnload,
        portId
    };
});
const messenger = new Messenger();



/***/ }),

/***/ "./node_modules/.pnpm/nanobar@0.4.2/node_modules/nanobar/nanobar.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/nanobar@0.4.2/node_modules/nanobar/nanobar.js ***!
  \**************************************************************************/
/***/ (function(module) {

/* http://nanobar.micronube.com/  ||  https://github.com/jacoborus/nanobar/    MIT LICENSE */ (function(root) {
    'use strict';
    // container styles
    var css = '.nanobar{width:100%;height:4px;z-index:9999;top:0}.bar{width:0;height:100%;transition:height .3s;background:#000}';
    // add required css in head div
    function addCss() {
        var s = document.getElementById('nanobarcss');
        // check whether style tag is already inserted
        if (s === null) {
            s = document.createElement('style');
            s.type = 'text/css';
            s.id = 'nanobarcss';
            document.head.insertBefore(s, document.head.firstChild);
            // the world
            if (!s.styleSheet) return s.appendChild(document.createTextNode(css));
            // IE
            s.styleSheet.cssText = css;
        }
    }
    function addClass(el, cls) {
        if (el.classList) el.classList.add(cls);
        else el.className += ' ' + cls;
    }
    // create a progress bar
    // this will be destroyed after reaching 100% progress
    function createBar(rm) {
        // create progress element
        var el = document.createElement('div'), width = 0, here = 0, on = 0, bar = {
            el: el,
            go: go
        };
        addClass(el, 'bar');
        // animation loop
        function move() {
            var dist = width - here;
            if (dist < 0.1 && dist > -0.1) {
                place(here);
                on = 0;
                if (width === 100) {
                    el.style.height = 0;
                    setTimeout(function() {
                        rm(el);
                    }, 300);
                }
            } else {
                place(width - dist / 4);
                setTimeout(go, 16);
            }
        }
        // set bar width
        function place(num) {
            width = num;
            el.style.width = width + '%';
        }
        function go(num) {
            if (num >= 0) {
                here = num;
                if (!on) {
                    on = 1;
                    move();
                }
            } else if (on) {
                move();
            }
        }
        return bar;
    }
    function Nanobar(opts) {
        opts = opts || {};
        // set options
        var el = document.createElement('div'), applyGo, nanobar = {
            el: el,
            go: function(p) {
                // expand bar
                applyGo(p);
                // create new bar when progress reaches 100%
                if (p === 100) {
                    init();
                }
            }
        };
        // remove element from nanobar container
        function rm(child) {
            el.removeChild(child);
        }
        // create and insert progress var in nanobar container
        function init() {
            var bar = createBar(rm);
            el.appendChild(bar.el);
            applyGo = bar.go;
        }
        addCss();
        addClass(el, 'nanobar');
        if (opts.id) el.id = opts.id;
        if (opts.classname) addClass(el, opts.classname);
        // insert container
        if (opts.target) {
            // inside a div
            el.style.position = 'relative';
            opts.target.insertBefore(el, opts.target.firstChild);
        } else {
            // on top of the page
            el.style.position = 'fixed';
            document.getElementsByTagName('body')[0].appendChild(el);
        }
        init();
        return nanobar;
    }
    if (true) {
        // CommonJS
        module.exports = Nanobar;
    } else {}
})(this);


/***/ }),

/***/ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
 //# sourceMappingURL=browser-polyfill.js.map



(function(global, factory) {
    if (typeof define === "function" && __webpack_require__.amdO) {
        define("webextension-polyfill", [
            "module"
        ], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.browser = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : undefined, function(module1) {
    /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
        throw new Error("This script should only be loaded in a browser extension.");
    }
    if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) {
                throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                get(key) {
                    if (!this.has(key)) {
                        this.set(key, this.createItem(key));
                    }
                    return super.get(key);
                }
                constructor(createItem, items = undefined){
                    super(items);
                    this.createItem = createItem;
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) {
                        promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                        promise.resolve(callbackArgs[0]);
                    } else {
                        promise.resolve(callbackArgs);
                    }
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments";
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) {
                        throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    }
                    if (args.length > metadata.maxArgs) {
                        throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    }
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) {
                            // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                            // and so the polyfill will try to call it with a callback first, and it will fallback
                            // to not passing the callback if the first call fails.
                            try {
                                target[name](...args, makeCallback({
                                    resolve,
                                    reject
                                }, metadata));
                            } catch (cbError) {
                                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                                target[name](...args);
                                // Update the API method metadata, so that the next API calls will not try to
                                // use the unsupported callback anymore.
                                metadata.fallbackToNoCallback = false;
                                metadata.noCallback = true;
                                resolve();
                            }
                        } else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        }
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {}, metadata = {})=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) {
                            return cache[prop];
                        }
                        if (!(prop in target)) {
                            return undefined;
                        }
                        let value = target[prop];
                        if (typeof value === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") {
                                // We have a special-case wrapper for this method.
                                value = wrapMethod(target, target[prop], wrappers[prop]);
                            } else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value = wrapMethod(target, target[prop], wrapper);
                            } else {
                                // This is a method that we don't know or care about. Return the
                                // original method, bound to the underlying object.
                                value = value.bind(target);
                            }
                        } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                            // This is an object that we need to do some wrapping for the children
                            // of. Create a sub-object wrapper for it with the appropriate child
                            // metadata.
                            value = wrapObject(value, wrappers[prop], metadata[prop]);
                        } else if (hasOwnProperty(metadata, "*")) {
                            // Wrap all properties in * namespace.
                            value = wrapObject(value, wrappers[prop], metadata["*"]);
                        } else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value;
                        }
                        cache[prop] = value;
                        return value;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) {
                            cache[prop] = value;
                        } else {
                            target[prop] = value;
                        }
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                };
                // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") {
                    return listener;
                }
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {} /* wrappers */ , {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            });
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") {
                    return listener;
                }
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result);
                    // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) {
                        return false;
                    }
                    // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message;
                            if (error && (error instanceof Error || typeof error.message === "string")) {
                                message = error.message;
                            } else {
                                message = "An unexpected error occurred";
                            }
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    };
                    // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) {
                        sendPromisedResult(result);
                    } else {
                        sendPromisedResult(sendResponsePromise);
                    }
                    // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject, resolve }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                        resolve();
                    } else {
                        reject(new Error(extensionAPIs.runtime.lastError.message));
                    }
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                    // Convert back the JSON representation of the error into
                    // an Error instance.
                    reject(new Error(reply.message));
                } else {
                    resolve(reply);
                }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) {
                    throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                    throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module1.exports = wrapAPIs(chrome);
    } else {
        module1.exports = globalThis.browser;
    }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js ***!
  \****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var isCallable = require('../internals/is-callable');\n| var tryToString = require('../internals/try-to-string');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var isObject = require('../internals/is-object');\n| var $String = String;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-buffer-view-core.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-buffer-view-core.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.typed-array.at.js\";\n| import \"core-js/modules/es.typed-array.find-last.js\";\n| import \"core-js/modules/es.typed-array.find-last-index.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js");
module.exports = function(Constructor, list, $length) {
    var index = 0;
    var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
    var result = new Constructor(length);
    while(length > index)result[index] = list[index++];
    return result;
};


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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-to-reversed.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-to-reversed.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js");
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function(O, C) {
    var len = lengthOfArrayLike(O);
    var A = new C(len);
    var k = 0;
    for(; k < len; k++)A[k] = O[len - k - 1];
    return A;
};


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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};


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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.reflect.to-string-tag.js\";\n| var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.at.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.at.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
    var O = aTypedArray(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last-index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last-index.js ***!
  \**********************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.find-last-index.js\";\n| var ArrayBufferViewCore = require('../internals/array-buffer-view-core');\n| var $findLastIndex = require('../internals/array-iteration-from-last').findLastIndex;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.find-last.js\";\n| var ArrayBufferViewCore = require('../internals/array-buffer-view-core');\n| var $findLast = require('../internals/array-iteration-from-last').findLast;");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.set.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.set.js ***!
  \**********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| import \"core-js/modules/es.typed-array.at.js\";\n| import \"core-js/modules/es.typed-array.find-last.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-reversed.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-reversed.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayToReversed = __webpack_require__(/*! ../internals/array-to-reversed */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-to-reversed.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-buffer-view-core.js");
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
    return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-sorted.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-sorted.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js");
var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-from-constructor-and-list.js");
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);
// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable(compareFn);
    var O = aTypedArray(this);
    var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
    return sort(A, compareFn);
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.with.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.with.js ***!
  \***********************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.typed-array.at.js\";\n| import \"core-js/modules/es.typed-array.find-last.js\";\n| import \"core-js/modules/es.typed-array.find-last-index.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.dom-exception.stack.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.dom-exception.stack.js ***!
  \***************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js ***!
  \************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| import \"core-js/modules/web.self.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js ***!
  \********************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js ***!
  \*****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js ***!
  \******************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/@adguard+logger@2.0.0/node_modules/@adguard/logger/dist/es/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@adguard+logger@2.0.0/node_modules/@adguard/logger/dist/es/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* unused harmony exports LogMethod, getErrorMessage */
/**
 * Checks if error has message.
 *
 * @param error Error object.
 *
 * @returns True if error has message.
 */
function isErrorWithMessage(error) {
    return (typeof error === 'object'
        && error !== null
        && 'message' in error
        && typeof error.message === 'string');
}
/**
 * Converts error to the error with a message.
 *
 * @param maybeError Possible error.
 *
 * @returns Error with a message.
 */
function toErrorWithMessage(maybeError) {
    if (isErrorWithMessage(maybeError)) {
        return maybeError;
    }
    try {
        return new Error(JSON.stringify(maybeError));
    }
    catch {
        // fallback in case there's an error stringifying the maybeError
        // like with circular references, for example.
        return new Error(String(maybeError));
    }
}
/**
 * Converts an error object to an error with a message. This method might be helpful to handle thrown errors.
 *
 * @param error Error object.
 *
 * @returns Message of the error.
 */
function getErrorMessage(error) {
    return toErrorWithMessage(error).message;
}

/**
 * Pads a number with leading zeros.
 *
 * @param num The number to pad.
 * @param size The number of digits to pad to.
 *
 * @returns The padded number.
 */
const pad = (num, size = 2) => {
    return num.toString().padStart(size, '0');
};
/**
 * Formats a date into an ISO 8601-like string with milliseconds.
 *
 * @param {Date|number} date The date object or timestamp to format.
 *
 * @returns {string} The formatted date string.
 */
const formatTime = (date) => {
    const d = (date instanceof Date) ? date : new Date(date);
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1); // Months are 0-based
    const day = pad(d.getDate());
    const hour = pad(d.getHours());
    const minute = pad(d.getMinutes());
    const second = pad(d.getSeconds());
    const millisecond = pad(d.getMilliseconds(), 3); // Milliseconds are 3 digits
    return `${year}-${month}-${day}T${hour}:${minute}:${second}:${millisecond}`;
};

/**
 * String presentation of log levels, for convenient users usage.
 * Ordered in the same way as LogLevelNumeric.
 *
 * First three levels will be shown to users, and the last two are for developers.
 */
var LogLevel;
(function (LogLevel) {
    /**
     * For errors.
     */
    LogLevel["Error"] = "error";
    /**
     * For not critical errors.
     */
    LogLevel["Warn"] = "warn";
    /**
     * For important information.
     * Use for general operational messages.
     */
    LogLevel["Info"] = "info";
    /**
     * For debugging purposes, e.g. Inside conditions, loops or some edge cases.
     */
    LogLevel["Debug"] = "debug";
    /**
     * For ultra-detailed, step-by-step traces (like stack traces or flow tracking).
     */
    LogLevel["Verbose"] = "verbose";
})(LogLevel || (LogLevel = {}));
/**
 * Log levels map, which maps number level to string level.
 * Ordered in the same way as LogLevelNumeric.
 */
const levelMapNumToString = {
    [1 /* LogLevelNumeric.Error */]: LogLevel.Error,
    [2 /* LogLevelNumeric.Warn */]: LogLevel.Warn,
    [3 /* LogLevelNumeric.Info */]: LogLevel.Info,
    [4 /* LogLevelNumeric.Debug */]: LogLevel.Debug,
    [5 /* LogLevelNumeric.Verbose */]: LogLevel.Verbose,
};
/**
 * Log levels map, which maps string level to number level.
 */
const levelMapStringToNum = Object.entries(levelMapNumToString)
    .reduce((acc, [key, value]) => {
    // Here, key is originally a string since Object.entries() returns [string, string][].
    // We need to cast the key to LogLevelNumeric correctly without causing type mismatches.
    const numericKey = Number(key);
    if (!Number.isNaN(numericKey)) {
        acc[value] = numericKey;
    }
    return acc;
}, {});
/**
 * Methods supported by console. Used to manage levels.
 * Ordered in the same way as LogLevelNumeric.
 */
var LogMethod;
(function (LogMethod) {
    LogMethod["Error"] = "error";
    LogMethod["Warn"] = "warn";
    LogMethod["Info"] = "info";
    LogMethod["Debug"] = "debug";
    LogMethod["Trace"] = "trace";
})(LogMethod || (LogMethod = {}));
/**
 * Simple logger with log levels.
 */
class Logger {
    currentLevelValue = 3 /* LogLevelNumeric.Info */;
    writer;
    /**
     * Constructor.
     *
     * @param writer Writer object.
     */
    constructor(writer = console) {
        this.writer = writer;
        // bind the logging methods to avoid losing context
        this.error = this.error.bind(this);
        this.warn = this.warn.bind(this);
        this.info = this.info.bind(this);
        this.debug = this.debug.bind(this);
        this.trace = this.trace.bind(this);
    }
    /**
     * Print error messages.
     * Use when something went wrong.
     *
     * @param args Printed arguments.
     */
    error(...args) {
        this.print(1 /* LogLevelNumeric.Error */, LogMethod.Error, args);
    }
    /**
     * Print warn messages.
     * Use when Something might go wrong.
     *
     * @param args Printed arguments.
     */
    warn(...args) {
        this.print(2 /* LogLevelNumeric.Warn */, LogMethod.Warn, args);
    }
    /**
     * Print messages you want to disclose to users.
     * Use for general operational messages.
     *
     * @param args Printed arguments.
     */
    info(...args) {
        this.print(3 /* LogLevelNumeric.Info */, LogMethod.Info, args);
    }
    /**
     * Print debug messages. Usually used for technical information.
     *
     * @param args Printed arguments.
     */
    debug(...args) {
        this.print(4 /* LogLevelNumeric.Debug */, LogMethod.Debug, args);
    }
    /**
     * Print trace messages.
     * Ultra-detailed, step-by-step traces (like stack traces or flow tracking).
     *
     * @param args Printed arguments.
     */
    trace(...args) {
        this.print(5 /* LogLevelNumeric.Verbose */, LogMethod.Trace, args);
    }
    /**
     * Getter for log level.
     *
     * @returns Logger level.
     */
    get currentLevel() {
        return levelMapNumToString[this.currentLevelValue];
    }
    /**
     * Setter for log level. With this method log level can be updated dynamically.
     *
     * @param logLevel Logger level.
     *
     * @throws Error if log level is not supported.
     */
    set currentLevel(logLevel) {
        const level = levelMapStringToNum[logLevel];
        if (level === undefined) {
            throw new Error(`Logger supports only the following levels: ${[Object.values(LogLevel).join(', ')]}`);
        }
        this.currentLevelValue = level;
    }
    /**
     * Converts error to string, and adds stack trace.
     *
     * @param error Error to print.
     *
     * @returns Error message.
     */
    static errorToString(error) {
        const message = getErrorMessage(error);
        return `${message}\nStack trace:\n${error.stack}`;
    }
    /**
     * Prints error message with stack trace.
     * It prints the message with the stack trace in a collapsed group.
     * This is useful for debugging purposes, as it allows to see the stack trace
     * without cluttering the console with too many messages.
     *
     * @param formattedTime Formatted time.
     * @param formattedArgs Formatted arguments.
     */
    printWithStackTrace(formattedTime, formattedArgs) {
        // If grouping is not supported, print just expanded trace, but this
        // leads to a lot of dirty logs in the console, since the stack trace
        // will be printed for every message.
        if (!this.writer.groupCollapsed || !this.writer.groupEnd) {
            // Print expanded trace
            this.writer.trace(formattedTime, ...formattedArgs);
            return;
        }
        // Print collapsed trace to make logs more readable and access to stack
        // trace by clicking on the group.
        this.writer.groupCollapsed(formattedTime, ...formattedArgs);
        this.writer.trace();
        this.writer.groupEnd();
    }
    /**
     * Wrapper over log methods.
     *
     * @param level Logger level.
     * @param method Logger method.
     * @param args Printed arguments.
     */
    print(level, method, args) {
        // Skip writing if the basic conditions are not met.
        if (this.currentLevelValue < level) {
            return;
        }
        // Do not print if no arguments are passed.
        if (!args || args.length === 0 || !args[0]) {
            return;
        }
        const formattedArgs = args.map((value) => {
            if (value instanceof Error) {
                return Logger.errorToString(value);
            }
            if (value && typeof value.message === 'string') {
                return value.message;
            }
            if (typeof value === 'object' && value !== null) {
                return JSON.stringify(value);
            }
            return String(value);
        });
        const formattedTime = `${formatTime(new Date())}:`;
        /**
         * If current log level is Debug or Verbose, print all channels with stack
         * trace via using writer.trace method to help identify the location of the
         * log.
         *
         * Exception is Error method, because it is already contains build-in
         * stack trace.
         */
        if (this.currentLevelValue >= levelMapStringToNum[LogLevel.Debug]
            && method !== LogMethod.Error) {
            this.printWithStackTrace(formattedTime, formattedArgs);
            return;
        }
        // Otherwise just print with requested method of writer.
        this.writer[method](formattedTime, ...formattedArgs);
    }
}




/***/ }),

/***/ "./node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copy: () => (/* binding */ copy)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-what */ "./node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js");



function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = ({}).propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable") carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function copy(target, options = {}) {
    if ((0,is_what__WEBPACK_IMPORTED_MODULE_2__.isArray)(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!(0,is_what__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(target)) {
        return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [
        ...props,
        ...symbols
    ].reduce((carry, key)=>{
        if ((0,is_what__WEBPACK_IMPORTED_MODULE_2__.isArray)(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}



/***/ }),

/***/ "./node_modules/.pnpm/idb@8.0.2/node_modules/idb/build/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/idb@8.0.2/node_modules/idb/build/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB)
/* harmony export */ });
/* unused harmony exports unwrap, wrap */
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.includes.js");


const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const transactionDoneMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    // This mapping exists in reverseTransformCache but doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function(...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(this.request);
        };
    }
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event)=>{
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event.newVersion, event));
    }
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event)=>blocking(event.oldVersion, event.newVersion, event));
        }
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event));
    }
    return wrap(request).then(()=>undefined);
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
const advanceMethodProps = [
    'continue',
    'continuePrimaryKey',
    'advance'
];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get (target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function(...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    }
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor) return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while(cursor){
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore,
        IDBCursor
    ]) || prop === 'iterate' && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore
    ]);
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get (target, prop, receiver) {
            if (isIteratorProp(target, prop)) return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has (target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
    }));



/***/ }),

/***/ "./node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject)
/* harmony export */ });
/* unused harmony exports getType, isAnyObject, isBlob, isBoolean, isDate, isEmptyArray, isEmptyObject, isEmptyString, isError, isFile, isFullArray, isFullObject, isFullString, isFunction, isInstanceOf, isMap, isNaNValue, isNegativeNumber, isNull, isNullOrUndefined, isNumber, isObject, isObjectLike, isOneOf, isPositiveNumber, isPrimitive, isPromise, isRegExp, isSet, isString, isSymbol, isType, isUndefined, isWeakMap, isWeakSet */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");

function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
function isAnyObject(payload) {
    return getType(payload) === "Object";
}
function isArray(payload) {
    return getType(payload) === "Array";
}
function isBlob(payload) {
    return getType(payload) === "Blob";
}
function isBoolean(payload) {
    return getType(payload) === "Boolean";
}
function isDate(payload) {
    return getType(payload) === "Date" && !isNaN(payload);
}
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
function isPlainObject(payload) {
    if (getType(payload) !== "Object") return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
function isEmptyString(payload) {
    return payload === "";
}
function isError(payload) {
    return getType(payload) === "Error" || payload instanceof Error;
}
function isFile(payload) {
    return getType(payload) === "File";
}
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
function isString(payload) {
    return getType(payload) === "String";
}
function isFullString(payload) {
    return isString(payload) && payload !== "";
}
function isFunction(payload) {
    return typeof payload === "function";
}
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError("Type must be a function");
    }
    if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
        throw new TypeError("Type is not a class");
    }
    const name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}
function isInstanceOf(value, classOrClassName) {
    if (typeof classOrClassName === "function") {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (isType(p, classOrClassName)) {
                return true;
            }
        }
        return false;
    } else {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (getType(p) === classOrClassName) {
                return true;
            }
        }
        return false;
    }
}
function isMap(payload) {
    return getType(payload) === "Map";
}
function isNaNValue(payload) {
    return getType(payload) === "Number" && isNaN(payload);
}
function isNumber(payload) {
    return getType(payload) === "Number" && !isNaN(payload);
}
function isNegativeNumber(payload) {
    return isNumber(payload) && payload < 0;
}
function isNull(payload) {
    return getType(payload) === "Null";
}
function isOneOf(a, b, c, d, e) {
    return (value)=>a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isUndefined(payload) {
    return getType(payload) === "Undefined";
}
const isNullOrUndefined = isOneOf(isNull, isUndefined);
function isObject(payload) {
    return isPlainObject(payload);
}
function isObjectLike(payload) {
    return isAnyObject(payload);
}
function isPositiveNumber(payload) {
    return isNumber(payload) && payload > 0;
}
function isSymbol(payload) {
    return getType(payload) === "Symbol";
}
function isPrimitive(payload) {
    return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
function isPromise(payload) {
    return getType(payload) === "Promise";
}
function isRegExp(payload) {
    return getType(payload) === "RegExp";
}
function isSet(payload) {
    return getType(payload) === "Set";
}
function isWeakMap(payload) {
    return getType(payload) === "WeakMap";
}
function isWeakSet(payload) {
    return getType(payload) === "WeakSet";
}



/***/ }),

/***/ "./node_modules/.pnpm/nanoid@3.3.6/node_modules/nanoid/index.browser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/nanoid@3.3.6/node_modules/nanoid/index.browser.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nanoid: () => (/* binding */ nanoid)
/* harmony export */ });
/* unused harmony exports customAlphabet, customRandom, random */
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");









let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) {
            id += byte.toString(36);
        } else if (byte < 62) {
            id += (byte - 26).toString(36).toUpperCase();
        } else if (byte > 62) {
            id += '-';
        } else {
            id += '_';
        }
        return id;
    }, '');



/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/accessDeep.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/accessDeep.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDeep: () => (/* binding */ getDeep),
/* harmony export */   setDeep: () => (/* binding */ setDeep)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js");
 //# sourceMappingURL=accessDeep.js.map


const getNthKey = (value, n)=>{
    const keys = value.keys();
    while(n > 0){
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_2__.includes)(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_2__.includes)(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_2__.includes)(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(object)) {
            object = getNthKey(object, +key);
        } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isMap)(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch(type){
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
};
const setDeep = (object, path, mapper)=>{
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for(let i = 0; i < path.length - 1; i++){
        const key = path[i];
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(parent)) {
            const index = +key;
            parent = parent[index];
        } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(parent)) {
            parent = parent[key];
        } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isMap)(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch(type){
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isSet)(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isMap)(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch(type){
            case 'key':
                {
                    const newKey = mapper(keyToRow);
                    parent.set(newKey, parent.get(keyToRow));
                    if (newKey !== keyToRow) {
                        parent.delete(keyToRow);
                    }
                    break;
                }
            case 'value':
                {
                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                    break;
                }
        }
    }
    return object;
};


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/class-registry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/class-registry.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassRegistry: () => (/* binding */ ClassRegistry)
/* harmony export */ });
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js");

class ClassRegistry extends _registry_js__WEBPACK_IMPORTED_MODULE_0__.Registry {
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        } else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = new Map();
    }
} //# sourceMappingURL=class-registry.js.map


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/custom-transformer-registry.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/custom-transformer-registry.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomTransformerRegistry: () => (/* binding */ CustomTransformerRegistry)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js");

class CustomTransformerRegistry {
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.find)(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
    constructor(){
        this.transfomers = {};
    }
} //# sourceMappingURL=custom-transformer-registry.js.map


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/double-indexed-kv.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/double-indexed-kv.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleIndexedKV: () => (/* binding */ DoubleIndexedKV)
/* harmony export */ });
class DoubleIndexedKV {
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
    constructor(){
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
} //# sourceMappingURL=double-indexed-kv.js.map


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuperJSON: () => (/* binding */ SuperJSON)
/* harmony export */ });
/* unused harmony exports default, serialize, deserialize, stringify, parse, registerClass, registerCustom, registerSymbol, allowErrorProps */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var _class_registry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-registry.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/class-registry.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registry.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js");
/* harmony import */ var _custom_transformer_registry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-transformer-registry.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/custom-transformer-registry.js");
/* harmony import */ var _plainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plainer.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/plainer.js");
/* harmony import */ var copy_anything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-anything */ "./node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js");
 //# sourceMappingURL=index.js.map





class SuperJSON {
    serialize(object) {
        const identities = new Map();
        const output = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.walker)(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.generateReferentialEqualityAnnotations)(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations
            };
        }
        return res;
    }
    deserialize(payload) {
        const { json, meta } = payload;
        let result = (0,copy_anything__WEBPACK_IMPORTED_MODULE_4__.copy)(json);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
            result = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.applyValueAnnotations)(result, meta.values, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
            result = (0,_plainer_js__WEBPACK_IMPORTED_MODULE_3__.applyReferentialEqualityAnnotations)(result, meta.referentialEqualities);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string));
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer
        });
    }
    allowErrorProps(...props) {
        this.allowedErrorProps.push(...props);
    }
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */ constructor({ dedupe = false } = {}){
        this.classRegistry = new _class_registry_js__WEBPACK_IMPORTED_MODULE_1__.ClassRegistry();
        this.symbolRegistry = new _registry_js__WEBPACK_IMPORTED_MODULE_5__.Registry((s)=>{
            var _s_description;
            return (_s_description = s.description) !== null && _s_description !== void 0 ? _s_description : '';
        });
        this.customTransformerRegistry = new _custom_transformer_registry_js__WEBPACK_IMPORTED_MODULE_2__.CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
}

SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);

const serialize = SuperJSON.serialize;
const deserialize = SuperJSON.deserialize;
const stringify = SuperJSON.stringify;
const parse = SuperJSON.parse;
const registerClass = SuperJSON.registerClass;
const registerCustom = SuperJSON.registerCustom;
const registerSymbol = SuperJSON.registerSymbol;
const allowErrorProps = SuperJSON.allowErrorProps;


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBigint: () => (/* binding */ isBigint),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isInfinite: () => (/* binding */ isInfinite),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isNaNValue: () => (/* binding */ isNaNValue),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isTypedArray: () => (/* binding */ isTypedArray),
/* harmony export */   isURL: () => (/* binding */ isURL),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
/* unused harmony exports isNull, isString, isNumber, isBoolean */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js");
 //# sourceMappingURL=is.js.map



const getType = (payload)=>Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload)=>typeof payload === 'undefined';
const isNull = (payload)=>payload === null;
const isPlainObject = (payload)=>{
    if (typeof payload !== 'object' || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload)=>isPlainObject(payload) && Object.keys(payload).length === 0;
const isArray = (payload)=>Array.isArray(payload);
const isString = (payload)=>typeof payload === 'string';
const isNumber = (payload)=>typeof payload === 'number' && !isNaN(payload);
const isBoolean = (payload)=>typeof payload === 'boolean';
const isRegExp = (payload)=>payload instanceof RegExp;
const isMap = (payload)=>payload instanceof Map;
const isSet = (payload)=>payload instanceof Set;
const isSymbol = (payload)=>getType(payload) === 'Symbol';
const isDate = (payload)=>payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload)=>payload instanceof Error;
const isNaNValue = (payload)=>typeof payload === 'number' && isNaN(payload);
const isPrimitive = (payload)=>isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
const isBigint = (payload)=>typeof payload === 'bigint';
const isInfinite = (payload)=>payload === Infinity || payload === -Infinity;
const isTypedArray = (payload)=>ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload)=>payload instanceof URL;


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/pathstringifier.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/pathstringifier.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeKey: () => (/* binding */ escapeKey),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   stringifyPath: () => (/* binding */ stringifyPath)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
 //# sourceMappingURL=pathstringifier.js.map
const escapeKey = (key)=>key.replace(/\./g, '\\.');
const stringifyPath = (path)=>path.map(String).map(escapeKey).join('.');
const parsePath = (string)=>{
    const result = [];
    let segment = '';
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
};


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/plainer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/plainer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyReferentialEqualityAnnotations: () => (/* binding */ applyReferentialEqualityAnnotations),
/* harmony export */   applyValueAnnotations: () => (/* binding */ applyValueAnnotations),
/* harmony export */   generateReferentialEqualityAnnotations: () => (/* binding */ generateReferentialEqualityAnnotations),
/* harmony export */   walker: () => (/* binding */ walker)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js");
/* harmony import */ var _pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathstringifier.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/pathstringifier.js");
/* harmony import */ var _transformer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformer.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/transformer.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js");
/* harmony import */ var _accessDeep_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessDeep.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/accessDeep.js");
 //# sourceMappingURL=plainer.js.map







function traverse(tree, walker, origin = []) {
    if (!tree) {
        return;
    }
    if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(tree)) {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(tree, (subtree, key)=>traverse(subtree, walker, [
                ...origin,
                ...(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.parsePath)(key)
            ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(children, (child, key)=>{
            traverse(child, walker, [
                ...origin,
                ...(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.parsePath)(key)
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path)=>{
        plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_6__.setDeep)(plain, path, (v)=>(0,_transformer_js__WEBPACK_IMPORTED_MODULE_4__.untransformValue)(v, type, superJson));
    });
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
        const object = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_6__.getDeep)(plain, (0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.parsePath)(path));
        identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.parsePath).forEach((identicalObjectPath)=>{
            plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_6__.setDeep)(plain, identicalObjectPath, ()=>object);
        });
    }
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = (0,_accessDeep_js__WEBPACK_IMPORTED_MODULE_6__.setDeep)(plain, (0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.parsePath)(identicalPath), ()=>plain);
        });
        if (other) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(other, apply);
        }
    } else {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson)=>(0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(object) || (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(object) || (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isMap)(object) || (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isSet)(object) || (0,_transformer_js__WEBPACK_IMPORTED_MODULE_4__.isInstanceOfRegisteredClass)(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [
            path
        ]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach((paths)=>{
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths.map((path)=>path.map(String)).sort((a, b)=>a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.stringifyPath);
        } else {
            result[(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.stringifyPath)(representativePath)] = identicalPaths.map(_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.stringifyPath);
        }
    });
    if (rootEqualityPaths) {
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(result)) {
            return [
                rootEqualityPaths
            ];
        } else {
            return [
                rootEqualityPaths,
                result
            ];
        }
    } else {
        return (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(result) ? undefined : result;
    }
}
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = new Map())=>{
    const primitive = (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isPrimitive)(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe ? {
                transformedValue: null
            } : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = (0,_transformer_js__WEBPACK_IMPORTED_MODULE_4__.transformValue)(object, superJson);
        const result = transformed ? {
            transformedValue: transformed.value,
            annotations: [
                transformed.type
            ]
        } : {
            transformedValue: object
        };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_5__.includes)(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null
        };
    }
    const transformationResult = (0,_transformer_js__WEBPACK_IMPORTED_MODULE_4__.transformValue)(object, superJson);
    var _transformationResult_value;
    const transformed = (_transformationResult_value = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _transformationResult_value !== void 0 ? _transformationResult_value : object;
    const transformedValue = (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(transformed) ? [] : {};
    const innerAnnotations = {};
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(transformed, (value, index)=>{
        if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
            throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(recursiveResult.annotations)) {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.forEach)(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[(0,_pathstringifier_js__WEBPACK_IMPORTED_MODULE_3__.escapeKey)(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(innerAnnotations) ? {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type
        ] : undefined
    } : {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type,
            innerAnnotations
        ] : innerAnnotations
    };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
};


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Registry: () => (/* binding */ Registry)
/* harmony export */ });
/* harmony import */ var _double_indexed_kv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./double-indexed-kv.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/double-indexed-kv.js");

class Registry {
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new _double_indexed_kv_js__WEBPACK_IMPORTED_MODULE_0__.DoubleIndexedKV();
    }
} //# sourceMappingURL=registry.js.map


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/transformer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/transformer.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInstanceOfRegisteredClass: () => (/* binding */ isInstanceOfRegisteredClass),
/* harmony export */   transformValue: () => (/* binding */ transformValue),
/* harmony export */   untransformValue: () => (/* binding */ untransformValue)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util.js */ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js");
 //# sourceMappingURL=transformer.js.map













function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const simpleRules = [
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isUndefined, 'undefined', ()=>null, ()=>undefined),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isBigint, 'bigint', (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isDate, 'Date', (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isError, 'Error', (v, superJson)=>{
        const baseError = {
            name: v.name,
            message: v.message
        };
        superJson.allowedErrorProps.forEach((prop)=>{
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson)=>{
        const e = new Error(v.message);
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach((prop)=>{
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isRegExp, 'regexp', (v)=>'' + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isSet, 'set', // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isMap, 'map', (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>(0,_is_js__WEBPACK_IMPORTED_MODULE_12__.isNaNValue)(v) || (0,_is_js__WEBPACK_IMPORTED_MODULE_12__.isInfinite)(v), 'number', (v)=>{
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_12__.isNaNValue)(v)) {
            return 'NaN';
        }
        if (v > 0) {
            return 'Infinity';
        } else {
            return '-Infinity';
        }
    }, Number),
    simpleTransformation((v)=>v === 0 && 1 / v === -Infinity, 'number', ()=>{
        return '-0';
    }, Number),
    simpleTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isURL, 'URL', (v)=>v.toString(), (v)=>new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const symbolRule = compositeTransformation((s, superJson)=>{
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_12__.isSymbol)(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson)=>{
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return [
        'symbol',
        identifier
    ];
}, (v)=>v.description, (_, a, superJson)=>{
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error('Trying to deserialize unknown symbol');
    }
    return value;
});
const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
].reduce((obj, ctor)=>{
    obj[ctor.name] = ctor;
    return obj;
}, {});
const typedArrayRule = compositeTransformation(_is_js__WEBPACK_IMPORTED_MODULE_12__.isTypedArray, (v)=>[
        'typed-array',
        v.constructor.name
    ], (v)=>[
        ...v
    ], (v, a)=>{
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error('Trying to deserialize unknown typed array');
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson)=>{
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return [
        'class',
        identifier
    ];
}, (clazz, superJson)=>{
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return {
            ...clazz
        };
    }
    const result = {};
    allowedProps.forEach((prop)=>{
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson)=>{
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error('Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564');
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson)=>{
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return [
        'custom',
        transformer.name
    ];
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error('Trying to deserialize unknown custom value');
    }
    return transformer.deserialize(v);
});
const compositeRules = [
    classRule,
    symbolRule,
    customRule,
    typedArrayRule
];
const transformValue = (value, superJson)=>{
    const applicableCompositeRule = (0,_util_js__WEBPACK_IMPORTED_MODULE_13__.findArr)(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = (0,_util_js__WEBPACK_IMPORTED_MODULE_13__.findArr)(simpleRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation
        };
    }
    return undefined;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule)=>{
    simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson)=>{
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_12__.isArray)(type)) {
        switch(type[0]){
            case 'symbol':
                return symbolRule.untransform(json, type, superJson);
            case 'class':
                return classRule.untransform(json, type, superJson);
            case 'custom':
                return customRule.untransform(json, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    } else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json, superJson);
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findArr: () => (/* binding */ findArr),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   includes: () => (/* binding */ includes)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
 //# sourceMappingURL=util.js.map
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for(const key in record){
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for(let i = 0; i < valuesNotNever.length; i++){
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
function forEach(record, run) {
    Object.entries(record).forEach(([key, value])=>run(value, key));
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for(let i = 0; i < record.length; i++){
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************!*\
  !*** ./Extension/pages/post-install/index.js ***!
  \***********************************************/
/* harmony import */ var _src_common_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/common/i18n */ "./Extension/src/common/i18n.ts");
/* harmony import */ var _src_pages_post_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/pages/post-install */ "./Extension/src/pages/post-install.ts");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 

_src_common_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.init();
_src_pages_post_install__WEBPACK_IMPORTED_MODULE_1__.PostInstall.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHFDQUFxQztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSxrQkFBa0IsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxpQ0FBaUMsdUJBQXVCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFJO0FBQ1R1RixnRUFBV0EsQ0FBQ3ZGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvYmFja2dyb3VuZC9zdG9yYWdlcy9icm93c2VyLXN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2JhY2tncm91bmQvc3RvcmFnZXMvaHlicmlkLXN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2JhY2tncm91bmQvc3RvcmFnZXMvaWRiLXN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2JhY2tncm91bmQvc3RvcmFnZXMvc2hhcmVkLWluc3RhbmNlcy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL2kxOG4udHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbW1vbi9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbW1vbi9tZXNzYWdlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbW1vbi9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL21lc3NhZ2UtaGFuZGxlci50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL3NlbmQtbWVzc2FnZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvcGFnZXMvcG9zdC1pbnN0YWxsLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vRXh0ZW5zaW9uL3NyYy9wYWdlcy9zZXJ2aWNlcy9tZXNzZW5nZXIudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vbmFub2JhckAwLjQuMi9ub2RlX21vZHVsZXMvbmFub2Jhci9uYW5vYmFyLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20tY29uc3RydWN0b3ItYW5kLWxpc3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXRvLXJldmVyc2VkLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtbm9kZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYWtlLWJ1aWx0LWluLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuYXQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy50eXBlZC1hcnJheS50by1yZXZlcnNlZC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnRvLXNvcnRlZC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYWRndWFyZCtsb2dnZXJAMi4wLjAvbm9kZV9tb2R1bGVzL0BhZGd1YXJkL2xvZ2dlci9kaXN0L2VzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3B5LWFueXRoaW5nQDMuMC41L25vZGVfbW9kdWxlcy9jb3B5LWFueXRoaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vaWRiQDguMC4yL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtd2hhdEA0LjEuMTYvbm9kZV9tb2R1bGVzL2lzLXdoYXQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRAMy4zLjYvbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9hY2Nlc3NEZWVwLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9jbGFzcy1yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvY3VzdG9tLXRyYW5zZm9ybWVyLXJlZ2lzdHJ5LnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9kb3VibGUtaW5kZXhlZC1rdi50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL2lzLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy9wYXRoc3RyaW5naWZpZXIudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3BsYWluZXIudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi4vc3JjL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4uL3NyYy90cmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9wYWdlcy9wb3N0LWluc3RhbGwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IHsgdHlwZSBTdG9yYWdlIH0gZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgdHlwZSBFeHRlbmRlZFN0b3JhZ2VJbnRlcmZhY2UgfSBmcm9tICcuL3N0b3JhZ2UtaW50ZXJmYWNlJztcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBTdG9yYWdlQXJlYSB3aXRoIGRldi1mcmllbmRseSBpbnRlcmZhY2UuXG4gKlxuICogQHRlbXBsYXRlIERhdGEgVGhlIHR5cGUgb2YgdGhlIHZhbHVlIHN0b3JlZCBpbiB0aGUgc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJTdG9yYWdlPERhdGEgPSB1bmtub3duPiBpbXBsZW1lbnRzIEV4dGVuZGVkU3RvcmFnZUludGVyZmFjZTxzdHJpbmcsIERhdGEsICdhc3luYyc+IHtcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UuU3RvcmFnZUFyZWE7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGluc3RhbmNlIG9mIHRoZSBCcm93c2VyU3RvcmFnZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9yYWdlIFRoZSBzdG9yYWdlIGFyZWEgdG8gdXNlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2U6IFN0b3JhZ2UuU3RvcmFnZUFyZWEpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgU3RvcmFnZSBrZXkuXG4gICAgICogQHBhcmFtIHZhbHVlIFN0b3JhZ2UgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNldChrZXk6IHN0cmluZywgdmFsdWU6IERhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldCh7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBTdG9yYWdlIGtleS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFN0b3JhZ2UgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8RGF0YSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldChrZXkpLnRoZW4oKGRhdGEpID0+IGRhdGFba2V5XSBhcyBEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGRhdGEgZnJvbSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBTdG9yYWdlIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG11bHRpcGxlIGtleS12YWx1ZSBwYWlycyBpbiB0aGUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gc2V0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBhbGwgb3BlcmF0aW9ucyB3ZXJlIHN1Y2Nlc3NmdWwsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgKiBhd2FpdCBzdG9yYWdlLnNldE11bHRpcGxlKHtcbiAgICAgKiAgICBrZXkxOiAndmFsdWUxJyxcbiAgICAgKiAgICBrZXkyOiAndmFsdWUyJyxcbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgc29tZSBraW5kIG9mIHRyYW5zYWN0aW9uIHRvIGVuc3VyZSBhdG9taWNpdHksIGlmIHBvc3NpYmxlXG4gICAgLy8gTm90ZTogV2Ugb25seSB1c2UgdGhpcyBtZXRob2QgZm9yIEZpcmVmb3ggaWYgXCJOZXZlciBSZW1lbWJlciBIaXN0b3J5XCIgaXMgZW5hYmxlZFxuICAgIHB1YmxpYyBhc3luYyBzZXRNdWx0aXBsZShkYXRhOiBSZWNvcmQ8c3RyaW5nLCBEYXRhPik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG11bHRpcGxlIGtleS12YWx1ZSBwYWlycyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleXMgVGhlIGtleXMgdG8gcmVtb3ZlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBhbGwgb3BlcmF0aW9ucyB3ZXJlIHN1Y2Nlc3NmdWwsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVtb3ZlTXVsdGlwbGUoa2V5czogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnJlbW92ZShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBlbnRyaWVzKCk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgRGF0YT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQobnVsbCkgYXMgUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBEYXRhPj47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBrZXlzIGZyb20gdGhlIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwga2V5cyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGF3YWl0IHRoaXMuZW50cmllcygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHN0b3JhZ2UgaGFzIGEga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUga2V5IGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBoYXMoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoa2V5KS50aGVuKChkYXRhKSA9PiBrZXkgaW4gZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBUaGlzIGZpbGUgaW1wbGVtZW50cyBhIGh5YnJpZCBzdG9yYWdlIHNvbHV0aW9uIHRoYXQgYWJzdHJhY3RzIG92ZXIgZGlmZmVyZW50IHN0b3JhZ2UgbWVjaGFuaXNtcyxcbiAqIHByb3ZpZGluZyBhIHVuaWZpZWQgQVBJIGZvciBzdG9yYWdlIG9wZXJhdGlvbnMuIEl0IGF1dG9tYXRpY2FsbHkgY2hvb3NlcyBiZXR3ZWVuIEluZGV4ZWREQiBzdG9yYWdlIGFuZFxuICogYSBmYWxsYmFjayBzdG9yYWdlIG1lY2hhbmlzbSBiYXNlZCBvbiB0aGUgZW52aXJvbm1lbnQncyBjYXBhYmlsaXRpZXMuXG4gKi9cbmltcG9ydCB7IHR5cGUgU3RvcmFnZSB9IGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHsgU3VwZXJKU09OLCB0eXBlIFN1cGVySlNPTlJlc3VsdCB9IGZyb20gJ3N1cGVyanNvbic7XG5pbXBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH0gZnJvbSAnaWRiJztcblxuaW1wb3J0IHsgdHlwZSBFeHRlbmRlZFN0b3JhZ2VJbnRlcmZhY2UgfSBmcm9tICcuL3N0b3JhZ2UtaW50ZXJmYWNlJztcbmltcG9ydCB7IEJyb3dzZXJTdG9yYWdlIH0gZnJvbSAnLi9icm93c2VyLXN0b3JhZ2UnO1xuaW1wb3J0IHsgSURCU3RvcmFnZSB9IGZyb20gJy4vaWRiLXN0b3JhZ2UnO1xuXG4vLyBUT0RPOiBTdXBlckpTT05WYWx1ZSBpcyBub3QgZXhwb3J0ZWQgZnJvbSBzdXBlcmpzb24sIHNvIHdlIGhhdmUgdG8gcmVkZWZpbmUgaXQgaGVyZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mbGlnaHRjb250cm9saHEvc3VwZXJqc29uL2lzc3Vlcy8zMDlcbnR5cGUgU3VwZXJKU09OVmFsdWUgPSBhbnk7XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGh5YnJpZCBzdG9yYWdlIG1lY2hhbmlzbSB0aGF0IGNhbiBzd2l0Y2ggYmV0d2VlbiBJbmRleGVkREIgYW5kIGEgZmFsbGJhY2sgc3RvcmFnZVxuICogYmFzZWQgb24gYnJvd3NlciBjYXBhYmlsaXRpZXMgYW5kIGVudmlyb25tZW50IGNvbnN0cmFpbnRzLiBUaGlzIGNsYXNzIGFkaGVyZXMgdG8gdGhlIFN0b3JhZ2VJbnRlcmZhY2UsXG4gKiBhbGxvd2luZyBmb3IgYXN5bmNocm9ub3VzIGdldCBhbmQgc2V0IG9wZXJhdGlvbnMuXG4gKlxuICogQHRlbXBsYXRlIERhdGEgVGhlIHR5cGUgb2YgdGhlIHZhbHVlIHN0b3JlZCBpbiB0aGUgc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEh5YnJpZFN0b3JhZ2U8RGF0YSA9IHVua25vd24+IGltcGxlbWVudHMgRXh0ZW5kZWRTdG9yYWdlSW50ZXJmYWNlPHN0cmluZywgRGF0YSwgJ2FzeW5jJz4ge1xuICAgIC8qKlxuICAgICAqIEEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgSW5kZXhlZERCIHN1cHBvcnQgaGFzIGFscmVhZHkgYmVlbiBjaGVja2VkLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGlzSURCQ2FwYWJpbGl0eUNoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHdoZXRoZXIgSW5kZXhlZERCIGlzIHN1cHBvcnRlZCBpbiB0aGUgZW52aXJvbm1lbnQuXG4gICAgICogVGhpcyBwcm9taXNlIGlzIHVzZWQgdG8gY2FjaGUgdGhlIHJlc3VsdCBvZiB0aGUgc3VwcG9ydCBjaGVjayB0byBwcmV2ZW50IG11bHRpcGxlIGNoZWNrcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBpZGJDYXBhYmlsaXR5Q2hlY2tlclByb21pc2U6IFByb21pc2U8Ym9vbGVhbj4gfCBudWxsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHN0b3JlcyB0aGUgcmVzdWx0IG9mIHRoZSBJbmRleGVkREIgc3VwcG9ydCBjaGVjay5cbiAgICAgKiBJZiB0cnVlLCBJbmRleGVkREIgaXMgc3VwcG9ydGVkIGluIHRoZSBlbnZpcm9ubWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBpZGJTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFByZWZpeCBmb3IgdGhlIHRlc3QgSW5kZXhlZERCIGRhdGFiYXNlIG5hbWUuXG4gICAgICogVGhpcyB0ZXN0IGRhdGFiYXNlIGlzIHVzZWQgdG8gY2hlY2sgaWYgSW5kZXhlZERCIGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBURVNUX0lEQl9OQU1FX1BSRUZJWCA9ICd0ZXN0Xyc7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIG51bWJlciBmb3IgdGhlIHRlc3QgSW5kZXhlZERCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRFU1RfSURCX1ZFUlNJT04gPSAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGtleSB1c2VkIHRvIHN0b3JlIG1ldGFkYXRhIGluIFN1cGVySlNPTi1zZXJpYWxpemVkIGRhdGEuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VQRVJKU09OX01FVEFfS0VZID0gJ21ldGEnO1xuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGluc3RhbmNlIG9mIHRoZSBzZWxlY3RlZCBzdG9yYWdlIG1lY2hhbmlzbS5cbiAgICAgKlxuICAgICAqIEBub3RlIFdlIHVzZSBTdXBlckpTT04gdG8gc2VyaWFsaXplIGFuZCBkZXNlcmlhbGl6ZSB0aGUgZGF0YSB3aGVuIHVzaW5nIHRoZSBmYWxsYmFjayBzdG9yYWdlIG1lY2hhbmlzbSxcbiAgICAgKiBiZWNhdXNlIGl0IG9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSBkYXRhLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RvcmFnZTogSURCU3RvcmFnZTxEYXRhPiB8IEJyb3dzZXJTdG9yYWdlPFN1cGVySlNPTlJlc3VsdCB8IERhdGE+IHwgbnVsbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RvcmFnZSBhcmVhIHRvIHVzZSB3aGVuIEluZGV4ZWREQiBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgZmFsbGJhY2tTdG9yYWdlOiBTdG9yYWdlLlN0b3JhZ2VBcmVhO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiB0aGUgSHlicmlkU3RvcmFnZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmYWxsYmFja1N0b3JhZ2UgVGhlIHN0b3JhZ2UgYXJlYSB0byB1c2Ugd2hlbiBJbmRleGVkREIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmYWxsYmFja1N0b3JhZ2U6IFN0b3JhZ2UuU3RvcmFnZUFyZWEpIHtcbiAgICAgICAgdGhpcy5mYWxsYmFja1N0b3JhZ2UgPSBmYWxsYmFja1N0b3JhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBzdG9yYWdlIGlzIGFuIGluc3RhbmNlIG9mIElEQlN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmFnZSBUaGUgc3RvcmFnZSBpbnN0YW5jZSB0byBjaGVjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0b3JhZ2UgaXMgYW4gaW5zdGFuY2Ugb2YgSURCU3RvcmFnZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGlzSWRiU3RvcmFnZShcbiAgICAgICAgc3RvcmFnZTogSURCU3RvcmFnZTx1bmtub3duPiB8IEJyb3dzZXJTdG9yYWdlPHVua25vd24+LFxuICAgICk6IHN0b3JhZ2UgaXMgSURCU3RvcmFnZTx1bmtub3duPiB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlIGluc3RhbmNlb2YgSURCU3RvcmFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBhcHByb3ByaWF0ZSBzdG9yYWdlIG1lY2hhbmlzbSB0byB1c2UuIElmIEluZGV4ZWREQiBpcyBzdXBwb3J0ZWQsIGl0IHVzZXMgSURCU3RvcmFnZTtcbiAgICAgKiBvdGhlcndpc2UsIGl0IGZhbGxzIGJhY2sgdG8gYSBnZW5lcmljIFN0b3JhZ2UgbWVjaGFuaXNtLiBUaGlzIHNlbGVjdGlvbiBpcyBtYWRlIG9uY2UgYW5kIGNhY2hlZFxuICAgICAqIGZvciBzdWJzZXF1ZW50IG9wZXJhdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RvcmFnZSBpbnN0YW5jZSB0byBiZSB1c2VkIGZvciBkYXRhIG9wZXJhdGlvbnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRTdG9yYWdlKCk6IFByb21pc2U8SURCU3RvcmFnZTxEYXRhPiB8IEJyb3dzZXJTdG9yYWdlPFN1cGVySlNPTlJlc3VsdCB8IERhdGE+PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXdhaXQgSHlicmlkU3RvcmFnZS5pc0lEQlN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgSURCU3RvcmFnZTxEYXRhPigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IEJyb3dzZXJTdG9yYWdlPFN1cGVySlNPTlJlc3VsdCB8IERhdGE+KHRoaXMuZmFsbGJhY2tTdG9yYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gZGF0YSB1c2luZyBTdXBlckpTT04uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZXJpYWxpemUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgc2VyaWFsaXplZCBkYXRhLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplID0gKGRhdGE6IFN1cGVySlNPTlZhbHVlKTogU3VwZXJKU09OUmVzdWx0ID0+IFN1cGVySlNPTi5zZXJpYWxpemUoZGF0YSk7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgdGhlIGdpdmVuIGRhdGEgdXNpbmcgU3VwZXJKU09OLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZGVzZXJpYWxpemUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVzZXJpYWxpemVkIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSA9IChkYXRhOiBTdXBlckpTT05SZXN1bHQpOiBTdXBlckpTT05WYWx1ZSA9PiBTdXBlckpTT04uZGVzZXJpYWxpemUoZGF0YSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgU3VwZXJKU09OUmVzdWx0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgU3VwZXJKU09OUmVzdWx0LCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNTdXBlckpTT05SZXN1bHQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBTdXBlckpTT05SZXN1bHQge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiBIeWJyaWRTdG9yYWdlLlNVUEVSSlNPTl9NRVRBX0tFWSBpbiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgSW5kZXhlZERCIGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAgICAgKiBUaGlzIGlzIGRldGVybWluZWQgYnkgdHJ5aW5nIHRvIG9wZW4gYSB0ZXN0IGRhdGFiYXNlOyBpZiBzdWNjZXNzZnVsLCBJbmRleGVkREIgaXMgc3VwcG9ydGVkLlxuICAgICAqIFRoZSByZXN1bHQgb2YgdGhpcyBjaGVjayBpcyBjYWNoZWQgdG8gcHJldmVudCBtdWx0aXBsZSBjaGVja3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIEluZGV4ZWREQiBpcyBzdXBwb3J0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGlzSURCU3VwcG9ydGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBpZiAoSHlicmlkU3RvcmFnZS5pc0lEQkNhcGFiaWxpdHlDaGVja2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gSHlicmlkU3RvcmFnZS5pZGJTdXBwb3J0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSHlicmlkU3RvcmFnZS5pZGJDYXBhYmlsaXR5Q2hlY2tlclByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBIeWJyaWRTdG9yYWdlLmlkYkNhcGFiaWxpdHlDaGVja2VyUHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEh5YnJpZFN0b3JhZ2UuaWRiQ2FwYWJpbGl0eUNoZWNrZXJQcm9taXNlID0gKGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdERiTmFtZSA9IGAke0h5YnJpZFN0b3JhZ2UuVEVTVF9JREJfTkFNRV9QUkVGSVh9JHtuYW5vaWQoKX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3REYiA9IGF3YWl0IG9wZW5EQih0ZXN0RGJOYW1lLCBIeWJyaWRTdG9yYWdlLlRFU1RfSURCX1ZFUlNJT04pO1xuICAgICAgICAgICAgICAgIHRlc3REYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZURCKHRlc3REYk5hbWUpO1xuICAgICAgICAgICAgICAgIEh5YnJpZFN0b3JhZ2UuaWRiU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBIeWJyaWRTdG9yYWdlLmlkYlN1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBIeWJyaWRTdG9yYWdlLmlzSURCQ2FwYWJpbGl0eUNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIEh5YnJpZFN0b3JhZ2UuaWRiU3VwcG9ydGVkO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiBIeWJyaWRTdG9yYWdlLmlkYkNhcGFiaWxpdHlDaGVja2VyUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb25vdXNseSBzZXRzIGEgdmFsdWUgZm9yIGEgZ2l2ZW4ga2V5IGluIHRoZSBzZWxlY3RlZCBzdG9yYWdlIG1lY2hhbmlzbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSB1bmRlciB3aGljaCB0aGUgdmFsdWUgaXMgc3RvcmVkLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIGFzeW5jIHNldChrZXk6IHN0cmluZywgdmFsdWU6IERhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IHRoaXMuZ2V0U3RvcmFnZSgpO1xuXG4gICAgICAgIC8vIElmIHRoZSBzZWxlY3RlZCBzdG9yYWdlIG1lY2hhbmlzbSBpcyBJbmRleGVkREIsIHdlIHN0b3JlIHRoZSB2YWx1ZSBhcyBpcyxcbiAgICAgICAgLy8gYXMgSW5kZXhlZERCIGNhbiBzdG9yZSBjb21wbGV4IG9iamVjdHMuXG4gICAgICAgIGlmIChIeWJyaWRTdG9yYWdlLmlzSWRiU3RvcmFnZShzdG9yYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IEh5YnJpZFN0b3JhZ2Uuc2VyaWFsaXplKHZhbHVlKTtcblxuICAgICAgICAvLyBJZiB0aGUgc2VyaWFsaXplZCB2YWx1ZSBjb250YWlucyBhIG1ldGEga2V5LCBpdCBtZWFucyB0aGF0IHRoZSB2YWx1ZSBwcm92aWRlZFxuICAgICAgICAvLyBjb250YWlucyBzcGVjaWFsIGRhdGEgdGhhdCBhcmUgbm90IEpTT04tc2VyaWFsaXphYmxlIGFuZCByZXF1aXJlIFN1cGVySlNPTiBzZXJpYWxpemF0aW9uLFxuICAgICAgICAvLyBsaWtlIHR5cGVkIGFycmF5cywgZGF0ZXMsIGFuZCBvdGhlciBjb21wbGV4IG9iamVjdHMuXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSwgd2Ugc3RvcmUgdGhlIFN1cGVySlNPTi1zZXJpYWxpemVkIHZhbHVlLlxuICAgICAgICBpZiAoSHlicmlkU3RvcmFnZS5TVVBFUkpTT05fTUVUQV9LRVkgaW4gc2VyaWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0KGtleSwgc2VyaWFsaXplZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgc2VyaWFsaXplZCB2YWx1ZSBkb2VzIG5vdCBjb250YWluIGEgbWV0YSBrZXksIGl0IG1lYW5zIHRoYXQgdGhlIHZhbHVlXG4gICAgICAgIC8vIHByb3ZpZGVkIHdhcyBhIHByaW1pdGl2ZSB2YWx1ZSBvciBhIHBsYWluIG9iamVjdCB0aGF0IGlzIEpTT04tc2VyaWFsaXphYmxlLFxuICAgICAgICAvLyBhbmQgaXQgZG9lcyBub3QgY29udGFpbiBhbnkgc3BlY2lhbCBkYXRhIHRoYXQgcmVxdWlyZXMgU3VwZXJKU09OIHNlcmlhbGl6YXRpb24uXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSwgd2Ugc3RvcmUgdGhlIHZhbHVlIGFzIGlzLlxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXN5bmNocm9ub3VzbHkgcmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiBrZXkgZnJvbSB0aGUgc2VsZWN0ZWQgc3RvcmFnZSBtZWNoYW5pc20uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgd2hvc2UgdmFsdWUgaXMgdG8gYmUgcmV0cmlldmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmV0cmlldmVkIHZhbHVlLCBvciB1bmRlZmluZWQgaWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdC5cbiAgICAgKi9cbiAgICBhc3luYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPERhdGEgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IHRoaXMuZ2V0U3RvcmFnZSgpO1xuXG4gICAgICAgIC8vIElmIHRoZSBzZWxlY3RlZCBzdG9yYWdlIG1lY2hhbmlzbSBpcyBJbmRleGVkREIsIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsXG4gICAgICAgIC8vIGFzIEluZGV4ZWREQiBjYW4gc3RvcmUgY29tcGxleCBvYmplY3RzLlxuICAgICAgICBpZiAoSHlicmlkU3RvcmFnZS5pc0lkYlN0b3JhZ2Uoc3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBzdG9yYWdlLmdldChrZXkpO1xuXG4gICAgICAgIC8vIERvIG5vdCBhdHRlbXB0IHRvIGRlc2VyaWFsaXplIHVuZGVmaW5lZCB2YWx1ZXMuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgU3VwZXJKU09OLXNlcmlhbGl6ZWQgb2JqZWN0LCB3ZSBuZWVkIHRvIGRlc2VyaWFsaXplIGl0LlxuICAgICAgICBpZiAoSHlicmlkU3RvcmFnZS5pc1N1cGVySlNPTlJlc3VsdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBIeWJyaWRTdG9yYWdlLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcy5cbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIERhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXN5bmNocm9ub3VzbHkgcmVtb3ZlcyB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4ga2V5IGZyb20gdGhlIHNlbGVjdGVkIHN0b3JhZ2UgbWVjaGFuaXNtLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHdob3NlIHZhbHVlIGlzIHRvIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdG9taWMgc2V0IG9wZXJhdGlvbiBmb3IgbXVsdGlwbGUga2V5LXZhbHVlIHBhaXJzLlxuICAgICAqIFRoaXMgbWV0aG9kIGFyZSB1c2luZyB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYXRvbWljaXR5LCBpZiBhbnkgb2YgdGhlIG9wZXJhdGlvbnMgZmFpbCxcbiAgICAgKiB0aGUgZW50aXJlIG9wZXJhdGlvbiBpcyByb2xsZWQgYmFjay4gVGhpcyBoZWxwcyB0byBwcmV2ZW50IGRhdGEgY29ycnVwdGlvbiAvIGluY29uc2lzdGVuY3kuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYWxsIG9wZXJhdGlvbnMgd2VyZSBzdWNjZXNzZnVsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3Qgc3RvcmFnZSA9IG5ldyBIeWJyaWRTdG9yYWdlKCk7XG4gICAgICogYXdhaXQgc3RvcmFnZS5zZXRNdWx0aXBsZSh7XG4gICAgICogICAga2V5MTogJ3ZhbHVlMScsXG4gICAgICogICAga2V5MjogJ3ZhbHVlMicsXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNldE11bHRpcGxlKGRhdGE6IFJlY29yZDxzdHJpbmcsIERhdGE+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKEh5YnJpZFN0b3JhZ2UuaXNJZGJTdG9yYWdlKHN0b3JhZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHN0b3JhZ2Uuc2V0TXVsdGlwbGUoZGF0YSkpID8/IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvbmVEYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IFN1cGVySlNPTi5zZXJpYWxpemUodmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2VyaWFsaXplZCB2YWx1ZSBjb250YWlucyBhIG1ldGEga2V5LCBpdCBtZWFucyB0aGF0IHRoZSB2YWx1ZSBwcm92aWRlZFxuICAgICAgICAgICAgLy8gY29udGFpbnMgc3BlY2lhbCBkYXRhIHRoYXQgYXJlIG5vdCBKU09OLXNlcmlhbGl6YWJsZSBhbmQgcmVxdWlyZSBTdXBlckpTT04gc2VyaWFsaXphdGlvbixcbiAgICAgICAgICAgIC8vIGxpa2UgdHlwZWQgYXJyYXlzLCBkYXRlcywgYW5kIG90aGVyIGNvbXBsZXggb2JqZWN0cy5cbiAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSwgd2Ugc3RvcmUgdGhlIFN1cGVySlNPTi1zZXJpYWxpemVkIHZhbHVlLlxuICAgICAgICAgICAgaWYgKEh5YnJpZFN0b3JhZ2UuU1VQRVJKU09OX01FVEFfS0VZIGluIHNlcmlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IHNlcmlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlIHNlcmlhbGl6ZWQgdmFsdWUgZG9lcyBub3QgY29udGFpbiBhIG1ldGEga2V5LCBpdCBtZWFucyB0aGF0IHRoZSB2YWx1ZVxuICAgICAgICAgICAgLy8gcHJvdmlkZWQgd2FzIGEgcHJpbWl0aXZlIHZhbHVlIG9yIGEgcGxhaW4gb2JqZWN0IHRoYXQgaXMgSlNPTi1zZXJpYWxpemFibGUsXG4gICAgICAgICAgICAvLyBhbmQgaXQgZG9lcyBub3QgY29udGFpbiBhbnkgc3BlY2lhbCBkYXRhIHRoYXQgcmVxdWlyZXMgU3VwZXJKU09OIHNlcmlhbGl6YXRpb24uXG4gICAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIHN0b3JlIHRoZSB2YWx1ZSBhcyBpcy5cbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIFN1cGVySlNPTlJlc3VsdCB8IERhdGE+KTtcblxuICAgICAgICByZXR1cm4gKGF3YWl0IHN0b3JhZ2Uuc2V0TXVsdGlwbGUoY2xvbmVEYXRhKSkgPz8gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBtdWx0aXBsZSBrZXktdmFsdWUgcGFpcnMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXlzIFRoZSBrZXlzIHRvIHJlbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYWxsIG9wZXJhdGlvbnMgd2VyZSBzdWNjZXNzZnVsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZU11bHRpcGxlKGtleXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBzdG9yYWdlLnJlbW92ZU11bHRpcGxlKGtleXMpKSA/PyBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGVudHJpZXMoKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBEYXRhPj4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gYXdhaXQgdGhpcy5nZXRTdG9yYWdlKCk7XG5cbiAgICAgICAgaWYgKEh5YnJpZFN0b3JhZ2UuaXNJZGJTdG9yYWdlKHN0b3JhZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZS5lbnRyaWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgc3RvcmFnZS5lbnRyaWVzKCk7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGVudHJpZXMpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGFjY1trZXldID0gSHlicmlkU3RvcmFnZS5pc1N1cGVySlNPTlJlc3VsdCh2YWx1ZSkgPyBIeWJyaWRTdG9yYWdlLmRlc2VyaWFsaXplKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgRGF0YT4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwga2V5cyBmcm9tIHRoZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYWxsIGtleXMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMga2V5cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uua2V5cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEga2V5IGV4aXN0cyBpbiB0aGUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGtleSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaGFzKGtleTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBhd2FpdCB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuaGFzKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGF3YWl0IHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgeyB0eXBlIElEQlBEYXRhYmFzZSwgb3BlbkRCIH0gZnJvbSAnaWRiJztcblxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vY29tbW9uL2xvZ2dlcic7XG5cbmltcG9ydCB7IHR5cGUgRXh0ZW5kZWRTdG9yYWdlSW50ZXJmYWNlIH0gZnJvbSAnLi9zdG9yYWdlLWludGVyZmFjZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgYSBzdG9yYWdlIG1lY2hhbmlzbSB1c2luZyBJbmRleGVkREIuIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGVcbiAqIFN0b3JhZ2VJbnRlcmZhY2Ugd2l0aCBhc3luY2hyb25vdXMgbWV0aG9kcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBkYXRhYmFzZS5cbiAqXG4gKiBAdGVtcGxhdGUgRGF0YSBUaGUgdHlwZSBvZiB0aGUgdmFsdWUgc3RvcmVkIGluIHRoZSBzdG9yYWdlLlxuICovXG5leHBvcnQgY2xhc3MgSURCU3RvcmFnZTxEYXRhID0gdW5rbm93bj4gaW1wbGVtZW50cyBFeHRlbmRlZFN0b3JhZ2VJbnRlcmZhY2U8c3RyaW5nLCBEYXRhLCAnYXN5bmMnPiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgbmFtZSBvZiB0aGUgc3RvcmUgd2l0aGluIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU1RPUkVfTkFNRSA9ICdkZWZhdWx0U3RvcmUnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0lEQl9WRVJTSU9OID0gMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JREJfTkFNRSA9ICdhZGd1YXJkSURCJztcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgSW5kZXhlZERCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZGI6IElEQlBEYXRhYmFzZSB8IG51bGwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUHJvbWlzZSB0byBnZXQgSW5kZXhlZERCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZGJHZXR0ZXJQcm9taXNlOiBQcm9taXNlPElEQlBEYXRhYmFzZT4gfCBudWxsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZS4gVXNlZCBmb3IgdXBncmFkZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgd2l0aGluIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0b3JlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIGluc3RhbmNlIG9mIHRoZSBJREJTdG9yYWdlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIFtuYW1lPUlEQlN0b3JhZ2UuREVGQVVMVF9JREJfTkFNRV0gVGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICAgICAqIEBwYXJhbSBbdmVyc2lvbj0xXSBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UuXG4gICAgICogQHBhcmFtIFtzdG9yZT1JREJTdG9yYWdlLkRFRkFVTFRfU1RPUkVfTkFNRV0gVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHdpdGhpbiB0aGUgZGF0YWJhc2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUgPSBJREJTdG9yYWdlLkRFRkFVTFRfSURCX05BTUUsXG4gICAgICAgIHZlcnNpb24gPSBJREJTdG9yYWdlLkRFRkFVTFRfSURCX1ZFUlNJT04sXG4gICAgICAgIHN0b3JlID0gSURCU3RvcmFnZS5ERUZBVUxUX1NUT1JFX05BTUUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoZSBkYXRhYmFzZSBpcyBvcGVuZWQgYmVmb3JlIGFueSBvcGVyYXRpb25zLiBJZiB0aGUgZGF0YWJhc2VcbiAgICAgKiBpcyBub3QgYWxyZWFkeSBvcGVuZWQsIGl0IG9wZW5zIHRoZSBkYXRhYmFzZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBvcGVuZWQgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRPcGVuZWREYigpOiBQcm9taXNlPElEQlBEYXRhYmFzZT4ge1xuICAgICAgICBpZiAodGhpcy5kYikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kYkdldHRlclByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiR2V0dGVyUHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGJHZXR0ZXJQcm9taXNlID0gKGFzeW5jICgpOiBQcm9taXNlPElEQlBEYXRhYmFzZT4gPT4ge1xuICAgICAgICAgICAgdGhpcy5kYiA9IGF3YWl0IG9wZW5EQih0aGlzLm5hbWUsIHRoaXMudmVyc2lvbiwge1xuICAgICAgICAgICAgICAgIHVwZ3JhZGU6IChkYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHN0b3JlIGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnModGhpcy5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMuc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRiR2V0dGVyUHJvbWlzZSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRiR2V0dGVyUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSB2YWx1ZSBieSBrZXkgZnJvbSB0aGUgc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJldHJpZXZlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXQoa2V5OiBzdHJpbmcpOiBQcm9taXNlPERhdGEgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldE9wZW5lZERiKCk7XG4gICAgICAgIHJldHVybiBkYi5nZXQodGhpcy5zdG9yZSwga2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIHN0b3JlIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgdW5kZXIgd2hpY2ggdG8gc3RvcmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldE9wZW5lZERiKCk7XG4gICAgICAgIGF3YWl0IGRiLnB1dCh0aGlzLnN0b3JlLCB2YWx1ZSwga2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgdmFsdWUgZnJvbSB0aGUgc3RvcmUgYnkga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0T3BlbmVkRGIoKTtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoaXMuc3RvcmUsIGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXRvbWljIHNldCBvcGVyYXRpb24gZm9yIG11bHRpcGxlIGtleS12YWx1ZSBwYWlycy5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2luZyB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYXRvbWljaXR5LCBpZiBhbnkgb2YgdGhlIG9wZXJhdGlvbnMgZmFpbCxcbiAgICAgKiB0aGUgZW50aXJlIG9wZXJhdGlvbiBpcyByb2xsZWQgYmFjay4gVGhpcyBoZWxwcyB0byBwcmV2ZW50IGRhdGEgY29ycnVwdGlvbiAvIGluY29uc2lzdGVuY3kuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYWxsIG9wZXJhdGlvbnMgd2VyZSBzdWNjZXNzZnVsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3Qgc3RvcmFnZSA9IG5ldyBJREJTdG9yYWdlKCk7XG4gICAgICogYXdhaXQgc3RvcmFnZS5zZXRNdWx0aXBsZSh7XG4gICAgICogICAga2V5MTogJ3ZhbHVlMScsXG4gICAgICogICAga2V5MjogJ3ZhbHVlMicsXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNldE11bHRpcGxlKGRhdGE6IFJlY29yZDxzdHJpbmcsIERhdGE+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXRPcGVuZWREYigpO1xuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmUsICdyZWFkd3JpdGUnKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHR4LnN0b3JlLnB1dCh2YWx1ZSwga2V5KSkpO1xuICAgICAgICAgICAgYXdhaXQgdHguZG9uZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdbZXh0LklEQlN0b3JhZ2Uuc2V0TXVsdGlwbGVdOiBlcnJvciB3aGlsZSBzZXR0aW5nIG11bHRpcGxlIGtleXMgaW4gdGhlIHN0b3JhZ2U6JywgZSk7XG4gICAgICAgICAgICB0eC5hYm9ydCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBtdWx0aXBsZSBrZXktdmFsdWUgcGFpcnMgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXlzIFRoZSBrZXlzIHRvIHJlbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYWxsIG9wZXJhdGlvbnMgd2VyZSBzdWNjZXNzZnVsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZU11bHRpcGxlKGtleXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXRPcGVuZWREYigpO1xuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmUsICdyZWFkd3JpdGUnKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoa2V5cy5tYXAoKGtleSkgPT4gdHguc3RvcmUuZGVsZXRlKGtleSkpKTtcbiAgICAgICAgICAgIGF3YWl0IHR4LmRvbmU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignW2V4dC5JREJTdG9yYWdlLnJlbW92ZU11bHRpcGxlXTogZXJyb3Igd2hpbGUgcmVtb3ZpbmcgbXVsdGlwbGUga2V5cyBmcm9tIHRoZSBzdG9yYWdlOicsIGUpO1xuICAgICAgICAgICAgdHguYWJvcnQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZW50cmllcygpOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIERhdGE+PiB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXRPcGVuZWREYigpO1xuICAgICAgICBjb25zdCBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBEYXRhPiA9IHt9O1xuICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmUsICdyZWFkb25seScpO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGN1cnNvciBvZiB0eC5zdG9yZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gU3RyaW5nKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgZW50cmllc1trZXldID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBrZXlzIGluIHRoZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYWxsIGtleXMgaW4gdGhlIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGtleXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0T3BlbmVkRGIoKTtcbiAgICAgICAgY29uc3QgaWRiS2V5cyA9IGF3YWl0IGRiLmdldEFsbEtleXModGhpcy5zdG9yZSk7XG4gICAgICAgIHJldHVybiBpZGJLZXlzLm1hcCgoa2V5KSA9PiBrZXkudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgZXhpc3RzIGluIHRoZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUga2V5IGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBoYXMoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldE9wZW5lZERiKCk7XG4gICAgICAgIGNvbnN0IGlkYktleSA9IGF3YWl0IGRiLmdldEtleSh0aGlzLnN0b3JlLCBrZXkpO1xuICAgICAgICByZXR1cm4gaWRiS2V5ICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldE9wZW5lZERiKCk7XG4gICAgICAgIGF3YWl0IGRiLmNsZWFyKHRoaXMuc3RvcmUpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IEJyb3dzZXJTdG9yYWdlIH0gZnJvbSAnLi9icm93c2VyLXN0b3JhZ2UnO1xuaW1wb3J0IHsgSHlicmlkU3RvcmFnZSB9IGZyb20gJy4vaHlicmlkLXN0b3JhZ2UnO1xuaW1wb3J0IHsgSURCU3RvcmFnZSB9IGZyb20gJy4vaWRiLXN0b3JhZ2UnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaW5zdGFuY2UgZm9yIGFjY2Vzc2luZyBgYnJvd3Nlci5zdG9yYWdlLmxvY2FsYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJyb3dzZXJTdG9yYWdlID0gbmV3IEJyb3dzZXJTdG9yYWdlKGJyb3dzZXIuc3RvcmFnZS5sb2NhbCk7XG5cbi8qKlxuICogU3RvcmFnZSBpbnN0YW5jZSBmb3IgYWNjZXNzaW5nIGBJbmRleGVkREJgIHdpdGggZmFsbGJhY2sgdG8gYGJyb3dzZXIuc3RvcmFnZS5sb2NhbGAuXG4gKi9cbmV4cG9ydCBjb25zdCBoeWJyaWRTdG9yYWdlID0gbmV3IEh5YnJpZFN0b3JhZ2UoYnJvd3Nlci5zdG9yYWdlLmxvY2FsKTtcblxuLy8gRXhwb3NlIHN0b3JhZ2UgaW5zdGFuY2VzIHRvIHRoZSBnbG9iYWwgc2NvcGUgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcyxcbi8vIGJlY2F1c2UgaXQncyBoYXJkIHRvIGFjY2VzcyB0aGVtIGZyb20gdGhlIGNvbnNvbGUgaW4gdGhlIGJhY2tncm91bmRcbi8vIHBhZ2Ugb3IgaW1wb3NzaWJsZSBmcm9tIEFwcGxpY2F0aW9uIHRhYiAtPiBJbmRleGVkREIgKHNob3dpbmcgZW1wdHkgcGFnZSkuXG5pZiAoIUlTX0JFVEEgJiYgIUlTX1JFTEVBU0UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHNlbGYuaHlicmlkU3RvcmFnZSA9IGh5YnJpZFN0b3JhZ2U7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHNlbGYuSHlicmlkU3RvcmFnZSA9IEh5YnJpZFN0b3JhZ2U7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHNlbGYuSURCU3RvcmFnZSA9IElEQlN0b3JhZ2U7XG59XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBJMThuIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuXG4vKipcbiAqIEluamVjdHMgdHJhbnNsYXRpb25zIHRvIERPTSBlbGVtZW50cyB3aXRoIGkxOG4gYXR0cmlidXRlc1xuICovXG5leHBvcnQgY2xhc3MgSTE4biB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgaW5qZWN0b3IuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgSTE4bi50cmFuc2xhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBpMThuIGluamVjdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB0cmFuc2xhdGUoKSB7XG4gICAgICAgIEkxOG4udHJhbnNsYXRlRWxlbWVudHMoJ2kxOG4nKTtcbiAgICAgICAgSTE4bi50cmFuc2xhdGVBdHRyaWJ1dGVzKCdpMThuLXBsaHInLCAncGxhY2Vob2xkZXInKTtcbiAgICAgICAgSTE4bi50cmFuc2xhdGVBdHRyaWJ1dGVzKCdpMThuLWhyZWYnLCAnaHJlZicpO1xuICAgICAgICBJMThuLnRyYW5zbGF0ZUF0dHJpYnV0ZXMoJ2kxOG4tdGl0bGUnLCAndGl0bGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIGVsZW1lbnRzIHdpdGggc3BlY2lmaWVkIHtAbGluayBpMThuQXR0cmlidXRlTmFtZX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpMThuQXR0cmlidXRlTmFtZSAtIGkxOG4gYXR0cmlidXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlRWxlbWVudHMoaTE4bkF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtpMThuQXR0cmlidXRlTmFtZX1dYCkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBJMThuLmdldEkxOG5NZXNzYWdlKGVsLCBpMThuQXR0cmlidXRlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgSTE4bi50cmFuc2xhdGVFbGVtZW50KGVsLCBtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgY29udGVudCBvZiB7QGxpbmsgZWxlbWVudH0gdG8gdHJhbnNsYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gdGFyZ2V0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIGVsZW1lbnQgdGV4dFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3JpZ2luYWwgY29udGVudFxuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdHJhbnNsYXRlZCBjb250ZW50XG4gICAgICAgICAgICBJMThuLnByb2Nlc3NTdHJpbmcobWVzc2FnZSwgZWxlbWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9uc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0cmFuc2xhdGVkIHtAbGluayBlbGVtZW50fSBjaGlsZCBub2RlcyBhbmQgYXBwZW5kcyBpdCB0byBwYXJlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sIC0gaHRtbCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHRhcmdldCBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc1N0cmluZyhodG1sOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgbGV0IGVsOiBFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IG1hdGNoMSA9IC9eKFteXSo/KTwoYXxzdHJvbmd8c3BhbnxpKShbXj5dKik+KC4qPyk8XFwvXFwyPihbXl0qKSQvbS5leGVjKGh0bWwpO1xuICAgICAgICBjb25zdCBtYXRjaDIgPSAvXihbXl0qPyk8KGJyfGlucHV0KShbXj5dKilcXC8/PihbXl0qKSQvbS5leGVjKGh0bWwpO1xuICAgICAgICBpZiAobWF0Y2gxKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzYWZlIHR5cGVzXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4gICAgICAgICAgICBJMThuLnByb2Nlc3NTdHJpbmcobWF0Y2gxWzFdISwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGVsID0gSTE4bi5jcmVhdGVFbGVtZW50KG1hdGNoMVsyXSEsIG1hdGNoMVszXSEpO1xuXG4gICAgICAgICAgICBJMThuLnByb2Nlc3NTdHJpbmcobWF0Y2gxWzRdISwgZWwpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICAgICAgICAgIEkxOG4ucHJvY2Vzc1N0cmluZyhtYXRjaDFbNV0hLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaDIpIHtcbiAgICAgICAgICAgIEkxOG4ucHJvY2Vzc1N0cmluZyhtYXRjaDJbMV0hLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgZWwgPSBJMThuLmNyZWF0ZUVsZW1lbnQobWF0Y2gyWzJdISwgbWF0Y2gyWzNdISk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcblxuICAgICAgICAgICAgSTE4bi5wcm9jZXNzU3RyaW5nKG1hdGNoMls0XSEsIGVsZW1lbnQpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWwucmVwbGFjZSgvJm5ic3A7L2csICdcXHUwMEEwJykpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgZWxlbWVudHMgd2l0aCBzcGVjaWZpZWQgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWdOYW1lIC0gZWxlbWVudCB0YWdcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtIGF0dHJpYnV0ZXMgc3RyaW5nIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBjcmVhdGVkIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZywgYXR0cmlidXRlczogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAuc3BsaXQoLyhbYS16XSs9J1teJ10rJykvKVxuICAgICAgICAgICAgLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0ci5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYXR0clZhbHVlID0gYXR0ci5zdWJzdHJpbmcoaW5kZXggKyAyLCBhdHRyLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXR0ck5hbWUgJiYgYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIGVsZW1lbnRzIHdpdGggc3BlY2lmaWVkIHtAbGluayBpMThuQXR0cmlidXRlTmFtZX0sXG4gICAgICogdHJhbnNsYXRlcyBhdHRyaWJ1dGVzIGFuZCBzZXRzIHRvIGVsZW1lbnRzIHtAbGluayBhdHRyaWJ1dGVOYW1lfVxuICAgICAqXG4gICAgICogQHBhcmFtIGkxOG5BdHRyaWJ1dGVOYW1lIC0gIG5hbWUgb2YgaTE4biBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSAgLSBuYW1lIG9mIHRyYW5zbGF0ZWQgYXR0cmlidXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlQXR0cmlidXRlcyhcbiAgICAgICAgaTE4bkF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICAgICAgYXR0cmlidXRlTmFtZTogc3RyaW5nLFxuICAgICk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtpMThuQXR0cmlidXRlTmFtZX1dYCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IEkxOG4uZ2V0STE4bk1lc3NhZ2UoZWxlbWVudCwgaTE4bkF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGVsZW1lbnQgYXR0cmlidXRlIHZhbHVlIGFuZCB0cmFuc2xhdGUgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHBhZ2UgZWxlbWVudFxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIC0gbmFtZSBvZiBlbGVtZW50IGF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJhbnNsYXRlZCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRJMThuTWVzc2FnZShlbGVtZW50OiBFbGVtZW50LCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGF0dHJpYnV0ZSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHsgTG9nZ2VyLCBMb2dMZXZlbCB9IGZyb20gJ0BhZGd1YXJkL2xvZ2dlcic7XG5cbmltcG9ydCB7IGJyb3dzZXJTdG9yYWdlIH0gZnJvbSAnLi4vYmFja2dyb3VuZC9zdG9yYWdlcy9zaGFyZWQtaW5zdGFuY2VzJztcblxuLyoqXG4gKiBFeHRlbmRlZCBsb2dnZXIgd2l0aCBwZXJzaXN0ZW50IGxvZyBsZXZlbCBzZXR0aW5nLlxuICogRXh0ZW5kcyB0aGUgYmFzZSBMb2dnZXIgY2xhc3Mgd2l0aCBicm93c2VyIHN0b3JhZ2UgaW50ZWdyYXRpb25cbiAqIGZvciBzYXZpbmcgYW5kIHJldHJpZXZpbmcgbG9nIGxldmVsIHByZWZlcmVuY2VzLlxuICovXG5jbGFzcyBFeHRlbmRlZExvZ2dlciBleHRlbmRzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogS2V5IGZvciBzdG9yaW5nIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBpbiBicm93c2VyIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTE9HX0xFVkVMX0xPQ0FMX1NUT1JBR0VfS0VZID0gJ2xvZy1sZXZlbCc7XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGxvZyBsZXZlbCBiYXNlZCBvbiB0aGUgYnVpbGQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0xPR19MRVZFTCA9IElTX1JFTEVBU0UgfHwgSVNfQkVUQVxuICAgICAgICA/IExvZ0xldmVsLkluZm9cbiAgICAgICAgOiBMb2dMZXZlbC5EZWJ1ZztcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBsb2cgbGV2ZWwgaXMgdmVyYm9zZSAoRGVidWcgb3IgVmVyYm9zZSkuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgZm9yIGRldGVybWluaW5nIGlmIGRldGFpbGVkIGxvZ2dpbmcgc2hvdWxkXG4gICAgICogYmUgZW5hYmxlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uIGluIGRpZmZlcmVudCBtb2R1bGVzLiBTb21lIGtpbmQgb2ZcbiAgICAgKiBcInNpbmdsZSBwb2ludCBvZiB0cnV0aFwiLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBjdXJyZW50IGxvZyBsZXZlbCBpcyBEZWJ1ZyBvciBWZXJib3NlLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaXNWZXJib3NlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGV2ZWwgPT09IExvZ0xldmVsLkRlYnVnXG4gICAgICAgICAgICB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gTG9nTGV2ZWwuVmVyYm9zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGxvZyB3aXRoIHBlcnNpc3RlbnQgdmFsdWUsIHdoaWNoIHdpbGwgYmUgc2F2ZWQsIGlmXG4gICAgICogYnJvd3Nlci5zdG9yYWdlLmxvY2FsIGlzIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbCBMb2cgbGV2ZWwgdG8gc2V0LlxuICAgICAqL1xuICAgIHNldExvZ0xldmVsKGxldmVsOiBMb2dMZXZlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsO1xuXG4gICAgICAgIGJyb3dzZXJTdG9yYWdlLnNldChFeHRlbmRlZExvZ2dlci5MT0dfTEVWRUxfTE9DQUxfU1RPUkFHRV9LRVksIGxldmVsKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignW2V4dC5FeHRlbmRlZExvZ2dlci5zZXRMb2dMZXZlbF06IGZhaWxlZCB0byBzYXZlIGxvZyBsZXZlbCBpbiBicm93c2VyLnN0b3JhZ2UubG9jYWw6ICcsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB2YWxpZCBMb2dMZXZlbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byB2YWxpZGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIExvZ0xldmVsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNWYWxpZExvZ0xldmVsKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTG9nTGV2ZWwge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBPYmplY3QudmFsdWVzKExvZ0xldmVsKS5pbmNsdWRlcyh2YWx1ZSBhcyBMb2dMZXZlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxvZ2dlciBieSBsb2FkaW5nIHRoZSBzYXZlZCBsb2cgbGV2ZWwgZnJvbSBicm93c2VyIHN0b3JhZ2UuXG4gICAgICogRmFsbHMgYmFjayB0byB0aGUgZGVmYXVsdCBsb2cgbGV2ZWwgaWYgcmV0cmlldmFsIGZhaWxzIG9yIHRoZSBzdG9yZWQgbGV2ZWwgaXMgaW52YWxpZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGluaXRpYWxpemF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbG9nTGV2ZWwgPSBhd2FpdCBicm93c2VyU3RvcmFnZS5nZXQoRXh0ZW5kZWRMb2dnZXIuTE9HX0xFVkVMX0xPQ0FMX1NUT1JBR0VfS0VZKTtcblxuICAgICAgICAgICAgaWYgKCFFeHRlbmRlZExvZ2dlci5pc1ZhbGlkTG9nTGV2ZWwobG9nTGV2ZWwpKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJpbnQgYSB3YXJuaW5nIG9ubHkgaWYgdGhlIGxvZyBsZXZlbCBpcyB2YWx1YWJsZS5cbiAgICAgICAgICAgICAgICBpZiAobG9nTGV2ZWwgIT09IG51bGwgJiYgbG9nTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm4oJ1tleHQuRXh0ZW5kZWRMb2dnZXIuaW5pdF06IGxvZyBsZXZlbCBmcm9tIGJyb3dzZXIuc3RvcmFnZS5sb2NhbCBpcyBub3QgdmFsaWQuIFZhbHVlOiAnLCBsb2dMZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgICAgIHRoaXMud2FybignW2V4dC5FeHRlbmRlZExvZ2dlci5pbml0XTogZmFpbGVkIHRvIHNldCBsb2cgbGV2ZWwgZnJvbSBicm93c2VyLnN0b3JhZ2UubG9jYWwsIHdpbGwgc2V0IHRvIGRlZmF1bHQgbGV2ZWwuIEVycm9yOiAnLCBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvZ0xldmVsKEV4dGVuZGVkTG9nZ2VyLkRFRkFVTFRfTE9HX0xFVkVMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICB0aGlzLndhcm4oJ1tleHQuRXh0ZW5kZWRMb2dnZXIuaW5pdF06IGZhaWxlZCB0byBnZXQgbG9nIGxldmVsIGZyb20gYnJvd3Nlci5zdG9yYWdlLmxvY2FsOiAnLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEV4dGVuZGVkTG9nZ2VyLlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBsb2dnZXIgd2l0aCB0aGUgZGVmYXVsdCBsb2cgbGV2ZWwgYmFzZWQgb24gYnVpbGQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IEV4dGVuZGVkTG9nZ2VyLkRFRkFVTFRfTE9HX0xFVkVMO1xuICAgIH1cbn1cblxuY29uc3QgbG9nZ2VyID0gbmV3IEV4dGVuZGVkTG9nZ2VyKCk7XG5cbi8vIEV4cG9zZSBsb2dnZXIgdG8gdGhlIHdpbmRvdyBvYmplY3QsXG4vLyB0byBoYXZlIHBvc3NpYmlsaXR5IHRvIHN3aXRjaCBsb2cgbGV2ZWwgZnJvbSB0aGUgY29uc29sZS5cbi8vIEV4YW1wbGU6IGFkZ3VhcmQubG9nZ2VyLnNldEN1cnJlbnRMZXZlbCgndHJhY2UnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuT2JqZWN0LmFzc2lnbihzZWxmLCB7IGFkZ3VhcmQ6IHsgLi4uc2VsZi5hZGd1YXJkLCBsb2dnZXIgfSB9KTtcblxuZXhwb3J0IHsgTG9nTGV2ZWwsIGxvZ2dlciB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIEltcG9ydGFudDogZG8gbm90IHVzZSB6LmluZmVyT2YsIGJlY2F1c2UgaXQgYnJpbmdzIGEgbG90IG9mIHNpZGUgZWZmZWN0cyB3aXRoXG4gKiBtYW55IGRlcGVuZGVuY2llcyB0byB0aGUgYnVuZGxlLlxuICpcbiAqIEFsc28gcGxlYXNlIHRyeSwgaWYgcG9zc2libGUsIHRvIG5vdCBpbXBvcnQgaGVyZSBleHRlcm5hbCBtb2R1bGVzXG4gKiBvdGhlciB0aGF0IHR5cGVzLlxuICovXG5pbXBvcnQgeyB0eXBlIFdpbmRvd3MgfSBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuXG5pbXBvcnQgeyB0eXBlIEZvcndhcmRGcm9tIH0gZnJvbSAnLi4vZm9yd2FyZCc7XG5pbXBvcnQgeyB0eXBlIFNldHRpbmdPcHRpb24sIHR5cGUgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NjaGVtYS9zZXR0aW5ncyc7XG5pbXBvcnQgeyB0eXBlIEN1c3RvbUZpbHRlck1ldGFkYXRhIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zY2hlbWEvY3VzdG9tLWZpbHRlci1tZXRhZGF0YSc7XG5pbXBvcnQgeyB0eXBlIE5vdGlmaWVyVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0eXBlIEFwcGVhcmFuY2VUaGVtZSB9IGZyb20gJy4uL3NldHRpbmdzJztcbmltcG9ydCB7IHR5cGUgRmlsdGVyaW5nTG9nVGFiSW5mbyB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvYXBpL2ZpbHRlcmluZy1sb2cnO1xuaW1wb3J0IHsgdHlwZSBHZXRUYWJJbmZvRm9yUG9wdXBSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvdWkvcG9wdXAnO1xuaW1wb3J0IHsgdHlwZSBHZXRGaWx0ZXJpbmdMb2dEYXRhUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL2ZpbHRlcmluZy1sb2cnO1xuaW1wb3J0IHtcbiAgICB0eXBlIElSdWxlc0xpbWl0cyxcbiAgICB0eXBlIE12M0xpbWl0c0NoZWNrUmVzdWx0LFxuICAgIHR5cGUgU3RhdGljTGltaXRzQ2hlY2tSZXN1bHQsXG59IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvcnVsZXMtbGltaXRzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0eXBlIEJsb2NraW5nUGFnZUluaXRBcHBEYXRhLCB0eXBlIFBhZ2VJbml0QXBwRGF0YSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvdWkvbWFpbic7XG5pbXBvcnQgeyB0eXBlIEV4cG9ydE1lc3NhZ2VSZXNwb25zZSwgdHlwZSBHZXRPcHRpb25zRGF0YVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9zZXR0aW5ncy90eXBlcyc7XG5pbXBvcnQgeyB0eXBlIENyZWF0ZUV2ZW50TGlzdGVuZXJSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvZXZlbnQnO1xuaW1wb3J0IHsgdHlwZSBGaWx0ZXJNZXRhZGF0YSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvYXBpL2ZpbHRlcnMvbWFpbic7XG5pbXBvcnQgeyB0eXBlIEdldEFsbG93bGlzdERvbWFpbnNSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvYWxsb3dsaXN0JztcbmltcG9ydCB7IHR5cGUgR2V0VXNlclJ1bGVzRWRpdG9yRGF0YVJlc3BvbnNlLCB0eXBlIEdldFVzZXJSdWxlc1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy91c2VycnVsZXMnO1xuaW1wb3J0IHsgdHlwZSBHZXRDdXN0b21GaWx0ZXJJbmZvUmVzdWx0IH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9hcGkvZmlsdGVycy9jdXN0b20nO1xuaW1wb3J0IHsgdHlwZSBNYW51YWxVcGRhdGVNZXRhZGF0YSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvZXh0ZW5zaW9uLXVwZGF0ZS90eXBlcyc7XG5pbXBvcnQgeyB0eXBlIFRlbGVtZXRyeUV2ZW50TmFtZSwgdHlwZSBUZWxlbWV0cnlTY3JlZW5OYW1lIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy90ZWxlbWV0cnknO1xuaW1wb3J0IHsgdHlwZSBUZWxlbWV0cnlBY3Rpb25Ub1NjcmVlbk1hcCB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvdGVsZW1ldHJ5L2VudW1zJztcblxuZXhwb3J0IGNvbnN0IEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSA9ICdhcHAnO1xuXG5leHBvcnQgdHlwZSBNZXNzYWdlQ29tbW9uUHJvcHMgPSB7XG4gICAgaGFuZGxlck5hbWU6IHR5cGVvZiBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUU7XG59O1xuXG4vKipcbiAqIE1lc3NhZ2UgdHlwZXMgdXNlZCBmb3IgbWVzc2FnZSBwYXNzaW5nIGJldHdlZW4gZXh0ZW5zaW9uIGNvbnRleHRzXG4gKiAocG9wdXAsIGZpbHRlcmluZyBsb2csIGNvbnRlbnQgc2NyaXB0cywgYmFja2dyb3VuZClcbiAqL1xuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICAgIENyZWF0ZUV2ZW50TGlzdGVuZXIgPSAnY3JlYXRlRXZlbnRMaXN0ZW5lcicsXG4gICAgUmVtb3ZlTGlzdGVuZXIgPSAncmVtb3ZlTGlzdGVuZXInLFxuICAgIE9wZW5FeHRlbnNpb25TdG9yZSA9ICdvcGVuRXh0ZW5zaW9uU3RvcmUnLFxuICAgIEFkZEFuZEVuYWJsZUZpbHRlciA9ICdhZGRBbmRFbmFibGVGaWx0ZXInLFxuICAgIEFwcGx5U2V0dGluZ3NKc29uID0gJ2FwcGx5U2V0dGluZ3NKc29uJyxcbiAgICBPcGVuRmlsdGVyaW5nTG9nID0gJ29wZW5GaWx0ZXJpbmdMb2cnLFxuICAgIE9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzID0gJ29wZW5GdWxsc2NyZWVuVXNlclJ1bGVzJyxcbiAgICBVcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWUgPSAndXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lJyxcbiAgICBSZXNldEJsb2NrZWRBZHNDb3VudCA9ICdyZXNldEJsb2NrZWRBZHNDb3VudCcsXG4gICAgUmVzZXRTZXR0aW5ncyA9ICdyZXNldFNldHRpbmdzJyxcbiAgICBHZXRVc2VyUnVsZXMgPSAnZ2V0VXNlclJ1bGVzJyxcbiAgICBTYXZlVXNlclJ1bGVzID0gJ3NhdmVVc2VyUnVsZXMnLFxuICAgIEdldEFsbG93bGlzdERvbWFpbnMgPSAnZ2V0QWxsb3dsaXN0RG9tYWlucycsXG4gICAgU2F2ZUFsbG93bGlzdERvbWFpbnMgPSAnc2F2ZUFsbG93bGlzdERvbWFpbnMnLFxuICAgIENoZWNrRmlsdGVyc1VwZGF0ZSA9ICdjaGVja0ZpbHRlcnNVcGRhdGUnLFxuICAgIENoZWNrRXh0ZW5zaW9uVXBkYXRlTXYzID0gJ2NoZWNrRXh0ZW5zaW9uVXBkYXRlTXYzJyxcbiAgICBVcGRhdGVFeHRlbnNpb25NdjMgPSAndXBkYXRlRXh0ZW5zaW9uTXYzJyxcbiAgICBEaXNhYmxlRmlsdGVyc0dyb3VwID0gJ2Rpc2FibGVGaWx0ZXJzR3JvdXAnLFxuICAgIERpc2FibGVGaWx0ZXIgPSAnZGlzYWJsZUZpbHRlcicsXG4gICAgTG9hZEN1c3RvbUZpbHRlckluZm8gPSAnbG9hZEN1c3RvbUZpbHRlckluZm8nLFxuICAgIFN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyID0gJ3N1YnNjcmliZVRvQ3VzdG9tRmlsdGVyJyxcbiAgICBSZW1vdmVBbnRpQmFubmVyRmlsdGVyID0gJ3JlbW92ZUFudGlCYW5uZXJGaWx0ZXInLFxuICAgIEdldElzQXBwSW5pdGlhbGl6ZWQgPSAnZ2V0SXNBcHBJbml0aWFsaXplZCcsXG4gICAgR2V0VGFiSW5mb0ZvclBvcHVwID0gJ2dldFRhYkluZm9Gb3JQb3B1cCcsXG4gICAgQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWQgPSAnY2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWQnLFxuICAgIE9wZW5SdWxlc0xpbWl0c1RhYiA9ICdvcGVuUnVsZXNMaW1pdHNUYWInLFxuICAgIE9wZW5TZXR0aW5nc1RhYiA9ICdvcGVuU2V0dGluZ3NUYWInLFxuICAgIE9wZW5Bc3Npc3RhbnQgPSAnb3BlbkFzc2lzdGFudCcsXG4gICAgT3BlbkFidXNlVGFiID0gJ29wZW5BYnVzZVRhYicsXG4gICAgT3BlblNpdGVSZXBvcnRUYWIgPSAnb3BlblNpdGVSZXBvcnRUYWInLFxuICAgIE9wZW5Db21wYXJlUGFnZSA9ICdvcGVuQ29tcGFyZVBhZ2UnLFxuICAgIE9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlID0gJ29wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlJyxcbiAgICBPcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2UgPSAnb3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlJyxcbiAgICBSZXNldFVzZXJSdWxlc0ZvclBhZ2UgPSAncmVzZXRVc2VyUnVsZXNGb3JQYWdlJyxcbiAgICBSZW1vdmVBbGxvd2xpc3REb21haW4gPSAncmVtb3ZlQWxsb3dsaXN0RG9tYWluJyxcbiAgICBBZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZCA9ICdhZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZCcsXG4gICAgQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsID0gJ2FkZEFsbG93bGlzdERvbWFpbkZvclVybCcsXG4gICAgT25PcGVuRmlsdGVyaW5nTG9nUGFnZSA9ICdvbk9wZW5GaWx0ZXJpbmdMb2dQYWdlJyxcbiAgICBHZXRGaWx0ZXJpbmdMb2dEYXRhID0gJ2dldEZpbHRlcmluZ0xvZ0RhdGEnLFxuICAgIEluaXRpYWxpemVGcmFtZVNjcmlwdCA9ICdpbml0aWFsaXplRnJhbWVTY3JpcHQnLFxuICAgIEluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQgPSAnaW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdCcsXG4gICAgT25DbG9zZUZpbHRlcmluZ0xvZ1BhZ2UgPSAnb25DbG9zZUZpbHRlcmluZ0xvZ1BhZ2UnLFxuICAgIEdldEZpbHRlcmluZ0luZm9CeVRhYklkID0gJ2dldEZpbHRlcmluZ0luZm9CeVRhYklkJyxcbiAgICBTeW5jaHJvbml6ZU9wZW5UYWJzID0gJ3N5bmNocm9uaXplT3BlblRhYnMnLFxuICAgIENsZWFyRXZlbnRzQnlUYWJJZCA9ICdjbGVhckV2ZW50c0J5VGFiSWQnLFxuICAgIFJlZnJlc2hQYWdlID0gJ3JlZnJlc2hQYWdlJyxcbiAgICBBZGRVc2VyUnVsZSA9ICdhZGRVc2VyUnVsZScsXG4gICAgUmVtb3ZlVXNlclJ1bGUgPSAncmVtb3ZlVXNlclJ1bGUnLFxuICAgIEVuYWJsZUZpbHRlcnNHcm91cCA9ICdlbmFibGVGaWx0ZXJzR3JvdXAnLFxuICAgIE5vdGlmeUxpc3RlbmVycyA9ICdub3RpZnlMaXN0ZW5lcnMnLFxuICAgIEFkZExvbmdMaXZlZENvbm5lY3Rpb24gPSAnYWRkTG9uZ0xpdmVkQ29ubmVjdGlvbicsXG4gICAgR2V0T3B0aW9uc0RhdGEgPSAnZ2V0T3B0aW9uc0RhdGEnLFxuICAgIENoYW5nZVVzZXJTZXR0aW5ncyA9ICdjaGFuZ2VVc2VyU2V0dGluZycsXG4gICAgQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHkgPSAnY2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHknLFxuICAgIE9wZW5UaGFua3lvdVBhZ2UgPSAnb3BlblRoYW5rWW91UGFnZScsXG4gICAgT3BlblNhZmVicm93c2luZ1RydXN0ZWQgPSAnb3BlblNhZmVicm93c2luZ1RydXN0ZWQnLFxuICAgIEdldFNlbGVjdG9yc0FuZFNjcmlwdHMgPSAnZ2V0U2VsZWN0b3JzQW5kU2NyaXB0cycsXG4gICAgQ2hlY2tQYWdlU2NyaXB0V3JhcHBlclJlcXVlc3QgPSAnY2hlY2tQYWdlU2NyaXB0V3JhcHBlclJlcXVlc3QnLFxuICAgIFByb2Nlc3NTaG91bGRDb2xsYXBzZSA9ICdwcm9jZXNzU2hvdWxkQ29sbGFwc2UnLFxuICAgIFByb2Nlc3NTaG91bGRDb2xsYXBzZU1hbnkgPSAncHJvY2Vzc1Nob3VsZENvbGxhcHNlTWFueScsXG4gICAgQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uID0gJ2FkZEZpbHRlclN1YnNjcmlwdGlvbicsXG4gICAgU2V0Tm90aWZpY2F0aW9uVmlld2VkID0gJ3NldE5vdGlmaWNhdGlvblZpZXdlZCcsXG4gICAgU2F2ZUNzc0hpdHNTdGF0cyA9ICdzYXZlQ3NzSGl0U3RhdHMnLFxuICAgIEdldENvb2tpZVJ1bGVzID0gJ2dldENvb2tpZVJ1bGVzJyxcbiAgICBTYXZlQ29va2llTG9nRXZlbnQgPSAnc2F2ZUNvb2tpZVJ1bGVFdmVudCcsXG4gICAgTG9hZFNldHRpbmdzSnNvbiA9ICdsb2FkU2V0dGluZ3NKc29uJyxcbiAgICBBZGRVcmxUb1RydXN0ZWQgPSAnYWRkVXJsVG9UcnVzdGVkJyxcbiAgICBTZXRQcmVzZXJ2ZUxvZ1N0YXRlID0gJ3NldFByZXNlcnZlTG9nU3RhdGUnLFxuICAgIEdldFVzZXJSdWxlc0VkaXRvckRhdGEgPSAnZ2V0VXNlclJ1bGVzRWRpdG9yRGF0YScsXG4gICAgR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQgPSAnZ2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQnLFxuICAgIFNldEVkaXRvclN0b3JhZ2VDb250ZW50ID0gJ3NldEVkaXRvclN0b3JhZ2VDb250ZW50JyxcbiAgICBTZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZSA9ICdzZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZScsXG4gICAgQXBwSW5pdGlhbGl6ZWQgPSAnYXBwSW5pdGlhbGl6ZWQnLFxuICAgIFVwZGF0ZVRvdGFsQmxvY2tlZCA9ICd1cGRhdGVUb3RhbEJsb2NrZWQnLFxuICAgIFNjcmlwdGxldENsb3NlV2luZG93ID0gJ3NjcmlwdGxldENsb3NlV2luZG93JyxcbiAgICBTaG93UnVsZUxpbWl0c0FsZXJ0ID0gJ3Nob3dSdWxlTGltaXRzQWxlcnQnLFxuICAgIFNob3dBbGVydFBvcHVwID0gJ3Nob3dBbGVydFBvcHVwJyxcbiAgICBTaG93VmVyc2lvblVwZGF0ZWRQb3B1cCA9ICdzaG93VmVyc2lvblVwZGF0ZWRQb3B1cCcsXG4gICAgVXBkYXRlTGlzdGVuZXJzID0gJ3VwZGF0ZUxpc3RlbmVycycsXG4gICAgU2V0Q29uc2VudGVkRmlsdGVycyA9ICdzZXRDb25zZW50ZWRGaWx0ZXJzJyxcbiAgICBHZXRJc0NvbnNlbnRlZEZpbHRlciA9ICdnZXRJc0NvbnNlbnRlZEZpbHRlcicsXG4gICAgU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50ID0gJ3NlbmRUZWxlbWV0cnlDdXN0b21FdmVudCcsXG4gICAgU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnQgPSAnc2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnQnLFxuICAgIEFkZFRlbGVtZXRyeU9wZW5lZFBhZ2UgPSAnYWRkVGVsZW1ldHJ5T3BlbmVkUGFnZScsXG4gICAgUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZSA9ICdyZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlJyxcbiAgICBHZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzID0gJ2dldFJ1bGVzTGltaXRzQ291bnRlcnNNdjMnLFxuICAgIENhbkVuYWJsZVN0YXRpY0ZpbHRlck12MyA9ICdjYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjMnLFxuICAgIENhbkVuYWJsZVN0YXRpY0dyb3VwTXYzID0gJ2NhbkVuYWJsZVN0YXRpY0dyb3VwTXYzJyxcbiAgICBDbGVhclJ1bGVzTGltaXRzV2FybmluZ012MyA9ICdjbGVhclJ1bGVzTGltaXRzV2FybmluZ012MycsXG4gICAgUmVzdG9yZUZpbHRlcnNNdjMgPSAncmVzdG9yZUZpbHRlcnNNdjMnLFxuICAgIEN1cnJlbnRMaW1pdHNNdjMgPSAnY3VycmVudExpbWl0c012MycsXG59XG5cbmV4cG9ydCB0eXBlIEFwcGx5U2V0dGluZ3NKc29uTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BcHBseVNldHRpbmdzSnNvbjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGpzb246IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgTG9hZFNldHRpbmdzSnNvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuTG9hZFNldHRpbmdzSnNvbjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGpzb246IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb247XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUV2ZW50TGlzdGVuZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNyZWF0ZUV2ZW50TGlzdGVuZXI7XG4gICAgZGF0YToge1xuICAgICAgICBldmVudHM6IE5vdGlmaWVyVHlwZVtdO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVMaXN0ZW5lck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVtb3ZlTGlzdGVuZXI7XG4gICAgZGF0YToge1xuICAgICAgICBsaXN0ZW5lcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldElzQXBwSW5pdGlhbGl6ZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldElzQXBwSW5pdGlhbGl6ZWQ7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRUYWJJbmZvRm9yUG9wdXBNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldFRhYkluZm9Gb3JQb3B1cDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0YXRlOiBib29sZWFuO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuUnVsZXNMaW1pdHNUYWJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5SdWxlc0xpbWl0c1RhYjtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5TZXR0aW5nc1RhYk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlblNldHRpbmdzVGFiO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkFzc2lzdGFudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkFzc2lzdGFudDtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGhlbWU6IEFwcGVhcmFuY2VUaGVtZTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50czogTm90aWZpZXJUeXBlW107XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE5vdGlmeUxpc3RlbmVyc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuTm90aWZ5TGlzdGVuZXJzO1xuICAgIGRhdGE6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUxpc3RlbmVyc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuVXBkYXRlTGlzdGVuZXJzO1xufTtcblxuZXhwb3J0IHR5cGUgQ2hlY2tGaWx0ZXJzVXBkYXRlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DaGVja0ZpbHRlcnNVcGRhdGU7XG59O1xuXG5leHBvcnQgdHlwZSBDaGVja0V4dGVuc2lvblVwZGF0ZU1lc3NhZ2VNdjMgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2hlY2tFeHRlbnNpb25VcGRhdGVNdjM7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVFeHRlbnNpb25NZXNzYWdlTXYzID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlVwZGF0ZUV4dGVuc2lvbk12MztcbiAgICBkYXRhOiB7XG4gICAgICAgIGZyb206IE1hbnVhbFVwZGF0ZU1ldGFkYXRhWydwYWdlVG9PcGVuQWZ0ZXJSZWxvYWQnXTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0QWxsb3dsaXN0RG9tYWluc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0QWxsb3dsaXN0RG9tYWlucztcbn07XG5cbmV4cG9ydCB0eXBlIFJlc2V0QmxvY2tlZEFkc0NvdW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZXNldEJsb2NrZWRBZHNDb3VudDtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5Db21wYXJlUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkNvbXBhcmVQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuRnVsbHNjcmVlblVzZXJSdWxlc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXM7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuRXh0ZW5zaW9uU3RvcmVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25TdG9yZTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5GaWx0ZXJpbmdMb2dNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5GaWx0ZXJpbmdMb2c7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuQWJ1c2VUYWJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5BYnVzZVRhYjtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICBmcm9tOiBGb3J3YXJkRnJvbTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgT3BlblNpdGVSZXBvcnRUYWJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5TaXRlUmVwb3J0VGFiO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIGZyb206IEZvcndhcmRGcm9tO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuVGhhbmt5b3VQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuVGhhbmt5b3VQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgR2V0T3B0aW9uc0RhdGFNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldE9wdGlvbnNEYXRhO1xufTtcblxuZXhwb3J0IHR5cGUgQ2hhbmdlVXNlclNldHRpbmdNZXNzYWdlPFQgZXh0ZW5kcyBTZXR0aW5nT3B0aW9uID0gU2V0dGluZ09wdGlvbj4gPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2hhbmdlVXNlclNldHRpbmdzO1xuICAgIGRhdGE6IHtcbiAgICAgICAga2V5OiBUO1xuICAgICAgICB2YWx1ZTogU2V0dGluZ3NbVF07XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlc2V0U2V0dGluZ3NNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlc2V0U2V0dGluZ3M7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRBbmRFbmFibGVGaWx0ZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZEFuZEVuYWJsZUZpbHRlcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIERpc2FibGVGaWx0ZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkRpc2FibGVGaWx0ZXI7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVBbnRpQmFubmVyRmlsdGVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZW1vdmVBbnRpQmFubmVyRmlsdGVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2F2ZUFsbG93bGlzdERvbWFpbnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNhdmVBbGxvd2xpc3REb21haW5zO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2F2ZVVzZXJSdWxlc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2F2ZVVzZXJSdWxlcztcbiAgICBkYXRhOiB7XG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldFVzZXJSdWxlc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0VXNlclJ1bGVzO1xufTtcblxuZXhwb3J0IHR5cGUgR2V0VXNlclJ1bGVzRWRpdG9yRGF0YU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0VXNlclJ1bGVzRWRpdG9yRGF0YTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZFVzZXJSdWxlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRVc2VyUnVsZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHJ1bGVUZXh0OiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZVVzZXJSdWxlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZW1vdmVVc2VyUnVsZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHJ1bGVUZXh0OiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlc2V0VXNlclJ1bGVzRm9yUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVzZXRVc2VyUnVsZXNGb3JQYWdlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldEVkaXRvclN0b3JhZ2VDb250ZW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRFZGl0b3JTdG9yYWdlQ29udGVudDtcbn07XG5cbmV4cG9ydCB0eXBlIFNldEVkaXRvclN0b3JhZ2VDb250ZW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZXRFZGl0b3JTdG9yYWdlQ29udGVudDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRBbGxvd2xpc3REb21haW5Gb3JVcmw7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlQWxsb3dsaXN0RG9tYWluTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZW1vdmVBbGxvd2xpc3REb21haW47XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgICAgICB0YWJSZWZyZXNoOiBib29sZWFuO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBMb2FkQ3VzdG9tRmlsdGVySW5mb01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuTG9hZEN1c3RvbUZpbHRlckluZm87XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUZpbHRlclN1YnNjcmlwdGlvbkRhdGEgPSB7XG4gICAgY3VzdG9tVXJsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRydXN0ZWQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBTdWJzY3JpYmVUb0N1c3RvbUZpbHRlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXI7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXI6IEN1c3RvbUZpbHRlclN1YnNjcmlwdGlvbkRhdGE7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxpemVkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BcHBJbml0aWFsaXplZDtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVRvdGFsQmxvY2tlZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuVXBkYXRlVG90YWxCbG9ja2VkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICAgICAgdG90YWxCbG9ja2VkOiBudW1iZXI7XG4gICAgICAgIHRvdGFsQmxvY2tlZFRhYjogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDaGVja1JlcXVlc3RGaWx0ZXJSZWFkeU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHk7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRGaWx0ZXJpbmdMb2dEYXRhTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRGaWx0ZXJpbmdMb2dEYXRhO1xufTtcblxuZXhwb3J0IHR5cGUgU3luY2hyb25pemVPcGVuVGFic01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU3luY2hyb25pemVPcGVuVGFicztcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5GaWx0ZXJpbmdMb2dQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Pbk9wZW5GaWx0ZXJpbmdMb2dQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PbkNsb3NlRmlsdGVyaW5nTG9nUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIENsZWFyRXZlbnRzQnlUYWJJZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2xlYXJFdmVudHNCeVRhYklkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICAgICAgaWdub3JlUHJlc2VydmVMb2c/OiBib29sZWFuO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTZXRQcmVzZXJ2ZUxvZ1N0YXRlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZXRQcmVzZXJ2ZUxvZ1N0YXRlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdGU6IGJvb2xlYW47XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHdpbmRvd1N0YXRlOiBXaW5kb3dzLkNyZWF0ZUNyZWF0ZURhdGFUeXBlO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZWZyZXNoUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVmcmVzaFBhZ2U7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWQ7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBFbmFibGVGaWx0ZXJzR3JvdXBNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkVuYWJsZUZpbHRlcnNHcm91cDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGdyb3VwSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgRGlzYWJsZUZpbHRlcnNHcm91cE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcnNHcm91cDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGdyb3VwSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUZyYW1lU2NyaXB0TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Jbml0aWFsaXplRnJhbWVTY3JpcHQ7XG59O1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0ID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQ7XG59O1xuXG5leHBvcnQgdHlwZSBTZXRDb25zZW50ZWRGaWx0ZXJzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZXRDb25zZW50ZWRGaWx0ZXJzO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWRzOiBudW1iZXJbXTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0SXNDb25zZW50ZWRGaWx0ZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldElzQ29uc2VudGVkRmlsdGVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgT3BlblNhZmVicm93c2luZ1RydXN0ZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZFVybFRvVHJ1c3RlZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkVXJsVG9UcnVzdGVkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNldE5vdGlmaWNhdGlvblZpZXdlZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2V0Tm90aWZpY2F0aW9uVmlld2VkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgd2l0aERlbGF5OiBib29sZWFuO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTY3JpcHRsZXRDbG9zZVdpbmRvd01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2NyaXB0bGV0Q2xvc2VXaW5kb3c7XG59O1xuXG5leHBvcnQgdHlwZSBTaG93QWxlcnRQb3B1cE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2hvd0FsZXJ0UG9wdXA7XG4gICAgZGF0YToge1xuICAgICAgICBpc0FkZ3VhcmRUYWI6IGJvb2xlYW47XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICBhbGVydFN0eWxlczogc3RyaW5nO1xuICAgICAgICBhbGVydENvbnRhaW5lclN0eWxlczogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTaG93UnVsZUxpbWl0c0FsZXJ0TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TaG93UnVsZUxpbWl0c0FsZXJ0O1xuICAgIGRhdGE6IHtcbiAgICAgICAgaXNBZGd1YXJkVGFiOiBib29sZWFuO1xuICAgICAgICBtYWluVGV4dDogc3RyaW5nO1xuICAgICAgICBsaW5rVGV4dDogc3RyaW5nO1xuICAgICAgICBhbGVydFN0eWxlczogc3RyaW5nO1xuICAgICAgICBhbGVydENvbnRhaW5lclN0eWxlczogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTaG93VmVyc2lvblVwZGF0ZWRQb3B1cE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2hvd1ZlcnNpb25VcGRhdGVkUG9wdXA7XG4gICAgZGF0YToge1xuICAgICAgICBpc0FkZ3VhcmRUYWI6IGJvb2xlYW47XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgIGNoYW5nZWxvZ0hyZWY6IHN0cmluZztcbiAgICAgICAgY2hhbmdlbG9nVGV4dDogc3RyaW5nO1xuICAgICAgICBzaG93UHJvbW9Ob3RpZmljYXRpb246IGJvb2xlYW47XG4gICAgICAgIG9mZmVyOiBzdHJpbmc7XG4gICAgICAgIG9mZmVyRGVzYzogc3RyaW5nO1xuICAgICAgICBvZmZlckJ1dHRvblRleHQ6IHN0cmluZztcbiAgICAgICAgb2ZmZXJCdXR0b25IcmVmOiBzdHJpbmc7XG4gICAgICAgIG9mZmVyQmdJbWFnZTogc3RyaW5nO1xuICAgICAgICBkaXNhYmxlTm90aWZpY2F0aW9uVGV4dDogc3RyaW5nO1xuICAgICAgICBhbGVydFN0eWxlczogc3RyaW5nO1xuICAgICAgICBpZnJhbWVTdHlsZXM6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50O1xuICAgIGRhdGE6IHtcbiAgICAgICAgc2NyZWVuTmFtZTogVGVsZW1ldHJ5U2NyZWVuTmFtZTtcbiAgICAgICAgcGFnZUlkOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNlbmRUZWxlbWV0cnlDdXN0b21FdmVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50O1xuICAgIGRhdGE6IHtcbiAgICAgICAgc2NyZWVuTmFtZTogVGVsZW1ldHJ5QWN0aW9uVG9TY3JlZW5NYXBbVGVsZW1ldHJ5RXZlbnROYW1lXTtcbiAgICAgICAgZXZlbnROYW1lOiBUZWxlbWV0cnlFdmVudE5hbWU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZFRlbGVtZXRyeU9wZW5lZFBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZFRlbGVtZXRyeU9wZW5lZFBhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZUlkOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENhbkVuYWJsZVN0YXRpY0ZpbHRlck12M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0dyb3VwTXYzO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZ3JvdXBJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDdXJyZW50TGltaXRzTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DdXJyZW50TGltaXRzTXYzO1xufTtcblxuZXhwb3J0IHR5cGUgUmVzdG9yZUZpbHRlcnNNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlc3RvcmVGaWx0ZXJzTXYzO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzO1xufTtcblxuZXhwb3J0IHR5cGUgR2V0UnVsZXNMaW1pdHNDb3VudGVyc012M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0UnVsZXNMaW1pdHNDb3VudGVyc012Mztcbn07XG5cbi8vIFVuaWZpZWQgbWVzc2FnZSBtYXAgdGhhdCBpbmNsdWRlcyBib3RoIG1lc3NhZ2Ugc3RydWN0dXJlIGFuZCByZXNwb25zZSB0eXBlc1xuZXhwb3J0IHR5cGUgTWVzc2FnZU1hcCA9IHtcbiAgICBbTWVzc2FnZVR5cGUuQ3JlYXRlRXZlbnRMaXN0ZW5lcl06IHtcbiAgICAgICAgbWVzc2FnZTogQ3JlYXRlRXZlbnRMaXN0ZW5lck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBDcmVhdGVFdmVudExpc3RlbmVyUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbl06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFwcGx5U2V0dGluZ3NKc29uXToge1xuICAgICAgICBtZXNzYWdlOiBBcHBseVNldHRpbmdzSnNvbk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkxvYWRTZXR0aW5nc0pzb25dOiB7XG4gICAgICAgIG1lc3NhZ2U6IExvYWRTZXR0aW5nc0pzb25NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogRXhwb3J0TWVzc2FnZVJlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZEZpbHRlcmluZ1N1YnNjcmlwdGlvbl06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0SXNBcHBJbml0aWFsaXplZF06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0SXNBcHBJbml0aWFsaXplZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldFRhYkluZm9Gb3JQb3B1cF06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0VGFiSW5mb0ZvclBvcHVwTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldFRhYkluZm9Gb3JQb3B1cFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkXToge1xuICAgICAgICBtZXNzYWdlOiBDaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5SdWxlc0xpbWl0c1RhYl06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlblJ1bGVzTGltaXRzVGFiTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlblNldHRpbmdzVGFiXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuU2V0dGluZ3NUYWJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuQXNzaXN0YW50XToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuQXNzaXN0YW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lXToge1xuICAgICAgICBtZXNzYWdlOiBVcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TeW5jaHJvbml6ZU9wZW5UYWJzXToge1xuICAgICAgICBtZXNzYWdlOiBTeW5jaHJvbml6ZU9wZW5UYWJzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEZpbHRlcmluZ0xvZ1RhYkluZm9bXTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DaGVja0ZpbHRlcnNVcGRhdGVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENoZWNrRmlsdGVyc1VwZGF0ZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBGaWx0ZXJNZXRhZGF0YVtdIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNoZWNrRXh0ZW5zaW9uVXBkYXRlTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBDaGVja0V4dGVuc2lvblVwZGF0ZU1lc3NhZ2VNdjM7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlVwZGF0ZUV4dGVuc2lvbk12M106IHtcbiAgICAgICAgbWVzc2FnZTogVXBkYXRlRXh0ZW5zaW9uTWVzc2FnZU12MztcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0QWxsb3dsaXN0RG9tYWluc106IHtcbiAgICAgICAgbWVzc2FnZTogR2V0QWxsb3dsaXN0RG9tYWluc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRBbGxvd2xpc3REb21haW5zUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkV4dGVuc2lvblN0b3JlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuRXh0ZW5zaW9uU3RvcmVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuQ29tcGFyZVBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5Db21wYXJlUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVzZXRCbG9ja2VkQWRzQ291bnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlc2V0QmxvY2tlZEFkc0NvdW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkZpbHRlcmluZ0xvZ106IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkZpbHRlcmluZ0xvZ01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5BYnVzZVRhYl06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkFidXNlVGFiTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlblNpdGVSZXBvcnRUYWJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5TaXRlUmVwb3J0VGFiTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlblRoYW5reW91UGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlblRoYW5reW91UGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldE9wdGlvbnNEYXRhXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRPcHRpb25zRGF0YU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRPcHRpb25zRGF0YVJlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNoYW5nZVVzZXJTZXR0aW5nc106IHtcbiAgICAgICAgbWVzc2FnZTogQ2hhbmdlVXNlclNldHRpbmdNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZXNldFNldHRpbmdzXToge1xuICAgICAgICBtZXNzYWdlOiBSZXNldFNldHRpbmdzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkQW5kRW5hYmxlRmlsdGVyXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRBbmRFbmFibGVGaWx0ZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkRpc2FibGVGaWx0ZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IERpc2FibGVGaWx0ZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZW1vdmVBbnRpQmFubmVyRmlsdGVyXToge1xuICAgICAgICBtZXNzYWdlOiBSZW1vdmVBbnRpQmFubmVyRmlsdGVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2F2ZUFsbG93bGlzdERvbWFpbnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNhdmVBbGxvd2xpc3REb21haW5zTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2F2ZVVzZXJSdWxlc106IHtcbiAgICAgICAgbWVzc2FnZTogU2F2ZVVzZXJSdWxlc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldFVzZXJSdWxlc106IHtcbiAgICAgICAgbWVzc2FnZTogR2V0VXNlclJ1bGVzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldFVzZXJSdWxlc1Jlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldFVzZXJSdWxlc0VkaXRvckRhdGFdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldFVzZXJSdWxlc0VkaXRvckRhdGFNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0VXNlclJ1bGVzRWRpdG9yRGF0YVJlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZFVzZXJSdWxlXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRVc2VyUnVsZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlbW92ZVVzZXJSdWxlXToge1xuICAgICAgICBtZXNzYWdlOiBSZW1vdmVVc2VyUnVsZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlc2V0VXNlclJ1bGVzRm9yUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogUmVzZXRVc2VyUnVsZXNGb3JQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldEVkaXRvclN0b3JhZ2VDb250ZW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZXRFZGl0b3JTdG9yYWdlQ29udGVudF06IHtcbiAgICAgICAgbWVzc2FnZTogU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZW1vdmVBbGxvd2xpc3REb21haW5dOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlbW92ZUFsbG93bGlzdERvbWFpbk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclVybF06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuTG9hZEN1c3RvbUZpbHRlckluZm9dOiB7XG4gICAgICAgIG1lc3NhZ2U6IExvYWRDdXN0b21GaWx0ZXJJbmZvTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldEN1c3RvbUZpbHRlckluZm9SZXN1bHQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEN1c3RvbUZpbHRlck1ldGFkYXRhO1xuICAgIH07XG4gICAgLy8gVGhpcyBtZXNzYWdlIGlzIHNlbnQgZnJvbSBiYWNrZ3JvdW5kIGFuZCBoYW5kbGVkIG9uIFVJIHNpZGUuXG4gICAgW01lc3NhZ2VUeXBlLkFwcEluaXRpYWxpemVkXToge1xuICAgICAgICBtZXNzYWdlOiBBcHBJbml0aWFsaXplZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBuZXZlcjtcbiAgICB9O1xuICAgIC8vIFRoaXMgbWVzc2FnZSBpcyBzZW50IGZyb20gYmFja2dyb3VuZCBhbmQgaGFuZGxlZCBvbiBVSSBzaWRlLlxuICAgIFtNZXNzYWdlVHlwZS5VcGRhdGVUb3RhbEJsb2NrZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFVwZGF0ZVRvdGFsQmxvY2tlZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBuZXZlcjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRGaWx0ZXJpbmdMb2dEYXRhXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRGaWx0ZXJpbmdMb2dEYXRhTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldEZpbHRlcmluZ0xvZ0RhdGFSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DaGVja1JlcXVlc3RGaWx0ZXJSZWFkeV06IHtcbiAgICAgICAgbWVzc2FnZTogQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHlNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5Pbk9wZW5GaWx0ZXJpbmdMb2dQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuRmlsdGVyaW5nTG9nUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBDbG9zZUZpbHRlcmluZ0xvZ1BhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DbGVhckV2ZW50c0J5VGFiSWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENsZWFyRXZlbnRzQnlUYWJJZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNldFByZXNlcnZlTG9nU3RhdGVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNldFByZXNlcnZlTG9nU3RhdGVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZWZyZXNoUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogUmVmcmVzaFBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZF06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogRmlsdGVyaW5nTG9nVGFiSW5mbyB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZV06IHtcbiAgICAgICAgbWVzc2FnZTogU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5FbmFibGVGaWx0ZXJzR3JvdXBdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEVuYWJsZUZpbHRlcnNHcm91cE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5EaXNhYmxlRmlsdGVyc0dyb3VwXToge1xuICAgICAgICBtZXNzYWdlOiBEaXNhYmxlRmlsdGVyc0dyb3VwTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlblNhZmVicm93c2luZ1RydXN0ZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2V0Tm90aWZpY2F0aW9uVmlld2VkXToge1xuICAgICAgICBtZXNzYWdlOiBTZXROb3RpZmljYXRpb25WaWV3ZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogUHJvbWlzZTx2b2lkPjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZW1vdmVMaXN0ZW5lcl06IHtcbiAgICAgICAgbWVzc2FnZTogUmVtb3ZlTGlzdGVuZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TY3JpcHRsZXRDbG9zZVdpbmRvd106IHtcbiAgICAgICAgbWVzc2FnZTogU2NyaXB0bGV0Q2xvc2VXaW5kb3dNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TaG93UnVsZUxpbWl0c0FsZXJ0XToge1xuICAgICAgICBtZXNzYWdlOiBTaG93UnVsZUxpbWl0c0FsZXJ0TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIGJhY2tncm91bmQgYW5kIGhhbmRsZWQgb24gVUkgc2lkZS5cbiAgICBbTWVzc2FnZVR5cGUuTm90aWZ5TGlzdGVuZXJzXToge1xuICAgICAgICBtZXNzYWdlOiBOb3RpZnlMaXN0ZW5lcnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbmV2ZXI7XG4gICAgfTtcbiAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIGJhY2tncm91bmQgYW5kIGhhbmRsZWQgb24gVUkgc2lkZS5cbiAgICBbTWVzc2FnZVR5cGUuVXBkYXRlTGlzdGVuZXJzXToge1xuICAgICAgICBtZXNzYWdlOiBVcGRhdGVMaXN0ZW5lcnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbmV2ZXI7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2hvd0FsZXJ0UG9wdXBdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNob3dBbGVydFBvcHVwTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2hvd1ZlcnNpb25VcGRhdGVkUG9wdXBdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNob3dWZXJzaW9uVXBkYXRlZFBvcHVwTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0SXNDb25zZW50ZWRGaWx0ZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldElzQ29uc2VudGVkRmlsdGVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2V0Q29uc2VudGVkRmlsdGVyc106IHtcbiAgICAgICAgbWVzc2FnZTogU2V0Q29uc2VudGVkRmlsdGVyc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZFVybFRvVHJ1c3RlZF06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkVXJsVG9UcnVzdGVkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50XToge1xuICAgICAgICBtZXNzYWdlOiBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRUZWxlbWV0cnlPcGVuZWRQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRUZWxlbWV0cnlPcGVuZWRQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHN0cmluZztcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBSZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ3VycmVudExpbWl0c012M106IHtcbiAgICAgICAgbWVzc2FnZTogQ3VycmVudExpbWl0c012M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBNdjNMaW1pdHNDaGVja1Jlc3VsdDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IElSdWxlc0xpbWl0cyB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENhbkVuYWJsZVN0YXRpY0ZpbHRlck12M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBTdGF0aWNMaW1pdHNDaGVja1Jlc3VsdDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DYW5FbmFibGVTdGF0aWNHcm91cE12M106IHtcbiAgICAgICAgbWVzc2FnZTogQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogU3RhdGljTGltaXRzQ2hlY2tSZXN1bHQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVzdG9yZUZpbHRlcnNNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlc3RvcmVGaWx0ZXJzTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZUZyYW1lU2NyaXB0XToge1xuICAgICAgICBtZXNzYWdlOiBJbml0aWFsaXplRnJhbWVTY3JpcHRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogUGFnZUluaXRBcHBEYXRhO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQ7XG4gICAgICAgIHJlc3BvbnNlOiBCbG9ja2luZ1BhZ2VJbml0QXBwRGF0YTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBIZWxwZXIgdHlwZSB0byBjaGVjayBpZiBhIGdpdmVuIHR5cGUgaXMgYSB2YWxpZCBtZXNzYWdlIHR5cGUuXG4gKi9cbmV4cG9ydCB0eXBlIFZhbGlkTWVzc2FnZVR5cGVzID0ga2V5b2YgTWVzc2FnZU1hcDtcblxuLyoqXG4gKiBBbGwgbWVzc2FnZXMgdGhhdCBjYW4gYmUgc2VudC5cbiAqL1xuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IE1lc3NhZ2VNYXBbVmFsaWRNZXNzYWdlVHlwZXNdWydtZXNzYWdlJ10gJiBNZXNzYWdlQ29tbW9uUHJvcHM7XG5cbi8qKlxuICogSGVscGVyIHR5cGUgdG8gZXh0cmFjdCB0aGUgbWVzc2FnZSB0eXBlIGZvciBhIGdpdmVuIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCB0eXBlIEV4dHJhY3RlZE1lc3NhZ2U8VD4gPSBFeHRyYWN0PE1lc3NhZ2UsIHsgdHlwZTogVCB9PjtcblxuLyoqXG4gKiBIZWxwZXIgdHlwZSB0byBleHRyYWN0IHRoZSByZXNwb25zZSB0eXBlIGZvciBhIGdpdmVuIG1lc3NhZ2UgdHlwZVxuICovXG5leHBvcnQgdHlwZSBFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPFQgZXh0ZW5kcyBWYWxpZE1lc3NhZ2VUeXBlcz4gPSBNZXNzYWdlTWFwW1RdWydyZXNwb25zZSddO1xuXG4vKipcbiAqIEhlbHBlciB0eXBlIHRvIGV4dHJhY3QgdGhlIG1lc3NhZ2UgdHlwZSBmb3IgYSBnaXZlbiBtZXNzYWdlIHdpdGhvdXQgaGFuZGxlck5hbWUuXG4gKi9cbmV4cG9ydCB0eXBlIE1lc3NhZ2VXaXRob3V0SGFuZGxlck5hbWU8VD4gPSB7IHR5cGU6IFQgfSAmIE9taXQ8RXh0cmFjdGVkTWVzc2FnZTxUPiwgJ2hhbmRsZXJOYW1lJz47XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8vIFNpbmNlIGV4cG9ydHMgZnJvbSAnLi9jb25zdGFudHMnIGFyZTogdGhlIE1lc3NhZ2VUeXBlIGVudW0gYW5kIGEgbG90IG9mIHR5cGVzLFxuLy8gYW5kIGltcG9ydHMgdGhlcmUgYXJlIHR5cGVzIG9ubHksIHNvIGl0IHNob3VsZCBub3QgYWZmZWN0IGJ1bmRsZSBzaXplXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCB7IHNlbmRNZXNzYWdlLCBzZW5kVGFiTWVzc2FnZSB9IGZyb20gJy4vc2VuZC1tZXNzYWdlJztcbmV4cG9ydCB7IE1lc3NhZ2VIYW5kbGVyLCBtZXNzYWdlSGFzVHlwZUZpZWxkLCBtZXNzYWdlSGFzVHlwZUFuZERhdGFGaWVsZHMgfSBmcm9tICcuL21lc3NhZ2UtaGFuZGxlcic7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgYnJvd3NlciwgeyB0eXBlIFJ1bnRpbWUgfSBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuXG5pbXBvcnQgeyB0eXBlIEVuZ2luZU1lc3NhZ2UgfSBmcm9tICdlbmdpbmUnO1xuXG5pbXBvcnQge1xuICAgIHR5cGUgTWVzc2FnZVR5cGUsXG4gICAgdHlwZSBNZXNzYWdlLFxuICAgIHR5cGUgRXh0cmFjdGVkTWVzc2FnZSxcbiAgICB0eXBlIFZhbGlkTWVzc2FnZVR5cGVzLFxuICAgIHR5cGUgRXh0cmFjdE1lc3NhZ2VSZXNwb25zZSxcbiAgICBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxudHlwZSBNZXNzYWdlTGlzdGVuZXI8VCBleHRlbmRzIFZhbGlkTWVzc2FnZVR5cGVzPiA9IChcbiAgICBtZXNzYWdlOiBFeHRyYWN0ZWRNZXNzYWdlPFQ+LFxuICAgIHNlbmRlcjogUnVudGltZS5NZXNzYWdlU2VuZGVyLFxuKSA9PiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8VD4+IHwgRXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxUPjtcblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBtZXNzYWdlcyB0aGF0IGhhdmUgYSAndHlwZScgZmllbGQgd2l0aCBwb3NzaWJsZSB7QGxpbmsgTWVzc2FnZVR5cGV9LlxuICpcbiAqIEBub3RlIEFkZGVkIHRvIG5vIGJyaW5nIGhlcmUgaHVnZSB6b2QgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSBVbmtub3duIG1lc3NhZ2UuXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiBtZXNzYWdlIGhhcyAndHlwZScgZmllbGQgd2l0aCBwb3NzaWJsZSB7QGxpbmsgTWVzc2FnZVR5cGV9LlxuICovXG5leHBvcnQgY29uc3QgbWVzc2FnZUhhc1R5cGVGaWVsZCA9IChtZXNzYWdlOiB1bmtub3duKTogbWVzc2FnZSBpcyB7IHR5cGU6IE1lc3NhZ2VUeXBlIH0gPT4ge1xuICAgIHJldHVybiB0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZSAhPT0gbnVsbCAmJiAndHlwZScgaW4gbWVzc2FnZTtcbn07XG5cbi8qKlxuICogVHlwZSBndWFyZCBmb3IgbWVzc2FnZXMgdGhhdCBoYXZlIGEgJ3R5cGUnIGZpZWxkIGFuZCAnZGF0YScgZmllbGQgYW5kIGxvb2tzIGxpa2Uge0BsaW5rIE1lc3NhZ2V9LlxuICpcbiAqIEBub3RlIEFkZGVkIHRvIG5vIGJyaW5nIGhlcmUgaHVnZSB6b2QgbGlicmFyeS5cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSBVbmtub3duIG1lc3NhZ2UuXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiBtZXNzYWdlIGhhcyAndHlwZScgYW5kICdkYXRhJyBmaWVsZHMgYW5kIGxvb2tzIGxpa2Uge0BsaW5rIE1lc3NhZ2V9LlxuICovXG5leHBvcnQgY29uc3QgbWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzID0gKG1lc3NhZ2U6IHVua25vd24pOiBtZXNzYWdlIGlzIE1lc3NhZ2UgPT4ge1xuICAgIHJldHVybiBtZXNzYWdlSGFzVHlwZUZpZWxkKG1lc3NhZ2UpICYmICdkYXRhJyBpbiBtZXNzYWdlO1xufTtcblxuLyoqXG4gKiBBUEkgZm9yIGhhbmRsaW5nIE1lc3NhZ2VzIHZpYSB7QGxpbmsgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZX1cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lc3NhZ2VIYW5kbGVyIHtcbiAgICBwcm90ZWN0ZWQgbGlzdGVuZXJzID0gbmV3IE1hcDxWYWxpZE1lc3NhZ2VUeXBlcywgTWVzc2FnZUxpc3RlbmVyPFZhbGlkTWVzc2FnZVR5cGVzPj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZU1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBtZXNzYWdlIGxpc3RlbmVyLlxuICAgICAqIExpc3RlbmVycyBsaW1pdGVkIHRvIDEgcGVyIG1lc3NhZ2UgdHlwZSB0byBwcmV2ZW50IHJhY2VcbiAgICAgKiBjb25kaXRpb24gd2hpbGUgcmVzcG9uc2UgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIFRPRE86IGltcGxlbWVudCBsaXN0ZW5lcnMgcHJpb3JpdHkgZXhlY3V0aW9uIHN0cmF0ZWd5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSAtIHtAbGluayBWYWxpZE1lc3NhZ2VUeXBlc31cbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgLSB7QGxpbmsgTWVzc2FnZUxpc3RlbmVyfVxuICAgICAqXG4gICAgICogQHRocm93cyBlcnJvciwgaWYgbWVzc2FnZSBsaXN0ZW5lciBhbHJlYWR5IGFkZGVkXG4gICAgICovXG4gICAgcHVibGljIGFkZExpc3RlbmVyPFQgZXh0ZW5kcyBWYWxpZE1lc3NhZ2VUeXBlcz4oXG4gICAgICAgIHR5cGU6IFQsXG4gICAgICAgIGxpc3RlbmVyOiBNZXNzYWdlTGlzdGVuZXI8VD4sXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYXModHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWVzc2FnZSBoYW5kbGVyOiAke3R5cGV9IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FzdCB0aHJvdWdoIHVua25vd24gdG8gaGVscCBUUyB1bmRlcnN0YW5kIHRoYXQgdGhlIGxpc3RlbmVyIGlzIG9mXG4gICAgICAgIC8vIHRoZSBjb3JyZWN0IHR5cGUuIEl0IHdpbGwgY2hlY2sgdHlwZXMgYXQgY29tcGlsZSB0aW1lLlxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQodHlwZSwgbGlzdGVuZXIgYXMgdW5rbm93biBhcyBNZXNzYWdlTGlzdGVuZXI8VmFsaWRNZXNzYWdlVHlwZXM+KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG1lc3NhZ2UgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSAtIHtAbGluayBWYWxpZE1lc3NhZ2VUeXBlc31cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXI8VCBleHRlbmRzIFZhbGlkTWVzc2FnZVR5cGVzPih0eXBlOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZSh0eXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBtZXNzYWdlIGlzIG9mIHR5cGUge0BsaW5rIE1lc3NhZ2V9LlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgTWVzc2FnZSBvZiBiYXNpYyB0eXBlIHtAbGluayBNZXNzYWdlfSBvciB7QGxpbmsgRW5naW5lTWVzc2FnZX0uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBtZXNzYWdlIGlzIG9mIHR5cGUge0BsaW5rIE1lc3NhZ2V9LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaXNWYWxpZE1lc3NhZ2VUeXBlKG1lc3NhZ2U6IE1lc3NhZ2UgfCBFbmdpbmVNZXNzYWdlKTogbWVzc2FnZSBpcyBNZXNzYWdlIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuaGFuZGxlck5hbWUgPT09IEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSAmJiAndHlwZScgaW4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGRhdGEgZnJvbSB7QGxpbmsgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZX0gYW5kIG1hdGNoIHNwZWNpZmllZCBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIC0ge0BsaW5rIE1lc3NhZ2V9XG4gICAgICogQHBhcmFtIHNlbmRlciAtIEFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzY3JpcHQgY29udGV4dCB0aGF0IHNlbnQgYSBtZXNzYWdlIG9yIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGhhbmRsZU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IE1lc3NhZ2UgfCB1bmtub3duLFxuICAgICAgICBzZW5kZXI6IFJ1bnRpbWUuTWVzc2FnZVNlbmRlclxuICAgICk6IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQ7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7XG4gICAgdHlwZSBNZXNzYWdlVHlwZSxcbiAgICB0eXBlIE1lc3NhZ2VXaXRob3V0SGFuZGxlck5hbWUsXG4gICAgQVBQX01FU1NBR0VfSEFORExFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVE9ETzogQ29uc2lkZXIgbW92aW5nIHRoaXMgZmlsZSB0byB0aGUgYmFja2dyb3VuZCBmb2xkZXIsIGJlY2F1c2UgYWxsIG1lc3NhZ2VzXG4gKiBmcm9tIHRoZSBVSSBzaG91bGQgYmUgc2VuZCB2aWEgbWV0aG9kcyBvZiBNZXNzZW5nZXIgY2xhc3MgaW5zdGVhZCBvZiB1c2luZ1xuICogZGlyZWN0bHkgc2VuZE1lc3NhZ2UgdG8gcHJvcGVyIHR5cGVzIGNoZWNraW5nLlxuICpcbiAqIHtAbGluayBzZW5kTWVzc2FnZX0gc2VuZHMgYXBwIG1lc3NhZ2UgdmlhIHtAbGluayBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2V9IGFuZFxuICogZ2V0cyByZXNwb25zZSBmcm9tIGFub3RoZXIgZXh0ZW5zaW9uIHBhZ2UgbWVzc2FnZSBoYW5kbGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBwYXJ0aWFsIHtAbGluayBNZXNzYWdlfSByZWNvcmQgd2l0aG91dCB7QGxpbmsgTWVzc2FnZS5oYW5kbGVyTmFtZX0gZmllbGRcbiAqXG4gKiBAcmV0dXJucyBtZXNzYWdlIGhhbmRsZXIgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlPFQgZXh0ZW5kcyBNZXNzYWdlVHlwZT4oXG4gICAgbWVzc2FnZTogTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZTxUPixcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaGFuZGxlck5hbWU6IEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSxcbiAgICAgICAgICAgIC4uLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cblxuLyoqXG4gKiB7QGxpbmsgc2VuZFRhYk1lc3NhZ2V9IHNlbmRzIG1lc3NhZ2UgdG8gc3BlY2lmaWVkIHRhYiB2aWEge0BsaW5rIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZX0gYW5kXG4gKiBnZXRzIHJlc3BvbnNlIGZyb20gaXRcbiAqXG4gKiBAcGFyYW0gdGFiSWQgLSB0YWIgaWRcbiAqIEBwYXJhbSBtZXNzYWdlIC0gcGFydGlhbCB7QGxpbmsgTWVzc2FnZX0gcmVjb3JkIHdpdGhvdXQge0BsaW5rIE1lc3NhZ2UuaGFuZGxlck5hbWV9IGZpZWxkXG4gKlxuICogQHJldHVybnMgdGFiIG1lc3NhZ2UgaGFuZGxlciByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFRhYk1lc3NhZ2U8VCBleHRlbmRzIE1lc3NhZ2VUeXBlPihcbiAgICB0YWJJZDogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IE1lc3NhZ2VXaXRob3V0SGFuZGxlck5hbWU8VD4sXG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGhhbmRsZXJOYW1lOiBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG4gICAgICAgIC4uLm1lc3NhZ2UsXG4gICAgfSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBOYW5vYmFyIGZyb20gJ25hbm9iYXInO1xuXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9jb21tb24vbG9nZ2VyJztcblxuaW1wb3J0IHsgbWVzc2VuZ2VyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzZW5nZXInO1xuXG5leHBvcnQgY2xhc3MgUG9zdEluc3RhbGwge1xuICAgIHByaXZhdGUgc3RhdGljIG5hbm9iYXIgPSBuZXcgTmFub2Jhcih7XG4gICAgICAgIGNsYXNzbmFtZTogJ2FkZy1wcm9ncmVzcy1iYXInLFxuICAgIH0pO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tSZXF1ZXN0VGltZW91dE1zID0gNTAwO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3BlblRoYW5reW91UGFnZVRpbWVvdXRNcyA9IDEwMDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBQb3N0SW5zdGFsbC5vbkRPTUNvbnRlbnRMb2FkZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG9uRE9NQ29udGVudExvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgUG9zdEluc3RhbGwubmFub2Jhci5nbygxNSk7XG5cbiAgICAgICAgUG9zdEluc3RhbGwuY2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBjaGVja1JlcXVlc3RGaWx0ZXJSZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWR5ID0gYXdhaXQgbWVzc2VuZ2VyLmNoZWNrUmVxdWVzdEZpbHRlclJlYWR5KCk7XG5cbiAgICAgICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgICAgIFBvc3RJbnN0YWxsLm9uRW5naW5lTG9hZGVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoUG9zdEluc3RhbGwuY2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHksIFBvc3RJbnN0YWxsLmNoZWNrUmVxdWVzdFRpbWVvdXRNcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignW2V4dC5Qb3N0SW5zdGFsbC5jaGVja1JlcXVlc3RGaWx0ZXJSZWFkeV06IGZhaWxlZCB0byBjaGVjayByZXF1ZXN0IGZpbHRlciByZWFkeScsIGUpO1xuICAgICAgICAgICAgLy8gcmV0cnkgcmVxdWVzdCwgaWYgbWVzc2FnZSBoYW5kbGVyIGlzIG5vdCByZWFkeVxuICAgICAgICAgICAgc2V0VGltZW91dChQb3N0SW5zdGFsbC5jaGVja1JlcXVlc3RGaWx0ZXJSZWFkeSwgUG9zdEluc3RhbGwuY2hlY2tSZXF1ZXN0VGltZW91dE1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG9uRW5naW5lTG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBQb3N0SW5zdGFsbC5uYW5vYmFyLmdvKDEwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIG1lc3Nlbmdlci5vcGVuVGhhbmt5b3VQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFBvc3RJbnN0YWxsLm9wZW5UaGFua3lvdVBhZ2VUaW1lb3V0TXMpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL2NvbW1vbi9sb2dnZXInO1xuaW1wb3J0IHtcbiAgICBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG4gICAgTWVzc2FnZVR5cGUsXG4gICAgbWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzLFxuICAgIG1lc3NhZ2VIYXNUeXBlRmllbGQsXG4gICAgdHlwZSBNZXNzYWdlV2l0aG91dEhhbmRsZXJOYW1lLFxuICAgIHR5cGUgQ2hhbmdlVXNlclNldHRpbmdNZXNzYWdlLFxuICAgIHR5cGUgQWRkQW5kRW5hYmxlRmlsdGVyTWVzc2FnZSxcbiAgICB0eXBlIERpc2FibGVGaWx0ZXJNZXNzYWdlLFxuICAgIHR5cGUgQXBwbHlTZXR0aW5nc0pzb25NZXNzYWdlLFxuICAgIHR5cGUgU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGVNZXNzYWdlLFxuICAgIHR5cGUgU2F2ZVVzZXJSdWxlc01lc3NhZ2UsXG4gICAgdHlwZSBTZXRDb25zZW50ZWRGaWx0ZXJzTWVzc2FnZSxcbiAgICB0eXBlIEdldElzQ29uc2VudGVkRmlsdGVyTWVzc2FnZSxcbiAgICB0eXBlIExvYWRDdXN0b21GaWx0ZXJJbmZvTWVzc2FnZSxcbiAgICB0eXBlIFN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyTWVzc2FnZSxcbiAgICB0eXBlIFJlbW92ZUFudGlCYW5uZXJGaWx0ZXJNZXNzYWdlLFxuICAgIHR5cGUgR2V0VGFiSW5mb0ZvclBvcHVwTWVzc2FnZSxcbiAgICB0eXBlIENoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkTWVzc2FnZSxcbiAgICB0eXBlIE9wZW5BYnVzZVRhYk1lc3NhZ2UsXG4gICAgdHlwZSBPcGVuU2l0ZVJlcG9ydFRhYk1lc3NhZ2UsXG4gICAgdHlwZSBSZXNldFVzZXJSdWxlc0ZvclBhZ2VNZXNzYWdlLFxuICAgIHR5cGUgUmVtb3ZlQWxsb3dsaXN0RG9tYWluTWVzc2FnZSxcbiAgICB0eXBlIEFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkTWVzc2FnZSxcbiAgICB0eXBlIEFkZEFsbG93bGlzdERvbWFpbkZvclVybE1lc3NhZ2UsXG4gICAgdHlwZSBHZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZE1lc3NhZ2UsXG4gICAgdHlwZSBDbGVhckV2ZW50c0J5VGFiSWRNZXNzYWdlLFxuICAgIHR5cGUgUmVmcmVzaFBhZ2VNZXNzYWdlLFxuICAgIHR5cGUgQWRkVXNlclJ1bGVNZXNzYWdlLFxuICAgIHR5cGUgUmVtb3ZlVXNlclJ1bGVNZXNzYWdlLFxuICAgIHR5cGUgU2V0UHJlc2VydmVMb2dTdGF0ZU1lc3NhZ2UsXG4gICAgdHlwZSBTZXRFZGl0b3JTdG9yYWdlQ29udGVudE1lc3NhZ2UsXG4gICAgdHlwZSBDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjNNZXNzYWdlLFxuICAgIHR5cGUgQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjNNZXNzYWdlLFxuICAgIHR5cGUgRXh0cmFjdE1lc3NhZ2VSZXNwb25zZSxcbiAgICB0eXBlIFZhbGlkTWVzc2FnZVR5cGVzLFxuICAgIHR5cGUgU2V0Tm90aWZpY2F0aW9uVmlld2VkTWVzc2FnZSxcbiAgICB0eXBlIFVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZU1lc3NhZ2UsXG4gICAgdHlwZSBBZGRVcmxUb1RydXN0ZWRNZXNzYWdlLFxuICAgIHR5cGUgRXh0cmFjdGVkTWVzc2FnZSxcbiAgICB0eXBlIE9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkTWVzc2FnZSxcbiAgICB0eXBlIFVwZGF0ZUV4dGVuc2lvbk1lc3NhZ2VNdjMsXG4gICAgdHlwZSBTZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudE1lc3NhZ2UsXG4gICAgdHlwZSBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRNZXNzYWdlLFxufSBmcm9tICcuLi8uLi9jb21tb24vbWVzc2FnZXMnO1xuaW1wb3J0IHsgdHlwZSBOb3RpZmllclR5cGUgfSBmcm9tICcuLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgQ3JlYXRlRXZlbnRMaXN0ZW5lclJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9ldmVudCc7XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vY29tbW9uL21lc3NhZ2VzJykuTWVzc2FnZU1hcH0gTWVzc2FnZU1hcFxuICovXG5cbi8qKlxuICogVHlwZSBvZiBtZXNzYWdlIGZvciBsb25nLWxpdmVkIGNvbm5lY3Rpb24gbGlzdGVuZXIgY2FsbGJhY2sgbWVzc2FnZSBhcmd1bWVudC5cbiAqL1xuZXhwb3J0IHR5cGUgTG9uZ0xpdmVkQ29ubmVjdGlvbkNhbGxiYWNrTWVzc2FnZSA9IHtcbiAgICAvKipcbiAgICAgKiBUeXBlIG9mIG5vdGlmaWVyLlxuICAgICAqL1xuICAgIHR5cGU6IE5vdGlmaWVyVHlwZTtcblxuICAgIC8qKlxuICAgICAqIERhdGEgb2Ygbm90aWZpZXIuXG4gICAgICovXG4gICAgZGF0YTogYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IGVudW0gUGFnZSB7XG4gICAgRnVsbHNjcmVlblVzZXJSdWxlcyA9ICdmdWxsc2NyZWVuLXVzZXItcnVsZXMnLFxuICAgIEZpbHRlcmluZ0xvZyA9ICdmaWx0ZXJpbmctbG9nJyxcbiAgICBQb3B1cCA9ICdwb3B1cCcsXG59XG5cbnR5cGUgVW5sb2FkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFJlc3VsdCBvZiBjcmVhdGVMb25nTGl2ZWRDb25uZWN0aW9uLlxuICovXG5leHBvcnQgdHlwZSBMb25nTGl2ZWRDb25uZWN0aW9uUmVzdWx0ID0ge1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGRpc2Nvbm5lY3RzIGZyb20gdGhlIGJhY2tncm91bmQgcGFnZS5cbiAgICAgKi9cbiAgICBvblVubG9hZDogVW5sb2FkQ2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBQb3J0IElEIG9mIHRoZSBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHBvcnRJZDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBNZXNzZW5nZXJDb21tb24gY2xhc3MsIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgYmFja2dyb3VuZCBwYWdlIGZyb20gdGhlIFVJLlxuICogQWN0dWFsbHksIGl0J3MgYSB3cmFwcGVyIGFyb3VuZCB0aGUgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlIG1ldGhvZC5cbiAqL1xuY2xhc3MgTWVzc2VuZ2VyIHtcbiAgICBvbk1lc3NhZ2UgPSBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgTWVzc2VuZ2VyIGNsYXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc2V0VXNlclJ1bGVzRm9yUGFnZSA9IHRoaXMucmVzZXRVc2VyUnVsZXNGb3JQYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyc01WMiA9IHRoaXMudXBkYXRlRmlsdGVyc01WMi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbG93bGlzdERvbWFpbiA9IHRoaXMucmVtb3ZlQWxsb3dsaXN0RG9tYWluLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWQgPSB0aGlzLmFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsID0gdGhpcy5hZGRBbGxvd2xpc3REb21haW5Gb3JVcmwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZS5cbiAgICAgKlxuICAgICAqIEFsbCBtZXNzYWdlcyBkZXNjcmliZWQgaW4gdGhlIHtAbGluayBNZXNzYWdlVHlwZX0gZW51bS5cbiAgICAgKiBBbGwgYW5zd2VycyBkZXNjcmliZWQgaW4gdGhlIHtAbGluayBNZXNzYWdlTWFwfSB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgTWVzc2FnZSB0eXBlLlxuICAgICAqIEBwYXJhbSBkYXRhIE1lc3NhZ2UgZGF0YS4gT3B0aW9uYWwgYmVjYXVzZSBub3QgYWxsIG1lc3NhZ2VzIGhhdmUgZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXNwb25zZSBmcm9tIHRoZSBiYWNrZ3JvdW5kIHBhZ2UuXG4gICAgICogVHlwZSBvZiB0aGUgcmVzcG9uc2UgZGVwZW5kcyBvbiB0aGUgbWVzc2FnZSB0eXBlLiBHbyB0byB7QGxpbmsgTWVzc2FnZU1hcH1cbiAgICAgKiB0byBzZWUgYWxsIHBvc3NpYmxlIG1lc3NhZ2UgdHlwZXMgYW5kIHRoZWlyIHJlc3BvbnNlcy5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHByaXZhdGUgYXN5bmMgc2VuZE1lc3NhZ2U8VCBleHRlbmRzIFZhbGlkTWVzc2FnZVR5cGVzPihcbiAgICAgICAgdHlwZTogTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZTxUPlsndHlwZSddLFxuICAgICAgICBkYXRhPzogJ2RhdGEnIGV4dGVuZHMga2V5b2YgTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZTxUPiA/IE1lc3NhZ2VXaXRob3V0SGFuZGxlck5hbWU8VD5bJ2RhdGEnXSA6IHVuZGVmaW5lZCxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8VD4+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaGFuZGxlck5hbWU6IEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2UgYXMgRXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxUPjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGxvbmctbGl2ZWQgY29ubmVjdGlvbnMgYmV0d2VlbiBhbiBleHRlbnNpb24gcGFnZSBhbmQgdGhlIGJhY2tncm91bmQgcGFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlIFBhZ2UgbmFtZS5cbiAgICAgKiBAcGFyYW0gZXZlbnRzIExpc3Qgb2YgZXZlbnRzIHRvIHdoaWNoIHN1YnNjcmliZS5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgY2FsbGVkIHdoZW4gZXZlbnQgZmlyZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3Qgd2l0aCBvblVubG9hZCBjYWxsYmFjayBhbmQgcG9ydElkLlxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVMb25nTGl2ZWRDb25uZWN0aW9uID0gKFxuICAgICAgICBwYWdlOiBQYWdlLFxuICAgICAgICBldmVudHM6IE5vdGlmaWVyVHlwZVtdLFxuICAgICAgICBjYWxsYmFjazogKG1lc3NhZ2U6IExvbmdMaXZlZENvbm5lY3Rpb25DYWxsYmFja01lc3NhZ2UpID0+IHZvaWQsXG4gICAgKTogTG9uZ0xpdmVkQ29ubmVjdGlvblJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBwb3J0OiBicm93c2VyLlJ1bnRpbWUuUG9ydDtcbiAgICAgICAgbGV0IGZvcmNlRGlzY29ubmVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcG9ydElkID0gYCR7cGFnZX1fJHtuYW5vaWQoKX1gO1xuXG4gICAgICAgIGNvbnN0IGNvbm5lY3QgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBwb3J0ID0gYnJvd3Nlci5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBwb3J0SWQgfSk7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogTWVzc2FnZVR5cGUuQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbiwgZGF0YTogeyBldmVudHMgfSB9KTtcblxuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VIYXNUeXBlRmllbGQobWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdbZXh0Lk1lc3Nlbmdlcl06IHJlY2VpdmVkIG1lc3NhZ2UgaW4gTWVzc2VuZ2VyLmNyZWF0ZUxvbmdMaXZlZENvbm5lY3Rpb24gaGFzIG5vIHR5cGUgZmllbGQ6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5Ob3RpZnlMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlSGFzVHlwZUFuZERhdGFGaWVsZHMobWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignW2V4dC5NZXNzZW5nZXJdOiByZWNlaXZlZCBtZXNzYWdlIHdpdGggdHlwZSBNZXNzYWdlVHlwZS5Ob3RpZnlMaXN0ZW5lcnMgaGFzIG5vIGRhdGE6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXN0ZWRNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRyYWN0ZWRNZXNzYWdlPE1lc3NhZ2VUeXBlLk5vdGlmeUxpc3RlbmVycz47XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3R5cGUsIC4uLmRhdGFdID0gY2FzdGVkTWVzc2FnZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7IHR5cGUsIGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJvd3Nlci5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1tleHQuTWVzc2VuZ2VyXTogcmVjZWl2ZWQgZXJyb3Igb24gZGlzY29ubmVjdDonLCBicm93c2VyLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSB0cnkgdG8gY29ubmVjdCBhZ2FpbiBpZiB0aGUgYmFja2dyb3VuZCBwYWdlIHdhcyB0ZXJtaW5hdGVkXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JjZURpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29ubmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG9uVW5sb2FkID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKHBvcnQpIHtcbiAgICAgICAgICAgICAgICBmb3JjZURpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcG9ydC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIG9uVW5sb2FkKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIG9uVW5sb2FkKTtcblxuICAgICAgICByZXR1cm4geyBvblVubG9hZCwgcG9ydElkIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBzdWJzY3JpYmVzIHRvIG5vdGlmaWVyIG1vZHVsZSBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRzIExpc3Qgb2YgZXZlbnRzIHRvIHdoaWNoIHN1YnNjcmliZS5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgY2FsbGVkIHdoZW4gZXZlbnQgZmlyZXMuXG4gICAgICogQHBhcmFtIG9uVW5sb2FkQ2FsbGJhY2sgQ2FsbGJhY2sgdXNlZCB0byByZW1vdmUgbGlzdGVuZXIgb24gdW5sb2FkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgRnVuY3Rpb24gdG8gcmVtb3ZlIGxpc3RlbmVyIG9uIHVubG9hZC5cbiAgICAgKi9cbiAgICBjcmVhdGVFdmVudExpc3RlbmVyID0gYXN5bmMgKFxuICAgICAgICBldmVudHM6IE5vdGlmaWVyVHlwZVtdLFxuICAgICAgICBjYWxsYmFjazogKG1lc3NhZ2U6IExvbmdMaXZlZENvbm5lY3Rpb25DYWxsYmFja01lc3NhZ2UpID0+IHZvaWQsXG4gICAgICAgIG9uVW5sb2FkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLFxuICAgICk6IFByb21pc2U8VW5sb2FkQ2FsbGJhY2s+ID0+IHtcbiAgICAgICAgbGV0IGxpc3RlbmVySWQ6IG51bWJlciB8IG51bGw7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IENyZWF0ZUV2ZW50TGlzdGVuZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICBNZXNzYWdlVHlwZS5DcmVhdGVFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgeyBldmVudHMgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBsaXN0ZW5lcklkID0gcmVzcG9uc2UubGlzdGVuZXJJZDtcblxuICAgICAgICBjb25zdCBvblVwZGF0ZUxpc3RlbmVycyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSZXNwb25zZTogQ3JlYXRlRXZlbnRMaXN0ZW5lclJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAgICBNZXNzYWdlVHlwZS5DcmVhdGVFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHsgZXZlbnRzIH0sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsaXN0ZW5lcklkID0gdXBkYXRlZFJlc3BvbnNlLmxpc3RlbmVySWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZUhhbmRsZXIgPSAobWVzc2FnZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlSGFzVHlwZUZpZWxkKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdbZXh0Lk1lc3Nlbmdlcl06IHJlY2VpdmVkIG1lc3NhZ2UgaW4gTWVzc2VuZ2VyLmNyZWF0ZUV2ZW50TGlzdGVuZXIgaGFzIG5vIHR5cGUgZmllbGQ6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuTm90aWZ5TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlSGFzVHlwZUFuZERhdGFGaWVsZHMobWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdbZXh0Lk1lc3Nlbmdlcl06IHJlY2VpdmVkIG1lc3NhZ2Ugd2l0aCB0eXBlIE1lc3NhZ2VUeXBlLk5vdGlmeUxpc3RlbmVycyBoYXMgbm8gZGF0YTonLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXN0ZWRNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRyYWN0ZWRNZXNzYWdlPE1lc3NhZ2VUeXBlLk5vdGlmeUxpc3RlbmVycz47XG5cbiAgICAgICAgICAgICAgICBjb25zdCBbdHlwZSwgLi4uZGF0YV0gPSBjYXN0ZWRNZXNzYWdlLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHsgdHlwZSwgZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5VcGRhdGVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uVW5sb2FkID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKCFsaXN0ZW5lcklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBvblVubG9hZCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgb25VbmxvYWQpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIE1lc3NhZ2VUeXBlLlJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHsgbGlzdGVuZXJJZCB9LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGlzdGVuZXJJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25VbmxvYWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9uVW5sb2FkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIG9uVW5sb2FkKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIG9uVW5sb2FkKTtcblxuICAgICAgICByZXR1cm4gb25VbmxvYWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSBmcm9tIGJhY2tncm91bmQgcGFnZSB0byB1cGRhdGUgbGlzdGVuZXJzIG9uIHRoZSBVSS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlTGlzdGVuZXJzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5VcGRhdGVMaXN0ZW5lcnM+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlVwZGF0ZUxpc3RlbmVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZ2V0IHRoZSBzZXR0aW5ncyBkYXRhIGZvclxuICAgICAqIHRoZSBvcHRpb25zIHBhZ2Ugd2l0aCBzb21lIGFkZGl0aW9uYWwgaW5mby5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZXR0aW5ncyBkYXRhIGZvclxuICAgICAqIHRoZSBvcHRpb25zIHBhZ2Ugd2l0aCBzb21lIGFkZGl0aW9uYWwgaW5mby5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRPcHRpb25zRGF0YSgpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuR2V0T3B0aW9uc0RhdGE+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLkdldE9wdGlvbnNEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGFuZ2UgdGhlIHVzZXIgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZXR0aW5nSWQgU2V0dGluZyBpZGVudGlmaWVyLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBTZXR0aW5nIHZhbHVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgY2hhbmdlVXNlclNldHRpbmcoXG4gICAgICAgIHNldHRpbmdJZDogQ2hhbmdlVXNlclNldHRpbmdNZXNzYWdlWydkYXRhJ11bJ2tleSddLFxuICAgICAgICB2YWx1ZTogQ2hhbmdlVXNlclNldHRpbmdNZXNzYWdlWydkYXRhJ11bJ3ZhbHVlJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkNoYW5nZVVzZXJTZXR0aW5ncz4+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgIE1lc3NhZ2VUeXBlLkNoYW5nZVVzZXJTZXR0aW5ncyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IHNldHRpbmdJZCxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gb3BlbiB0aGUgZXh0ZW5zaW9uIHN0b3JlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgb3BlbkV4dGVuc2lvblN0b3JlKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uU3RvcmU+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25TdG9yZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gb3BlbiB0aGUgY29tcGFyZSBwYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgb3BlbkNvbXBhcmVQYWdlKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuQ29tcGFyZVBhZ2U+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5Db21wYXJlUGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gb3BlbiB0aGUgQ2hyb21lIGV4dGVuc2lvbnMgc2V0dGluZ3MgcGFnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5DaHJvbWVFeHRlbnNpb25zUGFnZSgpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2U+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBvcGVuIHRoZSBleHRlbnNpb24gZGV0YWlscyBwYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgb3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2U+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZW5hYmxlIGEgZmlsdGVyIGJ5IGZpbHRlciBpZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWx0ZXJJZCBGaWx0ZXIgaWRlbnRpZmllci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIGVuYWJsZUZpbHRlcihcbiAgICAgICAgZmlsdGVySWQ6IEFkZEFuZEVuYWJsZUZpbHRlck1lc3NhZ2VbJ2RhdGEnXVsnZmlsdGVySWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuQWRkQW5kRW5hYmxlRmlsdGVyPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5BZGRBbmRFbmFibGVGaWx0ZXIsIHsgZmlsdGVySWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZGlzYWJsZSBhIGZpbHRlciBieSBmaWx0ZXIgaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmlsdGVySWQgRmlsdGVyIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBkaXNhYmxlRmlsdGVyKFxuICAgICAgICBmaWx0ZXJJZDogRGlzYWJsZUZpbHRlck1lc3NhZ2VbJ2RhdGEnXVsnZmlsdGVySWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlciwgeyBmaWx0ZXJJZCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBhcHBseSBzZXR0aW5ncyBmcm9tIGEgSlNPTiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ganNvbiBKU09OIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNldHRpbmdzIHRvIGFwcGx5LlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgYXBwbHlTZXR0aW5nc0pzb24oXG4gICAgICAgIGpzb246IEFwcGx5U2V0dGluZ3NKc29uTWVzc2FnZVsnZGF0YSddWydqc29uJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkFwcGx5U2V0dGluZ3NKc29uPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5BcHBseVNldHRpbmdzSnNvbiwgeyBqc29uIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIG9wZW4gdGhlIGZpbHRlcmluZyBsb2cuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBvcGVuRmlsdGVyaW5nTG9nKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuRmlsdGVyaW5nTG9nPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5PcGVuRmlsdGVyaW5nTG9nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byByZXNldCB0aGUgYmxvY2tlZCBhZHMgc3RhdGlzdGljcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIHJlc2V0U3RhdGlzdGljcygpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuUmVzZXRCbG9ja2VkQWRzQ291bnQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlJlc2V0QmxvY2tlZEFkc0NvdW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBzZXQgdGhlIGZpbHRlcmluZyBsb2cgd2luZG93IHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpbmRvd1N0YXRlIFN0YXRlIG9mIHRoZSBmaWx0ZXJpbmcgbG9nIHdpbmRvdy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIHNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlKFxuICAgICAgICB3aW5kb3dTdGF0ZTogU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGVNZXNzYWdlWydkYXRhJ11bJ3dpbmRvd1N0YXRlJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5TZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZSwgeyB3aW5kb3dTdGF0ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byByZXNldCB0aGUgc2V0dGluZ3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyByZXNldFNldHRpbmdzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5SZXNldFNldHRpbmdzPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5SZXNldFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBnZXQgdGhlIHVzZXIgcnVsZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXNlciBydWxlcy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRVc2VyUnVsZXMoKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkdldFVzZXJSdWxlcz4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0VXNlclJ1bGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBzYXZlIHVzZXIgcnVsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVXNlciBydWxlcyB2YWx1ZSB0byBzYXZlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgc2F2ZVVzZXJSdWxlcyhcbiAgICAgICAgdmFsdWU6IFNhdmVVc2VyUnVsZXNNZXNzYWdlWydkYXRhJ11bJ3ZhbHVlJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlNhdmVVc2VyUnVsZXM+PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuU2F2ZVVzZXJSdWxlcywgeyB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBvcGVuIHVzZXIgcnVsZXMgZWRpdG9yIGluIGZ1bGxzY3JlZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBvcGVuRnVsbHNjcmVlblVzZXJSdWxlcygpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXM+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBnZXQgdGhlIGFsbG93bGlzdCBkb21haW5zLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgYWxsb3dsaXN0IGRvbWFpbnMuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsb3dsaXN0KCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRBbGxvd2xpc3REb21haW5zPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5HZXRBbGxvd2xpc3REb21haW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBzYXZlIHRoZSBhbGxvd2xpc3QgZG9tYWlucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBbGxvd2xpc3QgZG9tYWlucyB2YWx1ZSB0byBzYXZlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgc2F2ZUFsbG93bGlzdChcbiAgICAgICAgdmFsdWU6IFNhdmVVc2VyUnVsZXNNZXNzYWdlWydkYXRhJ11bJ3ZhbHVlJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlNhdmVBbGxvd2xpc3REb21haW5zPj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlNhdmVBbGxvd2xpc3REb21haW5zLCB7IHZhbHVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIG1hcmsgYSBub3RpZmljYXRpb24gYXMgdmlld2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpdGhEZWxheSBXaGV0aGVyIHRoZSBub3RpZmljYXRpb24gc2hvdWxkIGJlIG1hcmtlZCBhcyB2aWV3ZWQgYWZ0ZXIgYSBkZWxheS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIHNldE5vdGlmaWNhdGlvblZpZXdlZChcbiAgICAgICAgd2l0aERlbGF5OiBTZXROb3RpZmljYXRpb25WaWV3ZWRNZXNzYWdlWydkYXRhJ11bJ3dpdGhEZWxheSddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5TZXROb3RpZmljYXRpb25WaWV3ZWQ+PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuU2V0Tm90aWZpY2F0aW9uVmlld2VkLCB7IHdpdGhEZWxheSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byB1cGRhdGUgZmlsdGVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGZpbHRlcnMuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlRmlsdGVyc01WMigpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuQ2hlY2tGaWx0ZXJzVXBkYXRlPj4ge1xuICAgICAgICBpZiAoX19JU19NVjNfXykge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1tleHQuTWVzc2VuZ2VyLnVwZGF0ZUZpbHRlcnNNVjJdOiBmaWx0ZXJzIHVwZGF0ZSBpcyBub3Qgc3VwcG9ydGVkIGluIE1WMycpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2hlY2tGaWx0ZXJzVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGVjayBmb3IgZXh0ZW5zaW9uIHVwZGF0ZXMuXG4gICAgICovXG4gICAgYXN5bmMgY2hlY2tVcGRhdGVzTVYzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DaGVja0V4dGVuc2lvblVwZGF0ZU12Mz4+IHtcbiAgICAgICAgaWYgKCFfX0lTX01WM19fKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignW2V4dC5NZXNzZW5nZXIuY2hlY2tVcGRhdGVzTVYzXTogZXh0ZW5zaW9uIHVwZGF0ZSBpcyBub3Qgc3VwcG9ydGVkIGluIE1WMicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2hlY2tFeHRlbnNpb25VcGRhdGVNdjMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIHVwZGF0ZSBleHRlbnNpb24uXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlRXh0ZW5zaW9uTVYzKFxuICAgICAgICB7IGZyb20gfTogVXBkYXRlRXh0ZW5zaW9uTWVzc2FnZU12M1snZGF0YSddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5VcGRhdGVFeHRlbnNpb25NdjM+PiB7XG4gICAgICAgIGlmICghX19JU19NVjNfXykge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1tleHQuTWVzc2VuZ2VyLnVwZGF0ZUV4dGVuc2lvbk1WM106IGV4dGVuc2lvbiB1cGRhdGUgaXMgbm90IHN1cHBvcnRlZCBpbiBNVjInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlVwZGF0ZUV4dGVuc2lvbk12MywgeyBmcm9tIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIHVwZGF0ZSB0aGUgc3RhdHVzIG9mIGEgZmlsdGVyIGdyb3VwLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlkIEdyb3VwIGlkZW50aWZpZXIuXG4gICAgICogQHBhcmFtIGVuYWJsZWQgV2hldGhlciB0aGUgZ3JvdXAgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVHcm91cFN0YXR1cyhcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgZW5hYmxlZDogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuRW5hYmxlRmlsdGVyc0dyb3VwIHwgTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcnNHcm91cD4+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGVuYWJsZWQgPyBNZXNzYWdlVHlwZS5FbmFibGVGaWx0ZXJzR3JvdXAgOiBNZXNzYWdlVHlwZS5EaXNhYmxlRmlsdGVyc0dyb3VwO1xuICAgICAgICBjb25zdCBncm91cElkID0gTnVtYmVyLnBhcnNlSW50KGlkLCAxMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UodHlwZSwgeyBncm91cElkIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIHNldCBjb25zZW50ZWQgZmlsdGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWx0ZXJJZHMgTGlzdCBvZiBmaWx0ZXIgaWRlbnRpZmllcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRDb25zZW50ZWRGaWx0ZXJzKFxuICAgICAgICBmaWx0ZXJJZHM6IFNldENvbnNlbnRlZEZpbHRlcnNNZXNzYWdlWydkYXRhJ11bJ2ZpbHRlcklkcyddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5TZXRDb25zZW50ZWRGaWx0ZXJzPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5TZXRDb25zZW50ZWRGaWx0ZXJzLCB7IGZpbHRlcklkcyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGVjayBpZiBhIGZpbHRlciBpcyBjb25zZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmlsdGVySWQgRmlsdGVyIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBjaGVjay5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRJc0NvbnNlbnRlZEZpbHRlcihcbiAgICAgICAgZmlsdGVySWQ6IEdldElzQ29uc2VudGVkRmlsdGVyTWVzc2FnZVsnZGF0YSddWydmaWx0ZXJJZCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRJc0NvbnNlbnRlZEZpbHRlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0SXNDb25zZW50ZWRGaWx0ZXIsIHsgZmlsdGVySWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gY2hlY2sgYSBjdXN0b20gZmlsdGVyIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgQ3VzdG9tIGZpbHRlciBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBjaGVjay5cbiAgICAgKi9cbiAgICBhc3luYyBjaGVja0N1c3RvbVVybChcbiAgICAgICAgdXJsOiBMb2FkQ3VzdG9tRmlsdGVySW5mb01lc3NhZ2VbJ2RhdGEnXVsndXJsJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkxvYWRDdXN0b21GaWx0ZXJJbmZvPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5Mb2FkQ3VzdG9tRmlsdGVySW5mbywgeyB1cmwgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gYWRkIGEgY3VzdG9tIGZpbHRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uRGF0YX0gZmlsdGVyIEN1c3RvbSBmaWx0ZXIgZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEN1c3RvbUZpbHRlck1ldGFkYXRhPn0gQ3VzdG9tIGZpbHRlciBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBhc3luYyBhZGRDdXN0b21GaWx0ZXIoXG4gICAgICAgIGZpbHRlcjogU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXJNZXNzYWdlWydkYXRhJ11bJ2ZpbHRlciddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5TdWJzY3JpYmVUb0N1c3RvbUZpbHRlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXIsIHsgZmlsdGVyIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIHJlbW92ZSBhIGN1c3RvbSBmaWx0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmlsdGVySWQgQ3VzdG9tIGZpbHRlciBJRC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgZmlsdGVyIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgYXN5bmMgcmVtb3ZlQ3VzdG9tRmlsdGVyKFxuICAgICAgICBmaWx0ZXJJZDogUmVtb3ZlQW50aUJhbm5lckZpbHRlck1lc3NhZ2VbJ2RhdGEnXVsnZmlsdGVySWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuUmVtb3ZlQW50aUJhbm5lckZpbHRlcj4+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5SZW1vdmVBbnRpQmFubmVyRmlsdGVyLCB7IGZpbHRlcklkIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGNoZWNrIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBpbml0aWFsaXplZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIGJvb2xlYW4gdmFsdWU6XG4gICAgICogdHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gaXMgaW5pdGlhbGl6ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRJc0FwcEluaXRpYWxpemVkKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRJc0FwcEluaXRpYWxpemVkPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5HZXRJc0FwcEluaXRpYWxpemVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgdG8gZ2V0IHRoZSB0YWIgaW5mbyBmb3IgdGhlIHBvcHVwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhYklkIFRhYiBJRC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB0YWIgaW5mbyBvciB1bmRlZmluZWQuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VGFiSW5mb0ZvclBvcHVwKFxuICAgICAgICB0YWJJZDogR2V0VGFiSW5mb0ZvclBvcHVwTWVzc2FnZVsnZGF0YSddWyd0YWJJZCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRUYWJJbmZvRm9yUG9wdXA+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLkdldFRhYkluZm9Gb3JQb3B1cCwgeyB0YWJJZCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGFuZ2UgYXBwbGljYXRpb24gZmlsdGVyaW5nIHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXRlIEFwcGxpY2F0aW9uIGZpbHRlcmluZyBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgc3RhdGUgaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBhc3luYyBjaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZChcbiAgICAgICAgc3RhdGU6IENoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkTWVzc2FnZVsnZGF0YSddWydzdGF0ZSddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWQsIHsgc3RhdGUgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gdXBkYXRlIHRoZSB0aGVtZSBvZiB0aGUgZnVsbHNjcmVlbiB1c2VyIHJ1bGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRoZW1lIFRoZW1lIHRvIHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgdGhlbWUgaXMgdXBkYXRlZC5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWUoXG4gICAgICAgIHRoZW1lOiBVcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWVNZXNzYWdlWydkYXRhJ11bJ3RoZW1lJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lLCB7IHRoZW1lIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIG9wZW4gdGhlIHJ1bGVzIGxpbWl0cyB0YWIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIHRhYiBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgYXN5bmMgb3BlblJ1bGVzTGltaXRzVGFiKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuUnVsZXNMaW1pdHNUYWI+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5SdWxlc0xpbWl0c1RhYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gb3BlbiB0aGUgc2V0dGluZ3MgdGFiLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSB0YWIgaXMgb3BlbmVkLlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5TZXR0aW5nc1RhYigpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuT3BlblNldHRpbmdzVGFiPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5PcGVuU2V0dGluZ3NUYWIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIG9wZW4gdGhlIGFzc2lzdGFudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgYXNzaXN0YW50IGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBhc3luYyBvcGVuQXNzaXN0YW50KCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5PcGVuQXNzaXN0YW50Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5PcGVuQXNzaXN0YW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBvcGVuIHRoZSBhYnVzZSByZXBvcnRpbmcgdGFiIGZvciBhIHNpdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgb2YgdGhlIHNpdGUgdG8gcmVwb3J0IGFidXNlIGZvci5cbiAgICAgKiBAcGFyYW0gZnJvbSBUaGUgc291cmNlIG9mIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSB0YWIgaXMgb3BlbmVkLlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5BYnVzZVNpdGUoXG4gICAgICAgIHVybDogT3BlbkFidXNlVGFiTWVzc2FnZVsnZGF0YSddWyd1cmwnXSxcbiAgICAgICAgZnJvbTogT3BlbkFidXNlVGFiTWVzc2FnZVsnZGF0YSddWydmcm9tJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLk9wZW5BYnVzZVRhYj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuT3BlbkFidXNlVGFiLCB7IHVybCwgZnJvbSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGVjayBzaXRlIHNlY3VyaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBUaGUgVVJMIG9mIHRoZSBzaXRlIHRvIGNoZWNrLlxuICAgICAqIEBwYXJhbSBmcm9tIFRoZSBzb3VyY2Ugb2YgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2l0ZSBzZWN1cml0eSBpbmZvLlxuICAgICAqL1xuICAgIGFzeW5jIGNoZWNrU2l0ZVNlY3VyaXR5KFxuICAgICAgICB1cmw6IE9wZW5TaXRlUmVwb3J0VGFiTWVzc2FnZVsnZGF0YSddWyd1cmwnXSxcbiAgICAgICAgZnJvbTogT3BlblNpdGVSZXBvcnRUYWJNZXNzYWdlWydkYXRhJ11bJ2Zyb20nXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuT3BlblNpdGVSZXBvcnRUYWI+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5TaXRlUmVwb3J0VGFiLCB7IHVybCwgZnJvbSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byByZXNldCB1c2VyIHJ1bGVzIGZvciBhIHNwZWNpZmljIHBhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBVUkwgb2YgdGhlIHBhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIHVzZXIgcnVsZXMgYXJlIHJlc2V0LlxuICAgICAqL1xuICAgIGFzeW5jIHJlc2V0VXNlclJ1bGVzRm9yUGFnZShcbiAgICAgICAgdXJsOiBSZXNldFVzZXJSdWxlc0ZvclBhZ2VNZXNzYWdlWydkYXRhJ11bJ3VybCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5SZXNldFVzZXJSdWxlc0ZvclBhZ2U+PiB7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50VGFiXSA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRUYWI/LmlkKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignW2V4dC5NZXNzZW5nZXIucmVzZXRVc2VyUnVsZXNGb3JQYWdlXTogY2Fubm90IGdldCBjdXJyZW50IHRhYiBpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICBNZXNzYWdlVHlwZS5SZXNldFVzZXJSdWxlc0ZvclBhZ2UsXG4gICAgICAgICAgICB7IHVybCwgdGFiSWQ6IGN1cnJlbnRUYWI/LmlkIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gcmVtb3ZlIGFuIGFsbG93bGlzdCBkb21haW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFiSWQgVGhlIElEIG9mIHRoZSB0YWIuXG4gICAgICogQHBhcmFtIHRhYlJlZnJlc2ggV2hldGhlciB0aGUgdGFiIHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIGRvbWFpbiBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIGFzeW5jIHJlbW92ZUFsbG93bGlzdERvbWFpbihcbiAgICAgICAgdGFiSWQ6IFJlbW92ZUFsbG93bGlzdERvbWFpbk1lc3NhZ2VbJ2RhdGEnXVsndGFiSWQnXSxcbiAgICAgICAgdGFiUmVmcmVzaDogUmVtb3ZlQWxsb3dsaXN0RG9tYWluTWVzc2FnZVsnZGF0YSddWyd0YWJSZWZyZXNoJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlJlbW92ZUFsbG93bGlzdERvbWFpbj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuUmVtb3ZlQWxsb3dsaXN0RG9tYWluLCB7IHRhYklkLCB0YWJSZWZyZXNoIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGFkZCBhbiBhbGxvd2xpc3QgZG9tYWluIGZvciBhIHNwZWNpZmljIHRhYi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWJJZCBUaGUgSUQgb2YgdGhlIHRhYi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgZG9tYWluIGlzIGFkZGVkLlxuICAgICAqL1xuICAgIGFzeW5jIGFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkKFxuICAgICAgICB0YWJJZDogQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWRNZXNzYWdlWydkYXRhJ11bJ3RhYklkJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5BZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZCwgeyB0YWJJZCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBhZGQgYW4gYWxsb3dsaXN0IGRvbWFpbiBmb3IgYSBzcGVjaWZpYyBVUkwuXG4gICAgICpcbiAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IGFmdGVyIGFkZGluZyBhbiBhbGxvd2xpc3QgZG9tYWluLCB0aGUgdGFiIHdpbGwgbm90IGJlIHJlbG9hZGVkLFxuICAgICAqIGl0IHNob3VsZCBiZSBkb25lIHNlcGFyYXRlbHkgbGF0ZXIgaWYgbmVlZGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBUaGUgVVJMIG9mIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBkb21haW4gaXMgYWRkZWQuXG4gICAgICovXG4gICAgYXN5bmMgYWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsKFxuICAgICAgICB1cmw6IEFkZEFsbG93bGlzdERvbWFpbkZvclVybE1lc3NhZ2VbJ2RhdGEnXVsndXJsJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclVybD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsLCB7IHVybCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXb3JrcyBvbmx5IGluIE1WMiwgc2luY2UgTVYzIGRvZXNuJ3Qgc3VwcG9ydCBmaWx0ZXJpbmcgbG9nIHlldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgZmlsdGVyaW5nIGxvZyBwYWdlIGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBhc3luYyBvbk9wZW5GaWx0ZXJpbmdMb2dQYWdlKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5Pbk9wZW5GaWx0ZXJpbmdMb2dQYWdlPj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9uT3BlbkZpbHRlcmluZ0xvZ1BhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGdldCBmaWx0ZXJpbmcgbG9nIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBmaWx0ZXJpbmcgbG9nIGRhdGEuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RmlsdGVyaW5nTG9nRGF0YSgpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nTG9nRGF0YT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nTG9nRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gY2xvc2UgdGhlIGZpbHRlcmluZyBsb2cgcGFnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgcGFnZSBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgYXN5bmMgb25DbG9zZUZpbHRlcmluZ0xvZ1BhZ2UoKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLk9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlPj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBnZXQgZmlsdGVyaW5nIGluZm8gYnkgdGFiIElELlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhYklkIFRoZSBJRCBvZiB0aGUgdGFiLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggZmlsdGVyaW5nIGluZm8gYWJvdXQgdGhlIHRhYi5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZChcbiAgICAgICAgdGFiSWQ6IEdldEZpbHRlcmluZ0luZm9CeVRhYklkTWVzc2FnZVsnZGF0YSddWyd0YWJJZCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWQsIHsgdGFiSWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gc3luY2hyb25pemUgdGhlIGxpc3Qgb2Ygb3BlbiB0YWJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgZmlsdGVyaW5nIGluZm8gYWJvdXQgb3BlbiB0YWJzLlxuICAgICAqL1xuICAgIGFzeW5jIHN5bmNocm9uaXplT3BlblRhYnMoKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlN5bmNocm9uaXplT3BlblRhYnM+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlN5bmNocm9uaXplT3BlblRhYnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGNsZWFyIGV2ZW50cyBieSB0YWIgSUQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFiSWQgVGhlIElEIG9mIHRoZSB0YWIuXG4gICAgICogQHBhcmFtIGlnbm9yZVByZXNlcnZlTG9nIE9wdGlvbmFsIGZsYWcgdG8gaWdub3JlIHRoZSBwcmVzZXJ2ZSBsb2cgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIGV2ZW50cyBhcmUgY2xlYXJlZC5cbiAgICAgKi9cbiAgICBhc3luYyBjbGVhckV2ZW50c0J5VGFiSWQoXG4gICAgICAgIHRhYklkOiBDbGVhckV2ZW50c0J5VGFiSWRNZXNzYWdlWydkYXRhJ11bJ3RhYklkJ10sXG4gICAgICAgIGlnbm9yZVByZXNlcnZlTG9nPzogQ2xlYXJFdmVudHNCeVRhYklkTWVzc2FnZVsnZGF0YSddWydpZ25vcmVQcmVzZXJ2ZUxvZyddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DbGVhckV2ZW50c0J5VGFiSWQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLkNsZWFyRXZlbnRzQnlUYWJJZCwgeyB0YWJJZCwgaWdub3JlUHJlc2VydmVMb2cgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gcmVmcmVzaCB0aGUgY3VycmVudCBwYWdlIGJ5IHRhYiBJRC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWJJZCBUaGUgSUQgb2YgdGhlIHRhYi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgcGFnZSBpcyByZWZyZXNoZWQuXG4gICAgICovXG4gICAgYXN5bmMgcmVmcmVzaFBhZ2UoXG4gICAgICAgIHRhYklkOiBSZWZyZXNoUGFnZU1lc3NhZ2VbJ2RhdGEnXVsndGFiSWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuUmVmcmVzaFBhZ2U+PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuUmVmcmVzaFBhZ2UsIHsgdGFiSWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gYWRkIGEgdXNlciBydWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJ1bGVUZXh0IFVzZXIgcnVsZSB0ZXh0IHRvIGJlIGFkZGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgYWRkVXNlclJ1bGUoXG4gICAgICAgIHJ1bGVUZXh0OiBBZGRVc2VyUnVsZU1lc3NhZ2VbJ2RhdGEnXVsncnVsZVRleHQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuQWRkVXNlclJ1bGU+PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQWRkVXNlclJ1bGUsIHsgcnVsZVRleHQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gcmVtb3ZlIGEgdXNlciBydWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJ1bGVUZXh0IFVzZXIgcnVsZSB0ZXh0IHRvIGJlIHJlbW92ZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyByZW1vdmVVc2VyUnVsZShcbiAgICAgICAgcnVsZVRleHQ6IFJlbW92ZVVzZXJSdWxlTWVzc2FnZVsnZGF0YSddWydydWxlVGV4dCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5SZW1vdmVVc2VyUnVsZT4+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5SZW1vdmVVc2VyUnVsZSwgeyBydWxlVGV4dCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBzZXQgdGhlIHByZXNlcnZlIGxvZyBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gcHJlc2VydmUgdGhlIGxvZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIHNldFByZXNlcnZlTG9nU3RhdGUoXG4gICAgICAgIHN0YXRlOiBTZXRQcmVzZXJ2ZUxvZ1N0YXRlTWVzc2FnZVsnZGF0YSddWydzdGF0ZSddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5TZXRQcmVzZXJ2ZUxvZ1N0YXRlPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5TZXRQcmVzZXJ2ZUxvZ1N0YXRlLCB7IHN0YXRlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGdldCB0aGUgZWRpdG9yIHN0b3JhZ2UgY29udGVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBlZGl0b3Igc3RvcmFnZSBjb250ZW50LlxuICAgICAqL1xuICAgIGFzeW5jIGdldEVkaXRvclN0b3JhZ2VDb250ZW50KCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRFZGl0b3JTdG9yYWdlQ29udGVudD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIHNldCB0aGUgZWRpdG9yIHN0b3JhZ2UgY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZW50IENvbnRlbnQgdG8gYmUgc3RvcmVkIGluIHRoZSBlZGl0b3IuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICBhc3luYyBzZXRFZGl0b3JTdG9yYWdlQ29udGVudChcbiAgICAgICAgY29udGVudDogU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRNZXNzYWdlWydkYXRhJ11bJ2NvbnRlbnQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlNldEVkaXRvclN0b3JhZ2VDb250ZW50LCB7IGNvbnRlbnQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZ2V0IHRoZSBydWxlcyBsaW1pdHMgY291bnRlcnMgZm9yIE1WMy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBydWxlcyBsaW1pdHMgY291bnRlcnMgZm9yIE1WMy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRSdWxlc0xpbWl0c0NvdW50ZXJzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5HZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGVjayBpZiBpdCBpcyBwb3NzaWJsZSB0byBlbmFibGUgYSBzdGF0aWMgZmlsdGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZpbHRlcklkIEZpbHRlciBJRCB0byBjaGVjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIHN0YXRpYyBmaWx0ZXIgY2hlY2suXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEVycm9yIElmIHRoZSBmaWx0ZXIgaXMgbm90IHN0YXRpYy5cbiAgICAgKi9cbiAgICBhc3luYyBjYW5FbmFibGVTdGF0aWNGaWx0ZXIoXG4gICAgICAgIGZpbHRlcklkOiBDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjNNZXNzYWdlWydkYXRhJ11bJ2ZpbHRlcklkJ10sXG4gICAgKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0ZpbHRlck12Mz4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzLCB7IGZpbHRlcklkIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGNoZWNrIGlmIGFsbCBkeW5hbWljIHJ1bGVzIGZvciBhIHVzZXIgcnVsZXMnIGdyb3VwIGNhbiBiZSBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdyb3VwSWQgR3JvdXAgaWRlbnRpZmllciB0byBjaGVjay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIHN0YXRpYyBncm91cCBjaGVjay5cbiAgICAgKi9cbiAgICBhc3luYyBjYW5FbmFibGVTdGF0aWNHcm91cChcbiAgICAgICAgZ3JvdXBJZDogQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjNNZXNzYWdlWydkYXRhJ11bJ2dyb3VwSWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjM+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0dyb3VwTXYzLCB7IGdyb3VwSWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZ2V0IHRoZSBjdXJyZW50IHN0YXRpYyBmaWx0ZXJzIGxpbWl0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjdXJyZW50IHN0YXRpYyBmaWx0ZXJzIGxpbWl0cy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDdXJyZW50TGltaXRzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DdXJyZW50TGltaXRzTXYzPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5DdXJyZW50TGltaXRzTXYzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBjaGVjayBpZiB0aGUgcmVxdWVzdCBmaWx0ZXIgaXMgcmVhZHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIHJlcXVlc3QgZmlsdGVyIGlzIHJlYWR5LlxuICAgICAqL1xuICAgIGFzeW5jIGNoZWNrUmVxdWVzdEZpbHRlclJlYWR5KCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DaGVja1JlcXVlc3RGaWx0ZXJSZWFkeT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGFkZCBhIFVSTCB0byB0aGUgdHJ1c3RlZCBsaXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBVUkwgdG8gYmUgYWRkZWQgdG8gdGhlIHRydXN0ZWQgbGlzdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFVybFRvVHJ1c3RlZChcbiAgICAgICAgdXJsOiBBZGRVcmxUb1RydXN0ZWRNZXNzYWdlWydkYXRhJ11bJ3VybCddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5BZGRVcmxUb1RydXN0ZWQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLkFkZFVybFRvVHJ1c3RlZCwgeyB1cmwgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gZ2V0IHVzZXIgcnVsZXMgZWRpdG9yIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgdXNlciBydWxlcyBlZGl0b3IgZGF0YS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRVc2VyUnVsZXNFZGl0b3JEYXRhKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXNFZGl0b3JEYXRhPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXNFZGl0b3JEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byByZXN0b3JlIGZpbHRlcnMgaW4gTVYzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgYXN5bmMgcmVzdG9yZUZpbHRlcnNNdjMoKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLlJlc3RvcmVGaWx0ZXJzTXYzPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5SZXN0b3JlRmlsdGVyc012Myk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gY2xlYXIgdGhlIHJ1bGVzIGxpbWl0cyB3YXJuaW5nIGluIE1WMy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIGNsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5DbGVhclJ1bGVzTGltaXRzV2FybmluZ012Mz4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGdldCB0aGUgYWxsb3dsaXN0IGRvbWFpbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgYWxsb3dsaXN0IGRvbWFpbnMuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsb3dsaXN0RG9tYWlucygpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuR2V0QWxsb3dsaXN0RG9tYWlucz4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2UoTWVzc2FnZVR5cGUuR2V0QWxsb3dsaXN0RG9tYWlucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gbG9hZCB0aGUgc2V0dGluZ3MgSlNPTi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgc2V0dGluZ3MgSlNPTi5cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkU2V0dGluZ3NKc29uKCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5Mb2FkU2V0dGluZ3NKc29uPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5Mb2FkU2V0dGluZ3NKc29uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBvcGVuIHRoZSB0aGFuayB5b3UgcGFnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5UaGFua3lvdVBhZ2UoKTogUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPE1lc3NhZ2VUeXBlLk9wZW5UaGFua3lvdVBhZ2U+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5UaGFua3lvdVBhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGluaXRpYWxpemUgdGhlIGZyYW1lIHNjcmlwdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpbml0aWFsaXphdGlvbiBkYXRhIGZvciB0aGUgZnJhbWUgc2NyaXB0LlxuICAgICAqL1xuICAgIGFzeW5jIGluaXRpYWxpemVGcmFtZVNjcmlwdCgpOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuSW5pdGlhbGl6ZUZyYW1lU2NyaXB0Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5Jbml0aWFsaXplRnJhbWVTY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgYmFja2dyb3VuZCBwYWdlIHRvIGluaXRpYWxpemUgdGhlIGJsb2NraW5nIHBhZ2Ugc2NyaXB0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGluaXRpYWxpemF0aW9uIGRhdGEgZm9yIHRoZSBibG9ja2luZyBwYWdlIHNjcmlwdC5cbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0KCk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5Jbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5Jbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBtYXJrIHVybCBhcyB0cnVzdGVkIGFuZCBpZ25vcmVcbiAgICAgKiBzYWZlYnJvd3NpbmcgY2hlY2tzIGZvciBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpbml0aWFsaXphdGlvbiBkYXRhIGZvciB0aGUgZnJhbWUgc2NyaXB0LlxuICAgICAqL1xuICAgIGFzeW5jIG9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkKFxuICAgICAgICB1cmw6IE9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkTWVzc2FnZVsnZGF0YSddWyd1cmwnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuT3BlblNhZmVicm93c2luZ1RydXN0ZWQ+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLk9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkLCB7IHVybCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIGJhY2tncm91bmQgcGFnZSB0byBzZW5kIGEgdGVsZW1ldHJ5IHBhZ2UgdmlldyBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY3JlZW5OYW1lIFNjcmVlbiBuYW1lIG9mIHRoZSBwYWdlLlxuICAgICAqIEBwYXJhbSBwYWdlSWQgUGFnZSBJRCBvZiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciB0aGUgbWVzc2FnZSBpcyBzZW50LlxuICAgICAqL1xuICAgIHNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50ID0gYXN5bmMgKFxuICAgICAgICBzY3JlZW5OYW1lOiBTZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudE1lc3NhZ2VbJ2RhdGEnXVsnc2NyZWVuTmFtZSddLFxuICAgICAgICBwYWdlSWQ6IFNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50TWVzc2FnZVsnZGF0YSddWydwYWdlSWQnXSxcbiAgICApOiBQcm9taXNlPEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8TWVzc2FnZVR5cGUuU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnQ+PiA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50LCB7IHNjcmVlbk5hbWUsIHBhZ2VJZCB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgdG8gc2VuZCBhIHRlbGVtZXRyeSBjdXN0b20gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NyZWVuTmFtZSBTY3JlZW4gbmFtZSBvZiB0aGUgcGFnZS5cbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSBtZXNzYWdlIGlzIHNlbnQuXG4gICAgICovXG4gICAgc2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50ID0gYXN5bmMgKFxuICAgICAgICBzY3JlZW5OYW1lOiBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRNZXNzYWdlWydkYXRhJ11bJ3NjcmVlbk5hbWUnXSxcbiAgICAgICAgZXZlbnROYW1lOiBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRNZXNzYWdlWydkYXRhJ11bJ2V2ZW50TmFtZSddLFxuICAgICk6IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxNZXNzYWdlVHlwZS5TZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnQ+PiA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlDdXN0b21FdmVudCwgeyBzY3JlZW5OYW1lLCBldmVudE5hbWUgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgb3BlbmVkIHBhZ2UgdG8gdGVsZW1ldHJ5IHRyYWNraW5nLlxuICAgICAqXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHBhZ2UgSUQuXG4gICAgICovXG4gICAgYWRkVGVsZW1ldHJ5T3BlbmVkUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZShNZXNzYWdlVHlwZS5BZGRUZWxlbWV0cnlPcGVuZWRQYWdlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBvcGVuZWQgcGFnZSBmcm9tIHRlbGVtZXRyeSB0cmFja2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlSWQgUGFnZSBJRCB0byByZW1vdmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgdGhlIG1lc3NhZ2UgaXMgc2VudC5cbiAgICAgKi9cbiAgICByZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlID0gYXN5bmMgKHBhZ2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlKE1lc3NhZ2VUeXBlLlJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2UsIHsgcGFnZUlkIH0pO1xuICAgIH07XG59XG5cbmNvbnN0IG1lc3NlbmdlciA9IG5ldyBNZXNzZW5nZXIoKTtcblxuZXhwb3J0IHsgbWVzc2VuZ2VyLCBNZXNzZW5nZXIgfTtcbiIsIi8qIGh0dHA6Ly9uYW5vYmFyLm1pY3JvbnViZS5jb20vICB8fCAgaHR0cHM6Ly9naXRodWIuY29tL2phY29ib3J1cy9uYW5vYmFyLyAgICBNSVQgTElDRU5TRSAqL1xuKGZ1bmN0aW9uIChyb290KSB7XG4gICd1c2Ugc3RyaWN0J1xuICAvLyBjb250YWluZXIgc3R5bGVzXG4gIHZhciBjc3MgPSAnLm5hbm9iYXJ7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O3otaW5kZXg6OTk5OTt0b3A6MH0uYmFye3dpZHRoOjA7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjpoZWlnaHQgLjNzO2JhY2tncm91bmQ6IzAwMH0nXG5cbiAgLy8gYWRkIHJlcXVpcmVkIGNzcyBpbiBoZWFkIGRpdlxuICBmdW5jdGlvbiBhZGRDc3MgKCkge1xuICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbm9iYXJjc3MnKVxuXG4gICAgLy8gY2hlY2sgd2hldGhlciBzdHlsZSB0YWcgaXMgYWxyZWFkeSBpbnNlcnRlZFxuICAgIGlmIChzID09PSBudWxsKSB7XG4gICAgICBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgICAgcy50eXBlID0gJ3RleHQvY3NzJ1xuICAgICAgcy5pZCA9ICduYW5vYmFyY3NzJ1xuICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocywgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKVxuICAgICAgLy8gdGhlIHdvcmxkXG4gICAgICBpZiAoIXMuc3R5bGVTaGVldCkgcmV0dXJuIHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgICAgIC8vIElFXG4gICAgICBzLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkgZWwuY2xhc3NMaXN0LmFkZChjbHMpXG4gICAgZWxzZSBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xzXG4gIH1cblxuICAvLyBjcmVhdGUgYSBwcm9ncmVzcyBiYXJcbiAgLy8gdGhpcyB3aWxsIGJlIGRlc3Ryb3llZCBhZnRlciByZWFjaGluZyAxMDAlIHByb2dyZXNzXG4gIGZ1bmN0aW9uIGNyZWF0ZUJhciAocm0pIHtcbiAgICAvLyBjcmVhdGUgcHJvZ3Jlc3MgZWxlbWVudFxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICB3aWR0aCA9IDAsXG4gICAgICAgIGhlcmUgPSAwLFxuICAgICAgICBvbiA9IDAsXG4gICAgICAgIGJhciA9IHtcbiAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgZ286IGdvXG4gICAgICAgIH1cblxuICAgIGFkZENsYXNzKGVsLCAnYmFyJylcblxuICAgIC8vIGFuaW1hdGlvbiBsb29wXG4gICAgZnVuY3Rpb24gbW92ZSAoKSB7XG4gICAgICB2YXIgZGlzdCA9IHdpZHRoIC0gaGVyZVxuXG4gICAgICBpZiAoZGlzdCA8IDAuMSAmJiBkaXN0ID4gLTAuMSkge1xuICAgICAgICBwbGFjZShoZXJlKVxuICAgICAgICBvbiA9IDBcbiAgICAgICAgaWYgKHdpZHRoID09PSAxMDApIHtcbiAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBybShlbClcbiAgICAgICAgICB9LCAzMDApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlKHdpZHRoIC0gZGlzdCAvIDQpXG4gICAgICAgIHNldFRpbWVvdXQoZ28sIDE2KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBiYXIgd2lkdGhcbiAgICBmdW5jdGlvbiBwbGFjZSAobnVtKSB7XG4gICAgICB3aWR0aCA9IG51bVxuICAgICAgZWwuc3R5bGUud2lkdGggPSB3aWR0aCArICclJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvIChudW0pIHtcbiAgICAgIGlmIChudW0gPj0gMCkge1xuICAgICAgICBoZXJlID0gbnVtXG4gICAgICAgIGlmICghb24pIHtcbiAgICAgICAgICBvbiA9IDFcbiAgICAgICAgICBtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvbikge1xuICAgICAgICBtb3ZlKClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhclxuICB9XG5cbiAgZnVuY3Rpb24gTmFub2JhciAob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9XG4gICAgLy8gc2V0IG9wdGlvbnNcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgYXBwbHlHbyxcbiAgICAgICAgbmFub2JhciA9IHtcbiAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgZ286IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAvLyBleHBhbmQgYmFyXG4gICAgICAgICAgICBhcHBseUdvKHApXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IGJhciB3aGVuIHByb2dyZXNzIHJlYWNoZXMgMTAwJVxuICAgICAgICAgICAgaWYgKHAgPT09IDEwMCkge1xuICAgICAgICAgICAgICBpbml0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vIHJlbW92ZSBlbGVtZW50IGZyb20gbmFub2JhciBjb250YWluZXJcbiAgICBmdW5jdGlvbiBybSAoY2hpbGQpIHtcbiAgICAgIGVsLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhbmQgaW5zZXJ0IHByb2dyZXNzIHZhciBpbiBuYW5vYmFyIGNvbnRhaW5lclxuICAgIGZ1bmN0aW9uIGluaXQgKCkge1xuICAgICAgdmFyIGJhciA9IGNyZWF0ZUJhcihybSlcbiAgICAgIGVsLmFwcGVuZENoaWxkKGJhci5lbClcbiAgICAgIGFwcGx5R28gPSBiYXIuZ29cbiAgICB9XG5cbiAgICBhZGRDc3MoKVxuXG4gICAgYWRkQ2xhc3MoZWwsICduYW5vYmFyJylcbiAgICBpZiAob3B0cy5pZCkgZWwuaWQgPSBvcHRzLmlkXG4gICAgaWYgKG9wdHMuY2xhc3NuYW1lKSBhZGRDbGFzcyhlbCwgb3B0cy5jbGFzc25hbWUpXG5cbiAgICAvLyBpbnNlcnQgY29udGFpbmVyXG4gICAgaWYgKG9wdHMudGFyZ2V0KSB7XG4gICAgICAvLyBpbnNpZGUgYSBkaXZcbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgb3B0cy50YXJnZXQuaW5zZXJ0QmVmb3JlKGVsLCBvcHRzLnRhcmdldC5maXJzdENoaWxkKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvbiB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChlbClcbiAgICB9XG5cbiAgICBpbml0KClcbiAgICByZXR1cm4gbmFub2JhclxuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBOYW5vYmFyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gTmFub2JhciB9KVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3QuTmFub2JhciA9IE5hbm9iYXJcbiAgfVxufSh0aGlzKSlcbiIsIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBsaXN0LCAkbGVuZ3RoKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/ICRsZW5ndGggOiBsZW5ndGhPZkFycmF5TGlrZShsaXN0KTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBDb25zdHJ1Y3RvcihsZW5ndGgpO1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtY2hhbmdlLWFycmF5LWJ5LWNvcHkvI3NlYy1hcnJheS5wcm90b3R5cGUudG9SZXZlcnNlZFxuLy8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLWNoYW5nZS1hcnJheS1ieS1jb3B5LyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS50b1JldmVyc2VkXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBDKSB7XG4gIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIEEgPSBuZXcgQyhsZW4pO1xuICB2YXIgayA9IDA7XG4gIGZvciAoOyBrIDwgbGVuOyBrKyspIEFba10gPSBPW2xlbiAtIGsgLSAxXTtcbiAgcmV0dXJuIEE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEVOVklST05NRU5UID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRU5WSVJPTk1FTlQgPT09ICdOT0RFJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEJ1biwgRGVubyAtLSBkZXRlY3Rpb24gKi9cbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciB1c2VyQWdlbnRTdGFydHNXaXRoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gdXNlckFnZW50LnNsaWNlKDAsIHN0cmluZy5sZW5ndGgpID09PSBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdCdW4vJykpIHJldHVybiAnQlVOJztcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0Nsb3VkZmxhcmUtV29ya2VycycpKSByZXR1cm4gJ0NMT1VERkxBUkUnO1xuICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnRGVuby8nKSkgcmV0dXJuICdERU5PJztcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ05vZGUuanMvJykpIHJldHVybiAnTk9ERSc7XG4gIGlmIChnbG9iYWxUaGlzLkJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZycpIHJldHVybiAnQlVOJztcbiAgaWYgKGdsb2JhbFRoaXMuRGVubyAmJiB0eXBlb2YgRGVuby52ZXJzaW9uID09ICdvYmplY3QnKSByZXR1cm4gJ0RFTk8nO1xuICBpZiAoY2xhc3NvZihnbG9iYWxUaGlzLnByb2Nlc3MpID09PSAncHJvY2VzcycpIHJldHVybiAnTk9ERSc7XG4gIGlmIChnbG9iYWxUaGlzLndpbmRvdyAmJiBnbG9iYWxUaGlzLmRvY3VtZW50KSByZXR1cm4gJ0JST1dTRVInO1xuICByZXR1cm4gJ1JFU1QnO1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBDSFJPTUVfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlJyk7XG5cbi8vIENocm9tZSA4MC04MiBoYXMgYSBjcml0aWNhbCBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwNDk5ODJcbnZhciBDSFJPTUVfQlVHID0gIUlTX05PREUgJiYgQ0hST01FX1ZFUlNJT04gPiA3OSAmJiBDSFJPTUVfVkVSU0lPTiA8IDgzO1xudmFyIEZPUkNFRCA9IENIUk9NRV9CVUcgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBsZW5ndGgsIGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBBcnJheUJ1ZmZlclZpZXdDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLmF0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5hdFxuZXhwb3J0VHlwZWRBcnJheU1ldGhvZCgnYXQnLCBmdW5jdGlvbiBhdChpbmRleCkge1xuICB2YXIgTyA9IGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciByZWxhdGl2ZUluZGV4ID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHZhciBrID0gcmVsYXRpdmVJbmRleCA+PSAwID8gcmVsYXRpdmVJbmRleCA6IGxlbiArIHJlbGF0aXZlSW5kZXg7XG4gIHJldHVybiAoayA8IDAgfHwgayA+PSBsZW4pID8gdW5kZWZpbmVkIDogT1trXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFycmF5VG9SZXZlcnNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS10by1yZXZlcnNlZCcpO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yID0gQXJyYXlCdWZmZXJWaWV3Q29yZS5nZXRUeXBlZEFycmF5Q29uc3RydWN0b3I7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnRvUmV2ZXJzZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnRvcmV2ZXJzZWRcbmV4cG9ydFR5cGVkQXJyYXlNZXRob2QoJ3RvUmV2ZXJzZWQnLCBmdW5jdGlvbiB0b1JldmVyc2VkKCkge1xuICByZXR1cm4gYXJyYXlUb1JldmVyc2VkKGFUeXBlZEFycmF5KHRoaXMpLCBnZXRUeXBlZEFycmF5Q29uc3RydWN0b3IodGhpcykpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhcnJheUZyb21Db25zdHJ1Y3RvckFuZExpc3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbS1jb25zdHJ1Y3Rvci1hbmQtbGlzdCcpO1xuXG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEFycmF5QnVmZmVyVmlld0NvcmUuZ2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yO1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgc29ydCA9IHVuY3VycnlUaGlzKEFycmF5QnVmZmVyVmlld0NvcmUuVHlwZWRBcnJheVByb3RvdHlwZS5zb3J0KTtcblxuLy8gYCVUeXBlZEFycmF5JS5wcm90b3R5cGUudG9Tb3J0ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0ldHlwZWRhcnJheSUucHJvdG90eXBlLnRvc29ydGVkXG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCd0b1NvcnRlZCcsIGZ1bmN0aW9uIHRvU29ydGVkKGNvbXBhcmVGbikge1xuICBpZiAoY29tcGFyZUZuICE9PSB1bmRlZmluZWQpIGFDYWxsYWJsZShjb21wYXJlRm4pO1xuICB2YXIgTyA9IGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgQSA9IGFycmF5RnJvbUNvbnN0cnVjdG9yQW5kTGlzdChnZXRUeXBlZEFycmF5Q29uc3RydWN0b3IoTyksIE8pO1xuICByZXR1cm4gc29ydChBLCBjb21wYXJlRm4pO1xufSk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBlcnJvciBoYXMgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0gZXJyb3IgRXJyb3Igb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgZXJyb3IgaGFzIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGlzRXJyb3JXaXRoTWVzc2FnZShlcnJvcikge1xuICAgIHJldHVybiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBlcnJvciAhPT0gbnVsbFxuICAgICAgICAmJiAnbWVzc2FnZScgaW4gZXJyb3JcbiAgICAgICAgJiYgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKTtcbn1cbi8qKlxuICogQ29udmVydHMgZXJyb3IgdG8gdGhlIGVycm9yIHdpdGggYSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSBtYXliZUVycm9yIFBvc3NpYmxlIGVycm9yLlxuICpcbiAqIEByZXR1cm5zIEVycm9yIHdpdGggYSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiB0b0Vycm9yV2l0aE1lc3NhZ2UobWF5YmVFcnJvcikge1xuICAgIGlmIChpc0Vycm9yV2l0aE1lc3NhZ2UobWF5YmVFcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIG1heWJlRXJyb3I7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkobWF5YmVFcnJvcikpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIC8vIGZhbGxiYWNrIGluIGNhc2UgdGhlcmUncyBhbiBlcnJvciBzdHJpbmdpZnlpbmcgdGhlIG1heWJlRXJyb3JcbiAgICAgICAgLy8gbGlrZSB3aXRoIGNpcmN1bGFyIHJlZmVyZW5jZXMsIGZvciBleGFtcGxlLlxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFN0cmluZyhtYXliZUVycm9yKSk7XG4gICAgfVxufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBlcnJvciBvYmplY3QgdG8gYW4gZXJyb3Igd2l0aCBhIG1lc3NhZ2UuIFRoaXMgbWV0aG9kIG1pZ2h0IGJlIGhlbHBmdWwgdG8gaGFuZGxlIHRocm93biBlcnJvcnMuXG4gKlxuICogQHBhcmFtIGVycm9yIEVycm9yIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBNZXNzYWdlIG9mIHRoZSBlcnJvci5cbiAqL1xuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSB7XG4gICAgcmV0dXJuIHRvRXJyb3JXaXRoTWVzc2FnZShlcnJvcikubWVzc2FnZTtcbn1cblxuLyoqXG4gKiBQYWRzIGEgbnVtYmVyIHdpdGggbGVhZGluZyB6ZXJvcy5cbiAqXG4gKiBAcGFyYW0gbnVtIFRoZSBudW1iZXIgdG8gcGFkLlxuICogQHBhcmFtIHNpemUgVGhlIG51bWJlciBvZiBkaWdpdHMgdG8gcGFkIHRvLlxuICpcbiAqIEByZXR1cm5zIFRoZSBwYWRkZWQgbnVtYmVyLlxuICovXG5jb25zdCBwYWQgPSAobnVtLCBzaXplID0gMikgPT4ge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydChzaXplLCAnMCcpO1xufTtcbi8qKlxuICogRm9ybWF0cyBhIGRhdGUgaW50byBhbiBJU08gODYwMS1saWtlIHN0cmluZyB3aXRoIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8bnVtYmVyfSBkYXRlIFRoZSBkYXRlIG9iamVjdCBvciB0aW1lc3RhbXAgdG8gZm9ybWF0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcuXG4gKi9cbmNvbnN0IGZvcm1hdFRpbWUgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGQgPSAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpO1xuICAgIGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBwYWQoZC5nZXRNb250aCgpICsgMSk7IC8vIE1vbnRocyBhcmUgMC1iYXNlZFxuICAgIGNvbnN0IGRheSA9IHBhZChkLmdldERhdGUoKSk7XG4gICAgY29uc3QgaG91ciA9IHBhZChkLmdldEhvdXJzKCkpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IHBhZChkLmdldE1pbnV0ZXMoKSk7XG4gICAgY29uc3Qgc2Vjb25kID0gcGFkKGQuZ2V0U2Vjb25kcygpKTtcbiAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhZChkLmdldE1pbGxpc2Vjb25kcygpLCAzKTsgLy8gTWlsbGlzZWNvbmRzIGFyZSAzIGRpZ2l0c1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9OiR7bWlsbGlzZWNvbmR9YDtcbn07XG5cbi8qKlxuICogU3RyaW5nIHByZXNlbnRhdGlvbiBvZiBsb2cgbGV2ZWxzLCBmb3IgY29udmVuaWVudCB1c2VycyB1c2FnZS5cbiAqIE9yZGVyZWQgaW4gdGhlIHNhbWUgd2F5IGFzIExvZ0xldmVsTnVtZXJpYy5cbiAqXG4gKiBGaXJzdCB0aHJlZSBsZXZlbHMgd2lsbCBiZSBzaG93biB0byB1c2VycywgYW5kIHRoZSBsYXN0IHR3byBhcmUgZm9yIGRldmVsb3BlcnMuXG4gKi9cbnZhciBMb2dMZXZlbDtcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZXJyb3JzLlxuICAgICAqL1xuICAgIExvZ0xldmVsW1wiRXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgLyoqXG4gICAgICogRm9yIG5vdCBjcml0aWNhbCBlcnJvcnMuXG4gICAgICovXG4gICAgTG9nTGV2ZWxbXCJXYXJuXCJdID0gXCJ3YXJuXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGltcG9ydGFudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBVc2UgZm9yIGdlbmVyYWwgb3BlcmF0aW9uYWwgbWVzc2FnZXMuXG4gICAgICovXG4gICAgTG9nTGV2ZWxbXCJJbmZvXCJdID0gXCJpbmZvXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGRlYnVnZ2luZyBwdXJwb3NlcywgZS5nLiBJbnNpZGUgY29uZGl0aW9ucywgbG9vcHMgb3Igc29tZSBlZGdlIGNhc2VzLlxuICAgICAqL1xuICAgIExvZ0xldmVsW1wiRGVidWdcIl0gPSBcImRlYnVnXCI7XG4gICAgLyoqXG4gICAgICogRm9yIHVsdHJhLWRldGFpbGVkLCBzdGVwLWJ5LXN0ZXAgdHJhY2VzIChsaWtlIHN0YWNrIHRyYWNlcyBvciBmbG93IHRyYWNraW5nKS5cbiAgICAgKi9cbiAgICBMb2dMZXZlbFtcIlZlcmJvc2VcIl0gPSBcInZlcmJvc2VcIjtcbn0pKExvZ0xldmVsIHx8IChMb2dMZXZlbCA9IHt9KSk7XG4vKipcbiAqIExvZyBsZXZlbHMgbWFwLCB3aGljaCBtYXBzIG51bWJlciBsZXZlbCB0byBzdHJpbmcgbGV2ZWwuXG4gKiBPcmRlcmVkIGluIHRoZSBzYW1lIHdheSBhcyBMb2dMZXZlbE51bWVyaWMuXG4gKi9cbmNvbnN0IGxldmVsTWFwTnVtVG9TdHJpbmcgPSB7XG4gICAgWzEgLyogTG9nTGV2ZWxOdW1lcmljLkVycm9yICovXTogTG9nTGV2ZWwuRXJyb3IsXG4gICAgWzIgLyogTG9nTGV2ZWxOdW1lcmljLldhcm4gKi9dOiBMb2dMZXZlbC5XYXJuLFxuICAgIFszIC8qIExvZ0xldmVsTnVtZXJpYy5JbmZvICovXTogTG9nTGV2ZWwuSW5mbyxcbiAgICBbNCAvKiBMb2dMZXZlbE51bWVyaWMuRGVidWcgKi9dOiBMb2dMZXZlbC5EZWJ1ZyxcbiAgICBbNSAvKiBMb2dMZXZlbE51bWVyaWMuVmVyYm9zZSAqL106IExvZ0xldmVsLlZlcmJvc2UsXG59O1xuLyoqXG4gKiBMb2cgbGV2ZWxzIG1hcCwgd2hpY2ggbWFwcyBzdHJpbmcgbGV2ZWwgdG8gbnVtYmVyIGxldmVsLlxuICovXG5jb25zdCBsZXZlbE1hcFN0cmluZ1RvTnVtID0gT2JqZWN0LmVudHJpZXMobGV2ZWxNYXBOdW1Ub1N0cmluZylcbiAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIC8vIEhlcmUsIGtleSBpcyBvcmlnaW5hbGx5IGEgc3RyaW5nIHNpbmNlIE9iamVjdC5lbnRyaWVzKCkgcmV0dXJucyBbc3RyaW5nLCBzdHJpbmddW10uXG4gICAgLy8gV2UgbmVlZCB0byBjYXN0IHRoZSBrZXkgdG8gTG9nTGV2ZWxOdW1lcmljIGNvcnJlY3RseSB3aXRob3V0IGNhdXNpbmcgdHlwZSBtaXNtYXRjaGVzLlxuICAgIGNvbnN0IG51bWVyaWNLZXkgPSBOdW1iZXIoa2V5KTtcbiAgICBpZiAoIU51bWJlci5pc05hTihudW1lcmljS2V5KSkge1xuICAgICAgICBhY2NbdmFsdWVdID0gbnVtZXJpY0tleTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbi8qKlxuICogTWV0aG9kcyBzdXBwb3J0ZWQgYnkgY29uc29sZS4gVXNlZCB0byBtYW5hZ2UgbGV2ZWxzLlxuICogT3JkZXJlZCBpbiB0aGUgc2FtZSB3YXkgYXMgTG9nTGV2ZWxOdW1lcmljLlxuICovXG52YXIgTG9nTWV0aG9kO1xuKGZ1bmN0aW9uIChMb2dNZXRob2QpIHtcbiAgICBMb2dNZXRob2RbXCJFcnJvclwiXSA9IFwiZXJyb3JcIjtcbiAgICBMb2dNZXRob2RbXCJXYXJuXCJdID0gXCJ3YXJuXCI7XG4gICAgTG9nTWV0aG9kW1wiSW5mb1wiXSA9IFwiaW5mb1wiO1xuICAgIExvZ01ldGhvZFtcIkRlYnVnXCJdID0gXCJkZWJ1Z1wiO1xuICAgIExvZ01ldGhvZFtcIlRyYWNlXCJdID0gXCJ0cmFjZVwiO1xufSkoTG9nTWV0aG9kIHx8IChMb2dNZXRob2QgPSB7fSkpO1xuLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHdpdGggbG9nIGxldmVscy5cbiAqL1xuY2xhc3MgTG9nZ2VyIHtcbiAgICBjdXJyZW50TGV2ZWxWYWx1ZSA9IDMgLyogTG9nTGV2ZWxOdW1lcmljLkluZm8gKi87XG4gICAgd3JpdGVyO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdyaXRlciBXcml0ZXIgb2JqZWN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdyaXRlciA9IGNvbnNvbGUpIHtcbiAgICAgICAgdGhpcy53cml0ZXIgPSB3cml0ZXI7XG4gICAgICAgIC8vIGJpbmQgdGhlIGxvZ2dpbmcgbWV0aG9kcyB0byBhdm9pZCBsb3NpbmcgY29udGV4dFxuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLndhcm4gPSB0aGlzLndhcm4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbmZvID0gdGhpcy5pbmZvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSB0aGlzLmRlYnVnLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhY2UgPSB0aGlzLnRyYWNlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW50IGVycm9yIG1lc3NhZ2VzLlxuICAgICAqIFVzZSB3aGVuIHNvbWV0aGluZyB3ZW50IHdyb25nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3MgUHJpbnRlZCBhcmd1bWVudHMuXG4gICAgICovXG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLnByaW50KDEgLyogTG9nTGV2ZWxOdW1lcmljLkVycm9yICovLCBMb2dNZXRob2QuRXJyb3IsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmludCB3YXJuIG1lc3NhZ2VzLlxuICAgICAqIFVzZSB3aGVuIFNvbWV0aGluZyBtaWdodCBnbyB3cm9uZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzIFByaW50ZWQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIHdhcm4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnByaW50KDIgLyogTG9nTGV2ZWxOdW1lcmljLldhcm4gKi8sIExvZ01ldGhvZC5XYXJuLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJpbnQgbWVzc2FnZXMgeW91IHdhbnQgdG8gZGlzY2xvc2UgdG8gdXNlcnMuXG4gICAgICogVXNlIGZvciBnZW5lcmFsIG9wZXJhdGlvbmFsIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3MgUHJpbnRlZCBhcmd1bWVudHMuXG4gICAgICovXG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucHJpbnQoMyAvKiBMb2dMZXZlbE51bWVyaWMuSW5mbyAqLywgTG9nTWV0aG9kLkluZm8sIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmludCBkZWJ1ZyBtZXNzYWdlcy4gVXN1YWxseSB1c2VkIGZvciB0ZWNobmljYWwgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJncyBQcmludGVkIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucHJpbnQoNCAvKiBMb2dMZXZlbE51bWVyaWMuRGVidWcgKi8sIExvZ01ldGhvZC5EZWJ1ZywgYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaW50IHRyYWNlIG1lc3NhZ2VzLlxuICAgICAqIFVsdHJhLWRldGFpbGVkLCBzdGVwLWJ5LXN0ZXAgdHJhY2VzIChsaWtlIHN0YWNrIHRyYWNlcyBvciBmbG93IHRyYWNraW5nKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzIFByaW50ZWQgYXJndW1lbnRzLlxuICAgICAqL1xuICAgIHRyYWNlKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5wcmludCg1IC8qIExvZ0xldmVsTnVtZXJpYy5WZXJib3NlICovLCBMb2dNZXRob2QuVHJhY2UsIGFyZ3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIGxvZyBsZXZlbC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIExvZ2dlciBsZXZlbC5cbiAgICAgKi9cbiAgICBnZXQgY3VycmVudExldmVsKCkge1xuICAgICAgICByZXR1cm4gbGV2ZWxNYXBOdW1Ub1N0cmluZ1t0aGlzLmN1cnJlbnRMZXZlbFZhbHVlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciBsb2cgbGV2ZWwuIFdpdGggdGhpcyBtZXRob2QgbG9nIGxldmVsIGNhbiBiZSB1cGRhdGVkIGR5bmFtaWNhbGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvZ0xldmVsIExvZ2dlciBsZXZlbC5cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgbG9nIGxldmVsIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgc2V0IGN1cnJlbnRMZXZlbChsb2dMZXZlbCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsTWFwU3RyaW5nVG9OdW1bbG9nTGV2ZWxdO1xuICAgICAgICBpZiAobGV2ZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMb2dnZXIgc3VwcG9ydHMgb25seSB0aGUgZm9sbG93aW5nIGxldmVsczogJHtbT2JqZWN0LnZhbHVlcyhMb2dMZXZlbCkuam9pbignLCAnKV19YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxWYWx1ZSA9IGxldmVsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBlcnJvciB0byBzdHJpbmcsIGFuZCBhZGRzIHN0YWNrIHRyYWNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yIEVycm9yIHRvIHByaW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgRXJyb3IgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZXJyb3JUb1N0cmluZyhlcnJvcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZ2V0RXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGAke21lc3NhZ2V9XFxuU3RhY2sgdHJhY2U6XFxuJHtlcnJvci5zdGFja31gO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmludHMgZXJyb3IgbWVzc2FnZSB3aXRoIHN0YWNrIHRyYWNlLlxuICAgICAqIEl0IHByaW50cyB0aGUgbWVzc2FnZSB3aXRoIHRoZSBzdGFjayB0cmFjZSBpbiBhIGNvbGxhcHNlZCBncm91cC5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLCBhcyBpdCBhbGxvd3MgdG8gc2VlIHRoZSBzdGFjayB0cmFjZVxuICAgICAqIHdpdGhvdXQgY2x1dHRlcmluZyB0aGUgY29uc29sZSB3aXRoIHRvbyBtYW55IG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1hdHRlZFRpbWUgRm9ybWF0dGVkIHRpbWUuXG4gICAgICogQHBhcmFtIGZvcm1hdHRlZEFyZ3MgRm9ybWF0dGVkIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBwcmludFdpdGhTdGFja1RyYWNlKGZvcm1hdHRlZFRpbWUsIGZvcm1hdHRlZEFyZ3MpIHtcbiAgICAgICAgLy8gSWYgZ3JvdXBpbmcgaXMgbm90IHN1cHBvcnRlZCwgcHJpbnQganVzdCBleHBhbmRlZCB0cmFjZSwgYnV0IHRoaXNcbiAgICAgICAgLy8gbGVhZHMgdG8gYSBsb3Qgb2YgZGlydHkgbG9ncyBpbiB0aGUgY29uc29sZSwgc2luY2UgdGhlIHN0YWNrIHRyYWNlXG4gICAgICAgIC8vIHdpbGwgYmUgcHJpbnRlZCBmb3IgZXZlcnkgbWVzc2FnZS5cbiAgICAgICAgaWYgKCF0aGlzLndyaXRlci5ncm91cENvbGxhcHNlZCB8fCAhdGhpcy53cml0ZXIuZ3JvdXBFbmQpIHtcbiAgICAgICAgICAgIC8vIFByaW50IGV4cGFuZGVkIHRyYWNlXG4gICAgICAgICAgICB0aGlzLndyaXRlci50cmFjZShmb3JtYXR0ZWRUaW1lLCAuLi5mb3JtYXR0ZWRBcmdzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmludCBjb2xsYXBzZWQgdHJhY2UgdG8gbWFrZSBsb2dzIG1vcmUgcmVhZGFibGUgYW5kIGFjY2VzcyB0byBzdGFja1xuICAgICAgICAvLyB0cmFjZSBieSBjbGlja2luZyBvbiB0aGUgZ3JvdXAuXG4gICAgICAgIHRoaXMud3JpdGVyLmdyb3VwQ29sbGFwc2VkKGZvcm1hdHRlZFRpbWUsIC4uLmZvcm1hdHRlZEFyZ3MpO1xuICAgICAgICB0aGlzLndyaXRlci50cmFjZSgpO1xuICAgICAgICB0aGlzLndyaXRlci5ncm91cEVuZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIG92ZXIgbG9nIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGV2ZWwgTG9nZ2VyIGxldmVsLlxuICAgICAqIEBwYXJhbSBtZXRob2QgTG9nZ2VyIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gYXJncyBQcmludGVkIGFyZ3VtZW50cy5cbiAgICAgKi9cbiAgICBwcmludChsZXZlbCwgbWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIC8vIFNraXAgd3JpdGluZyBpZiB0aGUgYmFzaWMgY29uZGl0aW9ucyBhcmUgbm90IG1ldC5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsVmFsdWUgPCBsZXZlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvIG5vdCBwcmludCBpZiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZC5cbiAgICAgICAgaWYgKCFhcmdzIHx8IGFyZ3MubGVuZ3RoID09PSAwIHx8ICFhcmdzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQXJncyA9IGFyZ3MubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTG9nZ2VyLmVycm9yVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7Zm9ybWF0VGltZShuZXcgRGF0ZSgpKX06YDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGN1cnJlbnQgbG9nIGxldmVsIGlzIERlYnVnIG9yIFZlcmJvc2UsIHByaW50IGFsbCBjaGFubmVscyB3aXRoIHN0YWNrXG4gICAgICAgICAqIHRyYWNlIHZpYSB1c2luZyB3cml0ZXIudHJhY2UgbWV0aG9kIHRvIGhlbHAgaWRlbnRpZnkgdGhlIGxvY2F0aW9uIG9mIHRoZVxuICAgICAgICAgKiBsb2cuXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4Y2VwdGlvbiBpcyBFcnJvciBtZXRob2QsIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBjb250YWlucyBidWlsZC1pblxuICAgICAgICAgKiBzdGFjayB0cmFjZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbFZhbHVlID49IGxldmVsTWFwU3RyaW5nVG9OdW1bTG9nTGV2ZWwuRGVidWddXG4gICAgICAgICAgICAmJiBtZXRob2QgIT09IExvZ01ldGhvZC5FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wcmludFdpdGhTdGFja1RyYWNlKGZvcm1hdHRlZFRpbWUsIGZvcm1hdHRlZEFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBqdXN0IHByaW50IHdpdGggcmVxdWVzdGVkIG1ldGhvZCBvZiB3cml0ZXIuXG4gICAgICAgIHRoaXMud3JpdGVyW21ldGhvZF0oZm9ybWF0dGVkVGltZSwgLi4uZm9ybWF0dGVkQXJncyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nTWV0aG9kLCBMb2dnZXIsIGdldEVycm9yTWVzc2FnZSB9O1xuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2lzLXdoYXQnO1xuXG5mdW5jdGlvbiBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgb3JpZ2luYWxPYmplY3QsIGluY2x1ZGVOb25lbnVtZXJhYmxlKSB7XG4gIGNvbnN0IHByb3BUeXBlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvcmlnaW5hbE9iamVjdCwga2V5KSA/IFwiZW51bWVyYWJsZVwiIDogXCJub25lbnVtZXJhYmxlXCI7XG4gIGlmIChwcm9wVHlwZSA9PT0gXCJlbnVtZXJhYmxlXCIpXG4gICAgY2Fycnlba2V5XSA9IG5ld1ZhbDtcbiAgaWYgKGluY2x1ZGVOb25lbnVtZXJhYmxlICYmIHByb3BUeXBlID09PSBcIm5vbmVudW1lcmFibGVcIikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYXJyeSwga2V5LCB7XG4gICAgICB2YWx1ZTogbmV3VmFsLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBjb3B5KHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm1hcCgoaXRlbSkgPT4gY29weShpdGVtLCBvcHRpb25zKSk7XG4gIH1cbiAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgY29uc3Qgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KTtcbiAgcmV0dXJuIFsuLi5wcm9wcywgLi4uc3ltYm9sc10ucmVkdWNlKChjYXJyeSwga2V5KSA9PiB7XG4gICAgaWYgKGlzQXJyYXkob3B0aW9ucy5wcm9wcykgJiYgIW9wdGlvbnMucHJvcHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgIH1cbiAgICBjb25zdCB2YWwgPSB0YXJnZXRba2V5XTtcbiAgICBjb25zdCBuZXdWYWwgPSBjb3B5KHZhbCwgb3B0aW9ucyk7XG4gICAgYXNzaWduUHJvcChjYXJyeSwga2V5LCBuZXdWYWwsIHRhcmdldCwgb3B0aW9ucy5ub25lbnVtZXJhYmxlKTtcbiAgICByZXR1cm4gY2Fycnk7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IHsgY29weSB9O1xuIiwiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodGhpcy5yZXF1ZXN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gICAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbilcbiAgICAgICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICAgIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gd3JhcCh2YWx1ZSkge1xuICAgIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAgIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KVxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gICAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gICAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICAgIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KTtcbiAgICBpZiAodXBncmFkZSkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHVwZ3JhZGUod3JhcChyZXF1ZXN0LnJlc3VsdCksIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbiksIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibG9ja2VkKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT4gYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgIH1cbiAgICBvcGVuUHJvbWlzZVxuICAgICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICAgIGlmIChibG9ja2luZykge1xuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsIChldmVudCkgPT4gYmxvY2tpbmcoZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cbi8qKlxuICogRGVsZXRlIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZURCKG5hbWUsIHsgYmxvY2tlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKG5hbWUpO1xuICAgIGlmIChibG9ja2VkKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT4gYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICBldmVudC5vbGRWZXJzaW9uLCBldmVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcChyZXF1ZXN0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkge1xuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICAgIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpXG4gICAgICAgIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcbiAgICBjb25zdCB0YXJnZXRGdW5jTmFtZSA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sICcnKTtcbiAgICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICAgIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuICAgIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKHN0b3JlTmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0eC5zdG9yZTtcbiAgICAgICAgaWYgKHVzZUluZGV4KVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmluZGV4KGFyZ3Muc2hpZnQoKSk7XG4gICAgICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgICAgIC8vIElmIGl0J3MgYSB3cml0ZSBvcGVyYXRpb24sIG11c3QgcmVqZWN0IGlmIHR4LmRvbmUgcmVqZWN0cy5cbiAgICAgICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgICAgICAvLyBNdXN0IGhhbmRsZSBib3RoIHByb21pc2VzIChubyB1bmhhbmRsZWQgcmVqZWN0aW9ucylcbiAgICAgICAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0YXJnZXRbdGFyZ2V0RnVuY05hbWVdKC4uLmFyZ3MpLFxuICAgICAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgICBdKSlbMF07XG4gICAgfTtcbiAgICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICAgIHJldHVybiBtZXRob2Q7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAgIC4uLm9sZFRyYXBzLFxuICAgIGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpID0+IGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSxcbiAgICBoYXM6ICh0YXJnZXQsIHByb3ApID0+ICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCksXG59KSk7XG5cbmNvbnN0IGFkdmFuY2VNZXRob2RQcm9wcyA9IFsnY29udGludWUnLCAnY29udGludWVQcmltYXJ5S2V5JywgJ2FkdmFuY2UnXTtcbmNvbnN0IG1ldGhvZE1hcCA9IHt9O1xuY29uc3QgYWR2YW5jZVJlc3VsdHMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgY3Vyc29ySXRlcmF0b3JUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICghYWR2YW5jZU1ldGhvZFByb3BzLmluY2x1ZGVzKHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgbGV0IGNhY2hlZEZ1bmMgPSBtZXRob2RNYXBbcHJvcF07XG4gICAgICAgIGlmICghY2FjaGVkRnVuYykge1xuICAgICAgICAgICAgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgYWR2YW5jZVJlc3VsdHMuc2V0KHRoaXMsIGl0dHJQcm94aWVkQ3Vyc29yVG9PcmlnaW5hbFByb3h5LmdldCh0aGlzKVtwcm9wXSguLi5hcmdzKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZWRGdW5jO1xuICAgIH0sXG59O1xuYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdGUoLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICBsZXQgY3Vyc29yID0gdGhpcztcbiAgICBpZiAoIShjdXJzb3IgaW5zdGFuY2VvZiBJREJDdXJzb3IpKSB7XG4gICAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5vcGVuQ3Vyc29yKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBpZiAoIWN1cnNvcilcbiAgICAgICAgcmV0dXJuO1xuICAgIGN1cnNvciA9IGN1cnNvcjtcbiAgICBjb25zdCBwcm94aWVkQ3Vyc29yID0gbmV3IFByb3h5KGN1cnNvciwgY3Vyc29ySXRlcmF0b3JUcmFwcyk7XG4gICAgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuc2V0KHByb3hpZWRDdXJzb3IsIGN1cnNvcik7XG4gICAgLy8gTWFwIHRoaXMgZG91YmxlLXByb3h5IGJhY2sgdG8gdGhlIG9yaWdpbmFsLCBzbyBvdGhlciBjdXJzb3IgbWV0aG9kcyB3b3JrLlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJveGllZEN1cnNvciwgdW53cmFwKGN1cnNvcikpO1xuICAgIHdoaWxlIChjdXJzb3IpIHtcbiAgICAgICAgeWllbGQgcHJveGllZEN1cnNvcjtcbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBhZHZhbmNpbmcgbWV0aG9kcyB3YXMgbm90IGNhbGxlZCwgY2FsbCBjb250aW51ZSgpLlxuICAgICAgICBjdXJzb3IgPSBhd2FpdCAoYWR2YW5jZVJlc3VsdHMuZ2V0KHByb3hpZWRDdXJzb3IpIHx8IGN1cnNvci5jb250aW51ZSgpKTtcbiAgICAgICAgYWR2YW5jZVJlc3VsdHMuZGVsZXRlKHByb3hpZWRDdXJzb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkge1xuICAgIHJldHVybiAoKHByb3AgPT09IFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmXG4gICAgICAgIGluc3RhbmNlT2ZBbnkodGFyZ2V0LCBbSURCSW5kZXgsIElEQk9iamVjdFN0b3JlLCBJREJDdXJzb3JdKSkgfHxcbiAgICAgICAgKHByb3AgPT09ICdpdGVyYXRlJyAmJiBpbnN0YW5jZU9mQW55KHRhcmdldCwgW0lEQkluZGV4LCBJREJPYmplY3RTdG9yZV0pKSk7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAgIC4uLm9sZFRyYXBzLFxuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmIChpc0l0ZXJhdG9yUHJvcCh0YXJnZXQsIHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdGU7XG4gICAgICAgIHJldHVybiBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBpc0l0ZXJhdG9yUHJvcCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59KSk7XG5cbmV4cG9ydCB7IGRlbGV0ZURCLCBvcGVuREIsIHVud3JhcCwgd3JhcCB9O1xuIiwiZnVuY3Rpb24gZ2V0VHlwZShwYXlsb2FkKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGF5bG9hZCkuc2xpY2UoOCwgLTEpO1xufVxuXG5mdW5jdGlvbiBpc0FueU9iamVjdChwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIk9iamVjdFwiO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiQXJyYXlcIjtcbn1cblxuZnVuY3Rpb24gaXNCbG9iKHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiQmxvYlwiO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4ocGF5bG9hZCkge1xuICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gXCJCb29sZWFuXCI7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIkRhdGVcIiAmJiAhaXNOYU4ocGF5bG9hZCk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlBcnJheShwYXlsb2FkKSB7XG4gIHJldHVybiBpc0FycmF5KHBheWxvYWQpICYmIHBheWxvYWQubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHBheWxvYWQpIHtcbiAgaWYgKGdldFR5cGUocGF5bG9hZCkgIT09IFwiT2JqZWN0XCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGF5bG9hZCk7XG4gIHJldHVybiAhIXByb3RvdHlwZSAmJiBwcm90b3R5cGUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3QocGF5bG9hZCkge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKSAmJiBPYmplY3Qua2V5cyhwYXlsb2FkKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcocGF5bG9hZCkge1xuICByZXR1cm4gcGF5bG9hZCA9PT0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIkVycm9yXCIgfHwgcGF5bG9hZCBpbnN0YW5jZW9mIEVycm9yO1xufVxuXG5mdW5jdGlvbiBpc0ZpbGUocGF5bG9hZCkge1xuICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gXCJGaWxlXCI7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbEFycmF5KHBheWxvYWQpIHtcbiAgcmV0dXJuIGlzQXJyYXkocGF5bG9hZCkgJiYgcGF5bG9hZC5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxPYmplY3QocGF5bG9hZCkge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKSAmJiBPYmplY3Qua2V5cyhwYXlsb2FkKS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIlN0cmluZ1wiO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxTdHJpbmcocGF5bG9hZCkge1xuICByZXR1cm4gaXNTdHJpbmcocGF5bG9hZCkgJiYgcGF5bG9hZCAhPT0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihwYXlsb2FkKSB7XG4gIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG5mdW5jdGlvbiBpc1R5cGUocGF5bG9hZCwgdHlwZSkge1xuICBpZiAoISh0eXBlIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlR5cGUgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHR5cGUsIFwicHJvdG90eXBlXCIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlR5cGUgaXMgbm90IGEgY2xhc3NcIik7XG4gIH1cbiAgY29uc3QgbmFtZSA9IHR5cGUubmFtZTtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IG5hbWUgfHwgQm9vbGVhbihwYXlsb2FkICYmIHBheWxvYWQuY29uc3RydWN0b3IgPT09IHR5cGUpO1xufVxuXG5mdW5jdGlvbiBpc0luc3RhbmNlT2YodmFsdWUsIGNsYXNzT3JDbGFzc05hbWUpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc09yQ2xhc3NOYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBwID0gdmFsdWU7IHA7IHAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocCkpIHtcbiAgICAgIGlmIChpc1R5cGUocCwgY2xhc3NPckNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBwID0gdmFsdWU7IHA7IHAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocCkpIHtcbiAgICAgIGlmIChnZXRUeXBlKHApID09PSBjbGFzc09yQ2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNNYXAocGF5bG9hZCkge1xuICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gXCJNYXBcIjtcbn1cblxuZnVuY3Rpb24gaXNOYU5WYWx1ZShwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIk51bWJlclwiICYmIGlzTmFOKHBheWxvYWQpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIk51bWJlclwiICYmICFpc05hTihwYXlsb2FkKTtcbn1cblxuZnVuY3Rpb24gaXNOZWdhdGl2ZU51bWJlcihwYXlsb2FkKSB7XG4gIHJldHVybiBpc051bWJlcihwYXlsb2FkKSAmJiBwYXlsb2FkIDwgMDtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiTnVsbFwiO1xufVxuXG5mdW5jdGlvbiBpc09uZU9mKGEsIGIsIGMsIGQsIGUpIHtcbiAgcmV0dXJuICh2YWx1ZSkgPT4gYSh2YWx1ZSkgfHwgYih2YWx1ZSkgfHwgISFjICYmIGModmFsdWUpIHx8ICEhZCAmJiBkKHZhbHVlKSB8fCAhIWUgJiYgZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiVW5kZWZpbmVkXCI7XG59XG5cbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gaXNPbmVPZihpc051bGwsIGlzVW5kZWZpbmVkKTtcblxuZnVuY3Rpb24gaXNPYmplY3QocGF5bG9hZCkge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHBheWxvYWQpIHtcbiAgcmV0dXJuIGlzQW55T2JqZWN0KHBheWxvYWQpO1xufVxuXG5mdW5jdGlvbiBpc1Bvc2l0aXZlTnVtYmVyKHBheWxvYWQpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHBheWxvYWQpICYmIHBheWxvYWQgPiAwO1xufVxuXG5mdW5jdGlvbiBpc1N5bWJvbChwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIlN5bWJvbFwiO1xufVxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShwYXlsb2FkKSB7XG4gIHJldHVybiBpc0Jvb2xlYW4ocGF5bG9hZCkgfHwgaXNOdWxsKHBheWxvYWQpIHx8IGlzVW5kZWZpbmVkKHBheWxvYWQpIHx8IGlzTnVtYmVyKHBheWxvYWQpIHx8IGlzU3RyaW5nKHBheWxvYWQpIHx8IGlzU3ltYm9sKHBheWxvYWQpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UocGF5bG9hZCkge1xuICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gXCJQcm9taXNlXCI7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiUmVnRXhwXCI7XG59XG5cbmZ1bmN0aW9uIGlzU2V0KHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiU2V0XCI7XG59XG5cbmZ1bmN0aW9uIGlzV2Vha01hcChwYXlsb2FkKSB7XG4gIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSBcIldlYWtNYXBcIjtcbn1cblxuZnVuY3Rpb24gaXNXZWFrU2V0KHBheWxvYWQpIHtcbiAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09IFwiV2Vha1NldFwiO1xufVxuXG5leHBvcnQgeyBnZXRUeXBlLCBpc0FueU9iamVjdCwgaXNBcnJheSwgaXNCbG9iLCBpc0Jvb2xlYW4sIGlzRGF0ZSwgaXNFbXB0eUFycmF5LCBpc0VtcHR5T2JqZWN0LCBpc0VtcHR5U3RyaW5nLCBpc0Vycm9yLCBpc0ZpbGUsIGlzRnVsbEFycmF5LCBpc0Z1bGxPYmplY3QsIGlzRnVsbFN0cmluZywgaXNGdW5jdGlvbiwgaXNJbnN0YW5jZU9mLCBpc01hcCwgaXNOYU5WYWx1ZSwgaXNOZWdhdGl2ZU51bWJlciwgaXNOdWxsLCBpc051bGxPclVuZGVmaW5lZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdExpa2UsIGlzT25lT2YsIGlzUGxhaW5PYmplY3QsIGlzUG9zaXRpdmVOdW1iZXIsIGlzUHJpbWl0aXZlLCBpc1Byb21pc2UsIGlzUmVnRXhwLCBpc1NldCwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc1R5cGUsIGlzVW5kZWZpbmVkLCBpc1dlYWtNYXAsIGlzV2Vha1NldCB9O1xuIiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWRPID0ge307IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnLi4vLi4vc3JjL2NvbW1vbi9pMThuJztcbmltcG9ydCB7IFBvc3RJbnN0YWxsIH0gZnJvbSAnLi4vLi4vc3JjL3BhZ2VzL3Bvc3QtaW5zdGFsbCc7XG5cbkkxOG4uaW5pdCgpO1xuUG9zdEluc3RhbGwuaW5pdCgpO1xuIl0sIm5hbWVzIjpbIkJyb3dzZXJTdG9yYWdlIiwic2V0Iiwia2V5IiwidmFsdWUiLCJzdG9yYWdlIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJyZW1vdmUiLCJzZXRNdWx0aXBsZSIsImUiLCJyZW1vdmVNdWx0aXBsZSIsImtleXMiLCJlbnRyaWVzIiwiT2JqZWN0IiwiaGFzIiwiY2xlYXIiLCJjb25zdHJ1Y3RvciIsIm5hbm9pZCIsIlN1cGVySlNPTiIsImRlbGV0ZURCIiwib3BlbkRCIiwiSURCU3RvcmFnZSIsIkh5YnJpZFN0b3JhZ2UiLCJpc0lkYlN0b3JhZ2UiLCJnZXRTdG9yYWdlIiwiaXNJREJTdXBwb3J0ZWQiLCJmYWxsYmFja1N0b3JhZ2UiLCJpc1N1cGVySlNPTlJlc3VsdCIsIlNVUEVSSlNPTl9NRVRBX0tFWSIsImlzSURCQ2FwYWJpbGl0eUNoZWNrZWQiLCJpZGJTdXBwb3J0ZWQiLCJpZGJDYXBhYmlsaXR5Q2hlY2tlclByb21pc2UiLCJ0ZXN0RGJOYW1lIiwiVEVTVF9JREJfTkFNRV9QUkVGSVgiLCJ0ZXN0RGIiLCJURVNUX0lEQl9WRVJTSU9OIiwiY2xvc2UiLCJzZXJpYWxpemVkIiwic2VyaWFsaXplIiwidW5kZWZpbmVkIiwiZGVzZXJpYWxpemUiLCJjbG9uZURhdGEiLCJyZWR1Y2UiLCJhY2MiLCJsb2dnZXIiLCJnZXRPcGVuZWREYiIsImRiIiwiZGJHZXR0ZXJQcm9taXNlIiwibmFtZSIsInZlcnNpb24iLCJ1cGdyYWRlIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwic3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsInB1dCIsImRlbGV0ZSIsInR4IiwidHJhbnNhY3Rpb24iLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZG9uZSIsImVycm9yIiwiYWJvcnQiLCJjdXJzb3IiLCJTdHJpbmciLCJpZGJLZXlzIiwiZ2V0QWxsS2V5cyIsInRvU3RyaW5nIiwiaWRiS2V5IiwiZ2V0S2V5IiwiREVGQVVMVF9JREJfTkFNRSIsIkRFRkFVTFRfSURCX1ZFUlNJT04iLCJERUZBVUxUX1NUT1JFX05BTUUiLCJicm93c2VyIiwiYnJvd3NlclN0b3JhZ2UiLCJsb2NhbCIsImh5YnJpZFN0b3JhZ2UiLCJJU19CRVRBIiwiSVNfUkVMRUFTRSIsInNlbGYiLCJJMThuIiwiaW5pdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zbGF0ZSIsInRyYW5zbGF0ZUVsZW1lbnRzIiwidHJhbnNsYXRlQXR0cmlidXRlcyIsImkxOG5BdHRyaWJ1dGVOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsIm1lc3NhZ2UiLCJnZXRJMThuTWVzc2FnZSIsInRyYW5zbGF0ZUVsZW1lbnQiLCJlbGVtZW50IiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwcm9jZXNzU3RyaW5nIiwiZXgiLCJodG1sIiwibWF0Y2gxIiwiZXhlYyIsIm1hdGNoMiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicmVwbGFjZSIsInRhZ05hbWUiLCJhdHRyaWJ1dGVzIiwic3BsaXQiLCJhdHRyIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaTE4biIsImdldE1lc3NhZ2UiLCJMb2dnZXIiLCJMb2dMZXZlbCIsIkV4dGVuZGVkTG9nZ2VyIiwiaXNWZXJib3NlIiwiY3VycmVudExldmVsIiwiRGVidWciLCJWZXJib3NlIiwic2V0TG9nTGV2ZWwiLCJsZXZlbCIsIkxPR19MRVZFTF9MT0NBTF9TVE9SQUdFX0tFWSIsImNhdGNoIiwiaXNWYWxpZExvZ0xldmVsIiwidmFsdWVzIiwiaW5jbHVkZXMiLCJsb2dMZXZlbCIsIndhcm4iLCJERUZBVUxUX0xPR19MRVZFTCIsIkluZm8iLCJhc3NpZ24iLCJhZGd1YXJkIiwiQVBQX01FU1NBR0VfSEFORExFUl9OQU1FIiwiTWVzc2FnZVR5cGUiLCJzZW5kTWVzc2FnZSIsInNlbmRUYWJNZXNzYWdlIiwiTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlSGFzVHlwZUZpZWxkIiwibWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiaGFuZGxlTWVzc2FnZSIsInR5cGUiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsIkVycm9yIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lcnMiLCJpc1ZhbGlkTWVzc2FnZVR5cGUiLCJoYW5kbGVyTmFtZSIsIk1hcCIsImJpbmQiLCJ0YWJJZCIsInRhYnMiLCJOYW5vYmFyIiwibWVzc2VuZ2VyIiwiUG9zdEluc3RhbGwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJuYW5vYmFyIiwiZ28iLCJjaGVja1JlcXVlc3RGaWx0ZXJSZWFkeSIsInJlYWR5Iiwib25FbmdpbmVMb2FkZWQiLCJzZXRUaW1lb3V0IiwiY2hlY2tSZXF1ZXN0VGltZW91dE1zIiwid2luZG93Iiwib3BlblRoYW5reW91UGFnZSIsIm9wZW5UaGFua3lvdVBhZ2VUaW1lb3V0TXMiLCJjbGFzc25hbWUiLCJQYWdlIiwiTWVzc2VuZ2VyIiwicmVzcG9uc2UiLCJ1cGRhdGVMaXN0ZW5lcnMiLCJVcGRhdGVMaXN0ZW5lcnMiLCJnZXRPcHRpb25zRGF0YSIsIkdldE9wdGlvbnNEYXRhIiwiY2hhbmdlVXNlclNldHRpbmciLCJzZXR0aW5nSWQiLCJDaGFuZ2VVc2VyU2V0dGluZ3MiLCJvcGVuRXh0ZW5zaW9uU3RvcmUiLCJPcGVuRXh0ZW5zaW9uU3RvcmUiLCJvcGVuQ29tcGFyZVBhZ2UiLCJPcGVuQ29tcGFyZVBhZ2UiLCJvcGVuQ2hyb21lRXh0ZW5zaW9uc1BhZ2UiLCJPcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZSIsIm9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZSIsIk9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZSIsImVuYWJsZUZpbHRlciIsImZpbHRlcklkIiwiQWRkQW5kRW5hYmxlRmlsdGVyIiwiZGlzYWJsZUZpbHRlciIsIkRpc2FibGVGaWx0ZXIiLCJhcHBseVNldHRpbmdzSnNvbiIsImpzb24iLCJBcHBseVNldHRpbmdzSnNvbiIsIm9wZW5GaWx0ZXJpbmdMb2ciLCJPcGVuRmlsdGVyaW5nTG9nIiwicmVzZXRTdGF0aXN0aWNzIiwiUmVzZXRCbG9ja2VkQWRzQ291bnQiLCJzZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZSIsIndpbmRvd1N0YXRlIiwiU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGUiLCJyZXNldFNldHRpbmdzIiwiUmVzZXRTZXR0aW5ncyIsImdldFVzZXJSdWxlcyIsIkdldFVzZXJSdWxlcyIsInNhdmVVc2VyUnVsZXMiLCJTYXZlVXNlclJ1bGVzIiwib3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXMiLCJPcGVuRnVsbHNjcmVlblVzZXJSdWxlcyIsImdldEFsbG93bGlzdCIsIkdldEFsbG93bGlzdERvbWFpbnMiLCJzYXZlQWxsb3dsaXN0IiwiU2F2ZUFsbG93bGlzdERvbWFpbnMiLCJzZXROb3RpZmljYXRpb25WaWV3ZWQiLCJ3aXRoRGVsYXkiLCJTZXROb3RpZmljYXRpb25WaWV3ZWQiLCJ1cGRhdGVGaWx0ZXJzTVYyIiwiX19JU19NVjNfXyIsIkNoZWNrRmlsdGVyc1VwZGF0ZSIsImNoZWNrVXBkYXRlc01WMyIsIkNoZWNrRXh0ZW5zaW9uVXBkYXRlTXYzIiwidXBkYXRlRXh0ZW5zaW9uTVYzIiwiZnJvbSIsIlVwZGF0ZUV4dGVuc2lvbk12MyIsInVwZGF0ZUdyb3VwU3RhdHVzIiwiaWQiLCJlbmFibGVkIiwiRW5hYmxlRmlsdGVyc0dyb3VwIiwiRGlzYWJsZUZpbHRlcnNHcm91cCIsImdyb3VwSWQiLCJOdW1iZXIiLCJwYXJzZUludCIsInNldENvbnNlbnRlZEZpbHRlcnMiLCJmaWx0ZXJJZHMiLCJTZXRDb25zZW50ZWRGaWx0ZXJzIiwiZ2V0SXNDb25zZW50ZWRGaWx0ZXIiLCJHZXRJc0NvbnNlbnRlZEZpbHRlciIsImNoZWNrQ3VzdG9tVXJsIiwidXJsIiwiTG9hZEN1c3RvbUZpbHRlckluZm8iLCJhZGRDdXN0b21GaWx0ZXIiLCJmaWx0ZXIiLCJTdWJzY3JpYmVUb0N1c3RvbUZpbHRlciIsInJlbW92ZUN1c3RvbUZpbHRlciIsIlJlbW92ZUFudGlCYW5uZXJGaWx0ZXIiLCJnZXRJc0FwcEluaXRpYWxpemVkIiwiR2V0SXNBcHBJbml0aWFsaXplZCIsImdldFRhYkluZm9Gb3JQb3B1cCIsIkdldFRhYkluZm9Gb3JQb3B1cCIsImNoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkIiwic3RhdGUiLCJDaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZCIsInVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZSIsInRoZW1lIiwiVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lIiwib3BlblJ1bGVzTGltaXRzVGFiIiwiT3BlblJ1bGVzTGltaXRzVGFiIiwib3BlblNldHRpbmdzVGFiIiwiT3BlblNldHRpbmdzVGFiIiwib3BlbkFzc2lzdGFudCIsIk9wZW5Bc3Npc3RhbnQiLCJvcGVuQWJ1c2VTaXRlIiwiT3BlbkFidXNlVGFiIiwiY2hlY2tTaXRlU2VjdXJpdHkiLCJPcGVuU2l0ZVJlcG9ydFRhYiIsInJlc2V0VXNlclJ1bGVzRm9yUGFnZSIsImN1cnJlbnRUYWIiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJSZXNldFVzZXJSdWxlc0ZvclBhZ2UiLCJyZW1vdmVBbGxvd2xpc3REb21haW4iLCJ0YWJSZWZyZXNoIiwiUmVtb3ZlQWxsb3dsaXN0RG9tYWluIiwiYWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWQiLCJBZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZCIsImFkZEFsbG93bGlzdERvbWFpbkZvclVybCIsIkFkZEFsbG93bGlzdERvbWFpbkZvclVybCIsIm9uT3BlbkZpbHRlcmluZ0xvZ1BhZ2UiLCJPbk9wZW5GaWx0ZXJpbmdMb2dQYWdlIiwiZ2V0RmlsdGVyaW5nTG9nRGF0YSIsIkdldEZpbHRlcmluZ0xvZ0RhdGEiLCJvbkNsb3NlRmlsdGVyaW5nTG9nUGFnZSIsIk9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlIiwiZ2V0RmlsdGVyaW5nSW5mb0J5VGFiSWQiLCJHZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZCIsInN5bmNocm9uaXplT3BlblRhYnMiLCJTeW5jaHJvbml6ZU9wZW5UYWJzIiwiY2xlYXJFdmVudHNCeVRhYklkIiwiaWdub3JlUHJlc2VydmVMb2ciLCJDbGVhckV2ZW50c0J5VGFiSWQiLCJyZWZyZXNoUGFnZSIsIlJlZnJlc2hQYWdlIiwiYWRkVXNlclJ1bGUiLCJydWxlVGV4dCIsIkFkZFVzZXJSdWxlIiwicmVtb3ZlVXNlclJ1bGUiLCJSZW1vdmVVc2VyUnVsZSIsInNldFByZXNlcnZlTG9nU3RhdGUiLCJTZXRQcmVzZXJ2ZUxvZ1N0YXRlIiwiZ2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQiLCJHZXRFZGl0b3JTdG9yYWdlQ29udGVudCIsInNldEVkaXRvclN0b3JhZ2VDb250ZW50IiwiY29udGVudCIsIlNldEVkaXRvclN0b3JhZ2VDb250ZW50IiwiZ2V0UnVsZXNMaW1pdHNDb3VudGVycyIsIkdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjMiLCJjYW5FbmFibGVTdGF0aWNGaWx0ZXIiLCJDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjMiLCJjYW5FbmFibGVTdGF0aWNHcm91cCIsIkNhbkVuYWJsZVN0YXRpY0dyb3VwTXYzIiwiZ2V0Q3VycmVudExpbWl0cyIsIkN1cnJlbnRMaW1pdHNNdjMiLCJDaGVja1JlcXVlc3RGaWx0ZXJSZWFkeSIsImFkZFVybFRvVHJ1c3RlZCIsIkFkZFVybFRvVHJ1c3RlZCIsImdldFVzZXJSdWxlc0VkaXRvckRhdGEiLCJHZXRVc2VyUnVsZXNFZGl0b3JEYXRhIiwicmVzdG9yZUZpbHRlcnNNdjMiLCJSZXN0b3JlRmlsdGVyc012MyIsImNsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzIiwiQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjMiLCJnZXRBbGxvd2xpc3REb21haW5zIiwibG9hZFNldHRpbmdzSnNvbiIsIkxvYWRTZXR0aW5nc0pzb24iLCJPcGVuVGhhbmt5b3VQYWdlIiwiaW5pdGlhbGl6ZUZyYW1lU2NyaXB0IiwiSW5pdGlhbGl6ZUZyYW1lU2NyaXB0IiwiaW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdCIsIkluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQiLCJvcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZCIsIk9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkIiwiY3JlYXRlRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImNhbGxiYWNrIiwib25VbmxvYWRDYWxsYmFjayIsImxpc3RlbmVySWQiLCJDcmVhdGVFdmVudExpc3RlbmVyIiwib25VcGRhdGVMaXN0ZW5lcnMiLCJ1cGRhdGVkUmVzcG9uc2UiLCJtZXNzYWdlSGFuZGxlciIsIk5vdGlmeUxpc3RlbmVycyIsImNhc3RlZE1lc3NhZ2UiLCJvblVubG9hZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZW1vdmVMaXN0ZW5lciIsInNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50Iiwic2NyZWVuTmFtZSIsInBhZ2VJZCIsIlNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50Iiwic2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50IiwiZXZlbnROYW1lIiwiU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50IiwiYWRkVGVsZW1ldHJ5T3BlbmVkUGFnZSIsIkFkZFRlbGVtZXRyeU9wZW5lZFBhZ2UiLCJyZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlIiwiUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZSIsImNyZWF0ZUxvbmdMaXZlZENvbm5lY3Rpb24iLCJwYWdlIiwicG9ydCIsImZvcmNlRGlzY29ubmVjdGVkIiwicG9ydElkIiwiY29ubmVjdCIsInBvc3RNZXNzYWdlIiwiQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbiIsIm9uRGlzY29ubmVjdCIsImxhc3RFcnJvciIsImRpc2Nvbm5lY3QiLCJyb290IiwiY3NzIiwiYWRkQ3NzIiwicyIsImdldEVsZW1lbnRCeUlkIiwiaGVhZCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImFkZENsYXNzIiwiY2xzIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwiY3JlYXRlQmFyIiwicm0iLCJ3aWR0aCIsImhlcmUiLCJvbiIsImJhciIsIm1vdmUiLCJkaXN0IiwicGxhY2UiLCJzdHlsZSIsImhlaWdodCIsIm51bSIsIm9wdHMiLCJhcHBseUdvIiwicCIsImNoaWxkIiwidGFyZ2V0IiwicG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJnbG9iYWxUaGlzIiwiY2hyb21lIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjcmVhdGVJdGVtIiwiaXRlbXMiLCJpc1RoZW5hYmxlIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwicmVqZWN0Iiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwiYXN5bmNGdW5jdGlvbldyYXBwZXIiLCJhcmdzIiwibWluQXJncyIsIm1heEFyZ3MiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImNiRXJyb3IiLCJjb25zb2xlIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsIndyYXBPYmplY3QiLCJ3cmFwcGVycyIsImNhY2hlIiwiY3JlYXRlIiwiaGFuZGxlcnMiLCJwcm94eVRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJSZWZsZWN0IiwiZGVsZXRlUHJvcGVydHkiLCJ3cmFwRXZlbnQiLCJ3cmFwcGVyTWFwIiwiaGFzTGlzdGVuZXIiLCJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwib25SZXF1ZXN0RmluaXNoZWQiLCJyZXEiLCJ3cmFwcGVkUmVxIiwiZ2V0Q29udGVudCIsIm9uTWVzc2FnZVdyYXBwZXJzIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZGlkQ2FsbFNlbmRSZXNwb25zZSIsIndyYXBwZWRTZW5kUmVzcG9uc2UiLCJzZW5kUmVzcG9uc2VQcm9taXNlIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInNldHRpbmdNZXRhZGF0YSIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibGVuZ3RoT2ZBcnJheUxpa2UiLCJyZXF1aXJlIiwiQ29uc3RydWN0b3IiLCJsaXN0IiwiJGxlbmd0aCIsImFyZ3VtZW50cyIsImZhaWxzIiwiTUVUSE9EX05BTUUiLCJhcmd1bWVudCIsIk8iLCJDIiwibGVuIiwiQSIsImsiLCJ1bmN1cnJ5VGhpcyIsInN0cmluZ1NsaWNlIiwic2xpY2UiLCJpdCIsImhhc093biIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsInNvdXJjZSIsImV4Y2VwdGlvbnMiLCJmIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaSIsIkRFU0NSSVBUT1JTIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwib2JqZWN0IiwiYml0bWFwIiwid3JpdGFibGUiLCJpc0NhbGxhYmxlIiwibWFrZUJ1aWx0SW4iLCJkZWZpbmVHbG9iYWxQcm9wZXJ0eSIsIm9wdGlvbnMiLCJzaW1wbGUiLCJnbG9iYWwiLCJ1bnNhZmUiLCJub25Db25maWd1cmFibGUiLCJub25Xcml0YWJsZSIsImlzT2JqZWN0IiwiRVhJU1RTIiwiRU5WSVJPTk1FTlQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwcm9jZXNzIiwiRGVubyIsInZlcnNpb25zIiwidjgiLCJtYXRjaCIsImNsYXNzb2YiLCJ1c2VyQWdlbnRTdGFydHNXaXRoIiwic3RyaW5nIiwiQnVuIiwiY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5IiwiZGVmaW5lQnVpbHRJbiIsImNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMiLCJpc0ZvcmNlZCIsIlRBUkdFVCIsIkdMT0JBTCIsIlNUQVRJQyIsInN0YXQiLCJGT1JDRUQiLCJ0YXJnZXRQcm9wZXJ0eSIsInNvdXJjZVByb3BlcnR5IiwiZGVzY3JpcHRvciIsImRvbnRDYWxsR2V0U2V0IiwiZm9yY2VkIiwic2hhbSIsInRlc3QiLCJOQVRJVkVfQklORCIsIkZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0RGVzY3JpcHRvciIsIlBST1BFUiIsInNvbWV0aGluZyIsIkNPTkZJR1VSQUJMRSIsInVuY3VycnlUaGlzV2l0aEJpbmQiLCJmbiIsImFGdW5jdGlvbiIsIm5hbWVzcGFjZSIsImEiLCIkT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJmdW5jdGlvblRvU3RyaW5nIiwiaW5zcGVjdFNvdXJjZSIsImRvY3VtZW50QWxsIiwicmVwbGFjZW1lbnQiLCJmZWF0dXJlIiwiZGV0ZWN0aW9uIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJ0b0xvd2VyQ2FzZSIsImdldEJ1aWx0SW4iLCJpc1Byb3RvdHlwZU9mIiwiVVNFX1NZTUJPTF9BU19VSUQiLCIkU3ltYm9sIiwidG9MZW5ndGgiLCJvYmoiLCJDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSIsIkludGVybmFsU3RhdGVNb2R1bGUiLCJlbmZvcmNlSW50ZXJuYWxTdGF0ZSIsImVuZm9yY2UiLCJnZXRJbnRlcm5hbFN0YXRlIiwiJFN0cmluZyIsImpvaW4iLCJDT05GSUdVUkFCTEVfTEVOR1RIIiwiVEVNUExBVEUiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJhcml0eSIsImNlaWwiLCJNYXRoIiwiZmxvb3IiLCJ0cnVuYyIsIngiLCJuIiwicHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUiLCJ0b0luZGV4ZWRPYmplY3QiLCJ0b1Byb3BlcnR5S2V5IiwiSUU4X0RPTV9ERUZJTkUiLCIkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUCIsImludGVybmFsT2JqZWN0S2V5cyIsImVudW1CdWdLZXlzIiwiaGlkZGVuS2V5cyIsImNvbmNhdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJOQVNIT1JOX0JVRyIsIlYiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlIiwiYW5PYmplY3QiLCJWOF9WRVJTSU9OIiwic3ltYm9sIiwiU3ltYm9sIiwiSW5kZXhlZE9iamVjdCIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJudW1iZXIiLCJ0b0ludGVnZXJPckluZmluaXR5IiwibWluIiwidG9QcmltaXRpdmUiLCJpc1N5bWJvbCIsIk5BVElWRV9TWU1CT0wiLCJpdGVyYXRvciIsIiQiLCIkcmVkdWNlIiwibGVmdCIsImFycmF5TWV0aG9kSXNTdHJpY3QiLCJDSFJPTUVfVkVSU0lPTiIsIklTX05PREUiLCJDSFJPTUVfQlVHIiwicHJvdG8iLCJjYWxsYmFja2ZuIiwiQXJyYXlCdWZmZXJWaWV3Q29yZSIsImFUeXBlZEFycmF5IiwiZXhwb3J0VHlwZWRBcnJheU1ldGhvZCIsImF0IiwicmVsYXRpdmVJbmRleCIsImFycmF5VG9SZXZlcnNlZCIsImdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciIsInRvUmV2ZXJzZWQiLCJhQ2FsbGFibGUiLCJhcnJheUZyb21Db25zdHJ1Y3RvckFuZExpc3QiLCJzb3J0IiwiVHlwZWRBcnJheVByb3RvdHlwZSIsInRvU29ydGVkIiwiY29tcGFyZUZuIiwiaXNBcnJheSIsImlzUGxhaW5PYmplY3QiLCJhc3NpZ25Qcm9wIiwiY2FycnkiLCJuZXdWYWwiLCJvcmlnaW5hbE9iamVjdCIsImluY2x1ZGVOb25lbnVtZXJhYmxlIiwicHJvcFR5cGUiLCJjb3B5IiwiaXRlbSIsInByb3BzIiwic3ltYm9scyIsInZhbCIsIm5vbmVudW1lcmFibGUiLCJpbnN0YW5jZU9mQW55IiwiY29uc3RydWN0b3JzIiwic29tZSIsImMiLCJpZGJQcm94eWFibGVUeXBlcyIsImN1cnNvckFkdmFuY2VNZXRob2RzIiwiZ2V0SWRiUHJveHlhYmxlVHlwZXMiLCJJREJEYXRhYmFzZSIsIklEQk9iamVjdFN0b3JlIiwiSURCSW5kZXgiLCJJREJDdXJzb3IiLCJJREJUcmFuc2FjdGlvbiIsImdldEN1cnNvckFkdmFuY2VNZXRob2RzIiwiYWR2YW5jZSIsImNvbnRpbnVlIiwiY29udGludWVQcmltYXJ5S2V5IiwidHJhbnNhY3Rpb25Eb25lTWFwIiwidHJhbnNmb3JtQ2FjaGUiLCJyZXZlcnNlVHJhbnNmb3JtQ2FjaGUiLCJwcm9taXNpZnlSZXF1ZXN0IiwicmVxdWVzdCIsInVubGlzdGVuIiwic3VjY2VzcyIsIndyYXAiLCJjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24iLCJjb21wbGV0ZSIsIkRPTUV4Y2VwdGlvbiIsImlkYlByb3h5VHJhcHMiLCJvYmplY3RTdG9yZSIsInJlcGxhY2VUcmFwcyIsIndyYXBGdW5jdGlvbiIsImZ1bmMiLCJ1bndyYXAiLCJ0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlIiwiSURCUmVxdWVzdCIsIm5ld1ZhbHVlIiwiYmxvY2tlZCIsImJsb2NraW5nIiwidGVybWluYXRlZCIsImluZGV4ZWREQiIsIm9wZW4iLCJvcGVuUHJvbWlzZSIsImV2ZW50Iiwib2xkVmVyc2lvbiIsIm5ld1ZlcnNpb24iLCJkZWxldGVEYXRhYmFzZSIsInJlYWRNZXRob2RzIiwid3JpdGVNZXRob2RzIiwiY2FjaGVkTWV0aG9kcyIsImdldE1ldGhvZCIsInRhcmdldEZ1bmNOYW1lIiwidXNlSW5kZXgiLCJpc1dyaXRlIiwic3RvcmVOYW1lIiwic2hpZnQiLCJvbGRUcmFwcyIsImFkdmFuY2VNZXRob2RQcm9wcyIsIm1ldGhvZE1hcCIsImFkdmFuY2VSZXN1bHRzIiwiaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkiLCJjdXJzb3JJdGVyYXRvclRyYXBzIiwiY2FjaGVkRnVuYyIsIml0ZXJhdGUiLCJvcGVuQ3Vyc29yIiwicHJveGllZEN1cnNvciIsImlzSXRlcmF0b3JQcm9wIiwiYXN5bmNJdGVyYXRvciIsImdldFR5cGUiLCJwYXlsb2FkIiwiaXNBbnlPYmplY3QiLCJpc0Jsb2IiLCJpc0Jvb2xlYW4iLCJpc0RhdGUiLCJpc05hTiIsImlzRW1wdHlBcnJheSIsImdldFByb3RvdHlwZU9mIiwiaXNFbXB0eU9iamVjdCIsImlzRW1wdHlTdHJpbmciLCJpc0Vycm9yIiwiaXNGaWxlIiwiaXNGdWxsQXJyYXkiLCJpc0Z1bGxPYmplY3QiLCJpc1N0cmluZyIsImlzRnVsbFN0cmluZyIsImlzRnVuY3Rpb24iLCJpc1R5cGUiLCJUeXBlRXJyb3IiLCJCb29sZWFuIiwiaXNJbnN0YW5jZU9mIiwiY2xhc3NPckNsYXNzTmFtZSIsImlzTWFwIiwiaXNOYU5WYWx1ZSIsImlzTnVtYmVyIiwiaXNOZWdhdGl2ZU51bWJlciIsImlzTnVsbCIsImlzT25lT2YiLCJiIiwiZCIsImlzVW5kZWZpbmVkIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJpc09iamVjdExpa2UiLCJpc1Bvc2l0aXZlTnVtYmVyIiwiaXNQcmltaXRpdmUiLCJpc1Byb21pc2UiLCJpc1JlZ0V4cCIsImlzU2V0IiwiaXNXZWFrTWFwIiwiaXNXZWFrU2V0IiwidXJsQWxwaGFiZXQiLCJyYW5kb20iLCJieXRlcyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJjdXN0b21SYW5kb20iLCJhbHBoYWJldCIsImRlZmF1bHRTaXplIiwiZ2V0UmFuZG9tIiwibWFzayIsImxvZyIsIkxOMiIsInN0ZXAiLCJzaXplIiwiaiIsImN1c3RvbUFscGhhYmV0IiwiYnl0ZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==