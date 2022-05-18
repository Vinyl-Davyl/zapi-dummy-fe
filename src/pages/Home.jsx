import React from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Sidebar } from '../components'

const useStyles = makeStyles({
  main: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    '@media screen and (max-width: 800px)': {
      gridTemplateColumns: '1fr'
    }
  },
  section: {
    padding: '0 0.5rem'
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Sidebar />
      <section>
        <Stack>
          <Typography variant='h4' gutterBottom>
            Welcome to the API hub,
          </Typography>
          <Typography variant='subtitle1'>
            Here you will find our collection of APIs for developers.
          </Typography>
        </Stack>
      </section>
    </main>
  )
}

export default Home