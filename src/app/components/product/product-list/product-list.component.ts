import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {IProduct} from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = []
  constructor(private productService: ProductsService) {}

  public ngOnInit(): void {
    this.productService.getProducts().subscribe((products => {
      this.products = products
    }))

  }

}
