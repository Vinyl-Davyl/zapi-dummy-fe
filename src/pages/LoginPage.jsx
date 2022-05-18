import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'

import { InputField } from '../components'

const useStyles = makeStyles({
  main: {
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  },
  header: {
    color: 'var(--mid)',
    '& span': {
      color: 'var(--base)',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  form: {
    width: '60%',
    display: 'grid',
    placeItems: 'center',
    gap: '1rem',
    marginTop: '3rem',
    '@media screen and (max-width: 800px)': {
      width: '100%'
    },
    '@media screen and (min-width: 1270px)': {
      width: '40%'
    }
  },
})

const LoginPage = () => {
  const [isLogInMode, setIsLogInMode] = useState(false)
  const classes = useStyles()

  const toggleMode = () => setIsLogInMode(!isLogInMode)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isLogInMode) {
      console.log('login mode!')
    } else {
      console.log('sign up mode!')
    }
  }

  return (
    <main className={classes.main}>
      {isLogInMode ?
      <Typography variant='h5' gutterBottom className={classes.header}>Not signed up yet? <span onClick={toggleMode}>Signup.</span></Typography> :
      <Typography variant='h5' gutterBottom className={classes.header}>Already signed up? <span onClick={toggleMode}>Login.</span></Typography> }
      
      <Typography variant='h4' my={2}>
        {isLogInMode ? 'Login' : 'Signup'}
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        {!isLogInMode && <InputField fullWidth type='text' label='Username' placeholder='Username' />}
        <InputField fullWidth type='email' label='Email' placeholder='johndoe@example.com' />
        <InputField fullWidth type='password' label='Password' placeholder='*******' />
        {!isLogInMode && <InputField fullWidth type='password' label='Re-Type Password' placeholder='*******' />}
        <Button type='submit' variant='contained'>
          {isLogInMode ? 'Log in' : 'Sign up'}
        </Button>
      </form>

      <Stack direction='column' mt={5}>
        <Typography variant='h5'>Or sign up with</Typography>
        <Button variant='text'>
          Google <Icon icon='akar-icons:google-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
        </Button>
        <Button variant='text'>
          Github <Icon icon='akar-icons:github-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
        </Button>
      </Stack>
    </main>
  )
}

export default LoginPage