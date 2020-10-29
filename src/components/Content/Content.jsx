import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 64px)'
  }
})

const Content = ({ children }) => {
  const classes = useStyles()
  return (
    <Container>
      <div className={classes.root}>{children}</div>
    </Container>
  )
}

export default Content
