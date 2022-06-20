import React from 'react'
import { TextField, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(theme =>createStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'var(--base)'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        height: '50px',
        color: 'var(--base)',
        borderColor: 'var(--base)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--mid)',
      }
    },
    '& .MuiFormLabel-root': {
      color: 'var(--base)',
      fontWeight: 400,
      '&.MuiFormLabel-root.Mui-focused': {
        color: 'var(--base)'
      }
    }
  },
  formControl: {
    width: '100%',
  }
}))

const InputField = ({ type, label, name, value, onChange, onFocus, placeholder, fullWidth, required, errorText }) => {
  const classes = useStyles()

  return (
    <div className={classes.formControl}>
    <TextField fullWidth={fullWidth} required={required} type={type} label={label} name={name} value={value} onChange={onChange} onFocus={onFocus} placeholder={placeholder} size='small' classes={{ root: classes.root }} />
    {errorText && (<Typography variant='caption' color=''>
      {errorText}
    </Typography>)}
    </div>
  )
}

export default InputField