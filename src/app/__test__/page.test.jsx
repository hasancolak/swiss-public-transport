import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import StoreProvider from "../../store/Store.provider"
import Page from "../page"

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <StoreProvider>
        <Page />
      </StoreProvider>
    )

    const heading = screen.getByRole("heading", { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
