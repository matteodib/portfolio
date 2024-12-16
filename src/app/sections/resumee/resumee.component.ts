import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-resumee',
  imports: [ButtonComponent],
  templateUrl: './resumee.component.html',
  styleUrl: './resumee.component.sass'
})
export class ResumeeComponent {

  constructor(private analyticsService: AnalyticsService) {}

  downloadCurriculum() {
    this.analyticsService.trackEvent("User downloaded curriculum", "A user clicked on the button to download the cv", "DOWNLOADED_CV")
    window.open("assets/files/matteo_di_blasio_eng.pdf")
  }

}
