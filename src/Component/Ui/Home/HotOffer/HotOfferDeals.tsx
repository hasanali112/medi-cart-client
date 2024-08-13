import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import hotdeal from "@/assets/hotdeal.jpg";

const HotOfferDeals = () => {
  return (
    <Box
      my={20}
      sx={{
        backgroundColor: "#f2f6f7",
        width: "100%",
        height: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={hotdeal}
        alt="hotdeal"
        width={400}
        height={500}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          marginLeft: "-100px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          transform: "translateX(50%)",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            component="h1"
            color="primary.main"
            fontWeight={600}
          >
            N95 Facial Covering Mask
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700} my={3}>
            Grade A Safety Masks For
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700} my={3}>
            Sale. Hurry Up!
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          my={3}
          sx={{
            width: "60%",
          }}
        >
          Over 39,000 people work for us in more than 70 countries all over the
          This breadth of global coverage, combined with specialist services
        </Typography>
        <Button>View Details</Button>
      </Box>
    </Box>
  );
};

export default HotOfferDeals;
