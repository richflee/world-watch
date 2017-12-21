import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
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

@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.scss']
})
export class GlobalDashboardComponent implements OnInit, AfterViewInit {

  public countryInput$ = new BehaviorSubject<string>('');
  public tiles: Array<object>;
  public tilesList = List<object>();

  constructor(private http: Http) {
    this.tiles = [];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    const button = document.querySelector('#add-country');
    const addClick$ = Observable.fromEvent(button, 'click');

    const inputAfterClick$ = addClick$
      .withLatestFrom(this.countryInput$)
      .map((val: Array<any>) => val[1])
      .mergeMap((country) => this.doRequest(country))
      .do((country) => this.getWeather(country))
      .subscribe((data) => {
        this.addCountry(data[0]['name']);
      });
  }

  getWeather(country: object): void {

    const city = country[0]['capital'].toLowerCase();
    const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5df010af0164549954af849cf3e7489b&units=metric';
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${city}`;

    this.http.get(requestUrl)
            .map((res) => res.json())
            .subscribe((weather) => {
              console.log('weather', weather);
            });
  }

  doRequest(country: string): Observable<Array<object>> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .map((res) => res.json());
  }

  addCountry(country: string): void {

    this.tiles.push({
      name: country
    });
  }

}
