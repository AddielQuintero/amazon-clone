import React from 'react'
import { PriceProps } from '@/types/product'
import { Pence, PriceContainer } from './styled'

export const Price = ({ itemPrice }: PriceProps) => {
  const handlePrice = () => {
    if (!itemPrice) return { pounds: '0', pence: '00' }
    const convertToString = itemPrice.toString()
    const convertToArray = convertToString.split('')

    // Remove last two items in array and convert to string
    const getPoundsAmount = convertToArray.slice(0, -2).join('')
    // Get last two items in array and convert to string
    const getPenceAmount = convertToArray.splice(convertToArray.length - 2).join('')

    return { pounds: getPoundsAmount, pence: getPenceAmount }
  }

  const { pounds, pence } = handlePrice()

  return (
    <PriceContainer>
      <small>£</small>
      <span>
        {pounds}
        <Pence>.{pence}</Pence>
      </span>
    </PriceContainer>
  )
}
