// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent usage of typed hooks throughout the application.
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from "react-redux"
import type { AppStore, RootState } from "./Store"

// These dispatches are used throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppStore["dispatch"]>()
export const useAppSelector = useSelector.withTypes<RootState>()
