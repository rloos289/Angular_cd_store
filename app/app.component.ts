import { Component } from '@angular/core';
import { Album } from './album.model'

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <list-albums
    [childAlbumList]="masterAlbumList"
    [childAlbumSearch]="masterArtistList"
  ></list-albums>
  <new-album
    (newAlbum)="addAlbum($event)"
  ></new-album>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("Punch Brothers", "Phosphorescent Blues", "Bluegrass", 10.00),
    new Album("Saint Paul and the Broken Bones", "Sea of Noise", "Soul", 11.00),
    new Album("RL Burnside", "A Ass Pocket of Whiskey", "Blues", 6.00),
    new Album("The Decemberists", "Hazards of Love", "Folk", 9.00),
    new Album("Gaslight Anthem", "Handwritten", "Rock", 10.00),
    new Album("The Decemberists", "The Crane Wife", "Folk", 10.00),
    new Album("Punch Brothers", "Whose Feeling Young Now", "Bluegrass", 10.00),
    new Album("Frank Turner", "Positive Songs for Negative People", "Rock", 10.00)
  ];
    public masterArtistList: string[] = [
      "Punch Brothers", "Saint Paul and the Broken Bones", "RL Burnside", "The Decemberists", "Frank Turner", "Gaslight Anthem"
    ];

  addAlbum(newAlbumFromChild: Album) {
    this.masterAlbumList.push(newAlbumFromChild);
    if (!this.masterArtistList.includes(newAlbumFromChild.artist))
    {
      this.masterArtistList.push(newAlbumFromChild.artist);
    }
  }
}
