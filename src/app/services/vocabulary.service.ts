import { Injectable } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { VocabularyAddedEvent } from '../events/vocabulary-added.event';
import { VocabularyImportedEvent } from '../events/vocabulary-imported.event';
import { VocabularyUpdatedEvent } from '../events/vocabulary-updated.event';
import { PracticeLevel } from '../models/practice-level.model';
import { IVocable } from '../models/vocable.model';
import { Vocable } from '../models/vocable.model'
import { VocabularyDB } from '../persistence/vocabulary-db';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor(private db: VocabularyDB, private eventBus: NgEventBus) { }

  async getAll() {
    return await this.db.vocabulary.toArray();
  }

  async count(): Promise<number> {
    return await this.db.vocabulary.count();
  }

  async load(offset: number, limit: number): Promise<IVocable[]> {
    return await this.db.vocabulary.reverse().offset(offset).limit(limit).toArray();
  }

  async search(query: string, limit: number = 10): Promise<IVocable[]> {
    query = query.toLowerCase();
    return await this.db.vocabulary.filter(v => v.foreignMeaning.toLowerCase().includes(query) || !!v.nativeMeanings.find(nm => nm.toLowerCase().includes(query))).limit(limit).toArray();
  }

  async add(vocable: IVocable): Promise<void> {
    await this.db.vocabulary.add(vocable)
    this.eventBus.cast(VocabularyAddedEvent.ID, new VocabularyAddedEvent(vocable));
  }

  async update(vocable: IVocable): Promise<void> {
    if (vocable.id === undefined) {
      throw "vocable does not exist in database";
    }
    await this.db.vocabulary.put(vocable);
    this.eventBus.cast(VocabularyUpdatedEvent.ID, new VocabularyUpdatedEvent(vocable));
  }

  async delete(vocable: IVocable): Promise<void> {
    if (vocable.id === undefined) {
      throw "vocable does not exist in database";
    }
    await this.db.vocabulary.delete(vocable.id);
  }

  async deleteAll(): Promise<void> {
    await this.db.vocabulary.clear();
  }

  async import(vocabulary: IVocable[]): Promise<void> {
    await this.db.vocabulary.bulkPut(vocabulary);    
    this.eventBus.cast(VocabularyImportedEvent.ID, new VocabularyImportedEvent());
  }

}
