import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const newsPost = createAsyncThunk('/news', async (_) => {
    try {
        const apiUrl = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=93f055bafb73468da40509b958d5e3dc';
        console.log(apiUrl)
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        console.log('From news Post', jsonData);
        return jsonData;
    } catch (e) {
        console.error(e);
    }
});

const newsSlice = createSlice({

    name: 'News',
    initialState: {
        isLoading: false,
        news: [],
        status: 'idle'
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(newsPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newsPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
            .addCase(newsPost.fulfilled, (state, action) => {
                state.news = action.payload;
                state.status = 'success'
            });
        }
});

export default newsSlice.reducer;
export const { setLoading } = newsSlice.actions;