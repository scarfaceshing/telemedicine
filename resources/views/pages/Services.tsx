import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import Banner from '../component/Banner'

const Services: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <Banner
     align='left'
     posy={50}
     image='whatwedo_banner_image_1.png'
     content={[
      'What We Do',
      'The highest standard for pediatric and adult assessment and therapy',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.'
     ]}
    />
    <GetFreeConsultant />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default Services
