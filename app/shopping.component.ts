import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "shopping-cart",
  template: `
    <div *ngFor="let cartitem of childShoppingCart">
      <p>Album: {{ cartitem.album }}</p>
    </div>
  `
})

export class ShoppingCartComponent {
  @Input() childShoppingCart: Album[];

  // addcost(ShoppingCart) {
  //   for (var i = 0; i <= ShoppingCart.length; )
  }
