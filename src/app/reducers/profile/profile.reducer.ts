import { IProfileListState } from './../../components/admin/children/profile/profiles.state';
import { ProfileAction } from './profile.actions';
import { profileActionsTypes } from './profile.actions';

export const profileNode = 'profile';

const initialState: IProfileListState = {
  profileList: [],
  Loading: false,
  Loaded: true
};

export function profileReducer(state: IProfileListState = initialState, action: ProfileAction): IProfileListState{
  switch (action.type) {
    case profileActionsTypes.LOAD_SUCCESS:
      return {...state, profileList: [...state.profileList, ...action.payload]};
    case profileActionsTypes.UPDATE_PROFILE:
      return {
        ...state,
        profileList: [
            ...state.profileList,
            // ...action.payload
        ]

      }
    default:
      return state;
  }
}
