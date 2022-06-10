import React, {useState} from 'react'
import { Tab, Tabs, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import logo from '../assets/LOGO (3).png'
import { ApiMetrics, ApiDetails, Endpoints, EndpointSnippets, EndpointsParams, ResizeableDiv,TabPanel } from '../components'

const useStyles = makeStyles({
  div:{
    width: '300px',
    minWidth: '50px',
    flexGrow: 1,
    background: 'transparent',
  },
  tabs_container:{
    width: '100%',
    height: '100%',
  }
})

const SingleApi = () => {
  const [tab, setTab]= useState(0);
  const classes = useStyles()

  return (
    <Stack direction='column'>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg:'row'}} my={2} spacing={2} justifyContent='space-between' alignItems='center' >
        <ApiDetails image={logo} name='Weather API' pricing='FREEMUIM' isVerified={false} author='zummit' lastUpdated='2days' category='Weather' featured='Popular APIs' />
        <ApiMetrics popularity={9.9} latency={86} level={100}/>
      </Stack>
      <Tabs value={tab} onChange={(e, newValue)=>setTab(newValue)}>
        <Tab label='Endpoints'/>
        <Tab label='Tutorials' />
        <Tab label='Pricing'/>
      </Tabs>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} marginTop={2} spacing={2} alignItems='center'>
        <Typography variant='h5'>Weather Map Api Documentation</Typography>
      </Stack>
      <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} spacing={2} my={1}alignItems='center'>
        <Typography variant='subtitle1'>Get weather and weather forecasts for multiple cities.</Typography>
      </Stack>
      <Stack className={classes.tabs_container}>
        <TabPanel value={tab} index={0}>
          <Stack direction='row'>
            <ResizeableDiv>
              <Endpoints />
            </ResizeableDiv>
            <ResizeableDiv>
              <EndpointsParams />
            </ResizeableDiv>
            <Stack direction='column' className={classes.div}>
              <EndpointSnippets />
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel value={tab} index={1}>Tutorial</TabPanel>
        <TabPanel value={tab} index={2}>Pricing</TabPanel>
      </Stack>
    </Stack>
  )
}

export default SingleApi