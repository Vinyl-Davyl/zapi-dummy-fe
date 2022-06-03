import React from 'react'
import { Avatar, Stack, Typography, Button} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import Typed from "react-typed";

const useStyles = makeStyles({
    main: {
      borderRadius: '90px 0 0 0 ',
      height: '250px',
      marginTop: '50px',
      backgroundColor: 'var(--mid)',
      border:'none'
    },
  
    image: {
      position:'static !important',
      minWidth: '200px',
      minHeight: '200px',
      marginTop: '-3rem',
      marginLeft: '2rem',
      border: '2px solid var(--mid)'
      
    },

  
    
  })

  const UserHeader = () => {

    const classes = useStyles() 
      return(
      <>
    
         <Stack>
            <Stack  className={classes.main}>
              <Typography variant='h2'> <CameraAltRoundedIcon style={{ color: 'var(--base)', fontSize: '8rem', display: 'flex', marginLeft: 'auto', marginTop:'8rem' }}/></Typography>
            </Stack>          
          </Stack>
          <Stack direction={{ xs: 'column', sm:'column', md:'row', lg:'row'  }}>
              <Avatar className={classes.image} alt='Dummy-image' src='/'  />
            <Stack direction='column' style={{ padding: '2rem' }}>
              <Typography variant='h5' style={{ fontSize: '1rem'}} >Profile</Typography>
              <Typed strings={['Update your photo ','and personal details']} typeSpeed={40} backSpeed={30} loop />
            </Stack> 
              <Button variant='contained' style={{ marginLeft:'auto', marginTop:'2rem' }}> Edit </Button> 
          </Stack>



      </>
      )
  }

  export default UserHeader