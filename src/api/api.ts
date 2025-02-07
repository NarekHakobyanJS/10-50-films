import axios from 'axios'
import { FilmsType, GenresType, OneFilmType } from '../types';


type GetGenresType = {
    genres : Array<GenresType>
}


type GetFilmsType = {
    results : Array<FilmsType>,
    page : number,
    total_results : number,
    total_pages : number
}

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    },
})

export const FilmsAPI = {
    getGenres(lng : string){
        return instance.get<GetGenresType>(`/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=${lng}`)
    },
    getFilms(pageCount : number, lng : string){
        return instance.get<GetFilmsType>(`discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=${lng}&page=${pageCount}`)
    },
    getOneFilm(id : string | undefined, lng : string ){
        return instance.get<OneFilmType>(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=${lng}`)
    },
    getSearch(text : string){
        return instance.get(`search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${text}`)
    },
    getTrailer(movieId : string | undefined){
        return instance.get(`/movie/${movieId}/videos?language=en-US`)
    }

}