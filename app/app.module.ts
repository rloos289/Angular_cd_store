import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { ListAlbumComponent } from './list-albums.component'
import { NewAlbumComponent } from './new-album.component'
import { ArtistPipe } from "./artist.pipe"
import { GenrePipe } from "./genre.pipe"
import { ShoppingCartComponent } from "./shopping.component"
import { CartPipe } from "./cart.pipe"


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListAlbumComponent,
    NewAlbumComponent,
    ArtistPipe,
    GenrePipe,
    ShoppingCartComponent,
    CartPipe
  ],
  bootstrap:     [ AppComponent ],
})

export class AppModule {};
