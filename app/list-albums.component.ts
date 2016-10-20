import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'list-albums',
  template: `
    <div class="col-sm-6">
      <select (change)="onChangeArtist($event.target.value)" class="filter">
        <option value="Artist" selected>Artist</option>
        <option *ngFor="let artist of childAlbumSearch" value="{{ artist }}">
          {{ artist }}
        </option>
      </select>

      <select (change)="onChangeGenre($event.target.value)" class="filter">
        <option value="Genre" selected>Genre</option>
        <option *ngFor="let genre of childGenreSearch" value="{{ genre }}">
          {{ genre }}
        </option>
      </select>

      <div *ngFor="let currentAlbum of childAlbumList | filteredArtist:selectedArtist | filteredGenre:selectedGenre ">
        <p>Artist: {{ currentAlbum.artist }}</p>
        <p>Album: {{ currentAlbum.album }}</p>
        <p>Genre: {{ currentAlbum.genre }}</p>
        <p>Price: $\{{ currentAlbum.price }}</p>
        <button (click)="addCart(currentAlbum)">Add to Cart</button>
        <hr>
      </div>
    </div>
  `
})

export class ListAlbumComponent {
  @Input() childAlbumList: Album[];
  @Input() childAlbumSearch: Album[];
  @Input() childGenreSearch: Album[];
  @Output() shoppingCartSender = new EventEmitter();

  public selectedArtist: string = "";
  onChangeArtist(targetValue) {
    this.selectedArtist = targetValue;
  }

  public selectedGenre: string = "";
  onChangeGenre(targetValue) {
    this.selectedGenre = targetValue;
    this.selectedArtist = "Artist";
  }

  addCart(album: Album) {
    this.shoppingCartSender.emit(album);
    console.log("button");
  }
}
