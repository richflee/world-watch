import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Country } from '../../common/country';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTileComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit() {
  }

}
