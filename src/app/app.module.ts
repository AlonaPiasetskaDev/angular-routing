// import { LinkerPipe } from 'src/app/shared/pipes/linker.pipe';
import { HomeModule } from './components/home/home.module';
import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { ProfileComponent } from './components/admin/children/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfilesListComponent } from './components/admin/children/profiles-list/profiles-list.component';
import { LoginComponent } from './components/login/login.component';
import { OnlyNumberDirective } from 'src/app/directives/only-number.directive';

import { reducers, metaReducers } from './reducers';

import { ProfileEffects } from './reducers/profile/profile.effects';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AdminComponent,
    ProfilesListComponent,
    LoginComponent,
    OnlyNumberDirective,  //using from anywhere
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
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([ProfileEffects]),
    HomeModule,
    SharedModule
  ],
  providers: [],
  // exports: [OnlyNumberDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
