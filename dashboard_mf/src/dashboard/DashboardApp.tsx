import { Box, Grid, Typography } from "@mui/material";

type DashboardAppProps = {
  name: string
}

const DashboardApp = ({ name }: DashboardAppProps) => {
  return (
    <Grid
      container
      justifyContent='space-evenly'
      sx={{ backgroundColor: '#ebf0ed', padding: 4 }}
    >
      <Grid item xs={12} justifyContent='left' alignItems='center' marginBottom='48px'>
        <Typography variant='h4' noWrap>Welcome {name}. You are logged in.</Typography>
      </Grid>
      <Grid item
        className="box-shadow"
        xs={12}
        md={6}
        lg={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h6' noWrap># of Domains</Typography>
          <Typography variant='h6' noWrap>50</Typography>
        </Box>
      </Grid>
      <Grid item
        className="box-shadow"
        xs={12}
        md={6}
        lg={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h6' noWrap># of Domains</Typography>
          <Typography variant='h6' noWrap>50</Typography>
        </Box>
      </Grid>
      <Grid item
        className="box-shadow"
        xs={12}
        md={6}
        lg={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h6' noWrap># of Domains</Typography>
          <Typography variant='h6' noWrap>50</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default DashboardApp;