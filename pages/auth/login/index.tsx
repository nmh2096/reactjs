import { Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContainer } from "./style";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {

  const [account, setAccount] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target?.name]: e.target?.value,
    })
  }

  const submit = () => {

  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <div className="login-container">
        <div className="login-form">
          <form action="Login">
            <h1 className="title">Login</h1>
            <div className="form-group">
              <h3>Tên người dùng</h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Tên người dùng"
                name="username"
                value={account.username}
                onChange={onChange}
                fullWidth
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  style: { color: '#fff' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <h3>Mật khẩu</h3>
              <FormControl sx={{ width: 1 }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" className="inputPassword" >Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={account.password}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onChange={onChange}
                  className="inputPassword"
                />
              </FormControl>
            </div>
            <div className="remember-forgot">
              <FormControlLabel required control={<Checkbox />} label="Remember Me" />
              <Link to="/auth/forgot" className="register">Forgot Password</Link>
            </div>
            <div className="group-btn">
              <Button
                variant="contained"
                color="success"
                className="btn"
              >Login</Button>
            </div>
            <div className="go-sign-up">
              <Link to="/auth/register" className="register">Do not have an account? Register</Link>
            </div>
          </form>
        </div>
      </div>
    </LoginContainer >
  )
}
