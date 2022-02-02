import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { IProfile } from '../profile/profile.interface';
import * as profilesMock from './profiles.json'

const profiles: IProfile[] = profilesMock;

@Injectable()
export class ProfilesDataService {

  getProfile(id?: number): Observable<Array<IProfile>> {
    return id ? of(profiles.filter(profile => profile.id === id)) : of(profiles)
  }

  // createProfle(todo: IProfile): Observable<IProfile> {
  //   return of({ id: uuidv4(), text: todo, complete: false });
  // }

  updateProfile(profile: IProfile): Observable<IProfile> {
    return of(profile);
  }

  deleteProfile(profile: IProfile): Observable<IProfile> {
    return of(profile);
  }
}
