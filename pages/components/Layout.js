/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CalculeMe</title>
            </Head>
            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}