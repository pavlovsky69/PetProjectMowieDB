import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const searchService = {
    getByQuery: ({query}) => apiService.get (urls.searchMovies.base (query),
        {
            params: ({query}),
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
            }
        }),
    getByQueryPage:(query, page)=>apiService.get(urls.searchMovies.byPage(query, page),
        {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
            }})
}

export {
    searchService
}








// const searchService = {
//     getByQuery: ({query}) => apiService.get (urls.searchMovies.base (query),
//         {
//             params: ({query}),
//             headers: {
//                 accept: 'application/json',
//                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
//             }
//         })
// }
//
// export {
//     searchService
// }


// const searchService = {
//     getByQuery: ({query}) => apiService.get (urls.searchMovies.base (query),
//         {headers: {
//                 accept: 'application/json',
//                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
//             }
//         })
// }
//
// export {
//     searchService
// }


// const moviesIdService = {
//     getById:(id)=>apiService.get(urls.movie.byId(id), {params:(id), headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
//         }},)
// }