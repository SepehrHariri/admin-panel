// import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { CssBaseline, ThemeProvider } from "@mui/material";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
import React from "react"

const App: React.FC = ({
  Component, pageProps: { session, ...pageProps }
}) => {
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