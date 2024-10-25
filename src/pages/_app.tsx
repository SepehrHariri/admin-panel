// import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import React from "react"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const App: React.FC = ({
  Component, pageProps: { session, ...pageProps }
}) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <CssBaseline />
          <Component {...pageProps}/>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App