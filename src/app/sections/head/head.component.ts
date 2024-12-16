import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/head-section/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NavService } from '../../services/nav.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-head',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.sass'
})
export class HeadComponent {

  constructor(public navService: NavService, private analyticsService: AnalyticsService) {
    this.analyticsService.trackEvent("User loaded website", "header loaded into view", "LOADED_HEAD")
  }
}
