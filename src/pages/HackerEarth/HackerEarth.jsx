import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Backdrop,
  CircularProgress
} from '@material-ui/core'

import { getHighlyRatedKickstarterProjects } from '../../utils/api'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: '30px 0'
  },
  container: {
    height: '100%',
    maxWidth: 700,
    margin: 'auto'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const HackerEarth = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setLoading(true)
    getHighlyRatedKickstarterProjects()
      .then((res) => setProjects(res))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>S. No.</StyledTableCell>
              <StyledTableCell align="right">Percentage funded</StyledTableCell>
              <StyledTableCell align="right">Amount pledged</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((item) => (
              <StyledTableRow key={item['s.no']}>
                <StyledTableCell component="th" scope="row">
                  {item['s.no']}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item['percentage.funded']}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item['amt.pledged']}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default HackerEarth
