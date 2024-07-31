import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
    {
        path:'', //Localhost:4200
        component: ExampleComponent
    },
    {
        path:'prueba', //Localhost:4200
        component: PruebaComponent
    }
];
