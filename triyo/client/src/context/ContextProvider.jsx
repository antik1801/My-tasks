import React, { createContext, useState } from 'react'

export const TitleContext = createContext(null)

const ContextProvider = ({children}) => {
    const [title, setTitle] = useState("Contact Form")
    const contextInfo = {
        title, setTitle
    }
  return (
    <TitleContext.Provider value={contextInfo}>
      {children}
    </TitleContext.Provider>
  )
}

export default ContextProvider
