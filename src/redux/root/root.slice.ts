import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface rootState {
  isFinish: boolean
}

const initialState: rootState = {
  isFinish: false
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoot.fulfilled, (state, action) => {
        state.isFinish = action.payload
      })
      .addCase(fetchRoot.rejected, (state) => {
        state.isFinish = false
      })
  }
})

// export const {} = rootSlice.actions
const rootReducer = rootSlice.reducer

export default rootReducer

export const fetchRoot = createAsyncThunk('root/fetchRoot', async () => {
  try {
    console.log('start fetch root')

    return true
  } catch (error) {
    console.log('Error fetchRoot', error)
    return false
  }
})
