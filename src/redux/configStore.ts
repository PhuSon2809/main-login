import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import rootReducer from './root/root.slice'
import userReducer from './user/user.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    root: rootReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat()
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
