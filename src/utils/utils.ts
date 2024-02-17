import { filterConnectionColumn } from "./constants"

/**
 * @constant queryFilterBuilder builds query string with given filtered columns
 */
export const queryFilterBuilder = filterConnectionColumn.reduce(
  (acc, current) => acc + `&fields[]=connections/${current}`
)
