import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading } from "./appConfigSlice";

export const createPost = createAsyncThunk('/post/createPost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const response = await axiosClient.post('/post/createPost', body);
        console.log(response);
        return response;
    } catch (e) {
        console.error(e.message);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

export const getAllPost = createAsyncThunk('/user/getUserPost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const allPost = await axiosClient.get('/user/getUserPost', body);
        console.log(allPost);
        return allPost.result;
    } catch (error) {

    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        isLoading: false,
        posts: [],
        status: 'idle'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPost.fulfilled, (state,action) => {
                state.posts = action.payload;
                state.status = 'success'
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            });
    }
});

export default postSlice.reducer;
export const { } = postSlice.actions;