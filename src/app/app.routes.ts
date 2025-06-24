import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
    path: '', loadChildren: ()=> import('./shared/layout/layout/layout.route').then((r) => r.layoutRoutes)
}, {
    path: '**', redirectTo: 'home'
}];
