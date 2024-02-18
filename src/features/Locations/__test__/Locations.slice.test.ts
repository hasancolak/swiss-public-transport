import { locationSlice } from "../Locations.slice"
import { makeStore } from "@/store"

describe("Location Slice", () => {
  // Create a mock initial state
  const initialState = {
    from: "Initial From Location",
    to: "Initial To Location",
  }

  const updatedFromValue = "New From Location"
  const updatedToValue = "New To Location"

  // Create a mock store
  const store = makeStore({ location: initialState })

  it("setFrom action updates the state correctly", () => {
    // Dispatch the action
    store.dispatch(locationSlice.actions.setFrom(updatedFromValue))

    // Get the updated state
    const updatedState = store.getState()

    // Check if the 'from' location is updated correctly
    expect(updatedState.location.from).toBe(updatedFromValue)
  })

  it("selectFrom selector retrieves correct value from state", () => {
    // Get the selected 'from' location from the state using the selector
    const selectedFrom = locationSlice.selectors.selectFrom(store.getState())

    // Check if the selected 'from' location matches the initial state
    expect(selectedFrom).toBe(updatedFromValue)
  })

  it("setTo action updates the state correctly", () => {
    // Dispatch the action
    store.dispatch(locationSlice.actions.setTo(updatedToValue))

    // Get the updated state
    const updatedState = store.getState()

    // Check if the 'to' location is updated correctly
    expect(updatedState.location.to).toBe(updatedToValue)
  })

  it("selectTo selector retrieves correct value from state", () => {
    // Get the selected 'to' location from the state using the selector
    const selectedTo = locationSlice.selectors.selectTo(store.getState())

    // Check if the selected 'to' location matches the initial state
    expect(selectedTo).toBe(updatedToValue)
  })
})
