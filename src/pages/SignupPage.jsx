import React, { useState } from 'react'
import { Button, Stack, Typography, Divider } from '@mui/material'
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

const SignupPage = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userName.length === 0) {
            setError('Please input a valid username')
        } else {
            setError(null)
        }

        if (password.length === 0) {
            setError('Please input a valid password')
        } else {
            setError(null)
        }

        setUserName('')
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
                    label='username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Enter your Username'
                />
                <InputField
                    fullWidth
                    type='email'
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='johndoe@example.com'
                />
                <InputField
                    fullWidth
                    type='password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='*******'
                />
               <Button
                    fullWidth
                    type='submit'
                    variant='contained'
                    size='large'
                    style={{ marginLeft: '0.9rem' }}
                >
                    Sign Up
                </Button>
                {error && <Typography>{error}</Typography>}
            </form>

            <Typography variant='h5' mt={5}>Or sign in with:</Typography>
            <Stack direction='row' mt={5}  divider={<Divider orientation="vertical" flexItem />} spacing={3}>
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