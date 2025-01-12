import styles from "./styles.module.css";

interface IPostCommentFormProps {
  comment: string;
  submitDisabled: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCommentChange: (comment: string) => void;
}

export function PostCommentForm(props: Readonly<IPostCommentFormProps>) {
  const { onSubmit, comment, submitDisabled, onCommentChange } = props;

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onCommentChange(event.target.value);
  }

  return (
    <form className={styles.commentForm} onSubmit={onSubmit}>
      <strong>Leave your feedback</strong>

      <textarea
        required
        value={comment}
        placeholder="Leave a comment"
        onChange={handleCommentChange}
      />

      <footer>
        <button type="submit" disabled={submitDisabled}>
          Publish
        </button>
      </footer>
    </form>
  );
}
