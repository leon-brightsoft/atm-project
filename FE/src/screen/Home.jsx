import React, { useState } from "react";
import AddAtmBtn from "../components/actions/AddAtmBtn";
import AddPeopleBtn from "../components/actions/AddPeopleBtn";
import UserActionBtn from "../components/actions/UserActionBtn";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Typography, Container } from "@mui/material";
import { Toaster } from "react-hot-toast";
import ShowAtm from "../components/actions/ShowAtm";
import ShowPeople from "../components/actions/ShowPeople";

function Home() {
  return (
    <Container maxWidth="fixed" className="main_container">
      <Toaster position="top-right" reverseOrder={false} />
      <Grid container spacing={2} className="main_func">
        <Grid item xs className="add_func">
          <div className="btn_add">
            <AddAtmBtn />
          </div>
          <AddPeopleBtn />
        </Grid>
        <Grid item xs className="logout_func">
          <Grid justify="flex-end" className="btn_logout">
            <UserActionBtn />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h5" gutterBottom component="div">
            List ATM
          </Typography>
          <ShowAtm />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" gutterBottom component="div">
            Queue
          </Typography>
          <Box sx={{ overflow: "auto", maxHeight: "80vh" }}>
            <ShowPeople />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
