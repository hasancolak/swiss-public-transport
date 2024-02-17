import { type NextRequest } from "next/server"
import { NextResponse } from "next/server"

/**
 * @function GET is the method to send server side request for locatios service.
 * @param request
 * @returns Json response
 */
export async function GET(request: NextRequest) {
  // Get the full client query with search param.
  const { search } = new URL(request.url)

  // Build the full url with adding the fied filter.
  // We only need name property
  const url = process.env.LOCATION_BASE_URL + search + `&fields[]=stations/name`

  const response = await fetch(url)

  const json = await response.json()

  return NextResponse.json(json)
}
