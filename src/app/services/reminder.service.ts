import { Time } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private static readonly REMINDER_ENABLED_KEY = "reminderEnabled";

  private static readonly REMINDER_TIME_KEY = "reminderTime";

  private reminderTimer?;

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService) { }

  initialize() {
    if (this.isReminderEnabled()) {
      let time = this.getReminderTime();
      this.scheduleReminder(time);
    }
  }

  isReminderEnabled(): boolean {
    return this.storageService.get(ReminderService.REMINDER_ENABLED_KEY) ?? false;
  }

  getReminderTime(): Time {
    return this.storageService.get(ReminderService.REMINDER_TIME_KEY) ?? { hours: 17, minutes: 0 };
  }

  enableReminder(time: Time) {
    this.storageService.set(ReminderService.REMINDER_ENABLED_KEY, true);
    this.storageService.set(ReminderService.REMINDER_TIME_KEY, time);
    this.scheduleReminder(time);
  }

  disableReminder() {
    if (this.reminderTimer) {
      clearTimeout(this.reminderTimer);
    }
    this.storageService.set(ReminderService.REMINDER_ENABLED_KEY, false);
  }

  async scheduleReminder(time: Time) {
    this.storageService.set(ReminderService.REMINDER_TIME_KEY, time);

    if (this.reminderTimer) {
      clearTimeout(this.reminderTimer);
    }

    let reminderDate = new Date();
    reminderDate.setHours(time.hours);
    reminderDate.setMinutes(time.minutes);
    reminderDate.setSeconds(0);
    reminderDate.setMilliseconds(0);
    let timeoutMilliseconds = reminderDate.getTime() - Date.now();

    if (timeoutMilliseconds < 10) {
      timeoutMilliseconds += 1000 * 60 * 60 * 24;
    }

    console.log("Scheduled reminder in " + timeoutMilliseconds + " ms");

    this.reminderTimer = setTimeout(async () => {
      let serviceWorker = await navigator.serviceWorker.getRegistration();
      serviceWorker.showNotification("Time to pratice some vocabulary!", {
        data: {
          onActionClick: {
            default: { "operation": "navigateLastFocusedOrOpen", "url": "tabs/practice" }
          }
        }
      });
      this.scheduleReminder(time);
    }, timeoutMilliseconds);
  }
}
