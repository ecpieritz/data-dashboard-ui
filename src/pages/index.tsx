import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard/index";
import Header from "../components/Header/Header";
import SideMenu from "../components/Header/SideMenu/SideMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header/>
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
