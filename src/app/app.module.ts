import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ArticleComponent } from "./article/article.component";
import { SearchFileComponent } from "./search-file/search-file.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "articles", component: ArticleComponent },
  { path: "search", component: SearchFileComponent },
  { path: "", component: SearchFileComponent }
];

@NgModule({
  declarations: [AppComponent, ArticleComponent, SearchFileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
