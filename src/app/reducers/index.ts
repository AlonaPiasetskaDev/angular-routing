import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IProfileState, profileNode, profileReducer } from './profile/profile.reducer';

export interface IState {
  [profileNode]: IProfileState
}

export const reducers: ActionReducerMap<IState> = {
[profileNode]: profileReducer
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
