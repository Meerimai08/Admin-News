import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  desc: string;
  name: string;
  url: string;
}

interface InitialState {
  posts: Post[];
}

const initialState: InitialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Post>) => {
      state.posts = [...state.posts, action.payload];
    },
    deleteProduct: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = postSlice.actions;

export default postSlice.reducer;
