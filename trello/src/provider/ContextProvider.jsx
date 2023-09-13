import React, { createContext, useEffect } from 'react'

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

    const value = {}

    useEffect(()=>{
        
    },[])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider
