import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  menuItems = [{title:'Home',linkUrl:'home'},{title:'Products',linkUrl:'produts'},
    {title:'Details',linkUrl:'details'}];
}
