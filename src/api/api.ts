import axios from 'axios'
import { GenresType } from '../types';

const apiKey : string = "f36f23edf6e10fd2ddcf939916b1f67a";

type GetGenresType = {
    genres : Array<GenresType>
}

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

export const FilmsAPI = {
    getGenres(lng : string){
        //en-US || ru-RU
        return instance.get<GetGenresType>(`/genre/movie/list?api_key=${apiKey}&language=${lng}`)
    }
}