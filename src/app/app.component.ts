import { Component } from '@angular/core';
import { CheckForUpdateService } from '../services/check-updates.service';
import { PromptUpdateService } from '../services/update.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { VerticalDotsComponent } from "./components/vertical-dots/vertical-dots.component";
import { HeadComponent } from './sections/head/head.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ResumeeComponent } from './sections/resumee/resumee.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [BrowserAnimationsModule, HeadComponent, VerticalDotsComponent, SkillsComponent, ResumeeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
  sections = ['head', 'skills', 'resumee', 'footer'];

  constructor(checkUpdatesService: CheckForUpdateService, updateService: PromptUpdateService) {}

}
