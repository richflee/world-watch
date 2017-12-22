import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  browserLang = '-';

  constructor(private translateService: TranslateService) {

    translateService.addLangs(['en', 'es']); // add more
    translateService.setDefaultLang('es');

    const browserLang = translateService.getBrowserLang();
    this.browserLang = browserLang;
    translateService.use(browserLang);
  }

}
