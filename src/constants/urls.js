const baseURL = process.env.REACT_APP_API

const movie = '/movie'
const moviesList = '/discover/movie';
const moviesGenre = '/genre/movie/list';
const moviesPoster = 'https://image.tmdb.org/t/p/w500';
const genresList='/genre/movie/list';
// const moviesPoster = 'https://image.tmdb.org/t/p/w500';


const urls = {
    moviesList: {
        base: moviesList,
        byId: (id) => `${movie}/${id}`
    },
    moviesGenre: {
        base: moviesGenre
    },
    moviesPoster: {
        base: moviesPoster
    },
    movie: {
        byId: (id) => `${movie}/${id}`,
        byOneGenre:(id, page)=>`${moviesList}?with_genres=${id}&page=${page}`
    },
    genresList:{
        base:genresList,

    },
    searchMovies:{
        base:(query)=>`${baseURL}/search/movie?`,
        byPage:(query, page)=>`${baseURL}/search/movie?query=${query}&page=${page}`
        // base:(query)=>`${baseURL}/search/movie?query=${query}`
    }
}

export {baseURL, urls}