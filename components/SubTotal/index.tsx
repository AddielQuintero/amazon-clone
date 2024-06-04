import { useSelector } from 'react-redux'
import { Price } from '../Price'
import { AmazonButton } from '../../styles/sharedstyles'
import { Container, Delivery, TotalContainer } from './styled'

export const SubTotal = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems)
  const quantity = cartItems.length

  const handleTotal = () => {
    return cartItems.reduce((total: number, item: any) => (total += item.price), 0)
  }

  const subTotal = handleTotal()

  return (
    <Container>
      <Delivery>
        Your order qualifies for FREE Delivery in the UK. Delivery Details Select this option at checkout.
      </Delivery>
      <TotalContainer>
        <p>SubTotal</p>
        <p>({quantity} items):</p>
        <Price itemPrice={subTotal} />
      </TotalContainer>
      <div>
        <input type="checkbox" />
        This order contains a gift
      </div>
      <AmazonButton>Proceed to Checkout</AmazonButton>
    </Container>
  )
}
