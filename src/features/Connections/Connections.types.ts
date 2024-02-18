/**
 * @interface ConnectionQueryParams
 */
export interface ConnectionQueryParams {
  from: string
  to: string
  limit?: number
  page: number
}

/**
 * @type From
 */
type From = {
  departure: string
  location: { name: string }
}

/**
 * @type To
 */
type To = { arrival: string } & Pick<From, "location">

/**
 * @type Sections
 */
export type Sections = {
  arrival: {
    arrival: string
    station: { name: string }
  }
  departure: {
    departure: string
    station: { name: string }
  }
  journey: { category: string; number: string } | null
}

/**
 * @type ConnectionItem
 */
export type ConnectionItem = {
  from: From
  to: To
  sections: Sections[]
  duration: string
}

/**
 * @interface ConnectionQueryResponse
 */
export interface ConnectionQueryResponse {
  connections: ConnectionItem[]
}
