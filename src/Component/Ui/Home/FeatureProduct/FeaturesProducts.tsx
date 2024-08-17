import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import features from "@/assets/11.jpg";
import features1 from "@/assets/12.jpg";
import TopRatedCard from "../TopRated/TopRatedCard";
import { allProduct } from "@/services/actions/productGet";

const FeaturesProducts = async () => {
  const productData = await allProduct();
  return (
    <Container
      sx={{
        marginBottom: "100px",
        marginTop: "100px",
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
          Features Post
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "80px",
        }}
      >
        <Grid container spacing={{ sm: 3, xs: 3 }} my={3}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "full",
              }}
            >
              <Image
                src={features}
                alt="features"
                height={100}
                width={500}
                style={{
                  width: "100%",
                  height: "50%",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "full",
                marginTop: "10px",
              }}
            >
              <Image
                src={features1}
                alt="features"
                height={100}
                width={500}
                style={{
                  width: "100%",
                  height: "50%",
                }}
              />
            </Box>
          </Grid>

          <Grid container item xs={12} md={9} lg={9} spacing={3}>
            {productData.data?.map((product: any) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <TopRatedCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesProducts;
