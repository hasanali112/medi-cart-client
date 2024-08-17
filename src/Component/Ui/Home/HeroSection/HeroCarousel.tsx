"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HeroCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const images = [
    {
      url: "https://i.ibb.co/R4GyPcQ/2.jpg",
    },
    {
      url: "https://i.ibb.co/vwL3yhx/banner1.jpg",
    },
    {
      url: "https://i.ibb.co/QpWKj7k/banner2.jpg",
    },
  ];

  useEffect(() => {
    const hideTextTimeout = setTimeout(() => setShowText(false), 9900);

    const interval = setInterval(() => {
      const nextIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(nextIndex);
      setShowText(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTextTimeout);
    };
  }, [imageIndex]);

  const parentTitle = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "360px",
            sm: "420px",
            lg: "570px",
            xl: "570px",
          },
          width: "100%",
        }}
      >
        <motion.div
          id="banner-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={imageIndex}
          style={{
            backgroundImage: `url(${images[imageIndex].url})`,
            objectFit: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />

        {showText && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={parentTitle}
            style={{
              position: "absolute",
              top: "30%",
              left: "10%",
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
          </motion.div>
        )}
      </Box>
    </>
  );
};

export default HeroCarousel;
