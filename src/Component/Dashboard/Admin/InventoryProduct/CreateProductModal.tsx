"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateProductMutation } from "@/redux/api/productApi";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface IProduct {
  name: string;
  slug: string;
  thumbnail: string;
  imageUrl: string;
  imageUrl1: string;
  imageUrl2: string;
  description: string;
  categories: string;
  price: string;
  discount: string;
  variant: string;
  productStatus: string;
}

export default function CreateProductModal() {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();

  const [createProduct] = useCreateProductMutation();
  const onSubmit: SubmitHandler<IProduct> = async (values) => {
    const data = {
      name: values.name,
      slug: values.slug,
      thumbnail: values.thumbnail,
      photos: [values.imageUrl, values.imageUrl1, values.imageUrl2],
      description: values.description,
      categories: values.categories,
      price: Number(values.price),
      discount: Number(values.discount),
      variant: values.variant,
      stockStatus: true,
      status: "active",
      productStatus: values.productStatus,
    };

    try {
      const res = await createProduct(data).unwrap();
      console.log(res);
      if (res?.name) {
        toast.success("Product created successfully");
        reset();
      }
    } catch (error: any) {
      console.log(error.message);
    }
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Create Product</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Product for Medi Cart
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <Box>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <TextField label="Name" fullWidth {...register("name")} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Slug" fullWidth {...register("slug")} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Thumbnail"
                    type="text"
                    fullWidth
                    {...register("thumbnail")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Product Image"
                    type="text"
                    fullWidth
                    {...register("imageUrl")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Product Image-1"
                    type="text"
                    fullWidth
                    {...register("imageUrl1")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Product Image-2"
                    type="text"
                    fullWidth
                    {...register("imageUrl2")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Description"
                    type="text"
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Categories"
                    type="text"
                    fullWidth
                    {...register("categories")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Price"
                    type="text"
                    fullWidth
                    {...register("price")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Discount"
                    type="text"
                    fullWidth
                    {...register("discount")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Variant"
                    type="text"
                    fullWidth
                    {...register("variant")}
                  />
                </Grid>
              </Grid>
              <Typography component="p"> Product Status</Typography>
              <select
                {...register("productStatus", { required: true })}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
              >
                <option value="New">New</option>
                <option value="Trending">Trending</option>
              </select>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button type="submit" autoFocus>
              Create Product
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
