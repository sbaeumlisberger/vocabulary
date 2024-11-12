import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PraticeOverviewPage } from './overview/pratice-overview.page';

import { Tab2PageRoutingModule } from './practice-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel, IonIcon, IonButton, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Tab2PageRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonCard,
        IonCardContent,
        IonLabel,
        IonIcon,
        IonButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent
    ],
    declarations: [PraticeOverviewPage]
})
export class PracticeModule { }
