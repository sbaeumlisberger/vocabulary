import { Injectable } from '@angular/core';
import Dexie from 'dexie'
import { IVocable } from '../models/vocable.model';

@Injectable({
    providedIn: 'root'
})
export class VocabularyDB extends Dexie {

    public vocabulary: Dexie.Table<IVocable, number>;

    public constructor() {
        super("VocabularyDB");
        this.version(1).stores({
            vocabulary: "++id,lastPracticed,practiceLevel,score"
        });
        this.vocabulary = this.table("vocabulary");
    }
}