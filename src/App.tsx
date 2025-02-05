
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { getFilms } from './store/slices/filmsSlice'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FilmPage from './pages/FilmPage/FilmPage'





function App() {
  const dispatch = useAppDispatch()
  const {page} = useAppSelector((state) => state.filmsData)
  const {language} = useAppSelector((state) => state.globalData)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getFilms({pageCount : page, language}))
    navigate(`?${language}`)
  }, [page, language])
  
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
