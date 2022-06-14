import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Categories } from '../dummy-categories'

const useStyles = makeStyles({
  sidebar: {
    width: '30%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    margin: '2rem 1rem 0 0',
    '& ul': {
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      listStyleType: 'none',
      '& li': {
        width: '100%',
        margin: '0.5rem 0',
        textTransform: 'capitalize',
        '& a': {
          color: 'var(--base)'
        }
      }
    },
    '@media screen and (max-width: 1200px)': {
      display: 'none'
    }
  },
  link: {
    color: 'var(--mid)',
  }
})

const Sidebar = () => {
  const classes = useStyles()

  return (
    <aside className={classes.sidebar}>
      <Typography variant='h5'>
        Categories
      </Typography>
      <ul>
      {Categories.map(category => (
        <li key={category}>
          <Link to={`/api/categories/${category}`}>
            {category}
          </Link>
        </li>
      ))}
      </ul>
      <Link className={classes.link} to='/api/categories'>
        View all categories
      </Link>
    </aside>
  )
}

export default Sidebar