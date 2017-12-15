import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalDashboardComponent } from './global-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalDashboardComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
