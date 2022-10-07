import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppThemeProviderProps } from "./Theme.types";

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00A17C",
      },
      secondary: {
        main: "#e2456a",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default AppThemeProvider;
