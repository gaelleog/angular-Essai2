import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private couscous = [];

  addUid(uid: string) {
    const uidRecup = {
      uid: ''
    };
    uidRecup.uid = uid;
    this.couscous.push(uidRecup);
    console.log(uid);

  }

  id = this.couscous;
  private dataurl = `/assets/data${this.id}.json`;

  constructor(private httpClient: HttpClient) {}

  public getArticles() {
    return this.httpClient.get(this.dataurl);
  }
}
