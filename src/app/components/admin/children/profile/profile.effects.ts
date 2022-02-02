import { IProfile } from './profile.interface';
import { LoadSuccess } from './../../../../reducers/profile/profile.actions';
import { ProfilesService } from './../../services/profiles.service';
import { Injectable } from "@angular/core";
import {
  createEffect,
  ofType,
  Actions
} from "@ngrx/effects";
import { catchError, EMPTY, mergeMap, switchMap } from "rxjs";
import { map } from "rxjs/operators";
import { IProfileListState } from './profiles.state';
import { profileActionsTypes } from 'src/app/reducers/profile/profile.actions';


@Injectable()
export class ProfileEffects {
  getProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActionsTypes.LOAD_PROFILES),
      mergeMap(() => this.profileService.getProfiles()
      .pipe(
        map((profiles: IProfile[]) => {
          console.log(profiles);

          return new LoadSuccess(profiles)
        }),
        catchError(() => EMPTY)
      ))
    )
  })

  constructor(
    private actions$: Actions,
    private profileService: ProfilesService
    ) {}
}
