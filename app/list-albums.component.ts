import { Component, Input } from '@angular/core';
import { Album } from './album.model'

@Component ({
  selector: 'list-albums',
  template: `
    <div *ngFor="let currentAlbum of childAlbumList">
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
}
