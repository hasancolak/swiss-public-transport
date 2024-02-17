import React, { useState } from "react"
import type { AutocompleteInputChangeReason } from "@mui/material/Autocomplete"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import type { LocationProps } from "./Location.types"
import { useGetLocationsQuery } from "../Locations.service"
import type { LocationItem } from "../Locations.types"
import style from "./Location.module.css"

/**
 * @function Location component
 * @param {label, onChange}
 * @returns JSX.Element
 */
export function Location({ label, onChange }: LocationProps) {
  const [input, setInput] = useState<string>("")

  const { data, isError, isLoading } = useGetLocationsQuery(
    { query: input },
    { skip: !input, refetchOnFocus: false }
  )

  const options = data?.stations ?? []

  const onInputChange = async (
    _event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === "input") {
      setInput(value ?? "")
    }
  }

  return (
    <div className={style.autocomplete}>
      <Autocomplete
        disablePortal
        options={options}
        getOptionLabel={(option: LocationItem) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        loading={isLoading}
        loadingText="Locations are loading"
        onChange={onChange}
        onInputChange={onInputChange}
        renderInput={(params) => <TextField {...params} label={label} error={isError} />}
      />
    </div>
  )
}
