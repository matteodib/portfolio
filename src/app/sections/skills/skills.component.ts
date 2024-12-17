import { Component } from '@angular/core';
import { GoogleAnalyticsService } from '../../services/googleanalytics.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {

  constructor(private analyticsService: GoogleAnalyticsService) {
    this.analyticsService.trackEvent("User loaded skills section", "skills loaded into view", "LOADED_SKILLS")
  }
}
