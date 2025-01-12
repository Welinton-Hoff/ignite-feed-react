import styles from "./styles.module.css";

import { Post } from "src/components/Post";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

import { usePosts } from "./hooks/usePosts";

export function Feed() {
  const posts = usePosts();
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />

        <main>
          {posts.map((item) => (
            <Post key={item.id} {...item} />
          ))}
        </main>
      </div>
    </div>
  );
}
