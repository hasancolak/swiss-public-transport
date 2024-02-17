/**
 * @interface LocationState for locations
 */
export interface LocationState {
  from: string
  to: string
}

/**
 * @interface LocationQueryParams for query parameters
 */
export interface LocationQueryParams {
  query: string
}

/**
 * @type for LocationItem
 */
export type LocationItem = {
  name: string
}

/**
 * @interface LocationQueryResponse for query response
 */
export interface LocationQueryResponse {
  stations: LocationItem[]
}
