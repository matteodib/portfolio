import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-dots',
  imports: [CommonModule],
  templateUrl: './vertical-dots.component.html',
  styleUrl: './vertical-dots.component.sass'
})
export class VerticalDotsComponent implements AfterViewInit {

  @Input("sections") sections: string[] = []


  activeSection: string | null = null;

  ngAfterViewInit() {
    const options = {
      root: null, // usa la viewport
      rootMargin: '0px',
      threshold: 0.8, // elemento visibile al 50%
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id; // ID della sezione visibile
          console.log(this.activeSection)
        }
      });
    }, options);

    // Osserva ogni sezione
    this.sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
  }

}
