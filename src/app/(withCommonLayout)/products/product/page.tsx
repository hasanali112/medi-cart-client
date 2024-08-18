import { Box, Button, Grid, Stack } from "@mui/material";
import TopRatedCard from "@/Component/Ui/Home/TopRated/TopRatedCard";
import { allProduct } from "@/services/actions/productGet";

const DynamicProduct = async () => {
  const productData = await allProduct();

  return (
    <Box>
      <Stack direction="row" justifyContent="flex-end" mb={4}>
        <Button>Sorted</Button>
      </Stack>
      <Grid container spacing={2}>
        {productData.data.map((product: any) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <TopRatedCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicProduct;
