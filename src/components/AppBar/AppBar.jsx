import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {
  AppBar, Toolbar, Container, Button
} from '@material-ui/core'

const AppBarComponent = () => {
  const history = useHistory()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Link to="/login">
              <h3>Test Project</h3>
            </Link>
          </Container>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            onClick={() => history.push('/hacker-earth')}
          >
            Hacker
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default AppBarComponent
