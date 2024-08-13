import { Box, Container, Grid, Typography } from "@mui/material";
import spray from "@/assets/spray.png";
import spray1 from "@/assets/stethoscope.png";
import TopRatedCard from "./TopRatedCard";

const productData = [
  {
    image: spray,
    title: "Pain Relief Tablets",
    presrntPrice: "12.99",
    futurePrice: "30.98",
    new: true,
  },
  {
    image: spray1,
    title: "Cough Syrup",
    presrntPrice: "17.99",
    futurePrice: "25.98",
    new: false,
  },
  {
    image: spray,
    title: "Pain Relief Tablets",
    presrntPrice: "34.99",
    futurePrice: "67.98",
    new: true,
  },
  {
    image: spray1,
    title: "Cough Syrup",
    presrntPrice: "40.99",
    futurePrice: "50.98",
    new: false,
  },
];

const TopRatedProduct = () => {
  return (
    <Container
      sx={{
        marginTop: "50px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          textAlign="center"
        >
          Trending Products
        </Typography>
      </Box>
      <Grid container spacing={2} my={6}>
        {productData.map((product, index) => (
          <Grid item md={3} key={index}>
            <TopRatedCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopRatedProduct;
