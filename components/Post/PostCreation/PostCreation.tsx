"use client";
import React, { useState } from "react";
import s from "./postcreation.module.scss";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/slices/postSlice";
const PostCreation = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleCreate = (e: any) => {
    e.preventDefault();
    dispatch(addPost(post));
  };
  return (
    <form
      action="#"
      onSubmit={handleCreate}
      className={s.postcreation}
      id="postcreationform"
    >
      <h2 className="text-2xl">Post Creation</h2>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        name="postTitle"
        onChange={(e: any) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        name="postDescription"
        value={post.description}
        onChange={(e: any) => setPost({ ...post, description: e.target.value })}
      ></textarea>
      <button type="submit" className={s.postcreation_submit}>
        Create
      </button>
    </form>
  );
};

export default PostCreation;
