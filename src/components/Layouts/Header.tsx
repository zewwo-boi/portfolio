import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";

function HeaderLayout({ children }) {
    const [route, setRoute] = useState(""); // Universal state used for triggering animations
    const router = useRouter();

    useEffect(() => {
        setRoute(router.pathname);
    }, []);

    return (
        <>
            <Header route={route} setRoute={setRoute} />
            <main>{React.cloneElement(children, { route, setRoute })}</main>
        </>
    );
}

export default HeaderLayout;
