"use client";

import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForMobileSerach from "./ForMobileSerach";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hooks";
import { getTokenFormLocalStorage } from "@/services/auth.service";
import NavbarDropdown from "./Navbarcomponent/NavbarDropdown";
import { useState } from "react";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/Component/Ui/authButton/AuthButton"),
    { ssr: false }
  );
  const [open, setOpen] = useState(false);

  const userInfo = getTokenFormLocalStorage();

  const { products } = useAppSelector((store) => store.cart);

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
          position: "relative",
        }}
      >
        <Stack
          direction={{ xs: "row", lg: "row", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box component={Link} href="/">
            <Typography variant="h4" component="h1" fontWeight={600}>
              Medi
              <Box component="span" color="primary.main">
                Cart
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "40%" },
              maxWidth: "500px",
              borderRadius: "100px",
              display: {
                xs: "none",
                sm: "block",
              },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <TextField
              label="Search here.."
              type="search"
              fullWidth
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
          <Box sx={{ flexShrink: 0 }}>
            <AuthButton />
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
              onClick={() => setOpen(!open)}
              component="button"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: "primary.main",
                color: "#fff",
                padding: "15px 30px",
                width: { xs: "100%", sm: "200px", md: "300px", lg: "300px" },
              }}
            >
              <MenuIcon />
              <NavbarDropdown open={open} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, sm: 2, lg: 7 },
              }}
            >
              <Typography component={Link} href="/" fontWeight={600}>
                Home
              </Typography>
              <Typography
                component={Link}
                href="/products/product"
                fontWeight={600}
              >
                Product
              </Typography>
              <Typography component={Link} href="/" fontWeight={600}>
                About
              </Typography>
              <Typography component={Link} href="/" fontWeight={600}>
                Contact
              </Typography>
              <Typography
                component={Link}
                href={`/dashboard/${userInfo?.role}`}
                fontWeight={600}
              >
                Dashboard
              </Typography>
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
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <ShoppingCartIcon />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "-14px",
                    right: "-5px",
                  }}
                  color="primary.main"
                >
                  {products?.length}
                </Typography>
              </Box>
              <Typography component={Link} href="/cart">
                Your cart
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </header>
  );
};

export default Navbar;
