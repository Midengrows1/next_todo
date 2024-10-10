interface PostState {
  posts: Post[];
  totalPosts: number;
}

interface Post {
  id: number;
  title: string;
  description: string;
}
export type { PostState, Post };
