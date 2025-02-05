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
    baseURL : 'https://api.themoviedb.org/3'
})

export const FilmsAPI = {
    getGenres(lng : string){
        return instance.get<GetGenresType>(`/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=${lng}`)
    },
    getFilms(pageCount : number, lng : string){
        return instance.get<GetFilmsType>(`discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=${lng}&page=${pageCount}`)
    },
    getOneFilm(id : string | undefined ){
        return instance.get<OneFilmType>(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    }
}