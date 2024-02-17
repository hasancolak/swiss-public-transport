import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { locationSlice, locationsService } from "../features"

// `combineSlices` automatically combines the reducers using their `reducerPath`s
const rootReducer = combineSlices(locationSlice, locationsService)

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(locationsService.middleware),
    preloadedState,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
