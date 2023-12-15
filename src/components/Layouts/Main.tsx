import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";

interface Props {
    children: React.JSX.Element;
    visible?: boolean;
}

function MainLayout({ children, visible }: Props) {
    const [route, setRoute] = useState(""); // Global state used for triggering animations
    const router = useRouter();

    useEffect(() => {
        setRoute(router.pathname);
    }, []);

    useEffect(() => {}, [route]);

    return (
        <>
            {visible && <Header route={route} setRoute={setRoute} />}
            <main>{React.cloneElement(children, { route, setRoute })}</main>
        </>
    );
}

export default MainLayout;
