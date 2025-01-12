import { useCallback } from "react";
import { IPost } from "src/@types/post";

import { useRandomName } from "src/hooks/useRandomName";
import { dateUtils } from "src/utils/date";
import { comments, postContents } from "../constants";

export function usePosts() {
  const getRandomName = useRandomName();

  const generatePosts = useCallback(
    (quantity: number): IPost[] =>
      Array.from({ length: quantity }, (_, index) => {
        const postId = index;
        const publishedAt = dateUtils.generateRandomDate();
        const commentAvatarId = Math.floor(Math.random() * 100);

        const numberOfComments = Math.floor(Math.random() * 3) + 1;
        const shuffledComments = [...comments].sort(() => 0.5 - Math.random());

        return {
          id: postId,
          publishedAt,
          author: {
            name: getRandomName(),
            role: "Frontend Developer",
            avatarUrl: `https://randomuser.me/api/portraits/men/${postId}.jpg`,
          },
          content: postContents[postId % postContents.length],
          comments: shuffledComments
            .slice(0, numberOfComments)
            .map((comment) => ({
              ...comment,
              publishedAt: dateUtils.generateRandomDateFromDate(publishedAt),
              author: {
                name: getRandomName(),
                avatarUrl: `https://randomuser.me/api/portraits/men/${
                  commentAvatarId + comment.id
                }.jpg`,
              },
            })),
        };
      }),
    [getRandomName]
  );

  const posts = generatePosts(4);

  const sortPostsByDate = (posts: IPost[]) => {
    const currentDate = new Date();

    return posts.sort((a, b) => {
      const diffA = Math.abs(currentDate.getTime() - a.publishedAt.getTime());
      const diffB = Math.abs(currentDate.getTime() - b.publishedAt.getTime());
      return diffA - diffB;
    });
  };

  const sortedPosts = sortPostsByDate(posts);

  return sortedPosts;
}
