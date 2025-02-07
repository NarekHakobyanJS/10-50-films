
import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchTrailer, getOneFilm } from '../../store/slices/filmsSlice'
import Film from '../../components/Film/Film'


import './FilmPage.css'

export type FilmPageType = {
    id : string | undefined,
    language : string
}

const FilmPage = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const {oneFilm} = useAppSelector((state) => state.filmsData)
    const {language} = useAppSelector((state) => state.globalData)
    const iframe = useRef(null)

    let filmPage : FilmPageType = {id, language}

    useEffect(() => {
        dispatch(getOneFilm(filmPage))
        dispatch(fetchTrailer({myId : id, iframe}))
    }, [language, id])

    return (
        <div className='filmPage'>
            <Film oneFilm={oneFilm}/>
            <iframe ref={iframe} />
        </div>
    )
}

export default FilmPage