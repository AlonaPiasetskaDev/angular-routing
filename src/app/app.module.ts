import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from './components/admin/children/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfilesListComponent } from './components/admin/children/profiles-list/profiles-list.component';
import { LoginComponent } from './components/login/login.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { FormsModule } from '@angular/forms';
import { profileReducer } from './reducers/profile/profile.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AdminComponent,
    ProfilesListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    // StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
