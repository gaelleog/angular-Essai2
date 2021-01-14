import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-search-file",
  templateUrl: "./search-file.component.html",
  styleUrls: ["./search-file.component.css"]
})
export class SearchFileComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  articles: any;

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const uid = form.value["uid"];
    console.log(uid);
    this.apiService.getArticles(uid).subscribe(data => {
    this.articles = data;
    console.log(data);
    // this.router.navigate(['/articles']);
    });
  }
}
