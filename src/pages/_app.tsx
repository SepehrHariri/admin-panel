import { SessionProvider } from "next-auth/react"
import { CssBaseline, IconButton, ThemeProvider, useTheme, createTheme } from "@mui/material";
import React from "react"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const App = ({
  Component, pageProps: { session, ...pageProps }
}) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode:"light"|"dark") => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
    
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
        [mode],
    );
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