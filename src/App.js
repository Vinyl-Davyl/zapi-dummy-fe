import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Home, LoginPage, SingleApi, UserProfile, Categories, Category, CreateOrg } from './pages'
import { Navbar } from './components'
import { theme } from './theme'

const useStyles = makeStyles({
  router_container: {
    width: `100%`,
    padding: '0 1rem',
    marginTop: '6rem',
  }
})

const App = () => {
  const [query, setQuery] = useState('')
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Navbar query={query} setQuery={setQuery} />
      <div className={classes.router_container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/search' element={<Search query={query} />} />
          <Route path='/SingleApi' element={<SingleApi />} />
          <Route path='/api/categories' element={<Categories />} />
          <Route path='/api/categories/:category' element={<Category />} />
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='/orgs/:id' />
          <Route path='/createorg' element={<CreateOrg />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App