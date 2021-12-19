import React, { FC } from 'react'
import GuestLayout, { Header, Body, Footer } from '@/views/layout/Guest'
import GuestHeader from '../component/partial/GuestHeader'
import GuestFooter from '../component/partial/GuestFooter'
import { Box } from '@mui/material'

interface ICssObject {
	[key: string]: string | number
}
interface ICss {
	[key: string]: {
		[key: string]: string | number | ICssObject
	}
}

const Banner = () => {
	const CSS: ICss = {
		wrapper: {
			background: 'linear-gradient(203.28deg, #9C1D23 -127.58%, #CC1F24 -46.55%, #D11F24 -17.45%, #E74126 44.86%, #EB5D24 120.21%, #F07C23 150.64%);'
		}
	}

	return (
		<>
			<Box sx={CSS.wrapper}>

			</Box>
		</>
	)
}

const Careers: FC = () => {
	return (
		<GuestLayout>
			<Header>
				<GuestHeader />
			</Header>
			<Body>

			</Body>
			<Footer>
				<GuestFooter />
			</Footer>
		</GuestLayout>
	)
}

export default Careers;
