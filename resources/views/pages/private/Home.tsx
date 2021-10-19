import React, { Component } from 'react'
import Http from '../../../api/Api'
import { removeToken, getToken } from '../../../js/Cookie'
import SystemLayout, { Header, Body, Footer } from '../../layout/System'
import { Toolbar } from '@mui/material'

interface IProps {
 history: any;
}
interface IState {
}

export class Home extends Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)
 }

 componentDidMount() {

  if (getToken()) {
   Http.post('auth/guard/check-auth', {}).then((res) => {
    console.log(res)
   })
  } else {
   this.props.history.push('/login')
  }
 }

 private getUserInfo = (): void => {
  Http.post('auth/guard/me', {}).then((res) => {
   console.log(res);
  })
 }

 private logout = (): void => {
  Http.post('auth/guard/logout', {}).then((res) => {
   this.props.history.push('/login')
   removeToken()
  })
 }

 render() {
  return (
   <SystemLayout>
    <Header>
     <Toolbar>
      System
     </Toolbar>
    </Header>
    <Body>
     <div>
      <button onClick={() => this.getUserInfo()}>Check Session</button>
     </div>
     <div>
      <button onClick={() => this.logout()}>Logout</button>
     </div>
    </Body>
    <Footer>
    </Footer>
   </SystemLayout>
  )
 }
}

export default Home
