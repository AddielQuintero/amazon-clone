import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBg};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px 15px;
  z-index: 1000;
`

export const Logo = styled.img`
  margin: 0 20px;
  height: 30px;
  cursor: pointer;
  object-fit: contain;
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
`

export const SearchInput = styled.input`
  display: flex;
  height: 2.35rem;
  padding: 10px;
  border: none;
  width: 100%;
`

export const SearchIconButton = styled(SearchIcon)`
  background-color: #febd68;
  font-size: 2.35rem;
`

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
`

export const OptionTopLine = styled.span`
  font-size: 10px;
`

export const OptionBottomLine = styled.span`
  font-size: 13px;
  font-weight: 800;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
`

export const CartCounter = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
`

export const SignInLink = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`
