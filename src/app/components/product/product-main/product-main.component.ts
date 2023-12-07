import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ITag, Tag} from "../../tag/tag.model";
import {IProduct, Product} from "../product.model";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent  {
  //public products: IProduct[] = []
  public tagsForProduct: ITag[] = []
  public newProduct:IProduct = new Product('', '', 0, '', this.tagsForProduct)
  constructor(private router: Router, private productService: ProductsService) {}

  /*public ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }*/
  public addTagForProduct(): void {
    const tagForProduct: ITag = new Tag('', '')
    if(this.tagsForProduct.length < 6) {
      this.tagsForProduct.push(tagForProduct)
    }

  }
  public navigateToTagManagement() {
    this.router.navigate(['tag-management'])
  }


  public addProduct(): void {
    /*const tagsForProduct: ITag[] = [new Tag('newTag', 'red'), new Tag('newTag2', 'green')]
    const newProduct:IProduct = new Product(
      'name', 'desc', 200,
      'string', tagsForProduct
    )*/

    this.productService.addProduct(this.newProduct)
      /*.subscribe(products => {
      this.products = products
    })*/
  }
}
