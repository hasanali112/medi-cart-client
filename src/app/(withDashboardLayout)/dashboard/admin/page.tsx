"use client";

import OrderLineChart from "@/Component/Dashboard/Admin/AdminHome/OrderLineChart";
import ProductBarChart from "@/Component/Dashboard/Admin/AdminHome/ProductBarChart";
import UserPeiChart from "@/Component/Dashboard/Admin/AdminHome/UserPeiChart";
import { Box, Stack, Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" fontWeight={700}>
        Welcome to Admin dashboard
      </Typography>
      <Stack direction="row" my={5} spacing={3}>
        <ProductBarChart />
        <UserPeiChart />
      </Stack>
      <Box>
        <OrderLineChart />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
