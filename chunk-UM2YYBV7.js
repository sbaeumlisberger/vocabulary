import {
  VocabularyDB
} from "./chunk-SAKA2635.js";
import {
  NgEventBus
} from "./chunk-LNQB3EUR.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWMOKFFN.js";
import {
  __async
} from "./chunk-UL2P3LPA.js";

// src/app/events/vocabulary-added.event.ts
var VocabularyAddedEvent = class {
  static {
    this.ID = "vocabulary:added";
  }
  constructor(vocable) {
    this.vocable = vocable;
  }
};

// src/app/events/vocabulary-imported.event.ts
var VocabularyImportedEvent = class {
  static {
    this.ID = "vocabulary:imported";
  }
};

// src/app/events/vocabulary-updated.event.ts
var VocabularyUpdatedEvent = class {
  static {
    this.ID = "vocabulary:updated";
  }
  constructor(vocable) {
    this.vocable = vocable;
  }
};

// src/app/services/vocabulary.service.ts
var VocabularyService = class _VocabularyService {
  constructor(db, eventBus) {
    this.db = db;
    this.eventBus = eventBus;
  }
  getAll() {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.toArray();
    });
  }
  count() {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.count();
    });
  }
  load(offset, limit) {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.reverse().offset(offset).limit(limit).toArray();
    });
  }
  loadForPracticeLevel(practiceLevel, offset, limit) {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.reverse().filter((v) => v.practiceLevel == practiceLevel).offset(offset).limit(limit).toArray();
    });
  }
  search(query, limit = 10) {
    return __async(this, null, function* () {
      query = query.toLowerCase();
      return yield this.db.vocabulary.filter((v) => v.foreignMeaning.toLowerCase().includes(query) || !!v.nativeMeanings.find((nm) => nm.toLowerCase().includes(query))).limit(limit).toArray();
    });
  }
  add(vocable) {
    return __async(this, null, function* () {
      yield this.db.vocabulary.add(vocable);
      this.eventBus.cast(VocabularyAddedEvent.ID, new VocabularyAddedEvent(vocable));
    });
  }
  update(vocable) {
    return __async(this, null, function* () {
      if (vocable.id === void 0) {
        throw "vocable does not exist in database";
      }
      yield this.db.vocabulary.put(vocable);
      this.eventBus.cast(VocabularyUpdatedEvent.ID, new VocabularyUpdatedEvent(vocable));
    });
  }
  delete(vocable) {
    return __async(this, null, function* () {
      if (vocable.id === void 0) {
        throw "vocable does not exist in database";
      }
      yield this.db.vocabulary.delete(vocable.id);
    });
  }
  deleteAll() {
    return __async(this, null, function* () {
      yield this.db.vocabulary.clear();
    });
  }
  import(vocabulary) {
    return __async(this, null, function* () {
      yield this.db.vocabulary.bulkPut(vocabulary);
      this.eventBus.cast(VocabularyImportedEvent.ID, new VocabularyImportedEvent());
    });
  }
  static {
    this.\u0275fac = function VocabularyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VocabularyService)(\u0275\u0275inject(VocabularyDB), \u0275\u0275inject(NgEventBus));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VocabularyService, factory: _VocabularyService.\u0275fac, providedIn: "root" });
  }
};

export {
  VocabularyAddedEvent,
  VocabularyImportedEvent,
  VocabularyUpdatedEvent,
  VocabularyService
};
//# sourceMappingURL=chunk-UM2YYBV7.js.map
