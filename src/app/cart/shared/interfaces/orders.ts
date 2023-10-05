
export interface Orders {
  shippingAddress: ShippingAddress,
  totalOrderPrice: number,
  paymentMethodType: string,
  cartItems: Product[]
  updatedAt: string
}
interface ShippingAddress {
  details: string,
  phone: string,
  city: string
}
interface Product {
  count: number,
  price: number,
  product: InnerProduct
}
interface InnerProduct {
  title: string,
  imageCover: string,
  category: Category,
  brand: Brand,
  ratingsAverage: number
}
interface Category {
  name: string
}
interface Brand {
  name: string
}