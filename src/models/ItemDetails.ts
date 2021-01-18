import { ReactNativeFile } from "../api/node_modules/apollo-upload-client";

export interface ItemDetails {
  name?:string;
  description?:string;
  images?:ReactNativeFile[];
}