import { OneFilmType } from '../../types'
import FilmDescription from '../FilmDescription/FilmDescription'
import './Film.css'

type FilmPropsType = {
    oneFilm : OneFilmType | null
}
const Film = ({oneFilm} : FilmPropsType) => {
    
  return (
    <div 
    className='film'
    style={{
        backgroundImage : `url(${import.meta.env.VITE_IMG_URL + oneFilm?.backdrop_path})`,

    }}
    >

        <div className="left">
            <h2>{oneFilm?.title}</h2>
            <img src={import.meta.env.VITE_IMG_URL + oneFilm?.poster_path}/>
        </div>

        <div className="right">
            <div className='right-content'>
            < FilmDescription 
            release_date={oneFilm?.release_date}
            overview={oneFilm?.overview}
            vote_average={oneFilm?.vote_average.toFixed(1)}
            runtime={oneFilm?.runtime}
            />

            <div className='compani'>
                {
                    oneFilm?.production_companies.map((compani) => {
                        return (
                            <div key={compani.id}>
                                <img src={import.meta.env.VITE_IMG_URL + compani.logo_path} />
                            </div>
                        )
                    })
                }
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Film