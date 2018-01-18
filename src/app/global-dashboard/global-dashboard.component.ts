import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/withLatestFrom';
import { Response } from '@angular/http/src/static_response';
import { List } from 'immutable';
import { OpenWeatherService } from '../common/open-weather.service';
import { Country } from '../common/country';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import * as countryActions from './actions/country.actions';
import { CountryTile } from './models/country-tile';

@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.scss']
})
export class GlobalDashboardComponent implements OnInit, AfterViewInit {

  public countryInput$ = new BehaviorSubject<string>('');
  public searchInput = '';

  public tiles: Array<Country>;
  public countryTiles$: Observable<CountryTile[]>;
  public countries$: Observable<Country[]>;
  public addingCountry$: Observable<boolean>;

  constructor(private openWeatherService: OpenWeatherService, private store: Store<AppState>) {
    this.tiles = [];
  }

  ngOnInit() {
    this.countryTiles$ = this.store.select(state => state.countries.dashboardTiles);
    this.countries$ = this.store.select(state => state.countries.countries);
    this.addingCountry$ = this.store.select(state => state.countries.addingCountry);
  }

  ngAfterViewInit() {

    const button = document.querySelector('#add-country');
    const addClick$ = Observable.fromEvent(button, 'click');

    const inputAfterClick$ = addClick$
      .withLatestFrom(this.countryInput$)
      .map((val: Array<any>) => val[1])
      .do(countryName => this.searchInput = '')
      .subscribe((countryName) => {
        const tile = new CountryTile();
        tile.pending = true;
        this.store.dispatch(new countryActions.GetCountryAction({ name: countryName, tile: tile }));
      });
  }

}
