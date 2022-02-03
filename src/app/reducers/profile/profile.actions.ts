import {
  Action
} from '@ngrx/store';

import {
  IProfile
} from '../../components/admin/children/profile/profile.interface';

export enum profileActionsTypes {
    LOAD_PROFILES = '[PROFILE] Load profiles',
    LOAD_SUCCESS = '[PROFILE] Load successful',
    CREATE_PROFILE = '[PROFILE] Create profile',
    CREATED_SUCCESS = '[PROFILE] Created success',
    UPDATE_PROFILE = '[PROFILE] Update profile',
    UPDATED_SUCCESS = '[PROFILE] Updated success',
    DELETE_PROFILE = '[PROFILE] Delete profile',
    DELETED_SUCCESS = '[PROFILE] Deleted success'
}

export class LoadProfiles implements Action {
  readonly type = profileActionsTypes.LOAD_PROFILES;
  constructor(public payload: IProfile[]) {};
}

export class LoadSuccess implements Action {
  readonly type = profileActionsTypes.LOAD_SUCCESS;
  constructor(public payload: IProfile[]) {};
}

export class CreateProfile implements Action {
  readonly type = profileActionsTypes.CREATE_PROFILE;
  constructor(public payload: IProfile) {}
}

export class CreatedSuccess implements Action {
  readonly type = profileActionsTypes.CREATED_SUCCESS;
  constructor(public payload: IProfile) {}
}

export class UpdateProfile implements Action {
  readonly type = profileActionsTypes.UPDATE_PROFILE;
  constructor(public payload: IProfile) {}
}

export class UpdatedSuccess implements Action {
  readonly type = profileActionsTypes.UPDATED_SUCCESS;
  constructor(public payload: IProfile) {}
}

export class DeleteProfile implements Action {
  readonly type = profileActionsTypes.DELETE_PROFILE;
  constructor(public payload: {
    id: number
  }) {}
}

export class DeletedSuccess implements Action {
  readonly type = profileActionsTypes.DELETED_SUCCESS;
  constructor(public payload: {
    id: number
  }) {}
}

export type ProfileAction = LoadProfiles | LoadSuccess | CreateProfile | CreatedSuccess | UpdateProfile | UpdatedSuccess | DeleteProfile | DeletedSuccess;
