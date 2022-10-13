/** @jsxImportSource @emotion/react */

import "@/styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>zewwo 🇰🇷</title>
                <meta name="description" content="🎉 zewwo 🎉" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
