import { Locations } from "../features"
import styles from "./page.module.css"

/**
 * @page Home is the root page
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Swiss Public Transport Planner</h1>
      <section>
        <Locations />
      </section>
    </main>
  )
}
