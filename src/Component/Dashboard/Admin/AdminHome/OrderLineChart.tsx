"use client";

import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Sat", "Sun", "Mon", "Tes", "Wed", "Thu", "Fri"];

const OrderLineChart = () => {
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h1" fontWeight={600}>
        Total Product
      </Typography>
      <LineChart
        width={800}
        height={400}
        series={[
          { data: pData, label: "Trending" },
          { data: uData, label: "New" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </Box>
  );
};

export default OrderLineChart;
