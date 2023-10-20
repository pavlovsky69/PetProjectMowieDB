import {createBrowserRouter, Navigate} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";

import {MainPage} from "../pages/MainPage";
import {MoviesListPage} from "../pages/MoviesListPage";
import {GenresPage} from "../pages/GenresPage";
import {SearchPage} from "../pages/SearchPage";
import {MoviePage} from "../pages/MoviePage";
import {GenresFindPage} from "../pages/GenresFindPage";


const router = createBrowserRouter ([
        {
            path: AppRoutes.MainUrl,
            element: <MainPage/>,
            children: [
                {
                    index: true,
                    element: <Navigate to={AppRoutes.MoviesListUrl}/>
                },
                {
                    path: AppRoutes.MoviesListUrl,
                    element: <MoviesListPage/>
                },
                {
                    path: AppRoutes.GenreListUrl,
                    element: <GenresPage/>
                },
                {
                    // path: AppRoutes.SearchPage,
                    path: '/search/:query',
                    element: <SearchPage/>
                },
                {
                    path: '/movie/:id',
                    element: <MoviePage/>
                },
                {
                    path: '/genres/:id',
                    element: <GenresFindPage/>
                }
            ]

        }
    ]
)
export {router}