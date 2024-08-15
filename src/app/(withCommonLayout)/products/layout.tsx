import ProductSideBar from "@/Component/Ui/product/ProductSideBar";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container
        sx={{
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        <Stack direction="row" gap={3}>
          <Box>
            <ProductSideBar />
          </Box>
          <Box>{children}</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductLayout;
