import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material"
import { SideBarData } from "../../data/sideBarData"
import { SideGroup } from "./SideGroup"
import './index.css';

type SideBarProps = {
  drawerWidth: number
}

export const SideBar = ({ drawerWidth }: SideBarProps) => {
  const navItems = SideBarData.map(group => {
    const keys = Object.keys(group);
    const groupName = keys[0];
    return {
      groupName,
      routes: group[groupName]
    }
  });

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>Unissant</Typography>
        </Toolbar>
        <Divider />
        <List sx={{pt: 2, marginX: 1}}>
          {
            navItems.map(item =>(
              <SideGroup key={item.groupName} groupName={item.groupName} navItems={item.routes}/>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
