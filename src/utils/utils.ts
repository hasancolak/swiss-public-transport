import { FILTER_CONNECTION_COLUMN } from "./constants"

/**
 * @constant queryFilterBuilder builds query string with given filtered columns
 */
export const queryFilterBuilder = FILTER_CONNECTION_COLUMN.reduce(
  (acc, current) => acc + `&fields[]=connections/${current}`
)

/**
 * @function getHourAndMinute
 * @param date string
 * @returns hh:mm as string
 */
export const getHourAndMinute = (date: string) => {
  const _date = new Date(date)
  return `${_date.getHours()}:${_date.getMinutes()} `
}
