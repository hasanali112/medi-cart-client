"use client";

import { useAppSelector } from "@/redux/hooks";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { products, selectedItem, totalPrice, taxRate, gradTotal } =
    useAppSelector((store) => store.cart);

  return (
    <Container
      sx={{
        height: "150vh",
      }}
    >
      <Box>
        <Stack direction="row" gap={10} justifyContent="space-between">
          <Box>
            <Typography variant="h4" component="h1" fontWeight={600} my={3}>
              Your Total Cart Products
            </Typography>
            {products.length ? (
              products?.map((product: any, index: number) => (
                <Box key={index} my={4}>
                  <Stack direction="row" gap={2}>
                    <Box>
                      <Image
                        src={product?.photos[0]}
                        alt="product image"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" component="h1" fontWeight={500}>
                        {product?.name}
                      </Typography>
                      <Typography variant="h5" component="h1" fontWeight={500}>
                        ${product?.price}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))
            ) : (
              <p>There is no cart product</p>
            )}
          </Box>
          <Box>
            <Typography variant="h4" component="h1" fontWeight={600} my={3}>
              Order Summary
            </Typography>
            <Typography variant="h5" component="h1" fontWeight={500} my={3}>
              SelectedItm: {selectedItem}
            </Typography>
            <Typography variant="h5" component="h1" fontWeight={500} my={3}>
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
            <Typography variant="h5" component="h1" fontWeight={500} my={3}>
              Tax Rate: {taxRate}
            </Typography>
            <Typography variant="h5" component="h1" fontWeight={500} my={3}>
              Grand Total: ${gradTotal.toFixed(2)}
            </Typography>
            <Button component={Link} href="/cart/checkout">
              Procced to checkout
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Cart;
