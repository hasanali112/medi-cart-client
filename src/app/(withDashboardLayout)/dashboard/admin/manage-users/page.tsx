"use client";

import { useGetUserQuery } from "@/redux/api/userApi";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ManageUser = () => {
  const { data, isLoading } = useGetUserQuery({});

  const columns: GridColDef[] = [
    { field: "_id", headerName: "User ID", width: 250 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "role", headerName: "Role", width: 100 },
    { field: "address", headerName: "Address", width: 200 },
  ];

  return (
    <Box>
      <Typography variant="h5" component="h1" my={3} fontWeight={700}>
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
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default ManageUser;
