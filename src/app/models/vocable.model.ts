import { PracticeLevel } from "./practice-level.model";

export interface IVocable {
    id?: number;
    foreignMeaning: string;
    nativeMeanings: string[];
    lastPracticed: number;
    wasCorrect: boolean;
    practicedCount: number;
    correctCount: number;
    practiceLevel: PracticeLevel;
    score: number;
}

export class Vocable implements IVocable {
    public id?: number;
    public foreignMeaning: string;
    public nativeMeanings: string[];
    public lastPracticed: number = 0;
    public wasCorrect: boolean = false;
    public practicedCount: number = 0;
    public correctCount: number = 0;
    public practiceLevel: PracticeLevel = PracticeLevel.NeverKnownOrPracticed;
    public score: number = 0;

    constructor(foreignMeaning: string, nativeMeanings: string[]) {
        this.foreignMeaning = foreignMeaning;
        this.nativeMeanings = nativeMeanings;
    }
}