import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { GoogleAnalyticsService } from '../../services/googleanalytics.service';

@Component({
  selector: 'app-resumee',
  imports: [ButtonComponent],
  templateUrl: './resumee.component.html',
  styleUrl: './resumee.component.sass'
})
export class ResumeeComponent {

  constructor(private analyticsService: GoogleAnalyticsService) {}

  downloadCurriculum() {
    this.analyticsService.trackEvent("User downloaded curriculum", "A user clicked on the button to download the cv", "DOWNLOADED_CV")
    window.open("assets/files/matteo_di_blasio_eng.pdf")
  }

}
