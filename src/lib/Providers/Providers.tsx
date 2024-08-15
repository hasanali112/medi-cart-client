"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </div>
  );
};

export default Providers;
