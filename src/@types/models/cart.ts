export interface ICartItem {
  id: string
  productID: string
  quantity: string
}

export interface ICartParams extends ICartItem {
  discountCodes: string[]
}
