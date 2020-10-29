import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import AppBar from './components/AppBar'
import Content from './components/Content'

import Login from './pages/Login'
import HackerEarth from './pages/HackerEarth'
import './App.css'

function App() {
  return (
    <Router>
      <AppBar />
      <Content>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/hacker-earth">
          <HackerEarth />
        </Route>
        <Redirect from="/" to="/login" />
      </Content>
    </Router>
  )
}

export default App
