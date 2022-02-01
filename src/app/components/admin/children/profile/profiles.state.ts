import { IProfile } from './profile.interface';

export interface ProfileListState {
  Loading: boolean;
  Loaded: boolean;
  ProfileList: IProfile[];
}


export const initializeState = (): ProfileListState => {
  return ({
    ProfileList: [],
    Loading: false,
    Loaded: true
  });
}
