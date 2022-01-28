import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }
  profiles: any = [];
  public url = 'assets/data/profiles.json';

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe(data => {
      this.profiles = data;
      console.log('this.profiles', this.profiles);
    })
  }

  getProfiles = () => {

  }

}
