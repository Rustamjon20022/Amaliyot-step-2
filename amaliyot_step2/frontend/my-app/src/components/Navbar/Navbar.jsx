import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <div>
      <div style={{ padding: 8 }}>
        <AppBar position="static" sx={{ background: "white" }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "1.5%",
                  width: "70px",
                  textAlign: "center",
                }}
                to="/"
              >
                Savdo
              </NavLink>

              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "1.5%",
                  width: "70px",
                  textAlign: "center",
                }}
                to="/mahsulotlar"
              >
                Mahsulotlar
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "1.5%",
                  width: "70px",
                  textAlign: "center",
                }}
                to="savatcha"
              >
                Savatcha
              </NavLink>
            </Box>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
