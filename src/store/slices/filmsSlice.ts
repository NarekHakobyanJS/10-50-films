import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";
import { FilmsType, OneFilmType } from "../../types";
import { FilmPageType } from "../../pages/FilmPage/FilmPage";
import { AxiosResponse } from "axios";

type GetFilmsArgumentType = {
    pageCount: number,
    language: string
}

type FilmsStateType = {
    films: Array<FilmsType>,
    searchFilms : Array<FilmsType>,
    searchText : string,
    page: number,
    total_results: number,
    total_pages: number,
    oneFilm: OneFilmType | null
}

export const getSearch = createAsyncThunk(
    'getSearch',
    async (text : string) => {
        const res = await FilmsAPI.getSearch(text)
        return res.data.results
    }
)
export const getFilms = createAsyncThunk<Array<FilmsType>, GetFilmsArgumentType>(
    'getFilms',
    async ({ pageCount, language }) => {
        const res = await FilmsAPI.getFilms(pageCount, language)
        return res.data.results
    }
)

export const getOneFilm = createAsyncThunk<OneFilmType, FilmPageType>(
    'getOneFilm',
    async ({ id, language }) => {
        const res = await FilmsAPI.getOneFilm(id, language)

        return res.data
    }
)

export const fetchTrailer = createAsyncThunk<void, any>(
    'fetchTrailer',
    async ({ myId , iframe }: any) => {
        console.log(myId);
        
        const res: AxiosResponse<any> = await FilmsAPI.getTrailer(myId)

        
        res.data.results.forEach((elm: any) => {
            if (elm.name === "Official Trailer") {
                iframe?.current?.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            } else {
                iframe?.current?.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            }
        })

    }
)



const initialState: FilmsStateType = {
    films: [],
    searchText : '',
    searchFilms : [],
    oneFilm: null,
    page: 1,
    total_results: 0,
    total_pages: 0
}

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {
        changePage(state) {
            state.page = state.page + 1
        },
        changeText(state, action) {
            state.searchText = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilms.fulfilled, (state, action: PayloadAction<Array<FilmsType>>) => {
            state.films = [...state.films, ...action.payload]
        })
        builder.addCase(getOneFilm.fulfilled, (state, action: PayloadAction<OneFilmType>) => {
            state.oneFilm = action.payload
        })
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.searchFilms = action.payload
        })  
    }
})

export const { changePage, changeText } = filmsSlice.actions

export default filmsSlice.reducer