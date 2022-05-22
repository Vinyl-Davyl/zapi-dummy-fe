import React from 'react'
import {Stack, Typography, Divider} from '@mui/material'

const ApiMetrics = ({popularity, latency, level}) => {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
    <Stack direction='column'>
      <Typography variant='subtitle1' align='left'>Popularity</Typography>
      <Typography variant='h5'>{popularity}/10</Typography>
    </Stack>
    <Divider orientation='vertical' flexItem></Divider>
    <Stack direction='column'>
      <Typography variant='subtitle1'>Latency</Typography>
      <Typography variant='h5'>{latency}ms</Typography>
    </Stack>
    <Divider orientation='vertical' flexItem></Divider>
    <Stack direction='column'>
      <Typography variant='subtitle1'>Service Level</Typography>
      <Typography variant='h5'>{level}%</Typography>
    </Stack>
  </Stack>
  )
}

export default ApiMetrics