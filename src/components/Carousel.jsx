import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import { makeStyles } from '@mui/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Textbox from './Textbox'

const array = ['Weather API', 'Entertainmet API', 'Transport API', 'Finance API', 'Food API', 'Other API']

const useStyles = makeStyles({
  carousel_container: {
    width: '95%',
    height: '250px',
    position: 'relative',
    margin: '0 0.5rem',
    padding: '0 1rem',
    '@media screen and (max-width: 1100px)': {
      width: '100%'
    }
  }
})

const CarouselComponent = ({ header, description, category }) => {
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2, slidesToScroll: 1, }
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, slidesToScroll: 1, }
      }
    ]
  }

  return (
    <Stack direction='column' width={`95%`} my={4}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' width={`95%`} mb={1}>
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
      <div className={classes.carousel_container}>
      <Slider {...settings}>
        {array.map((item, index) => (
          <div key={index}>
            <Textbox name={item} />
          </div>
        ))}
      </Slider>
      </div>
    </Stack>
  )
}

export default CarouselComponent