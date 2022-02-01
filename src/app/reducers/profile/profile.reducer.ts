import { ProfileListState } from './../../components/admin/children/profile/profiles.state';
import { ProfileAction } from './profile.actions';
import { profileActionsTypes } from './profile.actions';
import { initializeState } from 'src/app/components/admin/children/profile/profiles.state';

const initialState = initializeState();

export function profileReducer(state: ProfileListState = initialState, action: ProfileAction){
  switch (action.type) {
    case profileActionsTypes.CREATE_PROFILE:
      return {...state, profilesList: [...state.ProfileList, action.payload]};
    // case profileActionsTypes.UPDATE_PROFILE:
    //   return {
    //     ...state,
    //     profilesList: [
    //         ...state.ProfileList,
    //     ],

    //   }
    default:
      return state;
  }
}
