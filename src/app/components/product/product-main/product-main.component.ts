import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ITag, Tag} from "../../tag/tag.model";
import {IProduct, Product} from "../product.model";
import {ProductsService} from "../../../services/products.service";
import {FormGroup, NgForm} from "@angular/forms";

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

  public ngOnInit(): void {

  }
  /*public ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }*/
  public addTagForProduct(): void {
    const tagForProduct: ITag = new Tag('', 'blue')
    if(this.tagsForProduct.length < 6) {
      this.tagsForProduct.push(tagForProduct)
    }

  }
  public navigateToTagManagement() {
    this.router.navigate(['tag-management'])
  }


  public addProduct(): void {
    if(this.newProduct.name.length >= 3 && this.newProduct.price >= 0) {
        const countOfValidTags = this.tagsForProduct.filter(p => !p.name)
        if(countOfValidTags.length === 0 || !countOfValidTags) {
         this.productService.addProduct(this.newProduct);
         this.newProduct = new Product('', '', 0, '', this.tagsForProduct)
          this.tagsForProduct = []
        }
    } else {
      console.log('Form is invalid. Please check your input.');
    }
  }
}
