"use client";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data1 = [
  { label: "Admin", value: 4 },
  { label: "User", value: 3 },
];

const UserPeiChart = () => {
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h1" fontWeight={600}>
        Total Users
      </Typography>
      <PieChart
        width={540}
        height={400}
        series={[
          {
            outerRadius: 100,

            data: data1,
          },
        ]}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Box>
  );
};

export default UserPeiChart;
