import styles from "./styles.module.css";

import { ThumbsUp, Trash } from "@phosphor-icons/react";

import { Avatar } from "../../../Avatar";
import { dateUtils } from "src/utils/date";
import { IPostComment } from "src/@types/post";
import { useState } from "react";

interface IPostCommentProps extends IPostComment {
  onDelete: (id: number) => void;
}

export function PostComment(props: Readonly<IPostCommentProps>) {
  const { id, author, content, applause, onDelete, publishedAt } = props;

  const [applauseCount, setApplauseCount] = useState(applause);

  function handleApplause() {
    setApplauseCount((prevState) => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar alt="Avatar" hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentHeader}>
            <div className={styles.commentAuthor}>
              <strong>{author.name}</strong>
              <time
                dateTime={publishedAt.toISOString()}
                title={dateUtils.formatPublishedDate(publishedAt)}
              >
                {dateUtils.formatPublishedDateRelativeToNow(publishedAt)}
              </time>
            </div>

            <button title="Delete comment" onClick={() => onDelete(id)}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentFooter}>
          <button title="Delete comment" onClick={handleApplause}>
            <ThumbsUp size={20} />
            Applaud <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
