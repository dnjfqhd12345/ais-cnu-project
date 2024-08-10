import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./modules"
import { TypedUseSelectorHook } from "react-redux"
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux'

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const useDispatch = () => useAppDispatch<AppDispatch>()
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export { store, useSelector, useDispatch }
