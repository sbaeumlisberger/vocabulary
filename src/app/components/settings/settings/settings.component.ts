import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ViewWillEnter,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonText,
  IonDatetime,
  IonSpinner,
} from '@ionic/angular/standalone';
import { Theme } from 'src/app/models/theme.model';
import { Vocable } from 'src/app/models/vocable.model';
import { ReminderService } from 'src/app/services/reminder.service';
import { SettingsService } from 'src/app/services/settings.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UpdateService } from 'src/app/services/update.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'vt-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    FormsModule,
    IonSelectOption,
    IonToggle,
    IonText,
    IonDatetime,
    IonSpinner,
  ],
})
export class SettingsComponent implements OnInit, ViewWillEnter {
  reminderEnabled: boolean = false;

  showPracticeLevelInVocabularyList: boolean = false;

  reminderTime: string;

  showReminderTimePicker: boolean = false;

  checkingForUpdate: boolean = false;

  get themes() {
    return Object.values(Theme);
  }

  get selectedTheme(): Theme {
    return this.themeService.getTheme();
  }

  set selectedTheme(theme: Theme) {
    this.themeService.changeTheme(theme);
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }

  constructor(
    private readonly vocabularyService: VocabularyService,
    private readonly themeService: ThemeService,
    private readonly alertController: AlertController,
    private readonly reminderService: ReminderService,
    private readonly updateService: UpdateService,
    private readonly settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.showPracticeLevelInVocabularyList = this.settingsService.getShowPracticeLevelInVocabularyList();
    this.reminderEnabled = this.reminderService.isReminderEnabled();
    const reminderTime = this.reminderService.getReminderTime();
    this.reminderTime =
      reminderTime.hours.toString().padStart(2, '0') + ':' + reminderTime.minutes.toString().padStart(2, '0');
  }

  ionViewWillEnter(): void {
    this.themeService.overwriteStatusBarColor('#f2f2f7');
  }

  async import(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files.length == 1) {
      try {
        const vocabulary: Vocable[] = JSON.parse(await files.item(0)!.text());
        this.vocabularyService.deleteAll();
        this.vocabularyService.import(vocabulary);
        const alert = await this.alertController.create({
          header: 'Import completed',
          message: 'Vocabulary was successfully imported.',
          buttons: ['OK'],
        });
        alert.present();
      } catch (err) {
        const alert = await this.alertController.create({
          header: 'Import failed',
          message: 'Could not import vocabulary. ' + err,
          buttons: ['OK'],
        });
        alert.present();
      }
    }
  }

  async export() {
    // get all vocabulary
    const vocabulary = await this.vocabularyService.getAll();

    // creatre json file
    const blob = new Blob([JSON.stringify(vocabulary)], {
      type: 'application/json',
    });

    // create download link
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'vocabulary.json';

    // start the download
    a.click();
  }

  onShowPracticeLevelInVocabularyListChanged() {
    this.settingsService.setShowPracticeLevelInVocabularyList(this.showPracticeLevelInVocabularyList);
  }

  async onReminderEnabledChanged() {
    if (this.reminderEnabled) {
      if (window.Notification) {
        await Notification.requestPermission();
        const reminderTimeParts = this.reminderTime.split(':');
        const hours = Number.parseInt(reminderTimeParts[0]);
        const minutes = Number.parseInt(reminderTimeParts[1]);
        this.reminderService.enableReminder({ hours, minutes });
      } else {
        const alert = await this.alertController.create({
          header: 'Not supported',
          message: 'Unfortunately, this function is not supported by your device.',
          buttons: ['OK'],
        });
        alert.present();
        this.reminderEnabled = false;
      }
    } else {
      this.reminderService.disableReminder();
    }
  }

  onReminderTimeChanged() {
    const reminderTimeParts = this.reminderTime.split(':');
    const hours = Number.parseInt(reminderTimeParts[0]);
    const minutes = Number.parseInt(reminderTimeParts[1]);
    this.reminderService.scheduleReminder({ hours, minutes });
  }

  toggleReminderTimePicker() {
    this.showReminderTimePicker = !this.showReminderTimePicker;
  }

  async checkForUpdate() {
    this.checkingForUpdate = true;
    const updateFound = await this.updateService.checkForUpdate();
    this.checkingForUpdate = false;
    if (!updateFound) {
      const alert = await this.alertController.create({
        header: 'No update found',
        buttons: ['OK'],
      });
      alert.present();
    }
  }
}
