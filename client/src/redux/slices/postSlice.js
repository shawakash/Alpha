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
        const allPost = await axiosClient.post('/user/getUserPost', body);
        console.log('From Post Slice', allPost);
        return allPost.result;
    } catch (error) {
        console.error(error);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

export const getMyPost = createAsyncThunk('/user/getPost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const allMyPost = await axiosClient.get('/user/getPost', body);
        console.log('From Post Slice', allMyPost);
        return allMyPost.result;
    } catch (error) {
        console.error(error);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

export const followingPost = createAsyncThunk('/user/followingPost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const followingsPosts = await axiosClient.get('/user/followingPost', body);
        console.log(followingsPosts.result);
        return followingsPosts.result;
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        isLoading: false,
        myPosts: [],
        userPosts: [],
        followingPosts: [],
        status: 'idle'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPost.fulfilled, (state,action) => {
                state.userPosts = action.payload;
                state.status = 'success'
            })
            .addCase(getMyPost.fulfilled, (state,action) => {
                state.myPosts = action.payload;
                state.status = 'success'
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.myPosts.push(action.payload);
            })
            .addCase(followingPost.fulfilled, (state, action) => {
                state.followingPosts = action.payload;
            });
    }
});

export default postSlice.reducer;
export const { } = postSlice.actions;