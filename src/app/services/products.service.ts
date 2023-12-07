import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {IProduct} from "../components/product/product.model";
import {ITag} from "../components/tag/tag.model";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
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

  /*public addProduct(product: IProduct): Observable<IProduct> {
    //return this.http.post<IProduct>(this.apiUrl, product)

  }*/
  public addProduct(product: IProduct): void {
    const currentProducts = this._productsSubject.value;
    currentProducts.push(product);
    this._productsSubject.next(currentProducts);
   /* return this.getProducts()
      .pipe(
        tap(products => {
          products.push(product);
          this._productsSubject.next(products);
        })
      );*/
  }

  public deleteTag(tag: ITag) {
    // Фильтруем массив тегов внутри продукта
    const products = this._productsSubject.value;
    const updatedProducts = products.map(product => ({
      ...product,
      tags: product.tags?.filter(t => t.id !== tag.id) || []
    }));
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

  /*getArticle(id: number): Observable<IProduct> {
    return this.getArticles()
      .pipe(
        tap(articles => console.log(articles)),
        map(articles => articles.find(article => article.id === id))
      );
  }
  addArticle(article: IProduct): Observable<IProduct> {
    return this.getArticles()
      .pipe(
        tap(articles => {
          const maxId = Math.max(...articles.map(a => a.id), 0);
          article.id = maxId + 1;
          articles.push(article);
        }),
        catchError(this.handleError('addArticle', article))
      );
  }
  updateArticle(id: number, article: Article): Observable<Article> {
    return this.getArticles()
      .pipe(
        tap(articles => {
          const index = articles.findIndex(a => a.id === id);
          if (index !== -1) {
            articles[index] = { ...article, id };
          }
        }),
        catchError(this.handleError('updateArticle', article))
      );
  }
  deleteArticle(id: number): Observable<any> {
    return this.getArticles()
      .pipe(
        tap(articles => {
          const index = articles.findIndex(a => a.id === id);
          if (index !== -1) {
            articles.splice(index, 1);
          }
        }),
        catchError(this.handleError('deleteArticle', id))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }*/
}
