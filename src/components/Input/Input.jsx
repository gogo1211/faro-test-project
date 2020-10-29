import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 5
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px'
    },
    '& p': {
      color: 'red',
      fontSize: 10,
      position: 'absolute',
      top: 40,
      marginTop: 5
    }
  }
})(TextField)

const useStyles = makeStyles({
  root: {
    marginBottom: 8
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5a5c68'
  }
})

const Input = ({ label, ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {label && <div className={classes.label}>{label}</div>}
      <CustomTextField variant="outlined" fullWidth {...props} />
    </div>
  )
}

export default Input
