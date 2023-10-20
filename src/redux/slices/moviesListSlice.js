import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";
import {progressActions} from "./progressSlice";

const initialState = {
    page: '2',
    moviesList: [],
    isLoading: true
};

const getAll = createAsyncThunk (
    'moviesListSlice/getAll',
    async (page, thunkAPI) => {
        try {
            thunkAPI.dispatch (progressActions.setIsLoading (true))
            const {data} = await moviesService.getAll (page);
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
            thunkAPI.dispatch (progressActions.setIsLoading (false))
        }
    }
)


const slice = createSlice ({
    name: 'moviesListSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getAll.fulfilled, (state, action) => {
            const {page, results, isLoading} = action.payload;
            state.page = page
            state.moviesList = results
            state.isLoading = isLoading
        })
        // .addMatcher (isPending (getAll), state => {
        //     state.isLoading = true
        // })
        // .addMatcher (isFulfilled (getAll), state => {
        //     state.isLoading = false
        // })
})

const {reducer: moviesListReducer, actions} = slice;

const moviesListActions = {
    ...actions,
    getAll
}

export {
    moviesListReducer,
    moviesListActions
}