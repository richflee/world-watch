import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EuCountriesService {

  constructor(private http: Http) { }

  getCountry(country: string): Observable<object> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .map((res) => {
              const data = res.json();
              return data[0];
            });
  }
}
