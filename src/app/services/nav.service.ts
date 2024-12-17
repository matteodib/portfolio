import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  activeNavigation = new BehaviorSubject<'head' | 'skills' | 'resumee' | 'footer'>("head")
  activeNavigation$ = this.activeNavigation.asObservable()

  constructor() {}

  public setActiveNavigation(navId: 'head' | 'skills' | 'resumee' | 'footer') {
      this.activeNavigation.next(navId)
  }

  public getActiveNavigation() {
      return this.activeNavigation.value
  }
  
  scrollTo(section: string ) {
    const container = document.getElementById(section)
    if(container) container.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
