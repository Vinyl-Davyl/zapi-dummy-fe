import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { closeModal } from '../redux/features/modal/modalSlice'

const useStyles = makeStyles({
    modal: {
        width: '35vw',
        height: '25vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--light)',
        borderRadius: '5px',
        borderBottom: '3px solid var(--error)',
        padding: '0 1rem',
        textAlign: 'center'
    },
    backdrop: {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    }
})

const Modal = ({ message, confirm }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
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
        </div>
    </div>
  )
}

export default Modal