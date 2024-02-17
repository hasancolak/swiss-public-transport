import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { LocationState } from "./Locations.types"

// Setup the initial state
const initialState: LocationState = {
  from: "",
  to: "",
}

/**
 * @function createSlice creates a slice for locations
 */
export const locationSlice = createSlice({
  name: "location",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: (create) => ({
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFrom: create.reducer((state, action: PayloadAction<string>) => {
      // Set start location to the store
      state.from = action.payload
    }),
    setTo: create.reducer((state, action: PayloadAction<string>) => {
      // Set end location to the store
      state.to = action.payload
    }),
  }),
  selectors: {
    selectFrom: (location) => location.from,
    selectTo: (location) => location.to,
  },
})

export const { setFrom, setTo } = locationSlice.actions

export const { selectFrom, selectTo } = locationSlice.selectors

export default locationSlice.reducer
