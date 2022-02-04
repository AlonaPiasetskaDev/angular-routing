import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SharedModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent],

})
export class HomeModule {
}
