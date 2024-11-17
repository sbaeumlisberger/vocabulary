import {
  PracticeLevel
} from "./chunk-AKFMU4OS.js";
import {
  add,
  addIcons,
  checkmarkOutline,
  rocketOutline,
  schoolOutline,
  trash,
  trendingUpOutline,
  trophyOutline
} from "./chunk-EYXWBQOK.js";
import {
  SettingsService
} from "./chunk-N6PL7VJI.js";
import {
  VocabularyAddedEvent,
  VocabularyImportedEvent,
  VocabularyService,
  VocabularyUpdatedEvent
} from "./chunk-YJDAYYSX.js";
import "./chunk-DRFQZRDU.js";
import "./chunk-QQUQBA7I.js";
import {
  NgEventBus
} from "./chunk-AXEYWA6G.js";
import {
  ThemeService
} from "./chunk-S3F3BUGQ.js";
import {
  FormsModule,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  ModalController,
  NgControlStatus,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CP2L26DD.js";
import "./chunk-AGXZWMF6.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-XAVXJ42G.js";
import "./chunk-FFUJKGJC.js";
import "./chunk-YVUF4XJE.js";
import "./chunk-OQQEQ4WG.js";
import "./chunk-KLKV5DKN.js";
import "./chunk-Z2EXFFK3.js";
import "./chunk-YNCITZGG.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-4WT7J3YM.js";
import "./chunk-6FFMTLXI.js";
import "./chunk-XIXT7DF6.js";
import "./chunk-CC56LK7W.js";
import "./chunk-K3HSXS64.js";
import {
  __async
} from "./chunk-UL2P3LPA.js";

// src/app/models/vocable.model.ts
var Vocable = class {
  constructor(foreignMeaning, nativeMeanings) {
    this.lastPracticed = 0;
    this.wasCorrect = false;
    this.practicedCount = 0;
    this.correctCount = 0;
    this.practiceLevel = PracticeLevel.NewOrNeverCorrect;
    this.score = 0;
    this.foreignMeaning = foreignMeaning;
    this.nativeMeanings = nativeMeanings;
  }
};

// src/app/components/vocabulary/add-vocabulary/add-vocabulary.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function AddVocabularyComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 8)(1, "ion-input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function AddVocabularyComponent_For_23_Template_ion_input_ngModelChange_1_listener($event) {
      const nativeMeaning_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(nativeMeaning_r2.value, $event) || (nativeMeaning_r2.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nativeMeaning_r2 = ctx.$implicit;
    const \u0275$index_40_r3 = ctx.$index;
    \u0275\u0275propertyInterpolate1("id", "nativeMeaning", \u0275$index_40_r3, "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", nativeMeaning_r2.value);
  }
}
var AddVocabularyComponent = class _AddVocabularyComponent {
  constructor(vocabularyService, modalController) {
    this.vocabularyService = vocabularyService;
    this.modalController = modalController;
    this.isEdit = false;
    this.foreignMeaning = "";
    this.nativeMeanings = [{ value: "" }];
    addIcons({ add });
  }
  ngOnInit() {
    if (this.vocable) {
      this.isEdit = true;
      this.foreignMeaning = this.vocable.foreignMeaning;
      this.nativeMeanings = this.vocable.nativeMeanings.map((nm) => {
        return { value: nm };
      });
    }
  }
  addNativeMeaning() {
    return __async(this, null, function* () {
      this.nativeMeanings.push({ value: "" });
      let textField = null;
      let i = 0;
      while (textField == null && i < 10) {
        yield new Promise((resolve) => setTimeout(resolve, 10));
        textField = document.getElementById("nativeMeaning" + (this.nativeMeanings.length - 1));
        i++;
      }
      textField?.focus();
    });
  }
  cancel() {
    this.modalController.dismiss();
  }
  save() {
    const foreignMeaning = this.foreignMeaning.trim();
    const nativeMeanings = this.nativeMeanings.map((nm) => nm.value.trim()).filter((value) => value !== "");
    if (foreignMeaning !== "" && nativeMeanings.length >= 1) {
      if (this.vocable) {
        this.vocable.foreignMeaning = foreignMeaning;
        this.vocable.nativeMeanings = nativeMeanings;
        this.vocabularyService.update(this.vocable);
        this.modalController.dismiss();
      } else {
        this.vocabularyService.add(new Vocable(foreignMeaning, nativeMeanings));
        this.modalController.dismiss();
      }
    }
  }
  static {
    this.\u0275fac = function AddVocabularyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddVocabularyComponent)(\u0275\u0275directiveInject(VocabularyService), \u0275\u0275directiveInject(ModalController));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddVocabularyComponent, selectors: [["vt-add-vocabulary"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 3, consts: [["translucent", ""], [2, "text-align", "center"], ["slot", "start"], [3, "click"], ["slot", "end"], ["position", "stacked"], ["id", "foreignMeaning", "autocorrect", "true", 3, "ngModelChange", "ngModel"], ["autocorrect", "true", 3, "ngModelChange", "ngModel"], [3, "id"], ["lines", "none"], ["slot", "end", 2, "width", "32px", "height", "32px", 3, "click"], ["icon", "Add"]], template: function AddVocabularyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-buttons", 2)(5, "ion-button", 3);
        \u0275\u0275listener("click", function AddVocabularyComponent_Template_ion_button_click_5_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(6, "Cancel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "ion-buttons", 4)(8, "ion-button", 3);
        \u0275\u0275listener("click", function AddVocabularyComponent_Template_ion_button_click_8_listener() {
          return ctx.save();
        });
        \u0275\u0275text(9, "Save");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "ion-content");
        \u0275\u0275element(11, "br");
        \u0275\u0275elementStart(12, "ion-list")(13, "ion-item")(14, "ion-label", 5);
        \u0275\u0275text(15, "Foreign meaning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "ion-input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AddVocabularyComponent_Template_ion_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.foreignMeaning, $event) || (ctx.foreignMeaning = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "br");
        \u0275\u0275elementStart(18, "ion-item")(19, "ion-label", 5);
        \u0275\u0275text(20, "Native meanings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ion-input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AddVocabularyComponent_Template_ion_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nativeMeanings[0].value, $event) || (ctx.nativeMeanings[0].value = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(22, AddVocabularyComponent_For_23_Template, 2, 3, "ion-item", 8, _forTrack0);
        \u0275\u0275element(24, "br");
        \u0275\u0275elementStart(25, "ion-item", 9)(26, "ion-button", 10);
        \u0275\u0275listener("click", function AddVocabularyComponent_Template_ion_button_click_26_listener() {
          return ctx.addNativeMeaning();
        });
        \u0275\u0275element(27, "ion-icon", 11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit Vocable" : "Add Vocable");
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.foreignMeaning);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.nativeMeanings[0].value);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.nativeMeanings.slice(1));
      }
    }, dependencies: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonButton,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      FormsModule,
      NgControlStatus,
      NgModel,
      IonIcon
    ], styles: ["\n\n.ios   body.dark[_nghost-%COMP%], .ios   body.dark   [_nghost-%COMP%] {\n  --ion-item-background: #transparent;\n}\n/*# sourceMappingURL=add-vocabulary.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddVocabularyComponent, { className: "AddVocabularyComponent", filePath: "src\\app\\components\\vocabulary\\add-vocabulary\\add-vocabulary.component.ts", lineNumber: 42 });
})();

// src/app/components/vocabulary/vocabulary-list/vocabulary-list-page.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ color: a0 });
function VocabularyListPageComponent_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 16);
  }
  if (rf & 2) {
    const vocable_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(3, _c0, ctx_r2.toColor(vocable_r2)));
    \u0275\u0275property("name", ctx_r2.toIcon(vocable_r2));
  }
}
function VocabularyListPageComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding")(1, "ion-item", 2);
    \u0275\u0275listener("click", function VocabularyListPageComponent_For_16_Template_ion_item_click_1_listener() {
      const vocable_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVocable(vocable_r2));
    });
    \u0275\u0275elementStart(2, "ion-label")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, VocabularyListPageComponent_For_16_Conditional_7_Template, 1, 5, "ion-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-item-options", 13)(9, "ion-item-option", 14);
    \u0275\u0275listener("click", function VocabularyListPageComponent_For_16_Template_ion_item_option_click_9_listener() {
      const vocable_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteVocable(vocable_r2));
    });
    \u0275\u0275element(10, "ion-icon", 15);
    \u0275\u0275text(11, "Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vocable_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vocable_r2.foreignMeaning);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vocable_r2.nativeMeanings.join(", "));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPracticeLevel ? 7 : -1);
  }
}
var VocabularyListPageComponent = class _VocabularyListPageComponent {
  static {
    this.BATCH_SIZE = 20;
  }
  constructor(vocabularyService, eventBus, modalController, themeService, settingsService) {
    this.vocabularyService = vocabularyService;
    this.eventBus = eventBus;
    this.modalController = modalController;
    this.themeService = themeService;
    this.settingsService = settingsService;
    this.searchQuery = "";
    this.vocabulary = [];
    this.showPracticeLevel = false;
    this.canLoadMore = false;
    this.offset = 0;
    this.eventBus.on(VocabularyAddedEvent.ID).subscribe(() => __async(this, null, function* () {
      this.offset = 0;
      this.vocabulary = [];
      yield this.loadVocabulary();
    }));
    this.eventBus.on(VocabularyUpdatedEvent.ID).subscribe(() => __async(this, null, function* () {
      this.offset = 0;
      this.vocabulary = [];
      yield this.loadVocabulary();
    }));
    this.eventBus.on(VocabularyImportedEvent.ID).subscribe(() => __async(this, null, function* () {
      this.offset = 0;
      this.vocabulary = [];
      yield this.loadVocabulary();
    }));
    addIcons({
      add,
      trash,
      schoolOutline,
      trendingUpOutline,
      checkmarkOutline,
      trophyOutline,
      rocketOutline
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadVocabulary();
    });
  }
  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor("#ffffff");
    this.showPracticeLevel = this.settingsService.getShowPracticeLevelInVocabularyList();
  }
  search(event) {
    return __async(this, null, function* () {
      console.log(event.detail.value);
      this.searchQuery = event.detail.value;
      if (!this.searchQuery) {
        this.offset = 0;
        this.vocabulary = [];
        yield this.loadVocabulary();
      } else {
        this.vocabulary = yield this.vocabularyService.search(this.searchQuery, _VocabularyListPageComponent.BATCH_SIZE);
        this.canLoadMore = false;
      }
    });
  }
  loadMore(event) {
    return __async(this, null, function* () {
      yield this.loadVocabulary();
      event.target.complete();
    });
  }
  deleteVocable(vocable) {
    return __async(this, null, function* () {
      yield this.vocabularyService.delete(vocable);
      this.vocabulary = this.vocabulary.filter((element) => element != vocable);
    });
  }
  editVocable(vocable) {
    return __async(this, null, function* () {
      this.openAddVocabularyComponent({ vocable });
    });
  }
  addVocable() {
    return __async(this, null, function* () {
      this.openAddVocabularyComponent();
    });
  }
  toIcon(vocable) {
    switch (vocable.practiceLevel) {
      case PracticeLevel.NewOrNeverCorrect:
        return "rocket-outline";
      case PracticeLevel.AtLeastOnceCorrect:
        return "school-outline";
      case PracticeLevel.Improving:
        return "trending-up-outline";
      case PracticeLevel.Good:
        return "checkmark-outline";
      case PracticeLevel.Excellent:
        return "trophy-outline";
    }
  }
  toColor(vocable) {
    switch (vocable.practiceLevel) {
      case PracticeLevel.NewOrNeverCorrect:
        return "var(--ion-color-medium)";
      case PracticeLevel.AtLeastOnceCorrect:
        return "var(--ion-color-warning)";
      case PracticeLevel.Improving:
        return "var(--ion-color-tertiary)";
      case PracticeLevel.Good:
        return "var(--ion-color-success)";
      case PracticeLevel.Excellent:
        return "var(--ion-color-success)";
    }
  }
  openAddVocabularyComponent() {
    return __async(this, arguments, function* (componentProps = {}) {
      const modal = yield this.modalController.create({
        component: AddVocabularyComponent,
        presentingElement: document.querySelector("ion-router-outlet"),
        componentProps
      });
      modal.onWillDismiss().then(() => {
        this.themeService.overwriteStatusBarColor("#ffffff");
      });
      this.themeService.overwriteStatusBarColor("#000000");
      modal.present();
    });
  }
  loadVocabulary() {
    return __async(this, null, function* () {
      const result = yield this.vocabularyService.load(this.offset, _VocabularyListPageComponent.BATCH_SIZE);
      this.offset += _VocabularyListPageComponent.BATCH_SIZE;
      this.vocabulary = this.vocabulary.concat(result);
      this.canLoadMore = result.length != 0;
    });
  }
  static {
    this.\u0275fac = function VocabularyListPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VocabularyListPageComponent)(\u0275\u0275directiveInject(VocabularyService), \u0275\u0275directiveInject(NgEventBus), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VocabularyListPageComponent, selectors: [["vt-vocabulary-list-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 3, consts: [[3, "translucent"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "add"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "voc-content"], ["debounce", "200", 3, "ionInput"], ["threshold", "100px", 3, "ionInfinite", "disabled"], [2, "height", "8px"], ["loadingSpinner", "bubbles", "loadingText", "Loading more..."], ["slot", "start", "size", "small", 3, "name", "style"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "start", "name", "trash"], ["slot", "start", "size", "small", 3, "name"]], template: function VocabularyListPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        \u0275\u0275text(3, "Vocabulary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-buttons", 1)(5, "ion-button", 2);
        \u0275\u0275listener("click", function VocabularyListPageComponent_Template_ion_button_click_5_listener() {
          return ctx.addVocable();
        });
        \u0275\u0275element(6, "ion-icon", 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(7, "ion-content", 4)(8, "ion-header", 5)(9, "ion-toolbar")(10, "ion-title", 6);
        \u0275\u0275text(11, "Vocabulary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7)(13, "ion-searchbar", 8);
        \u0275\u0275listener("ionInput", function VocabularyListPageComponent_Template_ion_searchbar_ionInput_13_listener($event) {
          return ctx.search($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "ion-list");
        \u0275\u0275repeaterCreate(15, VocabularyListPageComponent_For_16_Template, 12, 3, "ion-item-sliding", null, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ion-infinite-scroll", 9);
        \u0275\u0275listener("ionInfinite", function VocabularyListPageComponent_Template_ion_infinite_scroll_ionInfinite_17_listener($event) {
          return ctx.loadMore($event);
        });
        \u0275\u0275element(18, "ion-row", 10)(19, "ion-infinite-scroll-content", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("translucent", true);
        \u0275\u0275advance(7);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.vocabulary);
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("disabled", !ctx.canLoadMore);
      }
    }, dependencies: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonButton,
      IonIcon,
      IonContent,
      IonSearchbar,
      IonList,
      IonItemSliding,
      IonItem,
      IonLabel,
      IonItemOptions,
      IonItemOption,
      IonInfiniteScroll,
      IonRow,
      IonInfiniteScrollContent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VocabularyListPageComponent, { className: "VocabularyListPageComponent", filePath: "src\\app\\components\\vocabulary\\vocabulary-list\\vocabulary-list-page.component.ts", lineNumber: 68 });
})();

// src/app/components/vocabulary/vocabulary-tab.routes.ts
var ROUTES = [
  {
    path: "",
    component: VocabularyListPageComponent
  }
];
export {
  ROUTES
};
//# sourceMappingURL=vocabulary-tab.routes-CBJRNLUX.js.map
