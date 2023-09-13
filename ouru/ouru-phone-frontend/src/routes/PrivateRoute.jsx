import React, { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <span>Loading</span>
  }
  if (user) {
    return children
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default PrivateRoute
