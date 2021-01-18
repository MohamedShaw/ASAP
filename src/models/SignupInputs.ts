import { ReactNativeFile } from "../api/node_modules/apollo-upload-client";

export interface SignupVariables {
  profileImg?: ReactNativeFile
  phone?: string;
  email?: string;
  firstName: string;
  lastName: string;
  password: string;
}