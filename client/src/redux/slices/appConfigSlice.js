import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const fetchData = createAsyncThunk('user/profile', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        const userResponse = await axiosClient.get('/user/profile');
        // console.log('UserInfo', userResponse);
        return userResponse.result;
    } catch (e) {
        console.error('backend error',e);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }

});



export const updateProfile = createAsyncThunk('user/updateProfile', async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading(true));
        console.log('from appCongif')
        const userResponse = await axiosClient.put('/user/update', body);
        console.log('UserInfo from', userResponse);
        return userResponse.result;
    } catch (e) {
        console.error(e.message);
    } finally {
        thunkAPI.dispatch(setLoading(false));
    }
});

const appConfigSlice = createSlice({
    name: 'appConfig',
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
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'success'
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            }).addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                console.log('from app', action.payload);
                state.status = 'success'
            })
            ;
    }
});

export default appConfigSlice.reducer;
export const { setLoading } = appConfigSlice.actions;