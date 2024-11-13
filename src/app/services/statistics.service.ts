import { Injectable } from '@angular/core';
import { PracticeLevel } from '../models/practice-level.model';
import { VocabularyDB } from '../persistence/vocabulary-db';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private db: VocabularyDB) {}

  async getVocabularyCount(): Promise<number> {
    return await this.db.vocabulary.count();
  }

  async getVocabularyCountByPractiveLevel(praticeLevel: PracticeLevel): Promise<number> {
    return await this.db.vocabulary.where('practiceLevel').equals(praticeLevel).count();
  }
}
