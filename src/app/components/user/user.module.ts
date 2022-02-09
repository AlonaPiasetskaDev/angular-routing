import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [UserComponent],
})
export class UserModule { }
