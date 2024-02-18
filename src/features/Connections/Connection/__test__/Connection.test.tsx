import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Connection } from "../Connection"

// Mock data for testing
const mockConnectionProps = {
  from: {
    location: { name: "From Location" },
    departure: "2024-02-18T10:15:00",
  },
  to: {
    location: { name: "To Location" },
    arrival: "2024-02-18T12:00:00",
  },
  sections: [
    {
      departure: {
        departure: "2024-02-18T10:00:00",
        station: { name: "Departure Station" },
      },
      journey: { category: "Train", number: "123" },
      arrival: { arrival: "2024-02-18T12:00:00", station: { name: "Arrival Station" } },
    },
    // Add more mock section data as needed
  ],
  duration: "00d00:35:00", // Duration in minutes
}

describe("Connection component", () => {
  it("renders connection component with closed detail", () => {
    const { getByText } = render(<Connection {...mockConnectionProps} />)

    // Test if connection details are rendered
    getByText("10:15")
    getByText("1 transfer")
  })

  it("renders connection component with opened detail", () => {
    const { getByText, container } = render(<Connection {...mockConnectionProps} />)

    fireEvent.click(container.children[0].children[0])

    // Test if connection details are rendered
    getByText("Train 123")
  })
})
