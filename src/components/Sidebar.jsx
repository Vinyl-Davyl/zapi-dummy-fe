import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { Categories } from '../dummy-categories'

const useStyles = makeStyles({
  sidebar: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    margin: '2rem 1rem 0 0',
    '@media screen and (max-width: 1200px)': {
      display: 'none'
    }
  },
  list: {
    width: '100%',
  },
  listItem : {
    width: '100%',
    textTransform: 'capitalize',
    '& a': {
      color: 'var(--base)'
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
      <List dense={true}>
      {Categories.map(category => (
        <ListItem className={classes.listItem} key={category}>
          <Link to={`/api/categories/${category}`}>
            <ListItemText primary={category} />
          </Link>
        </ListItem>
      ))}
      </List>
      <Link className={classes.link} to='/api/categories'>
        View all categories
      </Link>
    </aside>
  )
}

export default Sidebar