import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {IProduct} from "../components/product/product.model";
import {ITag} from "../components/tag/tag.model";
import {UUID} from "angular2-uuid";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '../assets/products.json';
  private _productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this._productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    this.http.get<IProduct[]>(this.apiUrl).subscribe((products: IProduct[]) => {
        this._productsSubject.next(this.getProductsWithTagsId(products));
      },
      (error) => {
        console.error('Error fetching products:', error);
      })
    return this.products$
  }

  public getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(map(products => products.find(product => product.id === id)))
  }

  public addProduct(product: IProduct): void {
    const currentProducts = this._productsSubject.value;
    currentProducts.push(product);
    this._productsSubject.next(currentProducts);
  }

  public deleteTag(tag: ITag): void {
    const products = this._productsSubject.value;
    const updatedProducts = products.map(product => ({
      ...product,
      tags: product.tags?.filter(t => t.id !== tag.id) || []
    }));
    this._productsSubject.next(updatedProducts);
  }

  public addNewTagToProduct(tag: ITag, productId: number): void {
    const products = this._productsSubject.value;
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          tags: [...(product.tags || []), tag]
        };
      }
      return product;
    });
    this._productsSubject.next(updatedProducts);
  }

  private getProductsWithTagsId(products: IProduct[]): IProduct[] {
    const productsWithTagsId: IProduct[] = products.map((product: IProduct) => {
      const tagsWithId: ITag[] | undefined = product.tags?.map((tag: ITag) => ({
        ...tag,
        id: UUID.UUID()
      })) ?? [];

      return {
        ...product,
        tags: tagsWithId
      };
    });

    return productsWithTagsId;
  }

  public deleteProduct(id: number): void {
    const products = this._productsSubject.value;
    const updatedProducts = products.filter(product => product.id !== id)
    this._productsSubject.next(updatedProducts);
  }
}
