import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ProfilesListComponent } from './profiles-list.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ProfilesStore } from './profiles.store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkerPipe } from 'src/app/shared/linker.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    CommonModule
  ],
  bootstrap: [ProfilesListComponent],
  declarations: [
    AddProfileComponent
  ],
  providers: [ProfilesStore]
})
export class AdminModule { }
