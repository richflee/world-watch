import { Country } from '../../common/country';
import { CountryTile } from '../models/country-tile';

export const GET_COUNTRY_FAILURE = 'GET_COUNTRY_FAILURE';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_WEATHER = 'GET_COUNTRY_WEATHER';
export const GET_COUNTRY_WEATHER_SUCCESS = 'GET_COUNTRY_WEATHER_SUCCESS';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const ADD_COUNTRY_SUCCESS = 'ADD_COUNTRY_SUCCESS';


export class GetCountryAction {
    readonly type = GET_COUNTRY;
    constructor(public payload: Country) {}
}

export class UpdateCountryAction {
    readonly type = UPDATE_COUNTRY;
    constructor(public payload: { id: string, country: Country }) {}
}

export class GetCountryFailureAction {
    readonly type = GET_COUNTRY_FAILURE;
    constructor(public payload: { error: Error, country: Country }) {}
}

export class DeleteCountryAction {
    readonly type = DELETE_COUNTRY;
    constructor(public payload: Country) {}
}

export class GetCountryWeatherAction {
    readonly type = GET_COUNTRY_WEATHER;
    constructor(public payload: { id: string, country: Country }) {}
}

export class GetCountryWeatherSuccessAction {
    readonly type = GET_COUNTRY_WEATHER_SUCCESS;
    constructor(public payload: { id: string, country: Country }) {}
}

export class AddCountryAction {
    readonly type = ADD_COUNTRY;
    constructor(public payload: string) {}
}

// export class AddCountryAction {
//     readonly type = ADD_COUNTRY;
//     constructor(public payload: Country) {}
// }

export class AddCountrySuccessAction {
    readonly type = ADD_COUNTRY_SUCCESS;
    constructor(public payload: Country) {}
}

export type Action
    = AddCountryAction
    | AddCountrySuccessAction
    | DeleteCountryAction
    | GetCountryAction
    | GetCountryWeatherAction
    | GetCountryWeatherSuccessAction
    | UpdateCountryAction
    | GetCountryFailureAction;
