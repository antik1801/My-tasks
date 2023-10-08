import React from 'react'
import "./UsingIframe.css"

const UsingIframe = () => {
  return (
    <div className='fullscreen-iframe-container'>
      <iframe src="https://sensational-scone-857ea2.netlify.app/" frameborder="0"   className="fullscreen-iframe"
        title="Fullscreen Iframe"
        allowFullScreen></iframe>
    </div>
  )
}

export default UsingIframe
