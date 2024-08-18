import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetCategoryQuery } from "@/redux/api/categoryApi";

const CategoryTable = () => {
  const { data, isLoading } = useGetCategoryQuery({});

  const columns: GridColDef[] = [
    { field: "name", headerName: "Category Name", width: 200 },
    { field: "slug", headerName: "Slug", width: 300 },
    { field: "categoryType", headerName: "Category Type", width: 200 },
    { field: "thumbnail", headerName: "Thumbnail", width: 300 },
  ];

  return (
    <Box>
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

export default CategoryTable;
