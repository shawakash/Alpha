import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appConfigReducer from "./slices/appConfigSlice";
import postReducer from "./slices/postSlice";

export default configureStore({
    reducer: {
        postReducer,
        appConfigReducer
    }
});