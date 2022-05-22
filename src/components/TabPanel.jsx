import React from 'react'
import {Box, Typography} from '@mui/material'
import PropTypes from 'prop-types'

const TabPanel = ({ children, value, index, ...other}) => {
  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tab-${index}`} {...other} >
        {value === index && (
             <Box>{children}</Box>
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