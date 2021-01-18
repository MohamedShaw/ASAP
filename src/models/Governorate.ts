import { Local } from './Local';
import { City } from './City';


export interface Governorate {
  id: string
  governorate: Local
  cities: City[]
}