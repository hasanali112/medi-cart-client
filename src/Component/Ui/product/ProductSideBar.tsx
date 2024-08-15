import { Box, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Image from "next/image";
import banner2 from "@/assets/banner-2.jpg";

const ProductSideBar = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "300px",

          border: "1px solid lightgray",
        }}
      >
        <Typography
          component="p"
          fontSize="1.2rem"
          sx={{
            margin: "20px 30px",
          }}
        >
          Filter by Category
          <Box component="span" color="primary.main">
            <HorizontalRuleIcon />
          </Box>
        </Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
      </Box>
      <Box
        sx={{
          width: "300px",
          border: "1px solid lightgray",
          marginTop: "20px",
        }}
      >
        <Typography
          component="p"
          fontSize="1.2rem"
          sx={{
            margin: "20px 30px",
          }}
        >
          Filter by Price
          <Box component="span" color="primary.main">
            <HorizontalRuleIcon />
          </Box>
        </Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
        <Typography>Medicine</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          height: "100%",
        }}
      >
        <Image
          src={banner2}
          alt="banner"
          width={300}
          height={900}
          style={{
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductSideBar;
