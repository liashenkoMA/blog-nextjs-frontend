import { configureStore } from "@reduxjs/toolkit";
import { reducer as commentsSlice } from "./features/commentsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      comments: commentsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
