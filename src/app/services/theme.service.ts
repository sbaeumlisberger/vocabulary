import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Config } from '@ionic/angular';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private static readonly THEME_STORAGE_KEY = "theme";

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, private meta: Meta, private config: Config) {
    // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initialize() {
    this.applyTheme(this.getTheme());

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
      if (this.getTheme() === Theme.System) {
        if (event.matches) {
          this.applyTheme(Theme.Dark);
        }
        else {
          this.applyTheme(Theme.Light);
        }
      }
    });
  }



  getTheme() {
    return localStorage.getItem(ThemeService.THEME_STORAGE_KEY) as Theme ?? Theme.System;
  }

  changeTheme(theme: Theme) {
    localStorage.setItem(ThemeService.THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  overwriteStatusBarColor(colorLight: string, colorDark: string = '#000000') {
    if (this.config.get('mode') == 'ios') {
      if (this.toFinalTheme(this.getTheme()) === Theme.Light) {
        this.meta.updateTag({ name: 'theme-color', content: colorLight });
      }
      else {
        this.meta.updateTag({ name: 'theme-color', content: colorDark });
      }
    }
  }

  private applyTheme(theme: Theme) {
    let themeClass = this.toFinalTheme(theme).toLocaleLowerCase();

    this.renderer.removeClass(document.body, themeClass === 'dark' ? 'light' : 'dark');
    this.renderer.addClass(document.body, themeClass);

    if (this.config.get('mode') == 'md') {
      this.meta.updateTag({ name: 'theme-color', content: '#1976d2' });
    }
    else {
      if (themeClass == 'dark') {
        this.meta.updateTag({ name: 'theme-color', content: '#000000' });
      }
      else {
        this.meta.updateTag({ name: 'theme-color', content: '#ffffff' });
      }
    }
  }

  private toFinalTheme(theme: Theme) {
    if (theme === Theme.System) {
      return this.detectSystemTheme();
    }
    else {
      return theme;
    }
  }

  private detectSystemTheme(): Theme {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set theme to dark if prefers-color-scheme is dark. Otherwise set to light.
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
    }
    // If the browser doesn't support prefers-color-scheme, the light theme is used    
    return Theme.Light;
  }

}