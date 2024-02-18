import React from "react"
import { render } from "@testing-library/react"
import { Detail } from "../Detail"

// Mock data for testing
const mockSections = [
  {
    departure: {
      departure: "2024-02-18T10:14:00",
      station: { name: "Departure Station" },
    },
    journey: { category: "Train", number: "123" },
    arrival: {
      arrival: "2024-02-18T12:00:00",
      station: { name: "Arrival Station" },
    },
  },
  // Add more mock section data as needed
]

describe("Deteail component", () => {
  it("renders detail component with sections", () => {
    const { getByText } = render(<Detail sections={mockSections} />)

    // Test if departure and arrival information is rendered for each section
    getByText("10:14 - Departure Station")
    // Test if journey data is present
    getByText("Train 123")
  })

  it("renders 'walk' if journey data is null", () => {
    const { getByText } = render(<Detail sections={[{ ...mockSections[0], journey: null }]} />)

    // Test if journey is null
    getByText("walk")
  })
})
