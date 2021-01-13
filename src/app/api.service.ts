import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private dataurl = 'assets/data1.json';

  constructor(private httpClient: HttpClient) {}

  public getArticles() {
    return this.httpClient.get(this.dataurl);
  }
}
