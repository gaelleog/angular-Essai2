import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  //   constructor(http:HttpClient) {
  //   const post$:Observable<Post> = http.get<Post>('/assets/data.json');
  //   post$.subscribe( post=>{
  //     this.post = post;
  //     console.log(post);
  //   });
  // }

  id = 1;
  private dataurl = `/assets/data${this.id}.json`;

  constructor(private httpClient: HttpClient) {}

  public getArticles() {
    return this.httpClient.get(this.dataurl);
  }
}
