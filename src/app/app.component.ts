import { AfterViewInit, Component } from '@angular/core';
import { CheckForUpdateService } from '../services/check-updates.service';
import { PromptUpdateService } from '../services/update.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { HeadComponent } from './home/head/head.component';
import { VerticalDotsComponent } from "./components/vertical-dots/vertical-dots.component";

@Component({
  selector: 'app-root',
  imports: [BrowserAnimationsModule, HeadComponent, VerticalDotsComponent],
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
  sections = ['head', 'section2', 'section3'];

  constructor(checkUpdatesService: CheckForUpdateService, updateService: PromptUpdateService) {}

}
