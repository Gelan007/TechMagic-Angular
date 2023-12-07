import {Component, OnInit} from "@angular/core";
import {ProductsService} from "../../../services/products.service";
import {TagsService} from "../../../services/tags.service";
import {IProduct} from "../../product/product.model";
import {ITag} from "../tag.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.productsService.products$

  constructor(private productsService: ProductsService, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products: IProduct[]) => {
      const tags: ITag[] = products.flatMap((product) => product.tags || []);
      this.tagsService.loadTags(tags);
    });
  }

  editTag(tag: ITag): void {
    this.tagsService.editTag(tag);
  }

  deleteTag(tag: ITag): void {
    this.productsService.deleteTag(tag);
  }
}
