
import { NavLink } from 'react-router-dom'
import { FilmsType } from '../../types'
import './FilmCart.css'


// export const imgUrl = "https://image.tmdb.org/t/p/w500/"

type FilmCardPropsType = {
    film : FilmsType
}

const FilmCard = (props : FilmCardPropsType) => {

    
  return (
    <div className='filmCard'>
      <NavLink to={`/film/${props.film.id}`}>
        <h2>{props.film.title}</h2>
        <img src={import.meta.env.VITE_IMG_URL + props.film.poster_path} />
        </NavLink>
    </div>
  )
}

export default FilmCard