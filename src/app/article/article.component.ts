import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  // articles: any;
  @Input() articleData: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.apiService.getArticles().subscribe(data => {
    //   this.articles = data;
    // });
  }
}
