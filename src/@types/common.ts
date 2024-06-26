import { ProductInCart } from './models'

export interface OptionSelect {
  value: any
  label: string
}

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

export interface ListConfig {
  itemCheckoutIds?: number[]
  quantityCheckoutIds?: number[]
  resale?: 0 | 1
  shareSingleProduct?: 0 | 1
  checkoutShare?: 0 | 1
  productResale?: ProductInCart[]
  viewType?: 'cart' | 'product'
  cartShareType?: 'share-link' | 'view-link-share'
  checkoutType?: 'receive-product' | 'storage-for-resale'
  itemsPerPage?: number | string
  currentPage?: number | string
  sender?: string
}
