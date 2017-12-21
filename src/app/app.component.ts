import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private translateService: TranslateService) {

    translateService.addLangs(['en', 'es']); // add more
    translateService.setDefaultLang('es');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }

}
