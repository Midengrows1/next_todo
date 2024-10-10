"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/redux/slices/postSlice";
import s from "./page.module.scss";
import Post from "@/components/Post/Post";
import { PostI } from "@/Interfaces/postSlice/PostInterface";
import PostCreation from "@/components/Post/PostCreation/PostCreation";
const Posts = () => {
  //   const [title, setTitle] = useState("");
  const posts = useSelector((state: any) => state.posts.posts);

  return (
    <div className={s.posts}>
      <div className={s.posts__container}>
        <PostCreation/>
        <h1 className={s.posts__container_title}>Posts</h1>
        {!!posts?.length ? (
          posts?.map((post: PostI) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
            />
          ))
        ) : (
          <p>NO posts found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
