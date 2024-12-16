import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {


  constructor(private analyticsService: AnalyticsService) {
    this.analyticsService.trackEvent("User loaded footer", "footer loaded into view", "LOADED_FOOTER")
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/matteodiblasio/')
  }
  goToMail() {
    window.open('mailto:matteodibs@gmail.com')
  }
  goToTelegram() {
    window.open('https://t.me/matteodibs')
  }
}