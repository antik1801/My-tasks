import React from 'react'
import { Link } from 'react-router-dom'

const CreateContactButton = ({title,target}) => {
  return (
    <Link to={target} className="btn btn-secondary">{title}</Link>
  )
}

export default CreateContactButton
