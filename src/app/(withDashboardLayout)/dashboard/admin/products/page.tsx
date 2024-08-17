"use client";

import { useGetProductQuery } from "@/redux/api/productApi";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Products = () => {
  const { data, isLoading } = useGetProductQuery({});

  const columns: GridColDef[] = [
    { field: "name", headerName: "name", width: 200 },
    { field: "status", headerName: "status", width: 300 },
    { field: "price", headerName: "price", width: 200 },
    { field: "stockStatus", headerName: "stockStatus", width: 300 },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" my={3}>
        Inventory Total product
      </Typography>
      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default Products;
