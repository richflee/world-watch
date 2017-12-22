import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  browserLang = '-';

  constructor(private translateService: TranslateService) {

    this.translateService.addLangs(['en', 'es']); // add more
    this.translateService.setDefaultLang('es');

    const browserLang = this.translateService.getBrowserLang();
    this.browserLang = browserLang;
    this.translateService.use('es');
    // this.translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {

    this.translateService.onLangChange
      .subscribe((langEvent) => {
        console.log('langEvent', langEvent['lang']);
      });
  }

}
