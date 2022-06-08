import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'


import { ForgotPassword, Home, LoginPage, SingleApi, UserProfile, Categories, Category, CreateOrg, Signup } from './pages'
import { Navbar } from './components'
import { theme } from './theme'
import { getApis } from './redux/features/api/apiSlice'
// @taiwoAkindele add this component to the index.js file as a named export

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApis)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <ThemeProvider theme={theme}>
      <Navbar query={query} setQuery={setQuery} />
      <div className={classes.router_container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          {/* @taiwoAkindele there was a component here */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          {/* @taiwoAkindele and you created another one here */}
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