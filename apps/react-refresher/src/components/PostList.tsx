import classes from "@/components/PostList.module.css";
import Post from "@/components/Post";
import NewPost from "@/components/NewPost";
import Modal from "@/components/Modal.tsx";
import { usePostStore } from "@/stores/posts.ts";

export type PostListProps = {
  isPosting: boolean;
  onStopPosting: () => void;
};

export default function PostList({ isPosting, onStopPosting }: PostListProps) {
  const { posts, addPost } = usePostStore();

  const handleNewPostSubmit = ({ author, body }: { author: string; body: string }) => {
    addPost({ author, body });
    onStopPosting();
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onSubmit={handleNewPostSubmit} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
