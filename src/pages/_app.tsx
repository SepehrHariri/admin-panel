import { SessionProvider } from "next-auth/react"
import { CssBaseline, IconButton, ThemeProvider, useTheme, createTheme } from "@mui/material";
import React from "react"
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box"

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const App = ({
  Component, pageProps: { session, ...pageProps }
}) => {
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  // const ToggleColorMode = () => {
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
  // }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <CssBaseline />
            <Box 
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
              }}
            >
              {theme.palette.mode} mode
              <IconButton sx={{ ml: 1 }} onclick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          <Component {...pageProps}/>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App