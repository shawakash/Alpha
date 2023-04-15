import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const fetchData = createAsyncThunk('user/profile', async (_) => {
    try {
        const userResponse = await axiosClient.get('/user/profile');
        // console.log('UserInfo', userResponse);
        return userResponse.result;
    } catch (e) {
        console.error('backend error',e);
    }

});



export const updateProfile = createAsyncThunk('user/updateProfile', async (body, thunkAPI) => {
    try {
        console.log('from appCongif')
        const userResponse = await axiosClient.put('/user/update', body);
        console.log('UserInfo from', userResponse);
        return userResponse.result;
    } catch (e) {
        console.error(e.message);
    }
});

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState: {
        isLoading: false,
        user: {},
        toastData: {},
        status: 'idle',
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setToast: (state, action) => {
            state.toastData = action.payload;
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
                console.log('from app', state.user);
                state.status = 'success'
            })
                ;
    }
});

export default appConfigSlice.reducer;
export const { setLoading, setToast } = appConfigSlice.actions;