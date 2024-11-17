import {
  addIcons,
  cogOutline,
  listOutline,
  schoolOutline,
  statsChartOutline
} from "./chunk-EYXWBQOK.js";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
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
import "./chunk-UL2P3LPA.js";

// src/app/components/tabs/tabs.component.ts
var TabsComponent = class _TabsComponent {
  constructor() {
    addIcons({ listOutline, schoolOutline, statsChartOutline, cogOutline });
  }
  static {
    this.\u0275fac = function TabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TabsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsComponent, selectors: [["vt-tabs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [["slot", "bottom"], ["tab", "vocabulary"], ["name", "list-outline"], ["tab", "practice"], ["name", "school-outline"], ["tab", "statistics"], ["name", "stats-chart-outline"], ["tab", "settings"], ["name", "cog-outline"]], template: function TabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
        \u0275\u0275element(3, "ion-icon", 2);
        \u0275\u0275elementStart(4, "ion-label");
        \u0275\u0275text(5, "List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "ion-tab-button", 3);
        \u0275\u0275element(7, "ion-icon", 4);
        \u0275\u0275elementStart(8, "ion-label");
        \u0275\u0275text(9, "Practice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "ion-tab-button", 5);
        \u0275\u0275element(11, "ion-icon", 6);
        \u0275\u0275elementStart(12, "ion-label");
        \u0275\u0275text(13, "Statistic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "ion-tab-button", 7);
        \u0275\u0275element(15, "ion-icon", 8);
        \u0275\u0275elementStart(16, "ion-label");
        \u0275\u0275text(17, "Settings");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsComponent, { className: "TabsComponent", filePath: "src\\app\\components\\tabs\\tabs.component.ts", lineNumber: 13 });
})();

// src/app/components/tabs/tabs-routes.ts
var ROUTES = [
  {
    path: "",
    redirectTo: "/vocabulary",
    pathMatch: "full"
  },
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "vocabulary",
        loadChildren: () => import("./vocabulary-tab.routes-UMY4AE4K.js").then((m) => m.ROUTES)
      },
      {
        path: "practice",
        loadChildren: () => import("./practice-tab.routes-6VPCPBQF.js").then((m) => m.ROUTES)
      },
      {
        path: "statistics",
        loadChildren: () => import("./statistics-tab.routes-5724CCFT.js").then((m) => m.ROUTES)
      },
      {
        path: "settings",
        loadChildren: () => import("./settings-tab.routes-GLWQDPU7.js").then((m) => m.ROUTES)
      }
    ]
  }
];
export {
  ROUTES
};
//# sourceMappingURL=tabs-routes-KBY2CYNU.js.map
