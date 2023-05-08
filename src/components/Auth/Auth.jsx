import React from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {GoogleLogin} from 'react-google-login'
import useStyles from './styles'
import Input from './Input';
import { useState } from 'react';
import Icon from './Icon';
import {useNavigate} from 'react-router-dom'
import { signIn, signUp } from '../../actions/auth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch()
  const nevigate = useNavigate()


  const handleSubmit = (e) =>{
      e.preventDefault();

      if(isSignUp){
        dispatch(signUp(form,nevigate))
        setIsSignUp(false)
        nevigate('/auth')
      } else {
        dispatch(signIn(form,nevigate))
      }
  }

  const handleChange =(e)=>{
    setForm({...form, [e.target.name] : e.target.value});
  }

  const switchMode = () =>{
    setIsSignUp((prevState)=> !prevState)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      nevigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (err) => {
    console.log(err);
    console.log('Google Sign In was unsuccessful. Try again later');
  }


  return (
    <Container component="main" maxWidth="xs"> 
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'> {isSignUp ? 'SignUp' : 'SignIn'} </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2} >
            {
              isSignUp &&(
              <>
                {/* <TextField label="first Name" name="firstname" handleChange={handleChange} autoFocus xs={6}  />   */}
                <Input label="first Name" name="firstName" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} />
             { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
           <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignUp ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin 
            clientId="800800043238-kolheb49s80m3ap8m3di39hltp0r4kqs.apps.googleusercontent.com"
            render={(renderProps)=>(
              <Button 
                className={classes.googleButton} 
                color="primary"
                fullWidth
                variant='outlined'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                >
                Sign In with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth