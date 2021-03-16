import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';
import {Observable} from "rxjs";
import { RawArticle } from '../models/rawArticle.models';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  

  ngOnInit() {
	this.articleService.getArticles().subscribe((data)=>{
	  this.articles = data;
	});
  }
  
	 deleteArticle(article: Article){
		this.articleService.deleteArticle(article.id).subscribe((data)=>{
		  this.articleService.getArticles().subscribe((data)=>{
			this.articles = data;
		  });
		});
	  }
	  
	  
	 /*createArticle(rawArticle: RawArticle){
		this.articleService.createArticle(rawArticle).subscribe((data)=>{
		  this.articleService.getArticles().subscribe((data)=>{
			this.articles = data;
		  });
		});
	  }*/
	  
	  
  constructor(private articleService: ArticleService) {
  }

}

