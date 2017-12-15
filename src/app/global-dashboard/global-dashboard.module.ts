import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './global-dashboard.routing';

import { GlobalDashboardComponent } from './global-dashboard.component';

@NgModule({
    imports: [ routing, CommonModule ],
    exports: [],
    declarations: [GlobalDashboardComponent],
    providers: [],
})
export class GlobalDashboardModule { }
