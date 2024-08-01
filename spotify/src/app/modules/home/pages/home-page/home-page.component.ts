import { Component } from '@angular/core';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { HeaderuserComponent } from '../../../../shared/components/headeruser/headeruser.component';
import { MediaplayerComponent } from '../../../../shared/components/mediaplayer/mediaplayer.component';
import { RouterModule, Routes } from '@angular/router';
import { TracksModule } from '../../../tracks/tracks.module';
import { FavoritesModule } from '../../../favorites/favorites.module';
import { HistoryModule } from '../../../history/history.module';

const routes: Routes = [
  {
    path: '', //Localhost:4200/home -> si quisieras hacer /home/dashboard, el segundo caracter debes ponerselo al hijo, osea en home-routing.module.ts 
    // component: ExampleComponent -> Esto es sin lazy loading, osea se cargaria entero, no segun la necesidad del cliente
    //loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) //importar modulo
    component: TracksModule

  },
  {
    path: '', //Localhost:4200/home -> si quisieras hacer /home/dashboard, el segundo caracter debes ponerselo al hijo, osea en home-routing.module.ts 
    // component: ExampleComponent -> Esto es sin lazy loading, osea se cargaria entero, no segun la necesidad del cliente
    //loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) //importar modulo
    component: FavoritesModule

  },
  {
    path: '', //Localhost:4200/home -> si quisieras hacer /home/dashboard, el segundo caracter debes ponerselo al hijo, osea en home-routing.module.ts 
    // component: ExampleComponent -> Esto es sin lazy loading, osea se cargaria entero, no segun la necesidad del cliente
    //loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) //importar modulo
    component: HistoryModule

  }
];

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterModule,
    SideBarComponent,
    HeaderuserComponent,
    MediaplayerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})


export class HomePageComponent {

}
