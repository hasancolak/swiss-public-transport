import type { ConnectionItem } from "../Connections.types"

/**
 * @type ConnectionProps
 */
export type ConnectionProps = ConnectionItem

/**
 * @type DetailProps
 */
export type DetailProps = Pick<ConnectionItem, "sections">
