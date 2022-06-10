import React from 'react'
import { Toolbar } from '@mui/material'

import { makeStyles } from '@mui/styles'



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
        justifyContent: 'center',
        margin: '0.5rem 0',
        backgroundColor: 'var(--white)'
    },
    img: {
        '@media screen and (max-width: 800px)': {
            width: '15%'
        }
    }
})

const NavbarAuth = () => {
    const classes = useStyles()
  return (
    <nav className={classes.nav}>
        <Toolbar className={classes.toolbar}>
            <img className={classes.img} src="./LOGO.svg" alt="zapi" width='5%' />
        </Toolbar>
    </nav>
  )
}

export default NavbarAuth