import React, { useState } from 'react'
import { Stack, Typography, Tabs, Tab, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {TabPanel} from '../components'
import { UserHeader, UserTextbox } from '../components'



const array = ['Weather API', 'Entertainmet API', 'Transport API', 'Finance API', 'Food API', 'Other API']
const arrayApis = array.length

const useStyles = makeStyles({
 

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
      border:'1px solid var(--base) ',
      borderBottom:'none'
    }
  },


  
})

const UserProfile = () => {

  const classes = useStyles()
  const [tab, setTab] = useState(0)

  return (
    <>
      <main >
        <Stack direction='column' >
          <UserHeader />
          <Stack>
            <Stack direction='row' spacing={20} style={{alignItems: 'center', marginTop:'2rem'}}>
              <Typography variant='h5' style={{ fontSize: '1rem'}}>Full Name</Typography>
              <Typography variant='h6' style={{ fontSize: '1rem'}}> Dummy Name</Typography>
            </Stack>
            <Stack direction='row' spacing={20} style={{alignItems: 'center', marginTop:'2rem'}}>
              <Typography variant='h5' style={{ fontSize: '1rem'}}>Username</Typography>
              <Typography variant='h6' style={{ fontSize: '1rem'}}> Dummy Name</Typography>
            </Stack>
            <Stack direction='row' spacing={20} style={{alignItems: 'center', marginTop:'2rem'}}>
              <Typography variant='h5' style={{ fontSize: '1rem'}}>Email</Typography>
              <Typography variant='h6' style={{ fontSize: '1rem'}}> Dummyemail@example.com</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Tabs  className={classes.mainTab} value={tab} onChange={(e, newValue)=>setTab(newValue)}>
              <Tab  className={classes.tabs} label= {`Published APIs (${arrayApis})`}/>
              <Tab className={classes.tabs} label='APIs Following(0)'/>
              <Tab className={classes.tabs} label='Followed By(0)' />
              <Tab className={classes.tabs} label='Following(0)'/>
            </Tabs>
            <Stack className={classes.tabpanel}>
              <TabPanel value={tab} index={0}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                { array ? array.map((item, index) => (
                  <Grid xs={2} sm={4} md={4} style={{ padding:'2rem'}} key={index}>
                    <UserTextbox name={item} />
                  </Grid>
                )) : <h2 >No Published APIs</h2>}
                
               </Grid> 
              </TabPanel>
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