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
        height: { xs: "430px", sm: "600px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
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
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "20%" },
          right: { xs: "0%", sm: "15%" },
          left: { xs: "5%" },
          transform: { md: "translateX(50%)" },
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
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            my={3}
            fontSize={{
              xs: "1.8rem",
              sm: "3rem",
            }}
          >
            Grade A Safety Masks For
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            my={3}
            fontSize={{
              xs: "2rem",
              sm: "3rem",
            }}
          >
            Sale. Hurry Up!
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          my={3}
          sx={{
            width: { xs: "90%", sm: "60%" },
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
