import { create } from "zustand";

export type Post = {
  id: number;
  author: string;
  body: string;
};

export type NewPostType = Omit<Post, "id">;

type PostStore = {
  nextId: number;
  posts: Post[];
  addPost: (newPost: NewPostType) => void;
};

export const usePostStore = create<PostStore>((set) => ({
  nextId: 3,
  posts: [
    {
      id: 1,
      author: "Maximilian",
      body: "React is awesome!",
    },
    {
      id: 2,
      author: "Manuel",
      body: "Check out the full course!",
    },
  ],
  addPost: (newPost: NewPostType) =>
    set((state) => ({
      nextId: state.nextId + 1,
      posts: [...state.posts, { ...newPost, id: state.nextId }],
    })),
}));
