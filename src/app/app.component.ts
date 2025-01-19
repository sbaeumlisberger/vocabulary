import { Component, OnInit } from '@angular/core';
import { ReminderService } from './services/reminder.service';
import { ThemeService } from './services/theme.service';
import { UpdateService } from './services/update.service';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'vt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(
    private reminderService: ReminderService,
    themeService: ThemeService,
    updateService: UpdateService,
  ) {
    themeService.initialize();
    updateService.startCheckForUpdates();
  }

  ngOnInit() {
    this.reminderService.initialize();
  }
}
