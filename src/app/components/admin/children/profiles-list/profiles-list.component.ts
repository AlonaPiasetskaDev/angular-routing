import { Subscription } from 'rxjs';
import { ProfilesService } from './../../service/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {

  @Output() toggleModal: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private ps: ProfilesService) { }
  profiles: any = [];
  // name: string;
  // username: string;

  isEditing = false;

  openAddProfileModal(){
    console.log("add profile")
  }

  editProfile($event: Event){
    this.isEditing = true;
    $event.stopPropagation();
    console.log('edit profile');

  }

  saveChanges(){
    console.log('saved!')
  }

  ngOnInit(): void {
    this.ps.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }
}
