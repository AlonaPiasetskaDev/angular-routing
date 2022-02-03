import { IProfile } from './children/profile/profile.interface';
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from "@angular/core";
import { ProfilesState } from './children/profiles-list/profiles.store';

@Injectable()
export class ProfilesStore extends ComponentStore<ProfilesState> {
  constructor(){
    super({profiles: []})
  }

  readonly addProfile = this.updater((state, profile: IProfile) => ({
    profiles: [...state.profiles, profile],
  }))
}
