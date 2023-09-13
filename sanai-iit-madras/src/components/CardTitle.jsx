import React from 'react'

export default function CardTitle({title, button}) {
  return (
    <div className='flex justify-between'>
        <p className='font-popins'>{title}</p>
        <button>{button}</button>
    </div>
  )
}
