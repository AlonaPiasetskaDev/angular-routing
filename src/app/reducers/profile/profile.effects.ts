import { IProfile } from '../../components/admin/children/profile/profile.interface';
import { LoadSuccess, UpdatedSuccess, UpdateProfile } from './profile.actions';
import { ProfilesService } from '../../components/admin/services/profiles.service';
import { Injectable } from "@angular/core";
import {
  createEffect,
  ofType,
  Actions
} from "@ngrx/effects";
import { catchError, EMPTY, mergeMap, switchMap, filter, of , from} from "rxjs";
import { map} from "rxjs/operators";
import { profileActionsTypes } from 'src/app/reducers/profile/profile.actions';


@Injectable()
export class ProfileEffects {

  getProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActionsTypes.LOAD_PROFILES),
      mergeMap((payload) => from([payload['payload']]).pipe(
        map((profiles: IProfile[]) => {
          console.log(profiles);

          return new LoadSuccess(profiles)
        }),
        catchError(() => EMPTY)
      ))
      )
  })


  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(profileActionsTypes.UPDATE_PROFILE),
      switchMap((payload) => from([payload['payload']]).pipe(
        map((profile: IProfile) => {
          console.log(profile);
          return new UpdatedSuccess(profile)
        }),
        catchError(() => EMPTY)
      )))
  })

  // deleteProfile$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(profileActionsTypes.DELETE_PROFILE),

  //   )
  // })

  constructor(
    private actions$: Actions,
    private profileService: ProfilesService
    ) {}
}
