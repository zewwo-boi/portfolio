/** @jsxImportSource @emotion/react */

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Zewwo</title>
                <meta
                    name="description"
                    content="Official website of Zewwo; Hello! My name is Nathaniel, also known as Zewwo. I am an independent software developer located in South Korea. I have a passion for basically everything. Math, science, languages... They are all interesting to me. This website is everything about me(except for my personal information of course!) summed up!"
                />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
