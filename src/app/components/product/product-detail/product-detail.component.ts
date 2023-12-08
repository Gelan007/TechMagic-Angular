import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../product.model";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  public product?: IProduct
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) {
  }

  public ngOnInit(): void {
    const id:number | null = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0', 10)
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
    })
  }

  public navigateToProductList(): void {
    this.router.navigate([''])
  }

  public deleteProduct(): void {
    if(this.product) {
      this.navigateToProductList()
      this.productService.deleteProduct(this.product.id)
    }
  }

}
