import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Stack } from '@mui/material'

import { Categories } from '../dummy-categories'
import { Textbox } from '../components'

const Category = () => {
  const categoryId = useParams().category
  const apiCategory = Categories.find(category => category === categoryId)

  return (
    <Stack>
      <h1>{apiCategory}</h1>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Textbox />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Category