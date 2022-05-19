import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton, Toolbar } from '@mui/material'
import { AccountCircleOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import InputField from './InputField'
import Modal from './Modal'
import { logout } from '../redux/features/user/userSlice'
import { openModal, closeModal } from '../redux/features/modal/modalSlice'

const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: '2px solid var(--mid)',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'var(--white)',
    },
    toolbar: {
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0.5rem 0',    
    }
})

const Navbar = ({ query, setQuery }) => {
    const classes = useStyles()
    const navigate = useNavigate()
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
            <Link to='/' style={{ width: '7%' }}>
                <img src='/LOGO.svg' alt='zapi' width='50px' />
           </Link>

           <InputField type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' onFocus={() => navigate('/search')} />

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