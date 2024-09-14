import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { Component } from '@angular/core';
import { SlidebarComponent } from './shared/components/slidebar/slidebar.component';

export const routes: Routes = [

    {
        path: '', 
        component : MytestcomponentComponent
    },
    {
        path : 'Auth',
        component : MytestcomponentComponent
    },
    {
        path : 'Servicios',
        component : MytestcomponentComponent
    },
    {
        path : 'slidebar',
        component : SlidebarComponent
    }
];
