import {
  ReminderService,
  ServiceWorkerModule,
  UpdateService
} from "./chunk-ZENDF3DI.js";
import "./chunk-547I2RLP.js";
import {
  NgEventBus
} from "./chunk-TMZJMPQV.js";
import {
  ThemeService
} from "./chunk-X6SODPWO.js";
import {
  IonApp,
  IonRouterOutlet,
  IonicRouteStrategy,
  RouteReuseStrategy,
  bootstrapApplication,
  enableProdMode,
  importProvidersFrom,
  provideIonicAngular,
  provideRouter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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

// src/environments/environment.ts
var environment = {
  production: false
};

// src/app/app-routes.ts
var ROUTES = [
  {
    path: "",
    loadChildren: () => import("./tabs-routes-KBY2CYNU.js").then((m) => m.ROUTES)
  }
];

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(reminderService, themeService, updateService) {
    this.reminderService = reminderService;
    themeService.initialize();
    updateService.startCheckForUpdates();
  }
  ngOnInit() {
    this.reminderService.initialize();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(UpdateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["vt-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-app");
        \u0275\u0275element(1, "ion-router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [IonApp, IonRouterOutlet] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 14 });
})();

// src/main.ts
if (environment.production) {
  enableProdMode();
}
window.history.pushState = window.history.replaceState;
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerImmediately"
    })),
    provideIonicAngular(),
    provideRouter(ROUTES),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NgEventBus
  ]
}).catch((err) => console.log(err));
//# sourceMappingURL=main.js.map
