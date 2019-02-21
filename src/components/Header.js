import React from 'react'
import '../App.css';


const Header = (props) => {

  return (
    <div className='Header'>
      <div className="row">
        <div className="col-12">
          <h1 className='main-header'>Create, Express, and Record Your Own Music </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 sub-header ml-2">
          <h3 className="sub-header-1">Robert James Music</h3>
          <h4 className="sub-header-2">Guitar Lessons & Artist Development since 1989</h4>
        </div>
      </div>
    </div>

  )
}

export default Header