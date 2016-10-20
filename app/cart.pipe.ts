import { Pipe, PipeTransform  } from '@angular/core';
import { Album } from './album.model';

@Pipe ({
  name: "cart",
  pure: false
})

export class CartPipe implements PipeTransform {
  transform(input: Album[]) {
    var totalcost: number = 0;
    for (var i = 0; i < input.length; i++) {
      totalcost += input[i].price;
    }
    return totalcost;
  }
}
