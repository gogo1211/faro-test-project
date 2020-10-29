import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, InputAdornment, IconButton } from '@material-ui/core'
import { ArrowRight, Visibility, VisibilityOff } from '@material-ui/icons'

import useFormInput from '../../hooks/useFormInput'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    transform: 'translate(0, -50%)'
  },
  buttonWrapper: {
    marginTop: 16
  },
  termsAndServices: {
    marginTop: 12,
    fontSize: 12,
    color: '#a09ea2',
    '& span': {
      fontWeight: 'bold',
      color: '#6dc1df'
    }
  }
})

const Login = () => {
  const classes = useStyles()
  const firstName = useFormInput('')
  const lastName = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')
  const [showPassword, setShowPassword] = useState(false)

  const onClaim = () => {
    if (!/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/g.test(firstName.value)) {
      firstName.setError(true)
    }
    if (!/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/g.test(lastName.value)) {
      lastName.setError(true)
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
        email.value
      )
    ) {
      email.setError(true)
    }
    if (password.value.length < 8 || !/^[\w]*$/g.test(password.value)) {
      password.setError(true)
    }
  }

  return (
    <div className={classes.root}>
      <Form label="Get started today!">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Input
              label="First name"
              value={firstName.value}
              onChange={firstName.onChange}
              error={firstName.error}
              helperText={firstName.error ? 'First name is invalid' : ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="Last name"
              value={lastName.value}
              onChange={lastName.onChange}
              error={lastName.error}
              helperText={lastName.error ? 'Last name is invalid' : ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="Email address"
              value={email.value}
              onChange={email.onChange}
              error={email.error}
              helperText={email.error ? 'Email is invalid' : ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={password.value}
              onChange={password.onChange}
              error={password.error}
              helperText={password.error ? 'Password is invalid' : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.buttonWrapper}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                disableElevation
                onClick={onClaim}
              >
                Claim Your Free Trial <ArrowRight />
              </Button>
              <div className={classes.termsAndServices}>
                You are agreeing to our <span>Terms and Services</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  )
}

export default Login
