import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing } from './global-dashboard.routing';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomInterceptor } from '../common/http/custom.interceptor';
import { OpenWeatherService } from '../common/open-weather.service';

import { GlobalDashboardComponent } from './global-dashboard.component';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { TileWeatherImageDirective } from './tile-weather-image.directive';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [GlobalDashboardComponent, DashboardTileComponent, TileWeatherImageDirective],
    providers: [
        HttpClient,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true
        },
        OpenWeatherService
    ],
})
export class GlobalDashboardModule { }
