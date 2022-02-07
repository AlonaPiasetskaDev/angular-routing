import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDrawerComponent } from './children/profile/profile-drawer/profile-drawer.component';


@NgModule({
  imports: [
    HttpClientModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent],
  declarations: [
    ProfileDrawerComponent
  ],
})
export class AdminModule { }
