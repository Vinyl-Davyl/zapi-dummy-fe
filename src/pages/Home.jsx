import React from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Carousel, Sidebar } from '../components'

const useStyles = makeStyles({
  main: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    '@media screen and (max-width: 800px)': {
      gridTemplateColumns: '1fr'
    }
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
        <Carousel header='Recommended APIs' description='APIs curated by RapidAPI and recommended based on functionality offered, performance, and support.' category='recommended' />
        <Carousel header='Popular APIs' description='APIs that are popular and frequently used on RapidAPI.' category='popular' />
        <Carousel header='Free Public APIs for developer' description='If you&apos;re new to RapidAPI, this collection is a great place to start exploring APIs that are free to test, specifically updated for 2021.' category='free public' />
        <Carousel header='Top Weather APIs' description='List of the Best Weather APIs to provide historical and trending weather forecasts.' category='location' />
      </section>
    </main>
  )
}

export default Home