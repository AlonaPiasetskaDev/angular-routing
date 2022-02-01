import { Action } from '@ngrx/store';

import { IProfile } from '../../components/admin/children/profile/profile.interface';

export enum profileActionsTypes {
  CREATE_PROFILE = '[PROFILE] Create profile',
  UPDATE_PROFILE = '[PROFILE] Update profile',
  DELETE_PROFILE = '[PROFILE] Delete profile',
}

export class CreateProfile implements Action {
  readonly type = profileActionsTypes.CREATE_PROFILE;
  constructor(public payload: IProfile) {}
}

export class UpdateProfile implements Action {
  readonly type = profileActionsTypes.UPDATE_PROFILE;
  constructor(public payload: IProfile) {}
}

export class DeleteProfile implements Action {
  readonly type = profileActionsTypes.DELETE_PROFILE;
  constructor(public payload: { id: number}) {}
}

export type ProfileAction = CreateProfile | UpdateProfile | DeleteProfile;
