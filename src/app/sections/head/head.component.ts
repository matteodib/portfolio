import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/head-section/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-head',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.sass'
})
export class HeadComponent {

  constructor(public navService: NavService) {}
}
