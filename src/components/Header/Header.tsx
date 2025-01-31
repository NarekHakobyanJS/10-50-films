import { useEffect } from 'react'
import { getGenres } from '../../store/slices/genresSlice'
import logo from '../../assets/logo.jpg'
import './Header.css'
import BTN from '../UI/BTN'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeLenguage } from '../../store/slices/globalSlice'

const Header = () => {
  const { genres } = useAppSelector((state) => state.genresData)
  const { language } = useAppSelector((state) => state.globalData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGenres(language))
  }, [language])

  return (
    <header>
      <div className="logo-block">
        <img src={logo} alt='logo' />
      </div>
      <nav>
        {
          genres.map((genre: any) => {
            return <BTN key={genre.id} genre={genre} />
          })
        }

      </nav>
      <div className="search-block">
        <input />
        <select name={language} onChange={(e) => dispatch(changeLenguage(e.target.value))}>
          <option value="en-US">en</option>
          <option value="ru-RU">ru</option>
        </select>
      </div>
    </header>
  )
}

export default Header