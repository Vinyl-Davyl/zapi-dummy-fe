import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, ListItem, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { CheckCircleOutline } from '@mui/icons-material'
import { Icon } from '@iconify/react'

import { InputField } from '../components'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    '@media screen and (max-width: 800px)': {
      flexDirection: 'column-reverse'
    }
  },
  section: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    padding: '0 0.5rem',
  },
  section_two: {
    width: '100%',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--base)',
    color: 'var(--white)',
    padding: '0 1rem',
    '@media screen and (max-width: 800px)': {
      height: '50vh',
    }
  },
  form: {
    width: '90%',
    display: 'grid',
    placeItems: 'center',
    gap: '2rem',
    marginTop: '3rem',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    },
    '@media screen and (min-width: 1270px)': {
      width: '60%'
    }
  }
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
      <section className={classes.section}>
        <Typography variant='h4' my={2}>Login</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <InputField fullWidth type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@example.com' />
          <InputField fullWidth type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' />
          <Typography variant='body2' color='textSecondary' my={2}>
            <Link to='/forgot-password'>
              Forgot password?
            </Link>
          </Typography>
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </form>
        <Typography variant='h6' my={2}>
          Don't have an account?
          <Link to='/signup'> Sign up</Link>
        </Typography>
        <Divider variant='middle' />
        <Stack direction='column' width='50%' mt={5}>
          <Typography variant='h5'>Or sign in with</Typography>
          <Button variant='text'>
            Google <Icon icon='akar-icons:google-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
          </Button>
          <Button variant='text'>
            Github <Icon icon='akar-icons:github-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
          </Button>
        </Stack>
      </section>
      <section className={classes.section_two}>
        <Typography variant='h4' my={2}>
          Thousands of APIs are available to connect to.
        </Typography>
        <Stack direction='column' width='70%' mt={5}>
          <ListItem>
            <CheckCircleOutline />
            <Typography variant='body1' mx={2}>
              Discover APIs
            </Typography>
          </ListItem>
          <ListItem>
            <CheckCircleOutline />
            <Typography variant='body1' mx={2}>
              Build your own APIs
            </Typography>
          </ListItem>
          <ListItem>
            <CheckCircleOutline />
            <Typography variant='body1' mx={2}>
              Integrate with other APIs
            </Typography>
          </ListItem>
          <ListItem>
            <CheckCircleOutline />
            <Typography variant='body1' mx={2}>
              Manage your APIs from one place
            </Typography>
          </ListItem>
        </Stack>
      </section>
    </main>
  )
}

export default LoginPage