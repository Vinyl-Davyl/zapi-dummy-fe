import React from 'react'
import { Stack, Typography } from '@mui/material'

import { InputField } from './index'

const Endpoints = () => {
  return (
    <Stack direction='column'>
      <Stack width='100%' height='72px' px={1} py={2} style={{ background: 'var(--grey)'}}>
        <InputField placeholder='Search...' />
      </Stack>
      <Stack direction='column' my={1}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography variant='caption' color='success'>
            GET
          </Typography>
          <Typography variant='body1'>
            EndpointOne
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Endpoints