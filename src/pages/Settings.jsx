import React, { useState } from 'react'
import { Box, Divider, List, ListItem, Pagination, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { TabPanel } from '../components'

const times = ['2022-06-01, 07:45', '2022-06-01, 15:00', '2022-06-01, 04;25' ,'2022-06-01, 21:45', '2022-06-01, 21:45']

const useStyles = makeStyles({
    page: {
        width: '35%',
        height: '381px',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '0px',
        margin: '0px',
    },
    list_items: {
        margin: '0.5rem 0'
    },
    map: {
        width: '45%',
        height: '250px',
        background: 'var(--light)',
        border: '1px solid var(--primary)',
        margin: '0.5rem 0'
    }
})

const Settings = () => {
    const classes = useStyles()
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    }

  return (
    <Stack direction='column' width='100%'>
        <Typography variant='h4' color='textInfo' mb={4}>
            Settings
        </Typography>
        <Typography variant='h5' color='textPrimary' gutterBottom>
            Login History
        </Typography>
        <Typography variant='caption' mb={1}>
            Time
        </Typography>
        <Stack direction='row'width='100%' >
            <TabPanel className={classes.page} value={page} index={1}>
                <List >
                    <Divider orientation='horizontal' />
                    {times.map(time => (
                        <div key={time}>
                            <ListItem className={classes.list_items} key={time}>{time}</ListItem>
                            <Divider orientation='horizontal' />
                        </div>
                    ))}
                </List>
           </TabPanel>
           <TabPanel className={classes.page} value={page} index={2} children='Nothing to see here' />
           <Box className={classes.map}>
               {/* Map */}
           </Box>
        </Stack>
        {/* This portion might log some errors to the console, it is nothing to worry about as long as the controls work. */}
        <Pagination count={2} shape='rounded' size='samall' onChange={handleChange}/>
    </Stack>
  )
}

export default Settings