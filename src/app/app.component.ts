import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
// import * as getBrowserLang from 'langDetector';
// import getBrowserLang from 'langDetector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  browserLang = '-';
  langDetected = '-';
  public getCountryError$: Observable<Error>;
  public showError = false;

  constructor(private translateService: TranslateService, private store: Store<AppState>) {

    const lang = this.getLang();
    this.langDetected = lang;

    this.translateService.addLangs(['en', 'es']); // add more
    this.translateService.setDefaultLang('es');

    const browserLang = this.translateService.getBrowserLang();
    this.browserLang = browserLang;
    this.translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngAfterViewInit() {
    const errNotificationContainer = document.querySelector('.error-top-notification-container') as HTMLElement;
    errNotificationContainer.style.top = `-${errNotificationContainer.offsetHeight}px`;
  }

  ngOnInit() {

    const showErrorLabel = (err) => {
      this.showError = true; 
      setTimeout(() => this.showError = false, 5000);
    };

    this.getCountryError$ = this.store.select(state => state.countries.getCountryError)

    this.getCountryError$
      .filter((err) => err !== null)
      .subscribe(showErrorLabel);

    this.translateService.onLangChange
      .subscribe((langEvent) => {
        console.log('langEvent', langEvent['lang']);
      });
  }

  getLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }

    let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language || window.navigator['browserLanguage'] || window.navigator['userLanguage'];
    console.log('browserLang', browserLang);

    if (browserLang.indexOf('-') !== -1) {
      console.log('found hyphen');
      browserLang = browserLang.split('-')[0];
    }

    if (browserLang.indexOf('_') !== -1) {
      console.log('found underscore');
      browserLang = browserLang.split('_')[0];
    }

    console.log('FINAL browserLang', browserLang);
    return browserLang;
  }

}
