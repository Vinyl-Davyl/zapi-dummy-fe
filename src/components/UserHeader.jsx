import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Stack, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { CameraAltRounded } from '@mui/icons-material'
import Typed from "react-typed"

const useStyles = makeStyles({
  main: {
    borderRadius: '90px 0 0 0 ',
    height: '150px',
    backgroundColor: 'var(--mid)',
    border:'none',
  },
  image: {
    width: '150px',
    height: '150px',
  },
})

const UserHeader = ({ image, id }) => {
  const classes = useStyles()

    return(
    <>
    <Stack>
      <Stack  className={classes.main}>
        <Typography variant='h2'>
          <CameraAltRounded style={{ color: 'var(--base)', fontSize: '4rem', display: 'flex', marginLeft: 'auto', marginTop:'5.5rem' }}/>
        </Typography>
      </Stack>          
    </Stack>
    <Stack direction={{ xs: 'column', sm:'column', md:'row', lg:'row'  }}>
      <Avatar className={classes.image} alt='Dummy-image' src={image}  />
      <Stack direction='row' width='100%' alignItems='center' justifyContent='space-between'>
        <Stack direction='column' spacing={1}>
          <Typography variant='h4'>
            Profile
          </Typography>
          <Typed strings={['Update your photo ','and personal details']} typeSpeed={40} backSpeed={30} loop />
        </Stack>
        <Link to={`/user/edit/${id}`}>
          <Button variant='contained' style={{ height: '40px', marginLeft:'auto', marginTop:'2rem' }}>
            Edit
          </Button>
        </Link>
      </Stack> 
    </Stack>
    </>
    )
}

  export default UserHeader