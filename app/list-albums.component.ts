import { Component, Input } from '@angular/core';
import { Album } from './album.model'

@Component ({
  selector: 'list-albums',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="All" selected>All</option>
      <option *ngFor="let artist of childAlbumSearch" value="{{ artist }}">
        {{ artist }}
      </option>
    </select>
    <div *ngFor="let currentAlbum of childAlbumList | filteredArtist:selectedArtist">
      <p>Artist: {{ currentAlbum.artist }}</p>
      <p>Album: {{ currentAlbum.album }}</p>
      <p>Genre: {{ currentAlbum.genre }}</p>
      <p>Price: $\{{ currentAlbum.price }}</p>
      <hr>
    </div>
  `
})

export class ListAlbumComponent {
  @Input() childAlbumList: Album[];
  @Input() childAlbumSearch: Album[];

  public selectedArtist: string = "";
  onChange(targetValue) {
    this.selectedArtist = targetValue;
  }
}
