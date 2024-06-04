import React from 'react'
import { AddToCart } from '../AddToCart'
import { Price } from '../Price'
import { Review } from '../Review'
import { CategoriesType, ProductDetailsProps, ReviewType } from '@/types/product'
import { Container, Image, LeftColumn, RightColumn } from './styled'
import { Title } from '../../styles/sharedstyles'

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Container>
      <LeftColumn>
        <Image src={product.images[0].url} alt={product.name} />
      </LeftColumn>
      <RightColumn>
        <Title>{product.name}</Title>
        <Price itemPrice={product.price} />
        {product.categories.map((category: CategoriesType) => (
          <p key={category.id}>{category.name}</p>
        ))}
        <p>{product.description}</p>

        <AddToCart
          id={product.id}
          title={product.name}
          price={product.price}
          rating={5}
          image={product.images[0].url}
        />

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <>
            <Title>Top reviews from United Kingdom</Title>
            {product.reviews.map((productReview: ReviewType, key) => (
              <Review key={productReview.id} productReview={productReview} rating={4} />
            ))}
          </>
        )}
      </RightColumn>
    </Container>
  )
}
