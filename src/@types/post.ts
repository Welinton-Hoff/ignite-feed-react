export interface IPost {
  id: number;
  publishedAt: Date;
  author: IPostAuthor;
  content: IPostContent;
  comments?: IPostComment[];
}

export interface IPostComment {
  id: number;
  content: string;
  applause: number;
  publishedAt: Date;
  author: Omit<IPostAuthor, "role">;
}

export interface IPostAuthor {
  role: string;
  name: string;
  avatarUrl: string;
}

export interface IPostContent {
  link: string;
  title: string;
  paragraph: string;
  hashtags: string[];
}
