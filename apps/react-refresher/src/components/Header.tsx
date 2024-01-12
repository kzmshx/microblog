import classes from "@/components/Header.module.css";
import { MdMessage, MdPostAdd } from "react-icons/md";
import { MouseEvent } from "react";

export type HeaderProps = {
  onCreatePost: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ onCreatePost }: HeaderProps) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
