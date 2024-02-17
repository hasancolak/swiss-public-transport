import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/useAutocomplete"
import type { LocationItem } from "../Locations.types"

/**
 * @interface LocationProps
 */
export interface LocationProps {
  label: string
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: LocationItem | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<LocationItem> | undefined
  ) => void
}
