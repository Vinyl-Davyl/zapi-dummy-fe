import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { AccountCircleOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import InputField from './InputField'
import Modal from './Modal'
import { logout } from '../redux/features/user/userSlice'
import { openModal, closeModal } from '../redux/features/modal/modalSlice'

const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: '2px solid var(--mid)'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1rem 0'
    }
})

const Navbar = () => {
    const classes = useStyles()
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(store => store.user)
    const { isOpen } = useSelector(store => store.modal)

  return (
    <>
    {isOpen && <Modal message='Are you sure you want to log out?' confirm={() => {
        dispatch(logout())
        dispatch(closeModal())
        }}/>}
    <nav className={classes.nav}>
       <Toolbar className={classes.toolbar}>
            <Stack component={Link} to='/' direction='row' alignItems='center' width='30%'>
                <img src='/LOGO.svg' alt='zapi' width='20%' />
                <Typography variant='h5' marginLeft={2}>
               Z-API
                </Typography>
            </Stack>

           <InputField type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search...' />

           {isLoggedIn ? 
           <Button variant='contained' onClick={() => dispatch(openModal())}>
               Logout
            </Button> : 
           <Link to='/login'>
               <Button variant='contained'>
                   Login
                </Button>
            </Link>}
           
           {isLoggedIn && 
           (<IconButton>
               <Link to={`/user`}>
                    <AccountCircleOutlined style={{ color: 'var(--mid)', fontSize: '2rem'}} />
               </Link>
           </IconButton>)}
       </Toolbar>
    </nav>
    </>
  )
}

export default Navbar