import styles from "./styles.module.css";

import { useState } from "react";
import { PostHeader } from "./components/PostHeader";

import { IPost, IPostComment } from "src/@types/post";
import { PostContent } from "./components/PostContent";
import { PostCommentForm } from "./components/PostCommentForm";
import { PostComment } from "./components/PostComment";

const mockCommentData = {
  applause: 0,
  author: {
    name: "Welinton Hoff",
    avatarUrl: "https://github.com/Welinton-Hoff.png",
  },
};

export function Post(props: Readonly<IPost>) {
  const { author, content, comments, publishedAt } = props;

  const [newCommentText, setNewCommentText] = useState("");
  const [postComments, setPostComments] = useState(
    comments ?? ([] as IPostComment[])
  );

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newComment: IPostComment = {
      ...mockCommentData,
      publishedAt: new Date(),
      content: newCommentText,
      id: new Date().getTime(),
    };

    setNewCommentText("");
    setPostComments((prevComments) => [...prevComments, newComment]);
  }

  function handleCommentDelete(commentId: number) {
    setPostComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  }

  return (
    <article className={styles.post}>
      <PostHeader author={author} publishedAt={publishedAt} />
      <PostContent {...content} />
      <PostCommentForm
        comment={newCommentText}
        onSubmit={handleCreateNewComment}
        submitDisabled={isNewCommentEmpty}
        onCommentChange={setNewCommentText}
      />

      {!!postComments?.length && (
        <div className={styles.commentList}>
          {postComments?.map((comment) => (
            <PostComment
              {...comment}
              key={comment.id}
              onDelete={handleCommentDelete}
            />
          ))}
        </div>
      )}
    </article>
  );
}
