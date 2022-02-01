import { IProfile } from "./components/admin/children/profile/profile.interface";

export interface AppStore {
  readonly profiles: Array<IProfile>
}
