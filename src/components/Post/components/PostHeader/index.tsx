import styles from "./styles.module.css";

import { IPost } from "src/@types/post";
import { Avatar } from "src/components/Avatar";
import { dateUtils } from "src/utils/date";

type IPostHeaderProps = Omit<IPost, "id" | "content" | "comments">;

export function PostHeader(props: Readonly<IPostHeaderProps>) {
  const { author, publishedAt } = props;

  return (
    <header className={styles.header}>
      <div className={styles.author}>
        <Avatar alt="Avatar" src={author.avatarUrl} />

        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time
        dateTime={publishedAt.toISOString()}
        title={dateUtils.formatPublishedDate(publishedAt)}
      >
        {dateUtils.formatPublishedDateRelativeToNow(publishedAt)}
      </time>
    </header>
  );
}
