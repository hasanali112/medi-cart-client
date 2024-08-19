"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MedicationIcon from "@mui/icons-material/Medication";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Person3Icon from "@mui/icons-material/Person3";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PetsIcon from "@mui/icons-material/Pets";

const NavbarDropdown = ({ open }: { open: boolean }) => {
  const dropParent = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
      },
    },
    close: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
      },
    },
  };

  const dropChildren = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div style={{ position: "relative" }}>
      <Typography variant="h6" fontWeight={700} color="#fff">
        Categories
      </Typography>
      <motion.div
        initial="hidden"
        animate={open ? "open" : "close"}
        variants={dropParent}
        style={{
          originY: 0,
          background: "white",
          border: "1px solid lightgray",
          width: "300px",
          height: "320px",
          position: "absolute",
          top: "150%",
          left: "-67%",
          zIndex: 1,
        }}
      >
        <ul
          style={{
            color: "gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            paddingTop: "15px",
          }}
        >
          <li
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span>
              <MedicationIcon />
            </span>
            <span style={{ transform: "translateY(2px)" }}>Medicine</span>
          </li>
          <hr />
          <li
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span>
              <VaccinesIcon />
            </span>{" "}
            <span style={{ transform: "translateY(2px)" }}> Suppliment</span>
          </li>
          <hr />
          <li
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span>
              <Person3Icon />
            </span>{" "}
            <span style={{ transform: "translateY(2px)" }}> Beauty</span>
          </li>
          <hr />
          <li
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span>
              <BreakfastDiningIcon />
            </span>
            <span style={{ transform: "translateY(2px)" }}>
              Food And Suppliment
            </span>
          </li>
          <hr />
          <li
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {" "}
            <span>
              <PetsIcon />
            </span>
            <span style={{ transform: "translateY(2px)" }}>Pet Care</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default NavbarDropdown;
