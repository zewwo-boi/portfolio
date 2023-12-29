import "@/styles/globals.scss";
import Head from "next/head";
import { StrictMode } from "react";

function MyApp({ Component, pageProps, router }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <title>zewwo 🇰🇷</title>
                <meta name="description" content="🎉 zewwo 🎉" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <StrictMode>{getLayout(<Component {...pageProps} key={router.asPath} />)}</StrictMode>
        </>
    );
}

export default MyApp;
