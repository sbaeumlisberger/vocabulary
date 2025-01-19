import {
  InjectionToken,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-C5ATS23U.js";

// node_modules/ngx-webstorage-service/fesm2020/ngx-webstorage-service.mjs
var ProxyStorageService = class _ProxyStorageService {
  /**
   * Creates a new `ProxyStorageService` instance that uses the specified transcoder by default for read and write operations. Actual
   * read and writes are delegated to given storage service.
   *
   * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
   * @param subject           Storage service which should handle to actual storage of data.
   */
  constructor(defaultTranscoder, subject) {
    this.defaultTranscoder = defaultTranscoder;
    this.subject = subject;
  }
  /**
   * Checks whether an entry with the specified key exists in the storage.
   *
   * @param   key Identifier of the entry for which its presence in the storage is to be checked.
   * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
   */
  has(key) {
    return this.subject.has(key);
  }
  /*
   * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
   * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
   * `undefined` will be returned.
   *
   * @param   key     Identifier of the entry whose value is to be retrieved.
   * @param   decoder Decoder to use for converting the stored value to the desired return type.
   * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
   *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
   */
  get(key, decoder) {
    return this.subject.get(key, decoder ?? this.defaultTranscoder);
  }
  /**
   * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
   * value into a format that can be stored by the storage service's underlying storage.
   *
   * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
   * the value will be the same. It, however, does not necessarily return the same reference.
   *
   * @param key     Identifier of the entry which is to be created or updated.
   * @param value   Value which is to be stored.
   * @param encoder Encoder used to convert the given value into a format that can be used for storage.
   */
  set(key, value, encoder) {
    this.subject.set(key, value, encoder ?? this.defaultTranscoder);
  }
  /**
   * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
   * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
   *
   * @param key Identifier of the entry which is to be removed.
   */
  remove(key) {
    this.subject.remove(key);
  }
  /**
   * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
   * for key *x*.
   */
  clear() {
    this.subject.clear();
  }
  /**
   * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
   * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
   * the same data.
   *
   * The default transcoder will not be changed for the storage service on which this function is invoked.
   *
   * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
   * @returns            A new storage service that uses the specified transcoder by default.
   */
  withDefaultTranscoder(transcoder) {
    return new _ProxyStorageService(transcoder, this.subject);
  }
};
var BaseStorageService = class {
  /**
   * Creates a new `BaseStorageService` that uses the specified transcoder by default for read and write operations.
   *
   * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
   */
  constructor(defaultTranscoder) {
    this.defaultTranscoder = defaultTranscoder;
  }
  /**
   * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
   * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
   * `undefined` will be returned.
   *
   * @param   key     Identifier of the entry whose value is to be retrieved.
   * @param   decoder Decoder to use for converting the stored value to the desired return type.
   * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
   *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
   */
  get(key, decoder) {
    const value = this.getItem(key);
    return value !== void 0 ? (decoder ?? this.defaultTranscoder).decode(value) : void 0;
  }
  /**
   * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
   * value into a format that can be stored by the storage service's underlying storage.
   *
   * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
   * the value will be the same. It, however, does not necessarily return the same reference.
   *
   * @param key     Identifier of the entry which is to be created or updated.
   * @param value   Value which is to be stored.
   * @param encoder Encoder used to convert the given value into a format that can be used for storage.
   */
  set(key, value, encoder) {
    this.setItem(key, (encoder ?? this.defaultTranscoder).encode(value));
  }
  /**
   * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
   * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
   * the same data.
   *
   * The default transcoder will not be changed for the storage service on which this function is invoked.
   *
   * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
   * @returns            A new storage service that uses the specified transcoder by default.
   */
  withDefaultTranscoder(transcoder) {
    return new ProxyStorageService(transcoder, this);
  }
};
var JsonStorageTranscoder = class {
  encode(value) {
    return JSON.stringify(value);
  }
  decode(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return void 0;
    }
  }
};
var StringStorageTranscoder = class {
  encode(value) {
    return value;
  }
  decode(value) {
    return value;
  }
};
var BooleanStorageTranscoder = class {
  encode(value) {
    return value.toString();
  }
  decode(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return void 0;
  }
};
var NumberStorageTranscoder = class {
  encode(value) {
    return value.toString();
  }
  decode(value) {
    const parsedNumber = Number(value);
    return Number.isFinite(parsedNumber) ? parsedNumber : void 0;
  }
};
var DateIsoStorageTranscoder = class {
  encode(value) {
    return value.toISOString();
  }
  decode(value) {
    const timestamp = Date.parse(value);
    return isNaN(timestamp) ? void 0 : new Date(timestamp);
  }
};
var DateEpochStorageTranscoder = class {
  encode(value) {
    return value.valueOf().toString();
  }
  decode(value) {
    const timestamp = parseInt(value, 10);
    return isNaN(timestamp) ? void 0 : new Date(timestamp);
  }
};
var StorageTranscoders = {
  /** Transcoder that encodes values as JSON strings. */
  JSON: new JsonStorageTranscoder(),
  /** Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way. */
  STRING: new StringStorageTranscoder(),
  /** Transcoder that encodes/decodes `boolean` values. */
  BOOLEAN: new BooleanStorageTranscoder(),
  /** Transcoder that encodes/decodes `number` values. */
  NUMBER: new NumberStorageTranscoder(),
  /** Transcoder that encodes/decodes `Date` values into ISO strings. */
  DATE_ISO_STRING: new DateIsoStorageTranscoder(),
  /** Transcoder that encodes/decodes `Date` values into epoch timestamps. */
  DATE_EPOCH_TIME: new DateEpochStorageTranscoder()
};
var InMemoryStorageService = class extends BaseStorageService {
  /**
   * Creates a new `InMemoryStorageService` instance.
   */
  constructor() {
    super(StorageTranscoders.JSON);
    this.storage = /* @__PURE__ */ new Map();
  }
  /**
   * Checks whether an entry with the specified key exists in the storage.
   *
   * @param   key Identifier of the entry for which its presence in the storage is to be checked.
   * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
   */
  has(key) {
    return this.storage.has(key);
  }
  /**
   * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
   * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
   *
   * @param key Identifier of the entry which is to be removed.
   */
  remove(key) {
    this.storage.delete(key);
  }
  /**
   * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
   * for key *x*.
   */
  clear() {
    this.storage.clear();
  }
  /**
   * Performs the actual retrieval of a value from storage.
   *
   * @param   key Identifier of the entry whose value is to be retrieved.
   * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
   */
  getItem(key) {
    if (!this.storage.has(key)) {
      return void 0;
    }
    return this.storage.get(key);
  }
  /**
   * Stores the provided value using specified key in the storage.
   *
   * @param key   Identifier of the entry for which the value is to be stored.
   * @param value The value that is to be stored.
   */
  setItem(key, value) {
    this.storage.set(key, value);
  }
};
var WebStorageService = class extends BaseStorageService {
  /**
   * Creates a new `WebStorageService` instance that uses the specified (web) storage object as underlying backing storage.
   *
   * @param storage Storage object which is to be wrapped in a class that implements the `StorageService` interface.
   */
  constructor(storage) {
    super(StorageTranscoders.JSON);
    this.storage = storage;
  }
  /**
   * Checks whether an entry with the specified key exists in the storage.
   *
   * @param   key Identifier of the entry for which its presence in the storage is to be checked.
   * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
   */
  has(key) {
    return this.storage.getItem(key) !== null;
  }
  /**
   * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
   * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
   *
   * @param key Identifier of the entry which is to be removed.
   */
  remove(key) {
    this.storage.removeItem(key);
  }
  /**
   * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
   * for key *x*.
   */
  clear() {
    this.storage.clear();
  }
  /**
   * Performs the actual retrieval of a value from storage.
   *
   * @param   key Identifier of the entry whose value is to be retrieved.
   * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
   */
  getItem(key) {
    const value = this.storage.getItem(key);
    return value !== null ? value : void 0;
  }
  /**
   * Stores the provided value using specified key in the storage.
   *
   * @param key   Identifier of the entry for which the value is to be stored.
   * @param value The value that is to be stored.
   */
  setItem(key, value) {
    return this.storage.setItem(key, value);
  }
};
function isStorageAvailable(storage) {
  if (!storage) {
    return false;
  }
  try {
    const now = Date.now();
    const testItemKey = `storage-test-entry-${now}`;
    const testItemValue = `storage-test-value-${now}`;
    storage.setItem(testItemKey, testItemValue);
    const retrievedItemValue = storage.getItem(testItemKey);
    storage.removeItem(testItemKey);
    return retrievedItemValue === testItemValue;
  } catch (error) {
    return false;
  }
}
function isSessionStorageAvailable() {
  try {
    if (typeof sessionStorage !== "undefined") {
      return isStorageAvailable(sessionStorage);
    }
  } catch {
  }
  return false;
}
function isLocalStorageAvailable() {
  try {
    if (typeof localStorage !== "undefined") {
      return isStorageAvailable(localStorage);
    }
  } catch {
  }
  return false;
}
function sessionStorageFactory() {
  if (isSessionStorageAvailable()) {
    return new WebStorageService(sessionStorage);
  }
  return new InMemoryStorageService();
}
var SESSION_STORAGE = new InjectionToken("SESSION_STORAGE", {
  providedIn: "root",
  factory: sessionStorageFactory
});
function localStorageFactory() {
  if (isLocalStorageAvailable()) {
    return new WebStorageService(localStorage);
  }
  return new InMemoryStorageService();
}
var LOCAL_STORAGE = new InjectionToken("LOCAL_STORAGE", {
  providedIn: "root",
  factory: localStorageFactory
});
var StorageServiceModule = class {
};
StorageServiceModule.\u0275fac = function StorageServiceModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StorageServiceModule)();
};
StorageServiceModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: StorageServiceModule
});
StorageServiceModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageServiceModule, [{
    type: NgModule
  }], null, null);
})();

export {
  LOCAL_STORAGE
};
//# sourceMappingURL=chunk-WNLYU4NL.js.map
