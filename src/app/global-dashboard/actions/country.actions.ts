import { Country } from '../../common/country';
import { CountryTile } from '../models/country-tile';

export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_WEATHER = 'GET_COUNTRY_WEATHER';
export const GET_COUNTRY_WEATHER_SUCCESS = 'GET_COUNTRY_WEATHER_SUCCESS';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const ADD_COUNTRY_SUCCESS = 'ADD_COUNTRY_SUCCESS';


export class GetCountryAction {
    readonly type = GET_COUNTRY;
    constructor(public payload: { name: string, tile: CountryTile }) {}
}

export class GetCountryWeatherAction {
    readonly type = GET_COUNTRY_WEATHER;
    constructor(public payload: Country) {}
}

export class GetCountryWeatherSuccessAction {
    readonly type = GET_COUNTRY_WEATHER_SUCCESS;
    constructor(public payload: Country) {}
}

export class AddCountryAction {
    readonly type = ADD_COUNTRY;
    constructor(public payload: Country) {}
}

export class AddCountrySuccessAction {
    readonly type = ADD_COUNTRY_SUCCESS;
    constructor() {}
}

export type Action
    = AddCountryAction
    | AddCountrySuccessAction
    | GetCountryAction
    | GetCountryWeatherAction
    | GetCountryWeatherSuccessAction;
