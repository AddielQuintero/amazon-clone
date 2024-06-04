import React from 'react'
import { useAppDispatch } from '@/lib/redux/store/index.store'
import { removeFromCart } from '@/lib/redux/slice/cart.slice'
import { IProps } from '@/types/product'
import { Price } from '../Price'
import { AmazonButton, StyledLink, Title } from '../../styles/sharedstyles'
import { Container, Image, Info, TitleContainer } from './styled'

export const CheckoutProduct = ({ id, title, image, price }: IProps) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // dispatch(removeFromCart({ id }))
    dispatch(removeFromCart({ id }))
  }

  return (
    <Container>
      <Image src={image} alt={title} />

      <Info>
        <TitleContainer>
          <StyledLink href={`/product/${id}`}>
            <Title>{title}</Title>
          </StyledLink>
          <Price itemPrice={price} />
        </TitleContainer>
        <AmazonButton onClick={(e) => handleRemoveFromCart(e)}>Remove from cart</AmazonButton>
      </Info>
    </Container>
  )
}
