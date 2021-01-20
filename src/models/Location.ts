export interface Location {
  longitude: number;
  latitude: number;
}

export enum LocationPermission {
  granted,
  denied,
  blocked,
}
