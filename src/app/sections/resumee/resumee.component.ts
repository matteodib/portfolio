import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumee',
  imports: [ButtonComponent],
  templateUrl: './resumee.component.html',
  styleUrl: './resumee.component.sass'
})
export class ResumeeComponent {

  constructor(private router: Router) {}

  downloadCurriculum() {
    window.open("assets/files/matteo_di_blasio_eng.pdf")
  }

}
