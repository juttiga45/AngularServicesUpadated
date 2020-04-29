import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public colorGrey = true;
  public colorRed = true;
  isBoolean = true;
  public style = "italic";
  public font = "30px";
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.colorGrey = !this.colorGrey;
    this.colorRed = !this.colorRed;
  }
}
