import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import features from "@/assets/11.jpg";
import features1 from "@/assets/12.jpg";
import spray from "@/assets/spray.png";
import spray1 from "@/assets/stethoscope.png";
import TopRatedCard from "../TopRated/TopRatedCard";

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

const FeaturesProducts = () => {
  return (
    <Container
      sx={{
        marginBottom: "100px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          textAlign="center"
        >
          Features Post
        </Typography>
      </Box>
      <Grid container spacing={3} my={3}>
        <Grid item md={3}>
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
              width={100}
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
              width={100}
              style={{
                width: "100%",
                height: "50%",
              }}
            />
          </Box>
        </Grid>
        <Grid item md={9}>
          <Grid
            container
            spacing={3}
            sx={{
              marginLeft: "1px",
            }}
          >
            {productData.map((product, index) => (
              <Grid item md={4} key={index}>
                <TopRatedCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesProducts;
