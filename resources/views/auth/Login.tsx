import React, { Component } from 'react'
import SystemLayout, { Body, Header, Footer } from '../layout/System'
import { Grid, Paper, TextField, Toolbar, Box, FormControlLabel, Button, Checkbox, Container } from '@mui/material'

interface IProps {

}

interface IState {
 username: string;
 password: string;
}

interface IEvent {
 event: {
  target: {
   value: string
  }
 }
}

interface Validator {
 username: string;
 password: string;
};

class Index extends Component<IProps, IState>{

 constructor(props: IProps) {
  super(props)

  this.state = {
   username: '',
   password: ''
  }
 }

 private HandleInput = (event: any): void => {
  const newState = { [event.currentTarget.name]: event.currentTarget.value } as Pick<Validator, keyof Validator>
  this.setState(newState)
 }

 private Authenticate = (event: Event): void => {
  event.preventDefault();

  console.log(this.state.username, this.state.password)
 }

 render() {
  return (
   <>
    <SystemLayout>
     <Header>
      <Toolbar>
       Sandbox
      </Toolbar>
     </Header>
     <Body>
      <Container component="main" maxWidth="xs">
       <Box component="form" onSubmit={(event: any) => this.Authenticate(event)} noValidate sx={{ mt: 1 }}>
        <TextField
         margin="normal"
         required
         fullWidth
         id="username"
         label="Username"
         name="username"
         autoComplete="username"
         autoFocus
         value={this.state.username}
         onChange={this.HandleInput}
        />
        <TextField
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         autoComplete="current-password"
         value={this.state.password}
         onChange={this.HandleInput}
        />
        <FormControlLabel
         control={<Checkbox value="remember" color="primary" />}
         label="Remember me"
        />
        <Button
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}
        >
         Sign In
        </Button>
       </Box>
      </Container>
     </Body>
     <Footer>

     </Footer>
    </SystemLayout>
   </>
  )
 }
}

export default Index
