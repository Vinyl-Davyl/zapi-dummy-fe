import React, { useState } from 'react'
import { Avatar, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { AddCircleOutline, KeyboardArrowDown } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import { Accordion } from './index'

const useStyles = makeStyles({
    user: {
        width: '90%',
        border: '1px solid var(--mid)',
        borderRadius: '5px',
        padding: '0.5rem',
        margin: '1rem 0 2rem',
    },
    snippet: {
        width: '100%',
        overflowY: 'scroll',
    }
})

const EndpointsParams = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

  return (
    <Stack direction='column' width='100%' alignItems='center' justifyContent='center'>
        <Stack direction='row' width='100%' height='72px' alignItems='center' justifyContent='space-between' px={1} py={2} style={{ background: 'var(--grey)'}}>
            <Typography variant='body1'>
                Current Weather Data
            </Typography>
            <Button type='button' variant='contained'>
            Test Endpoint
            </Button>
        </Stack>
        <Stack direction='column' alignItems='center' className={classes.snippet}>
            <Typography variant='subtitle1'>
                Instructions
            </Typography>
            <Stack direction='row' alignItems='center' justifyContent='space-between' className={classes.user}>
            <Stack direction='row' alignItems='center'>
                <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }}/>
                <Stack direction='column'>
                    <Typography variant='body1'>Personal Account</Typography>
                    <Typography variant='caption'>Dummy Name</Typography>
                </Stack>
            </Stack>
            <IconButton onClick={handleMenu}>
                <KeyboardArrowDown />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                        <Stack direction='row' alignItems='center'>
                            <Avatar sx={{ width: 35, height: 35, objectFit: 'contain' }}/>
                            <Stack direction='column'>
                                <Typography variant='body1'>Personal Account</Typography>
                                <Typography variant='caption'>Dummy Name</Typography>
                            </Stack>
                        </Stack>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Stack direction='row' alignItems='center' justifyContent='center'>
                        <AddCircleOutline />
                        <Typography variant='body1'>
                            Create New Organization
                        </Typography>
                    </Stack>
                </MenuItem>
            </Menu>
            </Stack>
            <Accordion title='Header Parameters'>
                Hello World
            </Accordion>
            <Accordion title='Required Parameters'>
                Hello World
            </Accordion>
        </Stack>
    </Stack>
  )
}

export default EndpointsParams