import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY = "ba95653c055b4a2c87073a4e40b0350f";

  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`
    );
  }
}
