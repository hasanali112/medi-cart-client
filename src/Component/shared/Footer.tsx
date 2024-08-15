import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";
import linkdin from "@/assets/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Stack direction="row" justifyContent="center" gap={4}>
            <Typography component={Link} href="/" color="#fff">
              Product
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              About
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              Blog
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              Contact Us
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              Support and Help Center
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component={Link} href="/" color="#fff">
                Product
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component={Link} href="/" color="#fff">
                About
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component={Link} href="/" color="#fff">
                Blog
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component={Link} href="/" color="#fff">
                Contact Us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component={Link}
                href="/"
                color="#fff"
                textAlign={{ xs: "center" }}
              >
                Support and Help Center
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image src={facebook} alt="facebook" width={30} height={30} />
          <Image src={linkdin} alt="facebook" width={30} height={30} />
          <Image src={instagram} alt="facebook" width={30} height={30} />
          <Image src={twitter} alt="facebook" width={30} height={30} />
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={2}
          py={3}
          alignItems="center"
        >
          <Typography component="p" color="#fff">
            &copy;2024 Medi Cart. All Rights Reservered
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            Medi
            <Box component="span" color="primary.main">
              Cart
            </Box>{" "}
          </Typography>
          <Typography component="p" color="#fff">
            Privacy Policy! Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
