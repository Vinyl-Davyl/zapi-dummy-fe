import React, { useState } from 'react'
import { Avatar, Stack, Typography, Button, Tabs, Tab } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import {TabPanel} from '../components'


const useStyles = makeStyles({
  main: {
    borderRadius: '90px 0 0 0 ',
    height: '250px',
    marginTop: '50px',
    backgroundColor: 'var(--mid)',
    border:'none'
  },

  image: {
    minWidth: '200px',
    minHeight: '200px',
    marginTop: '-3rem',
    marginLeft: '2rem',
    color: 'var(--mid)'
    
  },

  mainTab:{
    marginTop:'7rem',
    justifyContent:'center',
    borderBottom: '2px solid var(--base)'
  },
  tabpanel:{
    textAlign:'center',
    marginTop:'5rem'
  },
  tabs:{
    
    '&:hover':{
      border:'1px solid var(--base) '
    }
  }
  
})

const UserProfile = () => {

  const classes = useStyles()
  const [tab, setTab] = useState(0)

  return (
    <>
      <main >
        <Stack direction='column' >
          <Stack>
            <Stack  className={classes.main}>
              <Typography variant='h2'> <CameraAltRoundedIcon style={{ color: 'var(--base)', fontSize: '8rem', display: 'flex', marginLeft: 'auto', marginTop:'8rem' }}/></Typography>
            </Stack>          
          </Stack>
          <Stack direction={{ xs: 'column', sm:'column', md:'row', lg:'row'  }}>
              <Avatar className={classes.image} src='' alt={'dummy-image'}/>
            <Stack direction='column' style={{ padding: '2rem' }}>
              <Typography variant='h4' >Profile</Typography>
              <Typography variant='h6' >Update your photo and personal details </Typography>
            </Stack> 
              <Button variant='contained' style={{ marginLeft:'auto', marginTop:'2rem' }}> Edit </Button> 
          </Stack>
          <Stack>
            <Stack direction='row' spacing={20} style={{alignItems: 'center', marginTop:'2rem'}}>
              <Typography variant='h4'>Full Name</Typography>
              <Typography variant='h6'> Dummy Name</Typography>
            </Stack>
            <Stack direction='row' spacing={20} style={{alignItems: 'center', marginTop:'2rem'}}>
              <Typography variant='h4'>Username</Typography>
              <Typography variant='h6'> Dummy Name</Typography>
            </Stack>
          </Stack>
          <Stack  >
            <Tabs className={classes.mainTab} value={tab} onChange={(e, newValue)=>setTab(newValue)}>
              <Tab  className={classes.tabs} label='Published APIs(0)'/>
              <Tab className={classes.tabs} label='APIs Following(0)'/>
              <Tab className={classes.tabs} label='Followed By(0)' />
              <Tab className={classes.tabs} label='Following(0)'/>
            </Tabs>
            <Stack className={classes.tabpanel}>
              <TabPanel value={tab} index={0}>No Published APIs</TabPanel>
              <TabPanel value={tab} index={1}>Not APIs Following</TabPanel>
              <TabPanel value={tab} index={2}>Not Followed Yet</TabPanel>
              <TabPanel value={tab} index={3}>Not Following Yet</TabPanel>
            </Stack>
          </Stack>
        </Stack>   
      </main>
    </>
  )
}

export default UserProfile