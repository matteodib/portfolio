import { Component } from '@angular/core';
import { LogoComponent } from '../assets/logo/logo.component';
import { CommonModule } from '@angular/common';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  menuOpen: boolean = false
  activeSection: string = ""
  constructor(public navService: NavService) {
    this.navService.activeNavigation$.subscribe(val => {
      this.activeSection = val
    })
  }

  scrollToMobile(section: string ) {
    this.menuOpen = false
    this.navService.scrollTo(section)
  }

}
