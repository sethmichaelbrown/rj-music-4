import React from 'react'
import { Route, Link } from 'react-router-dom'
import recording from '../images/recording.jpg'
import singer from '../images/singer.png'
import soloist from '../images/soloist.png'

import '../App.css'


const PhotoNav = (props) => {

  return (
    <div className='PhotoNav'>
      <div className="photonav-flex">

        <div className="item-1" id='photo-1'>
          <img className='photonav-item' src={recording} alt="" />
        </div>

        <div className="item-2" id='photo-2'>
          <img className='photonav-item' src={singer} alt="" />
        </div>

        <div className="item-3" id='photo-3'>
          <img className='photonav-item' src={soloist} alt="" />
        </div>

      </div>

    </div>

  )
}

export default PhotoNav
