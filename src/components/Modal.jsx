import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { closeModal } from '../redux/features/modal/modalSlice'

const useStyles = makeStyles({
    modal: {
        width: '60%',
        height: '60%',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '5px',
        borderBottom: '3px solid var(--error)',
        padding: '0 1rem',
        textAlign: 'center',
        '@media screen and (max-width: 800px)': {
            width: '90%',
        }
    },
    overlay: {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(111, 126, 140, 0.2)',
        backdropFilter: 'blur(2px)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1
    }
})

const Modal = ({ message, confirm }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

  return (
    <div className={classes.overlay} onClick={() => dispatch(closeModal())}>
        <Card className={classes.modal}>
            <Typography variant='h6' color='error' marginTop={5}>
                {message}
            </Typography>

            <Stack direction='row' alignItems='center' spacing={2}>
                <Button variant='contained' onClick={confirm}>
                    Confirm
                </Button>
                <Button variant='outlined' onClick={() => dispatch(closeModal())}>
                    Close
                </Button>
            </Stack>
        </Card>
    </div>
  )
}

export default Modal