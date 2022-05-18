import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Home, LoginPage, Search, SingleApi, UserProfile, Categories, Category } from './pages'
import { Navbar } from './components'
import { theme } from './theme'

const App = () => {
  const [query, setQuery] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<Search query={query} />} />
        <Route path='/api/:id' element={<SingleApi />} />
        <Route path='/api/categories' element={<Categories />} />
        <Route path='/api/categories/:category' element={<Category />} />
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App