import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProfilesListComponent } from './profiles-list.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ProfilesStore } from './profiles.store';


@NgModule({
  imports: [
    HttpClientModule
  ],
  bootstrap: [ProfilesListComponent],
  declarations: [
    AddProfileComponent
  ],
  providers: [ProfilesStore]
})
export class AdminModule { }
