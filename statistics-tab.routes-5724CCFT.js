import {
  takeUntilDestroyed
} from "./chunk-N2AOIVZF.js";
import {
  PracticeLevel
} from "./chunk-AKFMU4OS.js";
import {
  addIcons,
  checkmarkOutline,
  rocketOutline,
  schoolOutline,
  trendingUpOutline,
  trophyOutline
} from "./chunk-EYXWBQOK.js";
import {
  VocabularyService
} from "./chunk-BVL4TEAY.js";
import {
  VocabularyDB
} from "./chunk-KN5UXUNX.js";
import "./chunk-TMZJMPQV.js";
import {
  ThemeService
} from "./chunk-X6SODPWO.js";
import {
  ActivatedRoute,
  DatePipe,
  DecimalPipe,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRow,
  IonTitle,
  IonToolbar,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
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

// src/app/services/statistics.service.ts
var StatisticsService = class _StatisticsService {
  constructor(db) {
    this.db = db;
  }
  getVocabularyCount() {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.count();
    });
  }
  getVocabularyCountByPractiveLevel(praticeLevel) {
    return __async(this, null, function* () {
      return yield this.db.vocabulary.where("practiceLevel").equals(praticeLevel).count();
    });
  }
  static {
    this.\u0275fac = function StatisticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatisticsService)(\u0275\u0275inject(VocabularyDB));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatisticsService, factory: _StatisticsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/statistics/statistics-overview/statistics-overview-page.component.ts
var SatisticsOverviewPageComponent = class _SatisticsOverviewPageComponent {
  constructor(statisticsService, themeService, router) {
    this.statisticsService = statisticsService;
    this.themeService = themeService;
    this.router = router;
    this.vocabularyCount = 0;
    this.newOrNeverCorrectCount = 0;
    this.newOrNeverCorrectPercent = 0;
    this.atLeastOnceCorrectCount = 0;
    this.atLeastOnceCorrectPercent = 0;
    this.improvingCount = 0;
    this.improvingPercent = 0;
    this.goodCount = 0;
    this.goodPercent = 0;
    this.excellentCount = 0;
    this.excellentPercent = 0;
    this.praticeLevelEnum = PracticeLevel;
    addIcons({
      rocketOutline,
      schoolOutline,
      trendingUpOutline,
      checkmarkOutline,
      trophyOutline
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      this.themeService.overwriteStatusBarColor("#ffffff");
      yield this.loadStatistics();
    });
  }
  loadStatistics() {
    return __async(this, null, function* () {
      this.vocabularyCount = yield this.statisticsService.getVocabularyCount();
      this.newOrNeverCorrectCount = yield this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.NewOrNeverCorrect);
      this.newOrNeverCorrectPercent = this.newOrNeverCorrectCount / this.vocabularyCount * 100;
      this.atLeastOnceCorrectCount = yield this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.AtLeastOnceCorrect);
      this.atLeastOnceCorrectPercent = this.atLeastOnceCorrectCount / this.vocabularyCount * 100;
      this.improvingCount = yield this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Improving);
      this.improvingPercent = this.improvingCount / this.vocabularyCount * 100;
      this.goodCount = yield this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Good);
      this.goodPercent = this.goodCount / this.vocabularyCount * 100;
      this.excellentCount = yield this.statisticsService.getVocabularyCountByPractiveLevel(PracticeLevel.Excellent);
      this.excellentPercent = this.excellentCount / this.vocabularyCount * 100;
    });
  }
  showList(practiceLevel) {
    this.router.navigate(["statistics/level-list", practiceLevel]);
  }
  static {
    this.\u0275fac = function SatisticsOverviewPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SatisticsOverviewPageComponent)(\u0275\u0275directiveInject(StatisticsService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SatisticsOverviewPageComponent, selectors: [["vt-statistics-overview-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 33, consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "voc-content", "ion-padding-start", "ion-padding-end"], [2, "font-weight", "bold"], [1, "level-button", 3, "click"], [1, "level-header"], ["icon", "rocket-outline"], [3, "value"], ["icon", "school-outline"], ["icon", "trending-up-outline"], ["icon", "checkmark-outline"], ["icon", "trophy-outline"]], template: function SatisticsOverviewPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        \u0275\u0275text(3, "Statistics");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
        \u0275\u0275text(8, "Statistics");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275element(10, "br");
        \u0275\u0275elementStart(11, "p", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function SatisticsOverviewPageComponent_Template_button_click_13_listener() {
          return ctx.showList(ctx.praticeLevelEnum.NewOrNeverCorrect);
        });
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275element(15, "ion-icon", 8);
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "ion-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 6);
        \u0275\u0275listener("click", function SatisticsOverviewPageComponent_Template_button_click_20_listener() {
          return ctx.showList(ctx.praticeLevelEnum.AtLeastOnceCorrect);
        });
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275element(22, "ion-icon", 10);
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(26, "ion-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 6);
        \u0275\u0275listener("click", function SatisticsOverviewPageComponent_Template_button_click_27_listener() {
          return ctx.showList(ctx.praticeLevelEnum.Improving);
        });
        \u0275\u0275elementStart(28, "div", 7);
        \u0275\u0275element(29, "ion-icon", 11);
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "ion-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 6);
        \u0275\u0275listener("click", function SatisticsOverviewPageComponent_Template_button_click_34_listener() {
          return ctx.showList(ctx.praticeLevelEnum.Good);
        });
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275element(36, "ion-icon", 12);
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(40, "ion-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 6);
        \u0275\u0275listener("click", function SatisticsOverviewPageComponent_Template_button_click_41_listener() {
          return ctx.showList(ctx.praticeLevelEnum.Excellent);
        });
        \u0275\u0275elementStart(42, "div", 7);
        \u0275\u0275element(43, "ion-icon", 13);
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(47, "ion-progress-bar", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("translucent", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Total words: ", ctx.vocabularyCount, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" New or never correct: ", \u0275\u0275pipeBind2(18, 18, ctx.newOrNeverCorrectPercent, "1.0-0"), "% (", ctx.newOrNeverCorrectCount, " words) ");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.newOrNeverCorrectPercent / 100);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" At least once correct: ", \u0275\u0275pipeBind2(25, 21, ctx.atLeastOnceCorrectPercent, "1.0-0"), "% (", ctx.atLeastOnceCorrectCount, " words) ");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.atLeastOnceCorrectPercent / 100);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Improving: ", \u0275\u0275pipeBind2(32, 24, ctx.improvingPercent, "1.0-0"), "% (", ctx.improvingCount, " words) ");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.improvingPercent / 100);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Good: ", \u0275\u0275pipeBind2(39, 27, ctx.goodPercent, "1.0-0"), "% (", ctx.goodCount, " words)");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.goodPercent / 100);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("Excellent: ", \u0275\u0275pipeBind2(46, 30, ctx.excellentPercent, "1.0-0"), "% (", ctx.excellentCount, " words)");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.excellentPercent / 100);
      }
    }, dependencies: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonProgressBar, DecimalPipe], styles: ["\n\n.level-button[_ngcontent-%COMP%] {\n  all: unset;\n  width: 100%;\n}\n.level-header[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 16px;\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n/*# sourceMappingURL=statistics-overview-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SatisticsOverviewPageComponent, { className: "SatisticsOverviewPageComponent", filePath: "src\\app\\components\\statistics\\statistics-overview\\statistics-overview-page.component.ts", lineNumber: 26 });
})();

// src/app/components/statistics/level-list/level-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LevelListComponent_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vocable_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", vocable_r1.correctCount, " of ", vocable_r1.practicedCount, " correct (", \u0275\u0275pipeBind2(2, 5, 100 * vocable_r1.correctCount / vocable_r1.practicedCount, "1.0-0"), "%) ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Last time: ", vocable_r1.wasCorrect ? " correct \u2713" : "wrong \u2715", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("at ", \u0275\u0275pipeBind2(7, 8, vocable_r1.lastPracticed, "mediumDate"), "");
  }
}
function LevelListComponent_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function LevelListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-label", 5);
    \u0275\u0275template(7, LevelListComponent_For_8_Conditional_7_Template, 8, 11)(8, LevelListComponent_For_8_Conditional_8_Template, 2, 0, "p", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vocable_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vocable_r1.foreignMeaning);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vocable_r1.nativeMeanings.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vocable_r1.practicedCount > 0 ? 7 : 8);
  }
}
function LevelListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Nothing to show");
    \u0275\u0275elementEnd();
  }
}
function LevelListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-infinite-scroll", 7);
    \u0275\u0275listener("ionInfinite", function LevelListComponent_Conditional_10_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore($event));
    });
    \u0275\u0275element(1, "ion-row", 8)(2, "ion-infinite-scroll-content", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canLoadMore);
  }
}
var LevelListComponent = class _LevelListComponent {
  static {
    this.BATCH_SIZE = 20;
  }
  constructor(vocabularyService, route, themeService) {
    this.vocabularyService = vocabularyService;
    this.route = route;
    this.themeService = themeService;
    this.vocabulary = [];
    this.canLoadMore = false;
    this.offset = 0;
    this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => __async(this, null, function* () {
      this.praticeLevel = Number.parseInt(params.praticeLevel);
      this.offset = 0;
      this.vocabulary = [];
      yield this.loadBatch();
    }));
  }
  ionViewWillEnter() {
    this.themeService.overwriteStatusBarColor("#f7f7f7", "#0d0d0d");
  }
  loadMore(event) {
    return __async(this, null, function* () {
      yield this.loadBatch();
      event.target.complete();
    });
  }
  loadBatch() {
    return __async(this, null, function* () {
      const result = yield this.vocabularyService.loadForPracticeLevel(this.praticeLevel, this.offset, _LevelListComponent.BATCH_SIZE);
      this.offset += _LevelListComponent.BATCH_SIZE;
      this.vocabulary = this.vocabulary.concat(result);
      this.canLoadMore = result.length != 0;
    });
  }
  static {
    this.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelListComponent)(\u0275\u0275directiveInject(VocabularyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["vt-level-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [["slot", "start"], ["defaultHref", "/statistics"], [1, "voc-content"], [1, "ion-text-center"], ["threshold", "100px", 3, "disabled"], ["slot", "end"], [1, "ion-text-right"], ["threshold", "100px", 3, "ionInfinite", "disabled"], [2, "height", "8px"], ["loadingSpinner", "bubbles", "loadingText", "Loading more..."]], template: function LevelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        \u0275\u0275element(3, "ion-back-button", 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(4, "ion-content")(5, "div", 2)(6, "ion-list");
        \u0275\u0275repeaterCreate(7, LevelListComponent_For_8_Template, 9, 3, "ion-item", null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, LevelListComponent_Conditional_9_Template, 2, 0, "p", 3)(10, LevelListComponent_Conditional_10_Template, 3, 1, "ion-infinite-scroll", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.vocabulary);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.vocabulary.length === 0 ? 9 : 10);
      }
    }, dependencies: [
      IonButtons,
      IonBackButton,
      IonHeader,
      IonToolbar,
      IonContent,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonItem,
      IonList,
      IonLabel,
      IonRow,
      DecimalPipe,
      DatePipe
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "src\\app\\components\\statistics\\level-list\\level-list.component.ts", lineNumber: 45 });
})();

// src/app/components/statistics/statistics-tab.routes.ts
var ROUTES = [
  {
    path: "",
    component: SatisticsOverviewPageComponent
  },
  {
    path: "level-list/:praticeLevel",
    component: LevelListComponent
  }
];
export {
  ROUTES
};
//# sourceMappingURL=statistics-tab.routes-5724CCFT.js.map
