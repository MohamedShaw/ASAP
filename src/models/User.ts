import { ProfileImg } from './ProfileImg';



export interface User {
  id: string
  firstName: string;
  lastName: string;
  email?: string
  phone: string
  profileImg: ProfileImg
}


export interface UserData {
  user?: User,
  accessToken?: string
}
