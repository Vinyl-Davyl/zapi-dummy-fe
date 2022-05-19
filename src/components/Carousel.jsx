import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid, IconButton, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
// import { ChevronLeft, ChevronRight} from '@mui/icons-material'

const useStyles = makeStyles({
  carousel_body: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '1rem',
    padding: '0 1rem',
  },
  card: {
    width: '250px',
    height: '150px',
    display: 'grid',
    placeItems: 'center'
  }
})

const CarouselComponent = ({ header, description, category }) => {
  const classes = useStyles()

  return (
    <Stack my={4}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' mb={1}>
      <Typography variant='h5'>
        {header}
      </Typography>
      <Link to={`/api/categories/${category}`}>
        View All
      </Link>
      </Stack>
      <Typography variant='body2' color='textPrimary'>
        {description}
      </Typography>
      <div className={classes.carousel_body}>
        <Card className={classes.card}>Item One</Card>
        <Card className={classes.card}>Item Two</Card>
        <Card className={classes.card}>Item Three</Card>
      </div>
    </Stack>
  )
}

export default CarouselComponent