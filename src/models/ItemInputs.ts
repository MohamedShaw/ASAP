import { Guarantees } from './Guarantees';
import { BookingUnit } from './BookingUnit';
import { Location } from './Location';
import { ReactNativeFile } from '../api/node_modules/apollo-upload-client';


export interface ItemInputs {
  name: string
  description: string
  price: number
  category: string
  city: string
  images: ReactNativeFile[]
  location: Location
  guarantees: Guarantees[]
  bookingUnit: BookingUnit
}