import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Stack, Typography } from '@mui/material'
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
  form: {
    width: '100%',
    padding: '0.5rem 1rem',
  },
  outputDiv: {
    width: '95%',
    height: '100%',
    overflowY: 'scroll',
  },
  result: {
    height: '60px',
    border: '1px solid var(--base)',
    borderRadius: '5px',
  }
})

const Search = ({ closeModal }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const classes = useStyles()

  const searchAPI = async(e) => {
    e.preventDefault()

    try {
    } catch (error) {}
  }

  return (
    <div className={classes.overlay} onClick={closeModal}>
      <Card className={classes.card} onClick={(e) => e.stopPropagation()}>
        <form className={classes.form} onSubmit={searchAPI}>
          <InputField fullWidth type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' />
        </form>
        <div className={classes.outputDiv}>
          {results && results.map(result => (
            <Stack className={classes.result} direction='row' alignItems='center' justifyContent='space-between' p={2} my={2} key={result.id}>
              <Stack direction='column' spacing={1}>
                <Typography variant='subtitle1'>{result.name}</Typography>
                <Typography variant='caption'>{result.description.substring(0, 50)}</Typography>
              </Stack>
              <Link to={`/api/${result.id}`} onClick={closeModal}>
                <Typography variant='caption'>View</Typography>
              </Link>
            </Stack>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Search