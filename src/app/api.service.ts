import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Uid } from "../app/models/uid.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  addUid(uid: string) {
    const uidRecup = {
      uid: ''
    };
    uidRecup.uid = uid;
  }


  private ids: Uid[];
  id = 1;
  private dataurl = `/assets/data${this.id}.json`;

  constructor(private httpClient: HttpClient) {}

  public getArticles() {
    return this.httpClient.get(this.dataurl);
  }
}
