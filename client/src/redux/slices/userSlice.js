import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = {}
        },
    }
});

export default userSlice.reducer;
export const {setUser, deleteUser} =userSlice.actions;