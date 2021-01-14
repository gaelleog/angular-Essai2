import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../api.service";

@Component({
  selector: "app-search-file",
  templateUrl: "./search-file.component.html",
  styleUrls: ["./search-file.component.css"]
})
export class SearchFileComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const uid = form.value["uid"];
    console.log(uid);
    this.apiService.addUid(uid);
  }
}
