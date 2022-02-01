import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IProfileListState } from '../components/admin/children/profile/profiles.state';
import { profileNode, profileReducer } from './profile/profile.reducer';

export interface IState {
  [profileNode]: IProfileListState
}

export const reducers: ActionReducerMap<IState> = {
//@ts-ignore
[profileNode]: profileReducer
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
