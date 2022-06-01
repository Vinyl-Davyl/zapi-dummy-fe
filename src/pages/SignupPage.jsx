import React, { useState } from 'react'
import { Button, Stack, Typography, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'
import { Alert } from '@mui/material'

import { InputField } from '../components'
import { Link } from 'react-router-dom'

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

const SignupPage = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password.length > 6) {
            setError(null)
        } else {
            return setError('Password must be more than 6 characters')   
        }

        setFullname('')
        setEmail('')
        setPassword('')
    }

    return (
        <main className={classes.main}>

            <Typography variant='h4' my={2}>Sign Up</Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
                <InputField
                    fullWidth
                    type='text'
                    required
                    label='Full Name'
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder='Enter your Name'
                />
                <InputField
                    fullWidth
                    type='email'
                    required
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='johndoe@example.com'
                />
                <InputField
                    fullWidth
                    type='password'
                    required
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password must be more than six characters'
                />
                {error && <Alert severity="error">{error}</Alert>}
               <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    size='large'
                    style={{ marginLeft: '0.9rem' }}
                >
                    Sign Up
                </Button>
            </form>

            <Typography variant='body1' mt={3}>Already on Z-API? <Link to='/login'>Login</Link></Typography>

            <Typography variant='h5' mt={3}>Or sign in with:</Typography>
            <Stack direction='row' mt={3}  divider={<Divider orientation="vertical" flexItem />} spacing={3}>
                <Button variant='text'>
                    Google <Icon icon='akar-icons:google-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                </Button>
                <Button variant='text'>
                    Github <Icon icon='akar-icons:github-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                </Button>
                <Button variant='text'>
                    Facebook <Icon icon='akar-icons:facebook-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                </Button>
            </Stack>

        </main>
    )
}

export default SignupPage