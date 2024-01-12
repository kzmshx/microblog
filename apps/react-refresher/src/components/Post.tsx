export type PostProps = {
  author: string;
  body: string;
};

export default function Post({ author, body }: PostProps) {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}
