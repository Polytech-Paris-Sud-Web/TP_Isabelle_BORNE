import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { RawArticle } from './models/rawArticle.models';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
}

 /* public getArticles() : Article[] {
    return [{
      title: 'My First Article',
      content: 'Hello World',
      authors: 'Orangefire'
    }, {
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      authors: 'Orangefire'
    }, {
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      authors: 'Orangefire'
    }
    ];
} */
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }
  
  public getArticle(id:number):Observable<Article>{
	  return this.http.get<Article>("http://localhost:3000/articles/"+id); 
  }
  
  public deleteArticle(id:number): Observable<any> {
    return this.http.delete("http://localhost:3000/articles/"+id);
  }
    
  public createArticle(article: RawArticle):Observable<Article>{
    return this.http.post<Article>("http://localhost:3000/articles", article);
  }

}