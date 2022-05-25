import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Banner({ dashboard = false, id = null, to=null }) {
  const navigate = useNavigate();

  const toDashBoard = () => {
    navigate(`/${to}`, { state: { id } });
  }

  return (
    <AppBar position='static' >
      <Toolbar>
        {dashboard ? <DashboardIcon onClick={toDashBoard} /> : <Typography />}
        <Typography align='center' sx={{ flexGrow: 1 }} onClick={() => navigate("/home")}>
          Roadside Assistant Service
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
