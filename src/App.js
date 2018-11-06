import React from 'react'
import AppRouter from './AppRouter'
import TopNav from './components/TopNav'
import './App.css'

export const App = () => {
  return (
    <div>
      <TopNav />
      <AppRouter />
    </div>
  )
}

export default App
