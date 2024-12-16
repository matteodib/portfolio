import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-footer',
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {


  goToLinkedin() {
    window.open('https://www.linkedin.com/in/matteodiblasio/')
  }
  goToMail() {
    window.open('mailto:matteodibs@gmail.com')
  }
  goToTelegram() {
    window.open('https://t.me/matteodibs')
  }
}
