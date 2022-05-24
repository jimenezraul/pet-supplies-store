import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./Store/storeSlice";

export default configureStore({
  reducer: {
    store: storeSlice,
  },
});
