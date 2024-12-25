import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/redux/slices/headerSlice";
import footerReducer from "@/redux/slices/footerSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    footer: footerReducer,
  },
});

export default store;