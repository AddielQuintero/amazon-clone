import { CartState, CartType } from '@/types/cart'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      state.cartItems = [...state.cartItems, action.payload]
      // state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const productIndex = state.cartItems.findIndex((product) => product.id === action.payload.id)

      const auxCartItems = [...state.cartItems]

      if (productIndex >= 0) {
        auxCartItems.splice(productIndex, 1)
        state.cartItems = auxCartItems
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
