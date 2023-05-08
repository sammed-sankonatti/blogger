import { AppBar, Avatar, Button, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import useStyles from './styles'
import {useNavigate, useLocation} from 'react-router-dom' 
import decode from 'jwt-decode'


const Navbar = () => {

    const classes = useStyles()
    let [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const nevigate = useNavigate()
    const location = useLocation()
    user = {
      token : "",
      result : {
        name : "sammed sankonatti"
      } 
    }

    useEffect(()=>{
      const token = user?.token;

      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp *1000 < new Date().getTime()){
          logout()
        }
      }

      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const logout = ()=>{
      dispatch({type : 'LOGOUT'})
      nevigate('/')
      setUser(null)
    }

    const name = ()=>{
      return(
        <p> {user?.result.name} </p>
      )
    }

  return (
    <AppBar className={classes.appBar} position='static' color='inherit' elevation={1}>
        {
          !user ? (
            <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant='h4' align='center' > samsquare 	 </Typography>  {/*&lt; &#47; &gt; */}
        </div>
          ) : (
             <div className={classes.profile} >
               {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
             <Avatar className={classes.purple} alt="" >{`S`}</Avatar> 
             <Typography className={classes.userName} variant="h6">{user?.result.name.split(" ")[0]}</Typography>
             </div>
          )
         
        }
        <div className={classes.toolbar}>
          {
            user ? (
               <div className={classes.profile}>
                {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
            ) :(
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </div>
    </AppBar>
  )
}

export default Navbar