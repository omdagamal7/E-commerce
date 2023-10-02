export interface Products {
  title: string,
  price: number,
  imageCover: string,
  category: Category,
  brand: Brand,
  ratingsAverage: number,
  id: string
}
interface Category {
  name: string,
}
interface Brand {
  name: string
}