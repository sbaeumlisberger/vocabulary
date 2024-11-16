import {
  LOCAL_STORAGE
} from "./chunk-NTW7OCZU.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YWMOKFFN.js";

// src/app/services/settings.service.ts
var SettingsService = class _SettingsService {
  static {
    this.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY = "showPracticeLevelInVocabularyList";
  }
  constructor(storageService) {
    this.storageService = storageService;
  }
  getShowPracticeLevelInVocabularyList() {
    return this.storageService.get(_SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY) ?? false;
  }
  setShowPracticeLevelInVocabularyList(value) {
    return this.storageService.set(_SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY, value);
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(LOCAL_STORAGE));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};

export {
  SettingsService
};
//# sourceMappingURL=chunk-OWUO6QBT.js.map
