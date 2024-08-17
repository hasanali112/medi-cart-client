"use client";

import CategoryTable from "@/Component/Dashboard/Admin/CategoryTable";
import DashboardModal from "@/Component/Dashboard/Admin/DashboardModal";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Categories = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={10}
      >
        <Typography variant="h4" component="h1" fontWeight={600}>
          Enventory Category
        </Typography>
        <DashboardModal />
      </Stack>
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <CategoryTable />
      </Box>
    </Box>
  );
};

export default Categories;
