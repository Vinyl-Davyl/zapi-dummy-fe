import React, { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'

import { TabPanel } from './index'

const EndpointSnippets = () => {
  const [tab, setTab] = useState(0)

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
        <TabPanel value={tab} index={0}>Code Snippets</TabPanel>
        <TabPanel value={tab} index={1}>Example Response</TabPanel>
        <TabPanel value={tab} index={2}>Result</TabPanel>
      </Stack>
    </Stack>
  )
}

export default EndpointSnippets