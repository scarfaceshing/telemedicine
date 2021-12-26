import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import { Box, Typography, Grid, Stack, Button, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import FixedContainer from '../component/FixedContainer'
import * as Text from '../component/core/Text'
import './Careers.scss'
import { borderRadius } from '@mui/system'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { styled } from '@mui/material/styles'

interface ICssObject {
    [key: string]: string | number
}
interface ICss {
    [key: string]: {
        [key: string]: string | number | ICssObject
    }
}

const CustomAccordionSummary = styled((props) => (
 <AccordionSummary
  expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#E32129' }} />}
  {...props}
 />
))(({ theme }) => ({ 
 
 '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  transform: 'rotate(90deg)',
 },
 '& .MuiAccordionSummary-content': {
  marginLeft: theme.spacing(1),
 },
}))

const ButtonPrimary = ({ children }: any) => {
 const CSS: ICss = {
  style: {
   py: 1,
   px: 2,
   backgroundColor: '#ffffff',
   borderRadius: '87px',
   color: '#E32129',
   textTransform: 'capitalize',
   fontWeight: '400',
   fontStyle: 'normal',
   fontSize: '16px',
   ':hover': {
    backgroundColor: '#ffffff'
   }
  }
 }

 return (
  <Button sx={CSS.style}>{children}</Button>
 )
}

const Banner = () => {
 const CSS: ICss = {
  wrapper: {
   background: 'linear-gradient(203.28deg, #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%, #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%);',
   height: '554px'
  }
 }

 return (
  <>
   <Box sx={CSS.wrapper}>
    <FixedContainer>
     <div className="careers_banner_image_1"></div>
     <Grid container>
      <Grid item sx={{my: 10}}>
       <Stack>
        <Box sx={{my: 4}}>
         <Text.HeadOne color="secondary" align="left">Come join Us!</Text.HeadOne>
        </Box>
        <Box sx={{ width: '480px', mb: 3}}>
         <Text.ParagraphCustomOne color="secondary" align='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus eu sagittis eu, donec feugiat orci. A ullamcorper sed turpis augue sit commodo. Diam pellentesque dapibus nisi dictum justo. In aliquet bibendum viverra tincidunt massa vel congue facilisis.</Text.ParagraphCustomOne>
        </Box>
        <Box>
         <ButtonPrimary>See Openings.</ButtonPrimary>
        </Box>
       </Stack>
      </Grid>
     </Grid>
    </FixedContainer>
   </Box>
  </>
 )
}

const OurValues = () => {
 return (
  <FixedContainer>
   <Grid container direction="row" justifyContent="center">
    <Grid item>
     <Stack>
      <Box sx={{mt: 10}}>
       <Text.HeadOne bold={false} align='center'>Our Values</Text.HeadOne>
      </Box>
      <Box sx={{width: '700px', mt: 5, mb: 15}}>
       <Text.HeadContent align='center'>
           The Physical Therapy Department will be equipped with the state-of-the-art medical equipment and modalities available, supported by evidence.
       </Text.HeadContent>
      </Box>
     </Stack>
    </Grid>
   </Grid>

   <Grid container direction="row" justifyContent="center">
    <Grid item xs={8}>
     <Grid container direction="row" justifyContent="center" rowSpacing={6} columnSpacing={1}>
      <Grid item xs={6}>
       <Stack spacing={2}>
        <Box>
         <img src="/storage/icons/ant-design_team-outlined.png" />
        </Box>
        <Box>
         <Text.HeadThree align='left'>
            Collaboration
         </Text.HeadThree>
        </Box>
        <Box maxWidth='350px'>
         <Text.ParagraphCustomTwo align='left' color='senary'>
            Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal. 
         </Text.ParagraphCustomTwo>
        </Box>
       </Stack>
      </Grid>
      <Grid item xs={6}>
       <Stack spacing={2}>
        <Box>
         <img src="/storage/icons/healthicons_magnifying-glass.png" />
        </Box>
        <Box>
         <Text.HeadThree align='left'>
        Transparency
         </Text.HeadThree>
        </Box>
        <Box maxWidth='340px'>
         <Text.ParagraphCustomTwo align='left' color='senary'>
            Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.
         </Text.ParagraphCustomTwo>
        </Box>
       </Stack>
      </Grid>
      <Grid item xs={6}>
       <Stack spacing={2}>
        <Box>
         <img src="/storage/icons/fluent_handshake-16-regular.png" />
        </Box>
        <Box>
         <Text.HeadThree align='left'>
          Trust
         </Text.HeadThree>
        </Box>
        <Box maxWidth='340px'>
         <Text.ParagraphCustomTwo align='left' color='senary'>
            Trust will help us foster a positive and productive environment that delivers value to our users and customers.
         </Text.ParagraphCustomTwo>
        </Box>
       </Stack>
      </Grid>
      <Grid item xs={6}>
       <Stack spacing={2}>
        <Box>
         <img src="/storage/icons/fluent_gavel-32-regular.png" />
        </Box>
        <Box>
         <Text.HeadThree align='left'>
         Integrity
         </Text.HeadThree>
        </Box>
        <Box maxWidth='330px'>
         <Text.ParagraphCustomTwo align='left' color='senary'>
        Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.
         </Text.ParagraphCustomTwo>
        </Box>
       </Stack>
      </Grid>
     </Grid>
    </Grid>
   </Grid>
  </FixedContainer>
 )
}

const ComeAndJoinUs = () => {

 const CheckIcon = () => {
  return (
   <Box sx={{mt: 1}}>
    <svg width="24" height="24" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g id="Icon">
      <ellipse id="Oval" opacity="0.15" cx="18.2351" cy="18" rx="18.1765" ry="18" fill="#F19094"/>
      <path id="Icon_2" d="M15.8095 23.7363L10.869 18.873C10.7309 18.7363 10.6619 18.5605 10.6619 18.3457C10.6619 18.1308 10.7309 17.9551 10.869 17.8183L11.9636 16.7637C12.1016 16.6074 12.2742 16.5293 12.4813 16.5293C12.6884 16.5293 12.8708 16.6074 13.0286 16.7637L16.342 20.0449L23.4422 13.0137C23.5999 12.8574 23.7824 12.7793 23.9895 12.7793C24.1966 12.7793 24.3691 12.8574 24.5072 13.0137L25.6018 14.0684C25.7399 14.2051 25.8089 14.3809 25.8089 14.5957C25.8089 14.8105 25.7399 14.9863 25.6018 15.123L16.8745 23.7363C16.7365 23.8926 16.5589 23.9707 16.342 23.9707C16.125 23.9707 15.9475 23.8926 15.8095 23.7363Z" fill="#F19094"/>
     </g>
    </svg>
   </Box>
  )
 }
 
 const CSS: ICss = {
  box1: {
   mt: 20,
   backgroundColor: '#E94C27',
   width: '727.06px',
   height: '500px',
   borderRadius: '32px'
  },
  box2: {
   mt: 10,
   p: 9,
   pt: 12,
   position: 'absolute',
   backgroundColor: '#FFFFFF',
   width: '567.51px',
   height: '483px',
   borderRadius: '32px',
   marginLeft:'500px',
   boxShadow: '-50px 50px 50px rgba(0, 0, 0, 0.05)'
  },
  chip: {
   backgroundColor: '#FDEEEA',
   color: '#E94C27',
   width: '147px'
  },
  check: {
   width: '24.24px',
   height: '24.24px',
   fontSize: '1px',
   backgroundColor: '#FDEEEA',
   color: '#E94C27',
   borderRadius: '100%'
  }
 }

 const Counts = ({ number, subtitle }: {number: number, subtitle: string}) => {
  return (
   <Box>
    <Stack direction="row" spacing={2}>
     <Box>
      <CheckIcon />
     </Box>
     <Box>
      <Stack>
       <Box>
        <Text.HeadCustomOne bold={true} align='left'>
         {number}
        </Text.HeadCustomOne>
       </Box>
       <Box>
        {subtitle}
       </Box>
      </Stack>
     </Box>
    </Stack>
   </Box>
  )
 }

 return (
  <FixedContainer>
   <Box sx={CSS.box1} />
   <Box sx={CSS.box2}>
    <Stack spacing={3}>
     <Box>
      <Chip label='COME JOIN US' sx={CSS.chip} />
     </Box>
     <Box>
      <Text.HeadTwo align='left'>
       Why Work Here
      </Text.HeadTwo>
     </Box>
     <Box maxWidth='454.41px'>
      <Text.ParagraphContent align='left'>
         From year to year we strive to invent the most innovative technology.
      </Text.ParagraphContent>
     </Box>
     <Box>
      <Grid container spacing={5}>
       <Grid item xs={4}>
        <Counts number={3500} subtitle='Visitors' />
       </Grid>
       <Grid item xs={4}>
        <Counts number={36} subtitle='Services' />
       </Grid>
       <Grid item xs={4}>
        <Counts number={30} subtitle='Doctors' />
       </Grid>
       <Grid item xs={4}>
        <Counts number={8} subtitle='Departments' />
       </Grid>
       <Grid item xs={4}>
        <Counts number={6} subtitle='Stages' />
       </Grid>
      </Grid>
     </Box>
    </Stack>
   </Box>
  </FixedContainer>
 )
}

const JobOpenings = () => {
 const [expand, setExpand] = React.useState([false, false, false, false])

 const handleChange = (event: any, target: number) => {
  const array = expand
  const oldValue = expand[target]
  array.splice(target, 1, !oldValue)
  setExpand(array)
 }
   
 return (
  <FixedContainer>
   <Grid container direction="row" justifyContent="center">
    <Grid item>
     <Stack>
      <Box sx={{mt: 10}}>
       <Text.HeadOne bold={false} align='center'>Job Openings</Text.HeadOne>
      </Box>
      <Box sx={{width: '700px', mt: 5, mb: 15}}>
       <Text.HeadContent align='center'>
        The Physical Therapy Department will be equipped with the state-of-the-art medical equipment and modalities available, supported by evidence.
       </Text.HeadContent>
      </Box>
     </Stack>
    </Grid>
   </Grid>
   <Grid container direction="row" justifyContent="center">
    <Grid item>
     <Stack spacing={2}>
      <Box>
       <Accordion expanded={expand[0] === true} onChange={(event) => handleChange(event, 0)}>
        <CustomAccordionSummary>
         <Stack>
          <Text.ParagraphContent color='tertiary' align='left'>Physical Therapist</Text.ParagraphContent>
          <Text.ParagraphCustomTwo color='primary' align='left'>Manila, NCR</Text.ParagraphCustomTwo>
         </Stack>
        </CustomAccordionSummary>
        <AccordionDetails>
         <Typography>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
         sit amet blandit leo lobortis eget.
         </Typography>
        </AccordionDetails>
       </Accordion>
      </Box>
      <Box>
       <Accordion expanded={expand[1] === true} onChange={(event) => handleChange(event, 1)}>
        <CustomAccordionSummary>
         <Stack>
          <Text.ParagraphContent color='tertiary' align='left'>Occupational  Therapist</Text.ParagraphContent>
          <Text.ParagraphCustomTwo color='primary' align='left'>Manila, NCR</Text.ParagraphCustomTwo>
         </Stack>
        </CustomAccordionSummary>
        <AccordionDetails>
         <Typography>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
         sit amet blandit leo lobortis eget.
         </Typography>
        </AccordionDetails>
       </Accordion>
      </Box>
      <Box>
       <Accordion expanded={expand[2] === true} onChange={(event) => handleChange(event, 2)}>
        <CustomAccordionSummary>
         <Stack>
          <Text.ParagraphContent color='tertiary' align='left'>Speech Pathologist</Text.ParagraphContent>
          <Text.ParagraphCustomTwo color='primary' align='left'>Manila, NCR</Text.ParagraphCustomTwo>
         </Stack>
        </CustomAccordionSummary>
        <AccordionDetails>
         <Typography>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
         sit amet blandit leo lobortis eget.
         </Typography>
        </AccordionDetails>
       </Accordion>
      </Box>
      <Box>
       <Accordion expanded={expand[3] === true} onChange={(event) => handleChange(event, 3)}>
        <CustomAccordionSummary>
         <Stack>
          <Text.ParagraphContent color='tertiary' align='left'>Clinic Manager</Text.ParagraphContent>
          <Text.ParagraphCustomTwo color='primary' align='left'>Manila, NCR</Text.ParagraphCustomTwo>
         </Stack>
        </CustomAccordionSummary>
        <AccordionDetails>
         <Typography>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
         sit amet blandit leo lobortis eget.
         </Typography>
        </AccordionDetails>
       </Accordion>
      </Box>
     </Stack>
    </Grid>
   </Grid>
  </FixedContainer>
 )
}

const Careers: FC = () => {
 return (
  <GuestLayout>
   <Header>
    <GuestHeader />
   </Header>
   <Body>
    <Banner />
    <OurValues />
    <ComeAndJoinUs />
    <JobOpenings />
   </Body>
   <Footer>
    <GuestFooter />
   </Footer>
  </GuestLayout>
 )
}

export default Careers
