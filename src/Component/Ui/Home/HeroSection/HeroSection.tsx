import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "@/assets/2.jpg";
import banner1 from "@/assets/1.jpg";
import banner2 from "@/assets/3.jpg";

const HeroSection = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={6} md={7}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { md: "100%", sm: "400px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <Image
                src={banner}
                alt="Banner"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Cover the entire area of the Box
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { md: "35%", xs: "15%", sm: "20%" },
                left: "8%",
              }}
            >
              <Typography
                variant="h6"
                component="h1"
                color="primary.main"
                fontWeight={600}
                sx={{
                  marginBottom: "18px",
                }}
              >
                Up To 50% off Today Only!
              </Typography>
              <Typography
                component="h1"
                color="black"
                sx={{
                  marginTop: "2px",
                  typography: {
                    xs: "h5",
                    sm: "h4",
                    md: "h3",
                  },
                  fontWeight: {
                    xs: 500,
                    sm: 600,
                    md: 600,
                  },
                }}
              >
                Gold Standard
              </Typography>
              <Typography
                component="h1"
                color="black"
                sx={{
                  marginTop: "2px",
                  typography: {
                    xs: "h5",
                    sm: "h4",
                    md: "h3",
                  },
                  fontWeight: {
                    xs: 500,
                    sm: 600,
                    md: 600,
                  },
                }}
              >
                Pre-Workout
              </Typography>
              <Button
                sx={{
                  marginTop: "35px",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} md={5} sx={{ gap: 3 }}>
          <Box
            sx={{
              marginBottom: "14px",
            }}
          >
            <Image
              src={banner1}
              alt="Banner"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Image
            src={banner2}
            alt="Banner"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
