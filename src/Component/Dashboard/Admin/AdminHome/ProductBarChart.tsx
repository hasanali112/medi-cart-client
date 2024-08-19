"use client";

import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];

const ProductBarChart = () => {
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: 2,
      }}
    >
      <Typography variant="h6" component="h1" fontWeight={600}>
        Purchase & Sales
      </Typography>
      <BarChart
        width={600}
        height={400}
        series={[
          { data: pData, label: "hight sell", id: "pvId" },
          { data: uData, label: "low sell", id: "uvId" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Box>
  );
};

export default ProductBarChart;
