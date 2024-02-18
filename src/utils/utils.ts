import { FILTER_CONNECTION_COLUMN } from "./constants"

/**
 * @constant queryFilterBuilder builds query string with given filtered columns
 */
export const queryFilterBuilder = FILTER_CONNECTION_COLUMN.reduce(
  (acc, current) => acc + `&fields[]=connections/${current}`,
  ""
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

/**
 * @function getDuration
 * @param duration
 * @returns dd hh mm
 */
export const getDuration = (duration: string) => {
  const splitDate = duration.split("d")
  const hm = splitDate[1].split(":")
  const d = Number(splitDate[0])
  const h = Number(hm[0])
  const m = Number(hm[1])

  let result = d > 0 ? `${d} d ` : ""
  result += h > 0 ? `${h} h ` : ""
  result += m > 0 ? `${m} m ` : ""

  return result
}
