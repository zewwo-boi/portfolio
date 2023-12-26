/**
 * Most route changes are handled here.
 *
 * When the route state changes, it waits for a set amount of time and then changes the route.
 * Simultaneously, the layouts are changed
 */

import MainLayout from "@/components/Layouts/Main";
import { routes } from "@/utils/constants/routes";
import { RouteOptions } from "@/utils/types/Routes";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

function RouteNavigation({ children }) {
    const router = useRouter();
    const [route, setRoute] = useState("/"); // TODO: change to current path
    const [isDefined, setDefined] = useState(false);
    let rendered = useRef(false);

    const routeOptions = new Map<string, RouteOptions>();
    routes.forEach((v) => {
        routeOptions.set(v.route, v.options);
    });

    useEffect(() => {
        if (routeOptions.has(route.toLowerCase())) setDefined(true);
        else setDefined(false);

        let delay = 0;
        if (rendered.current) {
            delay = 200;
            if (window.scrollY !== 0) {
                window.scrollTo(0, 0);
                delay += 300;
            }
        } else rendered.current = true;

        setTimeout(() => {
            router.push(route);
        }, delay);
    }, [route]);

    return (
        <MainLayout
            route={route}
            setRoute={setRoute}
            blob_hidden={isDefined && routeOptions.get(route).blobs.hidden}
            overflow_hidden={isDefined && routeOptions.get(route).blobs.overflow_hidden}>
            {children}
        </MainLayout>
    );
}

export default RouteNavigation;
