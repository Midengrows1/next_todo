import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostState, PostI } from "@/Interfaces/postSlice/PostInterface";
const initialState: PostState = {
  posts: [
    {
      id: 1,
      title: "Post 1",
      description: "Description 1",
    },
  ],
  totalPosts: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ): void => {
      const newPost = { id: state.posts.length + 1, ...action.payload };
      state.posts.push(newPost);
    },
    deletePost: (state, action: PayloadAction<{ id: number }>): void => {
      const postId = action.payload.id;
      const newPosts = state.posts.filter((post) => postId !== post.id);
      state.posts = newPosts;
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
