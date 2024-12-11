import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/head-section/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-head',
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.sass'
})
export class HeadComponent {

}
