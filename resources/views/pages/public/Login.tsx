import React, { Component } from 'react'
import { Collapse, Alert, TextField, Toolbar, Box, FormControlLabel, Button, Checkbox, Container, AppBar, Typography } from '@mui/material'
import Http from '../../../api/Api'

interface IProps {
 history?: any;
}

interface IState {
 username: string;
 password: string;
 error: string;
 displayError: boolean;
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

class Login extends Component<IProps, IState>{

 constructor(props: IProps) {
  super(props)

  this.state = {
   username: '',
   password: '',
   error: '',
   displayError: false
  }
 }

 private HandleInput = (event: any): void => {
  const newState = { [event.currentTarget.name]: event.currentTarget.value } as Pick<Validator, keyof Validator>
  this.setState(newState)
 }

 public Authenticate = (event: Event): void => {
  event.preventDefault();

  Http.post('/auth/login', {
   name: this.state.username,
   password: this.state.password
  }).then((res: any) => {
   this.props.history.push('/dashboard')
  }).catch((err) => {
   this.setState({ displayError: true })
   this.setState({ error: err.response.data.message })
  }).finally(() => {
  })
 }

 render() {


  return (
   <>
    <AppBar>
     <Toolbar>
      <Typography>
       Sandbox - Telemedicine App
      </Typography>
     </Toolbar>
    </AppBar>
    <Toolbar />
    <main>
     <Container component="main" maxWidth="xs">
      <Collapse in={this.state.displayError}>
       <Alert severity="error" sx={{ my: 2 }} onClose={() => { this.setState({ displayError: false }) }}>
        {this.state.error}
       </Alert>
      </Collapse>

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
    </main>

   </>
  )
 }
}

export default Login
