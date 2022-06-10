import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const Accordion = ({ title, children}) => {
  const [toggled, setToggled] = useState(false)

  const toggleAccordion = () => {
    setToggled(!toggled)
  }

  return (
    <>
    <div className={`accordion_header ${toggled ? 'active' : ' '}`} onClick={toggleAccordion}>
      <Typography variant='body1'>
        {title}
      </Typography>
      <IconButton>
        <ExpandMore />
      </IconButton>
    </div>
    {toggled && (
      <div className='accordion_body'>
        {children}
      </div>
    )}
    </>
  )
}

export default Accordion