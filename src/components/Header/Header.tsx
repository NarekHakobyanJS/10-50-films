import { useEffect, ChangeEvent, useState } from 'react'
import { getGenres } from '../../store/slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeLenguage } from '../../store/slices/globalSlice'

import BTN from '../UI/BTN'
import logo from '../../assets/logo.jpg'

import './Header.css'
import { changeText, getSearch } from '../../store/slices/filmsSlice'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { genres } = useAppSelector((state) => state.genresData)
  const { language } = useAppSelector((state) => state.globalData)
  const { searchText, searchFilms } = useAppSelector((state) => state.filmsData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSearch(searchText))
    if(searchText.trim().length > 2){
      setOpen(true)
    }else {
      setOpen(false)
    }
  }, [searchText])

  useEffect(() => {
    dispatch(getGenres(language))
  }, [language])

  const changeIpuntText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeText(e.target.value))
  }
  return (
    <header>
      <div className="logo-block">
        <img src={logo} alt='logo' />
      </div>
      <nav>
        {
          genres.map((genre) => {
            return <BTN key={genre.id} genre={genre} />
          })
        }

      </nav>
      <div className="search-block">
        <div className="input-search">
          <input value={searchText} onChange={changeIpuntText} />
          {
            open && <div className="search-result">
              {
                searchFilms.map((searchFilm) => {
                  return <NavLink to={`/film/${searchFilm.id}`} className='searchFilms'>
                    <img src={import.meta.env.VITE_IMG_URL + searchFilm.poster_path} />
                    <h2>{searchFilm.title}</h2>
                  </NavLink>
                })
              }
            </div>
          }
        </div>


        <select name={language} onChange={(e) => dispatch(changeLenguage(e.target.value))}>
          <option value="en-US">en</option>
          <option value="ru-RU">ru</option>
        </select>
      </div>
    </header>
  )
}

export default Header