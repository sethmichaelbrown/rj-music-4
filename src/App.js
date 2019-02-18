import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Topics from './components/Topics'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>


        </div>
      </Router>
    )
  }
}

export default App
