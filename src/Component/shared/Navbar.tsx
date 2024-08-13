import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForMobileSerach from "./ForMobileSerach";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <header>
      <Container
        sx={{
          padding: "15px 15px",
        }}
      >
        <Stack
          direction={{ lg: "row", xs: "column", sm: "row" }}
          justifyContent={{
            lg: "space-between",
            xs: "space-around",
            sm: "space-between",
          }}
          alignItems="center"
        >
          <Stack
            direction="row"
            gap={2}
            justifyContent={{ xs: "space-around", lg: "space-around" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MailOutlineIcon
                fontSize="small"
                sx={{
                  color: "primary.main",
                }}
              />
              <Typography component="p" fontSize={{ xs: "13px", lg: "medium" }}>
                medicart@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginLeft: {
                  xs: "8px",
                },
              }}
            >
              <LocationOnIcon
                fontSize="small"
                sx={{
                  color: "primary.main",
                }}
              />
              <Typography
                component="p"
                fontSize={{ xs: "13px", lg: "medium" }}
                fontWeight={500}
              >
                15/A, Nest Tower, NYC
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                lg: "center",
              },
              gap: 3,
              marginTop: {
                xs: "10px",
              },
            }}
          >
            <FacebookIcon
              fontSize="small"
              sx={{
                color: "primary.main",
              }}
            />
            <InstagramIcon
              fontSize="small"
              sx={{
                color: "primary.main",
              }}
            />
            <TwitterIcon
              fontSize="small"
              sx={{
                color: "primary.main",
              }}
            />
          </Box>
        </Stack>
      </Container>
      <hr />
      <Container
        sx={{
          padding: "15px 15px",
        }}
      >
        <Stack
          direction={{ xs: "row", lg: "row", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Medi
              <Box component="span" color="primary.main">
                Cart
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
              borderRadius: "100px",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <TextField
              label="Search field"
              type="search"
              fullWidth={true}
              size="small"
              InputProps={{
                sx: {
                  borderRadius: "100px",
                  boxShadow: 1,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              marginLeft: "40px",
              width: "40%",
              borderRadius: "100px",
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <ForMobileSerach />
          </Box>
          <Box>
            <Button>Login</Button>
          </Box>
        </Stack>
        <Stack
          direction={{ sm: "row" }}
          alignItems={{ sm: "center" }}
          gap={3}
          my={4}
          justifyContent={{ xs: "space-around", sm: "space-between" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: "primary.main",
                color: "#fff",
                padding: "15px 30px",
                width: "100%",
              }}
            >
              <MenuIcon />
              <Typography component="p" color="#fff">
                Categories
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Typography>Home</Typography>
              <Typography>Product</Typography>
              <Typography>About</Typography>
              <Typography>Contact</Typography>
              <Typography>Dashboard</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ShoppingCartIcon />
              <Typography>Your cart</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Box></Box>
    </header>
  );
};

export default Navbar;
