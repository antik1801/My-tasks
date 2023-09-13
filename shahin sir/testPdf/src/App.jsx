import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pdf from './components/Pdf'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App() {
  

  return (
    <div className='APP'>
      New APP
      <PDFDownloadLink document={ <Pdf /> } fileName='FORM'>
        {({loading})=>(loading ? <button>Loading Document....</button>:<button>Download</button>)}
      </PDFDownloadLink>
      <Pdf />
      </div>
  )
}

export default App
