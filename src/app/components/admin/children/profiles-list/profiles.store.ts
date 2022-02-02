import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { select } from "@ngrx/store";
import { IProfile } from "../profile/profile.interface";

export interface ProfilesState {
  profiles: IProfile[];
}

@Injectable()
export class ProfilesStore extends ComponentStore<ProfilesState> {

  constructor() {
    super({ profiles: [] });
  }

  readonly profiles$: Observable<IProfile[]> = this.select(state => state.profiles);
}
