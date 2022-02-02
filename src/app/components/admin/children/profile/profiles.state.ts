import { IProfile } from './profile.interface';

export interface IProfileListState {
  Loading: boolean;
  Loaded: boolean;
  profileList: IProfile[];
}


export const initializeState = (): IProfileListState => {
  return ({
    profileList: [],
    Loading: false,
    Loaded: true
  });
}
