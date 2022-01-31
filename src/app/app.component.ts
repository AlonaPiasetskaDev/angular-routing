import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from './app-state.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing-app';
  public loading = false;

  constructor(router: Router, private store: Store<AppStore>){

    // router.events.subscribe((event: RouterEvent) => {
    //   switch(true){
    //     case event instanceof NavigationStart: {
    //       this.loading = true;
    //       break;
    //     }
    //     case event instanceof NavigationEnd:
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError: {
    //       this.loading = false;
    //       break;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // })
  }

  ngOnInit(): void {
      this.store.select(store => store.profiles)
  }
}
