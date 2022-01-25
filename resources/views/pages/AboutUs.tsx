import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { Box, Typography, Stack, Grid, Button, Avatar, Chip } from '@mui/material'
import FixedContainer from '../component/FixedContainer'
import * as Text from '../component/core/Text'
import './AboutUs.scss'
import TextEllipsis from '../component/core/TextEllipsis'

interface ICssObject {
 [key: string]: string | number
}
interface ICss {
 [key: string]: {
  [key: string]: string | number | ICssObject
 }
}

const ButtonPrimary = ({ children }: { children: any }) => {
 const CSS: ICss = {
  style: {
   padding: '16px 32px',
   borderRadius: '87px',
   textTransform: 'Capitalize'
  }
 }

 return (
  <Button sx={CSS.style} variant="contained">{children}</Button>
 )
}


const ButtonSecondary = ({ children }: { children: any }) => {
 const CSS: ICss = {
  style: {
   backgroundColor: '#ED6925',
   padding: '10px 35px',
   borderRadius: '87px',
   textTransform: 'Capitalize'
  }
 }

 return (
  <Button sx={CSS.style} variant="contained">{children}</Button>
 )
}



const Banner = () => {
 const CSS: ICss = {
  wrapper: {
   background: 'linear-gradient(203.28deg, #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%, #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%)',
   color: '#ffffff',
   py: 12
  },
  subtitle: {
   fontWeight: 400,
   fontStyle: 'normal',
   fontSize: '24px',
   lineHeight: '36px'
  },
  title: {
   fontWeight: 400,
   fontStyle: 'normal',
   fontSize: '48px',
   lineHeight: '58.51px'
  }
 }

 return (
  <Box sx={CSS.wrapper} className="about_us">
   <FixedContainer justify='left'>
    <div className='banner_image'></div>
    <Grid container justifyContent="right">
     <Stack>
      <Box sx={{ width: 481 }}>
       <Typography sx={CSS.subtitle}>
        What We Are
       </Typography>
      </Box>
      <Box sx={{ width: 610, my: 2 }}>
       <Typography sx={CSS.title}>
        The highest standard for pediatric
        and adult assessment
        and therapy
       </Typography>
      </Box>
      <Box sx={{ width: 530 }}>
       <Typography className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.
       </Typography>
      </Box>
     </Stack>
    </Grid>
   </FixedContainer>
  </Box>
 )
}

const TitlePaper = ({ title }: { title?: string }) => {
 const CSS: ICss = {
  title: {
   fontWeight: 400,
   fontSize: '32px',
   display: 'inline-block',
   paddingBottom: '20px',
   position: 'relative',
   marginBottom: '25px',
   '&::before': {
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '1px',
    marginTop: '50px',
    marginLeft: '36%',
    marginRight: 'auto',
    borderBottom: '2px solid red',
    paddingBottom: '20px'
   }
  }
 }

 return (
  <Typography sx={CSS.title}>{title}</Typography>
 )
}

const AboutUsPaper = ({ title, content }: { title?: string, content?: string }) => {
 const CSS: ICss = {
  paper: {
   height: '275px',
   width: '504px',
   boxShadow: '-2px 23px 40px 0px rgba(0,0,0,0.04)',
   py: 8
  },
  content: {
   fontWeight: 'normal',
   fontStyle: 'normal',
   fontSize: '14px',
   lineHeight: '20px'
  }
 }

 return (
  <Box sx={CSS.paper}>
   <FixedContainer justify='center'>
    <TitlePaper title={title} />
    <Typography sx={CSS.content} align='center'>
     {content}
    </Typography>
   </FixedContainer>
  </Box>
 )
}

const MissionVision = () => {

 return (
  <FixedContainer justify='center'>
   <Grid container justifyContent="center" sx={{ mt: 10 }}>
    <Stack direction="row" spacing={7}>
     <AboutUsPaper title={
      'The Mission'
     }
     content={
      `Sandbox is a new generation
       multi-specialty and rehabilitation clinic that focuses in providing a holistic approach to one’s health.
       It aims to provide the highest quality of consultation services in the fields rehabilitation medicine,
       orthopedics, neurology, and developmental pediatrics. As a rehabilitation clinic, it aims to provide
       the highest quality of treatment and other services to its patients using Physical Therapy,
       Occupational Therapy, and Speech Therapy, applying the most recent evidence and practice in
       rehabilitation medicine and utilizing the most advanced technology in healthcare.`
     }
     />
     <AboutUsPaper title={
      'The Vision'
     }
     content={
      'Sandbox Clinic envisions to become the forefront of rehabilitation medicine and center of learning and research in the Philippines.'
     }
     />
    </Stack>
   </Grid>
  </FixedContainer>
 )
}

const TheFounders = () => {
 const FrameImage = () => {
  const CSS: ICss = {
   style: {
    backgroundColor: '#C4C4C4',
    borderRadius: '32px',
    width: '449px',
    height: '449px'
   }
  }

  return (
   <Box sx={CSS.style}></Box>
  )
 }

 return (
  <>
   <FixedContainer>
    <Grid container direction="row" justifyContent="center">
     <Grid item>
      <Stack>
       <Box sx={{ mt: 20 }}>
        <Text.HeadOne bold={false} align='center'>The Founders</Text.HeadOne>
       </Box>
       <Box sx={{ width: '700px', mt: 5, mb: 15 }}>
        <Text.HeadContent align='center'>
         The Physical Therapy Department will be equipped with the state-of-the-art medical equipment and modalities available, supported by evidence.
        </Text.HeadContent>
       </Box>
      </Stack>
     </Grid>
    </Grid>
    <Grid container direction="row" justifyContent="center" rowSpacing={15}>
     <Grid item xs={10}>
      <Stack direction="row" spacing={10}>
       <FrameImage />
       <Box>
        <Stack>
         <Box sx={{ mb: 1 }}>
          <Text.HeadContent align='left' color="tertiary">
           {'Founder & CEO'}
          </Text.HeadContent>
         </Box>
         <Box>
          <Text.HeadTwo align='left'>
           June Nicca Medina
          </Text.HeadTwo>
         </Box>
         <Box sx={{ width: '487px', mt: 2 }}>
          <Text.ParagraphCustomOne align='left' color="quaternary">
           {`June, as she is fondly called, graduated cum
          laude and the salutatorian of her class in De La
          Salle Medical and Health Sciences Institute
          where she took up BS Physical Therapy. She
          served as an Adviser in a review center for 6
          years, before
          co-founding JARD Professional
          Review Solutions, Inc., where she served as
          Chairman of the Board of Directors, and its CEO
          from 2020 until July 2021. June, together with
          some friends, co-founded Sapphire Clinics
          Incorporated in May 2021. She is currently taking
          up her Master's in Business Administration in De
          La Salle University - Manila.`}
          </Text.ParagraphCustomOne>
         </Box>
         <Box sx={{ mt: 3 }}>
          <ButtonPrimary>Learn More</ButtonPrimary>
         </Box>
        </Stack>
       </Box>
      </Stack>
     </Grid>
     <Grid item xs={10}>
      <Stack direction="row" spacing={10}>
       <FrameImage />
       <Box>
        <Stack>
         <Box sx={{ mb: 1 }}>
          <Text.HeadContent align='left' color="tertiary">
           {'Chairman, Sandbox Clinic Rehabilitation Medicine'}
          </Text.HeadContent>
         </Box>
         <Box>
          <Text.HeadTwo align='left'>
           Francis Exequiel M. Laxamana
          </Text.HeadTwo>
         </Box>
         <Box sx={{ width: '487px', mt: 2 }}>
          <Text.ParagraphCustomOne align='left' color="quaternary">
           {`Dr. Laxamana, or Bruce to his friends, took his BS
            Physical Therapy and Doctor of Medicine at the
            University of Santo Tomas. He took his residency
            in Rehabilitation Medicine in St. Luke's Medical
            Center, one of the most, if not the most,
            prestigious hospitals in the country. Bruce,
            together with his team, was awarded First Place
            in Poster Research for their study entitled
            "Speech Teletherapy for a Patient with Parkinson's Diseases in a Developing Country
            during the COVID-19 Pandemic."`
           }
          </Text.ParagraphCustomOne>
         </Box>
         <Box sx={{ mt: 3 }}>
          <ButtonPrimary>Learn More</ButtonPrimary>
         </Box>
        </Stack>
       </Box>
      </Stack>
     </Grid>
    </Grid>
   </FixedContainer>
  </>
 )
}

const TheConsultants = () => {
 const CSS: ICss = {
  style: {
   p: 2,
   width: '287px',
   height: '411px',
   boxShadow: '15px 23px 20px 5px rgba(0,0,0,0.015)',
   borderRadius: '25px'
  }
 }

 const ConsultCards = () => {

  const PhysicalTherapyBadge = () => {
   const CSS: ICss = {
    style: {
     backgroundColor: '#F19094',
     borderRadius: '5px',
     color: '#FFFFFF',
     my: 0.5
    }
   }
   return (
    <Chip label={'Physical Therapy'} sx={CSS.style} />
   )
  }

  const OccupationalTherapyBadge = () => {
   const CSS: ICss = {
    style: {
     backgroundColor: '#F5A121',
     borderRadius: '5px',
     color: '#FFFFFF',
     my: 0.5
    }
   }

   return (
    <Chip label={'Occupational Therapy'} sx={CSS.style} />
   )
  }

  const consultants = [
   {
    name: 'June Nicca Medina',
    skills: () => (<PhysicalTherapyBadge />),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Francis Exequiel Laxamana',
    skills: () => (<OccupationalTherapyBadge />),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Jaira Mitra',
    skills: () => (<>
     <OccupationalTherapyBadge />
     <PhysicalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Jerell Catacutan',
    skills: () => (<>
     <PhysicalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'June Nicca Medina',
    skills: () => (<>
     <PhysicalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Francis Exequiel Laxamana',
    skills: () => (<>
     <OccupationalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Jaira Mitra',
    skills: () => (<>
     <OccupationalTherapyBadge />
     <PhysicalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
   {
    name: 'Jerell Catacutan',
    skills: () => (<>
     <PhysicalTherapyBadge />
    </>),
    patients: '+1600 Patients',
    location: 'Sandbox Clinic / Manila'
   },
  ]

  return (
   <Grid container spacing={2}>
    {consultants.map((item: any, index: number) => (
     <Grid item xs={3} key={index}>
      <Box sx={CSS.style}>
       <Grid container>
        <Grid item xs={12}>
         <Box sx={{ height: '260px' }}>
          <Stack spacing={3}>
           <Box>
            <Avatar />
           </Box>
           <Box>
            <Stack spacing={1}>
             <Box>
              <Text.HeadContent align="left">{item.name}</Text.HeadContent>
             </Box>
             <Box>
              <item.skills />
             </Box>
             <Box>
              <Stack>
               <Text.ParagraphCustomTwo align="left">{item.patients}</Text.ParagraphCustomTwo>
               <Text.ParagraphCustomTwo align="left" color="quaternary">{item.location}</Text.ParagraphCustomTwo>
              </Stack>
             </Box>
            </Stack>
           </Box>
          </Stack>
         </Box>
        </Grid>
        <Grid item xs={12}>
         <Box
          sx={{
           display: 'flex',
           flexWrap: 'wrap',
           alignContent: 'flex-end',
           p: 1,
           m: 1,
           height: '111px'
          }}
         >
          <ButtonSecondary>View Profile</ButtonSecondary>
         </Box>
        </Grid>
       </Grid>
      </Box>
     </Grid>
    ))}
   </Grid>
  )
 }

 const BtnSeeMoreConsultants = ({ children }: { children: any }) => {
  const CSS: ICss = {
   style: {
    fontWeight: 400,
    fontSize: '18px',
    padding: '16px 32px',
    borderRadius: '87px',
    textTransform: 'Capitalize'
   }
  }

  return (
   <Button sx={CSS.style} variant="contained">{children}</Button>
  )
 }

 return (
  <>
   <FixedContainer>
    <Grid container direction="row" justifyContent="center">
     <Grid item>
      <Stack>
       <Box sx={{ mt: 10 }}>
        <Text.HeadOne bold={false} align='center'>The Consultants</Text.HeadOne>
       </Box>
       <Box sx={{ width: '800px', mt: 5, mb: 15 }}>
        <Text.ParagraphContent>
         {'The Physical Therapy Department will be equipped with the state-of-the-art medical equipment and modalities available, supported by evidence.'}
        </Text.ParagraphContent>
       </Box>
      </Stack>
     </Grid>
    </Grid>
    <Grid container direction="row" justifyContent="center">
     <Grid item>
      <Stack>
       <ConsultCards />
      </Stack>
     </Grid>
    </Grid>
    <Grid container direction="row" justifyContent="center" sx={{ mt: 10, mb: 20 }}>
     <Grid item>
      <BtnSeeMoreConsultants>See More Consultants</BtnSeeMoreConsultants>
     </Grid>
    </Grid>
   </FixedContainer>
  </>
 )
}

const AboutUs: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <Banner />
    <MissionVision />
    <TheFounders />
    <TheConsultants />
    <GetFreeConsultant />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default AboutUs
