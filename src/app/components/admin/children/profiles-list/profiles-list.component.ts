import { DeleteProfile, LoadProfiles, UpdateProfile } from './../../../../reducers/profile/profile.actions';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { IProfile } from '../profile/profile.interface';
import { ProfilesStore } from './profiles.store';
import { ERole } from 'src/app/enums/role.enums';
import { LinkerPipe } from 'src/app/shared/linker.pipe';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss'],
  providers: [ProfilesStore, LinkerPipe],
})
export class ProfilesListComponent implements OnInit {

  event: any = '';
  name: any;
  username: any;

  isEdit: number | null = null;

  updateName(){
    console.log(this.name);
  }

  updateUsername(){
    console.log(this.username)
  }

  @Output() toggleModal: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private ps: ProfilesService, private store: Store<{profiles: IProfile[]}>) { }

  profiles: any = [];
  $profiles: Observable<IProfile[]> = this.store.select(state => state.profiles);

  isEditing = false;

  setEditItemIndex(index: number): void{
    this.isEdit = index === this.isEdit ? null : index;
    console.log(`this.isEdit: ${this.isEdit}`);

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
    this.updateName();
    this.updateUsername();
    this.setEditItemIndex(id);
    this.isEditing = true;
    this.name = this.profiles[id].name;
    this.username = this.profiles[id].username;
    // $event.stopPropagation();
    // console.log('profile clicked', this.profiles[id])

  }

  saveChanges(index: number) {
    this.setEditItemIndex(index);
    this.profiles[index].name = this.name;
    this.profiles[index].username = this.username;
    this.store.dispatch(new UpdateProfile(this.profiles));
    console.log('this.store');
    console.log(this.store)
    this.isEditing = false;
    console.log('updated');
    console.log(this.profiles);
    console.log('saved!');

    // this.ps.getProfiles((data: any))
  }

  deleteProfile($event: Event, id: any){
    this.store.dispatch(new DeleteProfile(id));
    console.log(`delete: ${id}`)
    console.log('this.store');
    console.log(this.store)

  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProfiles([{
      id: 0,
      name: '',
      username: '',
      role: ERole.user
    }]));

    this.ps.getProfiles().subscribe((data: any) => {
      this.$profiles = data;
      this.profiles = this.$profiles;
      console.log('this.profiles', this.profiles)
    });
  }
}
