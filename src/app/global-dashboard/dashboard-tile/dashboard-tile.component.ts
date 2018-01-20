import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { Country } from '../../common/country';
import { WeatherType } from '../weather-type';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTileComponent {

  @Input() country: Country;

  constructor() { }

}
