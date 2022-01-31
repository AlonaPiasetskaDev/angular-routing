import { IProfile } from "./interfaces/profile.interface";

export interface AppStore {
  readonly profiles: Array<IProfile>
}
