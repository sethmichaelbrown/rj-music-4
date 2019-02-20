import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import About from './components/About'
// import Home from './components/Home'
// import Topics from './components/Topics'
import NavBar from './components/NavBar'
import Header from './components/Header'

import './App.css'

class App extends Component {

  state = {
    displayHome: true
  }

  hideHome = () => {
    const newState = { ...this.state }
    newState.displayHome = false
    this.setState({displayHome: newState.displayHome})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar
            displayHome={this.state.displayHome} />

        </div>
      </Router>
    )
  }
}

export default App
