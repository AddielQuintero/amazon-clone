import React from 'react'
import { AmazonButton } from '@/styles/sharedstyles'
import { useAppDispatch } from '@/lib/redux/store/index.store'
import { addToCart } from '@/lib/redux/slice/cart.slice'
import { ProductProps } from '@/types/product'

export const AddToCart = ({ id, title, image, price, rating }: ProductProps) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(addToCart({ id, title, image, price, rating }))
  }

  return <AmazonButton onClick={(e) => handleAddToCart(e)}>Add to cart</AmazonButton>
}
