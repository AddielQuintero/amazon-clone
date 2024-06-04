import { Product } from '@/components/Product'
import { useProducts } from '@/hooks/useProducts'
import { BackgroundImg, HomeContainer, ProductRows } from '@/styles/homestyles'
import { Main, Title } from '@/styles/sharedstyles'

export default function Home() {
  const { loading, error, data } = useProducts()

  const products = data ? data.products : []

  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  return (
    <HomeContainer>
      <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <Main>
        <ProductRows>
          {!loading &&
            products.map((product: any) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                rating={4}
                image={product.images[0].url}
              />
            ))}
        </ProductRows>
      </Main>
    </HomeContainer>
  )
}
