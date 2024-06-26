export interface UpdateProfileForm {
  fullName: string
  gender: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  address: string
}

export interface Address {
  id: number
  country: string
  city: string
  stateOrProvince: string
  postalCode?: string
  addressDetail: string
}

export interface AddAddressForm {
  country: string
  city?: string
  stateOrProvince: string
  postalCode?: string
  addressDetail: string
}

export interface Card {
  id: number
  cardNumber: string
  expirationDate: string
  cvv: number
  nameOnCard: string
}

export interface CardForm {
  cardNumber: string
  expirationDate: string
  cvv: number
  nameOnCard: string
}

export interface UserActivity {
  customer: string
  productIds: string[]
  quantities: string[]
  addedAt: string[]
}
