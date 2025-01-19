import {
  takeUntilDestroyed
} from "./chunk-O6K5SIIW.js";
import {
  PracticeLevel
} from "./chunk-AKFMU4OS.js";
import {
  addIcons,
  arrowBackOutline,
  reload,
  syncOutline,
  thumbsDownOutline,
  thumbsUpOutline,
  volumeMediumOutline
} from "./chunk-EYXWBQOK.js";
import {
  SettingsService
} from "./chunk-QNHUYDKS.js";
import {
  VocabularyDB
} from "./chunk-GV3EGQ3X.js";
import "./chunk-WNLYU4NL.js";
import {
  ThemeService
} from "./chunk-TJTGV64S.js";
import {
  ActivatedRoute,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  RouterLink,
  filter,
  fromEvent,
  map,
  merge,
  of,
  switchMap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C5ATS23U.js";
import "./chunk-AGXZWMF6.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-2M3TSPED.js";
import "./chunk-XEGL7TSN.js";
import "./chunk-OHVQYIIL.js";
import "./chunk-OQQEQ4WG.js";
import "./chunk-WUN2RLLG.js";
import "./chunk-ETJZEDEK.js";
import "./chunk-AL2RTX4G.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-4WT7J3YM.js";
import "./chunk-6FFMTLXI.js";
import "./chunk-XIXT7DF6.js";
import "./chunk-CC56LK7W.js";
import "./chunk-K3HSXS64.js";
import {
  __async
} from "./chunk-UL2P3LPA.js";

// src/app/directives/long-press.directive.ts
var LongPressDirective = class _LongPressDirective {
  constructor(elementRef) {
    this.threshold = 1e3;
    this.vtLongPress = new EventEmitter();
    const mousedown = fromEvent(elementRef.nativeElement, "mousedown").pipe(filter((event) => event.button == 0), map(() => true));
    const mouseup = fromEvent(window, "mouseup").pipe(filter((event) => event.button == 0), map(() => false));
    const touchstart = fromEvent(elementRef.nativeElement, "touchstart").pipe(map(() => true));
    const touchEnd = fromEvent(elementRef.nativeElement, "touchend").pipe(map(() => false));
    this.subscription = merge(mousedown, mouseup, touchstart, touchEnd).pipe(switchMap((down) => down ? timer(this.threshold) : of(null)), filter((value) => value == 0)).subscribe(() => this.vtLongPress.emit());
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function LongPressDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LongPressDirective)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _LongPressDirective, selectors: [["", "vtLongPress", ""]], outputs: { vtLongPress: "vtLongPress" } });
  }
};

// src/app/utils/array.util.ts
var ArrayUtil = class {
  static randomizeOrder(array) {
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const j = Math.floor(Math.random() * array.length);
      array[i] = array[j];
      array[j] = value;
    }
  }
};

// src/app/services/practice.service.ts
var PracticeService = class _PracticeService {
  constructor(db) {
    this.db = db;
  }
  getVocabularyToPractice() {
    return __async(this, null, function* () {
      const _24hAgo = (/* @__PURE__ */ new Date()).getTime() - 24 * 60 * 60 * 1e3;
      const vocabulary = yield this.db.vocabulary.orderBy("score").filter((v) => v.lastPracticed < _24hAgo).limit(10).toArray();
      ArrayUtil.randomizeOrder(vocabulary);
      return vocabulary;
    });
  }
  reportCorrect(vocable) {
    return __async(this, null, function* () {
      if (vocable.id === void 0) {
        throw "vocable does not exist in database";
      }
      vocable.practicedCount++;
      vocable.correctCount++;
      vocable.lastPracticed = (/* @__PURE__ */ new Date()).getTime();
      vocable.wasCorrect = true;
      vocable.practiceLevel = this.calcPracticeLevel(vocable);
      vocable.score = this.calcScore(vocable);
      yield this.db.vocabulary.put(vocable);
    });
  }
  reportWrong(vocable) {
    return __async(this, null, function* () {
      if (vocable.id === void 0) {
        throw "vocable does not exist in database";
      }
      vocable.practicedCount++;
      vocable.lastPracticed = (/* @__PURE__ */ new Date()).getTime();
      vocable.wasCorrect = false;
      vocable.practiceLevel = this.calcPracticeLevel(vocable);
      vocable.score = this.calcScore(vocable);
      yield this.db.vocabulary.put(vocable);
    });
  }
  calcScore(vocable) {
    let score = 0;
    if (vocable.wasCorrect) {
      score += 100;
    }
    if (vocable.practicedCount > 0) {
      score += vocable.correctCount / Math.max(vocable.practicedCount, 5) * 200;
    }
    return score;
  }
  calcPracticeLevel(vocable) {
    const correntRate = vocable.correctCount / vocable.practicedCount;
    if (vocable.practicedCount >= 10 && correntRate > 0.9) {
      return PracticeLevel.Excellent;
    }
    if (vocable.practicedCount >= 5 && correntRate > 0.75) {
      return PracticeLevel.Good;
    }
    if (vocable.practicedCount >= 2 && correntRate > 0.5) {
      return PracticeLevel.Improving;
    }
    if (vocable.correctCount >= 1) {
      return PracticeLevel.AtLeastOnceCorrect;
    }
    return PracticeLevel.NewOrNeverCorrect;
  }
  static {
    this.\u0275fac = function PracticeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PracticeService)(\u0275\u0275inject(VocabularyDB));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PracticeService, factory: _PracticeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/practice/flashcards/practice.component.ts
var _c0 = (a0) => ({ height: a0 });
function PracticeComponent_Conditional_12_For_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function PracticeComponent_Conditional_12_For_4_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
}
function PracticeComponent_Conditional_12_For_4_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
}
function PracticeComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col");
    \u0275\u0275template(1, PracticeComponent_Conditional_12_For_4_Case_1_Template, 1, 0, "div", 18)(2, PracticeComponent_Conditional_12_For_4_Case_2_Template, 1, 0, "div", 19)(3, PracticeComponent_Conditional_12_For_4_Case_3_Template, 1, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const result_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = result_r2) === true ? 1 : tmp_13_0 === false ? 2 : 3);
  }
}
function PracticeComponent_Conditional_12_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 13)(2, "ion-button", 21);
    \u0275\u0275listener("click", function PracticeComponent_Conditional_12_Conditional_21_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rotateCard());
    });
    \u0275\u0275element(3, "ion-icon", 22);
    \u0275\u0275elementEnd()()();
  }
}
function PracticeComponent_Conditional_12_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 13)(2, "ion-button", 21);
    \u0275\u0275listener("click", function PracticeComponent_Conditional_12_Conditional_22_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markAsWrong());
    });
    \u0275\u0275element(3, "ion-icon", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-col", 13)(5, "ion-button", 21);
    \u0275\u0275listener("click", function PracticeComponent_Conditional_12_Conditional_22_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.markAsCorrect());
    });
    \u0275\u0275element(6, "ion-icon", 24);
    \u0275\u0275elementEnd()()();
  }
}
function PracticeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ion-grid", 8)(2, "ion-row");
    \u0275\u0275repeaterCreate(3, PracticeComponent_Conditional_12_For_4_Template, 4, 1, "ion-col", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9, 0);
    \u0275\u0275listener("resize", function PracticeComponent_Conditional_12_Template_div_resize_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(0);
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(7, "ion-card", 10, 0)(9, "ion-card-content", 11)(10, "ion-grid", 11)(11, "ion-row", 12)(12, "ion-col", 13)(13, "ion-label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-row", 14)(16, "ion-col", 13)(17, "ion-button", 15);
    \u0275\u0275listener("click", function PracticeComponent_Conditional_12_Template_ion_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.speak());
    })("vtLongPress", function PracticeComponent_Conditional_12_Template_ion_button_vtLongPress_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAutoSpeak());
    });
    \u0275\u0275element(18, "ion-icon", 16);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275element(19, "br");
    \u0275\u0275elementStart(20, "ion-grid", 17);
    \u0275\u0275template(21, PracticeComponent_Conditional_12_Conditional_21_Template, 4, 0, "ion-row")(22, PracticeComponent_Conditional_12_Conditional_22_Template, 7, 0, "ion-row");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const flashcard_r6 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.results);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(5, _c0, flashcard_r6.offsetWidth + "px"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(!ctx_r2.rotated ? ctx_r2.flashcardFrontText : ctx_r2.flashcardBackText);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx_r2.autoSpeak ? "primary" : "dark");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.rotated ? 21 : 22);
  }
}
function PracticeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h1", 25);
    \u0275\u0275text(2, "Finished!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-button", 27);
    \u0275\u0275element(7, "ion-icon", 28);
    \u0275\u0275elementStart(8, "ion-label", 29);
    \u0275\u0275text(9, "Back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-button", 30);
    \u0275\u0275listener("click", function PracticeComponent_Conditional_13_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.continuePractice());
    });
    \u0275\u0275element(11, "ion-icon", 31);
    \u0275\u0275elementStart(12, "ion-label", 29);
    \u0275\u0275text(13, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, ctx_r2.correctPercentage, "1.0-0"), "% correct ");
  }
}
var PracticeMode;
(function(PracticeMode2) {
  PracticeMode2["RANDOM"] = "random";
  PracticeMode2["FOREIGN_TO_NATIVE"] = "foreign-to-native";
  PracticeMode2["NATIVE_TO_FOREIGN"] = "native-to-foreign";
})(PracticeMode || (PracticeMode = {}));
var PracticeComponent = class _PracticeComponent {
  constructor(route, practiceService, settingsService, themeService) {
    this.route = route;
    this.practiceService = practiceService;
    this.settingsService = settingsService;
    this.themeService = themeService;
    this.flashcardFrontText = "";
    this.flashcardBackText = "";
    this.rotated = false;
    this.finished = false;
    this.results = [];
    this.correctPercentage = 0;
    this.autoSpeak = false;
    this.vocables = [];
    this.index = -1;
    this.foreignLanguage = this.settingsService.getForeignLanguage();
    this.nativeLanguage = this.settingsService.getNativeLanguage();
    this.flashcardFrontLanguage = this.nativeLanguage;
    this.flashcardBackLanguage = this.foreignLanguage;
    this.knownAbbreviations = [
      { abbreviation: "sth.", word: "something" },
      { abbreviation: "etw.", word: "etwas" },
      { abbreviation: "sb.", word: "somebody" },
      { abbreviation: "jdn.", word: "jemanden" }
    ];
    addIcons({
      syncOutline,
      thumbsDownOutline,
      thumbsUpOutline,
      arrowBackOutline,
      reload,
      volumeMediumOutline
    });
    this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => __async(this, null, function* () {
      if (params.mode !== this.mode) {
        this.mode = params.mode;
        yield this.loadVocabularyToPractice();
      }
    }));
  }
  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor("#f2f2f7");
    this.foreignLanguage = this.settingsService.getForeignLanguage();
    this.nativeLanguage = this.settingsService.getNativeLanguage();
  }
  ionViewWillLeave() {
    speechSynthesis.cancel();
  }
  rotateCard() {
    this.rotated = true;
    if (this.autoSpeak && this.flashcardBackLanguage == this.foreignLanguage) {
      this.speak();
    }
  }
  speak() {
    let text = this.rotated ? this.flashcardBackText : this.flashcardFrontText;
    this.knownAbbreviations.forEach((entry) => text = text.replaceAll(entry.abbreviation, entry.word));
    const language = this.rotated ? this.flashcardBackLanguage : this.flashcardFrontLanguage;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }
  toggleAutoSpeak() {
    this.autoSpeak = !this.autoSpeak;
  }
  markAsCorrect() {
    return __async(this, null, function* () {
      yield this.practiceService.reportCorrect(this.currentVocable);
      this.results[this.index] = true;
      this.showNext();
    });
  }
  markAsWrong() {
    return __async(this, null, function* () {
      yield this.practiceService.reportWrong(this.currentVocable);
      this.results[this.index] = false;
      this.showNext();
    });
  }
  continuePractice() {
    return __async(this, null, function* () {
      yield this.loadVocabularyToPractice();
    });
  }
  loadVocabularyToPractice() {
    return __async(this, null, function* () {
      this.vocables = yield this.practiceService.getVocabularyToPractice();
      if (this.vocables.length != 0) {
        this.index = -1;
        this.results = new Array(this.vocables.length);
        this.finished = false;
        this.showNext();
      } else {
        this.finished = true;
      }
    });
  }
  showNext() {
    if (this.index == this.vocables.length - 1) {
      this.finished = true;
      this.correctPercentage = this.results.filter((result) => result === true).length / this.results.length * 100;
    } else {
      this.index++;
      this.currentVocable = this.vocables[this.index];
      this.updateFlashcard();
      this.rotated = false;
      if (this.autoSpeak && this.flashcardFrontLanguage == this.foreignLanguage) {
        this.speak();
      }
    }
  }
  updateFlashcard() {
    let mode = this.mode;
    if (mode == PracticeMode.RANDOM) {
      mode = Math.random() >= 0.5 ? PracticeMode.FOREIGN_TO_NATIVE : PracticeMode.NATIVE_TO_FOREIGN;
    }
    switch (mode) {
      case PracticeMode.FOREIGN_TO_NATIVE:
        this.flashcardFrontText = this.currentVocable.foreignMeaning;
        this.flashcardBackText = this.currentVocable.nativeMeanings.join(", ");
        this.flashcardFrontLanguage = this.foreignLanguage;
        this.flashcardBackLanguage = this.nativeLanguage;
        break;
      case PracticeMode.NATIVE_TO_FOREIGN:
        this.flashcardFrontText = this.currentVocable.nativeMeanings.join(", ");
        this.flashcardBackText = this.currentVocable.foreignMeaning;
        this.flashcardFrontLanguage = this.nativeLanguage;
        this.flashcardBackLanguage = this.foreignLanguage;
        break;
    }
  }
  static {
    this.\u0275fac = function PracticeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PracticeComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PracticeService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PracticeComponent, selectors: [["vt-practice"]], decls: 14, vars: 3, consts: [["flashcard", ""], [3, "translucent"], ["slot", "start"], ["defaultHref", "/practice"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "voc-content"], [1, "ion-padding", 2, "max-width", "440px"], ["id", "flashcard", 3, "resize"], [2, "height", "100%", "margin-inline", "0px"], [2, "height", "100%"], [1, "ion-align-items-center", 2, "height", "70%"], [1, "ion-text-center"], [1, "ion-align-items-center"], ["fill", "clear", 3, "click", "vtLongPress", "color"], ["size", "large", "name", "volume-medium-outline"], [1, "ion-padding", 2, "max-width", "600px"], [1, "progressDot", 2, "background", "#2dd36f"], [1, "progressDot", 2, "background", "#eb445a"], [1, "progressDot", 2, "background", "#92949c"], ["fill", "clear", "color", "dark", 3, "click"], ["size", "large", "name", "sync-outline"], ["size", "large", "name", "thumbs-down-outline"], ["size", "large", "name", "thumbs-up-outline"], [2, "text-align", "center", "margin-top", "128px"], [2, "width", "100%", "text-align", "center", "margin-top", "128px"], ["routerLink", "/practice", 1, "stretchedButton", 2, "margin-top", "128px"], ["slot", "start", "name", "arrow-back-outline"], ["slot", "end"], [1, "stretchedButton", 2, "margin-top", "16px", 3, "click"], ["slot", "start", "name", "reload"]], template: function PracticeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
        \u0275\u0275text(3, "Practice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-buttons", 2);
        \u0275\u0275element(5, "ion-back-button", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "ion-content", 4)(7, "ion-header", 5)(8, "ion-toolbar")(9, "ion-title", 6);
        \u0275\u0275text(10, "Practice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275template(12, PracticeComponent_Conditional_12_Template, 23, 7, "div")(13, PracticeComponent_Conditional_13_Template, 14, 4, "div");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("translucent", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.finished ? 12 : 13);
      }
    }, dependencies: [
      IonButton,
      IonIcon,
      IonTitle,
      IonToolbar,
      IonContent,
      IonButtons,
      IonBackButton,
      IonRow,
      IonCol,
      IonLabel,
      IonGrid,
      IonCardContent,
      IonCard,
      IonHeader,
      LongPressDirective,
      DecimalPipe,
      RouterLink
    ], styles: ["\n\n.ios   body.light[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], \n.ios   body.light[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n}\n.progressDot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  margin: auto;\n}\n#flashcard[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 32px;\n  width: calc(100% - 128px);\n  max-width: 400px;\n}\n.stretchedButton[_ngcontent-%COMP%] {\n  display: block;\n  width: 80%;\n  max-width: 256px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=practice.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PracticeComponent, { className: "PracticeComponent", filePath: "src/app/components/practice/flashcards/practice.component.ts", lineNumber: 67 });
})();

// src/app/components/practice/overview/pratice-overview-page.component.ts
var _c02 = () => ["flashcards", "random"];
var _c1 = () => ["flashcards", "foreign-to-native"];
var _c2 = () => ["flashcards", "native-to-foreign"];
var PracticeOverviewPageComponent = class _PracticeOverviewPageComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor("#f2f2f7");
  }
  static {
    this.\u0275fac = function PracticeOverviewPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PracticeOverviewPageComponent)(\u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PracticeOverviewPageComponent, selectors: [["vt-pratice-overview-page"]], decls: 28, vars: 8, consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "voc-content"], ["routerDirection", "forward", 3, "routerLink"]], template: function PracticeOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        \u0275\u0275text(3, "Practice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
        \u0275\u0275text(8, "Practice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4)(10, "ion-card", 5)(11, "ion-card-header")(12, "ion-card-title");
        \u0275\u0275text(13, "Random");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "ion-card-content");
        \u0275\u0275text(15, " It is randomly chosen whether a word must be translated from the foreign language to the native language or vice versa. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "ion-card", 5)(17, "ion-card-header")(18, "ion-card-title");
        \u0275\u0275text(19, "Foreign to Native");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "ion-card-content");
        \u0275\u0275text(21, " All words must be translated from the foreign language into the native language. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "ion-card", 5)(23, "ion-card-header")(24, "ion-card-title");
        \u0275\u0275text(25, "Native to Foreign");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "ion-card-content");
        \u0275\u0275text(27, " All words must be translated from the native language into the foreign language. ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("translucent", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c02));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c2));
      }
    }, dependencies: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonCard,
      RouterLink,
      IonCardHeader,
      IonCardTitle,
      IonCardContent
    ], styles: ["\n\n.ios   body.light[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], \n.ios   body.light[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%], .ios   body.light   [_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #f2f2f7;\n}\n.md[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.md[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=pratice-overview-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PracticeOverviewPageComponent, { className: "PracticeOverviewPageComponent", filePath: "src/app/components/practice/overview/pratice-overview-page.component.ts", lineNumber: 31 });
})();

// src/app/components/practice/practice-tab.routes.ts
var ROUTES = [
  {
    path: "",
    component: PracticeOverviewPageComponent
  },
  {
    path: "flashcards/:mode",
    component: PracticeComponent
  }
];
export {
  ROUTES
};
//# sourceMappingURL=practice-tab.routes-SL2W5ADM.js.map
