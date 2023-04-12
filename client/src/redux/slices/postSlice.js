import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading } from "./appConfigSlice";

export const createPost = createAsyncThunk('/post/createPost', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const response = await axiosClient.post('/post/createPost', body);
        // console.log('From create Post',response);
        return response.result.post;
    } catch (e) {
        console.error(e.message);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

export const getAllPost = createAsyncThunk('/user/getUserPost', async (body, thunkAPI) => {
    try {
        
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
        // console.log('From Post Slice', allMyPost);
        return allMyPost.result;
    } catch (error) {
        console.error(error);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

// export const followingPost = createAsyncThunk('/user/followingPost', async (body, thunkAPI) => {
//     try {
//         thunkAPI.dispatch(setLoading(true));
//         const followingsPosts = await axiosClient.get('/user/followingPost', body);
//         // console.log(followingsPosts.result);
//         return followingsPosts.result;
//     } catch (e) {
//         console.error(e);
//     } finally {
//         thunkAPI.dispatch(setLoading(false));
//     }
// });

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        isLoading: false,
        userPosts: [], 
        myPosts: [],
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
            .addCase(getAllPost.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(getAllPost.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getMyPost.fulfilled, (state,action) => {
                state.myPosts = action.payload;
                state.status = 'success'
            })
            .addCase(getMyPost.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(getMyPost.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.myPosts.unshift(action.payload);
            })
            .addCase(createPost.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(createPost.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default postSlice.reducer;
export const { } = postSlice.actions;