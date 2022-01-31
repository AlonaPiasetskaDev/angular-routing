import { ERole } from './../enums/role.enums';
import { Action } from '@ngrx/store';
import { IProfile } from '../reducers/profile.reducer';

export enum profileActionsTypes {
  CREATE_PROFILE = '[PROFILE] Create profile',
  UPDATE_PROFILE = '[PROFILE] Update profile',
  DELETE_PROFILE = '[PROFILE] Delete profile',
}

export class Create implements Action {
  readonly type = profileActionsTypes.CREATE_PROFILE;
  constructor(public payload: IProfile) { }
}

export class Update implements Action {
  readonly type = profileActionsTypes.UPDATE_PROFILE;
  constructor(public payload: IProfile) {}
}

export class Delete implements Action {
  readonly type = profileActionsTypes.DELETE_PROFILE;
  constructor(public payload: { id: number}) {}
}

export type ProfileAction = Create | Update | Delete
