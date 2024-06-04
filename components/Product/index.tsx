import React from 'react'
import { ProductProps } from '@/types/product'
import { AddToCart } from '../AddToCart'
import { Rating } from '../Rating'
import { Price } from '../Price'
import { StyledLink, Title } from '../../styles/sharedstyles'
import { Info, ProductContainer } from './styled'

export const Product = ({ id, title, image, price, rating }: ProductProps) => {
  return (
    <ProductContainer>
      <picture>
        <source srcSet={image} type="image/webp" />
        <img src="https://media.graphassets.com/E5jUCkdvRH2qYjf3xU9l" alt={title} />
      </picture>
      <Info>
        <StyledLink href={`/product/${id}`}>
          <Title>{title}</Title>
        </StyledLink>
        <Price itemPrice={price} />
        <Rating ratingNumber={rating} />
      </Info>
      <AddToCart id={id} title={title} price={price} rating={rating} image={image} />
    </ProductContainer>
  )
}
