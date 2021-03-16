import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Article} from '../models/article';
import {RawArticle} from '../models/rawArticle.models';
import { ArticleService } from '../article.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

    articleForm : FormGroup;
	@Output() 
	newArticle : EventEmitter<RawArticle> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService:ArticleService, private router:Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }
  
   createArticle(){
	   const { title, content, authors } = this.articleForm.value;
		const newArticle:RawArticle = {
		  title,
		  content,
		  authors
		}
		this.articleService.createArticle(newArticle).subscribe(()=>{this.router.navigate(['../articles'])});
    }

}
