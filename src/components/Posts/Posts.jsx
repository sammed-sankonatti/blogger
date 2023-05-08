import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles'
import { useSelector } from 'react-redux'


const posts = [
  {
  _id : "123",
  selectedFile : "https://i.pinimg.com/564x/d8/20/95/d8209588924377a85965e305401e924d.jpg",
  name : "sammed sankonatti",
  createdAt : "Mon May 08 2023 19:02:01",
  creator : "",
  message : "It was the t20 world cup match between india and pakistan, king kohli was on revenge mode for their previous defeat in 2021 t20 wc.",
  title : "virat's innings",
  tags : ["king","INDvsPAK","82*"],
  likes : [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

},
{
  _id : "123",
  selectedFile : "https://twistagram18.netlify.app/assets/thanos-90fee3b1.jpg",
  name : "sammed sankonatti",
  createdAt : "Mon May 02 2023 19:02:01",
  creator : "",
  message : "Hardest choices required the strongest will!. you could not live with your own failures. where do they bring you. back to correct them!",
  title : "The mad Titan",
  tags : ["Titan", "Thanos", "Endgame"],
  likes : [1,2,3,4,1,2,3,4,5,6,7,8,9]

},
{
  _id : "123",
  selectedFile : "https://twistagram18.netlify.app/assets/kgf_vs_rrr-5b16ad1c.jpg",
  name : "sammed sankonatti",
  createdAt : "Mon April 17 2023 19:02:01",
  creator : "",
  message : "Bangalore vs Chennai is always a high class match. the clash between the two is compared as el-classico of football.",
  title : "King meets a superking!",
  tags : ["RCBvsCSK", "King kohli", "MS Dhoni", "Finisher", "el-classico", "KGFvsRRR"],
  likes : [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

}
]


const Posts = ({setCurrentId}) => {
  // const posts = useSelector((state)=> state.posts)
  const classes = useStyles()
  // console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts