import { Pipe, PipeTransform  } from '@angular/core';
import { Album } from './album.model';

@Pipe ({
  name: "filteredArtist",
  pure: false
})

export class ArtistPipe implements PipeTransform {

  transform(input: Album[], artistFilter) {
    var output: Album[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].artist === artistFilter) {
        output.push(input[i]);
      }
    }
    if (output.length >= 1) {
      return output;
    } else {
      return input;
    }
  }
}
