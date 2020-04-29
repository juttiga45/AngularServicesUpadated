import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { ServicesComponent } from "./components/details/services.component";
import { DataService } from "./services/data.service";
import { CustomDirectiveDirective } from "./directives/custom-directive.directive";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "produts", component: ProductsComponent },
  { path: "details", component: ServicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    CustomDirectiveDirective
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
