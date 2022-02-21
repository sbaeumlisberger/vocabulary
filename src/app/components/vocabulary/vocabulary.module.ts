import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VocabularyListPage } from './vocabulary-list/list.page';

import { ListTabPageRoutingModule } from './vocabulary-routing.module';
import { AddVocabularyComponent } from './add-vocabulary/add-vocabulary.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListTabPageRoutingModule
  ],
  declarations: [VocabularyListPage, AddVocabularyComponent]
})
export class VocabularyModule {}
