import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {IProduct} from "../components/product/product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '../assets/products.json';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl)
  }

  public getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(map(products => products.find(product => product.id === id)))
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
