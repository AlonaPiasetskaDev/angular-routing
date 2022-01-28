import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProfile } from './profile.interface';


@Injectable({providedIn: 'root'})
export class ProfilesService {

  constructor (private http:  HttpClient) {}
  public url = 'assets/data/profiles.json';


  getProfiles(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`http://localhost:4200/${this.url}`);
  }

  getProfile(id: string): Observable<any>{
    return this.getProfiles().pipe(tap(result => {
      result.filter(profile => {
        profile.id === id;
      })
    }))
  }

  // {
  //   let profiles = this.getProfiles();
  //   let profile = Array(profiles).find(profile => profile.['id'] === id);
  //   // return this.http.get<IProfile>(`http://localhost:4200/${this.url}`);
  //   return profile;
  // }
}
