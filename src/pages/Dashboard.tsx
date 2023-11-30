import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Container, Stack, Button } from "@mui/material";

export interface IDashboardProps {}

const Dashboard = (props: IDashboardProps) => {
  const gotTo = useNavigate();

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"start"}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?office)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid item sx={{ mt: 22 }}>
          <Container maxWidth="sm" sx={{ backgroundColor: "rgb(0,0,0, 0.3)", padding: 5 }}>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center" onClick={() => gotTo("/")}>
              <Button variant="contained" color="success">
                Wecome to dashboard
              </Button>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
