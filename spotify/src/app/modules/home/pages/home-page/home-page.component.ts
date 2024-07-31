import { Component } from '@angular/core';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { HeaderuserComponent } from '../../../../shared/components/headeruser/headeruser.component';
import { MediaplayerComponent } from '../../../../shared/components/mediaplayer/mediaplayer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SideBarComponent,
    HeaderuserComponent,
    MediaplayerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
