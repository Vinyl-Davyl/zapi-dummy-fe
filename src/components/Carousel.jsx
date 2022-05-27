import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight} from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Textbox from './Textbox'

const array = ['Weather API', 'Entertainmet API', 'Transport API', 'Finance API', 'Food API', 'Other API']

const useStyles = makeStyles({
  carousel_container: {
    width: '100%',
    height: '250px',
    position: 'relative',
    margin: '0 0.5rem',
    padding: '0',
    '@media screen and (max-width: 400px)': {
      width: '350px'
    }
  },
  arrow_left : {
    position: 'absolute',
    top: '50%',
    left: -35,
    transform: 'translateY(-50%)',
    width: '2rem',
    height: '2rem',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--light)',
    borderRadius: '50%',
    zIndex: '1',
    cursor: 'pointer',
  },
  arrow_right : {
    position: 'absolute',
    top: '50%',
    right: 30,
    transform: 'translateY(-50%)',
    width: '2rem',
    height: '2rem',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--light)',
    borderRadius: '50%',
    zIndex: '1',
    cursor: 'pointer',
    '@media screen and (max-width: 400px)': {
      right: 15,
    }
  }
})

const NextArrow = (props) => {
  const classes = useStyles()
  const { onClick } = props
  return (
    <div className={classes.arrow_right} onClick={onClick}>
      <ChevronRight />
    </div>
  )
}

const PrevArrow = (props) => {
  const classes = useStyles()
  const { onClick } = props
  return (
    <div className={classes.arrow_left} onClick={onClick}>
      <ChevronLeft />
    </div>
  )
}

const CarouselComponent = ({ header, description, category }) => {
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
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