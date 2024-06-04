export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  categories: CategoriesType[]
  images: ImageType[]
  reviews: ReviewType[]
}

export interface CategoriesType {
  id: string
  name: string
}

export interface ImageType {
  width: number
  height: number
  fileName: string
  url: string
}

export interface ReviewType {
  id: string
  rating: string
  email: string
  name: string
  headline: string
  content: string
}

export interface ProductProps {
  id: string
  title: string
  image: string
  price: number
  rating: number
}

export interface IProps {
  id: string
  title: string
  image: string
  price: number
}

export interface PriceProps {
  itemPrice: number
}

export interface ProductDetailsProps {
  product: ProductType
}

export interface RatingProps {
  ratingNumber: number
}

export interface ReviewProps {
  productReview: ReviewType;
  rating: number;
}