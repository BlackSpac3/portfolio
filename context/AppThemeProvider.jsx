"use client";

import { ThemeProvider } from "next-themes";

const AppThemeProvider = ({ children }) => {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
export default AppThemeProvider;
