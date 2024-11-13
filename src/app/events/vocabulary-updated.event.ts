import { IVocable } from '../models/vocable.model';

export class VocabularyUpdatedEvent {
  public static readonly ID = 'vocabulary:updated';

  constructor(public vocable: IVocable) {}
}
