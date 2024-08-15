import { Box, Grid } from "@mui/material";

import spray from "@/assets/spray.png";
import spray1 from "@/assets/stethoscope.png";
import TopRatedCard from "@/Component/Ui/Home/TopRated/TopRatedCard";

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

const DynamicProduct = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TopRatedCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicProduct;
