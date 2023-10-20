import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../services/searchService";
import {progressActions} from "./progressSlice";

const initialState = {
    searchList: [],
    searchCheck: false,
    isLoading: null
};

const getByQuery = createAsyncThunk (
    'searchSlice/getByQuery',
    async ({query}, thunkAPI) => {
        try {
            thunkAPI.dispatch (progressActions.setIsLoading (true))
            const {data} = await searchService.getByQuery ({query});
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
            thunkAPI.dispatch (progressActions.setIsLoading (false))
        }
    }
)


const searchSlice = createSlice ({
    name: 'searchSlice',
    initialState,
    reducers: {
        changeSearchCheck: state => {
            state.searchCheck = !state.searchCheck
        }
    },
    extraReducers: builder => builder
        .addCase (getByQuery.fulfilled, (state, action) => {
            const {results, isLoading} = action.payload;
            state.searchList = results
            state.isLoading = isLoading
        })
})


const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    getByQuery,
}


export {
    searchReducer,
    searchActions
}

