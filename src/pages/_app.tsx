import "@/styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, StrictMode } from "react";

type Props = AppProps & {
    Component: {
        getLayout: (page: ReactElement) => ReactElement;
    };
};

function MyApp({ Component, pageProps, router }: Props) {
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
