import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from '../slice/user.slice'
import cartSlice from '../slice/cart.slice'

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export { store }

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
