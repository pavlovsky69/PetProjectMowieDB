import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../services/searchService";
import {progressActions} from "./progressSlice";

const initialState = {
    searchList2: [],
    searchCheck: false,
    page: 1,
    total_pages: null,
    isLoading:null
};


const getByQueryPage = createAsyncThunk (
    'searchSlice/getByQueryPage',
    async ({query, page}, thunkAPI) => {
        try {
            thunkAPI.dispatch (progressActions.setIsLoading (true))
            const {data} = await searchService.getByQueryPage (query, page);
            return {data, query, page}
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
            thunkAPI.dispatch (progressActions.setIsLoading (false))
        }
    }
)

const searchByPageSlice = createSlice ({
    name: 'searchByPageSlice',
    initialState,
    reducers: {
        changeSearchCheck: state => {
            state.searchCheck = !state.searchCheck
        },
        nextPageCount: state => {
            state.page += 1
        },
        prevPageCount: state => {
            state.page -= 1
        },
        resetPageCount: state => {
            state.page = 1
        }
    },
    extraReducers: builder => builder
        .addCase (getByQueryPage.fulfilled, (state, action) => {
            const {results, query, page, total_pages, isLoading} = action.payload.data;
            state.searchList2 = results
            state.query = query
            state.page = page
            state.total_pages = total_pages
            state.isLoading = isLoading
        })
})


const {reducer: searchByPageReducer, actions} = searchByPageSlice;

const searchByPageActions = {
    ...actions,
    getByQueryPage,
}

export {
    searchByPageReducer,
    searchByPageActions
}


//
// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     themeCheck: false
// }
//
// const themeSlice = createSlice ({
//     name: 'themeSlice',
//     initialState,
//     reducers: {
//         changeThemeCheck: state => {
//             state.themeCheck = !state.themeCheck
//         }
//     }
// })
//
// const {reducer: themeReducer, actions: themeActions} = themeSlice;
//
// export {
//     themeReducer,
//     themeActions
// }
//