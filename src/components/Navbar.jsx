import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Badge, Button, Grid, IconButton, Stack, Toolbar } from '@mui/material'
import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import { Modal, Search, UserMenu } from './index'
import { logout, signup, login } from '../redux/features/user/userSlice'
import { closeModal } from '../redux/features/modal/modalSlice'
import { openSearchModal, closeSearchModal } from '../redux/features/search/searchSlice'


const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: '2px solid var(--mid)',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'var(--white)',
        zIndex: 3
    },
    toolbar: {
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
    }
})

const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { isLoggedIn } = useSelector(store => store.user)
    const { isOpen } = useSelector(store => store.modal)
    const { isSearchModalOpen } = useSelector(store => store.search)

    const [toggle, setToggle] = useState(true)


    const toggleSearch = () => {
        if (isSearchModalOpen) {
            dispatch(closeSearchModal())
        } else {
            dispatch(openSearchModal())
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            {/* modal for logout confirmatio */}
            {isOpen && <Modal message='Are you sure you want to log out?' confirm={() => {
                dispatch(logout())
                dispatch(closeModal())
            }} />}
            {/* search modal */}
            {isSearchModalOpen && <Search closeModal={() => dispatch(closeSearchModal())} />}
            {isLoggedIn && (<nav className={classes.nav}>
                <Toolbar className={classes.toolbar}>
                    <Link to='/' style={{ width: '7%' }}>
                        <img src='/LOGO.svg' alt='zapi' width='50px' />
                    </Link>

                    <Stack direction='row' spacing={2} alignItems='center'>
                        <IconButton onClick={toggleSearch}>
                            <SearchOutlined />
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={1} color='primary'>
                                <NotificationsOutlined />
                            </Badge>
                        </IconButton>
                        <UserMenu />
                    </Stack>
                </Toolbar>
            </nav>)}

            {!isLoggedIn &&
                (<nav>
                    <AppBar>
                        <Toolbar className={classes.toolbar}>
                            <Link to='/' style={{ width: '7%' }}>
                                <img src='/LOGO.svg' alt='zapi' width='50px' />
                            </Link>

                            <Grid container justifyContent='end' spacing={3}>
                                {toggle ? <Grid item>
                                    <Link to='/login'>
                                        <Button name="login" onClick={handleToggle} variant='contained'>
                                            Login
                                        </Button>
                                    </Link>
                                </Grid> :
                                    <Grid item>
                                        <Link to='/signup'>
                                            <Button name="signup" onClick={handleToggle} variant='outlined'>Sign Up</Button>
                                        </Link>
                                    </Grid>}
                            </Grid>

                        </Toolbar>
                    </AppBar>
                </nav>
                )}
        </>
    )
}

export default Navbar