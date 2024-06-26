import { StringNullableChain } from 'lodash'

export interface Product {
  id: number
  params?: {
    images: string[]
    brandName: string
    capacity: number
    color: string
    memberPrice: number
    name: string
    quantity: number
    retailPrice: number
    retailer: number
    videoUrl: string
    vipPrice: number
  }
  image: any
  title: string
  numberItem: number
  retailPrice: number
  vipPrice: number
  category: string
  retailPriceChange?: number
  vipPriceChange?: number
  maxItems?: number
  quantityInCart?: number
}
export interface ProductData {
  createdAt: string
  id: string
  params: {
    activateTime: string
    boostTime: string
    brandName: string
    capacity: string
    categoryID: string
    color: string
    description: string
    expiryTime: string
    images: string[]
    isMultipleDiscount: boolean
    memberPrice: string
    name: string
    quantity: string
    retailPrice: string
    retailer: string
    reward: string
    videoUrl: string
    shippingFee: string
    vipPrice: string
    warranty: string
  }
  updatedAt: string
  height?: string
}

export interface ProductInCart extends ProductData {
  quantityInCart: number
  quantityInOrder?: number
  retailPriceChange?: number
  vipPriceChange?: number
  maxItems?: number
  parentOrderId?: string
}

export interface ProductRecent {
  id: number
  image: any
  title: string
  time: string
  purchases: number
}

export interface ProductBestSeller {
  productID: string
  sold: string
  timestamp: string
}

export interface IFlashSale {
  id: string
  startDate: string
  endDate: string
  retailPrice: string
  vipPrice: string
  memberPrice: string
  reward: string
  productID: string
}

export interface IProductDetail {
  product: ProductData
  comments: CommentProduct[]
  rating: string[]
  faq: FAQProduct[]
  faqP05: FAQProduct[]
  purchases: string[]
  searchTrend: string[]
}

export interface CommentProduct {
  commentType: string
  createdAt: string
  id: string
  message: string
  name: string
  productID: StringNullableChain
  updatedAt: string
  user: string
}

export interface FAQProduct {
  id: string
  content: string
  title: string
}

export interface RatingProduct {
  id: string
  user: string
  rateValue: string
  createdAt: string
}
