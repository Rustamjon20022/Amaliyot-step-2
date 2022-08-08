import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginPage = () => {
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [print, setPrint] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/api/user").then((res) => {
      setData(res.data);
    });
  }, []);
  const Submit = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].username == username && data[i].password == password) {
        setOpen(false);
      } else {
        setPrint("Hato");
      }
    }
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "679px",
            background: "blue",
          }}
        >
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3nvzSQUJWrq1bZ15VcUt3FYKryqWTvWkgg&usqp=CAU"
              sx={{
                width: 86,
                height: 86,
                position: "absolute",
                marginTop: "90px",
              }}
            />
          </Box>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            container
            spacing={2}
          >
            <Grid
              sx={{
                background: "white",
                border: "1px solid black",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={5}
            >
              <Box sx={{ width: "90%" }}>
                <h1
                  style={{
                    textAlign: "center",
                    marginLeft: "3%",
                    paddingBottom: "40px",
                  }}
                >
                  Login Page
                </h1>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <FormControl
                  sx={{ marginTop: 1, width: "100%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Button
                  onClick={Submit}
                  sx={{
                    width: "100%",
                    marginTop: 4,
                    color: "white",
                    height: "50px",
                    background: "blue",
                    "&:hover": { background: "green" },
                  }}
                >
                  LOGIN
                </Button>
                <p style={{ color: "red", textAlign: "center" }}>{print}</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginPage ;
