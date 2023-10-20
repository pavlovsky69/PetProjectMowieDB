import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";


const initialState = {
    genresList: [],
    isLoading: null
}


const getAllGenres = createAsyncThunk (
    'genresListSlice/getAllGenres',
    async (thunkAPI) => {
        try {
            const {data} = await genreService.getAllGenres ();
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
        }

    }
)

const genresListSlice = createSlice ({
    name: 'genresListSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getAllGenres.fulfilled, (state, action) => {
            const {genres, isLoading} = action.payload
            state.genresList = genres
            state.isLoading = isLoading
        })
    .addMatcher (isPending (), state => {
        state.isLoading = true
    })
    .addMatcher (isFulfilled (), state => {
        state.isLoading = false
    })
})


const {reducer: genresListReducer, actions} = genresListSlice;

const genresListAction = {
    ...actions,
    getAllGenres
}

export {
    genresListReducer,
    genresListAction
}