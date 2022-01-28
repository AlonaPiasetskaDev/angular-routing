import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProfilesListComponent } from './profiles-list.component';


@NgModule({
  imports: [
    HttpClientModule
  ],
  bootstrap: [ProfilesListComponent],
})
export class AdminModule { }
