import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { Home, LoginPage, Search, SingleApi, UserProfile, Categories, Category, CreateOrg } from './pages'
import { Navbar } from './components'
import { theme } from './theme'

const App = () => {
  const [query, setQuery] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <Navbar query={query} setQuery={setQuery} />
      <div className='router-section'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/search' element={<Search query={query} />} />
          <Route path='/api/:id' element={<SingleApi />} />
          <Route path='/api/categories' element={<Categories />} />
          <Route path='/api/categories/:category' element={<Category />} />
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='/orgs/:id' />
          <Route path='/orgs/create-new' element={<CreateOrg />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App