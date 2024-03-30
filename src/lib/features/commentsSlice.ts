import { createSlice } from "@reduxjs/toolkit";

export interface IComment {
  author: string;
  textComment: string;
  publickDate: string;
}

interface ICommentState {
  comments: Array<IComment>;
}

const initialState: ICommentState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export const reducer = commentsSlice.reducer;
