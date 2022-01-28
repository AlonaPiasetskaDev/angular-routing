import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule { }
