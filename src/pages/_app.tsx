// import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { CssBaseline } from "@mui/material";

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
