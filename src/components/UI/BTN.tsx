import React from 'react'
import './UI.css'
import { GenresType } from '../../types'


type BTNPropsType = {
  genre : GenresType
}

const BTN = (props : BTNPropsType) => {
  return (
    <button className='UI-BTN'>{props.genre.name}</button>
  )
}

export default BTN