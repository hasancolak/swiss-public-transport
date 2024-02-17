import React from "react"
import type { DetailProps } from "./Connection.types"
import { getHourAndMinute } from "../../../utils"
import style from "./Connection.module.css"

/**
 * @function Detail component
 * @param {sections}
 * @returns
 */
export function Detail({ sections }: DetailProps) {
  const getDetail = sections.map((item, index: number) => (
    <div key={index} className={style.section}>
      <div>
        {getHourAndMinute(item?.departure?.departure)} {" - "}
        {item?.departure?.station?.name}
      </div>
      <div>
        {item.journey === null ? "walk" : item.journey?.category + " " + item.journey?.number}
      </div>
      <div>
        {getHourAndMinute(item?.arrival?.arrival)} {" - "}
        {item?.arrival?.station?.name}
      </div>
    </div>
  ))

  return <div className={style.sections}>{getDetail}</div>
}
