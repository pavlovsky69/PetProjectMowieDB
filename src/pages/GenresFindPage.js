import {Header} from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import React, {useEffect} from "react";
import {GenresByIdAction} from "../redux/slices/GenresByIdSlice";
import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import style from "./GenresFindPage.module.css"
import {Box, LinearProgress} from "@mui/material";


const GenresFindPage = () => {

    const {id} = useParams ();
    const dispatch = useDispatch ();
    const {genresById} = useSelector (state => state.genresById)

    const {isLoading} = useSelector (state => state.progress)
    const allGenres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]


    const [query, setQuery] = useSearchParams ({page: '1',})
    const page = query.get ('page')

    useEffect (() => {
        dispatch (GenresByIdAction.getByGenre ({id, page}))
    }, [page]);
    const ids = Number (id)


    const nextPage = () => {
        setQuery (prev => {
            prev.set ('page', (+prev.get ('page') + 1).toString ())
            return prev;
        })
    }
    const prevPage = () => {
        setQuery (prev => {
            prev.set ('page', (+prev.get ('page') - 1).toString ())
            return prev;
        })
    }


    return (
        <div>
            <Header/>
            {isLoading ? <Box sx={{width: '100%', height:'100vh'}} color="primary">
                    <LinearProgress/>
                </Box> :
                <div className={style.GenreName}>
                    {allGenres.map (
                        (genreName) => <div className={style.TextGenreTitle}
                                            key={genreName.id}> {genreName.id === ids &&
                            <h2 className={style.textTitle}>Genre: {genreName.name}</h2>}</div>)}

                    <div className={style.MovieListHead}>
                        <div className={style.MoviesCard}>
                            {genresById.map (movie => <MovieInfo key={movie.id} movie={movie}/>)}
                        </div>
                        <div className={style.ButtonPage}>
                            {<button disabled={page <= 1} className={style.ButtonMinus}
                                                  onClick={() => prevPage ()}>◀ Prev Page
                            </button>}
                            {<button disabled={page >= 500} className={style.ButtonPlus}
                                                    onClick={() => nextPage ()}>Next
                                Page ▶
                            </button>}

                        </div>
                    </div>
                </div>}

        </div>
    );
};

export {GenresFindPage};
