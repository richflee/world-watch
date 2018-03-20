import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { WeatherType } from './weather-type';

@Directive({
  selector: '[appTileWeatherImage]'
})
export class TileWeatherImageDirective implements OnInit {

  @Input() weather: WeatherType;

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    const src = this.getImageSourceForWeather(this.weather);
    this.render.setAttribute(this.el.nativeElement, 'src', src);
  }

  private getImageSourceForWeather(weather: WeatherType): string {
    let type = '';

    if (typeof weather === "undefined") {
      return 'assets/images/mist.jpeg';
    }

    switch (weather) {
      case WeatherType.Clear:
        type = 'assets/images/sunshine.jpeg';
        break;
      case WeatherType.Clouds:
        type = 'assets/images/clouds.jpeg';
        break;
      case WeatherType.Drizzle:
        type = 'assets/images/rain.jpeg';
        break;
      case WeatherType.Rain:
        type = 'assets/images/rain.jpeg';
        break;
      case WeatherType.Snow:
        type = 'assets/images/clouds.jpeg';
        break;
      case WeatherType.Mist:
        type = 'assets/images/mist.jpeg';
        break;
      case WeatherType.Fog:
        type = 'assets/images/mist.jpeg';
        break;

      default:
        type = 'assets/images/mist.jpeg';
        break;
    }

    return type;
  }

}
