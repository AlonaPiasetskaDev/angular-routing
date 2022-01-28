import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

import { ProfilesService } from './../../service/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  id: number | undefined;
  constructor(private route: ActivatedRoute, private ps: ProfilesService) {}

  ngOnInit(): void {
    this.ps.getProfile(this.route.snapshot.params['id']).subscribe(data => {
      console.log('ProfileComponent',data);

    })
      // this.route.paramMap.pipe(
      //   switchMap(params => params.getAll('id'))
      // )
      // .subscribe(data => this.id = +data);
  }


}
