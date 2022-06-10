import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const TabPanel = ({ children, className, value, index, ...other}) => {
  return (
    <div className={className} role='tabpanel' hidden={value !== index} id={`simple-tab-${index}`} {...other} >
        {value === index && (
          <Box style={{ padding: '0 0.5rem' }}>{children}</Box>
        )}
    </div>
  )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

export default TabPanel