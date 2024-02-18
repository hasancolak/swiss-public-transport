import { Locations } from "@/features/Locations/Locations"
import styles from "./page.module.scss"
import { Connections } from "@/features/Connections/Connections"

/**
 * @function Home is the root page
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Swiss Public Transport Planner</h1>
      <section>
        <Locations />
      </section>
      <section>
        <Connections />
      </section>
    </main>
  )
}
