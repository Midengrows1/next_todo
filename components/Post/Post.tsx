import React from "react";
import { deletePost } from "@/redux/slices/postSlice";
import { useDispatch } from "react-redux";
import s from "./post.module.scss";
interface Props {
  id: number;
  title: string;
  description: string;
}
const Post = ({ id, title, description }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={s.post}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={s.post__btns}>
        <button
          className={s.post__btns_delete}
          onClick={() => dispatch(deletePost({ id }))}
        >
          Delete
        </button>
        <button className={s.post__btns_edit}>Edit</button>
      </div>
    </div>
  );
};

export default Post;
