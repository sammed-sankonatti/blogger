import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item  xs={6} sm={half? 6 :12 }>
      <TextField 
        name={name}
        onChange={handleChange}
        required
        variant='outlined'
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        
      />
    </Grid>
  )
}

export default Input