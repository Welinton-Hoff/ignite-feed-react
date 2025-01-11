import styles from "./styles.module.css";

import { Post } from "src/components/Post";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

export function Feed() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
