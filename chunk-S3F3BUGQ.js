import {
  Config,
  Meta,
  RendererFactory2,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CP2L26DD.js";

// src/app/models/theme.model.ts
var Theme;
(function(Theme2) {
  Theme2["System"] = "System";
  Theme2["Light"] = "Light";
  Theme2["Dark"] = "Dark";
})(Theme || (Theme = {}));

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  static {
    this.THEME_STORAGE_KEY = "theme";
  }
  constructor(rendererFactory, meta, config) {
    this.meta = meta;
    this.config = config;
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  initialize() {
    this.applyTheme(this.getTheme());
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (this.getTheme() === Theme.System) {
        if (event.matches) {
          this.applyTheme(Theme.Dark);
        } else {
          this.applyTheme(Theme.Light);
        }
      }
    });
  }
  getTheme() {
    return localStorage.getItem(_ThemeService.THEME_STORAGE_KEY) ?? Theme.System;
  }
  changeTheme(theme) {
    localStorage.setItem(_ThemeService.THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }
  overwriteStatusBarColor(colorLight, colorDark = "#000000") {
    if (this.config.get("mode") == "ios") {
      if (this.toFinalTheme(this.getTheme()) === Theme.Light) {
        this.meta.updateTag({ name: "theme-color", content: colorLight });
      } else {
        this.meta.updateTag({ name: "theme-color", content: colorDark });
      }
    }
  }
  applyTheme(theme) {
    const finalTheme = this.toFinalTheme(theme);
    if (finalTheme == Theme.Dark) {
      this.renderer.addClass(document.documentElement, "ion-palette-dark");
      this.renderer.removeClass(document.body, "light");
      this.renderer.addClass(document.body, "dark");
    } else {
      this.renderer.removeClass(document.documentElement, "ion-palette-dark");
      this.renderer.removeClass(document.body, "dark");
      this.renderer.addClass(document.body, "light");
    }
    if (this.config.get("mode") == "md") {
      this.meta.updateTag({ name: "theme-color", content: "#1976d2" });
    } else {
      if (finalTheme == Theme.Dark) {
        this.meta.updateTag({ name: "theme-color", content: "#000000" });
      } else {
        this.meta.updateTag({ name: "theme-color", content: "#ffffff" });
      }
    }
  }
  toFinalTheme(theme) {
    if (theme === Theme.System) {
      return this.detectSystemTheme();
    } else {
      return theme;
    }
  }
  detectSystemTheme() {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
    }
    return Theme.Light;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(Meta), \u0275\u0275inject(Config));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  Theme,
  ThemeService
};
//# sourceMappingURL=chunk-S3F3BUGQ.js.map
