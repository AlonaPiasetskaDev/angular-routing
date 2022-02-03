import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";

import { OnlyNumberDirective } from "src/app/directives/only-number.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [HomeComponent,
    // OnlyNumberDirective
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
