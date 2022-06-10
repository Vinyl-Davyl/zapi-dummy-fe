import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Stack, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Textbox } from './index'

const array = ['Weather API', 'Entertainmet API', 'Transport API', 'Finance API', 'Food API', 'Other API']

const useStyles = makeStyles({
  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: '-10%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    color: 'var(--base)',
  },
    rightArrow: {
      position: 'absolute',
      top: '-38%',
      right: '-90%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: 'var(--base)',
  },
  carousel_container: {
    width: '80%',
    height: '350px',
    position: 'relative',
    margin: '0 0.5rem',
    padding: '0 1rem',
    '@media screen and (max-width: 1100px)': {
      width: '80%'
    }
  }
})

const NextArrow = ({ onClick }) => {
  const classes = useStyles()
  return (
    <IconButton onClick={onClick} className={classes.rightArrow}>
      <ChevronRight />
    </IconButton>
  )
}

const PrevArrow = ({ onClick }) => {
  const classes = useStyles()
  return (
    <IconButton onClick={onClick} className={classes.leftArrow}>
      <ChevronLeft />
    </IconButton>
  )
}

const CarouselComponent = ({ header, description, category }) => {
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    ],
  }

  return (
    <Stack direction='column' width='100%' my={4}>
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
      {/* Carousel */}
      <Stack alignItems='center' justifyContent='center'>
        <Stack className={classes.carousel_container}>
          <Slider {...settings}>
            {array.map(item => (
              <Textbox key={item} name={item}/>
            ))}
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CarouselComponent