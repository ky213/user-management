import React, { useEffect, useState } from "react";
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  Alert,
  LinearProgress,
  Snackbar,
  InputLabel,
} from "@mui/material";

import { IUser } from "src/data/types";
import { createUser } from "src/data/store/reducers/users";

export interface IRegisterPageProps {}

const CreateUserPage = () => {
  const gotTo = useNavigate();
  const {
    register: registerField,
    handleSubmit,
    formState: { errors: fieldErrors, touchedFields },
  } = useForm<IUser>();

  const onSubmit = async (newUser: IUser) => {
    try {
      createUser(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {<LinearProgress />}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Snackbar open={Boolean(true)} autoHideDuration={6000} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Client registerd Sucessfully
          </Alert>
        </Snackbar>
        {
          //@ts-ignore
          //   <Alert severity="error">{error?.data?.message}</Alert>
        }
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create new user
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...registerField("name.first", { required: true })}
                error={Boolean(fieldErrors.name?.first)}
                helperText={Boolean(fieldErrors.name?.first) && "This field is required"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="family-name"
                {...registerField("name.last", { required: true })}
                error={Boolean(fieldErrors.name?.last)}
                helperText={Boolean(fieldErrors.name?.last) && "This field is required"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                {...registerField("email", { pattern: /^\S+@\S+\.\S+$/g })}
                error={Boolean(fieldErrors.email)}
                helperText={Boolean(fieldErrors.email) && "Must be a valid email address."}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateUserPage;
