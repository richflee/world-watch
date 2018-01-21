import * as countryActions from '../actions/country.actions';
import { Country } from '../../common/country';
import { CountryTile } from '../models/country-tile';

export interface State {
    countries: Country[];
    addingCountry: boolean;
    dashboardTiles: CountryTile[];
    getCountryError: Error;
}

const initialState: State = {
    countries: [],
    addingCountry: false,
    dashboardTiles: [],
    getCountryError: null
};

export function countryReducer(state = initialState, action: countryActions.Action): State {
    switch (action.type) {
        case countryActions.GET_COUNTRY_FAILURE: {
            return state = {
                ...state,
                getCountryError: action.payload,
                addingCountry: false
            };
        }
        case countryActions.DELETE_COUNTRY: {
            return state = {
                ...state,
                countries: state.countries.filter((c) => c.capital !== action.payload.capital)
            };
        }
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
