import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Home, LoginPage, SingleApi, UserProfile } from './pages'
import { Navbar } from './components'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/api/:id' element={<SingleApi />} />
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App