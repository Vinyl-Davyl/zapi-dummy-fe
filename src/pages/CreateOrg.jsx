import React, {useState} from 'react'
import { Stack, Typography, Button, MenuItem, Select} from '@mui/material'
import {makeStyles} from '@mui/styles'

import { InputField } from '../components'

const useStyles = makeStyles({
  form: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'left'
  },
  formControl: {
    width: '100%'
  }
})

const CreateOrg = () => {
  const [value, setValue] = useState(' ')
  const classes = useStyles()
 

return (
    <Stack direction ='column'>
      <Stack direction='column' my={2}>
        <Typography variant='h5'>Create Your Organization</Typography>
        <Typography variant='body1'>Organization accounts allow your team to manage your API usage both internally and externally.</Typography>
      </Stack>
      <form className={classes.form}>
        <Stack direction='column' my={2}>
            <div>
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
          <Stack direction='row' mx={2} width={155}>
              <Select style={{ width:'100%', height:'43px'}} value={value} onChange={(e) => setValue(e.target.value)} fullWidth>
                <MenuItem value=' '>Role</MenuItem>
                <MenuItem value='Developer'>Developer</MenuItem>
                <MenuItem value='Admin'>Admin</MenuItem>
              </Select>
          </Stack>
        </Stack>
        <Stack direction='column' my={2}>
          <div>
            <InputField type= 'text' label= 'Role at the organization' placeholder='Your role at the organization (Optional)' id='halfWidth'/>
          </div>
        </Stack>
          <Button style={{width:'15%', height:'45px'}} type='submit' variant='contained'>
          Confirm &amp; Continue
          </Button>
      </form>
  </Stack>
  )
}

export default CreateOrg