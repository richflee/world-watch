import { WeatherType } from '../global-dashboard/weather-type';

export class Country {

    public name: string;
    public capital: string;
    public flagImageUrl: string;
    public flickrImageUrl: string;

    public currentTemperature?: number;
    public weatherDescription: WeatherType;

    public latitude: number;
    public longitude: number;

    constructor(name: string) {
        this.name = name;
    }

    setLocation(lat: number, lng: number): void {
        this.latitude = lat;
        this.longitude = lng;
    }

    setCurrentTemperature(temperature: number): void {
        this.currentTemperature = temperature;
    }

    setWeather(weatherDescription: string): void {
        let type;
        switch (weatherDescription) {
            case 'Clear':
                type = WeatherType.Clear;
                break;
            case 'Clouds':
                type = WeatherType.Clouds;
                break;
            case 'Drizzle':
                type = WeatherType.Drizzle;
                break;
            case 'Rain':
                type = WeatherType.Rain;
                break;
            case 'Snow':
                type = WeatherType.Snow;
                break;
            case 'Mist':
                type = WeatherType.Mist;
                break;
            case 'Fog':
                type = WeatherType.Fog;
                break;
            default:
                type = WeatherType.Clear;
                break;
        }
        this.weatherDescription = type;
    }
}
