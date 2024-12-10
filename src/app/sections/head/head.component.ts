import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/head-section/navbar/navbar.component';

@Component({
  selector: 'app-head',
  imports: [NavbarComponent ],
  templateUrl: './head.component.html',
  styleUrl: './head.component.sass'
})
export class HeadComponent {

}
