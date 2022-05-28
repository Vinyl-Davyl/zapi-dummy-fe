import React, {useState} from 'react'
import { Stack, Typography, Button, Select, MenuItem, FormControl, InputLabel} from '@mui/material'
import {makeStyles} from '@mui/styles'

import { InputField } from '../components'

const useStyles = makeStyles({
  form: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'left'
  },
  formControl: {
    width: '70%'
  }
})

const CreateOrg = () => {
  const classes = useStyles();
  const [value, setValue]= useState('');

  const handleChange=(e)=>{
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <Stack direction ='column'>
      <Stack direction='column' my={2}>
        <Typography variant='h5'>Create Your Organization</Typography>
        <Typography variant='body1'>Organization accounts allow your team to manage your API usage both internally and externally.</Typography>
      </Stack>
      <form className={classes.form}>
        <Stack direction='column' my={2}>
          <div className={classes.formControl}>
             <InputField type= 'text' label= 'Organization Name' placeholder='Org name*'/>
          </div>
        </Stack>
        <Stack direction='row' my={2}>
          <Typography variant='body1'>This business name will own and control this organization account.</Typography>
        </Stack>
        <Stack direction='column' my={2}>
          <div>
            <InputField type= 'text' label= 'Organization Seat' placeholder='Number of seats'/>
          </div>
        </Stack>
        <Stack direction='column' my={2}>
          <Typography variant='body1'>Seats can be added or removed at any time. The first 5 are FREE.</Typography>
        </Stack>
        <Typography variant='subtitle2'>Invite teammates to your new organization</Typography>
        <Stack direction='row' my={3}>
        <Stack direction='row'>
          <div>
            <InputField type= 'text' label= 'Username or Email' placeholder='name@example.com'/>
          </div>
          </Stack>
          <Stack direction='row' mx={2}>
          <div>
            <InputField type= 'text' label= 'Role' placeholder='Role'/>
          </div>
            {/* <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
            <Select value={value} onChange={handleChange}>
              <MenuItem value=''>Role</MenuItem>
              <MenuItem value='developer'>Developer</MenuItem>
              <MenuItem value='admin'>Admin</MenuItem>
            </Select>
            </FormControl> */}
          </Stack>
        </Stack>
        <Stack direction='column' my={2}>
          <div>
            <InputField type= 'text' label= 'Role at the organization' placeholder='Your role at the organization (Optional)' id='halfWidth'/>
          </div>
        </Stack>
         <div>
          <Button type='submit' variant='contained'>
          Confirm &amp; Continue
          </Button>
        </div>
      </form>
  </Stack>
  )
}

export default CreateOrg