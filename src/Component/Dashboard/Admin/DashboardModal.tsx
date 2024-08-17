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
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { toast } from "sonner";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface ICategory {
  name: string;
  slug: string;
  categoryType: string;
  thumbnail: string;
}

export default function DashboardModal() {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>();
  const [createCategory] = useCreateCategoryMutation();
  const onSubmit: SubmitHandler<ICategory> = async (data) => {
    try {
      const res = await createCategory(data).unwrap();
      console.log(res);
      if (res?._id) {
        toast.success("Category successfully");
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
      <Button onClick={handleClickOpen}>Create Category</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Different Types of Category for Medi Cart
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
              </Grid>
              <Typography component="p">Category Type</Typography>
              <select
                {...register("categoryType", { required: true })}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="tertiary">Tertiary</option>
              </select>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button type="submit" autoFocus>
              Create
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
