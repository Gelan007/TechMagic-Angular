import {Component, Input} from '@angular/core';
import {IProduct} from "../product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() public product!: IProduct
  public defaultImage: string = 'https://nautique.com.ua/wp-content/themes/nautique/img/default.jpg'
}
