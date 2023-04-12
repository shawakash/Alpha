import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
import appConfigReducer from "./slices/appConfigSlice";
import postReducer from "./slices/postSlice";
import newsReducer from "./slices/newsSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer: {
        postReducer,
        appConfigReducer,
        newsReducer,
        userReducer,
    }
});