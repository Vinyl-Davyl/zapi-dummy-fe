import React from 'react'
import { Link } from 'react-router-dom'
import {} from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Categories } from '../dummy-categories'

const useStyles = makeStyles({
  sidebar: {
    height: '100%',
    padding: '0.5rem 0.25rem',
    '& ul': {
      listStyleType: 'none',
      '& li': {
        margin: '1rem 0',
        textTransform: 'capitalize',
        '& a': {
          color: 'var(--base)'
        }
      }
    },
    '@media screen and (max-width: 800px)': {
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
      <h3>Categories</h3>
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