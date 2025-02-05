
import { useParams } from 'react-router-dom'
import './FilmPage.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getOneFilm } from '../../store/slices/filmsSlice'
import Film from '../../components/Film/Film'

const FilmPage = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const {oneFilm} = useAppSelector((state) => state.filmsData)
    
    useEffect(() => {
        dispatch(getOneFilm(id))
    }, [])

    return (
        <div className='filmPage'>
            <Film oneFilm={oneFilm}/>
        </div>
    )
}

export default FilmPage