export interface Details {
  sold: number,
  images: string[],
  price: number,
  description: string,
  imageCover: string,
  category: Category,
  ratingsAverage: number,
  title: string,
  brand: Brand,
  id: string;
}
interface Category {
  name: string,
}
interface Brand {
  image: string,
  name: string
}