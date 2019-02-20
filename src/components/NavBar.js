import React from 'react'
import { Route, Link } from 'react-router-dom'
import '../App.css'

import Home from './Home'
import About from './contentpages/About'
import Testimonials from './contentpages/Testimonials'
import WorkWithRobb from './contentpages/WorkWithRobb'
import InnerGame from './contentpages/InnerGame'
import Store from './contentpages/Store'
import MailingList from './contentpages/MailingList'
import Contact from './contentpages/Contact'
import PhotoNav from './PhotoNav.js'




const NavBar = (props) => {

  return (
    <div className='NavBar'>
      <div>
        <hr />
        <div className="row nav-bar">
          <div className="col-12">
            <div className="navbar-flex">
              <Link to="/">Home</Link>
              <Link to="/about" onClick={props.hideHome}>About</Link>
              <Link to="/testimonials" onClick={props.hideHome}>Testimonials</Link>
              <Link to="/workwithrobb" onClick={props.hideHome}>Work With Robb</Link>
              <Link to="/innergame" onClick={props.hideHome}>Inner Game</Link>
              <Link to="/store" onClick={props.hideHome}>Store</Link>
              <Link to="/mailinglist" onClick={props.hideHome}>Mailing List</Link>
              <Link to="/contact" onClick={props.hideHome}>Contact</Link>
            </div>
          </div>
        </div>

        {props.displayHome ?
        <div className="row photo-nav mt-2">
          <div className="col-12">
            <PhotoNav />
          </div>
        </div> : ''
}

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/workwithrobb" component={WorkWithRobb} />
        <Route path="/innergame" component={InnerGame} />
        <Route path="/store" component={Store} />
        <Route path="/mailinglist" component={MailingList} />
        <Route path="/contact" component={Contact} />
      </div>



    </div>

  )
}

export default NavBar
