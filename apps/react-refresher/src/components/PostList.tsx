import classes from "@/components/PostList.module.css";
import Post from "@/components/Post";

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </ul>
  );
}
