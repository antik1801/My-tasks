import React from 'react'
import BannerHomePage from '../../../components/Banner/BannerHomePage'
import ProfileDetails from '../../../components/ProfileDetails/ProfileDetails'

function HomepageLayout() {
  return (
    <div className='min-w-[100vw] relative'>
      {/* bg-banner z-0*/}
        <BannerHomePage/>
        <div className='absolute top-1/2 right-1/2'>
        <ProfileDetails></ProfileDetails>
        </div>
      {/* div - all ingridiance - components - z-10 -position-absooulate*/}
    </div>
  )
}

export default HomepageLayout
