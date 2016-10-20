import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "shopping-cart",
  template: `
    <div class="col-sm-6">
      <h2>Current Shopping Cart:</h2>
      <h3 *ngIf="childShoppingCart.length >= 1">Total Cost: \${{childShoppingCart | cart}}</h3>
      <div *ngFor="let cartitem of childShoppingCart">
        <p>Album: {{ cartitem.album }}
        <button (click)="removeFromCart(childShoppingCart,cartitem)">Remove</button></p>
      </div>
    </div>
  `
})

export class ShoppingCartComponent {
  @Input() childShoppingCart: Album[];
  @Output() removeAlbum = new EventEmitter();

    removeFromCart(cartArray: Album[], cartitem) {
      for (let i = 0; i < cartArray.length; i++) {
          if(cartArray[i].id === cartitem.id) {
            cartArray.splice(i,1);
          }
      }
    }
}
