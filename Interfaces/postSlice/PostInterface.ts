interface PostState {
  posts: PostI[];
  totalPosts: number;
}

interface PostI {
  id: number;
  title: string;
  description: string;
}
export type { PostState, PostI };
