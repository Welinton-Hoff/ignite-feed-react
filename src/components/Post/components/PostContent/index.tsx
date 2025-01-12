import styles from "./styles.module.css";
import { IPostContent } from "src/@types/post";

type TPostContentProps = Omit<IPostContent, "author" | "publishedAt">;

export function PostContent(props: Readonly<TPostContentProps>) {
  const { link, title, hashtags, paragraph } = props;

  return (
    <div className={styles.content}>
      <p>{title}</p>
      <p>{paragraph}</p>

      <p className={styles.tagsWrapper}>
        👉 <a href="#">{link}</a>
      </p>

      <p className={styles.tagsWrapper}>
        {hashtags.map((hashtag) => (
          <a key={hashtag} href="#">
            {hashtag}
          </a>
        ))}
      </p>
    </div>
  );
}
