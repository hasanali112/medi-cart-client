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

type TParams = {
  params: {
    productId: string;
  };
};

const ProductDetail = ({ params }: TParams) => {
  const product = {
    id: 1,
    name: "Premium Fitness Treadmill",
    price: 999.99,
    futurePrice: 300.99,
    description:
      "This high-end treadmill offers a smooth and quiet operation, perfect for any home gym.",
    metaKey: "Home Fitness, Treadmill, Cardio, Exercise Equipment",
    photos: [spray, spray, spray],
  };

  return (
    <Container sx={{ height: "100vh" }}>
      <Stack direction="row" spacing={3}>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box>
                <Image
                  src={product.photos[0]}
                  alt="prodcut"
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
                  {product.photos.map((photo, index) => (
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
                {product.name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={3} my={3}>
                <Typography
                  variant="h4"
                  color="primary.main"
                  component="h1"
                  fontWeight={700}
                >
                  ${product.price.toFixed(2)}
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
                  ${product.futurePrice}
                </Typography>
              </Stack>
              <Divider />
              <Typography variant="body1" paragraph my={3}>
                Categories: Medicine
              </Typography>
              <Divider />
              <Stack direction="row" spacing={10} alignItems="center" my={3}>
                <Box>
                  <Button variant="outlined">-</Button>{" "}
                  <Box component="span" mx={3}>
                    1
                  </Box>
                  <Button variant="outlined">+</Button>
                </Box>
                <Button
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
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
