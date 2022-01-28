import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  id: number | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id=params['id']);
  }

}
