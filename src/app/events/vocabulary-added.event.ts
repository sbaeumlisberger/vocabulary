import { IVocable } from "../models/vocable.model";

export class VocabularyAddedEvent {

    public static readonly ID = "vocabulary:added";

    constructor(public vocable: IVocable){}
    
}