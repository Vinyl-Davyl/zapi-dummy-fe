import React from 'react'
import {Stack, Typography, Divider, Avatar} from '@mui/material'

const ApiDetails = ({name, pricing, isVerified, author, lastUpdated, category, featured, image}) => {
  return (
    <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} alignItems='center'>
    <Avatar src={image} sx={{width: 50, height: 50, margin: '0 1rem'}} />
   <Stack direction='column'>
     <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} spacing={2} alignItems='center'>
       <Typography variant='h5'>{name}</Typography>
       <Typography variant='body1'>{pricing}</Typography>
       <Typography variant='body1'>
           {isVerified ? 'Verified' : 'Not Verified'}
       </Typography>
     </Stack>
     <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} alignItems='center' spacing={1}>
       <Typography variant='subtitle1'>By {author}</Typography>
          <Divider orientation='vertical' flexItem></Divider>
       <Typography variant='subtitle1'>Updated {lastUpdated} ago</Typography>
          <Divider orientation='vertical' flexItem></Divider>
       <Typography variant='subtitle1'>{category}</Typography>
          <Divider orientation='vertical' flexItem></Divider>
       <Typography variant='subtitle1'>Featured in {featured}</Typography>
      </Stack>
    </Stack>
  </Stack>
  )
}

export default ApiDetails