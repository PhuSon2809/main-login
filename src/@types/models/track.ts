import { TrackUserEnum } from '../enums'

export interface ITrackingUser {
  orderID: string
  trackType: TrackUserEnum
  customer: string
  productIds: string[]
  quantities: string[]
}

export interface ITrackActivity {
  customer: string
  productIds: string[]
  quantities: string[]
  addedAt: string[]
}
