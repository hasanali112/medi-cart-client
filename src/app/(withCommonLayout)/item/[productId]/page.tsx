"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import spray from "@/assets/spray.png";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { discountPriceCalculation } from "@/Component/Ui/Home/TopRated/TopRatedCard";
import TopratedProduct from "@/Component/Ui/SingleProduct/TopratedProduct";

type TParams = {
  params: {
    productId: string;
  };
};

const ProductDetail = ({ params }: TParams) => {
  const [increase, setIncrease] = useState(1);
  const dispatch = useAppDispatch();
  const { data: product, isLoading } = useGetSingleProductQuery(
    params.productId
  );

  const handleDecrease = () => {
    if (increase <= 1) {
      alert("Increase should be at least 1");
    } else {
      setIncrease((pv) => pv - 1);
    }
  };

  const handleCart = (product: any) => {
    const { _id, name, photos, price } = product;
    const productData = { _id, name, photos, price, quantity: increase };
    dispatch(addToCart(productData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const discountPrice = discountPriceCalculation(
    product?.price,
    product?.discount
  );

  return (
    <Container>
      <Stack direction="row" spacing={3} gap={4}>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box>
                <Image
                  src={product?.photos[0]}
                  alt="product"
                  width={420}
                  height={400}
                  style={{
                    width: "480px",
                    height: "400px",
                  }}
                />
              </Box>
              <Box my={1}>
                <Stack direction="row" spacing={1}>
                  {product?.photos.map((photo: string, index: number) => (
                    <Image
                      key={index}
                      src={photo}
                      alt="prodcut"
                      width={125}
                      height={130}
                      style={{
                        width: "121px",
                        height: "120px",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" component="h1" my={1}>
                {product?.name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={3} my={3}>
                <Typography
                  variant="h4"
                  color="primary.main"
                  component="h1"
                  fontWeight={700}
                >
                  ${product?.price.toFixed(2)}
                </Typography>
                <Typography
                  variant="h6"
                  component="h1"
                  color="primary.main"
                  sx={{
                    textDecoration: "line-through",
                  }}
                  fontWeight={500}
                >
                  ${discountPrice}
                </Typography>
              </Stack>
              <Divider />
              <Typography variant="body1" paragraph my={3}>
                Categories: Medicine
              </Typography>
              <Divider />
              <Stack direction="row" spacing={10} alignItems="center" my={3}>
                <Box>
                  <Button onClick={handleDecrease} variant="outlined">
                    -
                  </Button>{" "}
                  <Box component="span" mx={3}>
                    {increase}
                  </Box>
                  <Button
                    onClick={() => setIncrease((pv) => pv + 1)}
                    variant="outlined"
                  >
                    +
                  </Button>
                </Box>
                <Button
                  onClick={() => handleCart(product)}
                  variant="outlined"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  Add to Cart
                </Button>
              </Stack>
              <Divider />
              <Typography
                variant="body1"
                component="span"
                my={3}
                sx={{ width: "40%" }}
              >
                {product?.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box
            sx={{
              border: "1px solid lightgray",
              width: "400px",
              height: "450px",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              fontWeight={600}
              textAlign="center"
              mt={4}
            >
              Top Rated Product
            </Typography>
            <TopratedProduct />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
