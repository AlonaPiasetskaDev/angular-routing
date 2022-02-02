import { LoadProfiles } from './../../../../reducers/profile/profile.actions';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { IProfile } from '../profile/profile.interface';
import { ProfilesStore } from './profiles.store';
import { ERole } from 'src/app/enums/role.enums';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss'],
  providers: [ProfilesStore],
})
export class ProfilesListComponent implements OnInit {

  event: any = '';

  isEdit: number | null = null;

  @Output() toggleModal: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private ps: ProfilesService, private store: Store<{profiles: IProfile[]}>) { }

  profiles: any = [];
  $profiles: Observable<IProfile[]> = this.store.select(state => state.profiles);

  isEditing = false;

  setEditItemIndex(index: number): void{
    this.isEdit = index === this.isEdit ? null : index;
    console.log(this.isEdit);

  }

  openAddProfileModal() {
    console.log("add profile")
  }

  getProfileId(id: any){
    console.log('id',id);
    this.profiles[id];
    console.log(this.profiles[id])
  }

  editProfile($event: Event, id: any) {
    this.setEditItemIndex(id);
    this.isEditing = true;
    $event.stopPropagation();
    console.log('profile clicked', this.profiles[id])
  }

  saveChanges(index: number) {
    this.setEditItemIndex(index);
    this.isEditing = false;
    console.log('saved!')
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProfiles([{
      id: '',
      name: '',
      username: '',
      role: ERole.user
    }]));
    this.ps.getProfiles().subscribe((data: any) => {
      // this.profiles = data;
      this.$profiles = data;
      this.profiles = this.$profiles;
      console.log('this.profiles', this.profiles)
    });


  }
}
