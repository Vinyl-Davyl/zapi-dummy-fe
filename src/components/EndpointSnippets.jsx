import React, { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { TabPanel } from './index'

const useStyles = makeStyles({
  snippet: {
    width: '100%',
    padding: '0.5rem',
    overflowY: 'scroll',
  }
})

const EndpointSnippets = () => {
  const [tab, setTab] = useState(0)
  const classes = useStyles()

  return (
    <Stack direction='column'>
      <Stack width='100%' height='72px' px={1} py={2} style={{ background: 'var(--grey)'}}>
        <Tabs value={tab} onChange={(e, newValue)=>setTab(newValue)}>
          <Tab label='Snippets' />
          <Tab label='Response' />
          <Tab label='Result' />
        </Tabs>
      </Stack>
      <Stack>
        <TabPanel value={tab} index={0} className={classes.snippet}>Code Snippets</TabPanel>
        <TabPanel value={tab} index={1} className={classes.snippet}>Example Response</TabPanel>
        <TabPanel value={tab} index={2} className={classes.snippet}>Result</TabPanel>
      </Stack>
    </Stack>
  )
}

export default EndpointSnippets