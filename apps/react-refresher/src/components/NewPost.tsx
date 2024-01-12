import classes from "@/components/NewPost.module.css";
import { ChangeEvent, MouseEvent, useState } from "react";
import { NewPostType } from "@/stores/posts.ts";

export type NewPostProps = {
  onCancel: (e: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (newPost: NewPostType) => void;
};

export default function NewPost({ onCancel, onSubmit }: NewPostProps) {
  const [author, setAuthor] = useState("");
  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const [body, setBody] = useState("");
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ author, body });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="author">Your Name</label>
        <input id="author" type="text" onChange={handleAuthorChange} required />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} onChange={handleBodyChange} required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
