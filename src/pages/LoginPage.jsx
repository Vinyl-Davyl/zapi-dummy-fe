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
    gap: '2rem',
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password) return alert('Please fill all fields!')

    console.log({ email, password})
    setEmail(''); setPassword('');
  }

  return (
    <main className={classes.main}>
      
      
      <Typography variant='h4' my={2}>Login</Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <InputField fullWidth type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@example.com' />
        <InputField fullWidth type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' />
        <Button type='submit' variant='contained'>
          Login
        </Button>
      </form>

      <Stack direction='column' mt={5}>
        <Typography variant='h5'>Or sign in with</Typography>
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