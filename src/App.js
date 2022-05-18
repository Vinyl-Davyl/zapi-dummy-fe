import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Home, LoginPage, SingleApi, UserProfile, Categories, Category } from './pages'
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
        <Route path='/api/categories' element={<Categories />} />
        <Route path='/api/categories/:category' element={<Category />} />
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App