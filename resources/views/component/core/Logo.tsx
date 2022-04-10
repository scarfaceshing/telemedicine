import React, { FC } from 'react'

interface IProps {}

const Logo:FC<IProps> = () => {
 return (
  <>
   <img style={{ width: '150px', height: '50px' }} src="/storage/images/logo_with_name.png" />
  </>
 )
}

export default Logo