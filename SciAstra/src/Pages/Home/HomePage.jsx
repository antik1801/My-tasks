import React from 'react'
import PageTitle from '../../miniComponents/titles/PageTitle'
import AllUniversityCards from '../../components/AllUniversityCards'
import MeetMembers from '../../miniComponents/titles/MeetMembers'
import AllMembers from '../../components/AllMembers'
import GeneralTitle from '../../miniComponents/titles/GeneralTitle'
import AllMentorAndAdvisors from '../../components/AllMentorAndAdvisors'
import MentorPagination from '../../miniComponents/paginations/MentorPagination'

const HomePage = () => {
  return (
    <div>
      <PageTitle />
      <AllUniversityCards />
      <MeetMembers />
      <AllMembers />
      <GeneralTitle title="Mentor and Advisors"/>
      <AllMentorAndAdvisors />
    </div>
  )
}

export default HomePage
