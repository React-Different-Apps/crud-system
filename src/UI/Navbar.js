import {React,Fragment} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';

// import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    return (
    <Fragment>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notify
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>  
    )
}

export default Navbar
