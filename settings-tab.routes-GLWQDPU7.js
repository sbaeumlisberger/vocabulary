import {
  SettingsService
} from "./chunk-4N2IAORW.js";
import {
  VocabularyService
} from "./chunk-BVL4TEAY.js";
import "./chunk-KN5UXUNX.js";
import {
  ReminderService,
  UpdateService
} from "./chunk-ZENDF3DI.js";
import "./chunk-547I2RLP.js";
import "./chunk-TMZJMPQV.js";
import {
  Theme,
  ThemeService
} from "./chunk-X6SODPWO.js";
import {
  AlertController,
  FormsModule,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XVSWVG7T.js";
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

// src/app/components/settings/settings/settings.component.ts
var _c0 = () => ({ subHeader: "More languages can be installed in your browser settings" });
function SettingsComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r1 = ctx.$implicit;
    \u0275\u0275property("value", theme_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", theme_r1, " ");
  }
}
function SettingsComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r2 = ctx.$implicit;
    \u0275\u0275property("value", language_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", language_r2, " ");
  }
}
function SettingsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r3 = ctx.$implicit;
    \u0275\u0275property("value", language_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", language_r3, " ");
  }
}
function SettingsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 18);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_40_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleReminderTimePicker());
    });
    \u0275\u0275elementStart(1, "ion-label");
    \u0275\u0275text(2, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("color", ctx_r4.showReminderTimePicker ? "primary" : "dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r4.reminderTime, " ");
  }
}
function SettingsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 20);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_41_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.reminderTime, $event) || (ctx_r4.reminderTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SettingsComponent_Conditional_41_Template_ion_datetime_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReminderTimeChanged());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.reminderTime);
  }
}
function SettingsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner");
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(vocabularyService, themeService, alertController, reminderService, updateService, settingsService) {
    this.vocabularyService = vocabularyService;
    this.themeService = themeService;
    this.alertController = alertController;
    this.reminderService = reminderService;
    this.updateService = updateService;
    this.settingsService = settingsService;
    this.themes = Object.values(Theme);
    this.selectedTheme = this.themeService.getTheme();
    this.showPracticeLevelInVocabularyList = this.settingsService.getShowPracticeLevelInVocabularyList();
    this.languages = new Set(speechSynthesis.getVoices().map((voice) => voice.lang));
    this.foreignLanguage = this.settingsService.getForeignLanguage();
    this.nativeLanguage = this.settingsService.getNativeLanguage();
    this.reminderEnabled = this.reminderService.isReminderEnabled();
    this.reminderTime = this.formatTime(this.reminderService.getReminderTime());
    this.showReminderTimePicker = false;
    this.checkingForUpdate = false;
    const onvoiceschanged = () => {
      this.languages = new Set(speechSynthesis.getVoices().map((voice) => voice.lang));
      speechSynthesis.removeEventListener("voiceschanged", onvoiceschanged);
    };
    speechSynthesis.addEventListener("voiceschanged", onvoiceschanged);
  }
  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor("#f2f2f7");
  }
  import(event) {
    return __async(this, null, function* () {
      const files = event.target.files;
      if (files.length == 1) {
        try {
          const vocabulary = JSON.parse(yield files.item(0).text());
          this.vocabularyService.deleteAll();
          this.vocabularyService.import(vocabulary);
          const alert = yield this.alertController.create({
            header: "Import completed",
            message: "Vocabulary was successfully imported.",
            buttons: ["OK"]
          });
          alert.present();
        } catch (err) {
          const alert = yield this.alertController.create({
            header: "Import failed",
            message: "Could not import vocabulary. " + err,
            buttons: ["OK"]
          });
          alert.present();
        }
      }
    });
  }
  export() {
    return __async(this, null, function* () {
      const vocabulary = yield this.vocabularyService.getAll();
      const blob = new Blob([JSON.stringify(vocabulary)], {
        type: "application/json"
      });
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = "vocabulary.json";
      a.click();
    });
  }
  onThemeChanged() {
    this.themeService.changeTheme(this.selectedTheme);
    this.themeService.overwriteStatusBarColor("#f2f2f7");
  }
  onShowPracticeLevelInVocabularyListChanged() {
    this.settingsService.setShowPracticeLevelInVocabularyList(this.showPracticeLevelInVocabularyList);
  }
  onForeignLanguageChanged() {
    this.settingsService.setForeignLanguage(this.foreignLanguage);
  }
  onNativeLanguageChanged() {
    this.settingsService.setNativeLanguage(this.nativeLanguage);
  }
  onReminderEnabledChanged() {
    return __async(this, null, function* () {
      if (this.reminderEnabled) {
        if (window.Notification) {
          yield Notification.requestPermission();
          const reminderTimeParts = this.reminderTime.split(":");
          const hours = Number.parseInt(reminderTimeParts[0]);
          const minutes = Number.parseInt(reminderTimeParts[1]);
          this.reminderService.enableReminder({ hours, minutes });
        } else {
          const alert = yield this.alertController.create({
            header: "Not supported",
            message: "Unfortunately, this function is not supported by your device.",
            buttons: ["OK"]
          });
          alert.present();
          this.reminderEnabled = false;
        }
      } else {
        this.reminderService.disableReminder();
      }
    });
  }
  onReminderTimeChanged() {
    const reminderTimeParts = this.reminderTime.split(":");
    const hours = Number.parseInt(reminderTimeParts[0]);
    const minutes = Number.parseInt(reminderTimeParts[1]);
    this.reminderService.scheduleReminder({ hours, minutes });
  }
  toggleReminderTimePicker() {
    this.showReminderTimePicker = !this.showReminderTimePicker;
  }
  checkForUpdate() {
    return __async(this, null, function* () {
      this.checkingForUpdate = true;
      const updateFound = yield this.updateService.checkForUpdate();
      this.checkingForUpdate = false;
      if (!updateFound) {
        const alert = yield this.alertController.create({
          header: "No update found",
          buttons: ["OK"]
        });
        alert.present();
      }
    });
  }
  formatTime(time) {
    return time.hours.toString().padStart(2, "0") + ":" + time.minutes.toString().padStart(2, "0");
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(VocabularyService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(UpdateService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["vt-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 14, consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "voc-content"], ["inset", "true", "lines", "none"], ["button", "true"], ["type", "file", "accept", ".json", "id", "import", 3, "change"], ["button", "true", 3, "click"], ["label", "Theme", "interface", "popover", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "ngModel"], ["label", "Foreign language", 3, "ngModelChange", "ngModel", "interfaceOptions"], ["label", "Native language", 3, "ngModelChange", "ngModel", "interfaceOptions"], ["button", "true", "detail", "false"], ["size", "cover", "presentation", "time", "hourCycle", "h23", "color", "primary", 2, "--background", "medium", 3, "ngModel"], ["lines", "none", 3, "click"], ["lines", "none"], ["button", "true", "detail", "false", 3, "click"], [2, "padding-right", "4px", 3, "color"], ["size", "cover", "presentation", "time", "hourCycle", "h23", "color", "primary", 2, "--background", "medium", 3, "ngModelChange", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
        \u0275\u0275text(8, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "ion-list", 5)(11, "ion-item", 6)(12, "ion-label");
        \u0275\u0275text(13, "Import");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 7);
        \u0275\u0275listener("change", function SettingsComponent_Template_input_change_14_listener($event) {
          return ctx.import($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "ion-item", 8);
        \u0275\u0275listener("click", function SettingsComponent_Template_ion_item_click_15_listener() {
          return ctx.export();
        });
        \u0275\u0275elementStart(16, "ion-label");
        \u0275\u0275text(17, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "ion-list", 5)(19, "ion-item")(20, "ion-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTheme, $event) || (ctx.selectedTheme = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_20_listener() {
          return ctx.onThemeChanged();
        });
        \u0275\u0275repeaterCreate(21, SettingsComponent_For_22_Template, 2, 2, "ion-select-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "ion-list", 5)(24, "ion-item")(25, "ion-toggle", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_toggle_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showPracticeLevelInVocabularyList, $event) || (ctx.showPracticeLevelInVocabularyList = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_ion_toggle_ngModelChange_25_listener() {
          return ctx.onShowPracticeLevelInVocabularyListChanged();
        });
        \u0275\u0275text(26, " Show practice level in list ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "ion-list", 5)(28, "ion-item")(29, "ion-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.foreignLanguage, $event) || (ctx.foreignLanguage = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_29_listener() {
          return ctx.onForeignLanguageChanged();
        });
        \u0275\u0275repeaterCreate(30, SettingsComponent_For_31_Template, 2, 2, "ion-select-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "ion-item")(33, "ion-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nativeLanguage, $event) || (ctx.nativeLanguage = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_ion_select_ngModelChange_33_listener() {
          return ctx.onNativeLanguageChanged();
        });
        \u0275\u0275repeaterCreate(34, SettingsComponent_For_35_Template, 2, 2, "ion-select-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "ion-list", 5)(37, "ion-item")(38, "ion-toggle", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_toggle_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.reminderEnabled, $event) || (ctx.reminderEnabled = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_ion_toggle_ngModelChange_38_listener() {
          return ctx.onReminderEnabledChanged();
        });
        \u0275\u0275text(39, " Daily reminder ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, SettingsComponent_Conditional_40_Template, 5, 2, "ion-item", 14)(41, SettingsComponent_Conditional_41_Template, 1, 1, "ion-datetime", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ion-list", 5)(43, "ion-item", 16);
        \u0275\u0275listener("click", function SettingsComponent_Template_ion_item_click_43_listener() {
          return ctx.checkForUpdate();
        });
        \u0275\u0275elementStart(44, "ion-label");
        \u0275\u0275text(45, "Vocabulary - Version 1.2.0");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, SettingsComponent_Conditional_46_Template, 1, 0, "ion-spinner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ion-item", 17)(48, "ion-label");
        \u0275\u0275text(49, "\xA9 Sebastian B\xE4umlisberger");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("translucent", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedTheme);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.themes);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.showPracticeLevelInVocabularyList);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.foreignLanguage);
        \u0275\u0275property("interfaceOptions", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.languages);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.nativeLanguage);
        \u0275\u0275property("interfaceOptions", \u0275\u0275pureFunction0(13, _c0));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.languages);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.reminderEnabled);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.reminderEnabled ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.reminderEnabled && ctx.showReminderTimePicker ? 41 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.checkingForUpdate ? 46 : -1);
      }
    }, dependencies: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonSelect,
      FormsModule,
      NgControlStatus,
      NgModel,
      IonSelectOption,
      IonToggle,
      IonText,
      IonDatetime,
      IonSpinner
    ], styles: ["\n\n.ios   body.dark[_nghost-%COMP%], .ios   body.dark   [_nghost-%COMP%] {\n  --ion-item-background: #1c1c1d;\n}\n.ios   body.light[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], \n.ios   body.light[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n}\n.md   body.light[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%], .md   body.light   [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.md   body.light[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%], .md   body.light   [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f8f8f8;\n}\n.md[_nghost-%COMP%]   .themeLabel[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .themeLabel[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.md[_nghost-%COMP%]   ion-toggle[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  padding-right: 6px;\n}\n#import[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\components\\settings\\settings\\settings.component.ts", lineNumber: 51 });
})();

// src/app/components/settings/settings-tab.routes.ts
var ROUTES = [
  {
    path: "",
    component: SettingsComponent
  }
];
export {
  ROUTES
};
//# sourceMappingURL=settings-tab.routes-GLWQDPU7.js.map
