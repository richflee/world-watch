import { WeatherType } from '../global-dashboard/weather-type';

export class Country {

    public id: string;
    public capital: string;
    public flagImageUrl: string;
    public flickrImageUrl: string;

    public currentTemperature?: number;
    public weatherDescription: WeatherType;

    public latitude: number;
    public longitude: number;

    constructor(public name: string, public pending: boolean = true) { 
        this.id = this.guid();
    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
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
