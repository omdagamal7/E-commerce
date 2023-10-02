export interface Cart {
  numOfCartItems: number,
  data: Data,

}
interface Data {
  totalCartPrice: number,
  _id: string,
  products: Product[],
}
interface Product {
  count: number,
  product: InnerProduct,
  price: number,
}
interface InnerProduct {
  title: string,
  imageCover: string,
  category: Category,
  ratingsAverage: number,
  id: string
}
interface Category {
  name: string
}