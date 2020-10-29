import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 640,
    margin: 'auto',
    border: '1px solid #bdbdbd',
    borderRadius: 5,
    overflow: 'hidden'
  },
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
  },
  body: {
    padding: theme.spacing(3)
  }
}))

const Form = ({ label, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>{label}</div>
      <div className={classes.body}>{children}</div>
    </div>
  )
}

export default Form
