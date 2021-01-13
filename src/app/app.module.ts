import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NewsComponent } from "./news/news.component";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, NewsComponent, ArticleComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
