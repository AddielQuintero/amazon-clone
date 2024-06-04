import React from 'react'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Cart, CartCounter, CheckoutLink, Logo, Nav, Option, OptionBottomLine } from './styled'
import { OptionTopLine, SearchBox, SearchIconButton, SearchInput, SignInLink } from './styled'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { signOut } from '@/lib/redux/slice/user.slice'
import { useAppDispatch } from '@/lib/redux/store/index.store'
import { auth } from '@/lib/firebase'

export const Header = () => {
  const router = useRouter()
  const user = useSelector((state: any) => state.user.user)
  const cartItems = useSelector((state: any) => state.cart.cartItems)
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    if (user !== null) {
      auth.signOut()
      dispatch(signOut())
    } else {
      router.push('/login')
    }
  }

  return (
    <Nav>
      <Link href="/">
        <Logo
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          width={100}
          height={100}
        />
      </Link>

      <SearchBox>
        <SearchInput type="text" />
        <SearchIconButton />
      </SearchBox>

      <SignInLink>
        <Option>
          <OptionTopLine>Hello {user?.displayName}</OptionTopLine>
          <OptionBottomLine
            onClick={() => {
              handleLogin()
            }}
          >
            {user !== null ? 'Sign Out' : 'Sign in'}
          </OptionBottomLine>
        </Option>
      </SignInLink>

      <Option>
        <OptionTopLine>Returns</OptionTopLine>
        <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>

      <CheckoutLink href="/checkout">
        <Cart>
          <ShoppingCartOutlinedIcon />
          <CartCounter>{cartItems.length}</CartCounter>
        </Cart>
      </CheckoutLink>
    </Nav>
  )
}
