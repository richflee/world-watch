import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EuCountriesService {

  constructor(private http: Http) { }

  getCountry(country: string): Observable<object> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .map((res) => {
        const data = res.json();
        return data[0];
      })
      .catch((err) => this.handleError(err));
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      let errBody: string;
      try {
        const body = error.json();
        errBody = body['message'] || JSON.stringify(body);
      } catch (jsonError) {
        errBody = error.statusText || '';
      }
      errMsg = `${error.status} - ${errBody}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(new Error(errMsg));
  }
}
