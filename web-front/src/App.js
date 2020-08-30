import React, { View } from 'react'
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Routes from './router'
import Header from './pages/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
