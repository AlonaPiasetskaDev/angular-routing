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
            ...state.profileList.map((profile) => {
              return profile.id === action.payload.id ? {
                ...profile,
                name : action.payload.name,
                username : action.payload.username
              } : profile;
          }),
        ]
      }
    case profileActionsTypes.DELETE_PROFILE:
    return {
      ...state,
      profileList: state.profileList.filter((profile) => profile.id !== action.payload.id)
      // ...state.profileList.map((profile) => {
      //   if (profile.id === action.payload.id) {
      //     ...state.profileList.slice(0, action.payload),
      //     ...state.profileList.slice(action.payload + 1)
      //   }
      // })
    }
    default:
      return state;
  }
}
