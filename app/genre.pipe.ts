import { Pipe, PipeTransform  } from '@angular/core';
import { Album } from './album.model';

@Pipe ({
  name: "filteredGenre",
  pure: false
})

export class GenrePipe implements PipeTransform {

  transform(input: Album[], genreFilter) {
    var output: Album[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].genre === genreFilter) {
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
