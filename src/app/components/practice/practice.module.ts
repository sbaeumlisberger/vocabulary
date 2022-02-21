import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PraticeOverviewPage } from './overview/pratice-overview.page';

import { Tab2PageRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './flashcards/practice.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [PraticeOverviewPage, PracticeComponent]
})
export class PracticeModule {}
