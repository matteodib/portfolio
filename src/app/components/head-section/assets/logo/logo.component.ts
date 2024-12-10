import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.sass'
})
export class LogoComponent {

  activeSection$: string | null = "bg-primary"

  
  constructor(private navService: NavService) {
    this.navService.activeNavigation$.subscribe(val => {
      this.activeSection$ = this.defineBackground(val)
    })
  }


  defineBackground(section:string) {
    let bg = ""
    switch (section) {
      case "head":
        bg = "bg-primary"
        break;
      case "section3":
        bg = "bg-secondary"
        break;

      default:
        bg = "bg-primary"
        break;
    }
    return bg
  }

}
