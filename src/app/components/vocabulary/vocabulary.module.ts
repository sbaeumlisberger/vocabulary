import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VocabularyListPage } from './vocabulary-list/vocabulary-list.page';

import { ListTabPageRoutingModule } from './vocabulary-routing.module';
import { AddVocabularyComponent } from './add-vocabulary/add-vocabulary.component';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonSearchbar, IonItemSliding, IonItemOptions, IonItemOption, IonInfiniteScroll, IonRow, IonInfiniteScrollContent } from "@ionic/angular/standalone";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListTabPageRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonIcon,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonContent,
        IonSearchbar,
        IonList,
        IonItemSliding,
        IonItem,
        IonLabel,
        IonItemOptions,
        IonItemOption,
        IonInfiniteScroll,
        IonRow,
        IonInfiniteScrollContent
    ],
    declarations: [VocabularyListPage, AddVocabularyComponent]
})
export class VocabularyModule { }
