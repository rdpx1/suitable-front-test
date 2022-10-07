import { useState } from "react";
import { SWRConfig } from "swr";
import "./App.css";
import ComponentPage from "./components/pages/ComponentPage/ComponentPage";
import useFetch from "./hooks/fetch/useFetch";
import AppThemeProvider from "./Theme";

const App = () => {
  const { callFetch } = useFetch();
  const [theme, setTheme] = useState({lightTheme: true})

  return (
    <>
      <AppThemeProvider theme={theme}>
        <div className="container-holder">
          <SWRConfig
            value={{
              revalidateOnFocus: false,
              refreshInterval: 0,
              fetcher: (path, method) => callFetch(path, method),
            }}
          >
            <ComponentPage />
          </SWRConfig>
        </div>
      </AppThemeProvider>
    </>
  );
};

export default App;
