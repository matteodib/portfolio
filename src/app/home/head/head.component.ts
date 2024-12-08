import { Component } from '@angular/core';
import { HeaderElementsComponent } from '../../components/assets/header-elements/header-elements.component';

@Component({
  selector: 'app-head',
  imports: [HeaderElementsComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.sass'
})
export class HeadComponent {

}
