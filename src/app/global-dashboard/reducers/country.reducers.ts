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
            const err = action.payload.error;
            const country = action.payload.country;
            return state = {
                ...state,
                getCountryError: err,
                countries: state.countries.filter((c) => c.id !== country.id),
                addingCountry: false
            };
        }
        case countryActions.DELETE_COUNTRY: {
            return state = {
                ...state,
                countries: state.countries.filter((c) => c.capital !== action.payload.capital)
            };
        }
        // case countryActions.GET_COUNTRY: {
        //     return state = {
        //         ...state,
        //         dashboardTiles: [].concat(state.dashboardTiles, action.payload.tile),
        //         addingCountry: true
        //     };
        // }
        case countryActions.UPDATE_COUNTRY: {
            // const newCountry = action.payload.country;
            const newCountry = <Country>Object.assign({}, action.payload.country);
            newCountry.pending = false;
            return state = {
                ...state,
                countries: state.countries.map((c: Country) => {
                    if (c.id === newCountry.id) {
                        console.log('FOUND!', c);
                        return newCountry;
                    } else { 
                        return c;
                    };
                })
            };
        }
        case countryActions.GET_COUNTRY_WEATHER_SUCCESS: {
            // const country = <Country>Object.assign({}, action.payload);
            const newCountry = <Country>Object.assign({}, action.payload.country);
            newCountry.pending = false;

            return state = {
                ...state,
                countries: [].concat(state.countries, newCountry),
            };
        }
        // case countryActions.ADD_COUNTRY_SUCCESS: {
        //     console.log('REDUCING', action.payload);
        //     return state = {
        //         ...state,
        //         addingCountry: false,
        //         countries: [].concat(state.countries, action.payload),
        //     };
        // }
        default: {
            return state;
        }
    }
}
