import * as countryActions from '../actions/country.actions';
import { Country } from '../../common/country';
import { CountryTile } from '../models/country-tile';

export interface State {
    countries: Country[];
    addingCountry: boolean;
    dashboardTiles: CountryTile[];
}

const initialState: State = {
    countries: [],
    addingCountry: false,
    dashboardTiles: []
};

export function countryReducer(state = initialState, action: countryActions.Action): State {
    switch (action.type) {
        // case countryActions.ADD_COUNTRY_SUCCESS: {
        //     return state = {
        //         ...state,
        //         addingCountry: false
        //     };
        // }
        case countryActions.GET_COUNTRY: {
            return state = {
                ...state,
                dashboardTiles: [].concat(state.dashboardTiles, action.payload.tile),
                addingCountry: true
            };
        }
        case countryActions.GET_COUNTRY_WEATHER_SUCCESS: {
            const country = <Country>Object.assign({}, action.payload);
            return state = {
                ...state,
                countries: state.countries.map((c) => {
                    return c.capital === country.capital ? country : c;
                })
            };
        }
        case countryActions.ADD_COUNTRY: {
            return state = {
                ...state,
                addingCountry: false,
                countries: [].concat(state.countries, action.payload),
            };
        }
        default: {
            return state;
        }
    }
}
