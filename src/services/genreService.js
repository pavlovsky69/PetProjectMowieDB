import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const genreService = {
    getAllGenres: () => apiService.get (urls.genresList.base, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
        }
    }),

    getByGenre: (with_genres, page) => apiService.get (urls.moviesList.base, {
        params: ({with_genres, page}), headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
        }
    })
}
export {genreService}







// getByGenre: ({page}, {with_genres}) => apiService.get (urls.moviesList.base, {
//     params: ({page, with_genres}), headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
//     }
// })



//
// getByGenre: (with_genres, page) => apiService.get (urls.moviesList.base, {
//     params: ({with_genres, page}), headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
//     }
// })
