import { Component } from '@angular/core';
import { LogoComponent } from '../assets/logo/logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  menuOpen: boolean = false
  constructor() {}

  scrollTo(section: string ) {
    this.menuOpen = false
    const container = document.getElementById(section)
    if(container) container.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

}
