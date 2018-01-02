import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string): Observable<object> {
    const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5df010af0164549954af849cf3e7489b&units=metric';
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${city}`;

    return this.http.get(requestUrl);
  }
}
