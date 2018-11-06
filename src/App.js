import React from 'react'
import AppRouter from './AppRouter'
import TopNav from './components/TopNav'
import './App.css'

fetch(process.env.REACT_APP_API_URL);

export const App = () => {
  return (
    <div>
      <TopNav />
      <AppRouter />
    </div>
  )
}

export default App
