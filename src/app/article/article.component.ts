import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { ArticleService } from '../article.service';
import { Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    @Input()
    article: Article;
    @Output() 
    deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

    constructor(private articleService: ArticleService, private route:ActivatedRoute) {
    }

    ngOnInit() {
		if(this.route.snapshot.params['id']){
			this.articleService.getArticle(this.route.snapshot.params['id']).subscribe((data)=>{
			  this.article = data;
			});
		}
    }

	deleteA(){
		this.articleService.deleteArticle(this.article.id)
		.subscribe(()=>{this.router.navigate(['../articles'])});
	  }
	  
    removeArticle(){
		if(!this.route.snapshot.params['id']{
			this.deleteArticle.emit(this.article);
		}else{
			this.deleteA();
		}
    }
}