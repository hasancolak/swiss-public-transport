import React, { useState } from "react"
import { getDuration, getHourAndMinute } from "../../../utils"
import type { ConnectionProps } from "./Connection.types"
import { Detail } from "./Detail"
import style from "./Connection.module.scss"

/**
 * @function Connection component
 * @returns JSX.Element
 */
export function Connection({ from, to, sections, duration }: ConnectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={style.connection}>
      <div className={style.item} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
        <div className={style.column}>
          <div>{from?.location?.name}</div>
          <div>{getHourAndMinute(from?.departure)}</div>
        </div>
        <div className={style.stop}>
          <div className={style.duration}>{getDuration(duration)}</div>
          <div className={style.line}></div>
          <div className={style.transfer}>{sections?.length} transfer</div>
        </div>
        <div className={style.column}>
          <div>{to?.location?.name}</div>
          <div>{getHourAndMinute(to?.arrival)}</div>
        </div>
      </div>
      {isOpen && <Detail sections={sections} />}
    </div>
  )
}
