import { useSelector } from 'react-redux'
import { Container, Main } from '@/styles/sharedstyles'
import { Advert } from '@/components/Advert'
import { CheckoutBody, CheckoutContainer, CheckoutTitle } from '@/styles/checkoutstyles'
import { CheckoutProduct } from '@/components/CheckoutProduct'
import { SubTotal } from '@/components/SubTotal'

export default function Checkout() {
  const cartItems = useSelector((state: any) => state.cart.cartItems)
  // console.log('🚀  cartItems:', cartItems)

  return (
    <Container>
      <Main>
        <Advert />
        <CheckoutBody>
          <CheckoutContainer>
            {cartItems.length === 0 ? (
              <div>
                <h2>Your Shopping Cart is empty</h2>
              </div>
            ) : (
              <div>
                <CheckoutTitle>
                  Your Shopping Cart - {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'} in cart
                </CheckoutTitle>
                {cartItems.map((product: any, index: number) => (
                  <CheckoutProduct
                    key={index}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
            )}
          </CheckoutContainer>
          {cartItems?.length > 0 && <SubTotal />}
        </CheckoutBody>
      </Main>
    </Container>
  )
}
