import React, { useEffect, useState } from 'react'
import { Button, Typography, Grid, Alert, Stack, ListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { CheckCircleOutline } from '@mui/icons-material'
import { Icon } from '@iconify/react'
import { signup } from '../redux/features/user/userSlice'
import { Link } from 'react-router-dom'
// import ReCAPTCHA from "react-google-recaptcha";

import { InputField } from '../components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavbarAuth } from '../components'

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '@media screen and (min-width: 1200px)': {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    section: {
        paddingTop: '6rem',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        '@media screen and (min-width: 1200px)': {
            flex: '2',
            alignItems: 'center',
            paddingTop: '1rem',
        }
    },
    form: {
        display: 'grid',
        gap: '2rem',
        marginTop: '3rem',
        '@media screen and (min-width: 1200px)': {
            width: '60%',
        }
    },
    div: {
        width: '100vw',
        background: 'var(--base)',
        color: 'white',
        marginTop: '3rem',
        '@media screen and (min-width: 1200px)': {
            flex: '2',
            width: '60%'
        }
    },
    section_two: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: '100vh',
    }

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

    const handleOnChange = (e) => {
        console.log(e)
    }

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
            <NavbarAuth />
            <section className={classes.section}>
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

                    {/* This is for testing purpose, will need to create an account and get a site key if need to implement
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleOnChange}
                    /> */}
                    <Button
                        disabled={!fullname || !email || !password ? true : false}
                        fullWidth
                        type='submit'
                        variant='contained'
                        size='large'
                    >
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

                <Typography>Do you have an account? <Link to='/login'>Login</Link> </Typography>
            </section>

            <div className={classes.div}>
                <section className={classes.section_two}>
                    <Stack direction='column' width='70%' mt={5}>
                        <Typography variant='h4' fontWeight='bold' my={3}>
                            Find and Connect to Thousands of APIs
                        </Typography>
                        <ListItem>
                            <CheckCircleOutline />
                            <Typography variant='body1' mx={2}>
                                Discover APIs
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <CheckCircleOutline />
                            <Typography variant='body1' mx={2}>
                                Test from your browser
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <CheckCircleOutline />
                            <Typography variant='body1' mx={2}>
                                Connect using code snippets
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <CheckCircleOutline />
                            <Typography variant='body1' mx={2}>
                                Manage APIs from one dashboard
                            </Typography>
                        </ListItem>
                    </Stack>

                </section>
            </div>
        </main>
    )
}

export default SignupPage