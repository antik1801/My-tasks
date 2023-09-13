import React from 'react'

const GeneralTitle = ({title}) => {
  return (
    <div className="text-center my-20 font-extrabold  mx-auto">
      <h1 className="text-6xl">
        <span className="animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          {" "}
         {title} </span>
      </h1>
    </div>
  )
}

export default GeneralTitle
