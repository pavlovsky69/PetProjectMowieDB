import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";
import {moviesService} from "../../services/moviesService";
import {progressActions} from "./progressSlice";


const initialState = {
    id:null,
    page: 1,
    genresById: [],
    isLoading: null
}

const getByGenre = createAsyncThunk (
    'getByGenre',
    async ({id, page}, thunkAPI) => {
        try {
            thunkAPI.dispatch (progressActions.setIsLoading (true))
            const {data} = await moviesService.getByOneGenre(id, page)
            return data

        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
            thunkAPI.dispatch (progressActions.setIsLoading (false))
        }
    }
)


const GenresByIdSlice = createSlice ({
    name: 'GenresByIdSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getByGenre.fulfilled, (state, action) => {
            const {results, id, page, isLoading} = action.payload;
            state.genresById = results
            state.id=id
            state.page=page
            state.isLoading=isLoading
        })
        // .addMatcher (isPending (), state => {
        //     state.isLoading = true
        // })
        // .addMatcher (isFulfilled (), state => {
        //     state.isLoading = false
        // })
})

const {reducer: GenresByIdReducer, actions} = GenresByIdSlice;

const GenresByIdAction = {
    ...actions,
    getByGenre
}

export {
    GenresByIdReducer,
    GenresByIdAction
}


//
//
//
// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {genreService} from "../../services/genreService";
//
//
// const initialState = {
//     with_genres: null,
//     genresList: []
// }
//
// const getByGenre = createAsyncThunk (
//     'getByGenre',
//     async (with_genres, page, thunkAPI) => {
//         try {
//             const {data} = await genreService.getByGenre ({with_genres}, {page});
//             return data
//         } catch
//             (e) {
//             return thunkAPI.rejectWithValue (e.response.data)
//         } finally {
//
//         }
//     }
// )
//
//
// const GenresByIdSlice = createSlice ({
//     name: 'GenresByIdSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase (getByGenre.fulfilled, (state, action) => {
//             const {results} = action.payload;
//             state.genresById = results
//         })
// })
//
// const {reducer: GenresByIdReducer, actions} = GenresByIdSlice;
//
// const GenresByIdAction={
//     ...actions,
//     getByGenre
// }
//
// export {
//     GenresByIdReducer,
//     GenresByIdAction
// }