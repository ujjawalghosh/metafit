// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import modalReducer from "./modalSlice";         // Will be .ts
import appReducer from "./appSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    app: appReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Example if logger or other middleware is needed
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Export typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
