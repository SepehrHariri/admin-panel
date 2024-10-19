import Head from "next/head";
import Dashboard from "@/pages/dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

import Login from "@/components/Login/Login";
import { useSession } from "next-auth/react";
import scss from "./Home.module.css"
import React from "react"


const Home :React.FC = () => {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Admin Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={scss.main}>
          <Header />
          {
            session && (
              <>
                <SideMenu />
                <Dashboard />
              </>
            )
          }
          <Login />
        </main>
        <footer>

        </footer>
    </>
  );
}
export default Home;