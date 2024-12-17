import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { GoogleAnalyticsService } from '../../services/googleanalytics.service';

@Component({
  selector: 'app-cookie-banner',
  imports: [ButtonComponent],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.sass'
})
export class CookieBannerComponent {

  cookieOpen: boolean = localStorage.getItem("cookie_consent") ? false : true

  constructor(private googleAnalytics: GoogleAnalyticsService) {}
  
  giveConsent() {
    localStorage.setItem("cookie_consent", "true")
    this.cookieOpen = false
    this.loadAnalyticsScript()
  }

  private loadAnalyticsScript() {
    this.googleAnalytics.init()
  }
}
