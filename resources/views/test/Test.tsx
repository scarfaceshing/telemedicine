import { Typography, Grid, Button, Link, Toolbar, Stack, Box, Container, InputLabel, NativeSelect, MenuItem, TextField, Select } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import GuestLayout, { Header, Body, Footer } from '../layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import GetFreeConsultant from '../component/GetFreeConsultant'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/styles'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import './Test.scss'
import { fontWeight } from '@mui/system'
import Testimonials from '../component/Testimonials'
import FixedContainer from '../component/FixedContainer'
import Booking from '../component/Booking'
import * as Text from '../component/core/Text'
import { StringMappingType } from 'typescript'

interface ICssObject {
    [key: string]: string | number
}
interface ICss {
    [key: string]: {
        [key: string]: string | number | ICssObject
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#e32129',
        },
    },
    typography: {
        fontFamily: 'Montserrat'
    }
})

const InputSelectBook = styled(Select)((props: any) => ({
    backgroundColor: props.myBackgroundColor,
    '& .MuiSelect-select': {
        width: '500px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },
    '&	.MuiSelect-icon': {
        color: 'black',
        transform: 'rotate(-90deg)',
    },
    '&	.MuiSelect-iconOpen': {
        transform: 'rotate(0deg)',
    }
}))

const TextEllipsis = ({ contentText }: { contentText: string }) => {
    const box: any = useRef(null)
    const text: any = useRef(null)

    const CSS: ICss = {
        style: {
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            width: '500px',
            overflow: 'hidden',
            height: '100px'
        }
    }

    useEffect(() => {
        if (text.current.scrollHeight > box.current.clientHeight) {
            console.log('overflowed')
        } else {
            console.log('none')
        }
    }, [])

    return (
        <FixedContainer justify="center">
            <Grid item xs={10}>
                <Box sx={CSS.style} ref={box}>
                    <Typography ref={text}>
                        {contentText}
                    </Typography>
                </Box>
            </Grid>
        </FixedContainer>
    )
}

class Test extends React.Component {

    render() {

        return (
            <>
                <GuestLayout>
                    <Header>
                        <GuestHeader />
                    </Header>
                    <Body>
                        <Box sx={{ mt: 10 }} />
                        <TextEllipsis contentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi ligula, dapibus a volutpat sit amet, mattis et dui. Nunc porttitor accumsan orci id luctus. Phasellus ipsum metus, tincidunt non rhoncus id, dictum a lectus. Nam sed ipsum a lacus sodales eleifend. Vestibulum lorem felis, rhoncus elementum vestibulum eget, dictum ut velit. Nullam venenatis, elit in suscipit imperdiet, orci purus posuere mauris, quis adipiscing ipsum urna ac quam.`} />
                    </Body>
                    <Footer>
                        <GuestFooter />
                    </Footer>
                </GuestLayout >
            </>
        )
    }
}

export default Test
