import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MoviesList/MoviesList";
import React from "react";
import style from'./MoviesListPage.module.css'
const MoviesListPage = () => {
    return (
        <div className={style.MoviesListHead}>
            <Header/>
            <MoviesList/>
        </div>
    );
};

export {MoviesListPage};