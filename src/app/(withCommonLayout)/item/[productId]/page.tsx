"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { discountPriceCalculation } from "@/Component/Ui/Home/TopRated/TopRatedCard";
import TopratedProduct from "@/Component/Ui/SingleProduct/TopratedProduct";
import discount from "@/assets/productDetail.jpg";
import SingleProductReview from "@/Component/Ui/Review/SingleProductReview";

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

  const [priceSet, setPriceSet] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (product) {
      setPriceSet(product.price.toFixed(2));
    }
  }, [product]);

  const handleDecrease = () => {
    if (increase <= 1) {
      alert("Increase should be at least 1");
    } else {
      setIncrease((pv) => pv - 1);
    }
  };

  const handleCart = (product: any) => {
    const { _id, name, photos } = product;
    const productData = {
      _id,
      name,
      photos,
      price: priceSet,
      quantity: increase,
    };
    dispatch(addToCart(productData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const discountPrice = discountPriceCalculation(
    product?.price,
    product?.discount
  );

  const handleSetPrice = (newPrice: number) => {
    priceSet === product?.price.toFixed(2)
      ? setPriceSet(newPrice)
      : setPriceSet(product?.price.toFixed(2));
  };

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
                  ${priceSet}
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
                </Typography>
              </Stack>
              <Divider />
              <Typography variant="body1" paragraph my={3}>
                Categories: Medicine
              </Typography>
              <Divider />
              <Stack direction="row" spacing={4} alignItems="center" my={3}>
                <Typography variant="body1" paragraph my={3}>
                  Select type :
                </Typography>
                <Box>
                  <Button
                    onClick={() => handleSetPrice(product?.variant?.price)}
                    variant="outlined"
                  >
                    {product?.variant?.name}
                  </Button>{" "}
                  {/* <Button
                    onClick={() => setIncrease((pv) => pv + 1)}
                    variant="outlined"
                  >
                    6
                  </Button> */}
                </Box>
              </Stack>
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
      <Stack direction="row" justifyContent="space-between" my={3}>
        <Box
          sx={{
            width: "900px",
          }}
        >
          <Typography variant="h5" component="h1" fontWeight={500}>
            Product Description
          </Typography>
          <Divider
            sx={{
              my: 3,
            }}
          />
          <Typography
            variant="body1"
            component="span"
            sx={{ width: "40%" }}
            mt={4}
          >
            {product?.description}
          </Typography>
        </Box>
        <Box>
          <Image src={discount} alt="Discount" width={400} height={450} />
        </Box>
      </Stack>
      <Box>
        <SingleProductReview reviews={product?.reviews} />
      </Box>
    </Container>
  );
};

export default ProductDetail;
