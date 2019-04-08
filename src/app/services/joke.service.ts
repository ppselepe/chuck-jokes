import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private host:string;
  /*
   * Create an instance of a JokeService
   * @Param {HttpClient} the instance of the HttpClient being iinjected
   */
  constructor(private httpClient:HttpClient) {
    this.host = 'https://api.chucknorris.io/jokes/';
  }

  /*
   * Get a list of categories
   *
   * @Return Observable<*>
   */
  getCategory() :Observable<any> {
    return this.httpClient.get(this.host + "categories")
  }

  /*
   * Get a random joke per selected category
   *
   * @Return Obesrvable<Category>
   */
  public getJoke(category:string = '') :Observable<Category> {
    let method = category;
    return this.httpClient.get(this.host + "random?category="+category).pipe(
      map((data: any) => {
        return new Category(data);
      })
    )
  }

}
