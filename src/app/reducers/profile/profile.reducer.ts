import { IProfileListState } from './../../components/admin/children/profile/profiles.state';
import { ProfileAction } from './profile.actions';
import { profileActionsTypes } from './profile.actions';
import { initializeState } from 'src/app/components/admin/children/profile/profiles.state';

export const profileNode = 'profile';

// const initialState = initializeState();
const initialState: IProfileListState = {
  ProfileList: [],
  Loading: false,
  Loaded: true
};

export function profileReducer(state: IProfileListState = initialState, action: ProfileAction): IProfileListState{
  switch (action.type) {
    case profileActionsTypes.CREATE_PROFILE:
      return {...state, ProfileList: [...state.ProfileList, action.payload]};
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
