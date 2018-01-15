import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomInterceptor } from './common/http/custom.interceptor';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './global-dashboard/effects/country.effects';
import { countryReducer } from './global-dashboard/reducers/country.reducers';
import { EuCountriesService } from './common/eu-countries.service';
import { OpenWeatherService } from './common/open-weather.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ countries: countryReducer }),
    EffectsModule.forRoot([ CountryEffects ])
  ],
  providers: [
    AppRoutingModule,
    HttpClient,
    TranslateService,
    EuCountriesService,
    OpenWeatherService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
