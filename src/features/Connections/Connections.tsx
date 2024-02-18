"use client"
import React, { useState } from "react"
import type { ChangeEvent } from "react"
import Pagination from "@mui/material/Pagination"
import { useAppSelector } from "../../store"
import { selectFrom, selectTo } from "../Locations/Locations.slice"
import { useGetConnectionsQuery } from "./Connections.service"
import { Connection } from "./Connection/Connection"
import style from "./Connections.module.scss"

/**
 * @function Connections component
 * @returns JSX.Element
 */
export function Connections() {
  const from = useAppSelector(selectFrom)
  const to = useAppSelector(selectTo)

  const [page, setPage] = useState(1)

  const { data, isError } = useGetConnectionsQuery(
    { from: from, to: to, limit: 5, page: page - 1 },
    { skip: !from || !to, refetchOnFocus: false }
  )

  if (isError || data === undefined) {
    return
  }

  return (
    <div className={style.connections}>
      {data?.connections.map((item, index) => <Connection key={index} {...item} />)}
      <Pagination
        className={style.pagination}
        count={4}
        color="primary"
        onChange={(event: ChangeEvent<unknown>, page: number) => {
          setPage(page)
        }}
      />
    </div>
  )
}
