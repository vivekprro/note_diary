import React from "react";
import "./LandingPage.css";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LandingPage = () => {
  return (
    <div className="main">
      <h1>Welcome to Note Zipper</h1>
      <p>One safe palce for all notes</p>
      <div className="btns">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Signup</Button>
        </Stack>
      </div>
    </div>
  );
};

export default LandingPage;
