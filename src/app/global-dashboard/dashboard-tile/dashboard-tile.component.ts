import { AfterViewInit, ElementRef, ChangeDetectionStrategy, Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from '../../common/country';
import { WeatherType } from '../weather-type';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as countryActions from '../actions/country.actions';
import { AppState } from '../../app-state';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTileComponent implements AfterViewInit {

  @ViewChild('deleteTileBtn') deleteTileBtn: ElementRef;
  @Input() country: Country;

  constructor(private store: Store<AppState>) { }

  ngAfterViewInit() {

    const deleteTileClick$ = Observable.fromEvent(this.deleteTileBtn.nativeElement, 'click');
    deleteTileClick$.subscribe((click) => {
      this.store.dispatch(new countryActions.DeleteCountryAction(this.country));
    });
  }

}
