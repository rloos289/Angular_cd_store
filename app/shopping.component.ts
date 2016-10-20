import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "shopping-cart",
  template: `
    <div *ngFor="let cartitem of childShoppingCart">
      <p>Album: {{ cartitem.album }}</p>
    </div>
    <h2 *ngIf="childShoppingCart.length >= 1">Total Cost: \${{childShoppingCart | cart}}</h2>
  `
})

export class ShoppingCartComponent {
  @Input() childShoppingCart: Album[];

}
