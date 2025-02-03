
import { FilmsType } from '../../types'
import './FilmCart.css'


export const imgUrl = "https://image.tmdb.org/t/p/w500/"

type FilmCardPropsType = {
    film : FilmsType
}

const FilmCard = (props : FilmCardPropsType) => {

    
  return (
    <div className='filmCard'>
        <h2>{props.film.title}</h2>
        <img src={imgUrl + props.film.poster_path} />
    </div>
  )
}

export default FilmCard