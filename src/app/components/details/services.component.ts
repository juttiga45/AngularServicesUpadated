import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  Data = [];
  constructor(private servide: DataService) {}

  ngOnInit() {
    this.Data = this.servide.getDeatails();
    console.log(this.Data);
  }
}
