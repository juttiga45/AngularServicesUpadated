import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  private obSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const customobservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        // observer.error(new Error("Error occured"));
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.obSubscription = customobservable.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.obSubscription.unsubscribe();
  }
}
