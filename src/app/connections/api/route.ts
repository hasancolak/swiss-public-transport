import { queryFilterBuilder } from "@/utils"
import { type NextRequest } from "next/server"
import { NextResponse } from "next/server"

/**
 * @function GET is the method to send server side request for connections service.
 * @param request
 * @returns Json response
 */
export async function GET(request: NextRequest) {
  // Get the full client query with search param.
  const { search } = new URL(request.url)

  // Build the full url with adding the fieds filter.
  const url = process.env.CONNECTION_BASE_URL + search + queryFilterBuilder

  const response = await fetch(url)

  const json = await response.json()

  return NextResponse.json(json)
}
