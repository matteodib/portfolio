import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {

  constructor(private analyticsService: AnalyticsService) {
    this.analyticsService.trackEvent("User loaded skills section", "skills loaded into view", "LOADED_SKILLS")
  }
}
