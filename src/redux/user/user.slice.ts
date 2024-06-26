import { createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  isVip: boolean
  activeWallet?: string
  role: 'client' | 'retailer' | 'admin'
}
const initialState: IinitialState = {
  isVip: true,
  activeWallet: '',
  role: 'admin'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveWallet(state, action: { payload: string }) {
      state.activeWallet = action.payload
    }
  }
})

export const { setActiveWallet } = userSlice.actions
const userReducer = userSlice.reducer

export default userReducer
