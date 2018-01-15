import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import * as getBrowserLang from 'langDetector';
// import getBrowserLang from 'langDetector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  browserLang = '-';
  langDetected = '-';

  constructor(private translateService: TranslateService) {

    const lang = this.getLang();
    this.langDetected = lang;

    this.translateService.addLangs(['en', 'es']); // add more
    this.translateService.setDefaultLang('es');

    const browserLang = this.translateService.getBrowserLang();
    this.browserLang = browserLang;
    this.translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {

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
