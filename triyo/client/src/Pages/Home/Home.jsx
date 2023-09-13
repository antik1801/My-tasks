import React from 'react'
import CreateContactButton from '../../microComponents/CreateContactButton'
import MessageBox from '../../microComponents/MessageBox'

const Home = () => {
  return (
    <div>
        <div className='mt-2'>
      <CreateContactButton title="Create Contact" target="/createContactForm"/>
        </div>
        <div className='h-96 w-full grid items-center justify-center'>
            <MessageBox />
        </div>
    </div>
  )
}

export default Home
