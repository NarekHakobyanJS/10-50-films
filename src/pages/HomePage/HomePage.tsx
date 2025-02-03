
import './HomePage.css'
import { useAppSelector } from '../../store/hooks'
import FilmCard from '../../components/FilmCard/FilmCard'

const HomePage = () => {
    const {films} = useAppSelector((state) => state.filmsData)

  return (
    <div>
      <div className='filmsData'>
        {
            films.map((film) => {
                return < FilmCard key={film.id} film={film}/>
            })
        }
      </div>
    </div>
  )
}

export default HomePage