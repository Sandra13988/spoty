import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';



@NgModule({
  declarations: [
    HeaderuserComponent,
    MediaplayerComponent,
    SideBarComponent
  ], 
  imports: [
    CommonModule
  ],
  exports:[
    HeaderuserComponent,
    MediaplayerComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
