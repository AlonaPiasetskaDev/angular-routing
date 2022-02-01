import { IProfile } from './profile.interface';

export interface IProfileListState {
  Loading: boolean;
  Loaded: boolean;
  ProfileList: IProfile[];
}


export const initializeState = (): IProfileListState => {
  return ({
    ProfileList: [],
    Loading: false,
    Loaded: true
  });
}
