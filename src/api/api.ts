import axios from 'axios'
import { FilmsType, GenresType } from '../types';

const apiKey : string = "f36f23edf6e10fd2ddcf939916b1f67a";

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
        return instance.get<GetGenresType>(`/genre/movie/list?api_key=${apiKey}&language=${lng}`)
    },
    getFilms(pageCount : number, lng : string){
        return instance.get<GetFilmsType>(`discover/movie?api_key=${apiKey}&language=${lng}&page=${pageCount}`)
    }
}