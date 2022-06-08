import React, { useEffect, useState } from 'react'
import { Button, Typography, Grid, Alert } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'
import { signup } from '../redux/features/user/userSlice'

import { InputField } from '../components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const PASSWORD_REGEX = /^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!PASSWORD_REGEX.test(password)) {
            setError('Password must between 8 - 20 characters and must include a capital letter, a small letter, a number and a special characters')
            return
        } else {
            setError(null)
        }

        try {
            dispatch(signup({ fullname, email, password }))
            navigate('/login')
        }
        catch (err) {
            setError(err.message)
        }


        setFullname('')
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        setError(null)
    }, [fullname, email, password])

    return (
        <main className={classes.main}>

            <Typography variant='h4' my={2}>Sign Up</Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
                <InputField
                    required
                    fullWidth
                    type='text'
                    label='Full Name'
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder='Enter your Full Name Here'
                />
                <InputField

                    required
                    fullWidth
                    type='email'
                    label='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='johndoe@example.com'
                />
                <InputField
                    required
                    fullWidth
                    type='password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password must be more than 6 characters'
                />
                    <Button
                        disabled={!fullname || !email || !password ? true : false}
                        fullWidth
                        type='submit'
                        variant='contained'
                        size='large'
                        style={{ marginLeft: '0.9rem' }}>
                        Sign Up
                    </Button>
               
                {error && <Alert severity='error'>{error}</Alert>}
            </form>

            <Typography variant='h5' mt={5}>Or sign in with:</Typography>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item>
                    <Button variant='text'>
                        Google <Icon icon='akar-icons:google-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='text'>
                        Github <Icon icon='akar-icons:github-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='text'>
                        Facebook <Icon icon='akar-icons:facebook-fill' style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }} />
                    </Button>
                </Grid>
            </Grid>

            {/* <Typography>Do you have an account? <Link to='/login'>Login</Link> </Typography> */}

        </main>
    )
}

export default SignupPage