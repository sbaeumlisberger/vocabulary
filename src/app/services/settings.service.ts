import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private static readonly SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY = 'showPracticeLevelInVocabularyList';
  private static readonly FOREIGN_LANGUAGE_KEY = 'foreignLanguage';
  private static readonly NATIVE_LANGUAGE_KEY = 'nativeLanguage';

  constructor(@Inject(LOCAL_STORAGE) private readonly storageService: StorageService) {}

  getShowPracticeLevelInVocabularyList(): boolean {
    return this.storageService.get(SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY) ?? false;
  }

  setShowPracticeLevelInVocabularyList(value: boolean) {
    return this.storageService.set(SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY, value);
  }

  getForeignLanguage(): string {
    return this.storageService.get(SettingsService.FOREIGN_LANGUAGE_KEY) ?? 'en-GB';
  }

  setForeignLanguage(value: string) {
    return this.storageService.set(SettingsService.FOREIGN_LANGUAGE_KEY, value);
  }

  getNativeLanguage(): string {
    return this.storageService.get(SettingsService.NATIVE_LANGUAGE_KEY) ?? 'de-DE';
  }

  setNativeLanguage(value: string) {
    return this.storageService.set(SettingsService.NATIVE_LANGUAGE_KEY, value);
  }
}
