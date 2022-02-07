import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [LoginComponent],
})
export class LoginModule { }
