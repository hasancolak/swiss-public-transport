import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { ConnectionQueryParams, ConnectionQueryResponse } from "./Connections.types"

/**
 * @function buildQueryString
 * @param query
 * @returns query string
 */
const buildQueryString = ({ from, to, limit, page }: ConnectionQueryParams): string =>
  `?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}${page ? "&page=" + page : ""}${limit ? "&limit=" + limit : ""}`

/**
 * @function connectionsService
 * @param query
 * @returns Json data from service
 */
export const connectionsService = createApi({
  baseQuery: fetchBaseQuery({
    // For single usage of api url, I inserted here as string
    // It is better approach reading this from an .env file or constants resource.
    baseUrl: "http://localhost:3000/connections/api",
  }),
  reducerPath: "connectionsApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["from", "to", "page", "limit"],
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `QueryResponse`)
    // and the expected query argument. If there is no argument, use `void` for the argument type instead.
    getConnections: build.query<ConnectionQueryResponse, ConnectionQueryParams>({
      query: (props) => buildQueryString(props),
      // `providesTags` determines which 'tag' is attached to the cached data returned by the query.
      providesTags: (result, error, from, to) => [
        { type: "from", from },
        { type: "to", to },
      ],
      transformResponse: (response: ConnectionQueryResponse): ConnectionQueryResponse => response,
    }),
  }),
})

// Hooks are auto-generated by RTK-Query
export const { useGetConnectionsQuery } = connectionsService