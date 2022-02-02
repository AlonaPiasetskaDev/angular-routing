import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private ps: ProfilesService) {
    this.id = this.route.snapshot.params['id'];
  }
  profile: any;
  ngOnInit(): void {
    // this.ps.getProfile(this.id).subscribe((data: any) => {
    //   console.log('Profile component', this.id);
    //   this.profile = data[this.id]
    // })
  }


}
