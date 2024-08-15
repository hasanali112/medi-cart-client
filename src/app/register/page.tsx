"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/actions/registerUser";
import { loginUser } from "@/services/actions/loginUser";
import { getAccessToken } from "@/services/auth.service";

export interface IUser {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = async (values) => {
    try {
      const result = await registerUser(values);
      if (result?.data?.id) {
        toast.success(result?.message);
        const res = await loginUser(values);
        if (res?.token) {
          toast.success("Login success");
          getAccessToken({ accessToken: res?.token });
          router.push("/dashboard");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h4" component="h1" fontWeight={600}>
                Medi
                <Box component="span" color="primary.main">
                  Cart
                </Box>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                User Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    fullWidth={true}
                    {...register("name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    {...register("contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    fullWidth={true}
                    {...register("address")}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
            </form>
            <Typography component="p" fontWeight={300}>
              Do you already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
