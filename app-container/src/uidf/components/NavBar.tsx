import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../auth';

type navWidth = {
  drawerWidth: number
}

export const NavBar = ({ drawerWidth }: navWidth) => {
  const { logout } = useContext(AuthContext);
  const onLogout = () => {
    localStorage.removeItem('user');
    logout();
  }
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Uidf Dashboard</Typography>
          <IconButton color='error' onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
