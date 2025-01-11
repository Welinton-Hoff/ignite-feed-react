import styles from "./styles.module.css";

import igniteLogo from "src/assets/svgs/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
