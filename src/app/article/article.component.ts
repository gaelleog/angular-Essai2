import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articles: void;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getArticles().subscribe( data => {
      this.articles = console.log(data);
    });
  }

}