import React, { useState } from 'react'
import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'

import InputField from './InputField'

const useStyles = makeStyles({
  overlay: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(111, 126, 140, 0.2)',
    backdropFilter: 'blur(2px)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2
  },
  card: {
    width: '60%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '8rem',
    padding: '0.5rem 1rem',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    }
  },
  output: {
    width: '95%',
    height: '100%',
    overflowX: 'scroll',
  }
})

const Search = ({ closeModal }) => {
  const [query, setQuery] = useState('')
  const classes = useStyles()

  return (
    <div className={classes.overlay} onClick={closeModal}>
      <Card className={classes.card} onClick={(e) => e.stopPropagation()}>
        <InputField fullWidth type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' />
        <div className={classes.output}>
          <h1>{query}</h1>
        </div>
      </Card>
    </div>
  )
}

export default Search