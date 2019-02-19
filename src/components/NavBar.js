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




const NavBar = (props) => {

  return (
    <div className='NavBar'>
      <div>
         <hr />
        <div className="navbar-flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/workwithrobb">Work With Robb</Link>
          <Link to="/innergame">Inner Game</Link>
          <Link to="/store">Store</Link>
          <Link to="/mailinglist">Mailing List</Link>
          <Link to="/contact">Contact</Link>
        </div>

       

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
