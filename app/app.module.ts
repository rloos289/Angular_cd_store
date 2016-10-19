import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { ListAlbumComponent } from './list-albums.component'
import { NewAlbumComponent } from './new-album.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListAlbumComponent,
    NewAlbumComponent
  ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
