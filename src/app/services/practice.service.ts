import { Injectable } from '@angular/core';
import { PracticeLevel } from '../models/practice-level.model';
import { IVocable } from '../models/vocable.model';
import { VocabularyDB } from '../persistence/vocabulary-db';
import { ArrayUtil } from '../utils/array.util';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private db: VocabularyDB) { }

  async getVocabularyToPractice(): Promise<IVocable[]> {
    let _24hAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
    let vocabulary = await this.db.vocabulary.orderBy("score").filter(v => v.lastPracticed < _24hAgo).limit(10).toArray();
    ArrayUtil.randomizeOrder(vocabulary);
    return vocabulary;
  }

  async reportCorrect(vocable: IVocable) {
    if (vocable.id === undefined) {
      throw "vocable does not exist in database";
    }
    vocable.practicedCount++;
    vocable.correctCount++;
    vocable.lastPracticed = new Date().getTime();
    vocable.wasCorrect = true;
    vocable.practiceLevel = this.calcPracticeLevel(vocable);
    vocable.score = this.calcScore(vocable);
    await this.db.vocabulary.put(vocable);
  }

  async reportWrong(vocable: IVocable) {
    if (vocable.id === undefined) {
      throw "vocable does not exist in database";
    }
    vocable.practicedCount++;
    vocable.lastPracticed = new Date().getTime();
    vocable.wasCorrect = false;
    vocable.practiceLevel = this.calcPracticeLevel(vocable);
    vocable.score = this.calcScore(vocable);
    await this.db.vocabulary.put(vocable);
  }

  private calcScore(vocable: IVocable): number {
    let score = 0;
    if (vocable.wasCorrect) {
      score += 100;
    }
    if (vocable.practicedCount > 0) {
      score += (vocable.correctCount / Math.max(vocable.practicedCount, 5)) * 200
    }
    return score;
  }

  private calcPracticeLevel(vocable: IVocable): PracticeLevel {
    let correntRate = vocable.correctCount / vocable.practicedCount;
    if (vocable.practicedCount >= 10 && correntRate > 0.9) {
      return PracticeLevel.VeryGood;
    }
    if (vocable.practicedCount >= 5 && correntRate > 0.75) {
      return PracticeLevel.Good;
    }
    if (vocable.practicedCount >= 2 && correntRate > 0.5) {
      return PracticeLevel.OnTheRightTrack;
    }
    if (vocable.correctCount >= 1) {
      return PracticeLevel.AtLeastOnceKnown;
    }
    return PracticeLevel.NeverKnownOrPracticed;
  }

}
