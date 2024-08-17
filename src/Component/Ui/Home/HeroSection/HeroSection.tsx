import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "@/assets/2.jpg";
import banner1 from "@/assets/1.jpg";
import banner2 from "@/assets/3.jpg";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={8}>
          <Box>
            <HeroCarousel />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={4} sx={{ gap: 3 }}>
          <Box
            sx={{
              width: "100%",
              height: "49%",
              marginBottom: "14px",
            }}
          >
            <Image
              src={banner1}
              alt="Banner"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: { sm: "48%", lg: "49%" },
            }}
          >
            <Image
              src={banner2}
              alt="Banner"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
