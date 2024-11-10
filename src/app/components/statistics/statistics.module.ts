import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SatisticsPage } from './satistics/satistics.page';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar } from "@ionic/angular/standalone";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: SatisticsPage }]),
        StatisticsRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonProgressBar
    ],
    declarations: [SatisticsPage]
})
export class StatisticsModule { }
