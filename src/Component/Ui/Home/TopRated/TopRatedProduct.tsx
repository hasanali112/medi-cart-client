import { Box, Container, Grid, Typography } from "@mui/material";
import TopRatedCard from "./TopRatedCard";
import { allProduct } from "@/services/actions/productGet";

const TopRatedProduct = async () => {
  const productData = await allProduct();
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
          fontSize={{
            xs: "1.5rem",
            sm: "2rem",
          }}
        >
          Trending Products
        </Typography>
      </Box>
      <Grid container spacing={2} my={6}>
        {productData?.data?.map((product: any) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <TopRatedCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopRatedProduct;
