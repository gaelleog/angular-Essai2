import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private couscous = [];
  private dataurl;

  // addUid(uid: string) {
  //   // const uidRecup = {
  //   //   uid: ''
  //   // };
  //   // uidRecup.uid = uid;
  //   // this.couscous.push(uidRecup);
  //   console.log(uid);
  // }
  // id = 1;
  // console.log(this.testajine);
  // private dataurl = `/assets/data${this.testajine}.json`;

  constructor(private httpClient: HttpClient) {}

  public getArticles(uid: string) {
    this.dataurl = `/assets/data${uid}.json`;
    return this.httpClient.get(this.dataurl);
  }
}
