import {Header} from "../components/Header/Header";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {searchActions} from "../redux/slices/searchSlice";
import style from "./SearchPage.module.css"
import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import {searchByPageActions} from "../redux/slices/searchByPageSlice";
import {Box, LinearProgress} from "@mui/material";

const SearchPage = () => {
    // const {searchList} = useSelector (state => state.search)
    const {total_pages} = useSelector (state => state.searchByPage)
    const {page} = useSelector (state => state.searchByPage)
    const {searchList2} = useSelector (state => state.searchByPage)
    const {searchCheck} = useSelector (state => state.searchCheck)
    const {isLoading} = useSelector (state => state.progress)
    const dispatch = useDispatch ()
    const {query} = useParams ();



    useEffect (() => {
        dispatch (searchByPageActions.getByQueryPage ({query, page}))
    }, [query, page]);

    const nextPage = () => {
        dispatch (searchByPageActions.nextPageCount ())
    }

    const prevPage = () => {
        dispatch (searchByPageActions.prevPageCount ())
    }


    return (
        <div>
            <Header/>
            {
                isLoading ? <Box sx={{width: '100%', height: '100vh'}} color="primary">
                        <LinearProgress/>
                    </Box> :
                    <div className={style.MainBlockSearch}>
                        {/*{searchCheck ? true : <SearchMovie/>}*/}
                        <div className={style.TitleSearchQuery}><h2>All results at your search: "{query}"</h2></div>

                        <div className={style.MovieListHead}>
                            {<div className={style.MoviesCard}>
                                {/*{searchList?.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}*/}
                                {searchList2?.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
                            </div>}
                        </div>

                        <div className={style.ButtonPage}>
                            {/*<div className={style.CurrentPage}><h4>Current page: {page}</h4></div>*/}
                            {<button disabled={page === 1} className={style.ButtonMinus} onClick={() => prevPage ()}>◀
                                Prev Page
                            </button>}
                            {<button disabled={page === total_pages} className={style.ButtonPlus}
                                     onClick={() => nextPage ()}>Next Page ▶
                            </button>}
                        </div>
                        <div className={style.PageCount}>
                            <div className={style.CurrentPage}><h4>Current page: {page}</h4></div>
                            <div className={style.TotalPage}><h4>Total pages: {total_pages}</h4></div>
                        </div>

                    </div>
            }

        </div>
    );
};

export {SearchPage};
