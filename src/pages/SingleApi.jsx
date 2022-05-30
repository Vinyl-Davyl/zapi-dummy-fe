import React, {useState} from 'react'
import { Tab, Tabs, Stack, Typography } from '@mui/material'

import logo from '../assets/LOGO (3).png'
import {TabPanel, ApiMetrics, ApiDetails} from '../components'

const SingleApi = () => {
  const [tab, setTab]= useState(0);
  return (
    <Stack direction='column'>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg:'row'}} my={2} spacing={2} justifyContent='space-between' alignItems='center' >
        <ApiDetails image={logo} name='Weather API' pricing='FREEMUIM' isVerified={false} author='zummit' lastUpdated='2days' category='Weather' featured='Popular APIs' />
        <ApiMetrics popularity={9.9} latency={86} level={100}/>
      </Stack>
      <Tabs value={tab} onChange={(e, newValue)=>setTab(newValue)}>
        <Tab label='Endpoints'/>
        <Tab label='About'/>
        <Tab label='Tutorials' />
        <Tab label='Discussions'/>
        <Tab label='Pricing'/>
      </Tabs>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} marginTop={2} spacing={2} alignItems='center'>
        <Typography variant='h5'>Weather Map Api Documentation</Typography>
      </Stack>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} spacing={2} my={1}alignItems='center'>
          <Typography variant='subtitle1'>Get weather and weather forecasts for multiple cities.</Typography>
      </Stack>
      <TabPanel value={tab} index={0}>Endpoints</TabPanel>
      <TabPanel value={tab} index={1}>About</TabPanel>
      <TabPanel value={tab} index={2}>Tutorial</TabPanel>
      <TabPanel value={tab} index={3}>Discussions</TabPanel>
      <TabPanel value={tab} index={4}>Pricing</TabPanel>
    </Stack>
  )
}

export default SingleApi