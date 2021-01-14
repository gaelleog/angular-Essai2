import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-file",
  templateUrl: "./search-file.component.html",
  styleUrls: ["./search-file.component.css"]
})
export class SearchFileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
