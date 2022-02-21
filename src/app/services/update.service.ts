import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";
import { interval } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private router: Router) { }

  startCheckForUpdates() {
    // check if service worker is active
    if (this.swUpdate.isEnabled) {
      // check for update immediately
      this.checkForUpdate();

      // check for update every hour
      interval(1000 * 60 * 60).subscribe(() => {
        this.checkForUpdate();
      });
    }
  }

  async checkForUpdate(): Promise<boolean> {
    console.log("check for update");

    // check if service worker is active and a update is available
    if (this.swUpdate.isEnabled && await this.swUpdate.checkForUpdate()) {
      console.log("activate update");

      // activate found update
      await this.swUpdate.activateUpdate();

      // apply the update
      document.location.reload();

      return true;
    }

    console.log("no update found");
    return false;
  }

}