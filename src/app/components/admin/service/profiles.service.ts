import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProfile } from './profile.interface';


@Injectable({providedIn: 'root'})
export class ProfilesService {

  constructor (private http:  HttpClient) {}
  // private profiles: BehaviorSubject<IProfile[]> = new BehaviorSubject<IProfile[]>([]);
  private profiles: BehaviorSubject<IProfile[]> = new BehaviorSubject<IProfile[]>([]);
  public url = 'assets/data/profiles.json';


  getProfiles(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`http://localhost:4200/${this.url}`);
  }
}
