import { RouteProps } from "../../data/sideBarData"
import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import { SideNavItem } from "./SideNavItem";

type NavGroupProps = {
  groupName: string,
  navItems: Array<RouteProps>
}

export const SideGroup = ({ groupName, navItems }: NavGroupProps) => {
  return (
    <Box sx={{ pb: 2 }}>
      <Typography
        className="side-bar__section-name"
        variant="body1"
        sx={{ paddingX: 2, fontSize: 12 }}
      >{groupName}</Typography>
      {
        navItems.map(navItem => (
          <ListItem key={navItem.text} disablePadding sx={{ borderRadius: 4 }} className="side-bar__list-item">
            <ListItemButton className="side-bar_btn" sx={{ p: 0 }}>
              <SideNavItem key={navItem.text} text={navItem.text} path={navItem.path} cName={navItem.cName} />
            </ListItemButton>
          </ListItem>
        ))
      }
    </Box>
  )
}
// <ListItem key={text} disablePadding>

//   <ListItemButton>
//     <ListItemIcon>
//       <TurnedInNot />
//     </ListItemIcon>
//     <Grid container>
//       <ListItemText primary={text} />
//       <ListItemText secondary={'loremp epsilum'} />
//     </Grid>
//   </ListItemButton>
// </ListItem>