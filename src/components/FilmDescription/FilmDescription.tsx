import './FilmDescription.css'


type FilmDescriptionPropsType = {
    release_date: string | undefined,
    overview: string | undefined,
    vote_average: string | undefined,
    runtime: number | undefined
}
const FilmDescription = ({ release_date, overview, vote_average, runtime }: FilmDescriptionPropsType) => {
    return (
        <div className='filmDescription'>
            <p>release date : <b>{release_date}</b> </p>
            <p>overview : <b>{overview}</b></p>
            <p>vote average : <b> 10 / {vote_average}</b></p>
            <p>runtime : <b>{runtime}</b></p>
        </div>
    )
}

export default FilmDescription