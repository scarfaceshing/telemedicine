import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import WhatWeDo from '../component/WhatWeDo'

const Services: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <WhatWeDo />
    <GetFreeConsultant />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default Services
