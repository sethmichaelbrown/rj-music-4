import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import About from './components/About'
// import Home from './components/Home'
// import Topics from './components/Topics'
import NavBar from './components/NavBar'
import PhotoNav from './components/PhotoNav'

import './App.css'

class App extends Component {

  state = {
    tester: true
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <PhotoNav />

        </div>
      </Router>
    )
  }
}

export default App
