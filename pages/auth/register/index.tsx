import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { DialogLR } from "../../../components";
import { RegisterContainer } from "./style";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

export default function Register() {

  const [account, setAccount] = useState({
    username: '',
    password: '',
    rePassword: '',
    fullname: '',
  })

  const [showPassword, setShowPassword] = useState(false);

  const [showRepassword, setShowRepassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target?.name]: e.target?.value,
    })
  }

  const closeModal = () => {

  }

  const validateRegister = () => {

  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowRepassword = () => setShowRepassword((show) => !show);

  const handleMouseDownRePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <RegisterContainer>
      <div className="register-container">
        <div className="login-form">
          <form action="Register">
            <h2 className="title">Register</h2>
            <div className="form-group">
              <h3 className="title-input">Tên người dùng</h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Tên người dùng"
                name="username"
                value={account.username}
                onChange={handleChange}
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
              <h3 className="title-input">Tên</h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Tên"
                name="fullname"
                value={account.fullname}
                onChange={handleChange}
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
              <h3 className="title-input">Mật khẩu</h3>
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
                  onChange={handleChange}
                  className="inputPassword"
                />
              </FormControl>
              <h3 className="title-input">Xác nhận mật khẩu</h3>
              <FormControl sx={{ width: 1 }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" className="inputPassword" >Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showRepassword ? 'text' : 'password'}
                  value={account.rePassword}
                  name="rePassword"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRepassword}
                        onMouseDown={handleMouseDownRePassword}
                        edge="end"
                      >
                        {showRepassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onChange={handleChange}
                  className="inputPassword"
                />
              </FormControl>
              {/* <TextField
                id="outlined-basic"
                variant="outlined"
                label="Xác nhận mật khẩu"
                type="password"
                name="rePassword"
                value={account.rePassword}
                onChange={handleChange}
                fullWidth /> */}
            </div>
            <div className="group-btn">
              <Button variant="contained" color="error" onClick={closeModal} >Cancel</Button>
              <Button variant="contained" color="success" onClick={validateRegister} >Register</Button>
            </div>
            <div className="go-sign-up">
              <Link to="/auth/login" className="login">Bạn đã có tài khoản?</Link>
            </div>
          </form>
        </div>
      </div>
    </RegisterContainer>
  )
}
