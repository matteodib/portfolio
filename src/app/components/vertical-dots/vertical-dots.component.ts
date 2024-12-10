import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-vertical-dots',
  imports: [CommonModule],
  templateUrl: './vertical-dots.component.html',
  styleUrl: './vertical-dots.component.sass'
})
export class VerticalDotsComponent implements AfterViewInit {

  @Input("sections") sections: string[] = []

  activeSection$: string | null = null;
  
  constructor(private navService: NavService) {
    this.navService.activeNavigation$.subscribe(val => {
      this.activeSection$ = val
    })
  }
  
  ngAfterViewInit() {
    const options = {
      root: null, // usa la viewport
      rootMargin: '0px',
      threshold: 0.8, // elemento visibile al 50%
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section : "head" | "skills" | "section3" =entry.target.id as "head" | "skills" | "section3";
          this.navService.activeNavigation.next(section)
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

  scrollTo(section: string ) {
    const container = document.getElementById(section)
    if(container) container.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
