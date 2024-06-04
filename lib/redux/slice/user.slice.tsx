import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserState, UserType } from '@/types/user'
// import { User as FirebaseUser } from 'firebase/auth'

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state.user = null
    },
  },
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
