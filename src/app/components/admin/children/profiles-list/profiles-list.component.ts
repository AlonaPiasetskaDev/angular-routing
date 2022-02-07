import { ComponentStore } from '@ngrx/component-store';
import { DeleteProfile, LoadProfiles, UpdateProfile } from './../../../../reducers/profile/profile.actions';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProfilesService } from '../../services/profiles.service';
import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { IProfile } from '../profile/profile.interface';
import { ProfilesState, ProfilesStore } from './profiles.store';
import { ERole } from 'src/app/enums/role.enums';
import { LinkerPipe } from 'src/app/shared/pipes/linker.pipe';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss'],
  providers: [ProfilesStore, LinkerPipe, ComponentStore],
})
export class ProfilesListComponent implements OnInit, AfterViewInit {

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

  @ViewChild('addProfileModal', {static: true}) addProfileModal: ElementRef;

  profiles: any = [];
  $profiles: Observable<IProfile[]> = this.store.select(state => state.profiles);

  isEditing = false;

  check() {
    console.log('click')
  }

  addProfile(profile: IProfile){
    // this.store.add
    // this.store.setState((state) => {
    //   return {
    //     ...state,
    //     profile: [...state.profiles, profile]
    //   }
    // })
  }

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

  }

  saveChanges(index: number) {
    this.setEditItemIndex(index);
    this.profiles[index].name = this.name;
    this.profiles[index].username = this.username;
    this.store.dispatch(new UpdateProfile(this.profiles[index]));
    this.isEditing = false;
  }

  deleteProfile($event: Event, id: any){
    this.store.dispatch(new DeleteProfile(id));
  }

  ngOnInit(): void {
    this.ps.getProfiles().subscribe((data: any) => {
      this.$profiles = data;
      this.profiles = this.$profiles;
      this.store.dispatch(new LoadProfiles(this.profiles));
      console.log('this.profiles', this.profiles)
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.addProfileModal.nativeElement.click();
    }, 1500)
  }
} 
