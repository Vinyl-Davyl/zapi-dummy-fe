import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { BookmarkBorderOutlined  } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const useStyles = makeStyles({
    paperOuter: {
      width: '300px',
      margin: '1rem 0',
      transition: 'var(--transition)',
      '&:hover': {
        transform: 'Scale(1.03)'
      }
    },
    paperInner: {
      padding: '0.5rem 1rem'
    }
  })


const UserTextbox = ({ id, name, logo, description}) => {
    const classes = useStyles()

    return (
      <div className={classes.paperOuter}>
        <Link to={`/api/${id}`}>
          <Paper elevation={3}>
            <div className={classes.paperInner}>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Avatar src={logo} sx={{ width: 32, height: 32, objectFit: 'contain' }} />
              <BookmarkBorderOutlined />
              </Stack>
              <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='textPrimary' marginY={2}>
                {name || 'API Name'}
              </Typography>
              <LockOutlinedIcon />
              </Stack>
              <Typography variant='subtitle1' color='textSecondary' gutterBottom>
                {description || 'API Description'}
              </Typography>
            </div>
          </Paper>
        </Link>
      </div>
    )
  }

export default UserTextbox