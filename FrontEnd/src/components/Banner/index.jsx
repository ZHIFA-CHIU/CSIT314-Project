import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Banner() {
  return (
    <AppBar position='static' >
      <Toolbar>
        <Typography align='center' sx={{ flexGrow: 1 }}>
          Roadside Assistant Service
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
