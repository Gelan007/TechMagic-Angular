import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {IProduct, Product} from "../product.model";
import {Router} from "@angular/router";
import {ITag, Tag} from "../../tag/tag.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = []
  constructor(private productService: ProductsService, private router: Router) {}

  public ngOnInit(): void {
    this.productService.getProducts().subscribe((products => {
      this.products = products
    }))

  }

  public navigateToProduct(id: number): void {
    this.router.navigate(['product', id])
  }
}
