import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deviceDetect } from 'react-device-detect'
import { Alert, Button, Checkbox, Divider, FormControlLabel, ListItem, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { CheckCircleOutline } from '@mui/icons-material'
import { Icon } from '@iconify/react'

import { InputField, LoadingSpinner, NavbarAuth } from '../components'
import { login } from '../redux/features/user/userSlice'
import { useLoginService, setWithExpiry } from '../services/loginService'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 1rem',
    '@media screen and (max-width: 800px)': {
      flexDirection: 'column-reverse'
    }
  },
  section: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    padding: '0 0.5rem',
    marginTop: '6rem',
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
  const [location, setLocation] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { clearError, error, loading, loginUser } = useLoginService()

  const getLocation = async() => {
    const res = await fetch('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
    const data = await res.json()
    setLocation(data)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const device = deviceDetect()
    const time = new Date().toISOString()

    const payload = {email, password, location, time , device}

    try {
      const data = await loginUser(payload)
      dispatch(login(data[0]))

      if(rememberMe){
        setWithExpiry('user', data[0], 3600000)
      }

      if(!data || data === undefined) return

      navigate(`/user/${data[0].id}`)
    } catch (error) {
      console.log(error)
    }

    setEmail(''); setPassword('');
  }

  useEffect(async() => {
    getLocation()
  },[])

  return (
    <>
    {error && (
      <Alert style={{ position: 'absolute', top: '10%', zIndex:3 }} severity='error' onClose={clearError}>
        {error}
      </Alert>)}
    {loading && <LoadingSpinner />}
    <main className={classes.main}>
      <NavbarAuth />
      <section className={classes.section}>
        <Typography variant='h4' my={2}>Welcome back</Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <InputField fullWidth type='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johndoe@example.com' />
          <InputField fullWidth type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' />
          <FormControlLabel control={<Checkbox size='small' value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} label='Keep me logged in' />
          <Button type='submit' variant='contained' disabled={!email || !password}>
            Login
          </Button>
        </form>
        <Typography variant='body2' color='textSecondary' my={2}>
          <Link to='/forgot-password'>
            Forgot password?
          </Link>
        </Typography>
        <Typography variant='h6' my={2}>
          Don't have an account?
          <Link to='/signup'> Sign up</Link>
        </Typography>
        <Stack direction='column' width='50%' mt={5}>
          <Divider variant='middle'>
            <Typography variant='body1'>or continue with</Typography>
          </Divider>
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
    </>
  )
}

export default LoginPage