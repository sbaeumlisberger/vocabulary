import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private static readonly SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY = "showPracticeLevelInVocabularyList";

  constructor(@Inject(LOCAL_STORAGE) private readonly storageService: StorageService) { }

  getShowPracticeLevelInVocabularyList(): boolean {
    return this.storageService.get(SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY) ?? false;
  }

  setShowPracticeLevelInVocabularyList(value: boolean) {
    return this.storageService.set(SettingsService.SHOW_PRATICE_LEVEL_IN_VOCABULARY_LIST_KEY, value);
  }

}
