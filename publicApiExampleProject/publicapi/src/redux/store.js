import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { publicApi } from "./features/publicApi/publicApi";
import { productApi } from "./features/productApi/productApi";
import {videosApi} from "./features/videosApi/videosApi";

export const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(publicApi.middleware)
      .concat(productApi.middleware)
      .concat(videosApi.middleware)
});

setupListeners(store.dispatch);
