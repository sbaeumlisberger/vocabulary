import { Component, OnInit } from '@angular/core';
import { AlertController, ViewWillEnter } from '@ionic/angular/standalone';
import { Theme } from 'src/app/models/theme.model';
import { Vocable } from 'src/app/models/vocable.model';
import { ReminderService } from 'src/app/services/reminder.service';
import { SettingsService } from 'src/app/services/settings.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UpdateService } from 'src/app/services/update.service';
import { VocabularyService } from 'src/app/services/vocabulary.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
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
        private readonly settingsService: SettingsService) {
    }

    ngOnInit(): void {
        this.showPracticeLevelInVocabularyList = this.settingsService.getShowPracticeLevelInVocabularyList();
        this.reminderEnabled = this.reminderService.isReminderEnabled();
        let reminderTime = this.reminderService.getReminderTime();
        this.reminderTime = reminderTime.hours.toString().padStart(2, '0') + ':' + reminderTime.minutes.toString().padStart(2, '0');
    }

    ionViewWillEnter(): void {
        this.themeService.overwriteStatusBarColor('#f2f2f7');
    }

    async import(event: Event) {
        let files = (<HTMLInputElement>event.target).files;
        if (files.length == 1) {
            try {
                let vocabulary: Vocable[] = JSON.parse(await files.item(0)!.text());
                this.vocabularyService.deleteAll();
                this.vocabularyService.import(vocabulary);
                let alert = await this.alertController.create({
                    header: 'Import completed',
                    message: 'Vocabulary was successfully imported.',
                    buttons: ['OK'],
                });
                alert.present();
            }
            catch (err) {
                let alert = await this.alertController.create({
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
        let vocabulary = await this.vocabularyService.getAll();

        // creatre json file
        let blob = new Blob([JSON.stringify(vocabulary)], { type: "application/json" });

        // create download link
        let a = document.createElement("a");
        let url = URL.createObjectURL(blob);
        a.href = url;
        a.download = "vocabulary.json";

        // start the download
        a.click();
    }

    onShowPracticeLevelInVocabularyListChanged() {
        this.settingsService.setShowPracticeLevelInVocabularyList(this.showPracticeLevelInVocabularyList)
    }

    async onReminderEnabledChanged() {
        if (this.reminderEnabled) {
            if (window.Notification) {
                await Notification.requestPermission();
                let reminderTimeParts = this.reminderTime.split(":");
                let hours = Number.parseInt(reminderTimeParts[0]);
                let minutes = Number.parseInt(reminderTimeParts[1]);
                this.reminderService.enableReminder({ hours, minutes });
            }
            else {
                let alert = await this.alertController.create({
                    header: 'Not supported',
                    message: 'Unfortunately, this function is not supported by your device.',
                    buttons: ['OK'],
                });
                alert.present();
                this.reminderEnabled = false;
            }
        }
        else {
            this.reminderService.disableReminder();
        }
    }

    onReminderTimeChanged() {
        let reminderTimeParts = this.reminderTime.split(":");
        let hours = Number.parseInt(reminderTimeParts[0]);
        let minutes = Number.parseInt(reminderTimeParts[1]);
        this.reminderService.scheduleReminder({ hours, minutes });
    }

    toggleReminderTimePicker() {
        this.showReminderTimePicker = !this.showReminderTimePicker;
    }

    async checkForUpdate() {
        this.checkingForUpdate = true;
        let updateFound = await this.updateService.checkForUpdate();
        this.checkingForUpdate = false;
        if (!updateFound) {
            let alert = await this.alertController.create({
                header: 'No update found',
                buttons: ['OK'],
            });
            alert.present();
        }
    }

}
