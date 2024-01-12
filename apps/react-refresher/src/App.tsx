import PostList from "@/components/PostList";
import Header from "@/components/Header.tsx";
import { useState } from "react";

export default function App() {
  const [isPosting, setIsPosting] = useState(false);
  const startPosting = () => {
    setIsPosting(true);
  };
  const stopPosting = () => {
    setIsPosting(false);
  };

  return (
    <>
      <Header onCreatePost={startPosting} />
      <main>
        <PostList isPosting={isPosting} onStopPosting={stopPosting} />
      </main>
    </>
  );
}
