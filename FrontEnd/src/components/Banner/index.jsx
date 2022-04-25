import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Banner() {
  return (
    <AppBar position='static' >
      <Toolbar>
        <Typography align='center' sx={{ flexGrow: 1 }}>
          Roadside Assitant Service
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
