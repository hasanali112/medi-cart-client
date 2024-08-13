"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export default Providers;
