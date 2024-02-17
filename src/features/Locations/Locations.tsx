"use client"
import React from "react"
import type { AutocompleteChangeReason } from "@mui/material/useAutocomplete"
import { useAppDispatch } from "@/store/Hooks"
import { setFrom, setTo } from "./Locations.slice"
import { Location } from "./Location"
import type { LocationItem } from "./Locations.types"

/**
 * @function Locations component
 * @returns JSX.Element for location component
 */
export function Locations() {
  const dispatch = useAppDispatch()

  const onChangeFrom = (
    event: React.SyntheticEvent<Element, Event>,
    value: LocationItem | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption" && value?.name) {
      dispatch(setFrom(value.name))
    } else if (reason === "clear" || reason === "removeOption") {
      dispatch(setFrom(""))
    }
  }

  const onChangeTo = (
    event: React.SyntheticEvent<Element, Event>,
    value: LocationItem | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption" && value?.name) {
      dispatch(setTo(value.name))
    } else if (reason === "clear" || reason === "removeOption") {
      dispatch(setTo(""))
    }
  }

  return (
    <>
      <Location label="From" onChange={onChangeFrom} />
      <Location label="To" onChange={onChangeTo} />
    </>
  )
}
