
export interface WishList {
  count: number,
  data: Data[]
}
interface Data {
  ratingsQuantity: number,
  ratingsAverage: number,
  _id: string,
  title: string,
  price: number,
  imageCover: string,
  category: Category,
  brand: Brand
}
interface Category {
  name: string
}
interface Brand {
  name: string,
  image: string
}