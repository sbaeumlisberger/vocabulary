import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IVocable, Vocable } from 'src/app/models/vocable.model';
import { VocabularyService } from 'src/app/services/vocabulary.service';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.component.html',
  styleUrls: ['./add-vocabulary.component.scss'],
})
export class AddVocabularyComponent implements OnInit {

  vocable?: IVocable;

  isEdit: boolean = false;

  foreignMeaning: string = "";

  nativeMeanings: { value: string }[] = [{ value: "" }];

  constructor(private vocabularyService: VocabularyService, private modalController: ModalController) {}

  ngOnInit(): void {
    if (this.vocable) {
      this.isEdit = true;
      this.foreignMeaning = this.vocable.foreignMeaning;
      this.nativeMeanings = this.vocable.nativeMeanings.map(nm => { return { value: nm } });
    }
  }

  async addNativeMeaning() {
    this.nativeMeanings.push({ value: "" });
    let textField: HTMLElement | null = null;
    let i = 0;
    while (textField == null && i < 10) {
      await new Promise(resolve => setTimeout(resolve, 10));
      textField = document.getElementById("nativeMeaning" + (this.nativeMeanings.length - 1));
      i++;
    }
    textField?.focus();
  }

  cancel(): void {
    this.modalController.dismiss();
  }

  save(): void {
    let foreignMeaning = this.foreignMeaning.trim();
    let nativeMeanings = this.nativeMeanings.map(nm => nm.value.trim()).filter(value => value !== "");
    if (foreignMeaning !== "" && nativeMeanings.length >= 1) {
      if (this.vocable) {
        this.vocable.foreignMeaning = foreignMeaning;
        this.vocable.nativeMeanings = nativeMeanings;
        this.vocabularyService.update(this.vocable);
        this.modalController.dismiss();
      }
      else {
        this.vocabularyService.add(new Vocable(foreignMeaning, nativeMeanings));
        this.modalController.dismiss();
      }
    }
  }
}
