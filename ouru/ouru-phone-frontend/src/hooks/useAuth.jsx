import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'

function useAuth() {
  const auth = useContext(AuthContext)
  return auth;
}

export default useAuth
