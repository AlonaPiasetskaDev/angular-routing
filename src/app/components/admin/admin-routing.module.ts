import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesListComponent } from './children/profiles-list/profiles-list.component';
import { ProfileComponent } from './children/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    redirectTo: 'profiles-list'
  },
  {
    path: 'profiles-list',
    component: ProfilesListComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
