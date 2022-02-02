import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProfile } from '../children/profile/profile.interface';


@Injectable({ providedIn: 'root' })
export class ProfilesService {

  constructor(private http: HttpClient) { }
  public url = 'assets/data/profiles.json';


  getProfiles(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`http://localhost:4200/${this.url}`);
  }

  // getProfile(id: string): Observable<any> {
  //   return this.getProfiles().pipe(tap(result => {
  //     result.filter(profile => {
  //       profile.id === id;
  //     })
  //   }))
  // }
}
