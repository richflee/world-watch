import { Country } from './common/country';
import { CountryTile } from './global-dashboard/models/country-tile';

export interface AppState {
    countries: {
        countries: Country[],
        addingCountry: boolean,
        dashboardTiles: CountryTile[]
    };
}
