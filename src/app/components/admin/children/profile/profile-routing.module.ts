import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    HttpClientModule
  ],
  bootstrap: [ProfileComponent],
})
export class ProfileRoutingModule { }
