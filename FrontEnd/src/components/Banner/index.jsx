import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Banner() {
  const navigate = useNavigate();

  return (
    <AppBar position='static' >
      <Toolbar>
        <Typography align='center' sx={{ flexGrow: 1 }} onClick={() => navigate("/home")}>
          Roadside Assistant Service
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
