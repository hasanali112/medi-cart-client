"use client";

import { useAppSelector } from "@/redux/hooks";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

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
        <Stack direction="row" gap={10} justifyContent="space-around">
          <Box>
            <Typography variant="h5" component="h1" fontWeight={600} my={3}>
              Your Total Cart Products
            </Typography>
            {products.length ? (
              products?.map((product: any, index: number) => (
                <Box
                  key={index}
                  my={4}
                  sx={{
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    padding: 1,
                    ":hover": {
                      boxShadow: 1,
                    },
                  }}
                >
                  <Stack direction="row" gap={2}>
                    <Box>
                      <Image
                        src={product?.photos[0]}
                        alt="product image"
                        width={110}
                        height={110}
                        style={{
                          height: "90px",
                          width: "90px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h1" fontWeight={700}>
                        {product?.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        fontWeight={500}
                      >
                        ${product?.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        fontWeight={500}
                      >
                        Quantity: {product?.quantity}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))
            ) : (
              <p>There is no cart product</p>
            )}
          </Box>
          <Box
            sx={{
              border: "1px solid lightgray",
              width: "350px",
              height: "450px",
              ":hover": {
                boxShadow: 1,
              },
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              fontWeight={600}
              my={3}
              textAlign="center"
            >
              Order Summary
            </Typography>
            <Box ml={4}>
              <Typography component="p" fontWeight={500} my={3}>
                SelectedItm: {selectedItem}
              </Typography>
              <Typography component="p" fontWeight={500} my={3}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
              <Typography component="p" fontWeight={500} my={3}>
                Tax Rate: {taxRate}
              </Typography>
              <Typography component="p" fontWeight={500} my={3}>
                Grand Total: ${gradTotal.toFixed(2)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "80px",
                gap: 1,
              }}
            >
              <Button
                component={Link}
                href="/cart/checkout"
                sx={{ width: "80%", bgcolor: "#ff7f00" }}
              >
                <Box component="span" mr={1}>
                  <DeleteIcon />
                </Box>{" "}
                Clear Cart
              </Button>
              <Button
                component={Link}
                href="/cart/checkout"
                sx={{ width: "80%" }}
              >
                <Box component="span" mr={1}>
                  <LocalGroceryStoreIcon />
                </Box>{" "}
                Procced to checkout
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Cart;
