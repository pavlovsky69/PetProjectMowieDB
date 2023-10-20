import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    id: null,
    movie: {},
    isLoading: null
};

const getId = createAsyncThunk (
    'OneMovieSlice/getId',
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getById (id)
            return {data}
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {

        }
    }
)


const slice = createSlice ({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getId.fulfilled, (state, action) => {
            const {data, isLoading} = action.payload;
            state.movie = data
            state.isLoading = isLoading
        })
        .addMatcher (isPending (getId), state => {
            state.isLoading = true
        })
        .addMatcher (isFulfilled (getId), state => {
            state.isLoading = false
        })
})

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getId
}

export {
    movieReducer,
    movieActions
}