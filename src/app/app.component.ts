import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import * as getBrowserLang from 'langDetector';
// import getBrowserLang from 'langDetector';

declare var langDetector: any;

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

    new langDetector();
    // this.langDetected = lang;

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

}
