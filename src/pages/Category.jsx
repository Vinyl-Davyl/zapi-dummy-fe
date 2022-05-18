import React from 'react'
import { useParams } from 'react-router-dom'

import { Categories } from '../dummy-categories'

const Category = () => {
  const categoryId = useParams().category
  const apiCategory = Categories.find(category => category === categoryId)

  return (
    <div>
      <h1>{apiCategory}</h1>
    </div>
  )
}

export default Category