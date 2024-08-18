"use client";

import { Box, Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Image from "next/image";
import banner2 from "@/assets/banner-2.jpg";
import { useGetCategoryQuery } from "@/redux/api/categoryApi";

const ProductSideBar = () => {
  const { data } = useGetCategoryQuery({});

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
          fontSize="1.4rem"
          fontWeight={600}
          sx={{
            margin: "15px 30px",
          }}
        >
          Filter by Category
          <Box component="span" color="primary.main">
            <HorizontalRuleIcon />
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            ml: "15px",
            paddingBottom: "20px",
          }}
        >
          {data?.map((category: any) => (
            <Typography key={category._id}>{category?.name}</Typography>
          ))}
        </Box>
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
          fontSize="1.4rem"
          fontWeight={600}
          sx={{
            margin: "15px 30px",
          }}
        >
          Filter by Price
          <Box component="span" color="primary.main">
            <HorizontalRuleIcon />
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            ml: "15px",
            paddingBottom: "20px",
          }}
        >
          <Typography>$0.00 - $10.00</Typography>
          <Typography>$10.00 - $50.00</Typography>
          <Typography>$50.00 - $100.00</Typography>
          <Typography>$100.00 - $150.00</Typography>
          <Typography>$150.00 - $200.00</Typography>
          <Typography>$200.00 - $250.00</Typography>
          <Typography>$250.00 - $300.00</Typography>
        </Box>
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
