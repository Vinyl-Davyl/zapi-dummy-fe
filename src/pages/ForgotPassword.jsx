import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { InputField } from '../components'

const useStyles = makeStyles({
  form: {
    width: '50%',
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

const ForgotPassword = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email)
    setEmail('')
  }

  return (
  <Stack direction='column' height='60vh' alignItems='center' justifyContent='center' textAlign='center' py={1} px={2}>
    <Typography variant='h5' gutterBottom>
      Forgot your password?
    </Typography>
    <Typography variant='body1'>
      No need to worry, we'll send you an email with instructions to reset.
    </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputField fullWidth type='text' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' placeholder='Enter your email' />
      <Button type='submit' variant='contained'>
        reset password
      </Button>
    </form>
    <Typography variant='body1' mt={6}>
      <Link to='/login'>
        &larr; Back to log in.
      </Link>
    </Typography>
  </Stack>
  )
}

export default ForgotPassword