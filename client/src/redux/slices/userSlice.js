import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const fetchUserData = createAsyncThunk('/user/getUserProfile', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const userResponse = await axiosClient.post('/user/getUserProfile', body);
        console.log('UserInfo', userResponse);
        return userResponse.result;
    } catch (e) {
        console.error(e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }

});



const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user: {},
        status: 'idle',
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'success'
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            });
    }
});

export default userSlice.reducer;
export const { setLoading } = userSlice.actions;