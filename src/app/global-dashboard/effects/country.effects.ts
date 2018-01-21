import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as countryActions from '../actions/country.actions';
import { Observable } from 'rxjs/Observable';
import { EuCountriesService } from '../../common/eu-countries.service';
import { OpenWeatherService } from '../../common/open-weather.service';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Country } from '../../common/country';
import { AddCountryAction, GetCountryWeatherAction } from '../actions/country.actions';
import { catchError, switchMap, map } from 'rxjs/operators';

export class EffectError implements Action {
    readonly type = '[Error] Effect Error';
}

@Injectable()
export class CountryEffects {

    constructor(
        private actions$: Actions,
        private euCountriesServices: EuCountriesService,
        private openWeatherService: OpenWeatherService
    ) { }

    @Effect() getCountryWeather$ = this.actions$
        .ofType(countryActions.GET_COUNTRY_WEATHER)
        .switchMap((action: GetCountryWeatherAction) =>
            this.openWeatherService.getWeatherForCity(action.payload.capital)
                .map((data) => {
                    const temperature = data['main']['temp'];
                    const weather = data['weather'][0];

                    const country = action.payload;
                    country.currentTemperature = temperature;
                    country.setWeather(weather['main']);

                    return (new countryActions.GetCountryWeatherSuccessAction(country));
                }));

    @Effect() addCountry$ = this.actions$
        .ofType(countryActions.ADD_COUNTRY)
        .map((action: AddCountryAction) => {
            return (new countryActions.GetCountryWeatherAction(action.payload));
        });

    @Effect() getCountry$ = this.actions$
        .ofType(countryActions.GET_COUNTRY)
        .switchMap((action) =>
            this.euCountriesServices.getCountry(action['payload']['name'])
                .pipe(
                    map(data => {
                        const c = new Country(data['name']);
                        const capital = data['capital'];
                        c.capital = capital;
                        c.flagImageUrl = data['flag'];
                        c.flickrImageUrl = `https://loremflickr.com/g/160/120/${capital}`;
                        return (new countryActions.AddCountryAction(c));
                    }),
                    catchError((err) => {
                        const errObj = new Error(`Could not add ${action['payload']['name']}`);
                        return of(new countryActions.GetCountryFailureAction(errObj));
                    })
                )
        );
}
