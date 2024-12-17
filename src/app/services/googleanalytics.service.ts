import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  private isAnalyticsInitialized = false; // Stato per evitare caricamenti multipli

  constructor(private _router: Router) {
    // Controlla consenso ai cookie
    if (this.hasCookieConsent()) {
      this.init();
      this.setupRouterEvents();
    }
  }

  // Controlla se l'utente ha dato il consenso
  private hasCookieConsent(): boolean {
    return !!localStorage.getItem('cookie_consent');
  }

  // Inizializza Google Analytics
  public init(): void {
    if (this.isAnalyticsInitialized) return; // Evita duplicazioni
    this.isAnalyticsInitialized = true;

    // Carica script principale di Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CF019EY7SN';
    script.async = true;
    document.head.appendChild(script);

    // Aggiunge lo script per configurare gtag
    const gtagEl = document.createElement('script');
    gtagEl.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CF019EY7SN');
    `;
    document.head.appendChild(gtagEl);
  }

  // Imposta il tracciamento delle pagine solo se GA è inizializzato
  private setupRouterEvents(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (this.isAnalyticsInitialized) {
        gtag('config', 'G-CF019EY7SN', { page_path: event.urlAfterRedirects });
      }
    });
  }

  // Traccia un evento personalizzato
  trackEvent(eventName: string, eventDetails: string, eventCategory: string): void {
    if (this.hasCookieConsent() && this.isAnalyticsInitialized) {
      gtag('event', eventName, {
        'event_category': eventCategory,
        'event_label': eventName,
        'value': eventDetails
      });
    }
  }
}
