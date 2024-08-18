"use client";

import { useGetUserQuery } from "@/redux/api/userApi";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ManageUser = () => {
  const { data, isLoading } = useGetUserQuery({});

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "role", headerName: "Role", width: 200 },
    { field: "address", headerName: "Address", width: 300 },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" my={3}>
        User Manage
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

export default ManageUser;
