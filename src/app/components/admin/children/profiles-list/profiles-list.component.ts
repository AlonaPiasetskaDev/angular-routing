import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IProfile } from '../profile/profile.interface';
import { ProfilesStore } from './profiles.store';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss'],
  providers: [ProfilesStore],
})
export class ProfilesListComponent implements OnInit {

  readonly profiles$ = this.componentStore.profiles$.pipe(
    map(profiles => profiles),
  );

  @Output() toggleModal: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProfilesService,
    private readonly componentStore: ProfilesStore
  ) { }
  profiles: any = [];
  // name: string;
  // username: string;

  isEditing = false;

  openAddProfileModal() {
    console.log("add profile")
  }

  editProfile($event: Event) {
    this.isEditing = true;
    $event.stopPropagation();
    console.log('edit profile');

  }

  saveChanges() {
    console.log('saved!')
  }

  ngOnInit(): void {
    this.ps.getProfiles().subscribe((data: any) => {
      this.profiles = data;
      this.componentStore.setState({ profiles: data });
    });


  }
}
