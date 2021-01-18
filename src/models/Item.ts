import { Guarantees } from './Guarantees';
import { BookingUnit } from './BookingUnit';
import { Location } from './Location';
import { ItemImage } from './ItemImage';


export interface Item {
  id: string
  name: string
  description: string
  price: number
  category: string
  city: string
  guarantees: [Guarantees]
  bookingUnit: BookingUnit
  location: Location
  images: [ItemImage]
  user: string
}