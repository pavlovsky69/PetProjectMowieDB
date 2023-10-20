import {apiService} from "./apiService";
import {urls} from "../constants/urls";


const moviesIdService = {
    getById:(id)=>apiService.get(urls.movie.byId(id), {params:(id), headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODhjZWZiOTQwMTZlOTFhMDg1ZTBkZmQyNzRhOGVhNSIsInN1YiI6IjY0YmVjNGY1Yjg2NWViMDBjNTg4ZGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6akZVvawCTs6d5XEusfNnwrw0mzJlbu_q3Y3h_QlCU'
    }},)
}

export {
    moviesIdService
}



