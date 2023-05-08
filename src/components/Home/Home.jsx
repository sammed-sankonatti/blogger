import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'

const Home = () => {

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch, currentId])

  return (
    <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={0}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home