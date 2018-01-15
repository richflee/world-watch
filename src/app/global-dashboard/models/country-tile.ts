import { Country } from '../../common/country';

export class CountryTile {
    public pending = true;
    public country: Country;

    constructor(country?: Country, pending?: boolean) {
        if (country) {
            this.country = country;
        }
        if (pending) {
            this.pending = pending;
        }
    }
}
