import { Box, List, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { UserRole } from "@/type/common";
import { useEffect, useState } from "react";
import { getTokenFormLocalStorage } from "@/services/auth.service";
import { drawerItems } from "@/utils/drawerItem";
import SidebarItem from "./SideBarItem";

const Sidebar = () => {
  const [useRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getTokenFormLocalStorage();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Typography variant="h4" component="h1" fontWeight={600}>
          Medi
          <Box component="span" color="primary.main">
            Cart
          </Box>
        </Typography>
      </Stack>
      <List>
        {drawerItems(useRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
