import { Component, Input } from '@angular/core';
import { Album } from './album.model'

@Component ({
  selector: 'search-artist',
  template: `
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="All" selected>All</option>
        <option *ngFor="let artist of childAlbumSearch" value="{{ artist }}">
          {{ artist }}
        </option>
      </select>
  `
})

export class SearchArtistComponent {
  @Input() childAlbumSearch: Album[];
}
