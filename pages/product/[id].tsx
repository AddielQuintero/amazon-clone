import React from 'react'
import { useRouter } from 'next/router'
import { ProductDetails } from '@/components/ProductDetails'
import { useProduct } from '@/hooks/useProduct'
import { Container, Main } from '@/styles/sharedstyles'
import { Advert } from '@/components/Advert'

const Product = () => {
  const { query } = useRouter()
  const { loading, error, data } = useProduct(query.id as string)

  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  const { product } = data
  return (
    <Container>
      <Main>
        <Advert />
        <ProductDetails product={product} />
      </Main>
    </Container>
  )
}

export default Product
