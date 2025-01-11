import styles from "./styles.module.css";

import { Avatar } from "src/components/Avatar";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        alt="Cover"
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar />

        <strong>Welinton Hoff</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Edit your profile
        </a>
      </footer>
    </aside>
  );
}
