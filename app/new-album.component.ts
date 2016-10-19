import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: 'new-album',
  template: `
  <div>
    <label>Add a new Album</label>
    <input #artist placeholder="Artist">
    <input #album placeholder="Album">
    <input #genre placeholder="Genre">
    <input #price placeholder="Price" type="number">
    <button (click)="addAlbum(artist.value, album.value, genre.value, price.value); artist.value=''; album.value=''; genre.value=''; price.value='';">Add Album</button>
  </div>
  `
})

export class NewAlbumComponent {
  @Output() newAlbum = new EventEmitter();
  addAlbum(artist: string, album: string, genre: string, price: number) {
    var testAlbum = new Album (artist, album, genre, price);
    this.newAlbum.emit(testAlbum);
  }
}
