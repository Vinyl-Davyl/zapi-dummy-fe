import React from 'react'
// import { useSelector } from 'react-redux'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Carousel, LoadingSpinner, Sidebar } from '../components'

const useStyles = makeStyles({
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  showcase: {
    width: '100%',
    padding: '0 0.5rem',
  },
  main: {
    display: 'flex',
    gap: `1rem`,
    marginTop: '6rem',
    padding: '0 1rem',
    '@media screen and (max-width: 1200px)': {
      gridTemplateColumns: '1fr'
    }
  },
})

const Home = () => {
  const classes = useStyles()
  // const { apis, isLoading } = useSelector(store => store.apis)
 
  // if(isLoading) return <LoadingSpinner />

  return (
    <main className={classes.main}>
      <Sidebar />
      <div className={classes.section}>
        <Stack width='80%' mb={8}>
          <Typography variant='h4' gutterBottom>
            Welcome to the API hub,
          </Typography>
          <Typography variant='subtitle1'>
            Here you will find our collection of APIs for developers.
          </Typography>
        </Stack>
        <div className={classes.showcase}>
          <Carousel header='Recommended APIs' description='APIs curated by Z-API and recommended based on functionality offered, performance, and support.' category='recommended' />
          <Carousel header='Popular APIs' description='APIs that are popular and frequently used on Z-API.' category='popular' />
          <Carousel header='Free Public APIs for developer' description='If you&apos;re new to Z-API, this collection is a great place to start exploring APIs that are free to test, specifically updated for 2021.' category='free public' />
          <Carousel header='Top Weather APIs' description='List of the Best Weather APIs to provide historical and trending weather forecasts.' category='location' />
        </div>
      </div>
    </main>
  )
}

export default Home