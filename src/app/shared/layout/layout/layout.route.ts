import { Routes } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { LayoutComponent } from './layout.component';
import { Component } from '@angular/core';
import { ContactComponent } from '../../../pages/contact/contact.component';

export const layoutRoutes: Routes = [{
    path: '', component: LayoutComponent, children:[{
        path: '', component: HomeComponent
    },{
        path: 'contact', component:ContactComponent
    }]
},
{
    path: '**', redirectTo: ''
}];
