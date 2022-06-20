import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Categories } from '../dummy-categories'
import { Textbox, Sidebar } from '../components'

const useStyles = makeStyles({
  section: {
    width: '80%',
    display: 'block',
    padding: 0,
    minWidth: 0,
    '@media screen and (max-width: 1200px)': {
      width: '100%'
    }
  },
  sidebar: {
    width: '20%',
    height: '100%',
    '@media screen and (max-width: 1200px)': {
      width: 0
    }
  },
  main: {
    width: '100%',
    display: 'flex',
    marginTop: '6rem',
    padding: '0 1rem'
  },
})

const Category = () => {
  const categoryId = useParams().category
  const apiCategory = Categories.find(category => category === categoryId)
  const classes = useStyles()

  return (
    <Stack direction='row' className={classes.main}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.section}>
        <Typography variant='h4'>
          Collection of the best {apiCategory} APIs.
        </Typography>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Textbox />
          </Grid>
        </Grid>
      </div>
    </Stack>
  )
}

export default Category