import { CheckoutTypeEnum, OrderStatus, PaymentTypeEnum } from '../enums'
import { ProductInCart } from './product'

export interface ReceiveProductForm {
  firstName: string
  lastName: string
  email: string
  country: string
  stateOrProvince: string
  city?: string
  phone: string
  addressDetail: string
  postalCode?: string
  paymentMethod: string
  cardNumber: string
  expirationDate: string
  cvv: string
  nameOnCard: string
  walletId: string
}

export interface StorageForResaleForm {
  paymentMethod: string
  cardNumber: string
  expirationDate: string
  cvv: string
  nameOnCard: string
  walletId: string
}

export interface UserOrderHistory {
  orderID: string
  user: string
  buyer: string
  productIds: string[]
  quantities: string[]
  prices: string[]
  cartItemIds: string[]
  afterPrices: string[]
  totalPrice: string
  checkoutType: CheckoutTypeEnum
  orderStatus: OrderStatus
  codeRef: string
  paymentType: PaymentTypeEnum
  createdAt: string
  isExecuted: boolean
  products?: ProductInCart[]
}

export interface UserOrderResale {
  orderID: string
  products: ProductInCart[]
}

export interface UserPaymentHistory {
  paymentType: PaymentTypeEnum
  totalPayment: string
}

export interface RecentPurchase {
  productID: string
  buyAt: string
}
