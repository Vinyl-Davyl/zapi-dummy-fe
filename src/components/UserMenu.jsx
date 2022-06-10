import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, Divider, IconButton, Menu, MenuItem, ListItemText, Paper, Typography } from '@mui/material'

import { openModal } from '../redux/features/modal/modalSlice'

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const dispatch = useDispatch()

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        dispatch(openModal())
        handleClose()
    }

  return (
    <>
    <IconButton onClick={handleMenu}>
                    <Avatar />
    </IconButton>
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Paper sx={{ width: 320 }}>
            <MenuItem onClick={handleClose}>
                <ListItemText>
                    <Typography variant='h6'>
                        Dummy User
                    </Typography>
                    <Typography variant='subtitlte2' color='textSecondary'>
                        dummyemail@example.com
                    </Typography>
                </ListItemText>
            </MenuItem>
            <Divider orientation='horizontal' />
            <Link to='/user/:id'>
            <MenuItem onClick={handleClose}>
                Profile
            </MenuItem>
            </Link>
            <Link to='/user/settings'>
            <MenuItem onClick={handleClose}>
                Settings
            </MenuItem>
            </Link>
            <Link to='/'>
            <MenuItem onClick={handleClose}>
                My APIs
            </MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>
                Logout
            </MenuItem>
        </Paper>
    </Menu>
    </>
  )
}

export default UserMenu