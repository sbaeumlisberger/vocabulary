import { Injectable } from '@angular/core';
import Dexie from 'dexie'
import { IVocable } from '../models/vocable.model';

@Injectable({
    providedIn: 'root'
})
export class VocabularyDB extends Dexie {

    private static readonly DATABASE_NAME = "VocabularyDB";

    public vocabulary: Dexie.Table<IVocable, number>;

    public constructor() {
        super(VocabularyDB.DATABASE_NAME);

        // create database schema version 1
        this.version(1).stores({
            vocabulary: "++id,lastPracticed,practiceLevel,score"
        });

        // get access to vocabulary table
        this.vocabulary = this.table("vocabulary");
    }
}