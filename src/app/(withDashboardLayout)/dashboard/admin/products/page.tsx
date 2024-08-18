"use client";

import CreateProductModal from "@/Component/Dashboard/Admin/InventoryProduct/CreateProductModal";
import { useGetProductQuery } from "@/redux/api/productApi";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
const Products = () => {
  const { data, isLoading } = useGetProductQuery({});

  const handleDelete = async (id: string) => {
    // try {
    //   const res = await deleteSpecialty(id).unwrap();
    //   if (res?.id) {
    //     toast.success("Specialty deleted successfully!!!");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 220 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "discount", headerName: "Discount", width: 120 },
    { field: "stockStatus", headerName: "Stock Status", width: 120 },
    { field: "productStatus", headerName: "Product Status", width: 120 },

    {
      field: "categories",
      headerName: "Categories",
      width: 120,
      valueGetter: (params) => {
        //@ts-ignore
        return params.name;
      },
    },
    {
      field: "variant",
      headerName: "Variant",
      width: 120,
      valueGetter: (params) => {
        //@ts-ignore
        return params.name;
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" component="h1" my={3}>
          Inventory Total Product
        </Typography>
        <CreateProductModal />
      </Stack>
      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
            columns={columns}
            slots={{
              toolbar: CustomToolbar,
            }}
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
        <Typography variant="h6" component="h2">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default Products;
