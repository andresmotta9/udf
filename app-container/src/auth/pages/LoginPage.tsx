import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/index";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login(username, password);

    navigate('/', {
      replace: true
    }); 
  }

  // @ts-ignore
  const { username, password, onInputChange } = useForm({
    username: '',
    password: ''
  })

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="username"
                type="text"
                placeholder="username"
                fullWidth
                name="username"
                value={username}
                onChange={onInputChange} />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange} />
            </Grid>
            <Grid container spacing={0} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button onClick={onLogin} variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>

  )
}
