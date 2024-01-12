import classes from "@/components/Post.module.css";

export type PostProps = {
  author: string;
  body: string;
};

export default function Post({ author, body }: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}
