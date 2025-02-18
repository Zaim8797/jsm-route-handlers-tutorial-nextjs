import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectList() {
  return (
    <main>
      <h1>Project List</h1>
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <Link href="/projects/alpha">Alpha</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/projects/beta">Beta</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/projects/charlie">Charlie</Link>
        </li>
      </ul>
    </main>
  );
}
