import { AdminGuard } from './components/admin/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/'
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/admin',
    component: AdminComponent,
    canActivate: [AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AppRoutingModule { }
