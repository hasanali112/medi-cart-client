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

import { useForm, SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";

import { useAppSelector } from "@/redux/hooks";
import { useCreateOrderMutation } from "@/redux/api/orderApi";

export interface IUser {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const { products, gradTotal } = useAppSelector((store) => store.cart);
  const [createOrder, { isError }] = useCreateOrderMutation();
  console.log(products);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      contactNumber: values.contactNumber,
      address: values.address,
      totalPrice: gradTotal,
      order: products,
    };
    console.log(data);

    try {
      const res = await createOrder(data);
      console.log(res);
    } catch (err) {
      // Handle error (e.g., show an error message)
      console.error("Order creation failed:", err);
    }
  };

  if (isError) {
    console.log(isError);
  }

  return (
    <Container>
      <Stack
        sx={{
          marginBottom: "50px",
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
                Please Enter Your Shipping Detail
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
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    {...register("contactNumber")}
                  />
                </Grid>
                <Grid item md={12}>
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
                Order
              </Button>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default CheckoutPage;
