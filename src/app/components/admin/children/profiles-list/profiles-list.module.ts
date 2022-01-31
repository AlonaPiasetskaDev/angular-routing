import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProfilesListComponent } from './profiles-list.component';
import { AddProfileComponent } from './add-profile/add-profile/add-profile.component';


@NgModule({
  imports: [
    HttpClientModule
  ],
  bootstrap: [ProfilesListComponent],
  declarations: [
    AddProfileComponent
  ],
})
export class AdminModule { }
