import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {IProduct, Product} from "../product.model";
import {Router} from "@angular/router";
import {ITag, Tag} from "../../tag/tag.model";
import {TagsService} from "../../../services/tags.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];
  public selectedTagName: string | undefined;
  public uniqueTags: ITag[] = [];
  public productNameFilter: string = '';
  public filteredProducts: IProduct[] = [];

  constructor(
    private productService: ProductsService,
    private router: Router,
    private tagsService: TagsService
  ) {}

  public ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      const tags: ITag[] = products.flatMap((product) => product.tags || []);
      this.tagsService.loadTags(tags);
    });

    this.tagsService.tags$.subscribe((tags) => {
      this.uniqueTags = this.tagsService.getUniqueTags();
      this.filterAndGetProductsByTag();
    });
  }

  public navigateToProduct(id: number): void {
    this.router.navigate(['product', id]);
  }

  public filterAndGetProductsByTag(): void {
    if (!this.selectedTagName) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.tags?.some(tag => tag.name === this.selectedTagName)
      );
    }

    if (this.productNameFilter) {
      this.filteredProducts = this.filteredProducts.filter(product =>
        product.name.toLowerCase().includes(this.productNameFilter.toLowerCase())
      );
    }
  }
}
