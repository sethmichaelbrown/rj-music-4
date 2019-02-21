import React from 'react'
import { Route, Link } from 'react-router-dom'
import recording from '../images/recording.png'
import singer from '../images/singer.png'
import soloist from '../images/soloist.png'

import '../App.css'


const PhotoNav = (props) => {

  return (
    <div className='PhotoNav mt-0'>
      <div className="photonav-flex">
        
        <div className="photonav item-1" id='photo-1'>
          <img className='photonav-item' src={soloist} alt="soloist" />
          <div className="content">Improvisation & Soloing</div>
        </div>


        <div className="photonav item-2" id='photo-2'>
          <img className='photonav-item' src={singer} alt="singer" />
          <div className="content">Singing & Songwriting</div>
        </div>


        <div className="photonav item-3" id='photo-3'>
          <img className='photonav-item' src={recording} alt="recording" />
          <div className="content">Recording</div>
        </div>

      </div>

    </div>

  )
}

export default PhotoNav
