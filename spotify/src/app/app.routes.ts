import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
    {
        path:'', //Localhost:4200/home -> si quisieras hacer /home/dashboard, el segundo caracter debes ponerselo al hijo, osea en home-routing.module.ts 
       // component: ExampleComponent -> Esto es sin lazy loading, osea se cargaria entero, no segun la necesidad del cliente
       loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) //importar modulo

    },
    {
        path:'prueba', //Localhost:4200
        component: PruebaComponent
    }
];
