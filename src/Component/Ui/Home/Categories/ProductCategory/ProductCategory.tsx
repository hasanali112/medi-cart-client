import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const categories = [
  {
    name: "Medicine",
    slug: "medicine",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/G9XfVZV/6.png",
  },
  {
    name: "Suppliment",
    slug: "supplicment",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/RcFQKZM/4.png",
  },
  {
    name: "Beauty",
    slug: "beauty",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/DkZ9GCZ/5.png",
  },
  {
    name: "Food And Suppliment",
    slug: "food",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/6PfM2pp/3.png",
  },
  {
    name: "Medicine",
    slug: "medicine",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/G9XfVZV/6.png",
  },
  {
    name: "Medicine",
    slug: "medicine",
    categoryType: "primary",
    thumbnail: "https://i.ibb.co/G9XfVZV/6.png",
  },
];

const ProductCategory = () => {
  return (
    <Container>
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
          Product Categories
        </Typography>
      </Box>
      <Grid container spacing={2} my={4}>
        {categories.map((category: any, index: number) => (
          <Grid item xs={6} md={2} key={index}>
            <Box
              component="div"
              sx={{
                border: "1px solid lightgray",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "240px",
                borderRadius: "5px",
                ":hover": {
                  boxShadow: 1,
                },
              }}
            >
              <Box>
                <Image
                  src={category.thumbnail}
                  alt="category"
                  width={130}
                  height={130}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h1">
                  {category.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductCategory;
