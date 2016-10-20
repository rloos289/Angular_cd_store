import { Pipe, PipeTransform  } from '@angular/core';
import { Album } from './album.model';

@Pipe ({
  name: "filteredPrice",
  pure: false
})

export class PricePipe implements PipeTransform {

  transform(input: Album[], pricefilter) {
      if (pricefilter === "low") {
        input.sort(function(a,b) {
          return a.price-b.price;
        })
      } else if ( pricefilter === "high") {
        input.sort(function(a,b) {
          return b.price-a.price;
        })
      }
      return input;
    }
  }
