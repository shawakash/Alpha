import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { setLoading, setToast } from "./appConfigSlice";
import { TOAST_ERROR } from "../../App";

export const createPost = createAsyncThunk('/post/createPost', async (body) => {
    try {
        const response = await axiosClient.post('/post/createPost', body);
        console.log('From create Post',response);
        return response.result.post;
    } catch (e) {
        console.error(e);
    }
});

export const getAllPost = createAsyncThunk('/user/getUserPost', async (body) => {
    try {
        const allPost = await axiosClient.post('/user/getUserPost', body);
        console.log('From Post Slice', allPost);
        return allPost.result.reverse();
    } catch (error) {
        console.error(error);
    }
});

export const getMyPost = createAsyncThunk('/user/getPost', async (_) => {
    try {
        const allMyPost = await axiosClient.get('/user/getPost');
        // console.log('From Post Slice', allMyPost);
        return allMyPost.result.reverse();
    } catch (error) {
        console.error(error);
    }
});

export const likeAndUnlikePost = createAsyncThunk('/like', async (body) => {
    try {
        const response = await axiosClient.post('/post/likePost', body);
        console.log('from like thunk :', response.result);
    } catch (e) {
        console.error(e);
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
        likedPost: [],
        status: 'idle'
    },
    reducers: {
        setLikedPost: (state, action) => {
            state.likedPost = action.payload;
        }
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
export const { setLikedPost } = postSlice.actions;