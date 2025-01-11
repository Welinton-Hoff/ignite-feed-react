import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        alt="Avatar"
        className={styles.avatar}
        src="https://github.com/Welinton-Hoff.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentHeader}>
            <div className={styles.commentAuthor}>
              <strong>Welinton Hoff</strong>
              <time
                dateTime="2025-01-11 04:22:30"
                title="January 11 at 04:22 pm"
              >
                About 1h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={styles.commentFooter}>
          <button title="Delete comment">
            <ThumbsUp size={20} />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
