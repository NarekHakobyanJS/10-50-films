import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";
import { FilmsType, OneFilmType } from "../../types";

type GetFilmsArgumentType = {
    pageCount : number,
    language : string
}

type FilmsStateType = {
    films : Array<FilmsType>,
    page : number,
    total_results : number,
    total_pages : number,
    oneFilm : OneFilmType | null
}

export const getFilms = createAsyncThunk<Array<FilmsType>, GetFilmsArgumentType>(
    'getFilms',
    async ({pageCount, language}) => {
        const res = await FilmsAPI.getFilms(pageCount, language)
        return res.data.results
    }
)

export const getOneFilm = createAsyncThunk<OneFilmType, string | undefined>(
    'getOneFilm',
    async (id) => {
        const res = await FilmsAPI.getOneFilm(id)

        return res.data
    }
)



const initialState : FilmsStateType = {
    films : [],
    oneFilm : null,
    page : 1,
    total_results : 0,
    total_pages : 0
}

const filmsSlice = createSlice({
    name : 'filmsSlice',
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(getFilms.fulfilled, (state, action : PayloadAction<Array<FilmsType>>) => {
            state.films = action.payload
        })
        builder.addCase(getOneFilm.fulfilled, (state, action : PayloadAction<OneFilmType>) => {
            state.oneFilm = action.payload
        })
    }
})

export default filmsSlice.reducer