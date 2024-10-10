import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostState, Post } from "@/Interfaces/postSlice/PostInterface";
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
    addPost: (state, action: PayloadAction<Post>): void => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<Post>): void => {
      const postId = action.payload.id;
      const newPosts = state.posts.filter((post) => postId !== post.id);
      state.posts = newPosts;
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
