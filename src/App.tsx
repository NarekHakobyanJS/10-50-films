
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { changePage, getFilms } from './store/slices/filmsSlice'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FilmPage from './pages/FilmPage/FilmPage'


// VITE_API_KEY = f36f23edf6e10fd2ddcf939916b1f67a
// VITE_IMG_URL = https://image.tmdb.org/t/p/w500/


function App() {

  const [load, setLaod] = useState<boolean>(false)

  console.log(load);
  
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  }, [])
  
  const dispatch = useAppDispatch()
  const {page} = useAppSelector((state) => state.filmsData)
  const {language} = useAppSelector((state) => state.globalData)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getFilms({pageCount : page, language}))
    
    navigate(`?language=${language}&page=${page}`)
  
  }, [page, language])
  
  useEffect(() => {
    if(load){
      dispatch(changePage())
    }

  }, [load])

  const handleScroll = (e : any) => {
    
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setLaod(true)
    }else {
      setLaod(false)
    }
  }
  return (
    <>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage /> }/>
          <Route path='/film/:id' element={<FilmPage /> }/>
        </Routes>
      </div>
    </>

  )
}

export default App

