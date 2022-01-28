import { Subscription } from 'rxjs';
import { ProfilesService } from './../../service/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private ps: ProfilesService) { }
  profiles: any = [];

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.ps.getProfiles().subscribe((data) => {
      console.log(data);
      this.profiles = data;
    });
  }
}
