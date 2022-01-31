import { IProfile } from './../interfaces/profile.interface';
import { ProfileAction } from './../actions/profile.actions';
import { profileActionsTypes } from '../actions/profile.actions';

export const profileNode = 'profile';

export interface IProfileState {
  length: number,
  profilesList: IProfile[]
}

export const initialState: IProfileState = {
length: 0,
profilesList:[]
};

export function profileReducer(state: IProfileState = initialState, action: ProfileAction): IProfileState {
  switch (action.type) {
    case profileActionsTypes.CREATE_PROFILE:
      return {...state, profilesList: [...state.profilesList, action.payload]};
    case profileActionsTypes.UPDATE_PROFILE:
      return {
        ...state,
        profilesList: [
            ...state.profilesList,
            state.profilesList.
        ]
        name: action.payload.name,
        username: action.payload.username
      }
    default:
      return state;
  }
}
